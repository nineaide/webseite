import { desktopImage, type EditorialPage } from './types';

export const industryPages: EditorialPage[] = [
  {
    path: '/websites/dienstleister',
    parent: '/websites',
    kind: 'service',
    label: 'Websites für Dienstleister',
    title: 'Website für Dienstleister erstellen lassen | Nine.ai',
    description:
      'Webdesign für Dienstleistungsunternehmen: Leistungen verständlich erklären, echte Arbeit zeigen und Anfragen erleichtern. Referenzen und feste Website-Pakete.',
    kicker: 'WEBDESIGN FÜR DIENSTLEISTER',
    heading: 'Deine Leistung.\nSchnell verstanden.',
    intro:
      'Wir gestalten Websites für Dienstleister, die ihr Angebot klar erklären und passende Anfragen erhalten möchten. Mit verständlichen Leistungsseiten, echten Bildern und Kontaktwegen, die zum Betrieb passen.',
    image: desktopImage(
      'gardentime',
      'Garden Time Frankfurt: Gartenpflege und Gebäudeservice mit Anfrageformular',
      'Garden Time Frankfurt · Leistungen auswählen und den eigenen Bedarf beschreiben',
    ),
    highlights: [
      'Leistungen sinnvoll ordnen',
      'Echte Arbeit zeigen',
      'Anfragen vorbereiten',
    ],
    sections: [
      {
        id: 'aufbau',
        title: 'Was können Kunden bei dir beauftragen?',
        paragraphs: [
          'Eine Dienstleister-Website muss schnell erklären, welche Aufgaben du übernimmst. Bei einem breiten Angebot helfen klare Gruppen und eigene Seiten für Leistungen, die unterschiedliche Fragen auslösen.',
          'Garden Time Frankfurt gliedert Gartenpflege und Gebäudeservice. PRIME ENERGIE unterscheidet Energiebedarf und Kundengruppen. In beiden Fällen wird aus einer allgemeinen Kontaktaufnahme eine Anfrage mit mehr Kontext.',
        ],
      },
      {
        id: 'vertrauen',
        title: 'Zeige die Arbeit, über die du sprichst.',
        paragraphs: [
          'Eigene Projektbilder, verständliche Leistungsbeschreibungen und erkennbare Ansprechpartner helfen Besuchern, dein Angebot einzuordnen. Aussagen wie „zuverlässig“ werden greifbarer, wenn ein konkreter Ablauf und reale Arbeiten gezeigt werden.',
          'Dirik Autopflege macht die Fahrzeugpflege über Bilder und einzelne Leistungen sichtbar. Ein ähnlicher Ansatz kann für Reinigung, Betreuung, Reparatur oder andere Dienstleistungen passend ausgestaltet werden.',
        ],
        points: [
          {
            title: 'Leistungsumfang',
            text: 'Welche Aufgaben sind enthalten, welche Angaben braucht der Betrieb für ein Angebot?',
          },
          {
            title: 'Einsatzgebiet',
            text: 'Wo wird die Leistung tatsächlich angeboten? Ortsangaben müssen zum Betrieb passen.',
          },
          {
            title: 'Kontakt',
            text: 'Formular, Telefon oder ein vorhandener Terminweg werden auf den tatsächlichen Ablauf abgestimmt.',
          },
        ],
      },
      {
        id: 'anfrage',
        title: 'Die richtige Frage im richtigen Moment.',
        paragraphs: [
          'Ein Anfrageformular kann die gewünschte Leistung und einige wichtige Eckdaten erfassen. Es sollte nur das abfragen, was für den nächsten Schritt benötigt wird. Für einen ersten Kontakt ist nicht immer ein vollständiges Projektbriefing erforderlich.',
          'Auf dem Handy müssen Auswahl, Beschriftungen und Bestätigung ebenso verständlich bleiben. Die mobile Ansicht wird zusammen mit der Desktopversion geplant.',
        ],
        image: {
          src: '/project-images/gardentime-mobile.webp',
          width: 390,
          height: 844,
          alt: 'Mobile Website von Garden Time Frankfurt mit Leistungs- und Anfrageeinstieg',
          caption: 'Garden Time Frankfurt · mobile Unternehmenswebsite',
        },
      },
      {
        id: 'preise',
        title: 'Der Umfang bestimmt das passende Paket.',
        paragraphs: [
          'Nine Start bietet eine kompakte Landingpage für 1.990 € netto. Für einen Unternehmensauftritt mit mehreren Seitentypen gibt es Nine Launch für 6.900 € netto. Nine Growth für 12.900 € netto verbindet den größeren Auftritt mit dem vereinbarten Werbestart.',
          'Eigene Logins, Buchungssysteme und besondere Datenlogik werden als Nine X kalkuliert. Neue Inhalte, Fotografie, Hosting, Domain, Fremdlizenzen und Werbebudget werden gesondert betrachtet.',
        ],
        links: [
          { label: 'Alle Website-Pakete vergleichen', href: '/pakete' },
          {
            label: 'Website erstellen lassen und unverbindlich anfragen',
            href: '/website-erstellen-lassen',
          },
        ],
      },
    ],
    faqs: [
      [
        'Braucht jede Leistung eine eigene Seite?',
        'Eine eigene Seite ist sinnvoll, wenn Kunden dafür eine andere Erklärung, andere Belege oder einen anderen Anfrageweg brauchen. Eng verwandte Leistungen können gemeinsam dargestellt werden.',
      ],
      [
        'Können vorhandene Bilder übernommen werden?',
        'Ja, sofern Qualität und Nutzungsrechte passen. Wir prüfen gemeinsam, welche Bilder das Angebot gut erklären.',
      ],
      [
        'Kann später Google Ads dazukommen?',
        'Ja. Anzeigen, passende Zielseiten und Messung werden als eigener Umfang geplant.',
      ],
    ],
    referenceIds: ['gardentime', 'dirik-autopflege'],
    related: [
      '/websites/handwerk',
      '/google-ads-growth/landingpages',
      '/wissen/website-briefing',
    ],
    modified: '2026-09-08',
  },
  {
    path: '/websites/handwerk',
    parent: '/websites',
    kind: 'service',
    label: 'Websites für Handwerk',
    title: 'Website für Handwerker – Webdesign mit Referenzen | Nine.ai',
    description:
      'Websites für Handwerksbetriebe: Arbeiten zeigen, Leistungen erklären und konkrete Anfragen ermöglichen. Mit Beispielen von Meister Lorenz und Loni GalaBau.',
    kicker: 'WEBDESIGN FÜR HANDWERKSBETRIEBE',
    heading: 'Gute Arbeit.\nEin Auftritt, der sie zeigt.',
    intro:
      'Wir bauen Websites für Handwerksbetriebe mit Raum für echte Arbeiten, verständliche Leistungen und konkrete Anfragen. Besucher sollen erkennen, ob du der passende Betrieb für ihr Vorhaben bist.',
    image: desktopImage(
      'loni-galabau',
      'Loni GalaBau: Website mit großen Gartenbildern und Leistungsbereichen',
      'Loni GalaBau · Gartengestaltung und handwerkliche Leistungen sichtbar machen',
    ),
    highlights: [
      'Arbeiten & Leistungen',
      'Betrieb & Ansprechpartner',
      'Konkreter Bedarf im Formular',
    ],
    sections: [
      {
        id: 'leistung',
        title: 'Dein Können braucht konkrete Beispiele.',
        paragraphs: [
          'Eine Handwerker-Website sollte zeigen, welche Aufgaben der Betrieb übernimmt und wie die Zusammenarbeit abläuft. Projektbilder können Material, Ausführung und Ergebnis erklären. Dazu gehören verständliche Bildbeschreibungen und die Zuordnung zur jeweiligen Leistung.',
          'Loni GalaBau zeigt Gartengestaltung, Naturstein- und Pflasterarbeiten in einem bildstarken Auftritt. Meister Lorenz ordnet Leistungen rund um Fahrzeugschlüssel und einzelne Fahrzeugmarken. Die Struktur richtet sich nach den Fragen der jeweiligen Kunden.',
        ],
      },
      {
        id: 'qualifikation',
        title: 'Den Betrieb nachvollziehbar vorstellen.',
        paragraphs: [
          'Menschen möchten wissen, mit wem sie arbeiten. Echte Fotos, benannte Ansprechpartner und tatsächlich vorhandene Qualifikationen machen die Website persönlicher. Auszeichnungen und Kundenstimmen werden nur verwendet, wenn sie dem Betrieb zugeordnet werden können.',
          'Auch das Einsatzgebiet und der Weg zur ersten Abstimmung gehören gut auffindbar auf die Seite. Welche Angaben verbindlich genannt werden, klären wir mit dir.',
        ],
        points: [
          {
            title: 'Arbeiten',
            text: 'Repräsentative Projekte mit Aufgabe, Leistung und passenden Bildern.',
          },
          {
            title: 'Ablauf',
            text: 'Was passiert nach der Anfrage, und welche Unterlagen helfen dem Betrieb?',
          },
          {
            title: 'Pflege',
            text: 'Neue Bilder und Leistungsänderungen sollen später in den vorgesehenen Inhaltsbereichen aktualisiert werden können.',
          },
        ],
      },
      {
        id: 'kontakt',
        title: 'Eine Anfrage mit brauchbaren Eckdaten.',
        paragraphs: [
          'Das Formular richtet sich nach dem Gewerk. Bei einer Fahrzeugleistung sind etwa Fahrzeug und Anliegen relevant; bei einer Gartengestaltung können die gewünschte Leistung und eine erste Beschreibung des Vorhabens helfen.',
          'Der Einstieg bleibt überschaubar. Weitere Angaben werden im passenden nächsten Schritt geklärt. Telefonische Kontaktwege können ergänzend sichtbar eingebunden werden.',
        ],
        image: {
          src: '/project-images/meister-lorenz-mobile.webp',
          width: 390,
          height: 844,
          alt: 'Mobile Website von Meister Lorenz mit Autoschlüssel-Leistungen',
          caption:
            'Meister Lorenz · Handwerksleistung auf dem Handy verständlich zeigen',
        },
      },
      {
        id: 'umfang',
        title: 'Ein passender Rahmen für deinen Betrieb.',
        paragraphs: [
          'Eine kompakte Landingpage beginnt mit Nine Start bei 1.990 € netto. Für mehrere Leistungsbereiche kommen Nine Launch oder Nine Growth infrage. Den enthaltenen Umfang, benötigte Bilder und die spätere Pflege stimmen wir vor Projektbeginn ab.',
          'Eigene Kalkulatoren, Buchungsstrecken oder ein Kundenportal werden gesondert geplant. Dadurch bleibt erkennbar, was zur Unternehmenswebsite gehört und welche Funktionen einen eigenen Umfang brauchen.',
        ],
        links: [
          { label: 'Website-Pakete im Vergleich', href: '/pakete' },
          {
            label: 'Website-Briefing vorbereiten',
            href: '/wissen/website-briefing',
          },
        ],
      },
    ],
    faqs: [
      [
        'Können wir eigene Baustellen- oder Projektbilder nutzen?',
        'Ja, wenn sie für die Veröffentlichung freigegeben sind. Wir wählen Bilder aus, die eure Arbeit erklären, und berücksichtigen Qualität, Nutzungsrechte und sichtbare Personen.',
      ],
      [
        'Brauchen wir für jeden Ort eine Unterseite?',
        'Nur wenn sie für Besucher eigene, tatsächliche Informationen bietet. Das Einsatzgebiet lässt sich oft auf einer guten Leistungs- oder Kontaktseite verständlich erklären.',
      ],
      [
        'Kann ich später neue Projekte ergänzen?',
        'Bei den Paketen mit vorgesehener Inhaltspflege planen wir passende Module und eine Übergabe. Der genaue Umfang wird vereinbart.',
      ],
    ],
    referenceIds: ['loni-galabau', 'meister-lorenz'],
    related: [
      '/websites/dienstleister',
      '/wissen/website-relaunch-checkliste',
      '/website-erstellen-lassen',
    ],
    modified: '2026-09-08',
  },
  {
    path: '/websites/gastronomie',
    parent: '/websites',
    kind: 'service',
    label: 'Websites für Gastronomie',
    title: 'Restaurant- & Café-Website erstellen lassen | Nine.ai',
    description:
      'Webdesign für Restaurants und Cafés: Speisekarte, Bilder und Reservierung verständlich verbinden. Referenz Un Petit Café mit eigenem Reservierungs- und Bestellsystem.',
    kicker: 'WEBDESIGN FÜR RESTAURANTS & CAFÉS',
    heading: 'Vorfreude wecken.\nDen Besuch einfach machen.',
    intro:
      'Wir gestalten Websites für Restaurants und Cafés, auf denen Gäste Angebot, Atmosphäre und den Weg zur Reservierung schnell finden. Eigene Reservierungs- oder Bestellsysteme können als zusätzlicher Umfang dazukommen.',
    image: desktopImage(
      'un-petit-cafe',
      'Website von Un Petit Café, heute Toastclub Wiesbaden, mit gastronomischem Angebot',
      'Un Petit Café / Toastclub · Website, Reservierung und eigener Serviceablauf',
    ),
    highlights: [
      'Speisekarte & Atmosphäre',
      'Reservierung gut erreichbar',
      'Auch auf dem Handy klar',
    ],
    sections: [
      {
        id: 'besuch',
        title: 'Was Gäste vor dem Besuch wissen wollen.',
        paragraphs: [
          'Eine Gastronomie-Website muss Angebot, Öffnungszeiten, Standort und Kontaktwege verständlich zeigen. Die Speisekarte sollte gut lesbar sein, auch wenn ein Gast unterwegs mit dem Handy nachschaut.',
          'Echte Bilder machen Atmosphäre und Speisen greifbar. Aktuelle Angaben zu Reservierung, Angeboten und Erreichbarkeit helfen bei der Entscheidung. Wer diese Informationen pflegt, wird beim Aufbau mitgedacht.',
        ],
      },
      {
        id: 'reservierung',
        title: 'Reservierung passend zum Betrieb.',
        paragraphs: [
          'Eine Reservierungsanfrage und eine sofort bestätigte Buchung sind unterschiedliche Abläufe. Wir klären, welche Zusage die Website geben darf, wie Kapazitäten behandelt werden und welche Informationen der Betrieb für die Bearbeitung benötigt.',
          'Bei Un Petit Café gehört ein eigenes Reservierungssystem zum Projekt. Die Website ist heute unter Toastclub Wiesbaden zu sehen. Ein vorhandener Reservierungsdienst kann bei anderen Vorhaben ebenfalls eine sinnvolle Grundlage sein.',
        ],
        links: [
          {
            label: 'Das Café-Projekt mit Systemansichten',
            href: '/projekte/un-petit-cafe',
          },
        ],
      },
      {
        id: 'bestellungen',
        title: 'Wenn die Website im Service weitergeht.',
        paragraphs: [
          'Zum Café-Projekt gehört auch eine eigene Bestellerfassung. Mitarbeitende wählen einen Tisch, suchen Gerichte und ergänzen Mengen, Extras und Küchenhinweise. Eine Statusübersicht zeigt aktive Tische und bereitstehende Bestellungen.',
          'Eine solche Anwendung ist ein eigener Entwicklungsumfang. Wir planen Website, Reservierung und Bestellsystem so, dass die Aufgaben und Zuständigkeiten verständlich bleiben.',
        ],
        image: {
          src: '/project-images/cafe-menu.webp',
          width: 871,
          height: 1600,
          alt: 'Digitale Speisenauswahl im Bestellsystem des Café-Projekts',
          caption:
            'Eigene Bestellerfassung für den Service · Speisen und Kategorien',
        },
        links: [
          {
            label: 'Individuelle Bestellsysteme für Gastronomie',
            href: '/plattformen-web-apps/bestellsysteme-gastronomie',
          },
        ],
      },
      {
        id: 'pflege',
        title: 'Mit der Website starten, Funktionen gezielt ergänzen.',
        paragraphs: [
          'Nine Start ist der kompakte Einstieg für eine Landingpage mit vorhandenen Inhalten für 1.990 € netto. Für einen größeren Auftritt vergleichen wir die Website-Pakete und vereinbaren passende Inhaltsbereiche.',
          'Ein individuelles Reservierungssystem, Bestellabläufe, Zahlungsfunktionen oder besondere Integrationen sind zusätzliche Leistungen. Ebenso werden neue Fotografie, Inhaltserstellung und laufender Betrieb gesondert betrachtet.',
        ],
        links: [
          { label: 'Website-Pakete und Leistungen ansehen', href: '/pakete' },
        ],
      },
    ],
    faqs: [
      [
        'Können wir Speisekarte und Öffnungszeiten selbst ändern?',
        'Die spätere Pflege wird passend zum Paket geplant. Bei Nine Launch und Nine Growth ist ein Inhaltsbereich vorgesehen; bei Nine Start stimmen wir die Pflege separat ab.',
      ],
      [
        'Kann unser Reservierungsanbieter eingebunden werden?',
        'Wir prüfen, welche Integration der Anbieter unterstützt und wie sie in den gewünschten Ablauf passt.',
      ],
      [
        'Ist ein Bestellsystem im Website-Paket enthalten?',
        'Nein. Ein eigenes Bestellsystem hat einen gesonderten Funktionsumfang und wird individuell angeboten.',
      ],
    ],
    referenceIds: ['un-petit-cafe'],
    related: [
      '/plattformen-web-apps/bestellsysteme-gastronomie',
      '/plattformen-web-apps/buchungssysteme',
      '/wissen/website-briefing',
    ],
    modified: '2026-09-08',
  },
];
