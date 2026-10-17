/* oxlint-disable next/no-img-element */
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  Sparkles,
  PenTool,
  Code2,
  Target,
} from 'lucide-react';
import { FAQAnswers } from '../faq-answers';
import { Footer } from '../site-footer';
import { LeadForm, LeadMobileAction } from './website-lead';
import {
  HeroShowcase,
  GlassSurface,
  ProjectGallery,
} from '../project-showcase';
import { LiquidMark } from '../liquid-mark';
import { Locations } from '../locations';
import { GooglePartnerBadge } from '../google-partner-badge';
import { leadOffers } from './lead-offers';
import { leadReferenceIds } from '../reference-data';
import { money } from '../site-data';
import { PageStructuredData } from '../structured-data';
import { findSeoPage } from '../../lib/seo-pages';
import { pageMetadata } from '../../lib/seo-metadata';
import './lead.css';

export const metadata = pageMetadata(findSeoPage('/website-erstellen-lassen')!);

const faqs = [
  [
    'Was passiert nach meiner Anfrage?',
    'Wir schauen uns dein Vorhaben an und klären gemeinsam Ziel, Umfang und den passenden nächsten Schritt. Deine Anfrage ist unverbindlich. Ein Auftrag entsteht erst, wenn wir die Leistungen und Konditionen miteinander vereinbart haben.',
  ],
  [
    'Sind die Paketpreise wirklich fest?',
    'Ja. Nine Start kostet 1.990 €, Nine Launch 6.900 € und Nine Growth 12.900 €, jeweils netto für den beschriebenen Umfang. Hosting, Domain, Fremdlizenzen, neue Texte oder Fotografie und zusätzliche Leistungen kommen separat dazu. Bei Nine Growth sind das Werbebudget und eine laufende Anzeigenbetreuung nicht enthalten.',
  ],
  [
    'Was bedeutet „Seitenlayouts“?',
    'Ein Seitenlayout ist eine eigenständige Gestaltung, zum Beispiel für die Startseite, eine Leistungsseite oder eine Projektübersicht. Welche Layouts und Inhalte deine Website braucht, legen wir vor dem Start fest. Shop, Login oder besondere Schnittstellen sind eigene Leistungen.',
  ],
  [
    'Könnt ihr meine bestehende Website ablösen?',
    'Wir prüfen, welche Inhalte und Strukturen wir übernehmen können. Wenn sich Adressen ändern, gehört die Planung passender Weiterleitungen zur Abstimmung. Aufwendige Daten- oder Inhaltsübernahmen werden gesondert vereinbart.',
  ],
  [
    'Was muss ich selbst vorbereiten?',
    'Du bringst dein Angebot, vorhandenes Logo, Texte und Bilder ein. Wir helfen dabei, die Inhalte sinnvoll zu ordnen. Neue Texte, Fotografie und zusätzliche Inhaltserstellung stimmen wir separat ab. Du gibst Feedback und entscheidest bei den vereinbarten Freigaben.',
  ],
  [
    'Kann ich später selbst Texte und Bilder ändern?',
    'Bei Nine Launch und Nine Growth ist ein Bereich zur Inhaltspflege vorgesehen. Für Nine Start stimmen wir die spätere Pflege separat ab. Bei der Übergabe zeigen wir dir die Bearbeitung. Betrieb, Wartung und spätere Erweiterungen besprechen wir vor dem Start.',
  ],
  [
    'Wie schnell ist die Website fertig?',
    'Das hängt von Umfang, vorhandenen Inhalten und den Feedbackrunden ab. Nach der Abstimmung erhältst du einen passenden Zeitplan. Wir nennen dir keinen pauschalen Termin, bevor wir dein Vorhaben kennen.',
  ],
];

