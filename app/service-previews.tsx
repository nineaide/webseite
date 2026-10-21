'use client';
/* oxlint-disable next/no-img-element */
import { useState } from 'react';
import { ArrowUpRight, Check, ArrowRight } from 'lucide-react';
import { projectImageProps } from './project-image-props';
import './service-previews.css';

type Kind = 'website' | 'booking' | 'crm' | 'automation' | 'ads';

function Website() {
  const [mobile, setMobile] = useState(false);
  return (
    <div className="service-product service-product-website">
      <header className="service-product-heading">
        <div>
          <span>Website</span>
          <h3>Meister Lorenz</h3>
        </div>
        <fieldset className="service-product-switch">
          <legend className="sr-only">Websiteansicht</legend>
          <button
            type="button"
            aria-pressed={!mobile}
            onClick={() => setMobile(false)}
          >
            Desktop
          </button>
          <button
            type="button"
            aria-pressed={mobile}
            onClick={() => setMobile(true)}
          >
            Mobil
          </button>
        </fieldset>
      </header>
      <div className={'service-product-site ' + (mobile ? 'is-mobile' : '')}>
        <img
          {...projectImageProps(
            '/project-images/meister-lorenz-' +
              (mobile ? 'mobile' : 'desktop') +
              '.webp',
            mobile ? '190px' : '(max-width: 900px) 90vw, 600px',
          )}
          width={mobile ? 390 : 1440}
          height={mobile ? 844 : 1000}
          alt={
            'Meister Lorenz: tatsächliche ' +
            (mobile ? 'Mobilansicht' : 'Desktopansicht') +
            ' der Website'
          }
          loading="lazy"
        />
      </div>
      <a className="service-product-site-link" href="/projekte/meister-lorenz">
        Ein klarer Auftritt für einen Meisterbetrieb <ArrowUpRight size={16} />
      </a>
    </div>
  );
}

function Booking() {
  const [day, setDay] = useState(0);
  const [time, setTime] = useState('10:30');
  const days = [
    'Mittwoch, 21. Oktober',
    'Donnerstag, 22. Oktober',
    'Freitag, 23. Oktober',
  ];
  return (
    <div className="service-product">
      <header className="service-product-heading">
        <div>
          <span>Terminplanung</span>
          <h3>Beratungstermin wählen.</h3>
        </div>
        <span className="service-product-duration">30 Minuten</span>
      </header>
      <p className="service-product-intro">
        Ein Ziel besprechen. Den nächsten Schritt klären.
      </p>
      <fieldset className="service-product-dates">
        <legend>Oktober 2026</legend>
        {['Mi', 'Do', 'Fr'].map((label, i) => (
          <button
            type="button"
            key={label}
            aria-pressed={day === i}
            onClick={() => setDay(i)}
          >
            <span>{label}</span>
            <strong>{21 + i}</strong>
          </button>
        ))}
      </fieldset>
      <fieldset className="service-product-times">
        <legend>Freie Uhrzeiten</legend>
        {['09:00', '10:30', '14:00'].map((value) => (
          <button
            type="button"
            key={value}
            aria-pressed={time === value}
            onClick={() => setTime(value)}
          >
            {value}
          </button>
        ))}
      </fieldset>
      <div className="service-product-booking-summary" aria-live="polite">
        <span>Deine Auswahl</span>
        <strong>{days[day]}</strong>
        <p>{time} Uhr · 30 Minuten · Videogespräch</p>
      </div>
    </div>
  );
}

const initialRequests = [
  {
    title: 'Neue Website',
    subject: 'Gebäudereinigung · Leistungen und Kontakt',
    status: 'Neu',
    note: 'Unternehmensauftritt mit sechs Seiten. Vorhandene Texte und Bilder übernehmen.',
  },
  {
    title: 'Kundenportal',
    subject: 'Handwerksbetrieb · Dokumente und Freigaben',
    status: 'In Bearbeitung',
    note: 'Kunden sollen Angebote ansehen und Dokumente an einem Ort freigeben können.',
  },
  {
    title: 'Onlinebuchung',
    subject: 'Beratung · Terminvergabe vereinfachen',
    status: 'Neu',
    note: 'Freie Termine anzeigen und Doppelbuchungen vermeiden. Bestehenden Kalender anbinden.',
  },
];
function CRM() {
  const [selected, setSelected] = useState(0);
  const [requests, setRequests] = useState(initialRequests);
  const request = requests[selected];
  return (
    <div className="service-product">
      <header className="service-product-heading">
        <div>
          <span>Vertrieb</span>
          <h3>Offene Anfragen.</h3>
        </div>
        <span className="service-product-duration">
          {requests.length} Vorgänge
        </span>
      </header>
      <div className="service-product-inbox" aria-label="Fiktive Anfragen">
        {requests.map((item, i) => (
          <button
            type="button"
            key={item.title}
            aria-pressed={selected === i}
            onClick={() => setSelected(i)}
          >
            <span>
              <strong>{item.title}</strong>
              <small>{item.subject}</small>
            </span>
            <span className="service-product-status">{item.status}</span>
          </button>
        ))}
      </div>
      <section className="service-product-request" aria-live="polite">
        <span>Notiz zum Vorhaben</span>
        <p>{request.note}</p>
        <button
          type="button"
          disabled={request.status === 'In Bearbeitung'}
          onClick={() =>
            setRequests((items) =>
              items.map((item, i) =>
                i === selected ? { ...item, status: 'In Bearbeitung' } : item,
              ),
            )
          }
        >
          {request.status === 'In Bearbeitung' ? (
            <>
              <Check size={15} /> In Bearbeitung
            </>
          ) : (
            <>
              Bearbeitung übernehmen <ArrowRight size={15} />
            </>
          )}
        </button>
      </section>
    </div>
  );
}

