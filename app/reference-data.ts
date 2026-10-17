export type ProjectScreen = {
  src: string;
  title: string;
  description: string;
  width: number;
  height: number;
};

export type ReferenceProject = {
  id: string;
  name: string;
  industry: string;
  category: string;
  url: string;
  description: string;
  detail: string;
  features: string[];
  tone: string;
  systemTitle?: string;
  screens?: ProjectScreen[];
};

const screen = (
  file: string,
  title: string,
  description: string,
  width: number,
  height: number,
): ProjectScreen => ({
  src: '/project-images/' + file + '.webp',
  title,
  description,
  width,
  height,
});

export const referenceProjects: ReferenceProject[] = [
  {
    id: 'parkesicher',
    name: 'ParkeSicher',
    industry: 'Mobilität · Buchungsplattform',
    category: 'Plattformen',
    url: 'https://www.parkesicher.de',
    tone: '#dce8f5',
    description:
      'Parkplätze vergleichen und buchen. Mit einer eigenen Anwendung für den täglichen Parkplatzbetrieb.',
    detail:
      'Die öffentliche Plattform verbindet Flughafensuche, Reisezeitraum und Parkplatzangebote. Im Anbieterbereich laufen Buchungen, Ankünfte, Preise und Verfügbarkeiten zusammen.',
    features: [
      'Parkplatzsuche & Buchung',
      'Eigene Anbieter-Anwendung',
      'Preise & Verfügbarkeit verwalten',
    ],
    systemTitle: 'Ein Blick in den Parkplatzbetrieb',
    screens: [
      screen(
        'parkesicher-today',
        'Den Tag im Blick',
        'Ankünfte, Abfahrten und Fahrzeuge vor Ort in einer Tagesübersicht.',
        875,
        1797,
      ),
      screen(
        'parkesicher-bookings',
        'Buchungen verwalten',
        'Buchungen nach Zeitraum und Status finden und aufrufen.',
        879,
        1789,
      ),
      screen(
        'parkesicher-prices',
        'Preise steuern',
        'Preislisten und saisonale Preiszonen für unterschiedliche Parkdauern.',
        787,
        1600,
      ),
      screen(
        'parkesicher-availability',
        'Verfügbarkeit planen',
        'Öffnungszeiten, Sperrzeiten und Mitarbeiterzugänge an einem Ort.',
        787,
        1600,
      ),
      screen(
        'parkesicher-revenue',
        'Buchungsvolumen sehen',
        'Eine Auswertung im Produkt. Angezeigte Werte sind eine Momentaufnahme, kein Erfolgsversprechen.',
        782,
        1600,
      ),
    ],
  },
  {
    id: 'un-petit-cafe',
    name: 'Un Petit Café / Toastclub',
    industry: 'Gastronomie · Website & Bestellsystem',
    category: 'Gastronomie',
    url: 'https://unpetitcafe.de',
    tone: '#eee7dc',
    description:
      'Ein Café-Auftritt mit eigener Tischreservierung und einem Bestellsystem für den Service.',
    detail:
      'Die Website macht Frühstück und Speisekarte erlebbar und nimmt Reservierungsanfragen entgegen. Das eigene Bestellsystem verbindet Tischauswahl, Speisen, Extras und Küchenhinweise. Die Website tritt heute als Toastclub Wiesbaden auf.',
    features: [
      'Website & digitale Speisekarte',
      'Eigenes Reservierungssystem',
      'Bestellungen direkt vom Tisch',
    ],
    systemTitle: 'Vom Tisch bis zur Küche',
    screens: [
      screen(
        'cafe-tables',
        'Tisch auswählen',
        'Service-Mitarbeitende wählen den passenden Tisch im Innen- oder Außenbereich.',
        881,
        1785,
      ),
      screen(
        'cafe-menu',
        'Speisen aufnehmen',
        'Gerichte suchen, Kategorien wechseln und Artikel zum Bon hinzufügen.',
        871,
        1600,
      ),
      screen(
        'cafe-order',
        'Bestellung abschicken',
        'Mengen, Extras und Küchenhinweise direkt in der Bestellung erfassen.',
        867,
        1600,
      ),
      screen(
        'cafe-status',
        'Service koordinieren',
        'Aktive Tische und bereitstehende Bestellungen auf einen Blick.',
        862,
        1600,
      ),
    ],
  },
  {
    id: 'mb-performance',
    name: 'MB Performance',
    industry: 'Automotive · Website & Fahrzeugdatenbank',
    category: 'Automotive',
    url: 'https://www.mbperformance.eu',
    tone: '#e5e3e2',
    description:
      'Eine Website für Chiptuning mit eigener Fahrzeugdatenbank für Marken, Modelle und Leistungsdaten.',
    detail:
      'Besucher wählen Hersteller, Modell und Motor. Dahinter ordnet eine eigene Datenbank die passenden Fahrzeuge und Leistungswerte in PS und kW zu – als Grundlage für eine konkrete Anfrage.',
    features: [
      'Hersteller, Modell & Motor wählen',
      'Eigene Fahrzeugdatenbank',
      'Leistungsdaten in PS & kW',
    ],
  },
  {
    id: 'meister-lorenz',
    name: 'Meister Lorenz',
    industry: 'Handwerk · Autoschlüssel',
    category: 'Dienstleister',
    url: 'https://www.meister-lorenz.de',
    tone: '#e9e4df',
    description:
      'Ein klarer Auftritt für den Autoschlüssel-Meisterbetrieb mit Leistungsseiten und direkter Terminanfrage.',
    detail:
      'Vom Ersatzschlüssel bis zur Programmierung: Besucher finden passende Leistungen und Informationen zu einzelnen Fahrzeugmarken. Das Anfrageformular erfasst Fahrzeug und Anliegen für die persönliche Abstimmung.',
    features: [
      'Leistungen nach Fahrzeugmarke',
      'Einblicke in die Arbeit',
      'Gezielte Fahrzeuganfrage',
    ],
  },
  {
    id: 'prime-energie',
    name: 'PRIME ENERGIE',
    industry: 'Energie · Website & Tarifanfrage',
    category: 'Dienstleister',
    url: 'https://www.primeenergie.de',
    tone: '#e8eedf',
    description:
      'Persönliche Energieberatung mit einem digitalen Anfrageweg für Strom- und Gastarife – für Privat- und Gewerbekunden.',
    detail:
      'Besucher wählen Strom, Gas oder beides und geben Postleitzahl und Verbrauch an. Die Website führt zur persönlichen Tarifprüfung, erklärt den Wechselablauf und macht Beispielrechnungen interaktiv nachvollziehbar.',
    features: [
      'Schrittweise Strom- und Gasanfrage',
      'Privat- und Gewerbekunden ansprechen',
      'Interaktive Beispielrechnung',
    ],
  },
  {
    id: 'mrcarkey',
    name: 'Mr. CarKey',
    industry: 'Dienstleistung · Fahrzeugschlüssel',
    category: 'Dienstleister',
    url: 'https://www.mrcarkey-wiesbaden.de',
    tone: '#e2e4e7',
    description:
      'Fahrzeugschlüssel-Service im Rhein-Main-Gebiet. Leistungen verständlich erklärt, Kontakt schnell gefunden.',
    detail:
      'Nachmachen, reparieren oder programmieren: Die Website führt von der passenden Leistung zur Reparaturanfrage. Direkte Kontaktwege unterstützen Menschen, die schnell Hilfe benötigen.',
    features: [
      'Klarer Leistungsüberblick',
      'Reparaturanfrage',
      'Direkter Kontakt per WhatsApp',
    ],
  },
  {
    id: 'gardentime',
    name: 'Garden Time Frankfurt',
    industry: 'Dienstleistung · Garten & Gebäude',
    category: 'Dienstleister',
    url: 'https://www.gardentime-frankfurt.de',
    tone: '#dee9e3',
    description:
      'Gartenpflege und Facility Management in Frankfurt – mit einem Anfrageformular direkt im Einstieg.',
    detail:
      'Ein breites Dienstleistungsangebot wird in Gartenpflege und Gebäudeservice gegliedert. Interessenten wählen ihre gewünschte Leistung direkt im Formular aus und beschreiben so gezielt ihren Bedarf.',
    features: [
      'Lokaler Unternehmensauftritt',
      'Eigene Leistungsseiten',
      'Anfrage mit Leistungsauswahl',
    ],
  },
  {
    id: 'loni-galabau',
    name: 'Loni GalaBau',
    industry: 'Handwerk · Garten- & Landschaftsbau',
    category: 'Dienstleister',
    url: 'https://www.loni-galabau.de',
    tone: '#e4e8df',
    description:
      'Gartengestaltung mit Raum für große Bilder, einzelne Leistungen und die Menschen hinter dem Betrieb.',
    detail:
      'Der Auftritt verbindet Gartenbilder mit verständlichen Leistungsseiten – von Naturstein- und Pflasterarbeiten bis zur Gartengestaltung. Ein nachvollziehbarer Ablauf führt zur Kontaktaufnahme.',
    features: [
      'Bildstarke Projektpräsentation',
      'Detaillierte Leistungsseiten',
      'Klarer Weg zum Kontakt',
    ],
  },
  {
    id: 'dirik-autopflege',
    name: 'Dirik Autopflege',
    industry: 'Automotive · Fahrzeugaufbereitung',
    category: 'Automotive',
    url: 'https://www.dirik-autopflege.de',
    tone: '#e6e2e2',
    description:
      'Ein ausdrucksstarker Auftritt für Fahrzeugpflege: Leistungen, Galerie und Anfragewege in einem Angebot.',
    detail:
      'Fahrzeugaufbereitung lebt von sichtbarer Qualität. Die Website zeigt Einblicke, erklärt Leistungen wie Innenreinigung und Keramikversiegelung und führt zur unverbindlichen Anfrage.',
    features: [
      'Fahrzeugpflege sichtbar machen',
      'Galerie & Leistungsseiten',
      'Anfrage und WhatsApp-Kontakt',
    ],
  },
];

export const referenceImage = (id: string, mobile = false) =>
  '/project-images/' + id + (mobile ? '-mobile' : '-desktop') + '.webp';

export const heroReferences = [
  'meister-lorenz',
  'un-petit-cafe',
  'parkesicher',
].map((id) => referenceProjects.find((project) => project.id === id)!);

// Campaign visitors see the same curated order in the hero and work section.
export const leadReferenceIds = [
  'prime-energie',
  'parkesicher',
  'meister-lorenz',
];

export const leadReferences = leadReferenceIds.map((id) =>
  referenceProjects.find((project) => project.id === id)!,
);
