import { desktopImage, type EditorialPage } from './types';

const common = {
  parent: '/wissen',
  kind: 'article' as const,
  kicker: 'WISSEN FÜR DEIN VORHABEN',
  modified: '2026-09-08',
  highlights: [],
};

export const guidePages: EditorialPage[] = [
  {
    ...common,
    path: '/wissen/was-kostet-eine-website',
    label: 'Was kostet eine Website?',
    title: 'Was kostet eine Website? Pakete & Zusatzkosten | Nine.ai',
    description:
      'Website-Kosten verständlich vergleichen: 1.990 €, 6.900 € oder 12.900 € netto bei Nine.ai. Welche Leistungen enthalten sind und was separat hinzukommt.',
    heading: 'Was kostet deine\nneue Website?',
    intro:
      'Bei Nine.ai beginnt eine kompakte Landingpage bei 1.990 € netto. Entscheidend für den passenden Preis sind die Inhalte, die unterschiedlichen Seitentypen und die Funktionen, die dein Unternehmen braucht.',
    image: desktopImage(
      'meister-lorenz',
      'Meister Lorenz: Unternehmenswebsite als Beispiel für einen eigenständigen Firmenauftritt',
      'Kundenprojekt Meister Lorenz. Der tatsächliche Projektpreis wird hier nicht veröffentlicht.',
    ),
    sections: [
      {
        id: 'pakete',
        title: 'Vier Angebote, vier Ausgangspunkte.',
        paragraphs: [
          'Vergleiche Angebote zuerst nach dem Ergebnis: Eine einzelne Seite für eine bestimmte Leistung hat einen anderen Umfang als ein Unternehmensauftritt mit mehreren Seitentypen. Ein Buchungsportal bringt zusätzlich Daten, Nutzerrechte und Geschäftsregeln mit.',
        ],
        table: {
          headings: ['Angebot', 'Nettopreis', 'Passt zu'],
          rows: [
            [
              'Nine Start',
              '1.990 € einmalig',
              'Eine Landingpage mit vorhandenen Texten und Bildern, Kontaktformular, mobiler Gestaltung und einer Korrekturrunde.',
            ],
            [
              'Nine Launch',
              '6.900 € einmalig',
              'Ein neuer Unternehmensauftritt im beschriebenen Paketumfang.',
            ],
            [
              'Nine Growth',
              '12.900 € einmalig',
              'Ein größerer Auftritt mit vorbereitetem Werbestart. Laufende Ads-Betreuung und Anzeigenbudget kommen separat hinzu.',
            ],
            [
              'Nine X',
              'Preis auf Anfrage',
              'Ein individueller Umfang, etwa mit Kundenportal, Konfigurator oder Schnittstellen.',
            ],
          ],
        },
        links: [
          {
            label: 'Den vollständigen Leistungsumfang vergleichen',
            href: '/pakete',
          },
        ],
      },
      {
        id: 'preistreiber',
        title: 'Diese Entscheidungen verändern den Aufwand.',
        paragraphs: [
          'Zehn ähnlich aufgebaute Leistungsseiten können auf einem gemeinsamen Layout basieren. Startseite, Produktkonfigurator und geschützter Kundenbereich sind dagegen drei sehr unterschiedliche Aufgaben. Eine reine Seitenzahl reicht deshalb für einen fairen Vergleich selten aus.',
        ],
        points: [
          {
            title: 'Texte und Bilder',
            text: 'Sind Inhalte fertig und verwendbar oder müssen Angebot, Text und Bildsprache erst erarbeitet werden? Nine Start setzt vorhandene Inhalte voraus.',
          },
          {
            title: 'Funktionen',
            text: 'Eine Nachricht über ein Formular ist etwas anderes als eine verbindliche Buchung mit Verfügbarkeiten und Zahlung. Besondere Funktionen werden getrennt beschrieben.',
          },
          {
            title: 'Übernahme und Pflege',
            text: 'Bei einer bestehenden Website gehören Inhaltsübernahme und alte URLs auf die Aufgabenliste. Wer später Inhalte bearbeitet und welche Einführung gebraucht wird, sollte im Angebot stehen.',
          },
        ],
      },
      {
        id: 'laufende-kosten',
        title: 'Der Kaufpreis ist nur ein Teil der Planung.',
        paragraphs: [
          'Domain, Hosting und Fremdlizenzen sind bei den Website-Paketen separat zu betrachten. Neue Texte, Fotografie und zusätzliche Inhalte können weiteren Aufwand erzeugen. Wartung und spätere Änderungen vereinbaren wir passend zum System.',
          'Plane deshalb zwei Budgets: eines für die Erstellung und eines für den Betrieb. Lass dir bei laufenden Leistungen erklären, was enthalten ist, wie Änderungen abgerechnet werden und wie du an Inhalte und Zugänge kommst. Unsere Website-Paketpreise sind feste Nine.ai-Angebote für den beschriebenen Umfang, keine Aussage über allgemeine Marktpreise.',
        ],
      },
      {
        id: 'angebot-vergleichen',
        title: 'So wird ein Angebot vergleichbar.',
        paragraphs: [
          'Notiere dein wichtigstes Ziel, die benötigten Seitentypen, vorhandene Inhalte und unverzichtbare Funktionen. Bitte um eine getrennte Aufstellung von Erstellung, Betrieb und optionalen Erweiterungen. Kläre außerdem Korrekturrunden, Freigaben und die Übergabe.',
          'Ein günstiger Einstieg passt, wenn ein klares Angebot im Vordergrund steht. Bei mehreren Zielgruppen oder individuellen Abläufen lohnt sich eine genaue Planung vor der Preisentscheidung.',
        ],
        links: [
          {
            label: 'Dein Website-Briefing vorbereiten',
            href: '/wissen/website-briefing',
          },
          {
            label: 'Website unverbindlich anfragen',
            href: '/website-erstellen-lassen',
          },
        ],
      },
    ],
    faqs: [
      [
        'Sind die Preise brutto oder netto?',
        'Alle hier genannten Nine.ai-Paketpreise sind Nettopreise. Die jeweils anfallende Umsatzsteuer kommt hinzu.',
      ],
      [
        'Kann ich später erweitern?',
        'Ja. Zusätzliche Inhalte und Funktionen planen und kalkulieren wir als eigenen Umfang. Was später sinnvoll ist, berücksichtigen wir bereits bei der ersten Planung.',
      ],
    ],
    referenceIds: ['meister-lorenz', 'prime-energie'],
    related: ['/websites', '/wissen/website-relaunch-checkliste', '/pakete'],
  },
  {
    ...common,
    path: '/wissen/website-relaunch-checkliste',
    label: 'Website-Relaunch planen',
    title: 'Website-Relaunch: Checkliste von Bestand bis Start | Nine.ai',
    description:
      'Relaunch vorbereiten: wichtige Inhalte sichern, alte und neue URLs zuordnen, mobile Kontaktwege prüfen und den neuen Auftritt nach dem Start kontrollieren.',
    heading: 'Neue Website.\nGut vorbereiteter Wechsel.',
    intro:
      'Ein Relaunch verändert häufig mehr als das Design. Sichere zuerst deine vorhandenen Inhalte und Anfragewege. Plane anschließend, welche Seiten bleiben, welche zusammengeführt werden und welche neu entstehen.',
    image: desktopImage(
      'gardentime',
      'Garden Time Frankfurt: Website mit Leistungen und Anfragebereich',
      'Kundenprojekt Garden Time. Ein Beispiel für die Verbindung aus Leistungsdarstellung und Kontaktweg.',
    ),
    sections: [
      {
        id: 'bestand',
        title: '1. Den aktuellen Auftritt erfassen.',
        paragraphs: [
          'Lege eine Liste der vorhandenen Seiten, Downloads und wichtigen Bilder an. Ergänze, welche Inhalte Anfragen auslösen, über die Suche besucht werden oder von anderen Websites verlinkt sind. Wenn Messdaten fehlen, beginne mit dem Inhalt und den bekannten Kundenfragen.',
          'Sichere außerdem Domain- und Hostingzugänge, Inhalte, Formularempfänger und vorhandene Weiterleitungen. Eine Vorschau hilft bei der Abstimmung; sie sollte bis zur Freigabe geschützt bleiben.',
        ],
      },
      {
        id: 'zuordnung',
        title: '2. Jede alte Adresse bekommt eine Entscheidung.',
        paragraphs: [
          'Eine kurze Zuordnungstabelle verhindert, dass gute Inhalte beim Umbau verloren gehen. Behalte funktionierende URLs möglichst bei. Wenn sich eine Adresse ändert, braucht sie ein passendes neues Ziel.',
        ],
        table: {
          headings: ['Alter Inhalt', 'Entscheidung', 'Technische Folge'],
          rows: [
            [
              'Leistungsseite bleibt',
              'Inhalt und Adresse übernehmen',
              'Neue Darstellung unter derselben URL.',
            ],
            [
              'Zwei ähnliche Seiten',
              'Zu einer hilfreichen Seite verbinden',
              'Dauerhaft auf das passende gemeinsame Ziel weiterleiten.',
            ],
            [
              'Leistung entfällt',
              'Prüfen, ob ein echter Ersatz existiert',
              'Ohne passenden Ersatz einen korrekten 404- oder 410-Status ausliefern.',
            ],
          ],
        },
        links: [
          {
            label: 'Googles Anleitung für Website-Umzüge',
            href: 'https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes',
          },
        ],
      },
      {
        id: 'vor-start',
        title: '3. Den Weg zur Anfrage komplett prüfen.',
        paragraphs: [
          'Teste die häufigsten Aufgaben vom Einstieg bis zum Ergebnis. Ein Formular ist erst geprüft, wenn eine Testanfrage gespeichert beziehungsweise beim vorgesehenen Empfänger angekommen ist. Ein schöner Bestätigungstext allein belegt das nicht.',
        ],
        points: [
          {
            title: 'Auf dem Smartphone',
            text: 'Menü, Paketwahl, Formularfelder und Telefonnummern müssen mit dem Finger bedienbar sein. Prüfe auch Fehlermeldungen und lange Texte.',
          },
          {
            title: 'Inhalte und Suchmaschinen',
            text: 'Seitentitel, Hauptüberschrift, sichtbare Texte, Canonicals und interne Links müssen zur neuen Seite passen. Prüfe die tatsächlich ausgelieferte Seite, nicht nur den Entwurf.',
          },
          {
            title: 'Zuständigkeiten',
            text: 'Halte fest, wer Texte und Bilder freigibt, rechtliche Angaben liefert, Domainänderungen vornimmt und nach dem Start Anfragen kontrolliert.',
          },
        ],
      },
      {
        id: 'nach-start',
        title: '4. Nach dem Start weiter hinschauen.',
        paragraphs: [
          'Prüfe veröffentlichte Seiten, Weiterleitungen und Formulare erneut. Entwicklungsbedingte Indexierungssperren gehören von den freigegebenen öffentlichen Seiten entfernt; interne oder private Bereiche bleiben entsprechend geschützt.',
          'Reiche die aktuelle Sitemap in der Search Console ein und beobachte Indexierung, Fehlseiten und Suchanfragen. Bei größeren URL-Änderungen können Suchpositionen vorübergehend schwanken. Ein dokumentierter Bestand hilft, echte Probleme von normalen Veränderungen zu unterscheiden.',
        ],
        links: [
          {
            label: 'Inhalte für die neue Website vorbereiten',
            href: '/wissen/website-briefing',
          },
        ],
      },
    ],
    faqs: [
      [
        'Muss sich bei einem Relaunch die Domain ändern?',
        'Nein. Design, Inhalte und Technik können unter der bestehenden Domain erneuert werden. Ein Domainwechsel ist eine eigene Entscheidung mit zusätzlicher Planung.',
      ],
      [
        'Soll jede alte Seite auf die Startseite weiterleiten?',
        'Nein. Wähle ein inhaltlich passendes Ziel. Gibt es keinen Ersatz, sollte die Adresse einen korrekten Fehlerstatus liefern.',
      ],
    ],
    referenceIds: ['gardentime'],
    related: [
      '/websites',
      '/wissen/was-kostet-eine-website',
      '/websites/dienstleister',
    ],
  },
  {
    ...common,
    path: '/wissen/web-app-oder-standardsoftware',
    label: 'Web-App oder Standardsoftware?',
    title: 'Eigene Web-App oder Standardsoftware? Entscheidungshilfe | Nine.ai',
    description:
      'Welche Lösung passt zu deinem Betrieb? Vergleiche Standardsoftware und individuelle Web-Apps anhand von Abläufen, Schnittstellen, Daten und Betrieb.',
    heading: 'Software auswählen.\nVom Alltag aus denken.',
    intro:
      'Passt ein vorhandenes Produkt zu deinen wichtigsten Abläufen, kann es ein guter Einstieg sein. Eine eigene Web-App wird interessant, wenn besondere Regeln, Daten oder Nutzerrollen dein Vorhaben bestimmen.',
    image: desktopImage(
      'parkesicher',
      'ParkeSicher: individuelle Parkplatzsuche und Buchungsplattform',
      'ParkeSicher verbindet die öffentliche Buchung mit einer eigenen Anwendung für den Betrieb.',
    ),
    sections: [
      {
        id: 'ablauf',
        title: 'Beschreibe zuerst einen vollständigen Ablauf.',
        paragraphs: [
          'Nimm einen echten Vorgang: Ein Kunde bucht, der Betrieb prüft die Kapazität, eine Zahlung trifft ein und später ändert sich der Zeitraum. Wer bearbeitet welchen Schritt? Welche Daten werden benötigt? Was passiert bei einer Ausnahme?',
          'Teste diesen Vorgang mit einer vorhandenen Lösung, bevor du nur Funktionslisten vergleichst. Ein System kann alle gewünschten Schlagwörter enthalten und trotzdem an einer wichtigen Betriebsregel scheitern.',
        ],
      },
      {
        id: 'vergleich',
        title: 'Diese Fragen machen den Unterschied sichtbar.',
        paragraphs: [
          'Die folgende Gegenüberstellung ist eine Planungshilfe. Konkrete Produkte, Verträge und Entwicklungsangebote müssen jeweils einzeln geprüft werden.',
        ],
        table: {
          headings: [
            'Frage',
            'Standardsoftware prüfen',
            'Eigene Web-App planen',
          ],
          rows: [
            [
              'Passt der Ablauf?',
              'Sind benötigte Regeln bereits vorhanden oder konfigurierbar?',
              'Welche Regeln müssen eigens entwickelt und getestet werden?',
            ],
            [
              'Wer darf was sehen?',
              'Reichen Rollen und Berechtigungen des Produkts?',
              'Welche Rollen und Datenzugriffe braucht der Betrieb?',
            ],
            [
              'Wie fließen Daten?',
              'Gibt es geeignete APIs, Exporte und dokumentierte Grenzen?',
              'Welche Schnittstellen werden gebaut und wer pflegt sie?',
            ],
            [
              'Was kostet der Betrieb?',
              'Lizenzen, Nutzer, Transaktionen und Zusatzmodule betrachten.',
              'Hosting, Wartung, Support und Änderungen einplanen.',
            ],
            [
              'Wie ist ein Wechsel möglich?',
              'Export, Kündigungsbedingungen und Datenformate prüfen.',
              'Übergabe, Quellcode, Nutzungsrechte und Dokumentation vereinbaren.',
            ],
          ],
        },
      },
      {
        id: 'kombination',
        title: 'Auch eine Kombination kann passen.',
        paragraphs: [
          'Nicht jeder Baustein braucht eine Eigenentwicklung. Eine individuelle Oberfläche kann vorhandene Systeme über Schnittstellen verbinden. Dafür muss klar sein, welches System bei widersprüchlichen Angaben entscheidet und wer Fehler bearbeitet.',
          'Bei MB Performance steht die Fahrzeugauswahl mit eigener Datenbank im Mittelpunkt. Bei ParkeSicher sind es Buchung und Verwaltung. Diese Beispiele zeigen unterschiedliche Anforderungen; sie beweisen nicht, dass jede Firma eine eigene Plattform benötigt.',
        ],
      },
      {
        id: 'entscheidung',
        title: 'Halte die erste Version bewusst überschaubar.',
        paragraphs: [
          'Trenne unverzichtbare Abläufe von späteren Erweiterungen. Lege messbare Abnahmekriterien fest, zum Beispiel: Eine berechtigte Person kann einen Zeitraum sperren, und der Zeitraum wird anschließend nicht mehr angeboten.',
          'Für ein individuelles Vorhaben beginnt Nine.ai mit einer gemeinsamen Planung. Platform Discovery kostet 2.900 € netto und dient der Klärung von Umfang, Abläufen und Umsetzung. Die anschließende Entwicklung wird gesondert angeboten.',
        ],
        links: [
          {
            label: 'Web-Apps und Entwicklung bei Nine.ai',
            href: '/plattformen-web-apps',
          },
          {
            label: 'Schnittstellen mitplanen',
            href: '/plattformen-web-apps/schnittstellen',
          },
        ],
      },
    ],
    faqs: [
      [
        'Ist eine Web-App dasselbe wie eine native App?',
        'Eine Web-App wird im Browser genutzt. Eine native App wird für eine bestimmte Plattform entwickelt und üblicherweise installiert. Nine.ai bietet Web-Apps an; native Apps werden nur auf besondere Anfrage geprüft.',
      ],
      [
        'Lässt sich klein anfangen?',
        'Ja. Wenn Datenmodell und Zuständigkeiten mitgedacht werden, kann zunächst ein klar begrenzter Ablauf umgesetzt werden. Weitere Funktionen sind eigene Ausbaustufen.',
      ],
    ],
    referenceIds: ['parkesicher', 'mb-performance'],
    related: [
      '/plattformen-web-apps/kundenportale',
      '/wissen/buchungssystem-planen',
      '/plattformen-web-apps/konfiguratoren',
    ],
  },
  {
    ...common,
    path: '/wissen/buchungssystem-planen',
    label: 'Ein Buchungssystem planen',
    title: 'Buchungssystem planen: Kapazität, Preise & Abläufe | Nine.ai',
    description:
      'Die wichtigsten Entscheidungen vor der Entwicklung eines Buchungssystems: Verfügbarkeit, Preisregeln, Zahlung, Änderungen und Rollen. Mit ParkeSicher-Einblicken.',
    heading: 'Damit aus „gebucht“\nein klarer Ablauf wird.',
    intro:
      'Vor der Entwicklung eines Buchungssystems müssen Angebot, Kapazität und Statusregeln feststehen. Ein Kalender zeigt freie Termine. Der Betrieb braucht zusätzlich Antworten auf Zahlung, Änderungen und Ausnahmen.',
    image: desktopImage(
      'parkesicher',
      'ParkeSicher: Flughafen und Reisezeitraum als Einstieg in eine Buchung',
      'Öffentliche Buchungsstrecke von ParkeSicher. Interne Systemansichten findest du im Projektbericht.',
    ),
    sections: [
      {
        id: 'angebot',
        title: 'Was genau wird gebucht?',
        paragraphs: [
          'Ein Stellplatz, eine bestimmte Person oder ein Tisch sind unterschiedliche Ressourcen. Halte fest, ob eine Buchung eine konkrete Ressource oder einen Platz aus einem gemeinsamen Bestand belegt. Ergänze Dauer, Pufferzeiten und mögliche Zusatzleistungen.',
          'Ein hilfreicher Testfall: Zwei Personen versuchen gleichzeitig, die letzte verfügbare Einheit zu buchen. Das System muss entscheiden können, wann sie reserviert ist und wann eine nicht abgeschlossene Reservierung wieder freigegeben wird.',
        ],
      },
      {
        id: 'regeln',
        title: 'Die Regeln gehören vor die Bildschirmgestaltung.',
        paragraphs: [
          'Schreibe für jede Regel mindestens einen normalen Fall und eine Ausnahme auf. Daraus entstehen später die Prüfungen für die Umsetzung.',
        ],
        table: {
          headings: ['Bereich', 'Vorab klären', 'Beispiel für eine Ausnahme'],
          rows: [
            [
              'Verfügbarkeit',
              'Öffnungszeiten, Kapazität, Sperrzeiten und Vorlauf.',
              'Ein gesperrter Zeitraum überschneidet sich mit einer vorhandenen Buchung.',
            ],
            [
              'Preis',
              'Dauer, Saison, Extras und gültiger Preiszeitpunkt.',
              'Ein Kunde verlängert, nachdem sich die Preisliste geändert hat.',
            ],
            [
              'Zahlung',
              'Wann wird eine Buchung bestätigt?',
              'Der Zahlungsanbieter meldet denselben Vorgang zweimal.',
            ],
            [
              'Änderung',
              'Wer darf umbuchen oder stornieren?',
              'Eine Umbuchung trifft auf eine inzwischen ausgeschöpfte Kapazität.',
            ],
          ],
        },
      },
      {
        id: 'betrieb',
        title: 'Der Betrieb braucht seine eigene Sicht.',
        paragraphs: [
          'Kunden benötigen eine verständliche Buchung und Bestätigung. Mitarbeitende brauchen eine Übersicht über den Tag und die nächsten Aufgaben. Verantwortliche pflegen Preise, Verfügbarkeiten und Zugänge. Diese Rollen sollten nur die jeweils notwendigen Informationen und Aktionen erhalten.',
          'Bei ParkeSicher zeigen die bereitgestellten Ansichten unter anderem Ankünfte, Buchungen, Preise und gesperrte Zeiträume. Personenbezogene Angaben sind in unseren Referenzaufnahmen anonymisiert.',
        ],
        links: [
          {
            label: 'ParkeSicher: Buchung und Betrieb im Detail',
            href: '/projekte/parkesicher',
          },
        ],
      },
      {
        id: 'startumfang',
        title: 'Mit einer prüfbaren ersten Version starten.',
        paragraphs: [
          'Eine erste Version könnte einen Standort, eine Preislogik und einen klar definierten Buchungsablauf abdecken. Entscheidend ist, dass dieser Ablauf vollständig funktioniert – einschließlich Fehlerfällen, Benachrichtigung und Verwaltung.',
          'Vereinbare vor dem Start, wer Bestandsdaten liefert, Regeln freigibt und Sonderfälle entscheidet. Notiere außerdem, wie Daten exportiert werden, wer den laufenden Betrieb betreut und wie Ausfälle bemerkt werden. So lässt sich der Entwicklungsumfang konkreter anbieten.',
        ],
        links: [
          {
            label: 'Buchungssystem entwickeln lassen',
            href: '/plattformen-web-apps/buchungssysteme',
          },
        ],
      },
    ],
    faqs: [
      [
        'Muss die Zahlung sofort integriert werden?',
        'Das hängt vom Ablauf ab. Eine Reservierungsanfrage und eine verbindlich bezahlte Buchung haben unterschiedliche Anforderungen. Die Entscheidung gehört in die Planung.',
      ],
      [
        'Kann die Verwaltung auf dem Handy funktionieren?',
        'Ja. Die benötigten Aufgaben sollten für kleine Bildschirme geplant werden. Im ParkeSicher-Projekt zeigen wir die vom Auftraggeber bereitgestellten mobilen Verwaltungsansichten.',
      ],
    ],
    referenceIds: ['parkesicher', 'un-petit-cafe'],
    related: [
      '/plattformen-web-apps/buchungssysteme',
      '/plattformen-web-apps/kundenportale',
      '/wissen/web-app-oder-standardsoftware',
    ],
  },
  {
    ...common,
    path: '/wissen/google-ads-budget-planen',
    label: 'Google-Ads-Budget planen',
    title: 'Google-Ads-Budget planen: Kosten und Anfragen verstehen | Nine.ai',
    description:
      'Werbebudget, Betreuung und Landingpage getrennt planen. Eine transparente Beispielrechnung zeigt, wie Klickkosten und Anfragequote zusammenhängen.',
    heading: 'Werbung planen.\nMit nachvollziehbaren Zahlen.',
    intro:
      'Für Google Ads gibt es kein pauschal richtiges Monatsbudget. Plane getrennt, was an Google geht, was die Betreuung kostet und ob deine Zielseite bereits bereit ist. Danach zählt die Qualität der eingehenden Anfragen.',
    image: desktopImage(
      'prime-energie',
      'Prime Energie: Website mit Tarifangebot und Anfrageweg',
      'Prime Energie ist eine Website-Referenz. Aus dem gezeigten Auftritt lassen sich keine Ads-Kosten oder Kampagnenergebnisse ableiten.',
    ),
    sections: [
      {
        id: 'kosten',
        title: 'Drei Kostenbereiche sauber trennen.',
        paragraphs: [
          'Dein Anzeigenbudget bezahlt die Ausspielung bei Google. Die Betreuung umfasst die vereinbarten Arbeiten an Kampagnen und Auswertung. Eine neue Landingpage, zusätzliche Inhalte oder eine neue Messung können eigene Projektleistungen sein.',
          'Nine Scale wird mit 1.490 € netto pro Monat für den beschriebenen Betreuungsumfang angeboten. Das Google-Werbebudget ist nicht enthalten. Eine kompakte Website-Landingpage ist mit Nine Start für 1.990 € netto im definierten Umfang möglich. Welche Kombination passt, hängt von deinem Bestand ab.',
        ],
        links: [
          { label: 'Google-Ads-Betreuung ansehen', href: '/google-ads-growth' },
          { label: 'Pakete und Leistungen vergleichen', href: '/pakete' },
        ],
      },
      {
        id: 'beispiel',
        title: 'Eine Rechnung zum Verständnis.',
        paragraphs: [
          'Die folgenden Zahlen sind frei gewählte Rechenannahmen. Sie sind weder Marktwerte noch eine Prognose für dein Unternehmen: 1.000 € Anzeigenbudget, 5 € pro Klick und 5 % Anfragequote.',
        ],
        table: {
          headings: ['Schritt', 'Rechnung', 'Beispielergebnis'],
          rows: [
            ['Besuche aus Anzeigen', '1.000 € ÷ 5 €', '200 Klicks'],
            ['Eingegangene Anfragen', '200 × 5 %', '10 Anfragen'],
            ['Reine Anzeigenkosten je Anfrage', '1.000 € ÷ 10', '100 €'],
            [
              'Bei nur 2 % Anfragequote',
              '1.000 € ÷ 4 Anfragen',
              '250 € je Anfrage',
            ],
          ],
        },
        points: [
          {
            title: 'Noch keine Kundengewinnungskosten',
            text: 'Betreuung und weitere Kosten fehlen in dieser Beispielrechnung. Außerdem wird nicht jede Anfrage zu einem Auftrag. Für die Wirtschaftlichkeit brauchst du qualifizierte Anfragen, Abschlüsse und den tatsächlichen Wert dieser Aufträge.',
          },
        ],
      },
      {
        id: 'recherche',
        title: 'Die Annahmen durch echte Daten ersetzen.',
        paragraphs: [
          'Nutze den Keyword-Planer mit deinem Zielgebiet und den passenden Suchthemen als Ausgangspunkt. Eine deutschlandweite Schätzung ist nicht automatisch auf eine einzelne Stadt übertragbar. Prognosen sind Schätzungen und ersetzen keine laufenden Kampagnendaten.',
          'Halte Angebot und Suchabsicht eng zusammen: Wer nach einer Website zum Festpreis sucht, sollte auf der Zielseite Preis, Umfang, passende Projekte und einen einfachen Anfrageweg finden. Miss anschließend den tatsächlichen Anfrageeingang. Ein Klick auf den Kontaktbutton ist ein anderes Ereignis.',
        ],
        links: [
          {
            label: 'Googles Erklärung zu Keyword-Planer-Prognosen',
            href: 'https://support.google.com/google-ads/answer/3022575?hl=de',
          },
          {
            label: 'Anfragen korrekt messen',
            href: '/google-ads-growth/conversion-tracking',
          },
        ],
      },
      {
        id: 'steuerung',
        title: 'Ein Budget braucht eine klare Entscheidungsschleife.',
        paragraphs: [
          'Lege vor dem Start Zielgebiet, beworbene Leistung und die Merkmale einer passenden Anfrage fest. Prüfe danach Suchbegriffe, echte Kontakte und die Qualität der Gespräche. Ändere gezielt, damit sich die Wirkung zuordnen lässt.',
          'Google arbeitet mit durchschnittlichen Tagesbudgets. Bei den meisten Kampagnen können einzelne Tage darüber liegen; Google beschreibt die jeweiligen Ausgabenlimits in seiner Hilfe. Plane den Monat deshalb anhand der im Konto geltenden Budgetregeln und kontrolliere die tatsächlichen Ausgaben.',
        ],
        links: [
          {
            label: 'Google: durchschnittliche Tagesbudgets und Limits',
            href: 'https://support.google.com/google-ads/answer/6385083?hl=de',
          },
        ],
      },
    ],
    faqs: [
      [
        'Kann ich mit einem kleinen Budget anfangen?',
        'Ein begrenzter Test kann sinnvoll sein, wenn Zielgebiet und Angebot eng gefasst sind. Ob genügend Daten entstehen, hängt unter anderem von den tatsächlichen Klickkosten und der Nachfrage ab.',
      ],
      [
        'Garantiert mehr Budget mehr passende Anfragen?',
        'Nein. Suchbegriffe, Angebot, Wettbewerb, Zielseite und Anfragequalität beeinflussen das Ergebnis. Eine Erhöhung sollte sich auf beobachtete Daten stützen.',
      ],
    ],
    referenceIds: [],
    related: [
      '/google-ads-growth/suchanzeigen',
      '/google-ads-growth/landingpages',
      '/google-ads-growth/conversion-tracking',
    ],
  },
  {
    ...common,
    path: '/wissen/website-briefing',
    label: 'Das Website-Briefing',
    title: 'Website-Briefing: Diese Angaben helfen beim Angebot | Nine.ai',
    description:
      'Ein gutes Website-Briefing braucht keine Fachsprache. Sammle Ziel, Zielgruppe, Leistungen, Inhalte, Funktionen und Zuständigkeiten für ein konkretes Angebot.',
    heading: 'Deine Website planen.\nMit den richtigen Angaben.',
    intro:
      'Du musst vor dem ersten Gespräch keine fertige Website konzipieren. Beschreibe, wem du was anbietest und welche Handlung ein Besucher als Nächstes ausführen soll. Mit diesen Angaben lässt sich der passende Umfang eingrenzen.',
    image: desktopImage(
      'loni-galabau',
      'Loni Garten- und Landschaftsbau: Leistungsdarstellung mit Projektbildern',
      'Kundenprojekt Loni Garten- und Landschaftsbau. Echte Arbeiten helfen Besuchern, die Leistung einzuordnen.',
    ),
    sections: [
      {
        id: 'ziel',
        title: '1. Ein Hauptziel festlegen.',
        paragraphs: [
          'Soll jemand ein Angebot anfragen, einen Termin reservieren, einen Tarif auswählen oder sich zunächst über mehrere Leistungen informieren? Notiere ein Hauptziel und die wichtigste Zielgruppe.',
          'Ein Gartenbaubetrieb könnte beispielsweise Anfragen für Terrassen erhalten wollen. Hilfreich wären dann Projektart, ungefährer Umfang und Einsatzort. Ein Café braucht dagegen gut auffindbare Öffnungszeiten, Speisekarte und einen klaren Reservierungsweg. Die Aufgabe bestimmt den Aufbau.',
        ],
      },
      {
        id: 'inhalt',
        title: '2. Das vorhandene Material sammeln.',
        paragraphs: [
          'Stelle Logo, verwendbare Bilder, Leistungsbeschreibungen und bisherige Website-Adressen zusammen. Kennzeichne, was aktuell ist und was neu erstellt werden muss. Bei Kundenfotos und Bewertungen sollte geklärt sein, was veröffentlicht werden darf.',
        ],
        table: {
          headings: ['Material', 'Hilfreiche Angabe'],
          rows: [
            [
              'Leistungen',
              'Was ist enthalten, für wen passt es und was muss vor einer Anfrage bekannt sein?',
            ],
            [
              'Referenzen',
              'Welche Arbeit wurde ausgeführt und welche Bilder oder Links dürfen gezeigt werden?',
            ],
            [
              'Preise',
              'Feste Pakete, Startpreise oder individueller Umfang? Welche Zusatzkosten gibt es?',
            ],
            [
              'Kontakt',
              'Geschäftliche Empfängeradresse, gewünschte Kontaktwege und zuständige Person.',
            ],
            [
              'Bestehende Website',
              'Wichtige Inhalte, Zugänge und URLs, die erhalten bleiben sollen.',
            ],
          ],
        },
      },
      {
        id: 'funktionen',
        title: '3. Funktionen mit einem Beispiel beschreiben.',
        paragraphs: [
          '„Wir brauchen eine Buchung“ lässt noch viele Fragen offen. „Ein Kunde wählt einen Termin; nach manueller Prüfung bestätigen wir ihn per E-Mail“ ist deutlich konkreter. Beschreibe auch, was passieren soll, wenn etwas nicht verfügbar ist.',
          'Notiere bestehende Programme und Datenquellen, die angebunden werden sollen. Bei MB Performance ist die Fahrzeugauswahl mit eigener Datenbank ein wesentlicher Teil des Vorhabens. Solche Funktionen gehören früh in das Briefing, weil sie über eine reine Informationswebsite hinausgehen.',
        ],
        links: [
          {
            label: 'Fahrzeugdatenbank bei MB Performance ansehen',
            href: '/projekte/mb-performance',
          },
        ],
      },
      {
        id: 'zusammenarbeit',
        title: '4. Zeit, Budget und Freigaben klären.',
        paragraphs: [
          'Nenne einen gewünschten Termin und den Anlass dafür. Gib einen Budgetrahmen an, falls er feststeht. Er hilft dabei, unverzichtbare Inhalte von späteren Erweiterungen zu trennen.',
          'Bestimme außerdem, wer Feedback sammelt und den Entwurf freigibt. Lege fest, wer später Inhalte ändern soll und welche Unterstützung dafür gebraucht wird. Ein kompaktes Briefing mit ehrlichen offenen Punkten ist hilfreicher als eine lange Wunschliste ohne Prioritäten.',
        ],
        points: [
          {
            title: 'Für das erste Gespräch reicht ein Absatz',
            text: 'Wir sind …, bieten … für … an. Die Website soll vor allem … ermöglichen. Vorhanden sind …; neu brauchen wir …. Unser gewünschter Start ist …; den Umfang möchten wir mit euch klären.',
          },
        ],
        links: [
          {
            label: 'Dein Vorhaben unverbindlich anfragen',
            href: '/website-erstellen-lassen',
          },
        ],
      },
    ],
    faqs: [
      [
        'Brauche ich fertige Texte vor der Anfrage?',
        'Nein. Sag uns, welche Inhalte vorhanden sind und wo Unterstützung nötig ist. Beim Einstiegspaket Nine Start werden vorhandene Texte und Bilder vorausgesetzt; neue Inhalte sind zusätzlicher Umfang.',
      ],
      [
        'Muss ich das passende Paket bereits kennen?',
        'Nein. Du kannst die Anfrage mit „Noch unsicher“ beginnen und dein Vorhaben beschreiben. Den passenden Umfang klären wir gemeinsam.',
      ],
    ],
    referenceIds: ['loni-galabau', 'mb-performance'],
    related: [
      '/wissen/was-kostet-eine-website',
      '/wissen/website-relaunch-checkliste',
      '/websites',
    ],
  },
];
