import { referenceProjects, referenceImage } from '../reference-data';
import {
  desktopImage,
  type EditorialPage,
  type EditorialSection,
} from './types';

type CaseDetail = {
  title: string;
  heading: string;
  sections: EditorialSection[];
  related: string[];
};
const details: Record<string, CaseDetail> = {
  'entwurf-energie': {
    title: 'Entwurf Energie: Tarifrechner und CRM | Nine.ai',
    heading: 'Entwurf Energie.\nVom Tarifinteresse zur Anfrage.',
    sections: [
      {
        id: 'tarifrechner',
        title: 'Strom und Gas passend zum Bedarf anfragen.',
        paragraphs: [
          'Der Tarifrechner unterscheidet private und gewerbliche Anfragen sowie Strom, Gas und kombinierte Anfragen. Postleitzahl und Verbrauch bilden den Einstieg in die Tarifberatung. Eine vorhandene Rechnung kann die Angaben zum Verbrauch ergänzen.',
        ],
        points: [
          {
            title: 'Tarifrechner',
            text: 'Energieträger, Kundentyp und Jahresverbrauch in einem geführten Ablauf erfassen.',
          },
          {
            title: 'Anfrageverwaltung',
            text: 'Anfragen strukturiert aufnehmen und für die weitere Bearbeitung zusammenführen.',
          },
          {
            title: 'CRM',
            text: 'Kundenkontakte, Zuständigkeiten und Bearbeitungsstände in einer gemeinsamen Oberfläche organisieren.',
          },
        ],
      },
      {
        id: 'entwurfsstand',
        title: 'Einblicke in den Entwurfsstand.',
        paragraphs: [
          'Die Vorschauen zeigen die tatsächliche Startseite der verlinkten Website auf Desktop und Smartphone. Die Website kennzeichnet ihren Entwurfsstand und verwendet ersetzte Unternehmensangaben und Beispieldaten.',
        ],
      },
    ],
    related: [
      '/plattformen-web-apps/kundenportale',
      '/plattformen-web-apps',
      '/website-erstellen-lassen',
    ],
  },
  parkesicher: {
    title: 'ParkeSicher: Buchungsplattform & Anbieterportal | Nine.ai',
    heading: 'ParkeSicher.\nVon der Suche bis zum Betrieb.',
    sections: [
      {
        id: 'plattform',
        title: 'Eine Plattform für Reisende und Anbieter.',
        paragraphs: [
          'ParkeSicher verbindet die Suche nach einem Flughafenparkplatz mit einer eigenen Anwendung für den Parkplatzbetrieb. Reisende wählen einen Flughafen und einen Reisezeitraum. Die öffentliche Website führt zu Angeboten und in die Buchungsstrecke.',
          'Auf der betrieblichen Seite entstehen andere Aufgaben: Ankünfte organisieren, laufende Buchungen finden und Verfügbarkeiten pflegen. Diese Perspektiven gehören zu einem gemeinsamen Produkt.',
        ],
      },
      {
        id: 'anbieter',
        title: 'Der Arbeitstag hat seine eigene Oberfläche.',
        paragraphs: [
          'Die Anbieter-Anwendung gliedert sich in Heute, Buchungen, Umsatz, Preise und Betrieb. Die Tagesübersicht zeigt Ankünfte und Abfahrten. In der Buchungsübersicht lassen sich Vorgänge nach Zeitraum und Status finden.',
          'Für die Pflege des Angebots gibt es Preislisten, saisonale Preiszonen und Sperrzeiträume. Die Ansichten zeigen, wie Website-Funktionen und interne Arbeitsabläufe in einer eigenen Web-App zusammenkommen.',
        ],
        points: [
          {
            title: 'Buchungen',
            text: 'Zeiträume, Status und Vorgänge in einer strukturierten Übersicht.',
          },
          {
            title: 'Preise',
            text: 'Preislisten und Preiszonen für unterschiedliche Parkdauern.',
          },
          {
            title: 'Betrieb',
            text: 'Öffnungszeiten, Verfügbarkeit, Sperrzeiten und Mitarbeiterzugänge.',
          },
        ],
      },
      {
        id: 'zusammenhang',
        title: 'Was sich daraus für andere Buchungsprojekte ableiten lässt.',
        paragraphs: [
          'Die Buchung ist nur ein Teil des Produkts. Für ein eigenes System müssen auch die Aufgaben nach dem Abschluss beschrieben werden: Wer sieht neue Vorgänge? Welche Preise und Zeiten gelten? Wer darf Änderungen vornehmen?',
          'Diese Fragen helfen, den ersten Umfang einer Buchungsplattform greifbar zu machen. Die veröffentlichten Systemaufnahmen wurden vom Auftraggeber bereitgestellt; personenbezogene Angaben sind unkenntlich gemacht. Zahlen in einer Auswertung zeigen den aufgenommenen Produktstand.',
        ],
        links: [
          {
            label: 'Ein eigenes Buchungssystem planen',
            href: '/plattformen-web-apps/buchungssysteme',
          },
        ],
      },
    ],
    related: [
      '/plattformen-web-apps/buchungssysteme',
      '/plattformen-web-apps/kundenportale',
      '/wissen/buchungssystem-planen',
    ],
  },
  'un-petit-cafe': {
    title: 'Un Petit Café: Website, Reservierung & Bestellsystem | Nine.ai',
    heading: 'Un Petit Café.\nVom ersten Eindruck bis zur Küche.',
    sections: [
      {
        id: 'website',
        title: 'Ein gastronomischer Auftritt mit eigenen Abläufen.',
        paragraphs: [
          'Zum Projekt Un Petit Café gehören eine Website, ein eigenes Reservierungssystem und ein Bestellsystem für den Service. Die öffentliche Website ist heute unter Toastclub Wiesbaden zu sehen.',
          'Der Auftritt zeigt das Frühstücksangebot und die Speisekarte und führt zur Reservierungsanfrage. Bilder und Inhalte sollen den Besuch vorbereiten; der betriebliche Teil hilft bei der Aufnahme und Zuordnung von Bestellungen.',
        ],
      },
      {
        id: 'bestellung',
        title: 'Bestellungen bleiben beim richtigen Tisch.',
        paragraphs: [
          'In der eigenen Anwendung wählen Mitarbeitende zunächst den Tisch. Die Speisekarte ist über Kategorien und eine Suche erreichbar. Gerichte werden einem Bon zugeordnet; Mengen, Extras und Hinweise für die Küche lassen sich ergänzen.',
          'Eine Tischübersicht zeigt aktive Vorgänge und bereitstehende Bestellungen. Damit wird sichtbar, welche Informationen ein Serviceablauf neben der reinen Artikelauswahl benötigt.',
        ],
        points: [
          {
            title: 'Tisch',
            text: 'Innenbereich, Bar und Terrasse in einer gemeinsamen Auswahl.',
          },
          {
            title: 'Bon',
            text: 'Artikel, Mengen, Extras und Küchenhinweise als zusammenhängende Bestellung.',
          },
          {
            title: 'Status',
            text: 'Aktive Tische und bereitstehende Bestellungen erkennen.',
          },
        ],
      },
      {
        id: 'einordnung',
        title: 'Website und Arbeitsalltag zusammen betrachten.',
        paragraphs: [
          'Das Projekt verbindet die Sicht der Gäste mit der Arbeit des Service. Für eine ähnliche Lösung wird zunächst geklärt, wie Reservierung, Bestellung und deren Bearbeitung im jeweiligen Betrieb funktionieren.',
          'Die gezeigte Bestellerfassung ist ein eigener Entwicklungsumfang. Eine Kasse, Abrechnung oder Zahlungsanbindung wird für ein neues Vorhaben gesondert geprüft. Namen von Mitarbeitenden sind in den veröffentlichten Aufnahmen unkenntlich gemacht.',
        ],
        links: [
          {
            label: 'Bestellsysteme für Gastronomie',
            href: '/plattformen-web-apps/bestellsysteme-gastronomie',
          },
        ],
      },
    ],
    related: [
      '/websites/gastronomie',
      '/plattformen-web-apps/bestellsysteme-gastronomie',
      '/plattformen-web-apps/buchungssysteme',
    ],
  },
  'mb-performance': {
    title: 'MB Performance: Website mit Fahrzeugdatenbank | Nine.ai',
    heading: 'MB Performance.\nDas passende Fahrzeug im Mittelpunkt.',
    sections: [
      {
        id: 'projekt',
        title: 'Ein Chiptuning-Auftritt mit eigener Datenbasis.',
        paragraphs: [
          'Für MB Performance verbindet die Website den Unternehmensauftritt mit einer eigenen Fahrzeugdatenbank. Interessenten wählen Hersteller, Modell und Motor, um die passenden Informationen zu ihrem Fahrzeug zu finden.',
          'Die Leistungsdaten werden in PS und kW zugeordnet. Die Auswahl schafft damit einen konkreten Bezug für die weitere Anfrage. Die Angaben zu den Fahrzeugleistungen sind Teil des Kundenangebots.',
        ],
      },
      {
        id: 'auswahl',
        title: 'Aus vielen Fahrzeugen wird eine verständliche Auswahl.',
        paragraphs: [
          'Die Fahrzeugauswahl folgt einer nachvollziehbaren Reihenfolge. Jeder Schritt grenzt die nächste Auswahl ein. Dahinter wird eine Datenstruktur benötigt, in der Hersteller, Modelle, Motoren und die zugehörigen Werte zusammenpassen.',
          'Eine solche Datenbank muss auch neue Einträge und Änderungen tragen können. Oberfläche und Datenpflege werden deshalb als zusammenhängende Aufgabe betrachtet.',
        ],
        points: [
          {
            title: 'Hersteller',
            text: 'Der Einstieg grenzt die passende Fahrzeugfamilie ein.',
          },
          {
            title: 'Modell und Motor',
            text: 'Die folgenden Schritte machen die Zuordnung konkreter.',
          },
          {
            title: 'Leistungsdaten',
            text: 'Die Auswahl führt zu den vorhandenen Werten und zur Anfrage.',
          },
        ],
      },
      {
        id: 'uebertragbar',
        title: 'Datenbasierte Auswahl ist in vielen Branchen nützlich.',
        paragraphs: [
          'Das Projekt zeigt einen Ansatz für Angebote mit vielen Varianten. Ähnliche Fragen entstehen bei Produktkonfiguratoren, Ersatzteilen oder technischen Dienstleistungen: Welche Auswahl passt zusammen, und was soll am Ende übergeben werden?',
          'Für ein neues Projekt werden Datenquelle, Nutzungsrechte, Pflege und das gewünschte Ergebnis geprüft. Ein Konfigurator kann eine Anfrage vorbereiten oder einen anderen vereinbarten Abschluss ermöglichen.',
        ],
        links: [
          {
            label: 'Konfiguratoren mit eigener Datenbank',
            href: '/plattformen-web-apps/konfiguratoren',
          },
        ],
      },
    ],
    related: [
      '/plattformen-web-apps/konfiguratoren',
      '/plattformen-web-apps/schnittstellen',
      '/wissen/web-app-oder-standardsoftware',
    ],
  },
  'meister-lorenz': {
    title: 'Meister Lorenz: Webdesign für einen Meisterbetrieb | Nine.ai',
    heading: 'Meister Lorenz.\nDas Anliegen schnell verstanden.',
    sections: [
      {
        id: 'betrieb',
        title: 'Ein klarer Auftritt für Fahrzeugschlüssel-Leistungen.',
        paragraphs: [
          'Die Website von Meister Lorenz stellt den Autoschlüssel-Meisterbetrieb und seine Leistungen vor. Ersatzschlüssel, Reparatur und Programmierung werden in nachvollziehbare Angebotsbereiche gegliedert.',
          'Informationen zu Fahrzeugmarken helfen Interessenten, ihr eigenes Anliegen einzuordnen. Bilder geben Einblicke in die Arbeit des Betriebs und unterstützen die Erklärung der Leistungen.',
        ],
      },
      {
        id: 'anfrage',
        title: 'Vom Fahrzeug zur passenden Anfrage.',
        paragraphs: [
          'Der Anfrageweg greift den Kontext der Leistung auf: Das Fahrzeug und das Anliegen werden für die persönliche Abstimmung erfasst. So muss der erste Kontakt nicht mit einer völlig allgemeinen Nachricht beginnen.',
          'Leistungsseiten, Bilder und Kontaktmöglichkeiten gehören zu einem zusammenhängenden Auftritt. Die mobile Fassung hält diese Informationen auch unterwegs erreichbar.',
        ],
        points: [
          {
            title: 'Leistungen',
            text: 'Die angebotenen Aufgaben für Interessenten verständlich ordnen.',
          },
          {
            title: 'Fahrzeugmarken',
            text: 'Informationen zum konkreten Fahrzeug leichter auffindbar machen.',
          },
          {
            title: 'Kontakt',
            text: 'Das Anliegen gezielt für die persönliche Rückmeldung vorbereiten.',
          },
        ],
      },
      {
        id: 'prinzip',
        title: 'Ein Beispiel für Webdesign im Handwerk.',
        paragraphs: [
          'Ein Handwerksbetrieb profitiert von einer Website, auf der die eigene Arbeit und der Kontaktweg schnell erkennbar sind. Das Projekt zeigt, wie eine konkrete Leistung zur Grundlage der Seitenstruktur werden kann.',
          'Für andere Betriebe werden Inhalte, Einsatzgebiet und die nötigen Formularangaben individuell festgelegt. Umfang und Preis einer neuen Website ergeben sich aus dem passenden Paket oder einem eigenen Angebot.',
        ],
        links: [
          {
            label: 'Websites für Handwerksbetriebe',
            href: '/websites/handwerk',
          },
        ],
      },
    ],
    related: [
      '/websites/handwerk',
      '/websites/dienstleister',
      '/website-erstellen-lassen',
    ],
  },
  mrcarkey: {
    title: 'Mr. CarKey: Website für Fahrzeugschlüssel-Service | Nine.ai',
    heading: 'Mr. CarKey.\nDie passende Hilfe schnell finden.',
    sections: [
      {
        id: 'leistung',
        title: 'Fahrzeugschlüssel-Service im Rhein-Main-Gebiet.',
        paragraphs: [
          'Mr. CarKey bietet Leistungen rund um das Nachmachen, Reparieren und Programmieren von Fahrzeugschlüsseln. Die Website ordnet diese Aufgaben so, dass Besucher ihren Bedarf schnell wiederfinden können.',
          'Der Auftritt stellt die angebotenen Leistungen und den Kontakt zum Betrieb in den Mittelpunkt. Das ist besonders relevant, wenn Menschen mit einem konkreten Fahrzeugproblem auf die Seite kommen.',
        ],
      },
      {
        id: 'kontakt',
        title: 'Von der Erklärung zur Reparaturanfrage.',
        paragraphs: [
          'Die Website führt von der passenden Leistung zur Anfrage. Ein direkter WhatsApp-Kontakt ergänzt den Formularweg. Interessenten können damit den Kanal wählen, der zu ihrer Situation passt.',
          'Die Desktop- und Mobilansichten zeigen dieselbe Angebotslogik in unterschiedlichen Bildschirmgrößen. Leistungen und Kontaktmöglichkeiten sollen auch auf einem kleinen Display verständlich bleiben.',
        ],
        points: [
          {
            title: 'Überblick',
            text: 'Leistungen nach dem Anliegen des Besuchers benennen.',
          },
          {
            title: 'Anfrage',
            text: 'Ein Fahrzeugproblem für die persönliche Bearbeitung beschreiben.',
          },
          {
            title: 'Kontaktwege',
            text: 'Formular und direkten Kontakt sichtbar miteinander verbinden.',
          },
        ],
      },
      {
        id: 'beispiel',
        title: 'Ein Dienstleister-Auftritt mit erkennbarem Schwerpunkt.',
        paragraphs: [
          'Das Projekt zeigt, wie sich eine spezialisierte Dienstleistung mit klaren Leistungsbereichen präsentieren lässt. Ein neuer Auftritt wird dabei immer auf das tatsächliche Angebot und die Erreichbarkeit des Betriebs abgestimmt.',
          'Für ähnliche Vorhaben betrachten wir die vorhandenen Inhalte, typische Kundenfragen und die nötigen Angaben für eine erste Rückmeldung. Daraus entsteht der passende Umfang für die Website.',
        ],
        links: [
          {
            label: 'Webdesign für Dienstleister',
            href: '/websites/dienstleister',
          },
        ],
      },
    ],
    related: [
      '/websites/dienstleister',
      '/websites/handwerk',
      '/website-erstellen-lassen',
    ],
  },
  gardentime: {
    title: 'Garden Time Frankfurt: Website für Garten & Gebäude | Nine.ai',
    heading: 'Garden Time Frankfurt.\nMehrere Leistungen. Ein klarer Einstieg.',
    sections: [
      {
        id: 'angebot',
        title: 'Gartenpflege und Gebäudeservice ordnen.',
        paragraphs: [
          'Garden Time Frankfurt bietet Leistungen rund um Gartenpflege und Facility Management. Die Website gliedert dieses breite Angebot in verständliche Bereiche mit eigenen Leistungsseiten.',
          'Besucher können sich entweder über die Aufgaben des Betriebs informieren oder direkt mit einer Anfrage beginnen. Dadurch werden Überblick und konkreter Kontakt in einem Auftritt verbunden.',
        ],
      },
      {
        id: 'formular',
        title: 'Die gewünschte Leistung steht früh fest.',
        paragraphs: [
          'Das Anfrageformular ist bereits im Einstieg der Website präsent. Interessenten wählen die benötigte Leistung und beschreiben ihren Bedarf. Der Kontakt erhält damit einen Bezug zum tatsächlichen Angebot.',
          'Bilder und Leistungsseiten ergänzen diese Auswahl. Sie helfen Besuchern, die Arbeit des Betriebs einzuordnen, bevor weitere Details persönlich geklärt werden.',
        ],
        points: [
          {
            title: 'Leistungsbereiche',
            text: 'Gartenpflege und Gebäudeservice mit eigenen Erklärungen.',
          },
          {
            title: 'Anfrage',
            text: 'Die gewünschte Aufgabe direkt im Formular auswählen.',
          },
          {
            title: 'Mobil',
            text: 'Information und Kontaktweg auf einem kleinen Bildschirm zusammenhalten.',
          },
        ],
      },
      {
        id: 'struktur',
        title: 'Breite Angebote brauchen eine verständliche Struktur.',
        paragraphs: [
          'Das Projekt ist ein Beispiel für Dienstleister, die mehrere zusammengehörende Bereiche anbieten. Die Struktur hilft dabei, die richtige Leistung zu finden und eine brauchbare Anfrage vorzubereiten.',
          'Für einen neuen Unternehmensauftritt prüfen wir, welche Themen eine eigene Seite brauchen und welche gemeinsam erklärt werden können. Das tatsächliche Einsatzgebiet wird verständlich beschrieben.',
        ],
        links: [
          {
            label: 'Websites für Dienstleistungsunternehmen',
            href: '/websites/dienstleister',
          },
        ],
      },
    ],
    related: [
      '/websites/dienstleister',
      '/wissen/website-briefing',
      '/website-erstellen-lassen',
    ],
  },
  'loni-galabau': {
    title: 'Loni GalaBau: Webdesign für Garten- & Landschaftsbau | Nine.ai',
    heading: 'Loni GalaBau.\nRaum für sichtbare Arbeit.',
    sections: [
      {
        id: 'bilder',
        title: 'Gartengestaltung über Bilder verständlich machen.',
        paragraphs: [
          'Die Website von Loni GalaBau gibt großen Gartenbildern und einzelnen Leistungen Raum. Der Auftritt verbindet die sichtbare Arbeit mit Informationen zu Gartengestaltung, Naturstein- und Pflasterarbeiten.',
          'Für einen Garten- und Landschaftsbaubetrieb sind Bilder ein wesentlicher Teil der Angebotsbeschreibung. Sie machen Materialien, Gestaltung und mögliche Aufgaben für Besucher greifbar.',
        ],
      },
      {
        id: 'leistung',
        title: 'Einzelne Leistungen bekommen ihren eigenen Zusammenhang.',
        paragraphs: [
          'Die Leistungsseiten erklären, welche Arbeiten der Betrieb übernimmt. Ein nachvollziehbarer Ablauf führt zur Kontaktaufnahme. Gleichzeitig werden die Menschen hinter dem Betrieb im Auftritt sichtbar.',
          'Die mobile Ansicht behält Bilder und Leistungsinformationen bei. Die Reihenfolge orientiert sich daran, was Interessenten für die erste Einordnung ihres Vorhabens brauchen.',
        ],
        points: [
          {
            title: 'Bildsprache',
            text: 'Gartenbilder als konkrete Grundlage der Projektpräsentation.',
          },
          {
            title: 'Leistungsseiten',
            text: 'Unterschiedliche Arbeiten mit passenden Erläuterungen verbinden.',
          },
          {
            title: 'Zusammenarbeit',
            text: 'Den Betrieb und den nächsten Kontaktweg nachvollziehbar vorstellen.',
          },
        ],
      },
      {
        id: 'anwendung',
        title: 'Handwerk online anschaulich präsentieren.',
        paragraphs: [
          'Das Projekt zeigt einen bildorientierten Ansatz für eine Handwerker-Website. Eigene Arbeiten und verständliche Inhalte ergänzen sich, damit Besucher das Angebot nicht allein aus allgemeinen Leistungsbegriffen erschließen müssen.',
          'Für ähnliche Vorhaben stimmen wir Bildauswahl, Leistungsstruktur und Anfrageangaben auf den Betrieb ab. Neue Fotografie und zusätzliche Inhalte werden als eigener Umfang besprochen.',
        ],
        links: [
          {
            label: 'Webdesign für Handwerksbetriebe',
            href: '/websites/handwerk',
          },
        ],
      },
    ],
    related: [
      '/websites/handwerk',
      '/wissen/website-relaunch-checkliste',
      '/website-erstellen-lassen',
    ],
  },
  'dirik-autopflege': {
    title: 'Dirik Autopflege: Website für Fahrzeugaufbereitung | Nine.ai',
    heading: 'Dirik Autopflege.\nFahrzeugpflege sichtbar machen.',
    sections: [
      {
        id: 'auftritt',
        title: 'Ein ausdrucksstarker Auftritt für Fahrzeugpflege.',
        paragraphs: [
          'Die Website von Dirik Autopflege verbindet eine Galerie mit verständlichen Leistungen und Anfragewegen. Bilder geben Einblicke in die Fahrzeugpflege und unterstützen den Eindruck der angebotenen Arbeit.',
          'Leistungen wie Innenreinigung und Keramikversiegelung werden im Auftritt erklärt. Interessenten können ihr Anliegen dadurch konkreter einordnen, bevor sie Kontakt aufnehmen.',
        ],
      },
      {
        id: 'anfrage',
        title: 'Bilder, Leistungen und Kontakt zusammenführen.',
        paragraphs: [
          'Die Galerie steht im Zusammenhang mit den beschriebenen Angeboten. Eine unverbindliche Anfrage und ein WhatsApp-Kontakt bieten unterschiedliche Wege zum Betrieb.',
          'Die mobile Ansicht wird für dieselben Inhalte genutzt: Bilder ansehen, passende Leistung finden und Kontakt aufnehmen. Die Gestaltung muss dabei mit kleinen Bildschirmflächen und direkter Bedienung zurechtkommen.',
        ],
        points: [
          {
            title: 'Einblicke',
            text: 'Fahrzeugpflege in einer eigenen Galerie zeigen.',
          },
          {
            title: 'Erklärung',
            text: 'Einzelne Leistungen verständlich benennen und beschreiben.',
          },
          {
            title: 'Kontakt',
            text: 'Anfrage und WhatsApp als erkennbare nächste Schritte.',
          },
        ],
      },
      {
        id: 'ueberblick',
        title: 'Ein Beispiel für visuell geprägte Dienstleistungen.',
        paragraphs: [
          'Bei einer Dienstleistung, deren Qualität am Ergebnis sichtbar wird, können reale Aufnahmen die Beschreibung tragen. Das Projekt zeigt, wie Bilder und konkrete Leistungsseiten dafür zusammenspielen.',
          'Für eine neue Website betrachten wir das tatsächliche Angebot, die vorhandenen Aufnahmen und die Informationen, die der Betrieb für eine Einschätzung braucht. Die geeignete Anfrage folgt daraus.',
        ],
        links: [
          {
            label: 'Websites für Dienstleister ansehen',
            href: '/websites/dienstleister',
          },
        ],
      },
    ],
    related: [
      '/websites/dienstleister',
      '/projekte/mb-performance',
      '/website-erstellen-lassen',
    ],
  },
};

