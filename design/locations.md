# Standortbereich · 08.09.2026

Der Auftraggeber nennt Frankfurt und München als Standorte. Auf Wunsch steht der gemeinsame Mini-Bereich auf beiden Seiten direkt hinter den Referenzprojekten: auf der Startseite vor der Geräte-Demonstration und der persönlichen Zusammenarbeit, auf der Anzeigen-Landingpage vor Design / Entwicklung. Ein helles, abgerundetes Feld, die bestehende Schrift und eine blaue Deutschlandkarte ergänzen die vorhandene Gestaltung. Auf dem weißen Hintergrund der Startseite bekommt das Feld einen eisblauen Hintergrund. Keine zusätzliche Kontaktstrecke; das frühe Leadformular bleibt an seiner Position.

## Recherche und Entscheidung

- [RTO – Kontakt](https://www.rto.de/kontakt): Frankfurt und München stehen als klar benannte Standorte nebeneinander in der Inhaltsstruktur. Die Ortsnamen sind unmittelbar verständlich. Für Nine.ai übernehmen wir diese Klarheit, nicht fremde Adressen oder Formulierungen.
- [Nagler & Company – Standorte](https://www.nagler-company.com/de/unternehmen/standorte.html): Standorte dienen als Ausgangspunkte für persönliche, überregionale Zusammenarbeit. Für die beiden Verkaufsseiten reicht ein kompakter Hinweis; eine lange Liste von Anfahrtsdetails ist hier nicht nötig.
- [Simplemaps – Deutschlandkarte](https://simplemaps.com/svg/country/de): Länderumriss ohne Bundeslandgrenzen, Mercator-Projektion. Die flächige Darstellung passt zur bestehenden Gestaltung ohne dekorative Trennlinien.

Das ist eine gestalterische Ableitung, kein belegter Conversion-Uplift. Beide Städtenamen stehen als Text im serverseitig gerenderten HTML. Die Karte wiederholt diese Information dekorativ und bleibt für Screenreader ausgeblendet. Auf kleinen Displays entfallen nur die doppelten Kartenlabels; beide Städtenamen bleiben in der Überschrift sichtbar. Feste Bildabmessungen reservieren den Platz. Kein JavaScript, Kartenanbieter-Embed, Tracking, neue Animation oder zusätzliche Bibliothek.

## Kartenquelle und Nutzung

- Quelldatei: https://simplemaps.com/static/svg/country/de/all/de.svg
- Lizenz: https://simplemaps.com/resources/svg-license
- Anbieter: Simplemaps.com / Pareto Software, LLC.
- Abruf: 08.09.2026. Die Lizenz erlaubt die persönliche und kommerzielle Nutzung in Websites; ein Backlink ist nicht vorgeschrieben. Es wird keine Sammlung unbearbeiteter Karten weitervertrieben.
- Eingebaut: `public/assets/locations/germany.svg`. Geometrie unverändert. Auf eine blaue Füllung umgestellt; unbenutzte Kalibrierpunkte und Metadaten entfernt; korrektes `viewBox` gesetzt.

## Markierungen

Die Markierungen beziehen sich auf Stadtzentren, nicht auf bestätigte Büroanschriften. Es werden keine Adressen, Telefonnummern, Öffnungszeiten oder lokale Teamgrößen ergänzt.

- Frankfurt am Main: 50.11056° N, 8.68222° E. [OpenGeoDB](https://opengeodb.de/ort/frankfurt-am-main/).
- München: 48.13743° N, 11.57549° E. [GeoNames](https://www.geonames.org/2867714/munich.html).

Die originale SVG enthält Kalibrierpunkte aus Breite/Länge und SVG-Koordinaten. Die lineare Längengrad-Abbildung sowie die Mercator-Abbildung `ln(tan(π/4 + latitude/2))` ergeben im ursprünglichen 1000 × 1000-Koordinatensystem Frankfurt bei (372.05, 640.86) und München bei (582.95, 860.68). Die CSS-Prozentpositionen sind davon abgeleitet.
