/** Preview contract. Provider URLs may only be activated after merchant review. */
export const websiteOrderSettings = {
  mode: 'preview' as 'preview' | 'live',
  paymentLinks: { 'nine-launch': '', 'nine-growth': '' } as Record<
    string,
    string
  >,
};
export function isWebsitePackage(slug: string) {
  return slug === 'nine-launch' || slug === 'nine-growth';
}
export function paymentLinkFor(slug: string): string | null {
  if (websiteOrderSettings.mode !== 'live' || !isWebsitePackage(slug))
    return null;
  const value = websiteOrderSettings.paymentLinks[slug];
  try {
    const url = new URL(value);
    if (url.protocol !== 'https:' || url.username || url.password) return null;
    if (
      !['buy.stripe.com', 'www.paypal.com', 'paypal.com'].includes(url.hostname)
    )
      return null;
    return url.href;
  } catch {
    return null;
  }
}
