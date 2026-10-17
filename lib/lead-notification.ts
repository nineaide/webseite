import { env } from 'cloudflare:workers';
import { leadRecipient, type WebsiteLead } from './lead-input';

// Optional delivery adapter. Credentials and verified sender are server-only.
// Leads remain in D1 if email is not configured or the provider is unavailable.
export async function notifyLead(
  lead: WebsiteLead,
): Promise<'pending' | 'emailed' | 'failed'> {
  const settings = env as {
    LEAD_RESEND_API_KEY?: string;
    LEAD_EMAIL_FROM?: string;
  };
  if (!settings.LEAD_RESEND_API_KEY || !settings.LEAD_EMAIL_FROM)
    return 'pending';
  if (/[\r\n]/.test(settings.LEAD_EMAIL_FROM)) return 'failed';
  const text = [
    'Neue Website-Anfrage über Nine.ai',
    `Referenz: ${lead.requestId}`,
    `Name: ${lead.name}`,
    `E-Mail: ${lead.email}`,
    `Vorhaben: ${lead.goal}`,
    `Paket: ${lead.package}`,
    `Website: ${lead.website || 'Nicht angegeben'}`,
    `Telefon: ${lead.phone || 'Nicht angegeben'}`,
    '',
    lead.message,
    '',
    'Kampagnenherkunft:',
    JSON.stringify(lead.campaign),
  ].join('\n');
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + settings.LEAD_RESEND_API_KEY,
        'Content-Type': 'application/json',
        'Idempotency-Key': 'website-lead/' + lead.requestId,
      },
      body: JSON.stringify({
        from: settings.LEAD_EMAIL_FROM,
        to: [leadRecipient],
        reply_to: lead.email,
        subject: 'Neue Website-Anfrage · ' + lead.package,
        text,
      }),
      signal: AbortSignal.timeout(7000),
    });
    return response.ok ? 'emailed' : 'failed';
  } catch {
    return 'failed';
  }
}
