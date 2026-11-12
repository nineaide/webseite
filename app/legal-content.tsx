import {
  businessIdentity as business,
  basisPriceNotice,
  taxNotice,
} from '../lib/business-identity';
import { isLeadEmailConfigured } from '../lib/lead-notification';

function BusinessAddress() {
  return (
    <p>
      <strong>{business.legalName}</strong>
      <br />
      Inhaber: {business.owner}
      <br />
      {business.street}
      <br />
      {business.postalCode} {business.city}
      <br />
      {business.country}
    </p>
  );
}

function Imprint() {
  return (
    <>
      <h2>Angaben gemäß § 5 DDG</h2>
      <p>Nine.ai ist eine Marke und ein Angebot von:</p>
      <BusinessAddress />
      <h2>Kontakt</h2>
      <p>
        E-Mail: <a href={'mailto:' + business.email}>{business.email}</a>
        <br />
        Website: <a href="https://www.nineai.de/">www.nineai.de</a>
      </p>
      <h2>Unternehmensform und Sitz</h2>
      <p>
        Einzelunternehmen. Keine Eintragung im Handelsregister. Rechtlicher
        Unternehmenssitz ist München. Die Nine.ai-Präsenz in Frankfurt ist kein
        weiterer rechtlicher Unternehmenssitz.
      </p>
      <h2>Umsatzsteuer</h2>
      <p>{taxNotice}</p>
    </>
  );
}

