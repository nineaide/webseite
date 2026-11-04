'use client';
import { useEffect, useRef, useState, type SubmitEvent } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  LoaderCircle,
  Mail,
} from 'lucide-react';
import { inquiryOptions, isValidInquiryPhone } from '../lib/inquiry-options';
import { markInquiryReceived } from '../lib/inquiry-status';
import './inquiry-form.css';

export function InquiryForm({
  initialInterest = 'allgemein',
  onInterestChange,
}: {
  initialInterest?: string;
  onInterestChange?: (value: string) => void;
}) {
  const [interest, setInterest] = useState(() =>
    inquiryOptions.some((o) => o.value === initialInterest)
      ? initialInterest
      : 'allgemein',
  );
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    message: '',
    fax: '',
  });
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [receipt, setReceipt] = useState('');
  const requestId = useRef('');
  const submitting = useRef(false);
  const started = useRef(false);
  const heading = useRef<HTMLHeadingElement>(null);
  const phone = useRef<HTMLInputElement>(null);
  const selected = inquiryOptions.find((o) => o.value === interest)!;

  useEffect(() => {
    if (receipt) heading.current?.focus();
  }, [receipt]);

  useEffect(() => {
    function selectPackage(event: MouseEvent) {
      if (submitting.current) return;
      const link = (event.target as Element).closest<HTMLAnchorElement>(
        'a[data-lead-package]',
      );
      const value = link?.dataset.leadPackage;
      if (!value || !inquiryOptions.some((o) => o.value === value)) return;
      setInterest(value);
      onInterestChange?.(value);
      setReceipt('');
      setError('');
      requestId.current = '';
    }
    document.addEventListener('click', selectPackage);
    return () => document.removeEventListener('click', selectPackage);
  }, [onInterestChange]);

  function update(key: keyof typeof data, value: string) {
    setData((previous) => ({ ...previous, [key]: value }));
    setError('');
    requestId.current = '';
    if (!started.current) {
      started.current = true;
      window.dispatchEvent(
        new CustomEvent('nine:lead-event', { detail: { event: 'form_start' } }),
      );
    }
  }

  async function submit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;
    if (!isValidInquiryPhone(data.phone)) {
      setError('Bitte gib eine gültige Telefonnummer mit Vorwahl an.');
      phone.current?.focus();
      return;
    }
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
          goal: selected.goal,
          package: selected.package,
          requestId: requestId.current,
          campaign,
        }),
        signal: AbortSignal.timeout(20000),
      });
      let result: { accepted?: boolean; id?: string; error?: string };
      try {
        result = await response.json();
      } catch {
        throw new Error(
          'Deine Anfrage konnte noch nicht bestätigt werden. Bitte versuche es erneut.',
        );
      }
      if (!response.ok || !result.accepted || !result.id)
        throw new Error(
          result.error ||
            'Deine Anfrage konnte noch nicht gespeichert werden. Bitte versuche es erneut.',
        );
      setReceipt(result.id);
      markInquiryReceived();
      window.dispatchEvent(
        new CustomEvent('nine:lead-event', {
          detail: {
            event: 'lead_received',
            event_id: result.id,
            package: selected.package,
            goal: selected.goal,
          },
        }),
      );
    } catch (failure) {
      window.dispatchEvent(
        new CustomEvent('nine:lead-event', { detail: { event: 'form_error' } }),
      );
      setError(
        failure instanceof Error && failure.name === 'TimeoutError'
          ? 'Die Verbindung hat zu lange gebraucht. Deine Eingaben bleiben erhalten. Bitte versuche es erneut.'
          : failure instanceof TypeError
            ? 'Die Verbindung konnte nicht hergestellt werden. Deine Eingaben bleiben erhalten. Bitte versuche es erneut.'
            : failure instanceof Error
              ? failure.message
              : 'Deine Anfrage konnte noch nicht bestätigt werden. Bitte versuche es erneut.',
      );
    } finally {
      submitting.current = false;
      setBusy(false);
    }
  }

  return (
    <section
      id="website-check"
      className="inquiry-form"
      aria-labelledby="inquiry-title"
    >
      {receipt ? (
        <div className="inquiry-receipt" aria-live="polite">
          <CheckCircle2 size={30} aria-hidden="true" />
          <h2 id="inquiry-title" ref={heading} tabIndex={-1}>
            Danke für deine Anfrage.
          </h2>
          <p>
            Wir haben deine Angaben erhalten und melden uns persönlich bei dir.
          </p>
          <p className="inquiry-interest">
            Interesse: <strong>{selected.label}</strong>
          </p>
          <a href="mailto:anfrage@nineai.de">
            <Mail size={17} aria-hidden="true" /> Kontakt aufnehmen
          </a>
        </div>
      ) : (
        <>
          <h2 id="inquiry-title" ref={heading} tabIndex={-1}>
            Projekt anfragen
          </h2>
          <p>
            Erzähl uns, was du vorhast. Wir klären den Umfang im persönlichen
            Gespräch und erstellen dir ein Angebot.
          </p>
          <form onSubmit={submit} aria-busy={busy}>
            <fieldset disabled={busy}>
              <legend className="sr-only">Deine Anfrage</legend>
              <label>
                Interesse: <strong>{selected.label}</strong>
                <select
                  name="interest"
                  value={interest}
                  onChange={(e) => {
                    setInterest(e.target.value);
                    onInterestChange?.(e.target.value);
                    setError('');
                    requestId.current = '';
                  }}
                >
                  {(['Pakete', 'Leistungen'] as const).map((group) => (
                    <optgroup label={group} key={group}>
                      {inquiryOptions
                        .filter((o) => o.group === group)
                        .map((o) => (
                          <option key={o.value} value={o.value}>
                            {o.label}
                          </option>
                        ))}
                    </optgroup>
                  ))}
                </select>
              </label>
              <label>
                Dein Name <span>(erforderlich)</span>
                <input
                  name="name"
                  autoComplete="name"
                  required
                  minLength={2}
                  maxLength={100}
                  value={data.name}
                  onChange={(e) => update('name', e.target.value)}
                />
              </label>
              <label>
                E-Mail-Adresse <span>(erforderlich)</span>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={200}
                  value={data.email}
                  onChange={(e) => update('email', e.target.value)}
                />
              </label>
              <label>
                Telefonnummer <span>(erforderlich)</span>
                <input
                  ref={phone}
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  minLength={6}
                  maxLength={40}
                  value={data.phone}
                  onChange={(e) => update('phone', e.target.value)}
                />
              </label>
              <label>
                Deine Website <span>(optional)</span>
                <input
                  name="website"
                  autoComplete="url"
                  inputMode="url"
                  maxLength={300}
                  placeholder="dein-unternehmen.de"
                  value={data.website}
                  onChange={(e) => update('website', e.target.value)}
                />
              </label>
              <details className="inquiry-message">
                <summary>
                  Nachricht hinzufügen <span>(optional)</span>
                  <ChevronDown size={20} aria-hidden="true" />
                </summary>
                <label>
                  Was möchtest du uns mitgeben?
                  <textarea
                    name="message"
                    rows={4}
                    maxLength={2000}
                    value={data.message}
                    onChange={(e) => update('message', e.target.value)}
                  />
                </label>
              </details>
              <div hidden aria-hidden="true">
                <label>
                  Fax
                  <input
                    name="fax"
                    autoComplete="off"
                    tabIndex={-1}
                    value={data.fax}
                    onChange={(e) => update('fax', e.target.value)}
                  />
                </label>
              </div>
              <p className="inquiry-privacy">
                Wir verwenden deine Angaben zur Bearbeitung deiner Anfrage.{' '}
                <a
                  href="/datenschutz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Datenschutzhinweise
                </a>
              </p>
              {error && (
                <p className="inquiry-error" role="alert">
                  {error}{' '}
                  <a href="mailto:anfrage@nineai.de">Kontakt aufnehmen</a>
                </p>
              )}
              <button
                type="submit"
                className="c-button c-button-blue"
                disabled={busy}
              >
                {busy ? (
                  <>
                    <LoaderCircle
                      className="inquiry-loading"
                      size={18}
                      aria-hidden="true"
                    />{' '}
                    Wird gesendet …
                  </>
                ) : (
                  <>
                    Anfrage senden <ArrowRight size={18} aria-hidden="true" />
                  </>
                )}
              </button>
            </fieldset>
            <p className="inquiry-note">Deine Anfrage ist unverbindlich.</p>
          </form>
          <noscript>
            <p>
              Für das Formular wird JavaScript benötigt. Du kannst uns unter{' '}
              <a href="mailto:anfrage@nineai.de">anfrage@nineai.de</a>{' '}
              erreichen.
            </p>
          </noscript>
        </>
      )}
    </section>
  );
}
