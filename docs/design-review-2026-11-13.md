# Nine.ai: Gestaltung und Informationsdarstellung

## Auftrag und Grenzen

Bestehendes React-/Vinext-Projekt `webseite`. Keine neuen Bibliotheken, kein Commit, Push oder Deployment. Routen, API, D1, Anfrageablauf, Preis- und Paketdaten, Rechtsinhalte und Referenzlinks bleiben bestehen.

Arbeitsgrundlagen: vollständig gelesener `Website-Leitfaden-fuer-KI-Agenten.md` aus dem Nutzerbriefing sowie die lokalen Skills `frontend-design`, `ui-ux-pro-max` und `find-skills`. Das konkrete Nutzerbriefing hat Vorrang vor allgemeinen Vorschlägen dieser Dokumente.

## Briefing

| Frage | Grundlage |
| --- | --- |
| Unternehmen | Nine.ai, Websites, Web-Apps, Automatisierung und Google Ads |
| Besucher | Unternehmen mit einem konkreten digitalen Vorhaben; bestehende Ansprache von Privatkunden bleibt erhalten |
| Hauptaufgabe | Passende Leistung und reale Arbeiten verstehen, Umfang einordnen, unverbindlich anfragen |
| Belege | Vorhandene Kundenprojekte, tatsächliche Projektaufnahmen und bereits veröffentlichte Leistungsumfänge |
| Hauptaktion | Bestehende Projektanfrage, unveränderte Formulare und Weiterleitungen |
| Marke | Cabinet Grotesk, dunkles Navy, Nine.ai-Blau und helle Flächen |
| Nicht belegt | Keine neuen Erfolgszahlen, Kundenstimmen, Zertifikate oder Projektaufnahmen erfinden |

## Analyse vor der Umsetzung

Alle Sitemap-Seiten und zusätzlich Anfrage-, Checkout- und Rechtsseiten werden lokal bei 1440 und 390 Pixeln aufgenommen. Gemeinsame Templates werden zusammen beurteilt, einzelne Referenzen zusätzlich auf Bildausschnitt und Textlänge. Rohdaten und Screenshots liegen ignoriert unter `outputs/design-revision/before`.

Problematische Muster:

- Startseite: erzwungener dreizeiliger Hero mit Farbverlauf, gläserne Projektauswahl, wiederholte Versalienlabels und gleich gewichtete Abschnittstitel.
- Zusammenarbeit: umlaufende Linie vermittelt einen abgeschlossenen linearen Ablauf; mobile Komposition unterscheidet sich kaum vom Desktop.
- Leistungen: vorhandene interaktive Auswahl und reale Aufnahmen sind sinnvoll. Schriftkontrast und Verhältnis von Auswahl zu Beleg prüfen, keine neue Auswahlmechanik.
- Projektvorschau: mehrfach verschachtelte Flächen um reale Screenshots; der Screenshot braucht mehr Gewicht als sein Rahmen.
- Projektvorbereitung und FAQ: ähnliche Überschrift-Text-Aufteilung wie andere Abschnitte; dunkle FAQ-Kacheln wirken schwerer als die Information.
- Leistungsunterseiten: nicht sequenzielle Kundensituationen sind nummeriert; identische Featurekarten mit beliebigen Icons und eine weitere lineare Prozessliste.
- Lösungen: vier gleichartige Karten und willkürlich hervorgehobener erster Eintrag.
- Fachseiten und Wissen: fast jeder Absatz mit Unterpunkten beziehungsweise Querverweis bekommt eine eigene Karte. Wiederholte Rahmen erschweren die inhaltliche Hierarchie.
- Preise: Vergleichskarten sind funktional begründet und bleiben. Schatten und Rundungen können zurückgenommen werden.
- Rechtsseiten und Formulare: werden als funktionale, sachliche Ansichten behandelt; kein neuer Ablauf und keine redaktionellen Änderungen an Rechtsinhalten.

## Referenzfrage

Wie zeigen etablierte Produktunternehmen echte Arbeit, trennen unterschiedliche Informationsarten und führen zum Kontakt?

