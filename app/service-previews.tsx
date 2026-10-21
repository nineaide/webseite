'use client';
/* oxlint-disable next/no-img-element */
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projectImageProps } from './project-image-props';
import { referenceProjects, referenceImage } from './reference-data';
import './service-previews.css';

type Kind = 'website' | 'booking' | 'crm' | 'automation' | 'ads';
type View = {
  label: string;
  src: string;
  width: number;
  height: number;
  layout: 'desktop' | 'mobile' | 'system';
};
type Proof = {
  project: string;
  area: string;
  description: string;
  note?: string;
  views: View[];
};
const websiteViews = (id: string): View[] => [
  {
    label: 'Desktop',
    src: referenceImage(id),
    width: 1440,
    height: 1000,
    layout: 'desktop',
  },
  {
    label: 'Mobil',
    src: referenceImage(id, true),
    width: 390,
    height: 844,
    layout: 'mobile',
  },
];
const proofs: Record<Kind, Proof> = {
  website: {
    project: 'meister-lorenz',
    area: 'Website für einen Meisterbetrieb',
    description:
      'Ersatzschlüssel, Reparatur oder Programmierung: Besucher wählen ihr Anliegen und fragen mit ihren Fahrzeugdaten einen Termin an.',
    views: websiteViews('meister-lorenz'),
  },
  booking: {
    project: 'parkesicher',
    area: 'Buchungsplattform und Anbieterbereich',
    description:
      'Reisende suchen einen Flughafenparkplatz. Anbieter sehen Buchungen, Ankünfte und Abfahrten in ihrem eigenen Bereich.',
    views: [
      { ...websiteViews('parkesicher')[0], label: 'Buchungsseite' },
      {
        label: 'Tagesübersicht',
        src: '/project-images/parkesicher-today.webp',
        width: 875,
        height: 1797,
        layout: 'system',
      },
      {
        label: 'Buchungen',
        src: '/project-images/parkesicher-bookings.webp',
        width: 879,
        height: 1789,
        layout: 'system',
      },
    ],
    note: 'Anbieteransichten mit anonymisierten Angaben.',
  },
  crm: {
    project: 'entwurf-energie',
    area: 'CRM und Anfragebearbeitung',
    description:
      'Strom- und Gasanfragen suchen, nach Bearbeitungsstand filtern und einem Berater zuordnen.',
    views: [
      {
        label: 'Anfragen',
        src: '/project-images/entwurf-energie-leads.webp',
        width: 1440,
        height: 1000,
        layout: 'desktop',
      },
      {
        label: 'Mobil',
        src: '/project-images/entwurf-energie-crm-mobile.webp',
        width: 390,
        height: 844,
        layout: 'mobile',
      },
    ],
    note: 'Aufnahme der CRM-Demo. Namen und Kontakte sind fiktiv.',
  },
  automation: {
    project: 'un-petit-cafe',
    area: 'Bestellungen vom Tisch zur Küche',
    description:
      'Der Service erfasst Speisen, Extras und Küchenhinweise direkt am Tisch. Bestellung und Bearbeitungsstand bleiben im selben System.',
    views: [
      {
        label: 'Bestellung',
        src: '/project-images/cafe-order.webp',
        width: 867,
        height: 1600,
        layout: 'system',
      },
      {
        label: 'Service',
        src: '/project-images/cafe-status.webp',
        width: 862,
        height: 1600,
        layout: 'system',
      },
    ],
    note: 'Beispiel für digitale Arbeitsabläufe im Service. Angaben sind anonymisiert.',
  },
  ads: {
    project: 'entwurf-energie',
    area: 'Zielseite für eine Tarifanfrage',
    description:
      'Energieart wählen, Verbrauch und Postleitzahl angeben, Tarifprüfung anfragen. Jeder Schritt gehört zum selben Anliegen.',
    views: websiteViews('entwurf-energie'),
    note: 'Die Website zeigt den Anfrageweg. Werbeergebnisse sind für dieses Projekt nicht dokumentiert.',
  },
};

export function ServicePreview({ kind }: { kind: Kind }) {
  const [selected, setSelected] = useState(0);
  const proof = proofs[kind];
  const project = referenceProjects.find((item) => item.id === proof.project)!;
  const view = proof.views[selected] ?? proof.views[0];
  return (
    <div className="service-proof" data-project={project.id}>
      <header className="service-proof-heading">
        <div>
          <span>{proof.area}</span>
          <h3>{project.name}</h3>
        </div>
        <a
          href={'/projekte/' + project.id}
          aria-label={project.name + ': Projekt ansehen'}
        >
          <ArrowUpRight size={23} aria-hidden="true" />
        </a>
      </header>
      <p className="service-proof-description">{proof.description}</p>
      <fieldset className="service-proof-views">
        <legend className="sr-only">Projektansicht auswählen</legend>
        {proof.views.map((item, index) => (
          <button
            key={item.src}
            type="button"
            aria-pressed={selected === index}
            onClick={() => setSelected(index)}
          >
            {item.label}
          </button>
        ))}
      </fieldset>
      <figure className="service-proof-figure">
        <div
          key={view.src}
          className={'service-proof-image service-proof-image-' + view.layout}
          style={{ backgroundColor: project.tone }}
          tabIndex={view.layout !== 'desktop' ? 0 : undefined}
          role={view.layout !== 'desktop' ? 'region' : undefined}
          aria-label={
            view.layout !== 'desktop'
              ? project.name + ': ' + view.label + ', Aufnahme zum Scrollen'
              : undefined
          }
        >
          <img
            key={view.src}
            {...projectImageProps(
              view.src,
              view.layout === 'mobile'
                ? '200px'
                : '(max-width: 900px) calc(100vw - 64px), 640px',
            )}
            alt={
              project.name +
              ': ' +
              view.label +
              ' – tatsächliche Projektaufnahme'
            }
            width={view.width}
            height={view.height}
            loading="lazy"
          />
        </div>
        <figcaption>
          {proof.note ?? 'Aufnahme der Kundenwebsite.'}{' '}
          <a href={'/projekte/' + project.id}>
            Zum Projekt <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </figcaption>
      </figure>
    </div>
  );
}
