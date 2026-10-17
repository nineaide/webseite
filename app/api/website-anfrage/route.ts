import { validateLead, type WebsiteLead } from '../../../lib/lead-input';
import { leadDatabase } from '../../../lib/lead-store';
import { notifyLead } from '../../../lib/lead-notification';

const responseHeaders = {
  'Cache-Control': 'no-store',
  'X-Robots-Tag': 'noindex, nofollow',
};
const json = (body: Record<string, unknown>, status: number) =>
  Response.json(body, { status, headers: responseHeaders });

type ReceivedLead = { payload_hash: string; notification_status: string };
async function deliverNotification(db: D1Database, lead: WebsiteLead) {
  const notification = await notifyLead(lead);
  if (notification === 'pending') return;
  // An identical replay can recover a failed notification. A concurrent failure
  // must never downgrade a successful delivery; Resend deduplicates by request ID.
  try {
    await db
      .prepare(
        'UPDATE website_leads SET notification_status = ?, notification_attempts = notification_attempts + 1 WHERE id = ? AND notification_status != ?',
      )
      .bind(notification, lead.requestId, 'emailed')
      .run();
  } catch {
    /* Receipt was stored before delivery; an exact replay can retry it. */
  }
}

async function readBody(request: Request) {
  const reader = request.body?.getReader();
  if (!reader) return '';
  const chunks: Uint8Array[] = [];
  let length = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      length += value.byteLength;
      if (length > 12000) {
        await reader.cancel();
        throw new RangeError('Die Anfrage ist zu lang.');
      }
      chunks.push(value);
    }
  } finally {
    reader.releaseLock();
  }
  const bytes = new Uint8Array(length);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return new TextDecoder().decode(bytes);
}

export async function POST(request: Request) {
  // This form accepts only same-origin JSON, never cross-site browser submits.
  if (request.headers.get('origin') !== new URL(request.url).origin)
    return json(
      { error: 'Bitte sende die Anfrage direkt über unsere Website.' },
      403,
    );
  if (!request.headers.get('content-type')?.startsWith('application/json'))
    return json({ error: 'Ungültiges Anfrageformat.' }, 415);
  if (Number(request.headers.get('content-length') || 0) > 12000) {
    // Release a rejected upload without buffering an unbounded request body.
    await request.body?.cancel();
    return json({ error: 'Die Anfrage ist zu lang.' }, 413);
  }
  let lead;
  try {
    const raw = await readBody(request);
    lead = validateLead(JSON.parse(raw));
  } catch (error) {
    if (error instanceof RangeError)
      return json({ error: 'Die Anfrage ist zu lang.' }, 413);
    return json(
      {
        error:
          error instanceof SyntaxError
            ? 'Bitte prüfe deine Anfrage.'
            : error instanceof Error
              ? error.message
              : 'Bitte prüfe deine Eingaben.',
      },
      400,
    );
  }
  try {
    const db = leadDatabase();
    const payloadHash = Array.from(
      new Uint8Array(
        await crypto.subtle.digest(
          'SHA-256',
          new TextEncoder().encode(JSON.stringify(lead)),
        ),
      ),
    )
      .map((byte) => byte.toString(16).padStart(2, '0'))
      .join('');
    const existing = await db
      .prepare(
        'SELECT payload_hash, notification_status FROM website_leads WHERE id = ?',
      )
      .bind(lead.requestId)
      .first<ReceivedLead>();
    if (existing) {
      if (existing.payload_hash !== payloadHash)
        return json(
          {
            error:
              'Die Anfrage wurde verändert. Bitte bearbeite ein Feld und sende sie erneut.',
          },
          409,
        );
      if (existing.notification_status !== 'emailed')
        await deliverNotification(db, lead);
      return json({ accepted: true, id: lead.requestId }, 200);
    }
    const since = new Date(Date.now() - 15 * 60 * 1000).toISOString();
    const inserted = await db
      .prepare(
        'INSERT INTO website_leads (id, payload_hash, created_at, name, email, goal, package, website, phone, message, campaign) SELECT ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? WHERE (SELECT COUNT(*) FROM website_leads WHERE email = ? AND created_at > ?) < 3 ON CONFLICT(id) DO NOTHING',
      )
      .bind(
        lead.requestId,
        payloadHash,
        new Date().toISOString(),
        lead.name,
        lead.email,
        lead.goal,
        lead.package,
        lead.website,
        lead.phone,
        lead.message,
        JSON.stringify(lead.campaign),
        lead.email,
        since,
      )
      .run();
    if (!inserted.meta.changes) {
      const concurrent = await db
        .prepare(
          'SELECT payload_hash, notification_status FROM website_leads WHERE id = ?',
        )
        .bind(lead.requestId)
        .first<ReceivedLead>();
      if (!concurrent)
        return json(
          {
            error:
              'Für diese E-Mail-Adresse sind bereits mehrere Anfragen eingegangen. Bitte warte kurz oder schreibe uns direkt.',
          },
          429,
        );
      if (concurrent.payload_hash !== payloadHash)
        return json(
          { error: 'Bitte bearbeite deine Anfrage und versuche es erneut.' },
          409,
        );
      if (concurrent.notification_status !== 'emailed')
        await deliverNotification(db, lead);
      return json({ accepted: true, id: lead.requestId }, 200);
    }
    await deliverNotification(db, lead);
    return json({ accepted: true, id: lead.requestId }, 201);
  } catch {
    return json(
      {
        error:
          'Deine Anfrage konnte noch nicht gespeichert werden. Deine Eingaben bleiben erhalten. Bitte versuche es erneut oder schreibe an anfrage@nineai.de.',
      },
      503,
    );
  }
}

export function GET() {
  return json(
    { error: 'Diese Adresse nimmt ausschließlich Formularanfragen entgegen.' },
    405,
  );
}
