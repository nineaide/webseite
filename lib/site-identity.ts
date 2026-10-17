// Change only after the chosen production domain serves this site over HTTPS.
// Never derive canonical URLs from an untrusted Host/Forwarded header.
export const siteOrigin = 'https://nine-ai-studio.serhad1999.chatgpt.site';
export const siteIdentity = {
  name: 'Nine.ai',
  email: 'anfrage@nineai.de',
  description:
    'Websites, Web-Apps, Google Ads und Automatisierung für Unternehmen in Deutschland.',
  logo: '/assets/brand/NineAI-original.svg',
};
export function absoluteUrl(path = '/') {
  return new URL(path, siteOrigin).href;
}
