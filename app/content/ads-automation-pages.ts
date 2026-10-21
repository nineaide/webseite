import { desktopImage, type EditorialPage } from './types';

export const adsAutomationPages: EditorialPage[] = [
  {
    path: '/google-ads-growth/suchanzeigen',
    parent: '/google-ads-growth',
    kind: 'service',
    label: 'Google-Suchanzeigen',
    title: 'Google Suchanzeigen für Unternehmen | Nine.ai',
    description:
      'Google-Suchkampagnen passend zu deinem Angebot: Suchbegriffe, Anzeigen, Zielseiten und Anfragen gemeinsam planen. Mit klarer Trennung von Betreuung und Budget.',
    kicker: 'GOOGLE ADS · SUCHKAMPAGNEN',
    heading: 'Gefunden werden,\nwenn dein Angebot gefragt ist.',
    intro:
      'Wir planen und betreuen Google-Suchanzeigen für Unternehmen. Ausgangspunkt sind die Leistungen, die du verkaufen möchtest, und die Fragen deiner potenziellen Kunden. Anzeigen und Zielseiten werden darauf abgestimmt.',
    image: desktopImage(
      'entwurf-energie',
      'Entwurf Energie: Website mit schrittweiser Strom- und Gasanfrage',
      'Website-Referenz Entwurf Energie · ein klarer Anfrageweg für ein erklärungsbedürftiges Angebot',
    ),
    highlights: [
      'Suchbegriffe mit passendem Anliegen',
      'Anzeigen & Zielseite zusammen',
      'Qualität der Anfragen betrachten',
    ],
    sections: [
      {
        id: 'fokus',
        title: 'Welche Leistung soll die Kampagne verkaufen?',
        paragraphs: [
          'Eine Suchkampagne braucht einen konkreten Schwerpunkt. Ein Unternehmen mit mehreren Leistungen kann unterschiedliche Anzeigen und Zielseiten benötigen: Wer bereits eine bestimmte Lösung sucht, braucht andere Informationen als jemand, der erst Preise oder Möglichkeiten vergleicht.',
          'Wir klären deshalb Angebot, Zielgruppe, Einzugsgebiet und den gewünschten nächsten Schritt. Daraus entsteht eine nachvollziehbare Kampagnenstruktur. Deutschlandweite Werbung ist möglich; der tatsächliche Zielraum richtet sich danach, wo du Kunden betreuen kannst.',
        ],
      },
      {
        id: 'suchbegriffe',
        title: 'Passende Suchbegriffe entscheiden über den Einstieg.',
        paragraphs: [
          'Keywords beschreiben, bei welchen Suchanfragen eine Anzeige infrage kommt. Die tatsächlich ausgelösten Suchbegriffe zeigen später, ob die Kampagne die richtigen Anliegen erreicht. Beide Ebenen werden bei der Betreuung betrachtet.',
        ],
        points: [
          {
            title: 'Angebot und Absicht',
            text: 'Wir unterscheiden konkrete Beauftragungswünsche, Preisvergleiche und reine Informationsfragen. Jede Gruppe braucht eine passende Antwort.',
          },
          {
            title: 'Unpassende Anfragen',
            text: 'Nicht angebotene Leistungen, falsche Regionen oder andere Absichten werden überprüft und bei Bedarf ausgeschlossen.',
          },
          {
            title: 'Daten als Grundlage',
            text: 'Suchvolumen und mögliche Klickkosten werden im konkreten Konto recherchiert. Schätzungen bleiben Schätzungen und werden nicht als garantierte Ergebnisse verkauft.',
          },
        ],
        links: [
          {
            label: 'Google erklärt den Keyword-Planer',
            href: 'https://support.google.com/google-ads/answer/6325025?hl=de',
          },
        ],
      },
      {
        id: 'zielseite',
        title: 'Die Anzeige verspricht. Die Seite muss antworten.',
        paragraphs: [
          'Nach dem Klick sollte dieselbe Leistung klar erkennbar sein. Eine passende Überschrift, nachvollziehbare Leistungen, echte Projektbeispiele und ein verständlicher Anfrageweg helfen bei der Entscheidung.',
          'Die Website von Entwurf Energie zeigt beispielsweise, wie eine Anfrage durch die Auswahl von Energieart und Bedarf vorbereitet wird. Das ist ein Beleg für unsere Website-Arbeit. Die Wirkung einer Werbekampagne lässt sich erst anhand ihrer eigenen Daten beurteilen.',
        ],
        links: [
          {
            label: 'Landingpages für Google Ads',
            href: '/google-ads-growth/landingpages',
          },
          {
            label: 'Website-Projekt Entwurf Energie ansehen',
            href: '/projekte/entwurf-energie',
          },
        ],
      },
      {
        id: 'betreuung',
        title: 'Was zur laufenden Betreuung gehört.',
        paragraphs: [
          'Zum vereinbarten Umfang können die Prüfung von Suchbegriffen, Anzeigen, Budgetverteilung, Zielseiten und Conversion-Daten gehören. Entscheidend ist, ob aus den Anfragen passende Geschäftsmöglichkeiten entstehen. Dafür wird die Rückmeldung aus deinem Vertrieb mitbetrachtet.',
          'Nine Scale beginnt bei 1.490 € netto pro Monat für den vereinbarten Betreuungsumfang. Das Google-Werbebudget, ein möglicher Neuaufbau der Zielseite und zusätzliche Integrationen werden separat geplant.',
        ],
        links: [
          {
            label: 'Google-Ads-Budget sinnvoll planen',
            href: '/wissen/google-ads-budget-planen',
          },
          { label: 'Betreuungsangebot und Pakete ansehen', href: '/pakete' },
        ],
      },
    ],
    faqs: [
      [
        'Könnt ihr ein vorhandenes Google-Ads-Konto übernehmen?',
        'Ja. Zuerst prüfen wir vorhandene Kampagnen, Zugänge, Messung und Zielseiten. Änderungen werden aus den Befunden abgeleitet.',
      ],
      [
        'Ist ein bestimmter Klickpreis garantiert?',
        'Nein. Klickpreise und die Ausspielung entstehen im jeweiligen Werbeumfeld. Wir arbeiten mit Kontodaten und überprüfbaren Annahmen.',
      ],
      [
        'Braucht jede Anzeige eine eigene Seite?',
        'Nicht zwingend. Eng verwandte Angebote können dieselbe passende Seite nutzen. Unterschiedliche Anliegen brauchen häufig eine gezieltere Antwort.',
      ],
    ],
    referenceIds: ['entwurf-energie'],
    related: [
      '/google-ads-growth/landingpages',
      '/google-ads-growth/conversion-tracking',
      '/wissen/google-ads-budget-planen',
    ],
    modified: '2026-09-08',
  },
  {
    path: '/google-ads-growth/landingpages',
    parent: '/google-ads-growth',
    kind: 'service',
    label: 'Landingpages für Google Ads',
    title: 'Landingpage für Google Ads erstellen lassen | Nine.ai',
    description:
      'Eine passende Zielseite für deine Google-Anzeigen: klare Botschaft, echte Referenzen und ein kurzer Anfrageweg. Gestaltung und Umsetzung ab 1.990 € netto.',
    kicker: 'LANDINGPAGES FÜR GOOGLE ADS',
    heading: 'Ein Klick.\nEin klares Angebot.',
    intro:
      'Wir bauen Landingpages, die nach einer Anzeige direkt zur passenden Leistung führen. Besucher sehen, was sie bekommen, warum sie dir vertrauen können und wie sie unverbindlich anfragen.',
    image: desktopImage(
      'entwurf-energie',
      'Entwurf Energie: Website mit Auswahl und Kontaktstrecke für eine persönliche Tarifanfrage',
      'Website-Referenz Entwurf Energie · Angebot und Anfrage aufeinander abgestimmt',
    ),
    highlights: [
      'Eine erkennbare Leistung',
      'Echte Projektbelege',
      'Kurzer Weg zur Anfrage',
    ],
    sections: [
      {
        id: 'botschaft',
        title: 'Die Antwort auf genau diese Suche.',
        paragraphs: [
          'Eine Kampagnen-Landingpage konzentriert sich auf ein Angebot und den dazugehörigen nächsten Schritt. Wer eine konkrete Leistung anklickt, sollte nicht erst den ganzen Unternehmensauftritt durchsuchen müssen.',
          'Vor dem Design klären wir die wichtigsten Fragen: Was möchte die Person erreichen? Was muss sie über Umfang und Preis wissen? Welcher Beleg macht das Angebot glaubwürdig? Welche Information brauchen wir für eine sinnvolle Antwort auf die Anfrage?',
        ],
      },
      {
        id: 'inhalt',
        title: 'Diese Inhalte helfen bei der Entscheidung.',
        paragraphs: [
          'Ein kurzer Einstieg schafft Orientierung. Danach folgen Leistungen, passende Belege und Antworten auf die wichtigsten Einwände. Das Formular muss erreichbar sein, ohne dass die relevanten Informationen verschwinden.',
        ],
        points: [
          {
            title: 'Angebot',
            text: 'Eine verständliche Überschrift, die Leistung und Nutzen erkennbar macht. Der Preis oder ein nachvollziehbarer Weg zum Angebot gehört dazu.',
          },
          {
            title: 'Belege',
            text: 'Echte Projekte, reale Kundenstimmen und nachvollziehbare Ansprechpartner. Jeder Beleg muss zu dem angebotenen Leistungsumfang passen.',
          },
          {
            title: 'Anfrage',
            text: 'Wenige notwendige Angaben, verständliche Beschriftungen und eine Bestätigung erst nach erfolgreichem Eingang.',
          },
        ],
      },
      {
        id: 'mobil',
        title: 'Mobil zählt die Reihenfolge.',
        paragraphs: [
          'Angebot, Belege und Kontaktweg müssen auf einem kleinen Display verständlich bleiben. Wir planen Karten, Formularfelder und Bildausschnitte für die mobile Ansicht mit. Eine wichtige Information darf nicht allein in einem Desktopbild stecken.',
          'Projektaufnahmen helfen, das Ergebnis einzuordnen. Bei Entwurf Energie führt die Website von Energieart und Bedarf zur persönlichen Tarifprüfung. Für andere Branchen wird die Auswahl auf den jeweiligen Anfrageprozess zugeschnitten.',
        ],
        image: {
          src: '/project-images/entwurf-energie-mobile.webp',
          width: 390,
          height: 844,
          alt: 'Mobile Website von Entwurf Energie mit dem Einstieg in die Tarifanfrage',
          caption: 'Mobile Ansicht des Kundenprojekts Entwurf Energie',
        },
      },
      {
        id: 'paket',
        title: 'Der kompakte Einstieg: Nine Start.',
        paragraphs: [
          'Nine Start kostet 1.990 € netto und umfasst eine Landingpage in einer Sprache mit vorhandenen Texten und Bildern, Kontaktformular, mobiler Gestaltung und einer Korrekturrunde. Neue Texte, Fotografie, Hosting, Domain und zusätzliche Integrationen werden separat vereinbart.',
          'Wenn mehrere Angebote eigene Seitentypen brauchen, vergleichen wir Nine Launch oder Nine Growth mit einem individuellen Umfang. Werbekampagne und Werbebudget sind von der Erstellung der Seite getrennte Leistungen.',
        ],
        links: [
          {
            label: 'Website-Pakete und Beispiele ansehen',
            href: '/website-erstellen-lassen',
          },
          {
            label: 'Was eine Website kostet',
            href: '/wissen/was-kostet-eine-website',
          },
        ],
      },
    ],
    faqs: [
      [
        'Ist die Betreuung der Anzeigen im Landingpage-Preis enthalten?',
        'Nein. Die Erstellung der Seite, laufende Ads-Betreuung und das Google-Werbebudget sind getrennte Positionen.',
      ],
      [
        'Können wir eine bestehende Seite verbessern?',
        'Ja. Wir prüfen Botschaft, Inhalte, mobile Darstellung und Anfrageweg. Daraus ergibt sich, ob eine Überarbeitung ausreicht oder ein eigener Seitenaufbau sinnvoll ist.',
      ],
      [
        'Garantiert eine neue Landingpage mehr Anfragen?',
        'Eine neue Seite ist eine Verbesserungshypothese. Ob sie mehr passende Anfragen erzeugt, wird erst mit einer geeigneten Messung und tatsächlichem Besucherverhalten überprüfbar.',
      ],
    ],
    referenceIds: ['entwurf-energie', 'meister-lorenz'],
    related: [
      '/website-erstellen-lassen',
      '/google-ads-growth/conversion-tracking',
      '/wissen/website-briefing',
    ],
    modified: '2026-09-08',
  },
  {
    path: '/google-ads-growth/conversion-tracking',
    parent: '/google-ads-growth',
    kind: 'service',
    label: 'Conversion-Messung',
    title: 'Google Ads Conversion-Tracking für Anfragen | Nine.ai',
    description:
      'Anfragen sinnvoll messen: Formularerfolg, Anrufe und Leadqualität unterscheiden. Wir planen Google-Ads-Conversions passend zum tatsächlichen Geschäftsprozess.',
    kicker: 'GOOGLE ADS · CONVERSION-MESSUNG',
    heading: 'Was wurde angefragt?\nWas wurde daraus?',
    intro:
      'Wir planen, welche Aktionen als Ergebnis deiner Werbung zählen sollen. Eine eingegangene Anfrage, ein Klick auf eine Telefonnummer und ein gewonnener Auftrag werden dabei sauber unterschieden.',
    image: desktopImage(
      'entwurf-energie',
      'Entwurf Energie: strukturierter Einstieg in eine persönliche Anfrage',
      'Website-Referenz Entwurf Energie · Anfragewege bilden die Grundlage eines Messkonzepts',
    ),
    highlights: [
      'Erfolgreiche Anfragen erkennen',
      'Doppelte Ereignisse vermeiden',
      'Leadqualität mitbetrachten',
    ],
    sections: [
      {
        id: 'ziel',
        title: 'Was ist für dein Unternehmen eine Conversion?',
        paragraphs: [
          'Eine Conversion ist eine definierte Aktion, die für dein Geschäft wichtig ist. Bei einer Dienstleistung kann das eine erfolgreich eingegangene Anfrage sein. Ein Klick auf einen Kontaktbutton zeigt Interesse, belegt aber noch keinen Eingang und keinen Auftrag.',
          'Wir beginnen deshalb beim tatsächlichen Ablauf: Welche Anfrage wird angenommen? Wer bearbeitet sie? Wann gilt sie als passend? Welche Rückmeldung lässt sich später der ursprünglichen Anfrage zuordnen?',
        ],
        links: [
          {
            label: 'Google erklärt die Conversion-Messung',
            href: 'https://support.google.com/google-ads/answer/1722022?hl=de',
          },
        ],
      },
      {
        id: 'ereignisse',
        title: 'Drei Ebenen machen Ergebnisse verständlich.',
        paragraphs: [
          'Ein Messkonzept trennt die Bedienung der Seite vom eigentlichen Geschäftsergebnis. So lässt sich erkennen, an welcher Stelle eine Kampagne verbessert werden sollte.',
        ],
        table: {
          headings: ['Ereignis', 'Was es belegt', 'Was noch offen ist'],
          rows: [
            [
              'Kontaktbutton angeklickt',
              'Interesse am Kontaktweg',
              'Wurde eine Anfrage abgeschickt?',
            ],
            [
              'Anfrage erfolgreich eingegangen',
              'Der Kontakt wurde angenommen',
              'Passt die Anfrage zum Angebot?',
            ],
            [
              'Auftrag gewonnen',
              'Ein Geschäftsergebnis liegt vor',
              'Welcher Wert ist der Werbung zurechenbar?',
            ],
          ],
        },
      },
      {
        id: 'technik',
        title: 'Ein Ereignis soll genau einmal zählen.',
        paragraphs: [
          'Wir prüfen, wann der Formularerfolg ausgelöst wird und wie erneutes Laden oder wiederholtes Absenden behandelt werden. Auch mehrere parallel eingebundene Messwege können denselben Vorgang doppelt zählen.',
          'Für einen Test wird der vollständige Weg betrachtet: Seite aufrufen, Formular prüfen, Anfrage übermitteln und Bestätigung kontrollieren. Fehlerzustände dürfen dabei nicht wie erfolgreiche Anfragen behandelt werden.',
        ],
        points: [
          {
            title: 'Formulare',
            text: 'Die Bestätigung richtet sich nach dem tatsächlichen Empfang der Anfrage.',
          },
          {
            title: 'Telefonkontakte',
            text: 'Ein Klick auf die Telefonnummer wird von einem tatsächlich zustande gekommenen Anruf unterschieden.',
          },
          {
            title: 'Vertrieb',
            text: 'Ein gemeinsames Verständnis von unpassenden, qualifizierten und gewonnenen Anfragen macht die Auswertung brauchbar.',
          },
        ],
      },
      {
        id: 'daten',
        title: 'Messung und Datenfreigaben gemeinsam planen.',
        paragraphs: [
          'Welche Informationen an welche Dienste übermittelt werden, wird vor der Einrichtung festgelegt. Einwilligungsverwaltung, bestehende Tags und die vorgesehenen Konten gehören in die technische Prüfung. Eine pauschale Zusage über Vollständigkeit oder Rechtskonformität ersetzt diese Prüfung nicht.',
          'Neue Zielseiten, ein CRM-Abgleich und die laufende Auswertung sind mögliche eigene Leistungsbestandteile. Wir beschreiben sie im Angebot, damit Einrichtung und Betrieb nachvollziehbar bleiben.',
        ],
        links: [
          { label: 'Google-Ads-Betreuung ansehen', href: '/google-ads-growth' },
          {
            label: 'Schnittstellen zu bestehenden Systemen',
            href: '/plattformen-web-apps/schnittstellen',
          },
        ],
      },
    ],
    faqs: [
      [
        'Reicht ein Klick auf „Absenden“ als Conversion?',
        'Für eine Anfrage sollte die erfolgreiche Übermittlung entscheidend sein. Ein Klick kann auch bei fehlerhaften oder unvollständigen Angaben stattfinden.',
      ],
      [
        'Muss dafür ein CRM vorhanden sein?',
        'Nicht für jede erste Messung. Für die spätere Rückmeldung zur Leadqualität hilft aber ein verlässlicher Prozess, der Anfragen und deren Ergebnis zuordnet.',
      ],
      [
        'Kann jede Anfrage vollständig einer Anzeige zugeordnet werden?',
        'Nein. Technische, datenschutzbezogene und nutzerseitige Grenzen können die Zuordnung einschränken. Wir machen diese Grenzen in der Auswertung kenntlich.',
      ],
    ],
    referenceIds: [],
    related: [
      '/google-ads-growth/suchanzeigen',
      '/google-ads-growth/landingpages',
      '/wissen/google-ads-budget-planen',
    ],
    modified: '2026-09-08',
  },
  {
    path: '/ki-automation/prozessautomatisierung',
    parent: '/ki-automation',
    kind: 'service',
    label: 'Prozessautomatisierung',
    title: 'Prozessautomatisierung für Unternehmen | Nine.ai',
    description:
      'Wiederkehrende Aufgaben automatisieren: Anfragen, Datenübergaben und Freigaben als klare Abläufe planen. Mit definierten Regeln, Zuständigkeiten und Fehlerwegen.',
    kicker: 'PROZESSE & AUTOMATISIERUNG',
    heading: 'Weniger doppelte Arbeit.\nMehr Überblick im Ablauf.',
    intro:
      'Wir helfen dir, wiederkehrende Aufgaben in nachvollziehbare Abläufe zu überführen. Dazu gehören strukturierte Anfragen, Datenübergaben und Freigaben zwischen den Programmen, die dein Team bereits nutzt.',
    image: {
      src: '/project-images/parkesicher-today.webp',
      width: 875,
      height: 1797,
      alt: 'ParkeSicher-Tagesübersicht als Beispiel für einen klar gegliederten betrieblichen Ablauf',
      caption:
        'Kundenprojekt ParkeSicher · strukturierte Daten und Zustände als Grundlage digitaler Abläufe',
    },
    highlights: [
      'Einen Ablauf konkret machen',
      'Regeln & Zuständigkeiten',
      'Ausnahmen mitplanen',
    ],
    sections: [
      {
        id: 'auswahl',
        title: 'Welcher Vorgang wiederholt sich wirklich?',
        paragraphs: [
          'Ein sinnvoller Einstieg ist eine regelmäßig wiederkehrende Aufgabe mit erkennbarem Anfang und Ende. Beispielsweise wird eine Anfrage gelesen, einer Leistung zugeordnet und an die richtige Person weitergegeben. Wir beschreiben den heutigen Weg inklusive der Rückfragen.',
          'Danach prüfen wir Häufigkeit, Datenqualität und Ausnahmefälle. So lässt sich entscheiden, welcher Teil verlässlich automatisiert werden kann und wo eine menschliche Entscheidung gebraucht wird.',
        ],
      },
      {
        id: 'regeln',
        title: 'Erst den Ablauf klären, dann das Werkzeug wählen.',
        paragraphs: [
          'Wenn Eingaben und Regeln eindeutig sind, kann eine normale Schnittstelle oder feste Logik genügen. Ein Sprachmodell wird interessant, wenn unstrukturierte Inhalte gelesen, eingeordnet oder für eine Prüfung vorbereitet werden sollen.',
          'In beiden Fällen braucht der Ablauf definierte Zustände. Eine fehlende Information, eine Ablehnung oder ein nicht erreichbares System muss zu einer sichtbaren nächsten Aufgabe führen.',
        ],
        table: {
          headings: ['Teil des Ablaufs', 'Vor der Umsetzung zu klären'],
          rows: [
            [
              'Auslöser',
              'Wann beginnt der Vorgang, und woran wird er eindeutig erkannt?',
            ],
            [
              'Regel',
              'Welche Information entscheidet über den nächsten Schritt?',
            ],
            ['Freigabe', 'Welche Aktion darf erst nach Bestätigung erfolgen?'],
            [
              'Ausnahme',
              'Wer übernimmt, wenn Daten fehlen oder ein Schritt scheitert?',
            ],
          ],
        },
      },
      {
        id: 'praxis',
        title: 'Digitaler Betrieb braucht gemeinsame Zustände.',
        paragraphs: [
          'Die ParkeSicher-Anwendung zeigt Buchungen, Ankünfte, Preise und Verfügbarkeit in eigenen Ansichten. Sie ist ein Projektbeispiel für zusammenhängende betriebliche Daten. Darauf lässt sich erklären, warum konsistente Informationen für weitere Automatisierungen wichtig sind.',
          'Welche zusätzliche Automatisierung in deinem Betrieb sinnvoll ist, ergibt sich aus deinem konkreten Arbeitsablauf. Bestehende Software, Berechtigungen und die Verantwortung für die laufende Pflege werden dabei mitbetrachtet.',
        ],
        links: [
          { label: 'ParkeSicher im Detail', href: '/projekte/parkesicher' },
        ],
      },
      {
        id: 'bewertung',
        title: 'Vorher und nachher dieselbe Aufgabe betrachten.',
        paragraphs: [
          'Vor dem Start halten wir fest, wie der gewählte Vorgang heute bearbeitet wird. Danach lässt sich anhand derselben Aufgabe prüfen, ob Übertragungen, Rückfragen oder manuelle Schritte reduziert wurden. Eine pauschale Stundenersparnis lässt sich ohne diese Ausgangsdaten nicht seriös nennen.',
          'Der Umfang kann als abgegrenzter Automation Sprint geplant werden. Die bestehende Preisorientierung beginnt bei 4.900 € netto; benötigte Integrationen, Datenaufbereitung und Betrieb werden konkret vereinbart.',
        ],
        links: [
          {
            label: 'Schnittstellen und Datenübergaben',
            href: '/plattformen-web-apps/schnittstellen',
          },
          {
            label: 'KI-Assistenten mit Quellen und Freigaben',
            href: '/ki-automation/ki-assistenten',
          },
        ],
      },
    ],
    faqs: [
      [
        'Müssen wir unsere bisherigen Programme ersetzen?',
        'Nicht automatisch. Zuerst prüfen wir, welche Aufgaben und Daten mit vorhandenen Schnittstellen sinnvoll verbunden werden können.',
      ],
      [
        'Kann man mit einem einzelnen Ablauf anfangen?',
        'Ja. Ein klar abgegrenzter Vorgang lässt sich planen, überprüfen und bei Bedarf erweitern.',
      ],
      [
        'Was passiert, wenn die Automatisierung scheitert?',
        'Hinweise, Zuständigkeiten und ein manueller Rückfallweg werden als Teil des Ablaufs festgelegt.',
      ],
    ],
    referenceIds: ['parkesicher'],
    related: [
      '/ki-automation/ki-assistenten',
      '/plattformen-web-apps/schnittstellen',
      '/wissen/web-app-oder-standardsoftware',
    ],
    modified: '2026-09-08',
  },
  {
    path: '/ki-automation/ki-assistenten',
    parent: '/ki-automation',
    kind: 'service',
    label: 'KI-Assistenten',
    title: 'KI-Assistenten für Unternehmenswissen & Anfragen | Nine.ai',
    description:
      'KI-Assistenten mit freigegebenen Quellen planen: Informationen finden, Anfragen vorsortieren und Antworten vorbereiten. Mit Zugriffsrechten und menschlicher Prüfung.',
    kicker: 'KI-ASSISTENTEN FÜR UNTERNEHMEN',
    heading: 'Wissen finden.\nAntworten mit Grundlage.',
    intro:
      'Wir planen KI-Assistenten für klar abgegrenzte Aufgaben: Informationen in freigegebenen Dokumenten finden, Anfragen einordnen oder Antworten vorbereiten. Quellen, Berechtigungen und Freigaben gehören von Anfang an dazu.',
    image: desktopImage(
      'mb-performance',
      'Fahrzeugauswahl bei MB Performance als Beispiel für strukturierte Unternehmensdaten',
      'Datenbasierte Website-Referenz MB Performance · gepflegte Informationen als Ausgangspunkt für digitale Werkzeuge',
    ),
    highlights: [
      'Freigegebene Quellen',
      'Nachvollziehbare Antworten',
      'Kontrolle bei wichtigen Schritten',
    ],
    sections: [
      {
        id: 'einsatz',
        title: 'Eine konkrete Aufgabe ist der richtige Anfang.',
        paragraphs: [
          'Ein Assistent wird hilfreicher, wenn klar ist, wer ihn benutzt und welche Frage er beantworten soll. Ein internes Werkzeug zur Dokumentensuche benötigt andere Grenzen als eine öffentlich sichtbare Antwortfunktion.',
          'Wir sammeln typische Fragen und die dazugehörigen verlässlichen Quellen. Ebenso wichtig sind Fragen, die das System nicht beantworten soll. Bei fehlenden, widersprüchlichen oder veralteten Informationen muss ein anderer nächster Schritt möglich sein.',
        ],
      },
      {
        id: 'quellen',
        title: 'Das Wissen muss zugänglich und freigegeben sein.',
        paragraphs: [
          'Ein KI-Projekt beginnt häufig bei der Ordnung vorhandener Informationen. Dokumente, Produktdaten und Arbeitsanweisungen haben unterschiedliche Verantwortliche und Aktualisierungszyklen. Das wird vor einer Anbindung geklärt.',
          'MB Performance zeigt als Datenbankprojekt, wie eine konsistente Zuordnung von Hersteller, Modell und Leistungsdaten eine Anwendung trägt. Es wird hier als Beispiel für strukturierte Daten gezeigt; eine KI-Funktion ist damit nicht belegt.',
        ],
        points: [
          {
            title: 'Verantwortung',
            text: 'Wer gibt eine Quelle frei und sorgt dafür, dass Änderungen übernommen werden?',
          },
          {
            title: 'Zugriff',
            text: 'Welche Informationen darf die jeweilige Nutzergruppe sehen? Diese Grenze muss auch für den Assistenten gelten.',
          },
          {
            title: 'Aktualität',
            text: 'Wie erkennt das Team, ob Antworten auf dem vorgesehenen Stand beruhen?',
          },
        ],
      },
      {
        id: 'pruefung',
        title: 'Antworten an realistischen Fragen prüfen.',
        paragraphs: [
          'Wir prüfen einen abgegrenzten Prototyp mit repräsentativen Fragen. Dabei werden auch unklare Formulierungen, fehlende Quellen und Aufgaben außerhalb des vorgesehenen Bereichs berücksichtigt.',
          'Der Maßstab ist eine fachlich brauchbare Antwort mit nachvollziehbarer Grundlage. Kritische Änderungen, Zusagen oder das Versenden einer Antwort können eine Freigabe durch dein Team verlangen. Ein Sprachmodell liefert keine pauschale Fehlerfreiheit.',
        ],
      },
      {
        id: 'angebot',
        title: 'Aus dem Prototyp wird ein definierter Umfang.',
        paragraphs: [
          'Datenanbindung, Oberfläche, Zugriffsrechte und laufende Nutzung beeinflussen den Aufwand. Wir unterscheiden die erste Prüfung von einer für den Betrieb vorgesehenen Lösung. Laufende Anbieter- und Nutzungskosten werden transparent mitbetrachtet.',
          'Wenn feste Regeln die Aufgabe bereits ausreichend lösen, kommt eine klassische Prozessautomatisierung infrage. Diese Entscheidung treffen wir anhand des Vorgangs und seiner Risiken.',
        ],
        links: [
          {
            label: 'Regelbasierte Prozessautomatisierung',
            href: '/ki-automation/prozessautomatisierung',
          },
          {
            label: 'Eigene Web-App oder Standardsoftware?',
            href: '/wissen/web-app-oder-standardsoftware',
          },
        ],
      },
    ],
    faqs: [
      [
        'Kann der Assistent ausschließlich interne Quellen nutzen?',
        'Die vorgesehenen Quellen und Zugriffe lassen sich als Teil des Konzepts festlegen. Wie die gewählte technische Lösung diese Vorgaben umsetzt, wird vor dem Betrieb geprüft.',
      ],
      [
        'Wer prüft schwierige Antworten?',
        'Für wichtige oder unsichere Ergebnisse werden Verantwortliche und Freigabeschritte vereinbart. Der Assistent soll einen nachvollziehbaren Übergang an dein Team ermöglichen.',
      ],
      [
        'Was braucht ihr für ein erstes Gespräch?',
        'Eine klar beschriebene Aufgabe, typische Fragen, anonymisierte Beispielquellen und die vorgesehenen Nutzergruppen reichen für den Einstieg in die Planung.',
      ],
    ],
    referenceIds: [],
    related: [
      '/ki-automation/prozessautomatisierung',
      '/plattformen-web-apps/kundenportale',
      '/wissen/website-briefing',
    ],
    modified: '2026-09-08',
  },
];