const answers = [
  {
    question: 'Was fehlt noch für den Start?',
    title: 'Zwei Inhalte sind noch offen.',
    lines: [
      'Die finalen Texte für die Leistungsseiten.',
      'Freigegebene Fotos für die Projektübersicht.',
    ],
    source: 'Projektbriefing · Inhalte und Zuständigkeiten',
  },
  {
    question: 'Wie läuft die Übergabe ab?',
    title: 'Die Übergabe in drei Schritten.',
    lines: [
      'Alle Seiten gemeinsam prüfen.',
      'Zugänge und Pflege der Inhalte erklären.',
      'Offene Punkte und nächste Termine festhalten.',
    ],
    source: 'Projektablauf · Übergabe',
  },
];
function Assistant() {
  const [selected, setSelected] = useState(0);
  const answer = answers[selected];
  return (
    <div className="service-product service-product-assistant">
      <header className="service-product-heading">
        <div>
          <span>Projektwissen</span>
          <h3>Antworten aus dem Briefing.</h3>
        </div>
      </header>
      <p className="service-product-intro">
        Informationen aus dem Briefing schnell wiederfinden.
      </p>
      <fieldset className="service-product-questions">
        <legend className="sr-only">Frage auswählen</legend>
        {answers.map((item, i) => (
          <button
            type="button"
            key={item.question}
            aria-pressed={selected === i}
            onClick={() => setSelected(i)}
          >
            {item.question} <ArrowUpRight size={14} />
          </button>
        ))}
      </fieldset>
      <div className="service-product-answer" aria-live="polite">
        <strong>{answer.title}</strong>
        <ul>
          {answer.lines.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <span>{answer.source}</span>
      </div>
      <p className="service-product-review">
        <Check size={15} /> Antwort prüfen und im Team weiterarbeiten.
      </p>
    </div>
  );
}

function Ads() {
  const [budget, setBudget] = useState(1500);
  const euro = (value: number) =>
    new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0,
    }).format(value);
  return (
    <div className="service-product">
      <header className="service-product-heading">
        <div>
          <span>Google Ads</span>
          <h3>Werbebudget verteilen.</h3>
        </div>
      </header>
      <p className="service-product-intro">
        Suchanzeigen für eine regionale Dienstleistung.
      </p>
      <label className="service-product-budget" htmlFor="service-ads-budget">
        <span>Monatliches Werbebudget</span>
        <strong>{euro(budget)}</strong>
        <input
          id="service-ads-budget"
          type="range"
          min="500"
          max="5000"
          step="100"
          value={budget}
          onChange={(event) => setBudget(Number(event.target.value))}
        />
        <span className="service-product-budget-range">
          <span>500 €</span>
          <span>5.000 €</span>
        </span>
      </label>
      <div className="service-product-campaigns" aria-live="polite">
        <div>
          <span>
            <strong>Neue Kunden erreichen</strong>
            <small>Suche nach Leistung und Standort</small>
          </span>
          <b>{euro(budget * 0.8)}</b>
        </div>
        <div>
          <span>
            <strong>Eigene Marke sichtbar halten</strong>
            <small>Suche nach dem Unternehmensnamen</small>
          </span>
          <b>{euro(budget * 0.2)}</b>
        </div>
      </div>
      <p className="service-product-plan">
        Budgetaufteilung zur Planung. Werbekosten und Betreuung werden getrennt
        vereinbart.
      </p>
    </div>
  );
}

export function ServicePreview({ kind }: { kind: Kind }) {
  return (
    <>
      <p className="sr-only">
        {kind === 'website'
          ? 'Echtes Kundenprojekt.'
          : 'Interaktives Anwendungsbeispiel mit fiktiven Daten. Es werden keine Anfragen oder Buchungen versendet.'}
      </p>
      {kind === 'website' ? (
        <Website />
      ) : kind === 'booking' ? (
        <Booking />
      ) : kind === 'crm' ? (
        <CRM />
      ) : kind === 'automation' ? (
        <Assistant />
      ) : (
        <Ads />
      )}
    </>
  );
}
