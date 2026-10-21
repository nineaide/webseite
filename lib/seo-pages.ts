import { editorialPages } from '../app/content';

export type SeoPage = {
  path: string;
  title: string;
  description: string;
  label: string;
  kind: 'page' | 'service' | 'collection' | 'about' | 'article' | 'case';
  parent?: string;
  modified: string;
  image?: string;
};

export const coreSeoPages: SeoPage[] = [
  {
    path: '/wissen',
    label: 'Wissen',
    title: 'Wissen: Websites, Web-Apps & Google Ads planen | Nine.ai',
    description:
      'Verständliche Ratgeber für dein digitales Vorhaben: Website-Kosten, Relaunch, Briefing, Buchungssysteme und Google-Ads-Budget. Mit konkreten Projektbeispielen.',
    kind: 'collection',
    modified: '2026-09-08',
  },
  {
    path: '/',
    label: 'Startseite',
    title: 'Nine.ai – Webdesign, Webentwicklung & Google Ads',
    description:
      'Websites ab 1.990 € netto, eigene Web-Apps und Google Ads für Unternehmen. Entdecke unsere Projekte und frage dein Vorhaben persönlich an.',
    kind: 'page',
    modified: '2026-09-08',
  },
  {
    path: '/loesungen',
    label: 'Services',
    title: 'Websites, Web-Apps, Google Ads & Automatisierung | Nine.ai',
    description:
      'Finde die passende Leistung: Unternehmenswebsite, Buchungssystem, Kundenportal, Google-Werbung oder Automatisierung. Mit konkreten Projekteinblicken.',
    kind: 'collection',
    modified: '2026-09-08',
  },
  {
    path: '/websites',
    label: 'Webdesign',
    title: 'Webdesign für Unternehmen – Pakete & Referenzen | Nine.ai',
    description:
      'Individuelles Webdesign für Dienstleister und Handwerk: verständliche Inhalte, mobile Ansichten und ein klarer Anfrageweg. Vier Angebote im Vergleich.',
    kind: 'service',
    parent: '/loesungen',
    modified: '2026-09-08',
    image: '/project-images/gardentime-desktop.webp',
  },
  {
    path: '/website-erstellen-lassen',
    label: 'Website erstellen lassen',
    title: 'Website erstellen lassen – ab 1.990 € netto | Nine.ai',
    description:
      'Deine Website zum klaren Preis: Nine Start, Launch, Growth oder individuell. Sieh dir echte Kundenprojekte an und frage dein Angebot unverbindlich an.',
    kind: 'service',
    modified: '2026-09-08',
    image: '/project-images/entwurf-energie-desktop.webp',
  },
  {
    path: '/plattformen-web-apps',
    label: 'Webentwicklung',
    title: 'Webentwicklung: Web-Apps & Kundenportale | Nine.ai',
    description:
      'Individuelle Web-Apps, Buchungssysteme und Kundenportale entwickeln lassen. Mit Einblicken in ParkeSicher und einem klaren Weg von der Planung zum Betrieb.',
    kind: 'service',
    parent: '/loesungen',
    modified: '2026-09-08',
    image: '/project-images/parkesicher-desktop.webp',
  },
  {
    path: '/google-ads-growth',
    label: 'Google Ads',
    title: 'Google Ads Agentur für Unternehmen | Nine.ai',
    description:
      'Google Ads, passende Landingpages und nachvollziehbare Anfragen: Wir planen und betreuen deine Suchkampagnen. Betreuung und Werbebudget klar getrennt.',
    kind: 'service',
    parent: '/loesungen',
    modified: '2026-09-08',
  },
  {
    path: '/ki-automation',
    label: 'KI & Automatisierung',
    title: 'KI & Prozessautomatisierung für Unternehmen | Nine.ai',
    description:
      'Anfragen strukturieren, Dokumente auslesen und Programme verbinden. Wir planen Automatisierungen mit nachvollziehbaren Regeln, Quellen und Freigaben.',
    kind: 'service',
    parent: '/loesungen',
    modified: '2026-09-08',
  },
  {
    path: '/projekte',
    label: 'Projekte',
    title: 'Webdesign- & Webentwicklungs-Referenzen | Nine.ai',
    description:
      'Ausgewählte Projekte: Websites, eine Fahrzeugdatenbank und eigene Buchungs-, Reservierungs- und Bestellsysteme. Sieh Desktop- und Mobilansichten.',
    kind: 'collection',
    modified: '2026-09-08',
  },
  {
    path: '/projekte/parkesicher',
    label: 'ParkeSicher',
    title: 'ParkeSicher: Buchungsplattform & Anbieterportal | Nine.ai',
    description:
      'Einblick in die Webentwicklung für ParkeSicher: Parkplatzsuche, Buchungsstrecke und eine eigene Anwendung für Ankünfte, Preise und Verfügbarkeiten.',
    kind: 'case',
    parent: '/projekte',
    modified: '2026-09-08',
    image: '/project-images/parkesicher-desktop.webp',
  },
  {
    path: '/pakete',
    label: 'Pakete & Preise',
    title: 'Website-Pakete: 1.990 €, 6.900 € & 12.900 € | Nine.ai',
    description:
      'Vergleiche Nine Start, Launch und Growth zum festen Nettopreis sowie Nine X auf Anfrage. Leistungen, Zusatzkosten und passende Projektbeispiele im Überblick.',
    kind: 'collection',
    modified: '2026-09-08',
  },
  {
    path: '/ueber-nine',
    label: 'Über Nine.ai',
    title: 'Über Nine.ai – Design, Entwicklung & Zusammenarbeit',
    description:
      'So arbeitet Nine.ai: Anforderungen klären, Entwürfe gemeinsam prüfen und digitale Lösungen übergeben. Lerne Leistungen, Arbeitsweise und Kundenprojekte kennen.',
    kind: 'about',
    modified: '2026-09-08',
  },
];

export const seoPages: SeoPage[] = [
  ...coreSeoPages.filter(
    (page) => !editorialPages.some((editorial) => editorial.path === page.path),
  ),
  ...editorialPages.map((page) => ({
    path: page.path,
    parent: page.parent,
    kind: page.kind,
    label: page.label,
    title: page.title,
    description: page.description,
    modified: page.modified,
    image: page.image.src,
  })),
];
export const findSeoPage = (path: string) =>
  seoPages.find((page) => page.path === path);
export function breadcrumbsFor(
  page: SeoPage,
): { name: string; path: string }[] {
  const items = [{ name: 'Startseite', path: '/' }];
  const visited = new Set<string>([page.path]);
  let parent = page.parent;
  const ancestors: { name: string; path: string }[] = [];
  while (parent && parent !== '/' && !visited.has(parent)) {
    visited.add(parent);
    const ancestor = findSeoPage(parent);
    if (!ancestor) break;
    ancestors.unshift({ name: ancestor.label, path: ancestor.path });
    parent = ancestor.parent;
  }
  items.push(...ancestors);
  if (page.path !== '/') items.push({ name: page.label, path: page.path });
  return items;
}
