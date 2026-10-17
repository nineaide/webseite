# Zielprüfung nach v29

Der vorherige Zielturn war **Fortschritt**: responsive Bildvarianten und versionsgebundenes Caching wurden veröffentlicht und durch HTTP sowie einen Google-Labortest bestätigt. Diese Fortsetzung war ebenfalls **Fortschritt**: ungenutzte Bibliotheksstile wurden aus dem blockierenden Stylesheet entfernt und die untere Liquid-Animation initialisiert erst nahe dem sichtbaren Abschnitt. v29 wurde veröffentlicht und nachgemessen. Der offen gebliebene Gesamtauftrag wird deshalb nicht mit technischer Bereitschaft gleichgesetzt.

| Anforderung aus dem Gesamtziel | Maßgeblicher Nachweis | Stand |
|---|---|---|
| Technische SEO für den vollständigen öffentlichen Bestand | 39/39 Indexseiten, zusätzlich 9/9 noindex-Seiten; SSR, Metadaten, Canonicals, echte Fehlerstatus, Sitemap, Bilder und Linkziele in `verified-live.json` | Umgesetzt und per HTTP geprüft; manuelle vollständige Browser-/Felddatenprüfung fehlt |
| GEO für generative Suchsysteme | Lesbares HTML, 39 identische OAI-SearchBot-Hauptinhalte, tatsächliche Organisation und passende Seitenschemata, direkte Antworten und Quellen | Technischer Teil belegt; externe Unternehmensprofile und tatsächliche KI-Zitationen nicht nachgewiesen |
| Echte Keyword-Recherche | Zwei Keyword-Planer-Abfragen; 23 sichtbare relevante Ergebniszeilen, Deutschland/Deutsch/Google und bestätigter Zeitraum | Belegt; keine erfundenen Suchvolumina oder Gleichsetzung von Ads-Wettbewerb mit SEO-Schwierigkeit |
| Sinnvolle Seitenstruktur und mehr Themen | `ROUTES-INVENTORY.md`, `keyword-map.csv`, tatsächliche HTML-Linkwege zu allen Indexseiten in höchstens drei Schritten | Belegt: Leistungsvertiefungen, Branchen, neun Projekte und sechs Ratgeber |
| Mehr Bilder auf Unterseiten, insbesondere Ads | 27 echte Desktop-/Mobil-/Systemdateien plus 45 kleinere Varianten, tatsächliche Einbindung, Alt, Abmessungen und native srcset/sizes | Belegt: 72 WebP-Dateien plus Favicon live erreichbar; Originalaufnahmen unverändert, Varianten behalten Geometrie und Anonymisierungen; versionsgebundene URLs mit einem Jahr Cache |
| Leistungen anhand ParkeSicher und weiterer eigener Arbeit zeigen | Neun Projektseiten mit sichtbaren spezifischen Leistungsbeschreibungen und gelieferten bzw. freigegebenen Aufnahmen | Belegt; keine erfundenen Umsatzsteigerungen, Kundenzitate oder KI-Projekte |
| Gute mobile Ladeleistung | Fünf Google-PageSpeed-Ausgangstests, Lead-Nachprüfungen v27/v28 und zwei v29-Messungen in `pagespeed-mobile-lab.json`; CSS-Nachweis in `rendering-payload.json` | v29 Startseite/Lead: 94/93 Leistung, je 100 A11y/Best Practices/Lighthouse-SEO, LCP 2,6/2,7 s, CLS je 0. Zentrales CSS von 226.236 auf 88.706 Bytes reduziert. Gegenläufige Einzelwerte bleiben dokumentiert. Kein Feld-/CrUX-Nachweis und kein pauschal bestandener CWV-Nachweis |
| Deutschlandweit auf den ersten Suchergebnisseiten erscheinen | Erforderlich: konkrete Zielabfragen, bestätigte Zieladresse, aktuelle Positions-/Impressionsdaten und Suchkontext Deutschland | **Nicht erreicht/nicht belegt.** Eine indexierbare Website oder Lighthouse-SEO 100 ist kein Nachweis tatsächlicher Platzierungen |

