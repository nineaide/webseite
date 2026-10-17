/* oxlint-disable no-control-regex */
// Reject control characters in untrusted form input before storage or email.
export const leadGoals = ['neu', 'relaunch', 'anfragen'] as const;
export const leadPackages = [
  'nine-start',
  'nine-launch',
  'nine-growth',
  'unsicher',
] as const;
export const leadRecipient = 'anfrage@nineai.de';
export type WebsiteLead = {
  requestId: string;
  goal: string;
  package: string;
  name: string;
  email: string;
  website: string;
  phone: string;
  message: string;
  campaign: Record<string, string>;
};

export function validateLead(input: unknown): WebsiteLead {
  if (!input || typeof input !== 'object' || Array.isArray(input))
    throw new Error('Die Anfrage ist unvollständig.');
  const body = input as Record<string, unknown>;
  const field = (key: string, max: number, required = false) => {
    if (body[key] !== undefined && typeof body[key] !== 'string')
      throw new Error('Bitte prüfe deine Eingaben.');
    const value = ((body[key] || '') as string).trim();
    if (
      (required && !value) ||
      value.length > max ||
      /[\u0000-\u0008\u000b\u000c\u000e-\u001f]/.test(value)
    )
      throw new Error('Bitte prüfe deine Eingaben.');
    return value;
  };
  if (field('fax', 200))
    throw new Error(
      'Die Anfrage konnte nicht verarbeitet werden. Bitte schreibe uns direkt.',
    );
  const requestId = field('requestId', 36, true);
  if (
    !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
      requestId,
    )
  )
    throw new Error('Bitte lade das Formular neu und versuche es noch einmal.');
  const goal = field('goal', 20, true);
  const selectedPackage = field('package', 30, true);
  if (
    !(leadGoals as readonly string[]).includes(goal) ||
    !(leadPackages as readonly string[]).includes(selectedPackage)
  )
    throw new Error(
      'Bitte wähle dein Vorhaben und den passenden Einstieg aus.',
    );
  const name = field('name', 100, true);
  const email = field('email', 200, true).toLowerCase();
  if (name.length < 2 || /[\r\n]/.test(name))
    throw new Error('Bitte ergänze deinen Namen.');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    throw new Error('Bitte prüfe deine E-Mail-Adresse.');
  let website = field('website', 300);
  if (website) {
    try {
      const parsed = new URL(
        website.includes('://') ? website : 'https://' + website,
      );
      if (
        !['https:', 'http:'].includes(parsed.protocol) ||
        !parsed.hostname.includes('.') ||
        parsed.username ||
        parsed.password
      )
        throw new Error();
      website = parsed.href;
    } catch {
      throw new Error(
        'Bitte prüfe die Website-Adresse oder lass das optionale Feld frei.',
      );
    }
  }
  const campaign: Record<string, string> = {};
  const campaignInput =
    body.campaign && typeof body.campaign === 'object'
      ? (body.campaign as Record<string, unknown>)
      : {};
  for (const key of [
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_content',
    'utm_term',
  ]) {
    if (typeof campaignInput[key] === 'string')
      campaign[key] = campaignInput[key]
        .replace(/[\u0000-\u001f]/g, '')
        .slice(0, 160);
  }
  return {
    requestId,
    goal,
    package: selectedPackage,
    name,
    email,
    website,
    phone: field('phone', 40),
    message: field('message', 2000),
    campaign,
  };
}
