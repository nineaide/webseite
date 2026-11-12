// Never derive canonical URLs from an untrusted Host/Forwarded header.
export const siteOrigin = 'https://www.nineai.de';
export const siteIdentity = {
  name: 'Nine.ai',
  email: 'anfrage@nineai.de',
  description:
    'Websites, Web-Apps, Google Ads und Automatisierung für Unternehmen und Privatkunden in Deutschland.',
  logo: '/assets/brand/NineAI-original.svg',
};
export function absoluteUrl(path = '/') {
  return new URL(path, siteOrigin).href;
}
