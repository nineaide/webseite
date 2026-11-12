# Anfragen prüfen und löschen

Stand: 12. November 2026. Die produktive Datenbank wurde bei dieser Änderung weder migriert noch bereinigt.

Die Vorgabe betrifft Anfragen ohne Vertrag, grundsätzlich sechs Kalendermonate nach Eingang. E-Mails, Exporte, Backups und Unterlagen außerhalb von D1 müssen zusätzlich geprüft werden. Das Werkzeug löscht keine Postfächer oder Backups.

## Schutz und Voraussetzungen

- Die neue Migration `drizzle/0001_lead_retention.sql` muss in der jeweiligen Datenbank angewendet sein. Neue und bestehende Anfragen erhalten zunächst `unreviewed`.
- Eine Person mit berechtigtem Zugriff muss den tatsächlichen Vertragsstand und Aufbewahrungsbedarf prüfen. Die Website kennt spätere, außerhalb der Website abgeschlossene Verträge nicht.
- Nur `no_contract` wird nach Ablauf von sechs Kalendermonaten berücksichtigt. `unreviewed`, `contract` und `legal_hold` werden nicht gelöscht. Ungültige Datumsangaben werden ebenfalls ausgeschlossen.
- Vertragsfälle werden mit `contract`, sonstige Aufbewahrungsgründe mit `legal_hold` geschützt. Das Werkzeug erlaubt keine Rückstufung dieser beiden Schutzstatus auf `no_contract`.
- Bei erneut aufgenommenen Verhandlungen oder späterem Vertrag muss der Status rechtzeitig aktualisiert werden. Ohne verlässliche Statuspflege darf kein Löschlauf eingerichtet werden.
- Die Reihenfolge ist: Prüfung vor Fristablauf, Einstufung, fristgerechter Löschlauf, Prüfung der weiteren Kopien. Es ist kein Cronjob und keine automatische Prüfung oder Fristüberwachung eingerichtet.

## Bedienung

Alle Befehle arbeiten standardmäßig lokal. `--remote` ist ausdrücklich erforderlich, um auf die produktive D1 zuzugreifen. Schreibende Aktionen geben ohne `--execute` ausschließlich SQL zur Prüfung aus und ändern nichts. Anfragenummern sind ebenfalls vertraulich zu behandeln.

Lokale Testdatenbank vorbereiten:

```powershell
node node_modules/wrangler/bin/wrangler.js d1 migrations apply DB --local --config wrangler.cloudflare.json --persist-to outputs/legal-audit/state
```

Alte Anfragen zur Prüfung auflisten (nur ID, Eingangsdatum und Status):

```powershell
node scripts/lead-retention.mjs list --local --persist-to outputs/legal-audit/state
```

Die ID muss durch die tatsächlich geprüfte Anfrage-ID ersetzt werden. Zunächst nur den beabsichtigten Statuswechsel anzeigen:

```powershell
node scripts/lead-retention.mjs mark --id GEPRUEFTE-ANFRAGE-ID --status no_contract
```

Nach der inhaltlichen Prüfung ausführen; für einen Vertragsfall stattdessen `--status contract`, für andere Aufbewahrungsgründe `--status legal_hold` verwenden:

```powershell
node scripts/lead-retention.mjs mark --id GEPRUEFTE-ANFRAGE-ID --status no_contract --local --persist-to outputs/legal-audit/state --execute
```

Fällige, ausdrücklich freigegebene Datensätze anzeigen und danach löschen:

```powershell
node scripts/lead-retention.mjs preview --local --persist-to outputs/legal-audit/state
node scripts/lead-retention.mjs purge --local --persist-to outputs/legal-audit/state
node scripts/lead-retention.mjs purge --local --persist-to outputs/legal-audit/state --execute
```

Für einen produktiven Betrieb benötigt der Kontoinhaber Cloudflare-Zugriff, muss die Migration dort separat anwenden und statt `--local --persist-to …` ausdrücklich `--remote` verwenden. Diese Schritte sind hier nicht ausgeführt worden. Ein produktiver Löschlauf ist eine echte, nicht ohne Weiteres rückgängig zu machende Datenlöschung.

`node scripts/verify-retention.mjs` prüft die Migration und Löschbedingungen in einer flüchtigen SQLite-Datenbank. Das ist kein Zugriff auf echte Leads.

## Kopien und Wiederherstellung

Die gesamte Lead-Zeile einschließlich Kontaktangaben, Kampagnenparametern, Prüfwert und Benachrichtigungsstatus wird gelöscht. Zustellkopien in E-Mail-Postfächern sowie eventuell erzeugte Exporte werden davon nicht erfasst. Die im D1-Tarif verfügbare Time-Travel-Historie ist zusätzlich zu berücksichtigen; der tatsächliche Tarif wurde nicht eingesehen. Nach einer Wiederherstellung muss die Löschung erneut angewendet werden, bevor die wiederhergestellten Daten regulär genutzt werden.
