import {
  ArrowUpRight,
  Check,
  Globe2,
  Rocket,
  Layers3,
  TrendingUp,
} from 'lucide-react';
import { packages, money } from './site-data';
import { WebsitePackages } from './website-packages';
export const packagePresentation: Record<
  string,
  { title: string; forWhom: string; result: string; icon: typeof Globe2 }
> = {
  'nine-launch': {
    title: 'Deine neue Website',
    forWhom: 'Du willst dein Unternehmen professionell zeigen.',
    result:
      'Eine fertige Website mit individuellem Design und selbst pflegbaren Inhalten.',
    icon: Globe2,
  },
  'nine-growth': {
    title: 'Website + Werbestart',
    forWhom: 'Du brauchst einen neuen Auftritt und möchtest Kunden gewinnen.',
    result:
      'Deine Website, passende Werbeseiten und die Einrichtung deiner Google-Werbung.',
    icon: Rocket,
  },
  'platform-discovery': {
    title: 'Deine Web-App zuerst planen',
    forWhom:
      'Du hast eine Idee für ein Portal, eine Web-App oder ein Buchungssystem.',
    result:
      'Ein konkreter Funktionsplan und eine Kostenschätzung für die anschließende Entwicklung.',
    icon: Layers3,
  },
  'custom-platform': {
    title: 'Deine Plattform bauen',
    forWhom:
      'Du möchtest eine individuelle Web-App oder Plattform entwickeln lassen.',
    result:
      'Ein digitales Produkt mit den Funktionen, die dein Geschäft braucht.',
    icon: Layers3,
  },
  'nine-scale': {
    title: 'Deine Google-Werbung',
    forWhom:
      'Deine Website steht. Jetzt möchtest du passende Kunden erreichen.',
    result:
      'Laufende Betreuung deiner Google Ads, Auswertung der Anfragen und Verbesserungen.',
    icon: TrendingUp,
  },
};
export function PackageCards({
  slugs = ['nine-launch', 'nine-growth', 'platform-discovery'],
  details = false,
}: {
  slugs?: string[];
  details?: boolean;
}) {
  return (
    <div className="c-package-cards">
      {slugs.map((slug) => {
        const p = packages.find((p) => p.slug === slug)!;
        const presentation = packagePresentation[slug];
        return (
          <article
            className={
              'c-package-card ' + (slug === 'nine-growth' ? 'c-featured' : '')
            }
            key={slug}
            id={slug}
          >
            <div className="c-package-label">
              <span>{p.name}</span>
              <presentation.icon size={23} />
            </div>
            <h3>{presentation.title}</h3>
            <p className="c-package-audience">{presentation.forWhom}</p>
            <div className="c-package-price">
              {p.suffix.includes('ab') && <small>ab </small>}
              <strong>{money(p.price)}</strong>
            </div>
            <p className="c-package-unit">
              {p.suffix.includes('Monat') ? 'pro Monat' : 'einmalig'} · netto
            </p>
            <a
              className={
                'c-button ' +
                (slug === 'nine-growth' ? 'c-button-light' : 'c-button-blue')
              }
              href={'/checkout/' + slug}
            >
              Paket ansehen
              <ArrowUpRight size={18} />
            </a>
            <ul>
              {p.includes.map((x) => (
                <li key={x}>
                  <Check size={17} />
                  {x}
                </li>
              ))}
            </ul>
            <p className="c-package-boundary">
              {slug === 'platform-discovery'
                ? 'Planungspaket: Die Entwicklung wird separat beauftragt.'
                : slug === 'nine-growth'
                  ? 'Werbebudget und laufende Betreuung sind separat.'
                  : slug === 'nine-launch'
                    ? 'Ohne Shop, Kundenlogin oder Sonderfunktionen.'
                    : p.excludes}
            </p>
            {details && (
              <details>
                <summary>
                  Genauen Umfang ansehen <span>+</span>
                </summary>
                <p>
                  <strong>Du erhältst:</strong> {presentation.result}
                </p>
                <p>
                  <strong>Nicht enthalten:</strong> {p.excludes}
                </p>
                <p>
                  <strong>Zahlungsplan:</strong> {p.payment}
                </p>
              </details>
            )}
          </article>
        );
      })}
    </div>
  );
}
export function PackageOverview() {
  return (
    <>
      <header className="c-packages-heading">
        <span className="c-eyebrow">WEBSITE-PAKETE & PREISE</span>
        <h1>
          Deine neue Website.
          <br />
          <em>Dein klarer Festpreis.</em>
        </h1>
        <p>
          Individuelles Design, verständliche Leistungen und ein Preis, mit dem
          du planen kannst. Wähle den passenden Umfang für dein Unternehmen.
        </p>
      </header>
      <WebsitePackages detailed headingLevel={2} />
      <div className="c-more-packages">
        <span className="c-eyebrow">FÜR VORHABEN MIT EIGENEM UMFANG</span>
        <h2>Mehr als eine Website geplant?</h2>
        <p className="c-price-note">
          Web-Apps und Kundenportale, Automatisierung und laufende Werbung
          besprechen wir persönlich. Diese Leistungen sind keine
          Website-Festpreispakete.
        </p>
        <PackageCards
          slugs={['platform-discovery', 'custom-platform', 'nine-scale']}
          details
        />
      </div>
      <div className="c-help-row">
        <div>
          <h3>Du möchtest Abläufe automatisieren?</h3>
          <p>
            Anfragen sortieren, Dokumente auslesen oder Daten übertragen.
            Individuelle Projekte ab 4.900 € netto.
          </p>
        </div>
        <a className="c-button c-button-dark" href="/ki-automation">
          Möglichkeiten ansehen <ArrowUpRight size={18} />
        </a>
      </div>
      <p className="c-price-note">
        Website-Festpreise netto für den beschriebenen Umfang. Weitere
        Leistungen nach Vereinbarung. Ein Bestellentwurf löst noch keine
        Bestellung oder Zahlung aus.
      </p>
    </>
  );
}
