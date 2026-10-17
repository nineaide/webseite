# Nine.ai – Design und Funktionsreview v6

Stand 06.09.2026. Nutzerziel: eine eigenständige, bildreiche und verständliche KMU-Verkaufsseite. Letzte visuelle Rückmeldung: „wirklich wow“, anschließend „ne jetzt passt es“ nach eigener Fehlermeldung. Die technische Abschlussprüfung wurde trotzdem fortgesetzt.

| Before | After | Why |
|---|---|---|
| Chromlogo als dominierendes Hero-Motiv | Große Website- und Mobilansicht mit Branchenwechsel | Die verkaufte Leistung unmittelbar zeigen |
| Drei uneinheitliche Einstiege, vier versteckte Zieltabs | Zwei offene Website-Festpreise mit einer Entscheidung nach Geschäftszweck | Die Paketwahl erleichtern |
| Nur ParkeSicher als Projektbild | Drei eindeutig gekennzeichnete Designstudien plus ParkeSicher | Branchenbezug herstellen, ohne erfundene Kundenbelege |
| Kleines Icon-Menü | Beschriftete Hauptziele und ein großes, per Klick bedienbares Menü | Orientierung auf Desktop und Touch |
| App als Standardangebot | Web-Apps und Kundenportale als separates Angebot | Der korrigierten Angebotsstrategie entsprechen |
| Gemeinsame Anfrage-/Paketmaske | Eigener vorbereiteter Bestellablauf für die zwei Websitepakete | Umfang und Preis vor Kontaktdaten zeigen |
| Paketwechsel über Navigation verlor Angaben | Paketwechsel im Bestellentwurf behält Eingaben | Wiederholte Eingabe vermeiden |
| Projekt-Tabs nahmen eine horizontale Flexanordnung an | Explizite vertikale Anordnung und begrenzte Grid-Spalten | Tatsächlich beobachteten mobilen Dialogüberlauf beheben |
| Viele historische CSS-Layer | Gemeinsame Basis und eine aktive Designstylesheet-Datei | Zustände und Unterseiten konsistent halten |

## Browserprüfung

- 30 Ansichten: Startseite, Pakete, Projekte, Websites, Anfrage und Launch-Bestellentwurf bei 360, 390, 768, 1280 und 1440 CSS-Pixeln. Jeweils ein H1, keine geladenen defekten Bilder und kein horizontaler Dokumentüberlauf > 1 px. Daten: v6-responsive-qa.json.
- Mobilmenü geöffnet, lesbare Ziele, Schließenaktion und Dialogmaße kontrolliert.
- Projektfilter Immobilien, KONTUR-Detail und Mobilansicht geprüft. Fehler in Flex-/Grid-Anordnung tatsächlich gefunden, behoben und neu geprüft (Dialogbreite und Scrollbreite beide 366 px bei 390-px-Fenster).
- Website-Bestellablauf mit Testdaten durchlaufen, Paket gewechselt, Angaben erneut geprüft und in Zusammenfassung erhalten. Zurück-Schritt setzt den Fokus auf die jeweilige Überschrift. Zahlung bleibt deaktiviert.
- Normaler Anfrageweg bleibt eine lokale Vorschau. Kein CRM-, Nachrichten- oder Zahlungserfolg wird behauptet.
- Bewegungen sind kurze Druck-/Hoverrückmeldungen und einmalige Abschnittseinblendungen. Keine verschiebenden Navigationsziele, kein eigener Cursor, keine dauerhafte WebGL-Schleife. Systempräferenz und Tastatureingabe reduzieren dekorative Bewegung.
- Screenshots wurden im Browser erzeugt. Bei emulierten Größen kann der Browser-Compositor die Aufnahme beschneiden; Layoutbreiten wurden deshalb zusätzlich direkt am DOM geprüft. Keine Behauptung physischer Gerätetests, gemessener CWV oder gemessener Conversionsteigerung.

## Vor echtem Verkauf

Zahlungsanbieterlinks, Empfänger für Anfragen, tatsächlicher Vertragspartner, Steuerbetrag, verbindliche Zahlungsfälligkeiten und vollständige Vertrags-/Leistungsangaben finalisieren. Für Growth insbesondere die Zuordnung der Werbeseiten zu den zwölf Layouts und Feedback-/CMS-Umfang bestätigen. Der Masterplan enthält dazu keine abschließend eindeutige Festlegung. Keine eigenmächtige Erweiterung des Angebots vorgenommen.
