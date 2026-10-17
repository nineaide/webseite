'use client';
import { useEffect, useRef, useState, type SubmitEvent } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  LoaderCircle,
  Monitor,
  RefreshCw,
  TrendingUp,
  Mail,
} from 'lucide-react';
import { WebsitePreview, GlassSurface } from '../project-showcase';
import { conceptProjects } from '../project-data';
import { leadOffers } from './lead-offers';
import { money } from '../site-data';
import { markInquiryReceived } from '../../lib/inquiry-status';
import { useInquiryStatus } from '../use-inquiry-status';

const goals = [
  {
    value: 'neu',
    title: 'Eine neue Website',
    text: 'Mein Unternehmen online klar präsentieren.',
    icon: Monitor,
  },
  {
    value: 'relaunch',
    title: 'Meine Website modernisieren',
    text: 'Mein Auftritt passt nicht mehr zu meinem Unternehmen.',
    icon: RefreshCw,
  },
  {
    value: 'anfragen',
    title: 'Mehr passende Anfragen',
    text: 'Website und Kundengewinnung zusammen denken.',
    icon: TrendingUp,
  },
];
const offers = [
  ...leadOffers.map((offer) => ({
    value: offer.slug,
    title: offer.name,
    text: offer.goal,
    price: money(offer.price) + ' netto',
  })),
  {
    value: 'unsicher',
    title: 'Nine X / Individuell',
    text: 'Individueller Umfang oder noch unsicher? Lass uns sprechen.',
    price: 'Preis auf Anfrage',
  },
];
type FormDataState = {
  goal: string;
  package: string;
  name: string;
  email: string;
  website: string;
  phone: string;
  message: string;
  fax: string;
};

// Integration hook only: this sends no network requests and contains no PII.
function event(name: string, detail: Record<string, string | number> = {}) {
  window.dispatchEvent(
    new CustomEvent('nine:lead-event', { detail: { event: name, ...detail } }),
  );
}

