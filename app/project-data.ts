export const conceptProjects = [
  {
    id: 'werkraum',
    name: 'WERKRAUM',
    industry: 'Handwerk & Interior',
    category: 'Handwerk',
    title: 'Gutes Handwerk verdient einen starken Auftritt.',
    headline: 'Räume, die bleiben.',
    tagline: 'Individuelle Möbel. Ehrliches Handwerk.',
    description:
      'Ein Entwurf für eine Tischlerei: große Arbeitsbeispiele, verständliche Leistungen und ein direkter Weg zur Projektanfrage.',
    detail:
      'Die Arbeit steht im Mittelpunkt. Besucher sehen zuerst die Qualität der Möbel, finden die passende Leistung und können ihr Vorhaben beschreiben.',
    image: '/assets/concepts/werkraum.webp',
    imageAlt:
      'Konzeptmotiv: maßgefertigte Küche mit dunklem Holz und grauer Steininsel',
    package: 'nine-launch',
    action: 'Dein Projekt besprechen',
    services: ['Küchen nach Maß', 'Wohnen & Arbeiten', 'Innenausbau'],
  },
  {
    id: 'kontur',
    name: 'KONTUR',
    industry: 'Architektur & Immobilien',
    category: 'Immobilien',
    title: 'Aus einem ersten Eindruck wird echtes Interesse.',
    headline: 'Ein Zuhause. Dein nächstes Kapitel.',
    tagline: 'Besondere Räume. Neue Perspektiven.',
    description:
      'Ein Entwurf für ein Immobilienbüro: bildstarke Präsentation, ein klarer Leistungsüberblick und eine gezielte Eigentümeranfrage.',
    detail:
      'Eine eigene Werbeseite kann Eigentümer gezielt ansprechen. Die Website erklärt die Leistungen; eine kurze Anfrage hilft, das Vorhaben einzuordnen.',
    image: '/assets/concepts/kontur.webp',
    imageAlt:
      'Konzeptmotiv: modernes Wohnhaus mit dunkler Metallfassade und Garten',
    package: 'nine-growth',
    action: 'Immobilie besprechen',
    services: ['Verkaufen', 'Kaufen', 'Persönlich beraten'],
  },
  {
    id: 'waerme',
    name: 'MORGENWÄRME',
    industry: 'Energie & Gebäudetechnik',
    category: 'Energie',
    title: 'Eine klare Leistung. Eine passende Anfrage.',
    headline: 'Gute Wärme. Ein gutes Gefühl.',
    tagline: 'Die passende Wärmepumpe für dein Zuhause.',
    description:
      'Ein Entwurf für einen Fachbetrieb: die Leistung einfach erklären, typische Fragen beantworten und Interessenten zum Beratungsgespräch führen.',
    detail:
      'Für Google-Anzeigen führt eine eigene Werbeseite direkt zum Thema Wärmepumpe. Besucher verstehen den Ablauf, bevor sie eine Beratung anfragen.',
    image: '/assets/concepts/waerme.webp',
    imageAlt: 'Konzeptmotiv: Techniker prüft eine Wärmepumpe an einem Wohnhaus',
    package: 'nine-growth',
    action: 'Heizung besprechen',
    services: ['Wärmepumpen', 'Modernisierung', 'Service'],
  },
];
export type ConceptProject = (typeof conceptProjects)[number];
