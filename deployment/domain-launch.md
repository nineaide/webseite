# Domainstart: www.nineai.de

Ziel ist `https://www.nineai.de` auf dem bestehenden Cloudflare Worker `nineai-webseite`. Der bisherige Workers-Link bleibt nutzbar. Keine Änderung an D1; für den Domainstart sind keine Datenbankmigrationen erforderlich.

1. Vor einem Nameserverwechsel die **vollständige DNS-Zone** beim bisherigen Anbieter exportieren und mit der neuen Zone vergleichen: insbesondere MX, SPF, DKIM-Selektoren, DMARC, Autodiscover, Validierungen und andere Subdomains. Mailbezogene Hosts bleiben DNS-only. Einen gegebenenfalls vorhandenen DNSSEC-Vertrauenseintrag mit dem Betreiber abstimmen. Alte Zone und Rollback-Konfiguration aufbewahren.
2. Nach Aktivierung der Zone `nineai.de` im Konto des Workers `www.nineai.de` als **Custom Domain** an den bestehenden Worker binden. Cloudflare richtet den DNS-Eintrag und das Zertifikat dafür ein. Vorhandene fremde Ziele nicht überschreiben. [Cloudflare: Custom Domains](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/).
3. **Vor dem Merge:** `https://www.nineai.de/` und `/website-erstellen-lassen` müssen mit gültigem Zertifikat die richtige Website ausliefern. Erst dann auf `main` veröffentlichen. Der normale GitHub-Build übernimmt die deklarierte Custom Domain, neuen Canonicals, Open Graph, strukturierte Daten, XML-Sitemap und robots.txt.
4. Für `nineai.de` muss der Web-DNS-Eintrag über Cloudflare proxied sein und ein gültiges TLS-Zertifikat vorliegen. Die [versionierte Single Redirect Rule](cloudflare-domain-redirect.json) in die Zone, Phase `http_request_dynamic_redirect`, **als einzelne Regel** hinzufügen: bestehende Regeln dabei nicht ersetzen. Sie erfasst HTTP und HTTPS am Apex sowie HTTP auf www, einschließlich statischer Assets. Der Status 308 erhält die HTTP-Methode. Pfad und Query landen unmittelbar auf HTTPS/www. Vor konkurrierenden HTTP→HTTPS-Regeln ausführen; keine pauschale Weiterleitung für andere Subdomains. [Cloudflare: Single Redirects](https://developers.cloudflare.com/rules/url-forwarding/single-redirects/).
5. Im öffentlichen Netz prüfen: HTTPS/www liefert die Website, alle Varianten führen ohne Zwischenstopp zum identischen Ziel, die Lead-Seite ist lesbar und ein unbekannter Pfad auf www gibt 404 zurück. Beispiele:
   ```sh
   curl -sSI 'http://nineai.de/projekte/parkesicher?utm_source=launch&v=2'
   curl -sSI 'https://nineai.de/assets/brand/NineAI-original.svg?ver=1'
   curl -sSI 'http://www.nineai.de/website-erstellen-lassen?utm_medium=cpc'
   node scripts/verify-seo.mjs https://www.nineai.de /tmp/nineai-www-seo.json
   ```
   Erwartung bei den drei curl-Aufrufen: jeweils 308 und eine Location auf `https://www.nineai.de` mit demselben Pfad und derselben Query. E-Mail-Empfang unabhängig vom Web-Release prüfen.

Bei fehlerhaftem TLS, falscher Website oder wiederholten 5xx den Domainrelease nicht als live melden. Frühere DNS-/Routingwerte und den funktionierenden Worker-Link zur Wiederherstellung bereithalten. Historische Berichte im Repository belegen nur die damals getesteten Hosts. Die unabhängig gehostete Sites-Version wird durch den GitHub-Build nicht mitveröffentlicht.
