/* oxlint-disable next/no-img-element */
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  PenTool,
  Code2,
  Target,
} from 'lucide-react';
import { FAQAnswers } from '../faq-answers';
import { Footer } from '../site-footer';
import { Header } from '../site-chrome';
import { LeadForm, LeadMobileAction } from './website-lead';
import { HeroShowcase, ProjectGallery } from '../project-showcase';
import { projectImageProps } from '../project-image-props';
import { Locations } from '../locations';
import { GooglePartnerBadge } from '../google-partner-badge';
import { leadOffers } from './lead-offers';
import { leadReferenceIds } from '../reference-data';
import { money } from '../site-data';
import { inquiryOptions } from '../../lib/inquiry-options';
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
    'Wie sind die Paketpreise zu verstehen?',
    'Nine Start beginnt bei 1.990 €, Nine Launch bei 6.900 € und Nine Growth bei 12.900 €, jeweils als Basispreis für den beschriebenen Umfang. Die Preise dienen als Orientierung; das persönliche Angebot richtet sich nach deinen Anforderungen. Hosting, Domain, zusätzliche Inhalte und laufende Betreuung kommen separat hinzu.',
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
  searchParams: Promise<{ paket?: string; service?: string }>;
}) {
  const query = await searchParams;
  const requestedPackage = query.paket;
  const initialPackage =
    requestedPackage === 'nine-x' ||
    inquiryOptions.some((offer) => offer.value === requestedPackage)
      ? requestedPackage
      : '';
  return (
    <div className="figma-site lead-page">
      <PageStructuredData path="/website-erstellen-lassen" />
      <div className="lead-navigation">
        <Header />
      </div>
      <main id="main">
        <section className="lead-hero lead-wrap" aria-labelledby="lead-title">
          <div className="lead-hero-copy">
            <span className="eyebrow">Webdesign für dein Unternehmen</span>
            <h1 id="lead-title">Eine Website für dein Unternehmen.</h1>
            <p>
              Wir gestalten und entwickeln deinen Auftritt. Gemeinsam klären
              wir, welche Inhalte und Funktionen du brauchst.
            </p>
            <div className="lead-hero-actions">
              <a href="#website-check" className="c-button c-button-light">
                Unverbindlich anfragen{' '}
                <ArrowUpRight size={20} aria-hidden="true" />
              </a>
              <a href="#preise" className="lead-price-link">
                Ab <strong>{money(leadOffers[0].price)}</strong>{' '}
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
            <div className="lead-hero-trust">
              <span>
                <Check size={16} aria-hidden="true" />
                Basispreis
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
              <span className="eyebrow">Deine Anfrage</span>
              <h2 id="lead-contact-title">Erzähl uns von deinem Vorhaben.</h2>
              <p>
                Beschreibe kurz dein Vorhaben. Die Details klären wir im
                Gespräch.
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
                      <small>einmalig · Basispreis</small>
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
            <LeadForm
              initialPackage={initialPackage}
              initialService={query.service}
            />
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
                <h2 id="lead-work-title">
                  Websites und Anwendungen im Einsatz
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
              <h2 id="lead-craft-title">
                Design und Funktionen gehören zusammen.
              </h2>
              <p>
                Wir gestalten deine Website und prüfen, ob Besucher ihre
                Informationen und den Kontakt finden.
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
                      Web-Apps, Kundenportale und Schnittstellen passend zu
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
            <figure className="lead-craft-project">
              <img
                {...projectImageProps(
                  '/project-images/gardentime-desktop.webp',
                  '(max-width: 700px) calc(100vw - 48px), 600px',
                )}
                alt="Garden Time Frankfurt: Gartenpflege und Facility Management mit direkter Projektanfrage"
                width={1440}
                height={1000}
                loading="lazy"
                decoding="async"
              />
              <figcaption>
                <span>Garden Time Frankfurt</span>
                <a href="/projekte/gardentime">
                  Projekt ansehen <ArrowUpRight size={18} aria-hidden="true" />
                </a>
              </figcaption>
            </figure>
          </div>
        </section>
        <section
          className="lead-faq lead-section"
          aria-labelledby="lead-faq-title"
        >
          <div className="lead-wrap n-faq">
            <div>
              <h2 id="lead-faq-title">Fragen zur Zusammenarbeit</h2>
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
