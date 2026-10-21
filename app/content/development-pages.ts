import { desktopImage, type EditorialPage } from './types';

export const developmentPages: EditorialPage[] = [
  {
    path: '/plattformen-web-apps/buchungssysteme',
    parent: '/plattformen-web-apps',
    kind: 'service',
    label: 'Buchungssysteme',
    title: 'Buchungssystem entwickeln lassen – individuell | Nine.ai',
    description:
      'Ein eigenes Buchungssystem für Zeiträume, Kapazitäten und Preise. Entdecke ParkeSicher und erfahre, welche Regeln vor der Entwicklung geklärt werden.',
    kicker: 'INDIVIDUELLE BUCHUNGSSYSTEME',
    heading: 'Online buchen.\nIm Betrieb den Überblick behalten.',
    intro:
      'Wir entwickeln Buchungssysteme, die deine Verfügbarkeit, Preisregeln und Arbeitsabläufe abbilden. Für Gäste entsteht ein verständlicher Abschluss; dein Team bekommt die passende Verwaltungsoberfläche.',
    image: desktopImage(
      'parkesicher',
      'ParkeSicher: Flughafen und Reisezeitraum als Einstieg in die Parkplatzbuchung',
      'Kundenprojekt ParkeSicher · Parkplatzsuche mit Reisezeitraum',
    ),
    highlights: [
      'Eigene Buchungsregeln',
      'Verfügbarkeit & Preise',
      'Verwaltung für dein Team',
    ],
    sections: [
      {
        id: 'bedarf',
        title: 'Wann lohnt sich ein eigenes Buchungssystem?',
        paragraphs: [
          'Ein individuelles System ist sinnvoll, wenn sich dein Angebot mit einer einfachen Terminauswahl nicht ausreichend abbilden lässt. Dazu gehören mehrere Anbieter, begrenzte Kapazitäten, verschiedene Preiszonen oder zusammenhängende An- und Abreisezeiten.',
          'Bevor wir entwickeln, prüfen wir, welche Aufgabe vorhandene Buchungssoftware bereits erfüllt. Entscheidend ist die konkrete Lücke: Welche Regeln fehlen, welche Informationen werden doppelt gepflegt und welche Abläufe muss dein Team außerhalb des Systems erledigen?',
        ],
        points: [
          {
            title: 'Eine Buchung, mehrere Perspektiven',
            text: 'Kunden wählen und buchen. Der Betrieb organisiert Verfügbarkeit und Übergaben. Die Verwaltung behält Status und Ausnahmen im Blick.',
          },
          {
            title: 'Preise mit nachvollziehbarer Logik',
            text: 'Zeiträume, Zusatzleistungen und saisonale Regeln werden vor der Umsetzung anhand konkreter Beispiele festgelegt.',
          },
        ],
      },
      {
        id: 'praxis',
        title: 'ParkeSicher zeigt beide Seiten der Buchung.',
        paragraphs: [
          'Bei ParkeSicher treffen die öffentliche Parkplatzsuche und eine eigene Anbieter-Anwendung aufeinander. Die Website führt über Flughafen und Reisezeitraum zu den Angeboten. Im Betrieb lassen sich Ankünfte, Buchungen, Preislisten und Verfügbarkeiten verwalten.',
          'Das ist der entscheidende Zusammenhang bei einem Buchungsprojekt: Ein Abschluss auf der Website muss im Arbeitsalltag sinnvoll ankommen. Deshalb betrachten wir die Kundenstrecke und die Verwaltungsansichten gemeinsam.',
        ],
        image: {
          src: '/project-images/parkesicher-availability.webp',
          width: 787,
          height: 1600,
          alt: 'ParkeSicher-Anbieteroberfläche mit Öffnungszeiten, Buchungsstatus und Sperrzeiträumen',
          caption: 'Eigene Anbieter-Anwendung · Verfügbarkeit und Sperrzeiten',
        },
        links: [
          {
            label: 'Das Projekt ParkeSicher ansehen',
            href: '/projekte/parkesicher',
          },
        ],
      },
      {
        id: 'planung',
        title: 'Diese Regeln klären wir vor dem ersten Entwurf.',
        paragraphs: [
          'Wir gehen eine Buchung vom ersten Interesse bis zur Durchführung durch. Dabei gehören auch Abbrüche, Änderungen und Stornierungen auf den Tisch. Ein schöner Kalender allein beantwortet diese Fragen noch nicht.',
        ],
        points: [
          {
            title: 'Kapazität',
            text: 'Was wird gebucht: ein Platz, eine Person, ein Zeitfenster oder eine Kombination? Wann wird eine Kapazität reserviert und wann wieder freigegeben?',
          },
          {
            title: 'Zahlung und Bestätigung',
            text: 'Gilt eine Anfrage sofort als Buchung? Welche Bestätigung ist nötig? Zahlungsanbieter, Erstattungen und offene Vorgänge werden gesondert festgelegt.',
          },
          {
            title: 'Betrieb und Zuständigkeit',
            text: 'Wer darf umbuchen, Preise ändern oder Zeiten sperren? Welche Meldung braucht das Team bei einer Ausnahme?',
          },
        ],
      },
      {
        id: 'umfang',
        title: 'Ein belastbares Angebot beginnt mit dem Umfang.',
        paragraphs: [
          'Ein Buchungssystem gehört zu Nine X und wird individuell kalkuliert. Als abgegrenzter Planungseinstieg steht die Platform Discovery für 2.900 € netto zur Verfügung. Sie dient dazu, Nutzerrollen, Buchungsregeln und Integrationen konkret zu beschreiben; sie ist noch keine fertige Plattform.',
          'Entwicklung, Zahlungsanbindung, Datenübernahme und laufender Betrieb werden anschließend anhand des vereinbarten Umfangs angeboten. So lässt sich ein erster nutzbarer Ablauf von späteren Erweiterungen unterscheiden.',
        ],
        links: [
          {
            label: 'Pakete und Planungseinstiege vergleichen',
            href: '/pakete',
          },
          {
            label: 'Buchungssystem Schritt für Schritt planen',
            href: '/wissen/buchungssystem-planen',
          },
        ],
      },
    ],
    faqs: [
      [
        'Könnt ihr ein bestehendes Buchungssystem erweitern?',
        'Wir prüfen zunächst Schnittstellen, Datenzugriff und erlaubte Erweiterungen. Daraus ergibt sich, ob eine Ergänzung, eine Verbindung oder ein schrittweiser Ersatz sinnvoll ist.',
      ],
      [
        'Gehört eine Online-Zahlung automatisch dazu?',
        'Nein. Zahlungsanbieter, Zahlungsarten und die Behandlung von Stornierungen werden als eigener Teil des Umfangs geplant.',
      ],
      [
        'Können mehrere Anbieter dieselbe Plattform nutzen?',
        'Ja, eine Plattform kann getrennte Anbieteransichten erhalten. Datenzugriffe, Zuständigkeiten und gemeinsame Regeln müssen dafür ausdrücklich festgelegt werden.',
      ],
    ],
    referenceIds: ['parkesicher'],
    related: [
      '/plattformen-web-apps/kundenportale',
      '/plattformen-web-apps/schnittstellen',
      '/wissen/buchungssystem-planen',
    ],
    modified: '2026-09-08',
  },
  {
    path: '/plattformen-web-apps/kundenportale',
    parent: '/plattformen-web-apps',
    kind: 'service',
    label: 'Kundenportale',
    title: 'Kundenportal entwickeln lassen – Rollen & Abläufe | Nine.ai',
    description:
      'Ein eigenes Kunden- oder Partnerportal für Buchungen, Daten und Status. Wir planen Nutzerrollen, Zugriffe und die Verbindung zu deinen bestehenden Systemen.',
    kicker: 'KUNDEN- UND PARTNERPORTALE',
    heading: 'Alles an einem Ort.\nFür jeden die richtige Ansicht.',
    intro:
      'Wir entwickeln Portale, in denen Kunden, Partner oder Mitarbeitende ihre Aufgaben selbst erledigen können. Mit klaren Zugriffsrechten, verständlichen Statusanzeigen und Daten aus den passenden Systemen.',
    image: {
      src: '/project-images/parkesicher-today.webp',
      width: 875,
      height: 1797,
      alt: 'Anbieterportal von ParkeSicher mit Tagesübersicht und anonymisierten Ankünften',
      caption: 'ParkeSicher · Tagesübersicht der eigenen Anbieter-Anwendung',
    },
    highlights: [
      'Kunden & Partner',
      'Rollen & Zugriffe',
      'Daten statt E-Mail-Suche',
    ],
    sections: [
      {
        id: 'aufgabe',
        title: 'Welche Aufgabe soll das Portal übernehmen?',
        paragraphs: [
          'Ein Kundenportal bietet einen geschützten Zugang zu Informationen und Aktionen, die zu einer bestimmten Person oder Firma gehören. Es kann etwa Buchungen, Auftragsstände oder Dokumente bündeln. Ein Partnerportal richtet diese Funktionen an Anbieter oder Geschäftspartner.',
          'Der richtige Einstieg ist eine wiederkehrende Aufgabe. Wenn dein Team häufig dieselben Statusfragen beantwortet oder Informationen aus verschiedenen Anwendungen zusammensucht, beschreiben wir diesen Ablauf zuerst. Daraus leiten sich die benötigten Ansichten ab.',
        ],
      },
      {
        id: 'rollen',
        title: 'Zugriffe gehören zum Entwurf.',
        paragraphs: [
          'Nicht jede angemeldete Person darf alles sehen oder verändern. Gemeinsam legen wir fest, welche Informationen einem Kunden, einem Anbieter und deinem internen Team gehören. Auch Vertretungen und das Ende eines Zugangs werden berücksichtigt.',
        ],
        table: {
          headings: ['Perspektive', 'Mögliche Aufgabe', 'Vorher zu klären'],
          rows: [
            [
              'Kunden',
              'Eigene Vorgänge und Dokumente aufrufen',
              'Welche Daten gehören zu welchem Konto?',
            ],
            [
              'Partner',
              'Angebote, Preise oder Verfügbarkeiten pflegen',
              'Welche Änderungen benötigen Freigabe?',
            ],
            [
              'Internes Team',
              'Ausnahmen bearbeiten und Zugänge verwalten',
              'Welche Rolle darf welche Aktion ausführen?',
            ],
          ],
        },
      },
      {
        id: 'beispiel',
        title: 'Ein Anbieterportal im echten Einsatz.',
        paragraphs: [
          'Die eigene Anwendung von ParkeSicher ordnet Aufgaben nach dem Arbeitsalltag: Heute, Buchungen, Umsatz, Preise und Betrieb. Eine Tagesansicht und eine Buchungsübersicht beantworten unterschiedliche Fragen, greifen aber auf denselben Geschäftsprozess zurück.',
          'Diese Struktur ist ein konkretes Beispiel für Portalentwicklung. Funktionen wie Rechnungsarchive oder Support-Tickets sind mögliche andere Anwendungsfälle und werden nicht als Bestandteil dieses Kundenprojekts behauptet.',
        ],
        image: {
          src: '/project-images/parkesicher-bookings.webp',
          width: 879,
          height: 1789,
          alt: 'ParkeSicher-Buchungsübersicht mit Zeitraumfilter und geschwärzten Kundendaten',
          caption:
            'Buchungen nach Zeitraum und Status · personenbezogene Angaben unkenntlich gemacht',
        },
        links: [
          {
            label: 'ParkeSicher als Projekt ansehen',
            href: '/projekte/parkesicher',
          },
        ],
      },
      {
        id: 'integration',
        title: 'Bestehende Systeme bleiben Teil der Planung.',
        paragraphs: [
          'Wir klären, welches System die maßgeblichen Daten führt. Das Portal kann eine Oberfläche für vorhandene Abläufe sein oder eigene Funktionen übernehmen. Schnittstellen, Anmeldung, Datenübernahme und spätere Pflege beeinflussen den Aufwand stärker als die Zahl der sichtbaren Seiten.',
          'Ein Kundenportal wird deshalb als individuelles Vorhaben angeboten. Vor der Umsetzung legen wir die wichtigsten Rollen und einen vollständigen ersten Ablauf fest. Zusätzliche Funktionen können darauf aufbauen.',
        ],
        links: [
          {
            label: 'Schnittstellen und Datenübergaben planen',
            href: '/plattformen-web-apps/schnittstellen',
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
        'Kann ein Portal in meine vorhandene Website integriert werden?',
        'Häufig lässt sich ein Portal als eigener Bereich verknüpfen oder passend zur vorhandenen Marke gestalten. Die technische Integration hängt von der bisherigen Website, Anmeldung und den verfügbaren Schnittstellen ab.',
      ],
      [
        'Können Mitarbeitende unterschiedliche Rechte bekommen?',
        'Ja. Welche Ansichten und Aktionen zu welcher Rolle gehören, wird vorab dokumentiert und bei der Umsetzung berücksichtigt.',
      ],
      [
        'Was braucht ihr für eine erste Einschätzung?',
        'Hilfreich sind die wichtigsten Nutzergruppen, drei typische Aufgaben, vorhandene Systeme und ein Beispiel dafür, welche Informationen heute per E-Mail oder Tabelle ausgetauscht werden.',
      ],
    ],
    referenceIds: ['parkesicher'],
    related: [
      '/plattformen-web-apps/buchungssysteme',
      '/plattformen-web-apps/schnittstellen',
      '/wissen/web-app-oder-standardsoftware',
    ],
    modified: '2026-09-08',
  },
  {
    path: '/plattformen-web-apps/bestellsysteme-gastronomie',
    parent: '/plattformen-web-apps',
    kind: 'service',
    label: 'Bestellsysteme für Gastronomie',
    title: 'Eigenes Bestellsystem für die Gastronomie | Nine.ai',
    description:
      'Bestellungen vom Tisch bis zur Küche: individuelle Webentwicklung für Gastronomie. Mit echten Einblicken in Tischauswahl, Speisekarte, Bon und Bestellstatus.',
    kicker: 'DIGITALE ABLÄUFE IN DER GASTRONOMIE',
    heading: 'Vom Tisch zur Küche.\nMit allem, was dazugehört.',
    intro:
      'Wir entwickeln Bestellsysteme für den konkreten Ablauf deines Betriebs. Tisch, Gericht, Menge, Extras und Küchenhinweise bleiben zusammen – auf einer Oberfläche, die dein Service im Alltag bedienen kann.',
    image: {
      src: '/project-images/cafe-order.webp',
      width: 867,
      height: 1600,
      alt: 'Bestellbon des Café-Systems mit Mengen, Extras und einer Küchen-Notiz',
      caption:
        'Kundenprojekt Un Petit Café / Toastclub · Bestellerfassung durch den Service',
    },
    highlights: [
      'Tische & Bestellstatus',
      'Speisen, Extras & Hinweise',
      'Eigener Ablauf im Browser',
    ],
    sections: [
      {
        id: 'betrieb',
        title: 'Ein Bestellsystem beginnt beim Service.',
        paragraphs: [
          'Eine Bestellung kann am Tisch, telefonisch, zur Abholung oder direkt online entstehen. Diese Abläufe brauchen unterschiedliche Informationen und Oberflächen. Deshalb legen wir zuerst fest, wer bestellt und wer den nächsten Schritt ausführt.',
          'Für einen Serviceablauf zählen kurze Wege: den richtigen Tisch wählen, Speisen finden, Sonderwünsche erfassen und den aktuellen Status erkennen. Änderungen und Rückfragen müssen ebenfalls einen Platz haben.',
        ],
      },
      {
        id: 'cafe',
        title: 'Das eigene System für Un Petit Café.',
        paragraphs: [
          'Zum Kundenprojekt Un Petit Café gehört neben der Website und dem Reservierungssystem auch eine eigene Bestellerfassung. Der Auftritt ist heute unter Toastclub Wiesbaden zu sehen. Die Systemansichten zeigen die Tischauswahl, eine durchsuchbare Speisekarte, den Bon mit Extras und Hinweise für die Küche.',
          'Der Tischstatus zeigt, welche Tische aktiv sind und wo Bestellungen bereitstehen. Namen von Mitarbeitenden wurden in den veröffentlichten Aufnahmen unkenntlich gemacht.',
        ],
        image: {
          src: '/project-images/cafe-status.webp',
          width: 862,
          height: 1600,
          alt: 'Tischübersicht mit aktiven Tischen und bereitstehenden Bestellungen',
          caption: 'Tisch- und Bestellstatus in einer gemeinsamen Übersicht',
        },
        links: [
          {
            label: 'Website und Bestellsystem im Projekt ansehen',
            href: '/projekte/un-petit-cafe',
          },
        ],
      },
      {
        id: 'umfang',
        title: 'Drei Abläufe, die wir getrennt planen.',
        paragraphs: [
          'Bestellung, Reservierung und Zahlung gehören fachlich zusammen, erfüllen aber unterschiedliche Aufgaben. Ein klarer Leistungsumfang verhindert, dass notwendige Funktionen erst kurz vor dem Start auffallen.',
        ],
        table: {
          headings: ['Bereich', 'Kernfrage', 'Typische Inhalte'],
          rows: [
            [
              'Bestellung',
              'Was soll an welchem Tisch ankommen?',
              'Artikel, Menge, Extras, Hinweise und Status',
            ],
            [
              'Reservierung',
              'Wer möchte wann kommen?',
              'Zeit, Personenzahl, Kontaktdaten und Bestätigung',
            ],
            [
              'Abrechnung',
              'Wie wird ein Vorgang bezahlt und verbucht?',
              'Zahlungsweg und mögliche Kassenanbindung gesondert klären',
            ],
          ],
        },
      },
      {
        id: 'start',
        title: 'Wir gehen einen echten Arbeitstag durch.',
        paragraphs: [
          'Für die Planung betrachten wir Stoßzeiten, Änderungen und typische Rückfragen. Welche Geräte nutzt der Service? Wer pflegt die Speisekarte? Wie erkennt die Küche eine neue oder geänderte Bestellung? Was passiert bei einer unterbrochenen Verbindung?',
          'Die Antworten bestimmen Oberfläche, Datenmodell und Integrationen. Eine bestehende Kasse wird nicht automatisch ersetzt. Ob und wie eine Verbindung möglich ist, prüfen wir anhand des verwendeten Systems. Die individuelle Entwicklung wird als Nine X angeboten.',
        ],
        links: [
          { label: 'Websites für Gastronomie', href: '/websites/gastronomie' },
          {
            label: 'Schnittstellen als Teil des Projekts',
            href: '/plattformen-web-apps/schnittstellen',
          },
        ],
      },
    ],
    faqs: [
      [
        'Ist das automatisch ein Kassensystem?',
        'Nein. Die gezeigte Lösung bildet Bestellerfassung und Serviceabläufe ab. Kasse, Abrechnung und deren Anforderungen müssen separat geprüft und vereinbart werden.',
      ],
      [
        'Können Gäste auch selbst bestellen?',
        'Eine Gäste-Bestellstrecke ist ein möglicher eigener Umfang. Die gezeigten Systemaufnahmen belegen die Bestellerfassung durch den Service.',
      ],
      [
        'Sind Reservierungen ebenfalls möglich?',
        'Ja. Ein Reservierungssystem kann zur Website gehören oder mit einem bestehenden Dienst verbunden werden. Verfügbarkeiten und Bestätigungsregeln stimmen wir für deinen Betrieb ab.',
      ],
    ],
    referenceIds: ['un-petit-cafe'],
    related: [
      '/websites/gastronomie',
      '/plattformen-web-apps/buchungssysteme',
      '/wissen/web-app-oder-standardsoftware',
    ],
    modified: '2026-09-08',
  },
  {
    path: '/plattformen-web-apps/konfiguratoren',
    parent: '/plattformen-web-apps',
    kind: 'service',
    label: 'Konfiguratoren & Datenbanken',
    title: 'Konfigurator programmieren lassen – mit Datenbank | Nine.ai',
    description:
      'Produkte und Leistungen passend auswählen: individuelle Konfiguratoren mit eigener Datenlogik. Referenz MB Performance mit Hersteller-, Modell- und Motorauswahl.',
    kicker: 'KONFIGURATOREN & DATENBANKEN',
    heading: 'Die passende Auswahl.\nAus vielen Möglichkeiten.',
    intro:
      'Wir entwickeln Auswahlstrecken, die aus deinem Sortiment oder deinen Leistungsdaten ein passendes Ergebnis machen. Die Oberfläche führt Schritt für Schritt; im Hintergrund stehen nachvollziehbare Regeln und gepflegte Daten.',
    image: desktopImage(
      'mb-performance',
      'MB Performance: Website für Chiptuning mit Fahrzeugauswahl',
      'Kundenprojekt MB Performance · Website mit eigener Fahrzeugdatenbank',
    ),
    highlights: [
      'Abhängige Auswahlschritte',
      'Eigene Datenstruktur',
      'Konkrete Anfrage statt Sucharbeit',
    ],
    sections: [
      {
        id: 'auswahl',
        title: 'Was soll am Ende der Auswahl feststehen?',
        paragraphs: [
          'Ein Konfigurator kann ein passendes Produkt, eine Leistung, einen Preisrahmen oder eine qualifizierte Anfrage liefern. Nicht jede Auswahl muss sofort einen verbindlichen Preis oder einen Kaufabschluss erzeugen. Das gewünschte Ergebnis bestimmt, welche Daten und Regeln benötigt werden.',
          'Wir beschreiben die Abhängigkeiten: Welche nächste Auswahl ist nach einem Hersteller, einer Kategorie oder einer Ausführung noch sinnvoll? Welche Kombinationen sind ausgeschlossen? Wie werden fehlende Informationen verständlich angezeigt?',
        ],
      },
      {
        id: 'fahrzeuge',
        title: 'Eine eigene Fahrzeugdatenbank für MB Performance.',
        paragraphs: [
          'Bei MB Performance werden Hersteller, Modell und Motor gewählt. Eine eigene Datenbank ordnet die Fahrzeuge und Leistungswerte in PS und kW zu. Interessenten können ihre Anfrage dadurch auf ein konkretes Fahrzeug beziehen.',
          'Das Projekt zeigt einen datenbasierten Auswahlweg. Die veröffentlichten Leistungsangaben gehören zum jeweiligen Kundenangebot; daraus leiten wir weder allgemeine Tuning-Ergebnisse noch Aussagen über andere Fahrzeuge ab.',
        ],
        links: [
          {
            label: 'Das Projekt MB Performance ansehen',
            href: '/projekte/mb-performance',
          },
        ],
      },
      {
        id: 'daten',
        title: 'Die Datenpflege ist Teil des Produkts.',
        paragraphs: [
          'Ein Auswahlwerkzeug bleibt nur hilfreich, wenn neue Modelle, Preise oder Eigenschaften zuverlässig eingepflegt werden können. Deshalb klären wir die Datenquelle und den Pflegeweg gleichzeitig mit dem sichtbaren Konfigurator.',
        ],
        points: [
          {
            title: 'Quelle',
            text: 'Kommen die Daten aus Tabellen, einer bestehenden Datenbank oder einer externen Schnittstelle? Wer darf sie verwenden und aktualisieren?',
          },
          {
            title: 'Regeln',
            text: 'Welche Kombinationen passen zusammen? Welche Werte sind Pflicht, welche optional? Wie werden neue Varianten geprüft?',
          },
          {
            title: 'Übergabe',
            text: 'Welche Auswahl soll im Kontaktformular, CRM oder Angebot ankommen? Ein eindeutiger Bezug verhindert Rückfragen zu Modell und Variante.',
          },
        ],
      },
      {
        id: 'planung',
        title: 'Mit einem vollständigen Beispiel starten.',
        paragraphs: [
          'Am Anfang genügt ein repräsentativer Teil deines Sortiments, mit dem wir die Regeln vollständig durchspielen können. Ein Beispiel mit einer einfachen und einer schwierigen Auswahl ist wertvoller als eine lange Liste geplanter Funktionen.',
          'Nach dieser Klärung legen wir den ersten Umfang, den Datenimport und die spätere Pflege fest. Konfiguratoren mit eigener Datenlogik gehören zu Nine X; eine große Datenübernahme oder laufende Fremddatenkosten werden gesondert angeboten.',
        ],
        links: [
          {
            label: 'Daten mit bestehenden Systemen verbinden',
            href: '/plattformen-web-apps/schnittstellen',
          },
        ],
      },
    ],
    faqs: [
      [
        'Kann der Konfigurator einen Preis berechnen?',
        'Ja, wenn die Preisregeln und Daten dafür vorliegen. Ob das Ergebnis ein Richtwert, ein verbindlicher Preis oder nur die Grundlage für ein Angebot ist, wird sichtbar und vertraglich klar abgegrenzt.',
      ],
      [
        'Können vorhandene Excel-Daten übernommen werden?',
        'Wir prüfen Aufbau, Vollständigkeit, Dubletten und Nutzungsrechte der Daten. Erst danach lässt sich ein sinnvoller Importweg und dessen Aufwand festlegen.',
      ],
      [
        'Funktioniert die Auswahl auf dem Handy?',
        'Die mobilen Schritte werden zusammen mit der Desktopansicht gestaltet. Auswahl, Ergebnis und Anfrage müssen auch auf kleinem Bildschirm verständlich bleiben.',
      ],
    ],
    referenceIds: ['mb-performance', 'entwurf-energie'],
    related: [
      '/plattformen-web-apps/schnittstellen',
      '/plattformen-web-apps/kundenportale',
      '/wissen/website-briefing',
    ],
    modified: '2026-09-08',
  },
  {
    path: '/plattformen-web-apps/schnittstellen',
    parent: '/plattformen-web-apps',
    kind: 'service',
    label: 'Schnittstellen & Datenübergaben',
    title: 'Schnittstellen entwickeln & Systeme verbinden | Nine.ai',
    description:
      'Website, Portal und bestehende Programme verbinden. Wir planen API-Anbindungen, Datenübergaben, Zuständigkeiten und den Umgang mit fehlerhaften Übertragungen.',
    kicker: 'SCHNITTSTELLEN & INTEGRATION',
    heading: 'Einmal erfassen.\nAm richtigen Ort weiterarbeiten.',
    intro:
      'Wir verbinden Websites und Web-Apps mit bestehenden Systemen. Dafür legen wir fest, welche Daten wohin fließen, welches System maßgeblich ist und wie dein Team mit Fehlern umgehen kann.',
    image: {
      src: '/project-images/parkesicher-bookings.webp',
      width: 879,
      height: 1789,
      alt: 'Strukturierte Buchungsvorgänge in der eigenen ParkeSicher-Anwendung',
      caption:
        'ParkeSicher · Beispiel für strukturierte Vorgänge; keine Darstellung einer bestimmten Drittanbieter-Integration',
    },
    highlights: [
      'Klare Datenverantwortung',
      'Nachvollziehbare Übertragung',
      'Fehler sichtbar machen',
    ],
    sections: [
      {
        id: 'anlass',
        title: 'Welche doppelte Arbeit soll wegfallen?',
        paragraphs: [
          'Eine Schnittstelle ist sinnvoll, wenn dieselben Informationen regelmäßig in mehreren Programmen benötigt werden. Das kann eine Website-Anfrage für ein CRM sein, eine Buchung für ein Verwaltungssystem oder eine Produktänderung für einen Konfigurator.',
          'Wir beginnen mit Quelle und Ziel. Welche Informationen liegen bereits vor? Was benötigt das empfangende System tatsächlich? Welche Änderungen müssen später zurückgemeldet werden? So entsteht ein klarer Datenvertrag für die Verbindung.',
        ],
      },
      {
        id: 'verantwortung',
        title: 'Ein Datensatz braucht eine verlässliche Quelle.',
        paragraphs: [
          'Wenn zwei Systeme denselben Preis, Status oder Kontakt ändern dürfen, entstehen schnell Widersprüche. Deshalb wird vor der Anbindung festgelegt, welches System welchen Wert führt. Ein Abgleich muss diese Zuständigkeit berücksichtigen.',
        ],
        table: {
          headings: ['Frage', 'Warum sie wichtig ist'],
          rows: [
            [
              'Was löst eine Übertragung aus?',
              'Eine neue Anfrage, eine Änderung oder ein regelmäßiger Abgleich brauchen unterschiedliche Abläufe.',
            ],
            [
              'Woran erkennen wir denselben Vorgang?',
              'Eindeutige Zuordnungen helfen, doppelte Datensätze und versehentliche Mehrfachaktionen zu vermeiden.',
            ],
            [
              'Wer sieht einen Fehler?',
              'Eine fehlgeschlagene Übergabe braucht eine verantwortliche Person und einen nachvollziehbaren Status.',
            ],
          ],
        },
      },
      {
        id: 'beleg',
        title: 'Zusammenhängende Daten werden im Betrieb sichtbar.',
        paragraphs: [
          'Bei ParkeSicher zeigen Buchungsübersicht, Tagesansicht und Preisverwaltung unterschiedliche Perspektiven auf denselben Geschäftsprozess. Dieses Projekt belegt die Arbeit an einer eigenen Anwendung mit verknüpften Funktionen.',
          'Welche externen Programme bei deinem Vorhaben angebunden werden können, prüfen wir gesondert. Wir behaupten keine vorhandene Verbindung zu einem bestimmten CRM, ERP oder Zahlungsanbieter, bevor die technische Ausgangslage geklärt ist.',
        ],
        links: [
          { label: 'Einblicke in ParkeSicher', href: '/projekte/parkesicher' },
        ],
      },
      {
        id: 'start',
        title: 'Diese Unterlagen helfen bei der Einschätzung.',
        paragraphs: [
          'Für eine erste Prüfung brauchen wir die Namen der beteiligten Systeme, die gewünschte Datenrichtung und ein anonymisiertes Beispiel. Vorhandene API-Dokumentation und Informationen zu Zugängen helfen, Einschränkungen früh zu erkennen.',
          'Entwicklung, Anbietergebühren, Datenmigration und laufende Überwachung werden im Angebot getrennt beschrieben. Bei geschäftskritischen Abläufen gehört ein Rückfallweg in die Planung, damit ein Ausfall nicht unbemerkt bleibt.',
        ],
        points: [
          {
            title: 'Beispielvorgang',
            text: 'Vom Auslöser bis zum gewünschten Ergebnis: Welche Felder werden gebraucht, und wann muss das Ergebnis vorliegen?',
          },
          {
            title: 'Sonderfälle',
            text: 'Was passiert bei fehlenden Daten, einer Änderung, einem Abbruch oder einer zeitweise nicht erreichbaren Gegenstelle?',
          },
        ],
      },
    ],
    faqs: [
      [
        'Könnt ihr jedes Programm anbinden?',
        'Das hängt von den verfügbaren Schnittstellen, Zugriffsrechten, Lizenzen und technischen Grenzen ab. Wir prüfen die konkreten Systeme vor einer Zusage.',
      ],
      [
        'Ist dafür immer KI erforderlich?',
        'Nein. Eine eindeutig beschriebene Datenübertragung lässt sich häufig regelbasiert lösen. KI wird erst dann betrachtet, wenn die Aufgabe einen entsprechenden Bedarf hat.',
      ],
      [
        'Bleibt die Übertragung später nachvollziehbar?',
        'Status, Fehlerbehandlung und Zuständigkeiten gehören in den vereinbarten Umfang. Wir klären, welche Protokolle und Hinweise dein Team für Betrieb und Support braucht.',
      ],
    ],
    referenceIds: ['parkesicher'],
    related: [
      '/ki-automation/prozessautomatisierung',
      '/plattformen-web-apps/kundenportale',
      '/wissen/web-app-oder-standardsoftware',
    ],
    modified: '2026-09-08',
  },
];
