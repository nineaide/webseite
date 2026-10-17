'use client';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ArrowDown, ArrowLeft } from 'lucide-react';
import { packages, money } from './site-data';
import { recommendProject } from '../lib/project-routing';
export default function Configurator({
  packageSlug,
  initialService,
}: {
  packageSlug?: string;
  initialService?: string;
}) {
  const pack = packages.find((p) => p.slug === packageSlug);
  const [step, setStep] = useState(0),
    [saved, setSaved] = useState(false);
  const [data, setData] = useState({
    service: initialService || pack?.for || 'Noch unklar',
    situation: 'Idee',
    features: [] as string[],
    budget: 'Noch offen',
    timing: 'Flexibel',
    company: '',
    name: '',
    role: '',
    email: '',
    phone: '',
    idea: '',
  });
  const heading = useRef<HTMLHeadingElement>(null);
  const moved = useRef(false);

  useEffect(() => {
    if (moved.current) heading.current?.focus();
    else moved.current = true;
  }, [step]);
  function update(key: keyof typeof data, value: string) {
    setData((d) => ({ ...d, [key]: value }));
    setSaved(false);
  }
  const titles = [
    'Was möchtest du aufbauen?',
    'Wo stehst du gerade?',
    'Was muss dein System können?',
    'Welcher Rahmen passt?',
    'Wann möchtest du starten?',
    'Wer steckt hinter der Idee?',
    'Dein Projekt auf einen Blick.',
  ];
  const recommendation = recommendProject(
    data.service,
    data.budget,
    data.features,
  );
  const summary = `NINE.AI — PROJEKTBRIEFING\n\n${pack ? 'Paket: ' + pack.name + '\n' : ''}Projektart: ${data.service}\nAusgangslage: ${data.situation}\nFunktionen: ${data.features.join(', ') || 'Noch offen'}\nBudget: ${data.budget}\nStart: ${data.timing}\n\nUnternehmen: ${data.company}\nName: ${data.name}\nRolle: ${data.role}\nE-Mail: ${data.email}\nTelefon: ${data.phone || '—'}\n\nVorhaben:\n${data.idea}\n\nEmpfohlener Einstieg: ${recommendation}\n\nLokale Zusammenfassung. Keine Anfrage versendet, keine Bestellung ausgelöst.`;
  function download() {
    const url = URL.createObjectURL(
      new Blob([summary], { type: 'text/plain;charset=utf-8' }),
    );
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Nine-ai-Projektbriefing.txt';
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setSaved(true);
  }
  function choices(
    key: 'service' | 'situation' | 'budget' | 'timing',
    values: string[],
  ) {
    return (
      <fieldset className="n-options">
        <legend className="sr-only">{titles[step]}</legend>
        {values.map((v) => (
          <label key={v} className={data[key] === v ? 'selected' : ''}>
            <input
              type="radio"
              name={key}
              value={v}
              checked={data[key] === v}
              onChange={() => update(key, v)}
            />
            <span>{v}</span>
            <span aria-hidden="true">
              <ArrowUpRight className="text-arrow" />
            </span>
          </label>
        ))}
      </fieldset>
    );
  }
  return (
    <div className="n-config-layout">
      <aside className="n-config-aside">
        <span className="n-kicker">
          {pack ? 'PAKET ANFRAGEN' : 'PROJEKT STARTEN'}
        </span>
        <h1>
          {pack ? (
            pack.name
          ) : (
            <>
              Deine Idee.
              <br />
              Unser nächster
              <br />
              <em>Schritt.</em>
            </>
          )}
        </h1>
        <p>
          {pack
            ? pack.goal
            : 'Ein paar Fragen zu Ziel, Umfang und Budget. Daraus entsteht ein Briefing für dein Projekt.'}
        </p>
        {pack && (
          <>
            <div className="n-price">
              {pack.suffix.includes('ab') ? 'ab ' : ''}
              {money(pack.price)}
              {pack.suffix.includes('Monat') ? ' / Monat' : ''}
            </div>
            <p className="n-caption">
              Preisorientierung netto. Noch kein Kauf.
            </p>
            <ul>
              {pack.includes.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
            <details>
              <summary>Leistungsgrenzen & Zahlung</summary>
              <p>{pack.excludes}</p>
              <p>{pack.payment}</p>
              <p>
                Umsatzsteuer und verbindlicher Gesamtpreis werden im bestätigten
                Angebot ausgewiesen. Es ist kein Zahlungsanbieter angebunden.
              </p>
            </details>
          </>
        )}
        <div className="n-config-note">
          Dein Briefing bleibt lokal. Du kannst es zum Abschluss herunterladen.
        </div>
        <a className="n-text-link" href={pack ? '/pakete' : '/loesungen'}>
          {pack ? 'Pakete vergleichen' : 'Lösungen entdecken'}{' '}
          <ArrowUpRight className="text-arrow" aria-hidden="true" />
        </a>
      </aside>
      <section className="n-config-panel">
        <div className="n-progress-label">
          <span>SCHRITT {Math.min(step + 1, 6)} / 6</span>
          <span>
            {step === 6
              ? 'ZUSAMMENFASSUNG'
              : Math.round((step / 6) * 100) + ' %'}
          </span>
        </div>
        <div className="n-progress" aria-hidden="true">
          <span
            style={{ width: (step === 6 ? 100 : ((step + 1) / 6) * 100) + '%' }}
          />
        </div>
        <h2 tabIndex={-1} ref={heading}>
          {titles[step]}
        </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setStep((s) => Math.min(s + 1, 6));
            setSaved(false);
          }}
        >
          {step === 0 &&
            choices('service', [
              'Website',
              'Plattform',
              'KI & Automation',
              'Growth',
              'Noch unklar',
            ])}
          {step === 1 &&
            choices('situation', [
              'Idee',
              'Bestehende Website',
              'Laufendes System',
              'Definierte Anforderungen',
            ])}
          {step === 2 && (
            <>
              <p className="n-form-help">
                Mehrfachauswahl möglich. Du kannst diesen Schritt auch
                offenlassen.
              </p>
              <fieldset className="n-options">
                <legend className="sr-only">Benötigte Funktionen</legend>
                {[
                  'Login & Rollen',
                  'Zahlungen',
                  'Buchungen',
                  'Individuelle Schnittstellen',
                  'Dashboard',
                  'KI-Funktionen',
                  'Mehrsprachigkeit',
                  'CMS',
                ].map((v) => (
                  <label
                    key={v}
                    className={data.features.includes(v) ? 'selected' : ''}
                  >
                    <input
                      type="checkbox"
                      checked={data.features.includes(v)}
                      onChange={() =>
                        setData((d) => ({
                          ...d,
                          features: d.features.includes(v)
                            ? d.features.filter((x) => x !== v)
                            : [...d.features, v],
                        }))
                      }
                    />
                    <span>{v}</span>
                    <span aria-hidden="true">+</span>
                  </label>
                ))}
              </fieldset>
            </>
          )}
          {step === 3 &&
            choices('budget', [
              'Noch offen',
              'Unter 6.000 €',
              '6.000–15.000 €',
              '15.000–30.000 €',
              '30.000–60.000 €',
              'Über 60.000 €',
            ])}
          {step === 4 &&
            choices('timing', [
              'Flexibel',
              'Möglichst bald',
              'In 1–3 Monaten',
              'In 3–6 Monaten',
              'Später',
            ])}
          {step === 5 && (
            <div className="n-fields">
              {[
                ['company', 'Unternehmen', 'text'],
                ['name', 'Dein Name', 'text'],
                ['role', 'Deine Rolle', 'text'],
                ['email', 'Geschäftliche E-Mail', 'email'],
                ['phone', 'Telefon (optional)', 'tel'],
              ].map(([key, label, type]) => (
                <label key={key}>
                  {label}
                  <input
                    type={type}
                    required={key !== 'phone'}
                    maxLength={180}
                    value={data[key as 'company']}
                    autoComplete={
                      {
                        company: 'organization',
                        name: 'name',
                        email: 'email',
                        phone: 'tel',
                        role: 'organization-title',
                      }[key]
                    }
                    onChange={(e) =>
                      update(key as keyof typeof data, e.target.value)
                    }
                  />
                </label>
              ))}
              <label className="n-full">
                Beschreibe dein Vorhaben
                <textarea
                  required
                  minLength={10}
                  maxLength={4000}
                  rows={4}
                  value={data.idea}
                  onChange={(e) => update('idea', e.target.value)}
                  placeholder="Ziel, Herausforderung und wichtige Rahmenbedingungen …"
                />
                <small>Mindestens 10 Zeichen.</small>
              </label>
              <p className="n-form-help n-full">
                Die Angaben werden in deine lokale Zusammenfassung übernommen.{' '}
                <a href="/datenschutz" target="_blank" rel="noreferrer">
                  Hinweise zum Datenschutz{' '}
                  <ArrowUpRight className="text-arrow" aria-hidden="true" />
                </a>
              </p>
            </div>
          )}
          {step === 6 && (
            <>
              <dl className="n-summary">
                {[
                  ['Projekt', data.service, 0],
                  ['Ausgangslage', data.situation, 1],
                  ['Funktionen', data.features.join(', ') || 'Noch offen', 2],
                  ['Budget', data.budget, 3],
                  ['Timing', data.timing, 4],
                  [
                    'Kontakt',
                    `${data.name} · ${data.company} · ${data.email}`,
                    5,
                  ],
                  ['Vorhaben', data.idea, 5],
                ].map(([label, value, target]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                    <button
                      type="button"
                      aria-label={label + ' bearbeiten'}
                      onClick={() => setStep(Number(target))}
                    >
                      Ändern
                    </button>
                  </div>
                ))}
              </dl>
              <div className="n-recommendation">
                <span className="n-kicker">PASSENDER NÄCHSTER SCHRITT</span>
                <h3>{recommendation}</h3>
                <p>
                  {data.budget === 'Unter 6.000 €'
                    ? 'Für die geplanten Pakete ist der Budgetrahmen zu klein. Ein reduzierter Umfang oder eine zeitliche Aufteilung kann der passende Einstieg sein.'
                    : 'Diese erste Einordnung hilft bei der weiteren Abstimmung. Leistungsumfang, Preis und Starttermin werden anschließend gemeinsam bestätigt.'}
                </p>
              </div>
              <button
                className="f-button n-download"
                type="button"
                onClick={download}
              >
                Briefing herunterladen{' '}
                <ArrowDown className="text-arrow" aria-hidden="true" />
              </button>
              <output className="n-form-help">
                {saved
                  ? 'Der Download wurde gestartet. Es wurde keine Anfrage versendet.'
                  : 'Du speicherst eine Textdatei. Es wird keine Anfrage versendet und keine Bestellung ausgelöst.'}
              </output>
            </>
          )}
          {step < 6 && (
            <div className="n-form-actions">
              {step > 0 && (
                <button
                  className="n-back"
                  type="button"
                  onClick={() => setStep((s) => s - 1)}
                >
                  <ArrowLeft className="text-arrow" aria-hidden="true" /> Zurück
                </button>
              )}
              <button className="f-button" type="submit">
                {step === 5 ? 'Briefing prüfen' : 'Weiter'}{' '}
                <ArrowUpRight className="text-arrow" aria-hidden="true" />
              </button>
            </div>
          )}
        </form>
      </section>
    </div>
  );
}