export const caseStudies: EditorialPage[] = referenceProjects.map((project) => {
  const detail = details[project.id] ?? {
    title: project.name + ': Kundenprojekt | Nine.ai',
    heading: project.name + '.\nEin Kundenprojekt.',
    sections: [
      {
        id: 'umsetzung',
        title: 'Was haben wir konkret umgesetzt?',
        paragraphs: [project.detail],
        points: project.features.map((feature) => ({
          title: feature,
          text: 'Weitere Informationen zu diesem Bereich werden ergänzt.',
        })),
      },
    ],
    related: [],
  };
  return {
    path: '/projekte/' + project.id,
    parent: '/projekte',
    kind: 'case',
    label: project.name,
    title: detail.title,
    description: project.description,
    kicker: 'KUNDENPROJEKT · ' + project.industry.toUpperCase(),
    heading: detail.heading,
    intro: project.detail,
    image: desktopImage(
      project.id,
      project.name + ': Desktopansicht der Kundenwebsite',
      project.name +
        (project.id === 'entwurf-energie'
          ? ' · Website-Aufnahme vom 21. Oktober 2026'
          : ' · Website-Aufnahme vom 7. September 2026'),
    ),
    implementation: project.implementation,
    mobileImage:
      project.previewAvailable === false
        ? undefined
        : {
            src: referenceImage(project.id, true),
            width: 390,
            height: 844,
            alt:
              project.name +
              ': mobile Website mit dem jeweiligen Angebots- und Kontakteinstieg',
            caption:
              project.name +
              (project.id === 'entwurf-energie'
                ? ' · Mobilaufnahme vom 21. Oktober 2026'
                : ' · Mobilaufnahme vom 7. September 2026'),
          },
    status: project.status,
    highlights: project.features,
    sections: detail.sections,
    faqs: [],
    referenceIds: [],
    related: detail.related,
    modified: project.id === 'entwurf-energie' ? '2026-10-21' : '2026-09-08',
  };
});