function Privacy() {
  const mailEnabled = isLeadEmailConfigured();
  return (
    <>
      <p>
        Stand: 12. November 2026. Diese Hinweise gelten für www.nineai.de und
        die darüber angebotenen Projektanfragen.
      </p>
      <h2>1. Verantwortlicher und Datenschutzkontakt</h2>
      <BusinessAddress />
      <p>
        Fragen zum Datenschutz und Anfragen zu Ihren Rechten richten Sie bitte
        an{' '}
        <a href={'mailto:' + business.privacyEmail}>{business.privacyEmail}</a>.
        Weitere Anbieterangaben finden Sie im <a href="/impressum">Impressum</a>
        .
      </p>

      <h2>2. Bereitstellung der Website durch Cloudflare</h2>
      <p>
        Wir nutzen Cloudflare Workers mit der zugehörigen Auslieferung
        statischer Dateien und Cloudflare D1 für die Speicherung von Anfragen.
        Anbieter ist Cloudflare, Inc., 101 Townsend Street, San Francisco, CA
        94107, USA.
      </p>
      <p>
        Beim Aufruf verarbeitet die Infrastruktur technische Verbindungsdaten.
        Dazu können IP-Adresse, angefragte URL, Zeitpunkt, Browser- und
        Betriebssystemangaben, übermittelte Referrer-Angaben und der HTTP-Status
        gehören. Dies dient der Auslieferung, Fehlerbehebung und Absicherung der
        Website. Rechtsgrundlage ist Art. 6 Abs. 1 Buchst. f DSGVO; unser
        berechtigtes Interesse ist ein sicherer und zuverlässig erreichbarer
        Webauftritt.
      </p>
      <p>
        Technische Daten werden für die Bereitstellung und, soweit erforderlich,
        für Fehleranalyse und die Abwehr von Missbrauch verarbeitet. Für
        Infrastruktur- und Sicherheitsprotokolle gelten die Einstellungen und
        Aufbewahrungsregeln des eingesetzten Cloudflare-Dienstes. Bei einem
        konkreten Sicherheitsvorfall können erforderliche Nachweise bis zu
        dessen Klärung aufbewahrt werden. Die Anwendung führt keine eigenen
        Zugriffsprotokolle mit Formularinhalten.
      </p>
      <p>
        Cloudflare betreibt ein internationales Netzwerk. Eine Verarbeitung in
        den USA oder anderen Staaten außerhalb des Europäischen Wirtschaftsraums
        ist möglich; ein ausschließlicher Speicherort in Deutschland wird nicht
        zugesagt. Cloudflare stellt eine Vereinbarung zur Auftragsverarbeitung
        und EU-Standardvertragsklauseln für internationale Übermittlungen
        bereit. Informationen zu den Schutzmaßnahmen finden Sie in der{' '}
        <a
          href="https://www.cloudflare.com/cloudflare-customer-dpa/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Datenschutzvereinbarung von Cloudflare
        </a>{' '}
        und den{' '}
        <a
          href="https://www.cloudflare.com/privacypolicy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Datenschutzhinweisen von Cloudflare
        </a>
        .
      </p>

      <h2>3. Projekt- und Paketanfragen</h2>
      <p>
        Sie können als Unternehmen, selbstständige Person oder Privatperson
        unverbindlich anfragen. Im Formular sind Name, E-Mail-Adresse und
        Telefonnummer erforderlich. Außerdem wird das ausgewählte Paket oder die
        gewünschte Leistung übermittelt. Ihre Website-Adresse und eine Nachricht
        sind freiwillig. Ohne die erforderlichen Kontaktdaten lässt sich das
        Formular nicht absenden. Eine Pflicht zur Anfrage besteht nicht;
        alternativ können Sie uns per E-Mail kontaktieren.
      </p>
      <p>
        Die Daten werden verschlüsselt an die Anfrage-Schnittstelle dieser
        Website übertragen und in der Cloudflare-D1-Datenbank gespeichert.
        Zusätzlich speichern wir den Eingangszeitpunkt, eine zufällige
        Anfragenummer, einen Prüfwert der Anfrage sowie den Status und die
        Anzahl von E-Mail-Benachrichtigungsversuchen. Die Lead-Tabelle enthält
        keine gesonderten Felder für IP-Adresse, User-Agent oder vollständige
        Referrer-URL. Davon zu unterscheiden sind die technischen
        Verbindungsdaten der Infrastruktur.
      </p>
      <p>
        Wir verwenden die Angaben, um Ihr Anliegen zu besprechen, Rückfragen zu
        stellen und ein persönliches Angebot vorzubereiten. Für eine von Ihnen
        selbst angefragte Leistung ist Art. 6 Abs. 1 Buchst. b DSGVO die
        Rechtsgrundlage. Wenn Sie für ein Unternehmen oder eine andere Person
        Kontakt aufnehmen, erfolgt die geschäftliche Kommunikation auf Grundlage
        von Art. 6 Abs. 1 Buchst. f DSGVO. Unser Interesse ist die Bearbeitung
        der an uns gerichteten Anfrage.
      </p>
      <p>
        Enthält die aufgerufene Formularadresse Kampagnenparameter, werden die
        Angaben zu Quelle, Medium, Kampagne, Inhalt und Suchbegriff mit der
        Anfrage gespeichert. Das dient der Zuordnung des Anfragewegs auf
        Grundlage von Art. 6 Abs. 1 Buchst. f DSGVO. Dafür werden keine
        Tracking-Pixel geladen und keine dauerhaften Browserkennungen angelegt.
        Dieser Zuordnung können Sie widersprechen.
      </p>
      <p>
        Die Übermittlung ist unverbindlich. Es entsteht dadurch weder ein
        Vertrag noch eine Zahlungspflicht. Wir nehmen Sie durch eine Anfrage
        nicht in einen Newsletter oder Werbeverteiler auf. Es findet keine
        automatisierte Entscheidung mit rechtlicher oder vergleichbarer
        erheblicher Wirkung und kein darauf gerichtetes Profiling statt.
      </p>

      <h2>4. Schutz vor Spam und doppelten Anfragen</h2>
      <p>
        Die Schnittstelle prüft Herkunft und Format der Übermittlung. Ein für
        Besucher nicht sichtbares Zusatzfeld hilft, automatisierte Spam-Eingaben
        zurückzuweisen; dessen Inhalt wird nicht als Lead gespeichert. Eine
        Begrenzung anhand der bereits eingegangenen Anfragen derselben
        E-Mail-Adresse schützt vor wiederholtem Versand. Anfragenummer und
        Prüfwert verhindern doppelte Einträge bei einem erneuten
        Übermittlungsversuch. Rechtsgrundlage ist Art. 6 Abs. 1 Buchst. f DSGVO;
        unser berechtigtes Interesse ist die Vermeidung von Missbrauch und
        fehlerhaften Mehrfacheinträgen.
      </p>

      <h2>5. Zugriff und E-Mail-Kommunikation</h2>
      <p>
        Organisatorischen Zugriff auf eingehende Anfragen haben Dariush Ghawss
        und der unmittelbar an der Bearbeitung beteiligte Geschäftspartner.
        Davon getrennt verarbeiten technische Dienstleister Daten im Rahmen der
        Bereitstellung ihrer Infrastruktur.
      </p>
      <p>
        Wenn Sie uns per E-Mail schreiben, verarbeiten wir Absenderadresse,
        Nachrichteninhalt, gegebenenfalls freiwillig mitgesandte Anhänge und die
        für die Kommunikation notwendigen Übermittlungsdaten. Zweck,
        Rechtsgrundlagen und Löschkriterien entsprechen der Bearbeitung Ihrer
        Anfrage. Bitte senden Sie keine Passwörter oder nicht benötigten
        sensiblen Daten.
      </p>
      <p>
        Für die technische Annahme von E-Mails an anfrage@nineai.de sind
        Mailserver von IONOS eingerichtet. Anbieter ist IONOS SE, Elgendorfer
        Straße 57, 56410 Montabaur, Deutschland. Beim Empfang werden die für die
        Zustellung erforderlichen Verbindungs- und Nachrichtenangaben
        verarbeitet. Weitere Informationen enthält die{' '}
        <a
          href="https://www.ionos.de/datenschutzerklaerung"
          target="_blank"
          rel="noopener noreferrer"
        >
          Datenschutzerklärung von IONOS
        </a>
        .
      </p>
      <p>
        Die im Impressum genannte Adresse {business.email} ist ein
        Gmail-Postfach. Für diesen Kontakt wird Gmail von Google genutzt; für
        Nutzer im Europäischen Wirtschaftsraum ist Google Ireland Limited,
        Gordon House, Barrow Street, Dublin 4, Irland, der in Googles
        Datenschutzhinweisen genannte Anbieter. Google kann Daten auch außerhalb
        des Europäischen Wirtschaftsraums verarbeiten. Informationen zu
        Empfängern, Speicherkriterien und internationalen Schutzmaßnahmen finden
        Sie in der{' '}
        <a
          href="https://policies.google.com/privacy?hl=de"
          target="_blank"
          rel="noopener noreferrer"
        >
          Datenschutzerklärung von Google
        </a>
        . Beim bloßen Aufruf unserer Website wird keine Verbindung zu Gmail
        aufgebaut.
      </p>
      {mailEnabled && (
        <>
          <h3>Benachrichtigungen über Formulareingänge</h3>
          <p>
            Für E-Mail-Benachrichtigungen über gespeicherte Formularanfragen ist
            Resend eingerichtet. Anbieter ist Plus Five Five, Inc. (Resend),
            USA. An Resend werden die Anfragenummer, Kontaktangaben, das
            ausgewählte Interesse, freiwillige Website- und Nachrichtenangaben
            sowie übermittelte Kampagnenparameter zur Zustellung an unser
            Anfragepostfach übertragen. Ihre E-Mail-Adresse wird als
            Antwortadresse verwendet. Dies dient der Bearbeitung Ihrer Anfrage
            auf den oben genannten Rechtsgrundlagen.
          </p>
          <p>
            Die Verarbeitung durch Resend kann in den USA stattfinden. Resend
            stellt eine Vereinbarung zur Auftragsverarbeitung mit
            EU-Standardvertragsklauseln bereit. Die dienstseitige Speicherdauer
            hängt von den gebuchten Einstellungen und den Aufbewahrungsregeln
            des Anbieters ab. Informationen dazu finden Sie im{' '}
            <a
              href="https://resend.com/legal/dpa"
              target="_blank"
              rel="noopener noreferrer"
            >
              Data Processing Addendum
            </a>{' '}
            und in den{' '}
            <a
              href="https://resend.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Datenschutzhinweisen von Resend
            </a>
            . Eine E-Mail-Bestätigung an Sie wird dadurch nicht automatisch
            versendet.
          </p>
        </>
      )}

      <h2>6. Speicherdauer und Löschung</h2>
      <p>
        Anfragen, aus denen kein Vertrag zustande kommt, sollen grundsätzlich
        sechs Monate nach ihrem Eingang gelöscht werden. Vor der Löschung wird
        geprüft, ob ein Vertrag, gesetzliche Aufbewahrungspflichten oder ein
        anderer konkreter Grund zur weiteren Speicherung vorliegen. Die
        Einordnung erfolgt manuell; eine automatische Löschung allein aufgrund
        des Alters findet nicht statt.
      </p>
      <p>
        Entsteht ein Vertrag, werden erforderliche Vertrags- und
        Geschäftsunterlagen für die Durchführung und die jeweils anwendbaren
        gesetzlichen Aufbewahrungspflichten verarbeitet (Art. 6 Abs. 1 Buchst. b
        und c DSGVO). Soweit Unterlagen zur Geltendmachung oder Abwehr konkreter
        Ansprüche benötigt werden, kann eine weitere Speicherung auf Grundlage
        von Art. 6 Abs. 1 Buchst. f DSGVO erforderlich sein. Nach Wegfall des
        jeweiligen Grundes sind die Daten zu löschen.
      </p>
      <p>
        Die Prüfung muss auch Kopien im E-Mail-Postfach erfassen. Technische
        Sicherungen unterliegen den Wiederherstellungs- und Überschreibfristen
        des jeweiligen Dienstleisters; eine Löschung aus der laufenden Datenbank
        ist nicht gleichbedeutend mit einer sofortigen Entfernung aus jeder
        Sicherung.
      </p>

      <h2>7. Browser-Speicher, Schriften und externe Inhalte</h2>
      <p>
        Die Website setzt im Anwendungscode keine Analyse- oder
        Marketing-Cookies und speichert Formulareingaben nicht in Local Storage,
        Session Storage oder IndexedDB. Eingaben und die Eingangsbestätigung
        werden für die Anzeige im Arbeitsspeicher der geöffneten Seite gehalten.
        Die Übermittlung erfolgt erst beim Absenden.
      </p>
      <p>
        Schriften, Bilder und die Standortgrafik werden über unsere eigene
        Website ausgeliefert. Es sind keine Analytics-Skripte, Marketing-Pixel,
        externen Karten, Video- oder Social-Media-Frames und keine aktiven
        KI-Chatdienste eingebunden. Hinweise auf solche Leistungen oder
        Abbildungen in Projekt-Screenshots sind keine Nutzung dieser Dienste
        durch Sie.
      </p>
      <p>
        Externe Kundenwebsites und Informationsangebote sind als Links
        eingebunden. Erst wenn Sie einen Link aufrufen, verbinden Sie sich mit
        dem jeweiligen Angebot. Dort gelten die Datenschutzinformationen des
        jeweiligen Betreibers.
      </p>

      <h2>8. Ihre Rechte</h2>
      <p>
        Nach Maßgabe der gesetzlichen Voraussetzungen haben Sie das Recht auf
        Auskunft über Ihre Daten (Art. 15 DSGVO), Berichtigung (Art. 16),
        Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18) und
        Datenübertragbarkeit (Art. 20). Soweit eine Verarbeitung auf einer
        Einwilligung beruht, können Sie diese jederzeit für die Zukunft
        widerrufen. Die Rechtmäßigkeit der bisherigen Verarbeitung bleibt davon
        unberührt.
      </p>
      <p>
        <strong>Widerspruch:</strong> Soweit wir Daten auf Grundlage von Art. 6
        Abs. 1 Buchst. f DSGVO verarbeiten, können Sie aus Gründen, die sich aus
        Ihrer besonderen Situation ergeben, gemäß Art. 21 DSGVO widersprechen.
        Sie können sich hierzu an{' '}
        <a href={'mailto:' + business.privacyEmail}>{business.privacyEmail}</a>{' '}
        wenden.
      </p>
      <h3>Beschwerde bei einer Aufsichtsbehörde</h3>
      <p>
        Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu
        beschweren, insbesondere an Ihrem gewöhnlichen Aufenthaltsort,
        Arbeitsplatz oder am Ort des vermuteten Verstoßes. Für private
        Unternehmen mit Sitz in Bayern ist das Bayerische Landesamt für
        Datenschutzaufsicht (BayLDA) zuständig:
      </p>
      <p>
        Bayerisches Landesamt für Datenschutzaufsicht
        <br />
        Promenade 18
        <br />
        91522 Ansbach
        <br />
        <a
          href="https://www.lda.bayern.de/de/kontakt.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.lda.bayern.de
        </a>
      </p>
    </>
  );
}