## Aktueller externer Stand

- Sites meldete in dieser Fortsetzung erneut keine verbundene eigene Domain. Die gewünschte Hauptdomain ist noch nicht bestätigt.
- Im zuletzt geprüften Search-Console-Zugang war keine Nine.ai-Property vorhanden; keine Aussage über andere Konten. Eine neue Eigentümerschaft wurde nicht für ein ungeklärtes Konto eingerichtet.
- Öffentliche Suchen nach der exakten Vorschauadresse und `nineai.de` lieferten keine Ergebnisse. Das ist kein verlässlicher Indexierungsnachweis und ersetzt die Search Console nicht.
- Firmierung, Rechtsform, Anschrift, Verantwortlicher, echte Teamdaten sowie freigegebene Unternehmens-/Bewertungsprofile fehlen.
- Der öffentliche PageSpeed-API-Aufruf lieferte HTTP 429. Das offizielle Web-Frontend lieferte anschließend Labormessungen; alle fünf URLs meldeten bei den Nutzungsdaten „Keine Daten“.

## Beleg der Bildoptimierung

`responsive-images.json` prüft 72 reale WebP-Dateien: Pixelmaße, Seitenverhältnis, Dateigröße und Inhalts-Hash. `verified-live.json` prüft 48 HTML-Seiten, 73 Bild-URLs, 78 Crawler-Vergleiche, 7 echte Fehlerpfade und eine frische zufällige Stichprobe; keine fehlgeschlagenen Prüfungen. Im öffentlichen Google-Bericht zu v28 sind die neuen 800-Pixel-Desktop- und 260-Pixel-Mobilvarianten tatsächlich als geladene Ressourcen sichtbar. Die PRIME-ENERGIE-Desktopdatei benötigt damit dort 27,7 KiB statt der ursprünglichen rund 81 KiB. Die Abbildungen werden weder abgeschnitten noch für einen besseren Messwert absichtlich unscharf ausgeliefert.

## Wiederholte externe Blockade und verbleibender Umfang

Die gleiche Voraussetzung fehlt in mindestens drei aufeinanderfolgenden Zielturns: v27 (`7a8172a`), v28 (`1cd49c9`) und der aktuellen v29-Prüfung. Die früheren Prüfdateien wurden aus Git erneut gelesen. Die heutige Sites-Abfrage liefert weiterhin keine eigene Domain; die aktuell sichtbare Search-Console-Auswahl enthält zwei andere Projekt-Properties und keine Nine.ai-Property. Die tatsächliche Firmierung und Anschrift fehlen weiterhin im Quellbestand. Nachweise ohne Kundendaten: `external-prerequisites.json`.

Die unabhängigen Infrastruktur-, Inhalts-, Bild- und aus den Labortests abgeleiteten Performance-Arbeiten sind umgesetzt und veröffentlicht. Für den nächsten sachlichen Schritt werden Eigentümerangaben bzw. ein passender Messzugang benötigt: die verbindliche Hauptdomain anschließen, echte Unternehmensangaben und freigegebene Profile vervollständigen und auf der richtigen Search-Property Indexierung und Positionen prüfen. Weitere Textmengen oder kosmetische Änderungen ersetzen diese Voraussetzungen nicht. Die eingeschränkte manuelle Browser-/Felddatenabdeckung bleibt ausdrücklich offen.

Der Gesamtauftrag ist **nicht erreicht**. Das Ziel „deutschlandweit auf den ersten Seiten“ wird erst anhand tatsächlicher Suchdaten als erreicht bewertet. Keine Kampagne, Profilveröffentlichung, zusätzliche Eigentümerschaft, Kontaktaufnahme oder wiederkehrende Warteaufgabe wurde angelegt. Nach Abschluss der v29-Nachweise wird das Ziel wegen der wiederholt fehlenden Eigentümerangaben und des Messzugangs als blockiert zurückgegeben; es kann nach Lieferung dieser Eingaben weiterbearbeitet werden.
