export const projectTypes = [
  'Website',
  'Plattform',
  'KI & Automation',
  'Growth',
  'Noch unklar',
];
export function recommendProject(
  service: string,
  budget: string,
  features: string[],
): string {
  if (budget === 'Unter 6.000 €')
    return 'Scope verkleinern und den wichtigsten ersten Schritt klären';
  if (
    service === 'Plattform' ||
    features.some((f) =>
      ['Login & Rollen', 'Buchungen', 'Individuelle Schnittstellen'].includes(
        f,
      ),
    )
  )
    return 'Platform Discovery';
  if (service === 'KI & Automation') return 'Automation Sprint';
  if (service === 'Growth') return 'Nine Scale';
  if (service === 'Website')
    return budget === '6.000–15.000 €' ? 'Nine Launch' : 'Nine Growth';
  return 'Orientierungsgespräch';
}
