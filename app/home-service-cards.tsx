'use client';
import { useState, type ReactNode } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  CircleHelp,
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
  preview: PreviewKind;
}[] = [
  {
    number: '01',
    title: 'Websites & SEO',
    description:
      'Dein Angebot klar erklären, bei Google gefunden werden und den Weg zur Anfrage einfach machen.',
    href: '/websites',
    link: 'Websites entdecken',
    preview: 'website',
  },
  {
    number: '02',
    title: 'Web-Apps & Buchungsplattformen',
    description:
      'Termine buchen, Angebote vergleichen, Kunden betreuen – in einer Anwendung für deine Abläufe.',
    href: '/plattformen-web-apps',
    link: 'Web-Apps ansehen',
    preview: 'booking',
  },
  {
    number: '03',
    title: 'CRM & Backoffice',
    description:
      'Anfragen, Kundendaten und Aufgaben an einem Ort. Mit klaren Zuständigkeiten für dein Team.',
    href: '/plattformen-web-apps/kundenportale',
    link: 'Kundenportale entdecken',
    preview: 'crm',
  },
  {
    number: '04',
    title: 'KI-Assistenten & Automatisierung',
    description:
      'Dokumente auslesen, Anfragen sortieren und Daten übertragen. Dein Team behält die Kontrolle.',
    href: '/ki-automation',
    link: 'Automatisierung ansehen',
    preview: 'automation',
  },
  {
    number: '05',
    title: 'Google Ads & monatliche Betreuung',
    description:
      'Kampagnen betreuen, Anfragen auswerten und Zielseiten verbessern. Monat für Monat.',
    href: '/google-ads-growth',
    link: 'Google Ads entdecken',
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
            <span>Übersicht · Heute</span>
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
            <span>Vorgang #1048</span>
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
            <span>01.–30. September</span>
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
        {services.map(({ number, title, description }, index) => (
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
        <div className="home-service-preview-window">
          <div
            className="home-service-preview-content"
            key={activeService.preview}
          >
            <Mockup kind={activeService.preview} />
          </div>
        </div>
        <div className="home-service-preview-footer">
          <a href={activeService.href}>
            {activeService.link} <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </section>
    </div>
  );
}