export default async function WebsiteLeadPage({
  searchParams,
}: {
  searchParams: Promise<{ paket?: string }>;
}) {
  const requestedPackage = (await searchParams).paket;
  const initialPackage =
    requestedPackage === 'unsicher' ||
    leadOffers.some((offer) => offer.slug === requestedPackage)
      ? requestedPackage
      : '';
  return (
    <div className="figma-site lead-page">
      <PageStructuredData path="/website-erstellen-lassen" />
      <a className="lead-skip" href="#main">
        Zum Inhalt
      </a>
      <header className="lead-header lead-wrap">
        <a href="/" aria-label="Nine.ai Startseite" className="lead-logo">
          <img
            src="/assets/brand/NineAI-dark.svg"
            alt="Nine.ai"
            width="150"
            height="51"
          />
        </a>
        <nav aria-label="Auf dieser Seite">
          <a href="#arbeiten">Arbeiten</a>
          <a href="#preise">Pakete</a>
          <a href="#website-check">Kontakt</a>
        </nav>
        <a href="#website-check" className="lead-header-contact">
          Unverbindlich anfragen <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </header>
      <main id="main">
        <section className="lead-hero lead-wrap" aria-labelledby="lead-title">
          <div className="lead-hero-copy">
            <span className="eyebrow">WEBDESIGN FÜR DEIN UNTERNEHMEN</span>
            <h1 id="lead-title">
              Deine neue Website.
              <br />
              <em>Alles außer gewöhnlich.</em>
            </h1>
            <p>
              Starkes Design. Klare Angebote. Ein einfacher Weg zum nächsten
              Kunden.
            </p>
            <div className="lead-hero-actions">
              <a href="#website-check" className="c-button c-button-light">
                Unverbindlich anfragen{' '}
                <ArrowUpRight size={20} aria-hidden="true" />
              </a>
              <a href="#preise" className="lead-price-link">
                Ab <strong>{money(leadOffers[0].price)}</strong> netto{' '}
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
            <div className="lead-hero-trust">
              <span>
                <Check size={16} aria-hidden="true" />
                Fester Preis
              </span>
              <span>
                <Check size={16} aria-hidden="true" />
                Dein Design
              </span>
              <span>
                <Check size={16} aria-hidden="true" />
                Persönlicher Kontakt
              </span>
            </div>
          </div>
          <HeroShowcase variant="lead" />
        </section>
        <section
          className="lead-contact-section lead-section"
          aria-labelledby="lead-contact-title"
        >
          <div className="lead-wrap lead-contact-layout">
            <div className="lead-contact-copy">
              <span className="eyebrow">LASS UNS LOSLEGEN</span>
              <h2 id="lead-contact-title">
                Deine Idee.
                <br />
                <em>Unser nächstes Projekt.</em>
              </h2>
              <p>
                Was hast du vor? Drei kurze Schritte bringen uns ins Gespräch.
              </p>
              <div
                className="lead-offer-summary"
                id="preise"
                aria-labelledby="lead-offers-title"
              >
                <h3 id="lead-offers-title">Dein Einstieg auf einen Blick.</h3>
                {leadOffers.map((offer) => (
                  <a
                    key={offer.slug}
                    href="#website-check"
                    data-lead-package={offer.slug}
                  >
                    <span>
                      <strong>{offer.name}</strong>
                      <small>
                        {offer.slug === 'nine-growth'
                          ? 'Website mit bis zu 12 Layouts + Werbestart'
                          : offer.includes[0]}
                      </small>
                    </span>
                    <b>
                      {money(offer.price)}
                      <small>einmalig · netto</small>
                    </b>
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </a>
                ))}
                <a
                  href="#website-check"
                  data-lead-package="unsicher"
                  className="lead-custom-entry"
                >
                  <span>
                    <strong>Nine X / Individuell</strong>
                    <small>Dein Vorhaben persönlich abstimmen</small>
                  </span>
                  <b>Auf Anfrage</b>
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
                <p>
                  Hosting, Domain, Fremdlizenzen, zusätzliche Inhalte und
                  Werbebudget separat.{' '}
                  <a href="/pakete">Leistungen im Detail ansehen</a>
                </p>
              </div>
            </div>
            <LeadForm initialPackage={initialPackage} />
          </div>
        </section>
        <GooglePartnerBadge />
        <section
          className="lead-work lead-section"
          id="arbeiten"
          aria-labelledby="lead-work-title"
        >
          <div className="lead-wrap">
            <div className="lead-section-heading">
              <div>
                <span className="eyebrow">AUSGEWÄHLTE KUNDENPROJEKTE</span>
                <h2 id="lead-work-title">
                  Drei Unternehmen.
                  <br />
                  <em>Drei eigene Auftritte.</em>
                </h2>
              </div>
              <a href="/projekte" className="lead-text-link">
                Alle Projektbeispiele{' '}
                <ArrowUpRight size={19} aria-hidden="true" />
              </a>
            </div>
            <ProjectGallery
              ids={leadReferenceIds}
              inquiryHref="#website-check"
            />
          </div>
          <Locations className="lead-wrap" />
        </section>

        <section
          className="lead-craft lead-section"
          aria-labelledby="lead-craft-title"
        >
          <div className="lead-wrap lead-craft-layout">
            <div className="lead-craft-copy">
              <span className="eyebrow">DESIGN, ENTWICKLUNG & GOOGLE ADS</span>
              <h2 id="lead-craft-title">
                Kleine Details.
                <br />
                <em>Großer Unterschied.</em>
              </h2>
              <p>
                Ein Auftritt, der sich gut anfühlt. Vom ersten Eindruck bis zum
                letzten Klick.
              </p>
              <div className="lead-craft-points">
                <div>
                  <PenTool size={23} aria-hidden="true" />
                  <span>
                    <strong>Dein eigener Look</strong>
                    <small>
                      Aus deinem Angebot wird ein individuelles Design.
                    </small>
                  </span>
                </div>
                <div>
                  <Code2 size={23} aria-hidden="true" />
                  <span>
                    <strong>
                      <a href="/plattformen-web-apps">
                        Individuelle Webentwicklung{' '}
                        <ArrowUpRight size={16} aria-hidden="true" />
                      </a>
                    </strong>
                    <small>
                      Web-Apps, Kundenportale und Schnittstellen – passend zu
                      deinen Abläufen, als eigenes Projekt geplant.
                    </small>
                  </span>
                </div>
                <div>
                  <Target size={23} aria-hidden="true" />
                  <span>
                    <strong>
                      <a href="/google-ads-growth">
                        Google Ads <ArrowUpRight size={16} aria-hidden="true" />
                      </a>
                    </strong>
                    <small>
                      Kampagnen starten und optimieren. Laufende
                      Anzeigenbetreuung und Werbebudget vereinbaren wir separat.
                    </small>
                  </span>
                </div>
              </div>
            </div>
            <div className="lead-liquid-exhibit">
              <LiquidMark />
              <GlassSurface className="lead-liquid-caption">
                <Sparkles size={18} aria-hidden="true" />
                <span>Unsere Handschrift. Bis ins Detail.</span>
              </GlassSurface>
            </div>
          </div>
        </section>
        <section
          className="lead-faq lead-section"
          aria-labelledby="lead-faq-title"
        >
          <div className="lead-wrap n-faq">
            <div>
              <span className="eyebrow">GUT ZU WISSEN</span>
              <h2 id="lead-faq-title">
                Noch Fragen?
                <br />
                <em>Gern.</em>
              </h2>
            </div>
            <FAQAnswers items={faqs} />
          </div>
        </section>
      </main>
      <Footer />
      <LeadMobileAction />
    </div>
  );
}
