import { packages } from './site-data';

// Campaign entry offer approved by the owner on 6 September 2026.
export const websiteOffers = [
  {
    slug: 'nine-start',
    name: 'Nine Start',
    price: 1990,
    goal: 'Dein Angebot. Eine richtig gute Seite.',
    label: 'KOMPAKT LOSLEGEN',
    includes: [
      'Eine Landingpage, eine Sprache',
      'Deine vorhandenen Texte & Bilder',
      'Kontaktformular & mobile Gestaltung',
      'Eine Korrekturrunde',
    ],
    note: 'Für ein klares Angebot oder den ersten Unternehmensauftritt.',
  },
  ...packages
    .filter((p) => ['nine-launch', 'nine-growth'].includes(p.slug))
    .map((p) => ({
      slug: p.slug,
      name: p.name,
      price: p.price,
      goal: p.goal,
      includes: p.includes,
      label:
        p.slug === 'nine-launch'
          ? 'DEIN GANZES UNTERNEHMEN'
          : 'WEBSITE + WERBESTART',
      note:
        p.slug === 'nine-launch'
          ? 'Für Unternehmen mit mehreren Leistungen.'
          : 'Für einen größeren Auftritt mit vorbereitetem Werbestart.',
    })),
];