export function LeadForm({ initialPackage = '' }: { initialPackage?: string }) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormDataState>({
    goal: '',
    package: initialPackage,
    name: '',
    email: '',
    website: '',
    phone: '',
    message: '',
    fax: '',
  });
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const [receipt, setReceipt] = useState('');
  const panel = useRef<HTMLElement>(null);
  const heading = useRef<HTMLHeadingElement>(null);
  const moved = useRef(false);
  const requestId = useRef('');
  const submitting = useRef(false);
  const started = useRef(false);

  useEffect(() => {
    function selectPackage(e: MouseEvent) {
      if (submitting.current) return;
      const link = (e.target as Element).closest<HTMLAnchorElement>(
        'a[data-lead-package]',
      );
      if (
        !link ||
        !offers.some((offer) => offer.value === link.dataset.leadPackage)
      )
        return;
      setData((d) => ({ ...d, package: link.dataset.leadPackage! }));
      setReceipt('');
      requestId.current = '';
      setError('');
      event('package_select', { package: link.dataset.leadPackage! });
    }
    document.addEventListener('click', selectPackage);
    return () => document.removeEventListener('click', selectPackage);
  }, []);

  useEffect(() => {
    if (moved.current) heading.current?.focus();
    else moved.current = true;
  }, [step, receipt]);

  function update(key: keyof FormDataState, value: string) {
    setData((d) => ({ ...d, [key]: value }));
    setError('');
    requestId.current = '';
    if (!started.current) {
      started.current = true;
      event('form_start');
    }
  }
  function advance(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    if (step < 2) {
      setStep((s) => s + 1);
      event('form_step', { step: step + 2 });
      return;
    }
    void submit();
  }
  async function submit() {
    if (submitting.current) return;
    submitting.current = true;
    setBusy(true);
    setError('');
    requestId.current ||= crypto.randomUUID();
    const query = new URLSearchParams(window.location.search);
    const campaign = Object.fromEntries(
      [
        'utm_source',
        'utm_medium',
        'utm_campaign',
        'utm_content',
        'utm_term',
      ].map((key) => [key, (query.get(key) || '').slice(0, 160)]),
    );
    try {
      const response = await fetch('/api/website-anfrage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          requestId: requestId.current,
          campaign,
        }),
        signal: AbortSignal.timeout(20000),
      });
      const result = (await response.json()) as {
        accepted?: boolean;
        id?: string;
        error?: string;
      };
      if (!response.ok || !result.accepted || !result.id)
        throw new Error(
          result.error ||
            'Deine Anfrage konnte noch nicht gespeichert werden. Bitte versuche es erneut oder schreibe uns direkt.',
        );
      setReceipt(result.id);
      markInquiryReceived();
      event('lead_received', {
        event_id: result.id,
        package: data.package,
        goal: data.goal,
      });
    } catch (failure) {
      setError(
        failure instanceof Error && failure.name !== 'TimeoutError'
          ? failure.message
          : 'Die Verbindung hat zu lange gebraucht. Deine Eingaben bleiben erhalten. Bitte versuche es erneut.',
      );
      event('form_error');
    } finally {
      submitting.current = false;
      setBusy(false);
    }
  }

  const selectedOffer = offers.find((offer) => offer.value === data.package);
  return (
    <section
      id="website-check"
      className="lead-check"
      ref={panel}
      aria-labelledby="lead-check-title"
    >
      {receipt ? (
        <div className="lead-receipt" aria-live="polite">
          <span className="lead-receipt-icon">
            <CheckCircle2 size={35} aria-hidden="true" />
          </span>
          <span className="eyebrow">DER ERSTE SCHRITT IST GEMACHT</span>
          <h2 id="lead-check-title" ref={heading} tabIndex={-1}>
            Danke, {data.name.split(' ')[0]}.<br />
            Deine Anfrage ist eingegangen.
          </h2>
          <p>
            Wir schauen uns dein Vorhaben an. Deine Rückmeldung geht an{' '}
            <strong>{data.email}</strong>.
          </p>
          <div className="lead-receipt-summary">
            <span>{goals.find((goal) => goal.value === data.goal)?.title}</span>
            <strong>
              {selectedOffer?.title} · {selectedOffer?.price}
            </strong>
          </div>
          <p className="lead-helper">
            Das ist eine unverbindliche Anfrage. Es wurde nichts bestellt und
            keine Zahlung ausgelöst.
          </p>
          <a href="mailto:anfrage@nineai.de" className="lead-direct">
            <Mail size={17} aria-hidden="true" /> Noch etwas ergänzen
          </a>
        </div>
      ) : (
        <>
          <div className="lead-check-top">
            <span className="eyebrow">DEIN WEBSITE-CHECK</span>
            <span>Schritt {step + 1} von 3</span>
          </div>
          <div className="lead-progress" aria-hidden="true">
            {[0, 1, 2].map((i) => (
              <span key={i} data-complete={i <= step} />
            ))}
          </div>
          <h2 id="lead-check-title" ref={heading} tabIndex={-1}>
            {
              [
                'Was brauchst du gerade?',
                'Welcher Einstieg passt?',
                'Lass uns darüber sprechen.',
              ][step]
            }
          </h2>
          <p className="lead-check-intro">
            {
              [
                'Wähle aus, was am besten passt.',
                'Du fragst unverbindlich an.',
                'Name und E-Mail reichen für den ersten Kontakt.',
              ][step]
            }
          </p>
          <form onSubmit={advance} aria-busy={busy}>
            <fieldset
              className="lead-choices"
              hidden={step !== 0}
              disabled={step !== 0 || busy}
            >
              <legend className="sr-only">Was brauchst du gerade?</legend>
              {goals.map(({ value, title, text, icon: Icon }) => (
                <label key={value} data-selected={data.goal === value}>
                  <input
                    type="radio"
                    name="goal"
                    value={value}
                    required
                    checked={data.goal === value}
                    onChange={() => update('goal', value)}
                  />
                  <span className="lead-choice-icon">
                    <Icon size={21} aria-hidden="true" />
                  </span>
                  <span>
                    <strong>{title}</strong>
                    <small>{text}</small>
                  </span>
                  <span className="lead-choice-check" aria-hidden="true">
                    {data.goal === value && <Check size={14} />}
                  </span>
                </label>
              ))}
            </fieldset>
            <fieldset
              className="lead-choices lead-offer-choices"
              hidden={step !== 1}
              disabled={step !== 1 || busy}
            >
              <legend className="sr-only">Welcher Einstieg passt?</legend>
              {offers.map(({ value, title, text, price }) => (
                <label key={value} data-selected={data.package === value}>
                  <input
                    type="radio"
                    name="package"
                    value={value}
                    required
                    checked={data.package === value}
                    onChange={() => update('package', value)}
                  />
                  <span>
                    <strong>
                      {title}
                      <b>{price}</b>
                    </strong>
                    <small>{text}</small>
                  </span>
                  <span className="lead-choice-check" aria-hidden="true">
                    {data.package === value && <Check size={14} />}
                  </span>
                </label>
              ))}
              <p className="lead-helper">
                Die Preise gelten für den beschriebenen Umfang. Laufende Kosten
                und Zusatzleistungen kommen separat dazu.
              </p>
            </fieldset>
            <fieldset
              className="lead-contact-fields"
              hidden={step !== 2}
              disabled={step !== 2 || busy}
            >
              <legend className="sr-only">Deine Kontaktdaten</legend>
              <div className="lead-selection-summary">
                <span>
                  {selectedOffer?.title} · {selectedOffer?.price}
                </span>
                <button type="button" onClick={() => setStep(1)}>
                  Ändern
                </button>
              </div>
              <label>
                Dein Name <span>(erforderlich)</span>
                <input
                  name="name"
                  autoComplete="name"
                  value={data.name}
                  onChange={(e) => update('name', e.target.value)}
                  required
                  minLength={2}
                  maxLength={100}
                />
              </label>
              <label>
                E-Mail-Adresse <span>(erforderlich)</span>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={data.email}
                  onChange={(e) => update('email', e.target.value)}
                  required
                  maxLength={200}
                />
              </label>
              <label>
                Deine Website <span>(optional)</span>
                <input
                  name="website"
                  type="text"
                  inputMode="url"
                  autoComplete="url"
                  placeholder="dein-unternehmen.de"
                  value={data.website}
                  onChange={(e) => update('website', e.target.value)}
                  maxLength={300}
                />
              </label>
              <details className="lead-more-fields">
                <summary>
                  Telefon oder eine Nachricht ergänzen <span>(optional)</span>
                </summary>
                <label>
                  Telefon <span>(für eine gewünschte Rückmeldung)</span>
                  <input
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={data.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    maxLength={40}
                  />
                </label>
                <label>
                  Was möchtest du uns mitgeben?
                  <textarea
                    name="message"
                    rows={3}
                    maxLength={2000}
                    value={data.message}
                    onChange={(e) => update('message', e.target.value)}
                  />
                </label>
              </details>
              <div className="lead-honeypot" aria-hidden="true">
                <label>
                  Fax
                  <input
                    name="fax"
                    autoComplete="off"
                    tabIndex={-1}
                    value={data.fax}
                    onChange={(e) =>
                      setData((d) => ({ ...d, fax: e.target.value }))
                    }
                  />
                </label>
              </div>
              <p className="lead-privacy-note">
                Wir verwenden deine Angaben zur Bearbeitung deiner Anfrage.
                Keine Newsletter-Anmeldung.{' '}
                <a href="/datenschutz" target="_blank" rel="noreferrer">
                  Datenschutzhinweise
                </a>
              </p>
            </fieldset>
            {error && (
              <p className="lead-error" role="alert">
                {error} <a href="mailto:anfrage@nineai.de">anfrage@nineai.de</a>
              </p>
            )}
            <div className="lead-form-actions">
              {step > 0 && (
                <button
                  className="lead-back"
                  type="button"
                  disabled={busy}
                  onClick={() => {
                    setStep((s) => s - 1);
                    setError('');
                  }}
                  aria-label="Zurück zum vorherigen Schritt"
                >
                  <ArrowLeft size={20} />
                </button>
              )}
              <button
                type="submit"
                className="c-button c-button-blue"
                disabled={busy}
              >
                {busy ? (
                  <>
                    <LoaderCircle
                      className="lead-loading"
                      size={19}
                      aria-hidden="true"
                    />{' '}
                    Wird übermittelt …
                  </>
                ) : (
                  <>
                    {step === 0
                      ? 'Passendes Paket finden'
                      : step === 1
                        ? 'Weiter zum Kontakt'
                        : 'Unverbindlich anfragen'}
                    <ArrowRight size={19} aria-hidden="true" />
                  </>
                )}
              </button>
            </div>
            <p className="lead-form-reassurance">
              Unverbindlich. Keine Bestellung. Keine Zahlung.
            </p>
          </form>
          <a className="lead-direct" href="mailto:anfrage@nineai.de">
            <Mail size={16} aria-hidden="true" /> Lieber direkt schreiben
          </a>
          <noscript>
            <p>
              Für den schrittweisen Check wird JavaScript benötigt. Du erreichst
              uns direkt unter{' '}
              <a href="mailto:anfrage@nineai.de">anfrage@nineai.de</a>.
            </p>
          </noscript>
        </>
      )}
    </section>
  );
}

