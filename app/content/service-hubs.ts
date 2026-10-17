import { desktopImage, type EditorialPage } from './types';
import { services } from '../site-data';

export const serviceHubPages: EditorialPage[] = [
  {
    path: '/plattformen-web-apps',
    parent: '/loesungen',
    kind: 'service',
    label: 'Webentwicklung',
    title: 'Webentwicklung: Web-Apps & Kundenportale | Nine.ai',
    description:
      'Individuelle Web-Apps, Buchungssysteme und Kundenportale entwickeln lassen. Mit Einblicken in ParkeSicher und einem klaren Weg von der Planung zum Betrieb.',
    kicker: 'WEBENTWICKLUNG FÜR UNTERNEHMEN',
    heading: 'Deine Idee.\nEine eigene Anwendung.',
    intro:
      'Wir entwickeln Web-Apps, Kundenportale und Buchungssysteme für Unternehmen. Deine Kunden können online handeln; dein Team verwaltet die Abläufe in einer passenden Oberfläche. Direkt im Browser, auf Desktop und Mobil.',
    image: desktopImage(
      'parkesicher',
      'ParkeSicher-Buchungsplattform mit Flughafen- und Zeitraumwahl',
      'Kundenprojekt ParkeSicher · Buchungsplattform und eigene Anbieter-Anwendung',
    ),
    highlights: [
      'Buchen, auswählen & verwalten',
      'Daten, Rollen & Schnittstellen',
      'Desktop und Mobil zusammen',
    ],
    sections: [
      {
        id: 'anwendung',
        title: 'Wenn deine Website mehr können soll.',
        paragraphs: [
          'Eine Unternehmenswebsite erklärt dein Angebot. Eine Web-App ermöglicht einen eigenen Vorgang: Kunden buchen, Anbieter verwalten ihre Verfügbarkeit oder Nutzer wählen anhand einer Datenbank die passende Leistung.',
          'Wir planen die Oberfläche und die Regeln dahinter zusammen. So wird früh sichtbar, welche Daten benötigt werden, wer welche Aufgabe erledigt und welche Systeme beteiligt sind.',
        ],
        points: [
          {
            title: 'Buchungssysteme',
            text: 'Zeiträume, Kapazitäten, Preisregeln und Bestätigungen als zusammenhängender Vorgang.',
          },
          {
            title: 'Kunden- und Partnerportale',
            text: 'Eigene Ansichten und Aktionen für Kunden, Anbieter und interne Teams.',
          },
          {
            title: 'Konfiguratoren und Datenbanken',
            text: 'Eine verständliche Auswahl aus deinem Sortiment oder deinen Leistungsdaten.',
          },
        ],
      },
      {
        id: 'projekte',
        title: 'Eigene Systeme. Sichtbar an echten Projekten.',
        paragraphs: [
          'ParkeSicher verbindet Parkplatzsuche und Buchung mit einer eigenen Anwendung für den Betrieb. MB Performance nutzt eine Fahrzeugdatenbank für Hersteller, Modell, Motor und Leistungsdaten. Für Un Petit Café gehört eine eigene Bestellerfassung zum digitalen Serviceablauf.',
          'Diese Beispiele zeigen unterschiedliche Aufgaben, für die wir individuelle Webentwicklung anbieten. Auf den Projektseiten findest du Desktop-, Mobil- und Systemansichten mit konkreten Erläuterungen.',
        ],
        image: {
          src: '/project-images/cafe-menu.webp',
          width: 871,
          height: 1600,
          alt: 'Speisenauswahl im eigenen Bestellsystem von Un Petit Café',
          caption:
            'Un Petit Café / Toastclub · Bestellungen im Service aufnehmen',
        },
        links: [
          { label: 'Alle neun Kundenprojekte ansehen', href: '/projekte' },
        ],
      },
      {
        id: 'planung',
        title: 'Ein klarer erster Umfang.',
        paragraphs: [
          'Wir legen einen vollständigen ersten Ablauf fest. Dazu gehören Nutzerrollen, notwendige Daten, Fehlerfälle und die wichtigsten Integrationen. Der Entwurf macht die Lösung bedienbar, bevor der gesamte Funktionsumfang entwickelt wird.',
          'Die Platform Discovery für 2.900 € netto ist ein abgegrenzter Planungseinstieg. Die individuelle Entwicklung wird anschließend angeboten. Die bestehende Orientierung für umfangreichere Plattformprojekte beginnt bei 30.000 € netto; dein konkretes Vorhaben kann einen anderen Umfang benötigen.',
        ],
        links: [
          {
            label: 'Planungspakete und individuelle Angebote',
            href: '/pakete',
          },
          {
            label: 'Web-App oder Standardsoftware vergleichen',
            href: '/wissen/web-app-oder-standardsoftware',
          },
        ],
      },
      {
        id: 'betrieb',
        title: 'Übergabe und Betrieb früh mitdenken.',
        paragraphs: [
          'Eine Anwendung braucht auch nach dem Start klare Zuständigkeiten. Wir besprechen Pflege, Zugänge, Unterstützung bei Fehlern und spätere Erweiterungen. Bestehende Systeme und notwendige Schnittstellen werden schon in der Planung berücksichtigt.',
          'Du erhältst einen nachvollziehbaren Umfang mit den vereinbarten Leistungen. Entwicklung, externe Anbietergebühren, Datenübernahmen und laufende Betreuung werden getrennt benannt.',
        ],
      },
    ],
    faqs: services.find((s) => s.slug === 'plattformen-web-apps')!.faq,
    referenceIds: ['parkesicher', 'mb-performance'],
    related: [
      '/plattformen-web-apps/buchungssysteme',
      '/plattformen-web-apps/kundenportale',
      '/plattformen-web-apps/bestellsysteme-gastronomie',
      '/plattformen-web-apps/konfiguratoren',
      '/plattformen-web-apps/schnittstellen',
    ],
    modified: '2026-09-08',
  },
  {
    path: '/google-ads-growth',
    parent: '/loesungen',
    kind: 'service',
    label: 'Google Ads',
    title: 'Google Ads Agentur für Unternehmen | Nine.ai',
    description:
      'Google Ads, passende Landingpages und nachvollziehbare Anfragen: Wir planen und betreuen deine Suchkampagnen. Betreuung und Werbebudget klar getrennt.',
    kicker: 'GOOGLE ADS FÜR UNTERNEHMEN',
    heading: 'Google Ads.\nPassende Anfragen.',
    intro:
      'Wir planen und betreuen deine Google-Werbung, gestalten passende Zielseiten und machen eingegangene Anfragen nachvollziehbar. Angebot, Anzeige und Kontaktweg werden gemeinsam betrachtet.',
    image: desktopImage(
      'prime-energie',
      'PRIME ENERGIE: Unternehmenswebsite mit einem strukturierten Anfrageweg',
      'Website-Referenz PRIME ENERGIE · von der Leistung zur persönlichen Anfrage',
    ),
    highlights: [
      'Suchanzeigen mit klarem Fokus',
      'Passende Landingpages',
      'Messung bis zur Anfrage',
    ],
    sections: [
      {
        id: 'zusammenspiel',
        title: 'Vom Suchbegriff zum Gespräch.',
        paragraphs: [
          'Eine Suchkampagne beginnt bei einer konkreten Leistung. Wir klären, wer sie sucht, in welchem Gebiet du arbeiten kannst und welche Information eine gute Anfrage enthalten soll. Daraus entstehen passende Anzeigen und Zielseiten.',
          'Nach dem Start zählen die tatsächlich ausgelösten Suchbegriffe und die Qualität der Anfragen. Rückmeldungen aus deinem Vertrieb helfen zu verstehen, welche Kontakte zum Angebot passen.',
        ],
        points: [
          {
            title: 'Suchkampagnen',
            text: 'Suchabsicht, Anzeigen und Budget auf deine angebotenen Leistungen abstimmen.',
          },
          {
            title: 'Landingpages',
            text: 'Die versprochene Leistung verständlich zeigen, mit echten Belegen und einem gut erreichbaren Formular.',
          },
          {
            title: 'Conversion-Messung',
            text: 'Kontaktklicks, eingegangene Anfragen und Geschäftsergebnisse sinnvoll unterscheiden.',
          },
        ],
      },
      {
        id: 'zielseiten',
        title: 'Die Website ist Teil der Werbestrecke.',
        paragraphs: [
          'Unsere Website-Projekte zeigen konkrete Wege zur Anfrage. PRIME ENERGIE fragt den Energiebedarf schrittweise ab. Bei Meister Lorenz steht das Fahrzeuganliegen im Mittelpunkt. Daraus wird für jede Kampagne ein passender eigener Aufbau entwickelt.',
          'Die hier gezeigten Aufnahmen belegen unsere Website-Arbeit. Aussagen über Werbeergebnisse brauchen jeweils konkrete Kampagnen- und Geschäftsdaten.',
        ],
        image: {
          src: '/project-images/prime-energie-mobile.webp',
          width: 390,
          height: 844,
          alt: 'Mobile Website von PRIME ENERGIE mit Anfrageeinstieg',
          caption: 'PRIME ENERGIE · die Anfrage auch mobil verständlich machen',
        },
        links: [
          {
            label: 'Landingpages für Google Ads ansehen',
            href: '/google-ads-growth/landingpages',
          },
        ],
      },
      {
        id: 'kosten',
        title: 'Betreuung und Werbebudget klar trennen.',
        paragraphs: [
          'Nine Scale beginnt bei 1.490 € netto pro Monat für den individuell vereinbarten Betreuungsumfang. Das Budget für die Ausspielung der Anzeigen wird separat an Google gezahlt. Eine neue Landingpage, besondere Messintegrationen und weitere Leistungen werden gesondert angeboten.',
          'Das passende Testbudget ergibt sich aus Zielgebiet, Suchbegriffen, Angebot und den verfügbaren Kontodaten. Eine pauschale Anzahl von Leads oder ein fester Klickpreis lässt sich vorab nicht garantieren.',
        ],
        links: [
          {
            label: 'Google-Ads-Budget planen',
            href: '/wissen/google-ads-budget-planen',
          },
          { label: 'Pakete und Betreuung vergleichen', href: '/pakete' },
        ],
      },
      {
        id: 'start',
        title: 'Bestehendes Konto oder erster Werbestart?',
        paragraphs: [
          'Bei einem bestehenden Konto prüfen wir Kampagnen, Suchbegriffe, Messung und Zielseiten. Bei einem neuen Start klären wir Angebot und Zielraum, bevor die Kampagnenstruktur entsteht. Zugriffe, Einwilligungsverwaltung und die vorgesehene Bearbeitung eingehender Anfragen werden mitgeplant.',
          'Du bekommst eine verständliche Reihenfolge für die nächsten Schritte. Später werden Änderungen anhand der tatsächlichen Ergebnisse bewertet.',
        ],
      },
    ],
    faqs: services.find((s) => s.slug === 'google-ads-growth')!.faq,
    referenceIds: ['prime-energie'],
    related: [
      '/google-ads-growth/suchanzeigen',
      '/google-ads-growth/landingpages',
      '/google-ads-growth/conversion-tracking',
    ],
    modified: '2026-09-08',
  },
  {
    path: '/ki-automation',
    parent: '/loesungen',
    kind: 'service',
    label: 'KI & Automatisierung',
    title: 'KI & Prozessautomatisierung für Unternehmen | Nine.ai',
    description:
      'Anfragen strukturieren, Dokumente auslesen und Programme verbinden. Wir planen Automatisierungen mit nachvollziehbaren Regeln, Quellen und Freigaben.',
    kicker: 'KI & AUTOMATISIERUNG FÜR UNTERNEHMEN',
    heading: 'Wiederkehrende Arbeit.\nEin klarer Ablauf.',
    intro:
      'Wir planen Automatisierungen für Anfragen, Dokumente und Datenübergaben. Feste Regeln, passende Schnittstellen und gezielt eingesetzte KI sollen deinem Team konkrete Aufgaben abnehmen.',
    image: {
      src: '/project-images/parkesicher-availability.webp',
      width: 787,
      height: 1600,
      alt: 'ParkeSicher-Anwendung mit Verwaltung von Verfügbarkeit und Sperrzeiten',
      caption:
        'Kundenprojekt ParkeSicher · geordnete Daten und Zustände im betrieblichen Alltag',
    },
    highlights: [
      'Mit einer konkreten Aufgabe starten',
      'Regeln oder KI passend wählen',
      'Freigaben & Fehlerwege mitplanen',
    ],
    sections: [
      {
        id: 'aufgaben',
        title: 'Wo wiederholt sich die Arbeit?',
        paragraphs: [
          'Informationen werden zwischen Programmen kopiert, Anfragen müssen vorsortiert oder Dokumente immer wieder gelesen werden. Wir beschreiben den heutigen Ablauf und prüfen, welcher Teil davon automatisiert werden kann.',
          'Datenqualität, Häufigkeit und die Folgen eines Fehlers sind dabei entscheidend. Eine klare Aufgabe mit verlässlichen Eingaben ist ein guter Anfang.',
        ],
        points: [
          {
            title: 'Anfragen weiterverarbeiten',
            text: 'Informationen strukturieren, Zuständigkeiten erkennen und den nächsten Schritt vorbereiten.',
          },
          {
            title: 'Daten verbinden',
            text: 'Bestehende Programme über geeignete Schnittstellen zusammenbringen.',
          },
          {
            title: 'Wissen auffindbar machen',
            text: 'Freigegebene Quellen für einen abgegrenzten Assistenten zugänglich machen.',
          },
        ],
      },
      {
        id: 'werkzeug',
        title: 'Welche Lösung passt zur Aufgabe?',
        paragraphs: [
          'Für eindeutige Regeln reicht häufig eine klassische Automatisierung. Ein KI-Assistent kommt infrage, wenn unstrukturierte Inhalte eingeordnet oder Antworten aus freigegebenem Wissen vorbereitet werden sollen.',
          'Beide Wege brauchen nachvollziehbare Zustände und einen Umgang mit Ausnahmen. Wichtige Entscheidungen können bei deinem Team bleiben.',
        ],
        table: {
          headings: ['Aufgabe', 'Möglicher Ansatz'],
          rows: [
            [
              'Ein Formularfeld an ein anderes System übertragen',
              'Schnittstelle mit festgelegter Zuordnung',
            ],
            [
              'Eine Anfrage nach eindeutiger Auswahl weiterleiten',
              'Regelbasierter Ablauf',
            ],
            [
              'Informationen aus unterschiedlichen Dokumenten vorbereiten',
              'KI-Unterstützung mit Quellen und Prüfung',
            ],
          ],
        },
      },
      {
        id: 'grundlage',
        title: 'Eine gemeinsame Datenbasis macht Abläufe greifbar.',
        paragraphs: [
          'In der ParkeSicher-Anwendung gehören Buchungen, Tagesübersicht und Verfügbarkeit zu einem zusammenhängenden Betrieb. Diese eigene Web-App zeigt, wie strukturierte Informationen für unterschiedliche Aufgaben nutzbar werden.',
          'Für ein Automatisierungsprojekt prüfen wir anschließend den konkreten Vorgang, die vorhandenen Programme und die erlaubten Datenzugriffe.',
        ],
        links: [
          {
            label: 'Das System hinter ParkeSicher ansehen',
            href: '/projekte/parkesicher',
          },
          {
            label: 'Web-Apps und Kundenportale',
            href: '/plattformen-web-apps',
          },
        ],
      },
      {
        id: 'sprint',
        title: 'Abgegrenzt planen und überprüfen.',
        paragraphs: [
          'Ein Automation Sprint kann eine einzelne Aufgabe untersuchen und umsetzen. Die bestehende Preisorientierung beginnt bei 4.900 € netto; der genaue Umfang richtet sich nach Daten, Integrationen und Prüfbedarf.',
          'Vor dem Start wird festgehalten, woran eine brauchbare Lösung erkannt wird. Externe Anbietergebühren, laufende Nutzung und Betreuung werden separat betrachtet.',
        ],
      },
    ],
    faqs: services.find((s) => s.slug === 'ki-automation')!.faq,
    referenceIds: ['parkesicher'],
    related: [
      '/ki-automation/prozessautomatisierung',
      '/ki-automation/ki-assistenten',
      '/plattformen-web-apps/schnittstellen',
    ],
    modified: '2026-09-08',
  },
];
