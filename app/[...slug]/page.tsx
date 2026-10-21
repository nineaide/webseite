import type { Metadata } from 'next';
import { notFound, permanentRedirect } from 'next/navigation';
import { Header, Footer } from '../site-chrome';
import { services, packages } from '../site-data';
import {
  Solutions,
  ServicePage,
  Projects,
  Parkesicher,
  Packages,
  About,
  Legal,
} from '../subpages';
import PackageRequest from '../package-request';
import WebsiteCheckout from '../website-checkout';
import WebsitePage from '../website-page';
import { isWebsitePackage } from '../../lib/website-order';
import { breadcrumbsFor, findSeoPage } from '../../lib/seo-pages';
import { findEditorialPage } from '../content';
import { EditorialPageView } from '../editorial-pages';
import { KnowledgePage } from '../knowledge-page';
import { pageMetadata } from '../../lib/seo-metadata';
import { PageStructuredData } from '../structured-data';
const pages: Record<string, [string, string]> = {
  wissen: ['Wissen', 'Planungshilfen für Websites, Web-Apps und Google Ads.'],
  loesungen: [
    'Lösungen',
    'Plattformen, Websites, KI-Automation und Google Ads: Entdecke den passenden Einstieg für dein digitales System.',
  ],
  projekte: [
    'Projekte',
    'Ausgewählte Projekte: Websites für Dienstleister, eine Fahrzeugdatenbank sowie eigene Buchungs-, Reservierungs- und Bestellsysteme. Desktop- und Mobilansichten ansehen.',
  ],
  'projekte/parkesicher': [
    'ParkeSicher – Projekt',
    'Flughafen auswählen, Angebote vergleichen und Parkplätze buchen. Einblicke in die Produkt- und Systemperspektive von ParkeSicher.',
  ],
  pakete: [
    'Pakete & Preise',
    'Nine Start 1.990 €, Nine Launch 6.900 €, Nine Growth 12.900 € netto und Nine X auf Anfrage. Vergleiche Leistungen und passende Kundenprojekte.',
  ],
  'ueber-nine': [
    'Über Nine',
    'Strategie, Design, Backend und Growth gemeinsam gedacht. Lerne die Haltung und das Arbeitsmodell von Nine.ai kennen.',
  ],
  'projekt-starten': [
    'Projekt starten',
    'Beschreibe dein Vorhaben in wenigen Sätzen und bereite deine Nine.ai-Projektanfrage vor.',
  ],
  impressum: [
    'Impressum',
    'Anbieter- und Designhinweise zur privaten Nine.ai-Projektvorschau.',
  ],
  datenschutz: [
    'Datenschutz',
    'Informationen zur lokalen Verarbeitung des Projektbriefings und zur privaten Nine.ai-Vorschau.',
  ],
  agb: [
    'AGB',
    'Informationen zum geplanten Vertrags- und Bestellprozess der Nine.ai-Vorschau.',
  ],
};
function info(key: string) {
  const editorial = findEditorialPage('/' + key);
  if (editorial) return [editorial.label, editorial.description];
  const s = services.find((s) => s.slug === key);
  if (s) return [s.label, s.lead];
  if (key.startsWith('checkout/')) {
    const p = packages.find((p) => 'checkout/' + p.slug === key);
    if (p)
      return [
        p.name +
          (isWebsitePackage(p.slug)
            ? ' – Website-Paket auswählen'
            : ' – Paketdetails'),
        p.goal +
          (isWebsitePackage(p.slug)
            ? ' Fester Nettopreis, Leistungen und vorbereiteter Bestellablauf.'
            : ' Leistungsumfang, Preisorientierung und persönliches Projektbriefing.'),
      ];
  }
  return pages[key];
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const key = (await params).slug.join('/');
  if (key === 'projekte/prime-energie') permanentRedirect('/projekte/entwurf-energie');
  const seoPage = findSeoPage('/' + key);
  if (seoPage) return pageMetadata(seoPage);
  const d = info(key);
  if (!d)
    return {
      title: 'Seite nicht gefunden | Nine.ai',
      robots: { index: false, follow: false },
      alternates: { canonical: null },
    };
  return {
    title: d[0] + ' | Nine.ai',
    description: d[1],
    robots: { index: false, follow: true },
    alternates: { canonical: '/' + key },
    openGraph: {
      title: d[0] + ' | Nine.ai',
      description: d[1],
      url: '/' + key,
    },
  };
}
export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string[] }>;
  searchParams: Promise<{ service?: string }>;
}) {
  const key = (await params).slug.join('/');
  if (key === 'projekte/prime-energie') permanentRedirect('/projekte/entwurf-energie');
  if (!info(key)) notFound();
  const requested = (await searchParams).service;
  const initialService =
    requested &&
    [
      'Website',
      'Plattform',
      'KI & Automation',
      'Growth',
      'Noch unklar',
    ].includes(requested)
      ? requested
      : undefined;
  let content;
  const editorial = findEditorialPage('/' + key);
  const seoPage = findSeoPage('/' + key);
  if (editorial) content = <EditorialPageView page={editorial} />;
  else if (key === 'websites') content = <WebsitePage />;
  else if (services.some((s) => s.slug === key))
    content = <ServicePage slug={key} />;
  else if (key.startsWith('checkout/'))
    content = isWebsitePackage(key.split('/')[1]) ? (
      <WebsiteCheckout key={key} slug={key.split('/')[1]} />
    ) : (
      <PackageRequest key={key} slug={key.split('/')[1]} />
    );
  else
    switch (key) {
      case 'wissen':
        content = <KnowledgePage />;
        break;
      case 'loesungen':
        content = <Solutions />;
        break;
      case 'projekte':
        content = <Projects />;
        break;
      case 'projekte/parkesicher':
        content = <Parkesicher />;
        break;
      case 'pakete':
        content = <Packages />;
        break;
      case 'ueber-nine':
        content = <About />;
        break;
      case 'projekt-starten':
        content = (
          <PackageRequest
            key={key + initialService}
            initialService={initialService}
          />
        );
        break;
      default:
        content = <Legal kind={pages[key][0]} />;
    }
  return (
    <div className="figma-site n-subpage">
      <PageStructuredData path={'/' + key} />
      <Header />
      <main id="main" className="f-container n-main">
        <nav className="n-breadcrumb" aria-label="Brotkrümelnavigation">
          {seoPage ? (
            breadcrumbsFor(seoPage).map((item, i, items) => (
              <span key={item.path}>
                {i > 0 && <span aria-hidden="true"> / </span>}
                {i === items.length - 1 ? (
                  <span aria-current="page">{item.name}</span>
                ) : (
                  <a href={item.path}>{item.name}</a>
                )}
              </span>
            ))
          ) : (
            <>
              <a href="/">Start</a>
              <span aria-hidden="true">/</span>
              {key.includes('/') && (
                <>
                  <a
                    href={key.startsWith('checkout') ? '/pakete' : '/projekte'}
                  >
                    {key.startsWith('checkout') ? 'Pakete' : 'Projekte'}
                  </a>
                  <span aria-hidden="true">/</span>
                </>
              )}
              <span aria-current="page">
                {key.startsWith('checkout/') &&
                isWebsitePackage(key.split('/')[1])
                  ? 'Website-Paket auswählen'
                  : info(key)![0]}
              </span>
            </>
          )}
        </nav>
        {content}
      </main>
      <Footer />
    </div>
  );
}
