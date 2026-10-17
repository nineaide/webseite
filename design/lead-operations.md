# Betrieb der Website-Anfragen

## Empfang und Mailzustellung

Die neue Landingpage speichert gültige Anfragen in der privaten Sites-D1-Tabelle `website_leads`. `/api/website-anfrage` erlaubt ausschließlich gleiche Browser-Origin und JSON-POST; es gibt keine öffentliche Liste oder Lese-API. Der Erfolg erscheint erst nach bestätigtem Datenbank-Insert. Wiederholung derselben Request-ID und desselben normalisierten Inhalts erzeugt keinen zweiten Datensatz. Veränderte Inhalte unter derselben ID werden abgewiesen. Fünf weitere gleichzeitige Anfragen mit derselben E-Mail lassen nach einer ersten Anfrage genau zwei weitere Inserts innerhalb 15 Minuten zu.

Kontaktadresse: **anfrage@nineai.de**, vom Nutzer bestätigt. Die Maildienst-Frage ist noch offen. Es sind keine Versand-Zugangsdaten eingerichtet. Neue Datensätze bleiben deshalb mit `notification_status=pending` gespeichert. Datenbankempfang bedeutet derzeit ausdrücklich **nicht**, dass eine Benachrichtigung im Postfach zugestellt wurde.

Der vorbereitete HTTP-Mailadapter kann über serverseitige Sites-Umgebungsvariablen aktiviert werden: `LEAD_RESEND_API_KEY` und `LEAD_EMAIL_FROM` (beim Anbieter verifizierter Absender). Keine Geheimnisse ins Repository, ins Browserbundle oder in den Chat eingeben. Wenn ein anderer Anbieter verwendet werden soll, wird der Adapter entsprechend ersetzt. Die Empfängeradresse ist serverseitig festgelegt; Besucher können sie nicht überschreiben.

Datensätze und ihr Zustellstatus können über die authentifizierte Sites-Datenbankverwaltung eingesehen werden. Der Mailanbieter erhält eine Textnachricht; Formularinhalt wird nicht als HTML ausgeführt. Es gibt keine Bestätigungs-E-Mail an die eingegebene Absenderadresse und keine Newsletter-Anmeldung.

## Wiederanlauf

Eine identische Wiederholung einer bereits gespeicherten Anfrage versucht die Benachrichtigung erneut, wenn deren Status `pending` oder `failed` ist. Status `emailed` ist terminal. Der Anbieter-Idempotenzschlüssel lautet `website-lead/<requestId>`. Seine Aufbewahrungsgrenze beim Anbieter ist zu beachten; ein sehr später manueller Wiederanlauf nach unklarem Zustellstatus kann eine doppelte Mail verursachen, aber keinen doppelten Lead-Datensatz.

Es ist kein automatischer Hintergrundjob eingerichtet. Nach Einrichtung des Maildiensts müssen frühere `pending`/`failed`-Datensätze durch den Eigentümer bzw. einen autorisierten Betreiber aus der geschützten Datenbank gelesen und mit ihren ursprünglichen Feldern (id als requestId; campaign als JSON) an denselben Endpoint wiederholt werden. Ein abweichender Inhalt ist keine Wiederholung und liefert 409. Keine externe Person erhält hierfür Datenbankzugriff. Originalpayloads und personenbezogene Daten nicht in Logs oder öffentliche Werkzeuge kopieren.

## Kampagnenmessung

`nine:lead-event` ist ein lokales Browserereignis ohne Netzwerkversand. Ereignisse: `form_start`, `form_step`, `package_select`, `form_error`, `lead_received`. Details enthalten Schritt, Paket, Vorhabenkategorie und beim Empfang eine zufällige `event_id`, keine Namen/E-Mail/Telefon. Nur `lead_received` nach bestätigtem Empfang eignet sich später als primäre Conversion; noch besser ist ein nachgelagerter qualifizierter Lead. Eine erfolgreiche Wiederholung nach unbekanntem Netzwerkstatus darf beim späteren Tracking nicht nochmals als unabhängige Conversion gezählt werden; Conversion-Integration muss die mitgelieferte `event_id` zur Deduplizierung verwenden.

