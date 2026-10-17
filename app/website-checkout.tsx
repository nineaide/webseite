'use client';
import { useEffect, useRef, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Download,
  Pencil,
  LockKeyhole,
} from 'lucide-react';
import { packages, money } from './site-data';
import { ReferencePreview } from './project-showcase';
import { referenceProjects } from './reference-data';
import { paymentLinkFor } from '../lib/website-order';

export default function WebsiteCheckout({
  slug: initialSlug,
}: {
  slug: string;
}) {
  const [slug, setSlug] = useState(initialSlug);
  const [choosing, setChoosing] = useState(false);
  const p = packages.find((p) => p.slug === slug)!;
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    idea: '',
    timing: 'Noch offen',
  });
  const [downloaded, setDownloaded] = useState(false);
  const heading = useRef<HTMLHeadingElement>(null);
  const previousStep = useRef(step);
  useEffect(() => {
    if (previousStep.current !== step) heading.current?.focus();
    previousStep.current = step;
  }, [step]);
  const update = (key: keyof typeof data, value: string) => {
    setData((d) => ({ ...d, [key]: value }));
    setDownloaded(false);
  };
  const paymentUrl = paymentLinkFor(slug);
  function download() {
    const text = [
      'NINE.AI — BESTELLENTWURF',
      'Paket: ' + p.name,
      'Festpreis: ' + money(p.price) + ' netto, zzgl. Umsatzsteuer.',
      'Zahlungsplan: ' + p.payment,
      '',
      'Name: ' + data.name,
      'E-Mail: ' + data.email,
      'Unternehmen: ' + (data.company || 'Nicht angegeben'),
      'Bestehende Website: ' + (data.website || 'Nicht angegeben'),
      'Gewünschter Start: ' + data.timing,
      'Vorhaben: ' + (data.idea || 'Wird im Startgespräch besprochen'),
      '',
      'Enthalten:',
      ...p.includes,
      '',
      'Nicht enthalten: ' + p.excludes,
      'Zusätzliche Texterstellung, Fotografie und aufwendige Inhaltsübernahme werden separat vereinbart.',
      '',
      'Private Vorschau: keine Bestellung, kein Versand und keine Zahlung. Steuerbetrag, verbindliche Fälligkeit, Vertragspartner und Zahlungsanbindung sind vor Freischaltung zu finalisieren.',
    ].join('\n');
    const url = URL.createObjectURL(
      new Blob([text], { type: 'text/plain;charset=utf-8' }),
    );
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'Nine-ai-' + slug + '-Bestellentwurf.txt';
    anchor.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setDownloaded(true);
  }
  return (
    <div className="order-page">
      <a className="c-request-back" href="/pakete">
        <ArrowLeft size={16} /> Pakete vergleichen
      </a>
      <div className="order-title">
        <span className="eyebrow">DEINE NEUE WEBSITE</span>
        <h1>
          Gute Entscheidung.
          <br />
          Jetzt wird es konkret.
        </h1>
        <p>
          Dein Paket ist ausgewählt. Prüfe den Umfang und bereite den nächsten
          Schritt vor.
        </p>
      </div>
      <div className="order-layout">
        <aside className="order-summary">
          <div className="order-summary-title">
            <span>{p.name}</span>
            <button
              type="button"
              onClick={() => setChoosing(!choosing)}
              aria-expanded={choosing}
            >
              Ändern
            </button>
          </div>
          {choosing && (
            <fieldset
              className="order-package-switch"
              aria-label="Website-Paket ändern"
            >
              {packages.slice(0, 2).map((option) => (
                <button
                  type="button"
                  key={option.slug}
                  aria-pressed={slug === option.slug}
                  onClick={() => {
                    setSlug(option.slug);
                    setChoosing(false);
                    setStep(1);
                    setDownloaded(false);
                  }}
                >
                  {option.name} · {money(option.price)} netto
                </button>
              ))}
              <p>Deine bisherigen Angaben bleiben erhalten.</p>
            </fieldset>
          )}
          <h2>
            {slug === 'nine-launch'
              ? 'Dein neuer Auftritt.'
              : 'Dein Auftritt. Mit Werbestart.'}
          </h2>
          <strong className="order-price">{money(p.price)}</strong>
          <span className="order-unit">
            Festpreis · einmalig · zzgl. Umsatzsteuer
          </span>
          <div className="order-example" aria-hidden="true">
            <ReferencePreview
              project={referenceProjects.find(
                (project) =>
                  project.id ===
                  (slug === 'nine-launch' ? 'meister-lorenz' : 'gardentime'),
              )!}
            />
          </div>
          <p className="order-example-label">
            Kundenprojekt als Gestaltungsbeispiel · dein Umfang wird individuell
            vereinbart
          </p>
          <ul className="plain-checks">
            {p.includes.map((t) => (
              <li key={t}>
                <Check size={17} />
                {t}
              </li>
            ))}
          </ul>
          <p className="order-help">
            Du möchtest vorher sprechen?
            <a href="/projekt-starten?service=Website">
              Vorhaben besprechen <ArrowRight size={15} />
            </a>
          </p>
        </aside>
        <section className="order-form c-request-form">
          <ol className="order-progress" aria-label="Bestellschritte">
            {['Paket prüfen', 'Deine Angaben', 'Zusammenfassung'].map(
              (label, i) => (
                <li
                  key={label}
                  aria-current={step === i + 1 ? 'step' : undefined}
                  className={step >= i + 1 ? 'step-reached' : ''}
                >
                  <span>{step > i + 1 ? <Check size={15} /> : i + 1}</span>
                  {label}
                </li>
              ),
            )}
          </ol>
          {step === 1 && (
            <>
              <h2 ref={heading} tabIndex={-1}>
                Das gehört zu deinem Paket.
              </h2>
              <p>
                Ein klarer Umfang gibt dir Sicherheit. Dein Starttermin wird
                gemeinsam abgestimmt.
              </p>
              <div className="order-scope">
                <h3>Deine Website</h3>
                <p>
                  {slug === 'nine-launch'
                    ? 'Bis zu sechs verschiedene Seitenlayouts, eine Sprache, Kontaktformular, Inhaltspflege und zwei Feedbackrunden.'
                    : 'Bis zu zwölf verschiedene Seitenlayouts, zwei Vorlagen für Werbeseiten, individuelles Design, Erfolgsmessung und Google-Ads-Einrichtung.'}
                </p>
                <details>
                  <summary>
                    Was bedeutet „Seitenlayout“? <span>+</span>
                  </summary>
                  <p>
                    Ein Layout ist eine Gestaltung für einen Seitentyp, etwa die
                    Startseite oder eine Leistungsseite. Der Umfang der Inhalte
                    und die benötigten Seiten werden im Startgespräch konkret
                    festgehalten.
                  </p>
                </details>
              </div>
              <div className="order-scope">
                <h3>Zusätzlich zu planen</h3>
                <p>{p.excludes}</p>
                <p>
                  Neue Texte, Fotografie und aufwendige Inhaltsübernahmen sind
                  separat zu vereinbaren.
                </p>
              </div>
              <div className="order-scope">
                <h3>Zahlung & Start</h3>
                <p>{p.payment}</p>
                <p>
                  Der vollständige Gesamtbetrag inklusive Umsatzsteuer und die
                  Fälligkeit werden vor der verbindlichen Beauftragung
                  ausgewiesen.
                </p>
              </div>
              <button
                className="c-button c-button-blue"
                type="button"
                onClick={() => setStep(2)}
              >
                Paket passt – weiter <ArrowRight size={18} />
              </button>
              <p className="c-request-privacy">
                Private Vorschau: noch keine Bestellung oder Zahlung.
              </p>
            </>
          )}
          {step === 2 && (
            <>
              <h2 ref={heading} tabIndex={-1}>
                Wer steckt hinter dem Projekt?
              </h2>
              <p>
                Name und E-Mail reichen für den Entwurf. Alles Weitere können
                wir später gemeinsam klären.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setStep(3);
                }}
              >
                <label>
                  Dein Name
                  <input
                    value={data.name}
                    onChange={(e) => update('name', e.target.value)}
                    autoComplete="name"
                    required
                    maxLength={150}
                  />
                </label>
                <label>
                  Deine E-Mail
                  <input
                    type="email"
                    value={data.email}
                    onChange={(e) => update('email', e.target.value)}
                    autoComplete="email"
                    required
                    maxLength={180}
                  />
                </label>
                <label>
                  <span className="c-request-label">
                    Unternehmen <span>(optional)</span>
                  </span>
                  <input
                    value={data.company}
                    onChange={(e) => update('company', e.target.value)}
                    autoComplete="organization"
                    maxLength={180}
                  />
                </label>
                <label>
                  <span className="c-request-label">
                    Bestehende Website <span>(optional)</span>
                  </span>
                  <input
                    value={data.website}
                    onChange={(e) => update('website', e.target.value)}
                    inputMode="url"
                    autoComplete="url"
                    placeholder="www.dein-unternehmen.de"
                    maxLength={250}
                  />
                </label>
                <details className="order-optional">
                  <summary>
                    Mehr zum Vorhaben ergänzen <span>+</span>
                  </summary>
                  <label>
                    <span className="c-request-label">
                      Was soll deine neue Website erreichen?{' '}
                      <span>(optional)</span>
                    </span>
                    <textarea
                      value={data.idea}
                      onChange={(e) => update('idea', e.target.value)}
                      rows={3}
                      maxLength={3000}
                    />
                  </label>
                  <label>
                    Wann möchtest du starten?
                    <select
                      value={data.timing}
                      onChange={(e) => update('timing', e.target.value)}
                    >
                      {[
                        'Noch offen',
                        'Möglichst bald',
                        'In 1–3 Monaten',
                        'In 3–6 Monaten',
                      ].map((v) => (
                        <option key={v}>{v}</option>
                      ))}
                    </select>
                  </label>
                </details>
                <button className="c-button c-button-blue" type="submit">
                  Zusammenfassung ansehen <ArrowRight size={18} />
                </button>
                <p className="c-request-privacy">
                  Deine Angaben bleiben in diesem Browserfenster.{' '}
                  <a href="/datenschutz" target="_blank" rel="noreferrer">
                    Datenschutzhinweise
                  </a>
                </p>
              </form>
              <button
                className="order-back"
                type="button"
                onClick={() => setStep(1)}
              >
                <ArrowLeft size={16} /> Zurück zum Paket
              </button>
            </>
          )}
          {step === 3 && (
            <>
              <h2 ref={heading} tabIndex={-1}>
                Alles auf einen Blick.
              </h2>
              <p>
                So würde dein Auftrag vorbereitet. Du kannst deine Angaben
                jederzeit bearbeiten.
              </p>
              <dl className="c-request-review">
                {[
                  ['Paket', p.name],
                  [
                    'Website-Festpreis',
                    money(p.price) + ' netto, zzgl. Umsatzsteuer',
                  ],
                  ['Name', data.name],
                  ['E-Mail', data.email],
                  ['Unternehmen', data.company || 'Noch offen'],
                  ['Bestehende Website', data.website || 'Nicht angegeben'],
                  ['Gewünschter Start', data.timing],
                  ['Vorhaben', data.idea || 'Besprechen wir gemeinsam'],
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
              <button
                className="c-request-edit"
                type="button"
                onClick={() => setStep(2)}
              >
                <Pencil size={16} /> Angaben bearbeiten
              </button>
              <div className="order-total">
                <span>{p.name} · netto</span>
                <strong>{money(p.price)}</strong>
                <p>
                  Umsatzsteuer und verbindliche Fälligkeit werden vor
                  Freischaltung des Bestellabschlusses ergänzt.
                </p>
              </div>
              {paymentUrl ? (
                <a className="c-button c-button-blue" href={paymentUrl}>
                  Weiter zur Zahlung <ArrowRight size={18} />
                </a>
              ) : (
                <button
                  className="c-button order-payment-disabled"
                  type="button"
                  disabled
                >
                  <LockKeyhole size={17} /> Zahlung noch nicht freigeschaltet
                </button>
              )}
              <p className="order-preview-note">
                Private Vorschau. Hier wird noch kein Auftrag ausgelöst. Du
                kannst deinen Bestellentwurf bereits speichern.
              </p>
              <button
                className="c-button order-save"
                type="button"
                onClick={download}
              >
                Bestellentwurf speichern <Download size={17} />
              </button>
              <output className="c-request-privacy">
                {downloaded
                  ? 'Download gestartet. Es wurde nichts bestellt oder versendet.'
                  : 'Deine Zusammenfassung als Textdatei.'}
              </output>
            </>
          )}
        </section>
      </div>
    </div>
  );
}
