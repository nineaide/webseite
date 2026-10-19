'use client';
import { useState, type ReactNode } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  CircleHelp,
  Globe2,
  Layers3,
  Search,
  Sparkles,
  TrendingUp,
} from 'lucide-react';

type PreviewKind = 'website' | 'booking' | 'crm' | 'automation' | 'ads';

const services: {
  number: string;
  title: string;
  description: string;
  href: string;
  link: string;
  icon: typeof Globe2;
  preview: PreviewKind;
}[] = [
  {
    number: '01',
    title: 'Websites & SEO',
    description:
      'Unternehmenswebsites mit klarer Nutzerführung und technischer SEO-Grundlage. Besucher verstehen dein Angebot und finden den nächsten Schritt.',
    href: '/websites',
    link: 'Websites entdecken',
    icon: Globe2,
    preview: 'website',
  },
  {
    number: '02',
    title: 'Web-Apps & Buchungsplattformen',
    description:
      'Eigene Anwendungen für Buchungen, Kundenportale und Abläufe, die mit Standardsoftware nicht gut abgebildet werden.',
    href: '/plattformen-web-apps',
    link: 'Web-Apps ansehen',
    icon: Layers3,
    preview: 'booking',
  },
  {
    number: '03',
    title: 'CRM & Backoffice',
    description:
      'Kundenanfragen, Rollen und interne Aufgaben in passenden digitalen Systemen übersichtlich zusammenführen.',
    href: '/plattformen-web-apps/kundenportale',
    link: 'Kundenportale entdecken',
    icon: BriefcaseBusiness,
    preview: 'crm',
  },
  {
    number: '04',
    title: 'KI-Assistenten & Automatisierung',
    description:
      'Wiederkehrende Arbeit vereinfachen: mit nachvollziehbaren Assistenten, klaren Regeln und passenden Freigaben.',
    href: '/ki-automation',
    link: 'Automatisierung ansehen',
    icon: Sparkles,
    preview: 'automation',
  },
  {
    number: '05',
    title: 'Google Ads & monatliche Betreuung',
    description:
      'Google-Ads-Kampagnen monatlich betreuen, Anfragen auswerten und die passenden Zielseiten weiterentwickeln.',
    href: '/google-ads-growth',
    link: 'Google Ads entdecken',
    icon: TrendingUp,
    preview: 'ads',
  },
];