UTM-Felder werden nur mit einer abgesendeten Anfrage gespeichert. Kein Fingerprinting, keine ungefragten Meta-/Google-Pixel und keine Klick-ID-Speicherung. Einwilligung, konkrete Tag-IDs und CRM-Qualifikationsfeedback sind vor Aktivierung abzustimmen. Anzeigen selbst werden durch dieses Projekt nicht angelegt oder gestartet.

## Vor dem Kampagnenstart

Automatische E-Mail-Zustellung inklusive Wiederanlauf prüfen; tatsächliche Anbieteridentität, vollständige Datenschutzhinweise und Aufbewahrung/Löschung festlegen; gewünschte Messung anschließen; eine echte qualifizierte Testanfrage vom Anzeigenlink bis ins Postfach prüfen. Der aktuelle Rechtstext beschreibt den Entwicklungsstand und ersetzt diese Angaben nicht. Die organische Indexierungssperre ist unverändert; eine Anzeigenfreigabe ist nicht behauptet.

## Prüfung

`scripts/verify-lead.mjs` verweigert Produktionsziele und erzeugt nur lokale Beispieldaten unter `example.test`. Ohne lokale Mail-Zugangsdaten ausführen. Geprüft werden Eingabegrenzen, Cross-Origin-Abweisung, Spam-Feld, echte Speicherung, Wiederholung, Konflikte, gleichzeitiges Rate-Limit, Paketvorauswahl, serverseitige Inhalte und geschlossene FAQ. Lokale Testdaten werden nicht als Migration oder Seeds veröffentlicht.

Eine Prüfung echter Browser-Interaktionen und Feldmessungen wird durch Quelltext- und HTTP-Tests nicht behauptet. Die mobile Quellprüfung deckte einen schmalen Branchenwähler, Fokus außerhalb des sichtbaren Bereichs sowie Textkontrast auf; diese Punkte wurden gezielt korrigiert.

Lokaler Sonderfall: Wrangler 4.92 meldet nach einem mit 413 abgewiesenen großen Upload beim nächsten weitergeleiteten Request irreführend „Worker restarted“. Der Fehler bleibt trotz explizitem Abbruch des Eingabestreams bestehen; die Proxy-URL-Vergleichslogik vergleicht unterschiedliche Pfade. Deshalb läuft der Größen-Test lokal zuletzt. Die normale Empfangs-/Wiederholungs-/Parallelitätsprüfung besteht. Die Sequenz 413 gefolgt von einer gewöhnlichen Validierungsantwort muss zusätzlich auf der veröffentlichten Worker-Route geprüft werden; keine automatischen POST-Wiederholungen wurden als Umgehung eingebaut.

Veröffentlichungsprüfung 06.09.2026: Die echte Worker-Route besteht 413 → 400 → 400 unmittelbar nacheinander; das lokale Wrangler-Problem tritt dort nicht auf. Die neue Seite und Growth-Paketvorauswahl werden korrekt serverseitig ausgeliefert. Die veröffentlichte private Datenbank enthält die erwartete Tabelle `website_leads`; keine lokalen Testdatensätze wurden übertragen. Alle 20 öffentlichen Seiten bestehen außerdem den live ausgeführten SSR-/Font-/404-Test. Es wurden keine gültigen Produktions-Testleads oder E-Mails versendet; ein vollständiger Postfach-Test steht mit Einrichtung des Maildiensts aus.

Überarbeitung 06.09.2026: Nine Start (1.990 € netto) ist als `nine-start` in der neuen Landingpage und Eingabeprüfung ergänzt; bestehende Leads und Datenbankschema bleiben unverändert. Der Integrationslauf verwendet nun dieses Einstiegspaket und prüft zusätzlich alle drei URL-Paketvorauswahlen. Der Maildienst ist weiterhin nicht konfiguriert. Bewertungsbereiche sind vom Nutzer angeforderte, sichtbar gekennzeichnete Platzhalter und dürfen erst nach Vorlage echter Freigaben/Quellen durch Kundenstimmen ersetzt werden.

Die abschließende lokale Produktionsprüfung der Überarbeitung besteht: Nine-Start-Empfang mit echter lokaler Speicherung, identische Wiederholung, Konfliktabweisung, paralleles Rate-Limit, drei Paketvorauswahlen, eindeutige Bewertungsplatzhalter und sieben geschlossene FAQ. Alle 20 Routen bestehen SSR-/Metadaten-/Font-Prüfung sowie Link- und 404-Prüfung. Keine Browserinteraktionen oder echte Mailzustellung werden damit behauptet.