- [Work & Co](https://www.work.co/): Projekte und konkrete Produktveröffentlichungen erhalten eine eigene Bühne, Kompetenzbereiche sind getrennt erschließbar. Übertragung: echte Nine.ai-Aufnahmen stärker gewichten, Rahmen zurücknehmen.
- [thoughtbot](https://thoughtbot.com/): Fälle, Zusammenarbeit und öffentliches Wissen erfüllen unterschiedliche Aufgaben im Besucherweg. Übertragung: Projektvorbereitung nicht noch einmal als Entwicklungsprozess erzählen; Fachinhalte lesbar statt kachelartig darstellen.
- [Futurice](https://www.futurice.com/): Leistungen, Projektnachweise und Unternehmensprofil werden in getrennten Informationsblöcken gegliedert. Übertragung: wechselnde Gewichtung statt gleicher Section-Schablone. Deren Zahlen und Claims werden ausdrücklich nicht übernommen.

Dies ist eine Analyse der zugänglichen Seiteninhalte, keine Übernahme ihrer Texte, Komponenten oder Medien.

## Zwei mögliche Einstiege

**A: Angebot und überprüfbare Arbeit gemeinsam**

```text
Desktop: [Website-Angebot + Anfrage] [echtes Projekt + Auswahl]
Mobil:   [Angebot + Aktion] / [Projektaufnahme + Auswahl]
```

Die vorhandene Projektumschaltung bleibt auffindbar. Ein natürlicher Titelumbruch und ein ruhiger Rahmen lassen das konkrete Projekt wirken. Passt zum bestehenden Besucherweg mit transparenten Basispreisen.

**B: Projekt vor Angebot**

```text
Desktop: [breite Projektaufnahme] / [Angebot] [Anfrage + Preis]
Mobil:   [Projekt] / [Angebot + Aktion]
```

Visuell stärker portfolioorientiert, verschiebt auf schmalen Geräten jedoch Angebot und Anfrage nach unten. Für dieses Briefing nicht gewählt.

**Gewählt: A.** Keine komplette Neuerfindung des Einstiegs; Schwerpunkt der neuen Komposition liegt auf der Feedbackschleife und der abwechslungsreicheren Informationsdarstellung danach.

## Art Direction

Ruhige Produktwerkstatt: konkrete Arbeit, direkte Zusammenarbeit, nachvollziehbare Entscheidungen.

- Farben: Navy `#060b1b`, Text `#101b31`, Nine.ai-Blau `#0a4fd8`, Eis `#eff4fc`, Weiß `#ffffff`, Begleittext `#526079`.
- Schrift: bestehende lokal geladene Cabinet Grotesk. Keine neue Schrift. Titel nach tatsächlicher Textlänge, keine manuellen Schmuckumbrüche.
- Layout: Angebote und Preise vergleichbar; Projekte groß; Fachinhalte als lesbare Texte und Vergleiche; Zusammenarbeit als eigens komponierte Arbeitsbahn.
- Akzent: Blau markiert aktive Auswahl, Links und Rückkopplung. Kein Farbverlauf, keine neue autonome Animation, kein beliebiger Schmuckpfeil.
- Mobile: Prozess als kompakte zweispaltige Arbeitsfläche mit eigener Rückführung, lesbare Absätze und verlässlich große Bedienelemente.

## Tatsächliche Skill-Anwendung

`frontend-design`: vor der Umsetzung zwei Einstiege, Palette und typografische Rollen verglichen; bestehende Marke und reale Referenzen als Ausgangspunkt statt Austausch einer Template-Palette. Bewusster Schwerpunkt auf der Zusammenarbeit; ruhigere Nachbarabschnitte.

`ui-ux-pro-max`: Python, python3 und py sind hier nicht verfügbar; deshalb wurde der Python-Suchgenerator nicht ausgeführt und kein generiertes Designsystem behauptet. Die vorhandenen lokalen CSV-Daten wurden direkt gelesen. Die Treffer für Creative/Marketing Agency empfehlen starke Bewegung und Brutalismus; diese Empfehlung passt nicht zum Briefing und wurde verworfen. Angewandt werden die verifizierten UX-Einträge zu natürlichem Titelumbruch, 65–75 Zeichen Leselänge, sichtbarem Fokus, 4,5:1 Textkontrast, horizontalem Überlauf, reduzierter Bewegung und nicht verdecktem Fokus sowie die Prioritätenliste und Prüfliste des Skills. React-Zustände und bestehende native Interaktionen bleiben erhalten.

`find-skills`: gelesen, keine Suche oder Installation erforderlich. Browserprüfung mit vorhandenen Werkzeugen. Der integrierte Browser meldet keine verfügbare Sitzung; deshalb isolierter lokaler Chrome als Ersatz, keine Authentifizierung umgangen.

## A. Zuvor generische Muster

Die Befunde oben wurden anhand der lokalen Seiten überprüft: wiederholte Karten auf Lösungen und Fachseiten, beliebige Featureicons, nicht sequenzielle nummerierte Kundensituationen, dekorative Titelumbrüche, Glasrahmen im Einstieg, schwere FAQ-Kacheln und eine lineare Zusammenarbeit-Grafik ohne echte Rückkopplung. Auf der Über-uns-Seite wiederholte sich dasselbe ParkeSicher-Bild zweimal. Die Wissensübersicht wiederholte sechs Bildkarten, teilweise mit demselben Motiv.

## B. Umgesetzte Änderungen

| Bereich | Ergebnis |
| --- | --- |
| Startseite: Einstieg | Bestehender Besucherweg mit Angebot, Basispreis und echten auswählbaren Projekten; Titel ohne feste Umbrüche oder Verlauf, Projektauswahl ohne Glasrahmen |
| Wer wir sind | Direkter Kontakt und Abstimmung an realen Anforderungen; neuer Entwicklungszyklus statt alter Vier-Phasen-Linie |
| Leistungen | Auswahl und alle Zustandswechsel erhalten. Lesbarere Beschreibungen und mehr Platz für den Projektbeleg. Desktopbilder verwenden ihre tatsächlichen Proportionen statt einer fest hohen, seitlich aufgefüllten Fläche |
| Projektkarussell | Äußerer Kartenrahmen entfällt, Bild und Projektbeschreibung stehen freier. Alle neun Projekte, Links, Geräteansichten und Steuerelemente bleiben |
| Preise | Vergleichskarten und vollständige Paketdaten erhalten; Schatten und Rundungen zurückgenommen, Paketüberschrift bricht natürlich um |
| Standorte | Weniger Rahmen, Schatten und redundante Außenabstände; vorhandene Karte und Standortinformationen erhalten |
| Projektvorbereitung | Kompakte Beschreibungen als Gegenüberstellung von benötigter Information und Erklärung; kein zweiter Entwicklungsprozess |
| FAQ | Ruhige aufklappbare Textzeilen statt dunkler Einzelkarten; vorhandenes Accordion und Inhalte erhalten |
| Lösungen und Leistungsseiten | Leistungen als offene Übersicht, Kundensituationen ohne Nummerierung, Leistungsumfang als gegliederte Beschreibung statt beliebiger Iconkarten |
| Fachseiten und Projektseiten | Natürlich umbrechende Titel, kleinere Bildrahmen, lesbare Unterpunkte ohne Einzelkarten, Querverweise als Textverbindungen |
| Wissen | Ein ausführlicher Einstieg plus thematischer Leseindex; alle sechs Ratgeber und Beschreibungen bleiben verlinkt |
| Über Nine.ai | Konkrete ParkeSicher-Abbildung mit erklärender Bildunterschrift und Link; die bisherige Wiederholung darunter durch zwei weitere vorhandene Referenzen ersetzt |
| Anfrage-Landingpage | Vorhandene Garden-Time-Projektaufnahme statt dekorativer 3D-Marke; natürlichere Titel und Begleittexte. Keine Änderung der Formularfelder, Zustände, Validierung, Speicherung oder Übergaben |
| Bewegung | Automatische Abschnitt-Reveals entfernt; vorhandene Reaktionen auf Bedienung, Projektwechsel und Accordion bleiben. Kein neues Animationspaket |

## C. Entwicklungszyklus und Feedback

Die Section behält links die Unternehmensbotschaft und den bestehenden Link zu Über Nine.ai. Der Text beschreibt direkte Abstimmung, überschaubare Etappen und frühe Zwischenstände. Rechts erklärt ein kurzer Absatz, wie geänderte Anforderungen und Feedback in die weitere Arbeit einfließen.

Die Kreisgrafik ist von Hand als Inline-SVG umgesetzt: sechs flache Navy- und Blautöne, weiße Trennungen und echte Textbeschriftungen. Anforderungen, Planung, Umsetzung, Test, Livegang und Verbesserung bilden den Zyklus; in der Mitte steht „Agile Entwicklung“. Die Grafik ist maximal 340 Pixel breit und skaliert bis auf Smartphonebreite. Ein beschreibender Titel und eine Textalternative stehen für assistive Technik zur Verfügung.

Das zuvor generierte Rasterbild wird nicht mehr eingebunden. Es entstehen keine zusätzlichen Bildanfragen oder Animationsabhängigkeiten. Die SVG-Regel für eine explizite Bildrolle ist in dieser einen Datei vom pauschalen Tag-vor-Rolle-Linthinweis ausgenommen; die beschriftete Bildrolle bleibt erhalten.

Der Standortbereich hat 40 Pixel seitlichen Innenabstand auf Desktop, 28 auf Tablet und 24 auf Smartphone. Die Komponente verwaltet ihre Abstände in locations.css. Die Verfeinerungen an dieser Section und an der Infografik verändern keine Formular-, Routing- oder Backendlogik.

## D. Leitfaden konkret angewendet

- Zwei Einstiege mit unterschiedlicher Priorisierung vor Umsetzung verglichen; bestehendes Angebot mit Projektbeleg gewählt.
- Reale Projektaufnahmen erfüllen eine Belegfunktion. Keine erfundenen Dashboards, Zahlen, Testimonials oder neuen Stockbilder.
- Überschriften am vorhandenen Text ausgerichtet, manuelle Titelumbrüche entfernt; sachliche Adressumbrüche bleiben.
- Vergleichspakete behalten Karten, Fachtexte und Querverweise erhalten andere Formen.
- Eigene Gewichtung für Zusammenarbeit, Leistungen, Projekte, Vorbereitung und FAQ statt einer wiederholten Section-Schablone.
- Desktop, Touch und schmale Ansichten getrennt geprüft. Vorhandener Anfrageweg praktisch durchgespielt.

## E. Skills in der Umsetzung

Die zuvor festgehaltenen Entscheidungen wurden umgesetzt: Palette und Schrift beibehalten, ein konkreter gestalterischer Schwerpunkt, reduzierte dekorative Bewegung und Beschriftungen. Die UX-Prüfung berücksichtigt natürliche Umbrüche, erreichbare Bedienelemente, sichtbaren Fokus, Kontraste und reduzierte Bewegung. Die Skill-Datenbank ist eine Orientierung; ihre unpassende Empfehlung zu Brutalismus und starker Bewegung wurde nicht übernommen. Keine zusätzlichen Skills oder Bibliotheken installiert.

## F. Responsive und visuelle Prüfung

- Bestandsaufnahme: 48 Seiten jeweils bei 1440 und 390 Pixeln, einschließlich Anfrage- und Rechtsseiten.
- Erste Umsetzung: 152 Seiten-/Breitenkombinationen. Alle 48 Seiten bei 1440/390, zusätzlich 14 zentrale Ansichten bei 1280, 1024, 768 und 320 Pixeln.
- Nachschärfung: 48 gezielte Prüfungen der geänderten Layouts bei allen sechs Breiten. Nach letzten Titel- und Kontrastkorrekturen nochmals 30 gezielte Prüfungen der betroffenen Seiten; ebenfalls ohne Überläufe, Bildfehler oder Laufzeitfehler.
- Abschließend die etwas kleinere Paketüberschrift nochmals bei allen sechs Breiten geprüft; kein horizontaler Überlauf. Der lokale Abschlussbuild und die Vorschau antworten erfolgreich.
- In diesen Prüfungen keine horizontalen Seitenüberläufe, defekten Bilder oder JavaScript-Laufzeitfehler.
- Bildausschnitte per Screenshot geprüft; für vollständige Screenshots wurde die Seite tatsächlich durchgescrollt, damit Chrome auch Bilder außerhalb des ersten Viewports zeichnet.
- Beobachteter CLS in den 48 gezielten Layoutprüfungen: 0. Zusätzliche Messung ohne Browsercache auf Startseite, Kundenportalen, Gastronomie-Bestellsystemen und KI-Automation: jeweils 0 im beobachteten Ladefenster. Das ist eine lokale Stichprobe, keine Feldmessung für alle Geräte und Verbindungen.
- Zusätzlich Telefon-Querformat 844 × 390, 200 % Root-Schriftgröße, Touch-Eingaben und `prefers-reduced-motion` geprüft.
- Safari/iPhone wurde durch schmale Viewports und Touch angenähert. Ein echter Safari-/WebKit-Lauf und physisches iPhone standen hier nicht zur Verfügung; die Emulation wird nicht als solcher Test ausgegeben.

## G. Tatsächlich ausgeführte technische Prüfungen

| Prüfung | Ergebnis |
| --- | --- |
| TypeScript `tsc --noEmit` | Bestanden, auch nach den letzten TSX-Änderungen |
| Cloudflare-Zielbuild mit `NINEAI_DEPLOY_TARGET=cloudflare` und `vinext build` | Bestanden. Kein Deployment |
| Lint der geänderten Komponenten | Bestanden |
| Vollständiger `oxlint`-Lauf | Nicht grün: 19 Befunde in unveränderten Komponenten unter `components/ui` und `hooks/use-mobile.ts`; keine fachfremden Reparaturen vorgenommen |
| `verify-project-routing.mjs` | Alle 8 Empfehlungen bestanden |
| `verify-retention.mjs` | Bestanden; isolierte In-Memory-Testdatenbank |
| `verify-project-images.mjs` | 33 Originale und 56 Varianten, insgesamt 89 Dateien bestanden. Generierten Prüfbericht in ignorierte Outputs kopiert und ursprünglichen Bericht bytegleich erhalten |
| `verify-routes.mjs` | Alle 48 Seiten, Metadaten, internen Seitenverlinkungen und 404-Fälle bestanden |
| `verify-seo.mjs` | 39 indexierbare und 9 noindex-Seiten, 78 Assets und 78 Crawlervergleiche, keine Befunde |
| `verify-rendering.mjs` | 20 SSR-Seiten, 3 Crawlervergleiche, 3 echte 404s und 4 Schriftdateien bestanden; nach letzten Titeländerungen wiederholt |
| Browser-Interaktionen | 171 Prüfungen bestanden: Heroauswahl, alle Leistungsvorschauen/Tabs, neun Projekte in beiden Geräteansichten, Vor/Zurück, Pause, Filter, Projektdialoge, Escape, FAQ, Tab/Enter, sichtbarer Fokus und reduzierte Bewegung |
| Tatsächliche lokale Anfragewege | Alle 15 Paket-/Servicevarianten erfolgreich abgesendet; Pflicht-Telefonnummer, optionale Nachricht, korrekte Paketübergabe und Bestätigung geprüft. Ausschließlich `example.test`-Kontakte in lokaler D1 |
| Vorhandener API-Paralleltest `verify-lead.mjs` | Nicht grün: zwei statt drei erwartete 429-Antworten im Parallelabschnitt. Entspricht dem bereits dokumentierten lokalen Wrangler-Problem. API und Testassertionen nicht verändert |
| Ergänzende vorhandene serielle API-Prüfung | Bestanden: Validierung, Speicherung, Idempotenz, Konflikte, serielle Begrenzung, Telefon, Serviceinteressen, SSR, Paketübergabe und eingeklappte FAQs. Ersetzt den fehlgeschlagenen Paralleltest ausdrücklich nicht |
| Textkontraste | Sieben zentrale Seiten anhand berechneter Text- und Hintergrundfarben geprüft. Zu helle Projektmetadaten und Begleittexte korrigiert; Abschlussmessung mit 518 Textproben ohne Befunde. Keine vollständige WCAG-Zertifizierung |
| Bestandsschutz | Kein vorhandenes Linkziel in den 48 Vorher-/Nachher-Seiten entfernt. Hauptinhalte von Impressum, Datenschutz und Anfrageinformationen textgleich. Preise, Referenzdaten, Assets, Formularlogik, API und Cloudflare-Konfiguration unverändert |

Testdaten und Screenshots liegen in ignorierten Unterordnern von `outputs`. Datenbanktests verwenden ausschließlich lokale Testdaten; die Produktionsdatenbank und Cloudflare-Konfiguration werden durch die Gestaltung nicht verändert.

## Geänderte Dateien

- `app/landing.tsx`, `app/development-cycle.tsx`, `app/home-about.css`: Startseite und Zusammenarbeit.
- `app/design-refinement.css`, `app/layout.tsx`: gezielt auf Marketingkomponenten begrenzte Gestaltungsregeln und deren Einbindung.
- `app/subpages.tsx`, `app/website-page.tsx`, `app/editorial-pages.tsx`: Informationsdarstellung, Leistungsseiten, Projekte und FAQ-Überschriften.
- `app/knowledge-page.tsx`: Wissensübersicht.
- `app/website-erstellen-lassen/page.tsx`: sichtbare Landingpage-Inhalte und reale Projektabbildung.
- `app/team-intro.tsx`, `app/package-cards.tsx`: natürliche Titelumbrüche; Paketdaten bleiben unverändert.
- `app/locations.tsx`, `app/locations.css`: ruhigere Beschriftung und verlässlicher Innenabstand.
- `app/motion.tsx`: dekorative Abschnitt-Reveals entfernt.
- Dieses Dokument: Briefing, Art Direction, Entscheidungen, Prüfungen und deren Grenzen.