function Mockup({ kind }: { kind: PreviewKind }) {
  let preview: ReactNode;
  switch (kind) {
    case 'website':
      preview = (
        <div className="service-mockup-website">
          <div className="service-mockup-site-nav">
            <strong>Beispiel Studio</strong>
            <span>Leistungen · Über uns</span>
          </div>
          <div className="service-mockup-site-hero">
            <small>KLARER AUFTRITT</small>
            <strong>Ein Angebot, das ankommt.</strong>
            <span>Leistungen schnell finden und Kontakt aufnehmen.</span>
            <i>Mehr erfahren <ArrowUpRight size={12} /></i>
          </div>
          <div className="service-mockup-seo-note">
            <Search size={14} /> Technische SEO-Grundlage · Seitenstruktur
          </div>
        </div>
      );
      break;
    case 'booking':
      preview = (
        <div className="service-mockup-booking">
          <div className="service-mockup-heading">
            <CalendarDays size={16} /> <strong>Termin auswählen</strong>
            <span>Oktober 2026</span>
          </div>
          <div className="service-mockup-days" aria-hidden="true">
            {['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'].map((day) => (
              <span key={day}>{day}</span>
            ))}
            {['12', '13', '14', '15', '16', '17', '18'].map((date, index) => (
              <span className={index === 2 ? 'is-selected' : ''} key={date}>
                {date}
              </span>
            ))}
          </div>
          <div className="service-mockup-times">
            <span>10:30</span><span className="is-selected">12:00</span><span>14:30</span>
          </div>
        </div>
      );
      break;
    case 'crm':
      preview = (
        <div className="service-mockup-crm">
          <div className="service-mockup-heading">
            <BriefcaseBusiness size={15} /> <strong>Anfragen</strong>
            <span>Beispielansicht</span>
          </div>
          <div className="service-mockup-metrics">
            <span><small>Offen</small><strong>13</strong></span>
            <span><small>In Prüfung</small><strong>08</strong></span>
            <span><small>Erledigt</small><strong>24</strong></span>
          </div>
          <div className="service-mockup-list-row">
            <span><small>Fall #1048</small><strong>Website-Anfrage</strong></span>
            <i>Neu</i>
          </div>
          <div className="service-mockup-list-row">
            <span><small>Fall #1047</small><strong>Beratung</strong></span>
            <i className="is-progress">In Prüfung</i>
          </div>
        </div>
      );
      break;
    case 'automation':
      preview = (
        <div className="service-mockup-automation">
          <div className="service-mockup-heading">
            <Sparkles size={15} /> <strong>Aufgabenfluss</strong>
            <span>Beispiel</span>
          </div>
          <div className="service-mockup-flow">
            <span><i>01</i><b>Anfrage kommt an</b><Check size={13} /></span>
            <ArrowRight size={14} aria-hidden="true" />
            <span><i>02</i><b>Einordnen & zuweisen</b><Check size={13} /></span>
            <ArrowRight size={14} aria-hidden="true" />
            <span className="needs-review"><i>03</i><b>Antwort vorbereiten</b><CircleHelp size={13} /></span>
          </div>
          <small>Freigabe durch dein Team</small>
        </div>
      );
      break;
    case 'ads':
      preview = (
        <div className="service-mockup-ads">
          <div className="service-mockup-heading">
            <TrendingUp size={15} /> <strong>Kampagnenreport</strong>
            <span>Beispielmonat</span>
          </div>
          <div className="service-mockup-metrics">
            <span><small>Klicks</small><strong>1.248</strong></span>
            <span><small>Anfragen</small><strong>37</strong></span>
            <span><small>Rate</small><strong>2,9 %</strong></span>
          </div>
          <div className="service-mockup-chart" aria-hidden="true">
            {[36, 52, 43, 68, 57, 79, 63, 88, 71, 96, 77, 100].map((height, index) => (
              <i key={index} style={{ height: height + '%' }} />
            ))}
          </div>
        </div>
      );
      break;
  }

  return (
    <div className={'service-mockup service-mockup-' + kind}>
      {preview}
    </div>
  );
}

export function HomeServiceCards() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex] ?? services[0];

  function selectService(index: number) {
    setActiveIndex((index + services.length) % services.length);
  }

  return (
    <div className="home-services-showcase">
      <fieldset
        className="home-service-list"
        aria-labelledby="home-service-list-label"
      >
        <legend id="home-service-list-label" className="sr-only">
          Leistungsbereich auswählen
        </legend>
        {services.map(({ number, title, description, icon: Icon }, index) => (
          <button
            id={'home-service-option-' + index}
            className="home-service-option"
            data-active={index === activeIndex}
            type="button"
            aria-pressed={index === activeIndex}
            key={number}
            onPointerEnter={(event) => {
              if (event.pointerType === 'mouse') selectService(index);
            }}
            onFocus={() => selectService(index)}
            onClick={() => selectService(index)}
          >
            <span className="home-service-option-number">{number}</span>
            <span className="home-service-option-copy">
              <span className="home-service-option-title">
                <Icon size={20} aria-hidden="true" />
                <strong>{title}</strong>
              </span>
              <span className="home-service-option-description">
                {description}
              </span>
            </span>
            <span className="home-service-option-mark" aria-hidden="true">
              {index === activeIndex && <ArrowRight size={18} />}
            </span>
          </button>
        ))}
      </fieldset>
      <section
        className="home-service-preview"
        id="home-service-panel"
        aria-label={activeService.title + ' – Vorschau'}
      >
        <div className="home-service-preview-topline">
          <span>ABSTRAKTES UI-BEISPIEL</span>
          <span>{activeService.number} / 05</span>
        </div>
        <div className="home-service-preview-window">
          <div className="home-service-preview-window-bar" aria-hidden="true">
            <span><i /><i /><i /></span>
            <span>Vorschau · Generisches Interface</span>
          </div>
          <div
            className="home-service-preview-content"
            key={activeService.preview}
          >
            <Mockup kind={activeService.preview} />
          </div>
        </div>
        <div className="home-service-preview-footer">
          <p>Stilisierte Designstudie · keine Kundenansicht</p>
          <a href={activeService.href}>
            {activeService.link} <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </section>
    </div>
  );
}