function InquiryInformation() {
  return (
    <>
      <h2>Informationen zum Anfrageablauf</h2>
      <p>
        Diese Seite erläutert die unverbindliche Anfrage. Sie enthält keine
        gesonderten Allgemeinen Geschäftsbedingungen.
      </p>
      <h2>Unverbindliche Anfrage</h2>
      <p>
        Nine.ai ist ein Angebot von {business.legalName}. Unternehmen,
        Selbstständige und Privatkunden können ein Paket oder ein individuelles
        Projekt anfragen. Das Absenden des Formulars ist keine Bestellung,
        begründet keinen Vertrag und löst keine Zahlungspflicht aus.
      </p>
      <p>
        Wir stimmen zunächst Ihren Bedarf persönlich ab. Ein Vertrag kommt erst
        durch die spätere Annahme eines entsprechenden individuellen Angebots
        oder eine gesonderte Vereinbarung zustande.
      </p>
      <h2>Preise und Leistungsumfang</h2>
      <p>
        {basisPriceNotice} {taxNotice} Zusätzliche Leistungen und laufende
        Kosten werden vor einer Beauftragung gesondert abgestimmt.
      </p>
      <h2>Spätere Vereinbarung</h2>
      <p>
        Leistungsbeschreibung, Konditionen und Nutzungsrechte werden vor einer
        Beauftragung festgelegt. Diese Informationen ersetzen keine für den
        späteren Vertrag erforderlichen Vereinbarungen oder
        Verbraucherinformationen.
      </p>
    </>
  );
}

export function LegalContent({ kind }: { kind: string }) {
  return kind === 'Impressum' ? (
    <Imprint />
  ) : kind === 'Datenschutz' ? (
    <Privacy />
  ) : (
    <InquiryInformation />
  );
}
