'use client';
import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowUpRight, Check, Download, Pencil } from 'lucide-react';
import { packages, money } from './site-data';
import { packagePresentation } from './package-cards';
import {
  NativeSelect,
  NativeSelectOption,
} from '@/components/ui/native-select';
export default function PackageRequest({
  slug,
  initialService,
}: {
  slug?: string;
  initialService?: string;
}) {
  const p = packages.find((p) => p.slug === slug) ?? {
    name: 'Dein Projekt',
    slug: 'projekt',
    price: 0,
    suffix: '',
    includes: [
      'Dein Ziel und die passende Lösung besprechen',
      'Leistungen und Kosten vor dem Start klären',
      'Erst nach deiner Freigabe mit der Umsetzung starten',
    ],
    excludes: '',
    payment: '',
  };
  const presentation = slug
    ? packagePresentation[slug]
    : {
        title: 'Was können wir für dich tun',
        result:
          'Du brauchst keine fertige Planung. Erzähl uns, was du erreichen möchtest. Wir klären gemeinsam, welcher nächste Schritt passt.',
      };
  const [review, setReview] = useState(false),
    [downloaded, setDownloaded] = useState(false);
  const [data, setData] = useState({
    name: '',
    company: '',
    email: '',
    idea: '',
    timing: 'Noch offen',
    service: initialService || ('for' in p ? p.for : 'Noch unklar'),
  });
  const serviceLabel =
    data.service === 'Growth' ? 'Werbung bei Google' : data.service;
  const reviewHeading = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    if (review) reviewHeading.current?.focus();
  }, [review]);
  function update(key: keyof typeof data, value: string) {
    setData((d) => ({ ...d, [key]: value }));
    setDownloaded(false);
  }
  const summary = `NINE.AI — PAKETANFRAGE\n\nPaket: ${p.name}\nProjektart: ${serviceLabel}\nZiel: ${presentation.title}\n${slug ? `Preisorientierung: ${p.suffix.includes('ab') ? 'ab ' : ''}${money(p.price)} netto${p.suffix.includes('Monat') ? ' pro Monat' : ''}` : 'Preis und Umfang noch offen'}\n\nName: ${data.name}\nUnternehmen: ${data.company || 'Noch nicht angegeben'}\nE-Mail: ${data.email}\nStart: ${data.timing}\n\nVorhaben:\n${data.idea}\n\nEnthalten:\n${p.includes.join('\n')}\n\nNicht enthalten: ${p.excludes}\nZahlungsplan: ${p.payment}\n\nLokale Zusammenfassung. Keine Anfrage versendet, keine Zahlung und keine Bestellung ausgelöst. Umfang und Preis müssen noch bestätigt werden.`;
  function download() {
    const url = URL.createObjectURL(
      new Blob([summary], { type: 'text/plain;charset=utf-8' }),
    );
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Nine-ai-' + p.slug + '-Briefing.txt';
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setDownloaded(true);
  }
  return (
    <div className="c-request-layout">
      <aside className="c-request-summary">
        <a href="/pakete" className="c-request-back">
          <ArrowLeft size={16} />
          Alle Pakete
        </a>
        <span className="c-eyebrow">{p.name}</span>
        <h1>
          {presentation.title}
          <em>{slug ? '.' : '?'}</em>
        </h1>
        <p>{presentation.result}</p>
        {slug && (
          <>
            <div className="c-request-price">
              {p.suffix.includes('ab') && <small>ab </small>}
              {money(p.price)}
            </div>
            <span className="c-request-unit">
              {p.suffix.includes('Monat') ? 'pro Monat' : 'einmalig'} · netto ·
              Preisorientierung
            </span>
          </>
        )}
        {slug && (
          <ul>
            {p.includes.map((x) => (
              <li key={x}>
                <Check size={17} />
                {x}
              </li>
            ))}
          </ul>
        )}
        {slug && (
          <>
            <details>
              <summary>
                Was ist nicht enthalten? <span>+</span>
              </summary>
              <p>{p.excludes}</p>
            </details>
            <details>
              <summary>
                Wie ist die Zahlung geplant? <span>+</span>
              </summary>
              <p>{p.payment}</p>
              <p>
                Leistungsumfang, verbindlicher Gesamtpreis inklusive
                Umsatzsteuer und Starttermin werden vor der Beauftragung
                bestätigt.
              </p>
            </details>
          </>
        )}
        <p className="c-request-note">
          Private Vorschau: Du kannst dein Briefing vorbereiten und speichern.
          Es wird nichts versendet oder bestellt.
        </p>
      </aside>
      <section className="c-request-form">
        <div className="c-request-step">
          <span>
            {review ? '02 / PRÜFEN & SPEICHERN' : '01 / DEIN VORHABEN'}
          </span>
          <span>{review ? <Check size={19} /> : <Pencil size={17} />}</span>
        </div>
        {!review ? (
          <>
            <h2>Was hast du vor?</h2>
            <p>
              {slug
                ? 'Dein Paket steht fest. Beschreibe kurz dein Ziel – technisches Wissen brauchst du dafür nicht.'
                : 'Worum geht es und wie erreichen wir dich? Ein paar Sätze reichen für den Anfang.'}
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setReview(true);
                setDownloaded(false);
              }}
            >
              {!slug && (
                <label>
                  Wobei können wir helfen?
                  <NativeSelect
                    value={data.service}
                    onChange={(e) => update('service', e.target.value)}
                  >
                    {[
                      ['Noch unklar', 'Ich möchte mich erst beraten lassen'],
                      ['Website', 'Neue Website oder Überarbeitung'],
                      ['Growth', 'Mehr Anfragen mit Google Ads'],
                      [
                        'Plattform',
                        'Web-App, Kundenportal oder Buchungsplattform',
                      ],
                      [
                        'KI & Automation',
                        'Wiederkehrende Aufgaben automatisieren',
                      ],
                    ].map(([value, label]) => (
                      <NativeSelectOption key={value} value={value}>
                        {label}
                      </NativeSelectOption>
                    ))}
                  </NativeSelect>
                </label>
              )}
              <label>
                Was möchtest du mit dem Projekt erreichen?
                <textarea
                  required
                  minLength={10}
                  maxLength={4000}
                  rows={4}
                  value={data.idea}
                  onChange={(e) => update('idea', e.target.value)}
                  placeholder={
                    slug === 'platform-discovery' || slug === 'custom-platform'
                      ? 'Zum Beispiel: Unsere Kunden sollen Termine direkt online buchen können.'
                      : 'Zum Beispiel: Wir möchten unsere Leistungen verständlicher zeigen und mehr Anfragen bekommen.'
                  }
                />
                <small>Ein paar Sätze reichen. Mindestens 10 Zeichen.</small>
              </label>
              <div className="c-request-fields">
                <label>
                  Dein Name
                  <input
                    required
                    maxLength={150}
                    autoComplete="name"
                    value={data.name}
                    onChange={(e) => update('name', e.target.value)}
                  />
                </label>
                <label>
                  Deine E-Mail
                  <input
                    type="email"
                    required
                    maxLength={180}
                    autoComplete="email"
                    value={data.email}
                    onChange={(e) => update('email', e.target.value)}
                  />
                </label>
                <label>
                  <span className="c-request-label">
                    Unternehmen <span>(optional)</span>
                  </span>
                  <input
                    maxLength={180}
                    autoComplete="organization"
                    value={data.company}
                    onChange={(e) => update('company', e.target.value)}
                  />
                </label>
                <label>
                  Wann soll es losgehen?
                  <NativeSelect
                    value={data.timing}
                    onChange={(e) => update('timing', e.target.value)}
                  >
                    {[
                      'Noch offen',
                      'Möglichst bald',
                      'In 1–3 Monaten',
                      'In 3–6 Monaten',
                      'Später',
                    ].map((v) => (
                      <NativeSelectOption key={v}>{v}</NativeSelectOption>
                    ))}
                  </NativeSelect>
                </label>
              </div>
              <button className="c-button c-button-blue" type="submit">
                Zusammenfassung ansehen
                <ArrowUpRight size={18} />
              </button>
              <p className="c-request-privacy">
                Deine Eingaben bleiben in diesem Browserfenster.{' '}
                <a href="/datenschutz" target="_blank" rel="noreferrer">
                  Datenschutzhinweise
                </a>
              </p>
            </form>
          </>
        ) : (
          <>
            <h2 ref={reviewHeading} tabIndex={-1}>
              Alles so richtig?
            </h2>
            <p>
              Prüfe dein Vorhaben und speichere deine Zusammenfassung für den
              nächsten Schritt.
            </p>
            <dl className="c-request-review">
              {[
                [
                  slug ? 'Dein Paket' : 'Projektart',
                  slug ? p.name : serviceLabel,
                ],
                ['Dein Vorhaben', data.idea],
                ['Kontakt', data.name + ' · ' + data.email],
                ['Unternehmen', data.company || 'Nicht angegeben'],
                ['Gewünschter Start', data.timing],
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
              onClick={() => setReview(false)}
            >
              <Pencil size={16} /> Angaben bearbeiten
            </button>
            <button
              className="c-button c-button-blue"
              type="button"
              onClick={download}
            >
              Briefing speichern
              <Download size={18} />
            </button>
            <output className="c-request-privacy">
              {downloaded
                ? 'Der Download wurde gestartet. Es wurde keine Anfrage versendet.'
                : 'Du erhältst eine Textdatei. Noch keine Anfrage, Bestellung oder Zahlung.'}
            </output>
            <a href="/pakete" className="c-request-back">
              Zurück zu den Paketen
              <ArrowUpRight size={16} />
            </a>
          </>
        )}
      </section>
    </div>
  );
}
