'use client';
import { useState } from 'react';
import { ServicePreview } from './service-previews';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

type PreviewKind = 'website' | 'booking' | 'crm' | 'automation' | 'ads';

const services: {
  title: string;
  description: string;
  href: string;
  link: string;
  preview: PreviewKind;
}[] = [
  {
    title: 'Websites & SEO',
    description:
      'Leistungen zeigen, bei Google gefunden werden und Anfragen über die Website erhalten.',
    href: '/websites',
    link: 'Websites entdecken',
    preview: 'website',
  },
  {
    title: 'Web-Apps & Buchungsplattformen',
    description:
      'Parkplätze buchen, Tische reservieren oder Fahrzeuge auswählen. Wir entwickeln die Anwendung dazu.',
    href: '/plattformen-web-apps',
    link: 'Web-Apps ansehen',
    preview: 'booking',
  },
  {
    title: 'CRM & Backoffice',
    description:
      'Anfragen bearbeiten, Kunden wiederfinden und Aufgaben im Team verteilen.',
    href: '/plattformen-web-apps/kundenportale',
    link: 'Kundenportale entdecken',
    preview: 'crm',
  },
  {
    title: 'KI-Assistenten & Automatisierung',
    description:
      'Dokumente auslesen, Anfragen vorsortieren und Daten zwischen deinen Programmen übertragen.',
    href: '/ki-automation',
    link: 'Automatisierung ansehen',
    preview: 'automation',
  },
  {
    title: 'Google Ads & monatliche Betreuung',
    description:
      'Google Anzeigen betreuen und prüfen, welche Suchanfragen zu Kundenanfragen führen.',
    href: '/google-ads-growth',
    link: 'Google Ads entdecken',
    preview: 'ads',
  },
];

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
        {services.map(({ title, description }, index) => (
          <button
            id={'home-service-option-' + index}
            className="home-service-option"
            data-active={index === activeIndex}
            type="button"
            aria-pressed={index === activeIndex}
            key={title}
            onPointerEnter={(event) => {
              if (event.pointerType === 'mouse') selectService(index);
            }}
            onFocus={() => selectService(index)}
            onClick={() => selectService(index)}
          >
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
            <ServicePreview kind={activeService.preview} />
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