export function LeadExamples() {
  const [active, setActive] = useState('werkraum');
  const project = conceptProjects.find((item) => item.id === active)!;
  return (
    <div className="lead-example-layout">
      <div className="lead-example-main">
        <div className="lead-example-browser">
          <span aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span>DESIGNSTUDIE · {project.name}</span>
          <span>nine.ai</span>
        </div>
        <WebsitePreview project={project} />
        <GlassSurface className="lead-example-caption">
          <span>Das Ziel dieses Entwurfs</span>
          <strong>{project.detail}</strong>
        </GlassSurface>
      </div>
      <div className="lead-example-selector">
        <fieldset>
          <legend>Wähle eine Branche</legend>
          {conceptProjects.map((item) => (
            <button
              type="button"
              key={item.id}
              aria-pressed={active === item.id}
              aria-controls="lead-example-description"
              onClick={() => setActive(item.id)}
            >
              <span>
                <small>{item.industry}</small>
                <strong>{item.name}</strong>
              </span>
              <ArrowUpRight size={20} aria-hidden="true" />
            </button>
          ))}
        </fieldset>
        <p id="lead-example-description" aria-live="polite">
          {project.description}
        </p>
        <span className="lead-example-disclosure">
          Eigene Konzeptentwürfe für fiktive Unternehmen. Keine Kundenaufträge
          oder nachgewiesenen Ergebnisse.
        </span>
        <a
          href="#website-check"
          data-lead-package={project.package}
          className="lead-text-link"
        >
          Über meinen Auftritt sprechen{' '}
          <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}

export function LeadMobileAction() {
  const received = useInquiryStatus();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const form = document.getElementById('website-check');
    if (!form || !('IntersectionObserver' in window)) return;
    const footer = document.querySelector('.site-footer');
    let formVisible = true;
    let footerVisible = false;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.target === form) formVisible = entry.isIntersecting;
          if (entry.target === footer) footerVisible = entry.isIntersecting;
        }
        setVisible(!formVisible && !footerVisible);
      },
      { threshold: 0 },
    );
    observer.observe(form);
    if (footer) observer.observe(footer);
    return () => observer.disconnect();
  }, []);
  return (
    <aside
      className="lead-mobile-action"
      hidden={!visible || received}
      aria-label="Website anfragen"
    >
      <span>
        Deine neue Website<strong>ab {money(leadOffers[0].price)} netto</strong>
      </span>
      <a href="#website-check" className="c-button c-button-blue">
        Unverbindlich anfragen <ArrowUpRight size={18} aria-hidden="true" />
      </a>
    </aside>
  );
}
