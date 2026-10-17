# Mobile Ansicht & Interaktionen

Stand: 06.09.2026. Fokus: verständliche Angebote erhalten, mobile Bedienfehler beheben und gezielte Bewegung ergänzen.

## Referenzen und Übertragung

[Raycast](https://www.raycast.com/) und [Linear](https://linear.app/homepage) wurden im Browser angesehen. Raycasts Lichtflächen und räumliche Tiefe inspirieren die weichen blauen Lichtakzente. Linears zurückhaltende Hierarchie und feine Trennlinien inspirieren die ruhigen Kartenübergänge. Der [offizielle Linear-Designbericht](https://linear.app/now/behind-the-latest-design-refresh) erläutert die Steuerung visueller Betonung und die Vereinheitlichung von Tabs und Bedienelementen. Das sind eigene gestalterische Ableitungen; fremde Assets oder Layouts wurden nicht kopiert.

## Before / After / Why

| Before | After | Why |
|---|---|---|
| Tabs-Wurzel ordnete Frage, Zielauswahl und Angebot horizontal an; bei 390 px ragte die Karte aus dem sichtbaren Bereich | Explizite Spaltenrichtung, gleich breite Ziel-Tabs, schrumpfbare Rasterspalten und volle Kartenbreite | Alle Inhalte bleiben auf dem Handy erreichbar; Ursache statt bloßer Overflow-Kaschierung behoben |
| Kleine Menübedienfläche und Standard-Schließknopf | 44 × 44 px Öffnen/Schließen, deutsches Label, korrekter expanded-Zustand; Dialog scrollt bei geringer Höhe | Bessere Touch-Bedienung und nachvollziehbare Tastaturfokussierung |
| Sehr gedrängte mobile Überschriften und schräger Kartenhintergrund | Angepasste Schriftgewichte, Laufweite und Umbrüche; gerader blauer Kartenabschluss | Bessere Lesbarkeit und ruhigere Kartenränder auf 320 px |
| Wenig Rückmeldung beim Tippen | Kurze Druckskalierung und lokale Druckwelle am Berührungspunkt | Aktion unmittelbar sichtbar, ohne Navigation zu verzögern |
| Statische Flächen und Karten | Einmalige blaue Lichtankunft, sanfte Abschnittseintritte und Angebotswechsel; Hover-Licht und Kartenhebung am Desktop | Lebendigere Oberfläche bei klarer Priorität der Inhalte |
| Bewegung nur teilweise geregelt | Systempräferenz reduziert Bewegung; Tastatur beendet laufende JS-Effekte; Inhalte bleiben ohne Effekt sichtbar | Bedienung bleibt unmittelbar und unabhängig von Animation |
| Vinext-Clientnavigation warf im gebauten Worker TypeErrors bei Prefetch und Klick; Seitenwechsel blieb aus | Native HTML-Links mit normalen Dokumentwechseln, Ankern und Browserhistorie; optionaler Briefing-Aufruf über location.assign | Zuverlässige Navigation im Produktionsstand; keine Änderung von Framework-Abhängigkeiten erforderlich |

## Browserprüfung

Im eingebauten Browser mit emulierten Viewports geprüft, nicht auf physischen iPhones oder Android-Geräten:

- 320, 390, 768 und 1280 px: Startseite, Paketübersicht, Nine-Launch-Paketformular, allgemeines Projektbriefing und Plattform-Leistungsseite. Alle 20 Kombinationen ohne horizontalen Dokumentüberlauf oder aus dem Viewport ragende Inhalts-/Header-Elemente.
- Alle 19 vorhandenen Routen zusätzlich bei 390 px: keine horizontalen Überläufe.
- Mobile Screenshots von Einstieg, vollständiger Angebotskarte, Paketvergleich, Menü und Formularzusammenfassung visuell kontrolliert.
- Alle vier Ziel-Tabs per Klick; Pfeiltasten wechseln Fokus, Enter aktiviert die Auswahl.
- Menü öffnen/schließen, Escape, Rückgabe des Fokus an den Auslöser; Schließfläche gemessen 44 × 44 px. Bei 320 × 567 px ist der 535 px hohe Dialog intern scrollbar.
- Leeres Paketformular bleibt durch native Pflichtfeldprüfung im Bearbeitungszustand. Alle Eingabeschriften sind 16 px. Testdaten wurden nur lokal verwendet.
- Gültige Eingabe führt zur passenden Paket-Zusammenfassung mit fokussierter Überschrift. Bearbeiten erhält die Angaben. Briefing-Download ausgelöst und Rückmeldung geprüft.
- Emuliertes `prefers-reduced-motion: reduce`: keine Angebots-/Lichtanimation, keine Druckwelle. Nach Prüfung zurückgesetzt.

Produktionsbuild, TypeScript und App-Lint bestanden. 19 HTTP-Routen und drei echte 404-Fälle sowie acht bestehende Projektempfehlungsfälle bestanden. Keine Aussage über gemessene Conversion, Core Web Vitals oder eine vollständige Geräte-/Screenreader-Abnahme.

## Produktionsregression

Nach dem Wechsel auf native Links wurde der gebaute Cloudflare-Worker lokal gestartet und im Browser erneut bedient: Startseite → Pakete über den Header, Pakete → Lösungen über das mobile Menü. Ziel-URLs und Überschriften stimmen, und seit dem erneuten Test traten keine neuen Warnungen oder Fehler in der Browserkonsole auf. Die Druckwelle wurde beim Zielwechsel als aktives Element nachgewiesen. Alle 19 HTTP-Routen und drei 404-Fälle wurden auch gegen den gebauten Worker erneut geprüft. Die gezielte Ausnahme der Next.js-Link-Lintregel in `.oxlintrc.json` ist für diese dokumentierte Vinext-Navigationsumgehung erforderlich.
