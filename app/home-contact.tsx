'use client';
/* oxlint-disable jsx-a11y/autocomplete-valid -- given-name and family-name are standard HTML autocomplete tokens. */

import { useEffect, useRef, useState, type SubmitEvent } from 'react';
import { isValidInquiryPhone } from '../lib/inquiry-options';
import './home-contact.css';

export function HomeContact() {
  const [callback, setCallback] = useState(false);
  const [busy, setBusy] = useState(false);
  const [received, setReceived] = useState(false);
  const [error, setError] = useState('');
  const requestId = useRef('');
  const submitting = useRef(false);
  const feedback = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (received || error) feedback.current?.focus();
  }, [received, error]);

  async function submit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    // Native required validation accepts spaces; reject empty messages/names too.
    for (const name of ['message', 'firstName', 'lastName', 'email', 'phone']) {
      const input = form.elements.namedItem(name) as
        | HTMLInputElement
        | HTMLTextAreaElement;
      if (input.required && !input.value.trim()) {
        input.setCustomValidity('Bitte füllen Sie dieses Feld aus.');
        input.reportValidity();
        return;
      }
    }
    const phone = form.elements.namedItem('phone') as HTMLInputElement;
    if (phone.value.trim() && !isValidInquiryPhone(phone.value)) {
      phone.setCustomValidity(
        'Bitte geben Sie eine gültige Telefonnummer mit Vorwahl an.',
      );
      phone.reportValidity();
      return;
    }
    submitting.current = true;
    setBusy(true);
    setError('');
    requestId.current ||= crypto.randomUUID();
    try {
      const response = await fetch('/api/website-anfrage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...Object.fromEntries(data),
          kind: 'contact',
          callback,
          requestId: requestId.current,
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
            'Ihre Nachricht konnte noch nicht gespeichert werden. Bitte versuchen Sie es erneut.',
        );
      setReceived(true);
    } catch (failure) {
      setError(
        failure instanceof Error &&
          !['TypeError', 'TimeoutError', 'SyntaxError'].includes(failure.name)
          ? failure.message
          : 'Der Versand konnte nicht bestätigt werden. Ihre Eingaben bleiben erhalten. Bitte versuchen Sie es erneut oder schreiben Sie uns per E-Mail.',
      );
    } finally {
      submitting.current = false;
      setBusy(false);
    }
  }

  return (
    <section
      className="home-contact"
      id="kontakt"
      aria-labelledby="home-contact-title"
    >
      <div className="wrap home-contact-layout">
        <div className="home-contact-intro">
          <h2 id="home-contact-title">Sie haben Fragen?</h2>
          <p>
            Nicht jede Frage lässt sich über eine Website klären. Schreiben Sie
            uns, wenn Sie mehr wissen oder Ihr Vorhaben kurz besprechen möchten.
          </p>
          <a href="mailto:anfrage@nineai.de">anfrage@nineai.de</a>
        </div>
        {received ? (
          <div className="home-contact-receipt" aria-live="polite">
            <h3>Vielen Dank für Ihre Nachricht.</h3>
            <p ref={feedback} tabIndex={-1}>
              Wir haben Ihre Nachricht erhalten und melden uns persönlich bei
              Ihnen.
            </p>
          </div>
        ) : (
          <form
            onSubmit={submit}
            aria-label="Kontakt aufnehmen"
            aria-busy={busy}
            onChange={() => {
              requestId.current = '';
            }}
            onInput={(event) => {
              const field = event.target;
              if (
                field instanceof HTMLInputElement ||
                field instanceof HTMLTextAreaElement
              )
                field.setCustomValidity('');
            }}
          >
            <fieldset disabled={busy}>
              <legend className="sr-only">
                Ihre Nachricht und Kontaktdaten
              </legend>
              <p className="home-contact-hint">
                Pflichtfelder sind mit * gekennzeichnet.
              </p>
              <label className="home-contact-full">
                Ihre Nachricht *
                <textarea name="message" required maxLength={2000} rows={5} />
              </label>
              <label>
                Vorname *
                <input
                  name="firstName"
                  autoComplete="given-name"
                  required
                  maxLength={49}
                />
              </label>
              <label>
                Nachname *
                <input
                  name="lastName"
                  autoComplete="family-name"
                  required
                  maxLength={49}
                />
              </label>
              <label className="home-contact-full">
                Firma <span>(optional)</span>
                <input
                  name="company"
                  autoComplete="organization"
                  maxLength={150}
                />
              </label>
              <label>
                E-Mail *
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={200}
                />
              </label>
              <label>
                Telefon {callback ? '*' : <span>(optional)</span>}
                <input
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required={callback}
                  maxLength={40}
                />
              </label>
              <label className="home-contact-callback home-contact-full">
                <input
                  name="callback"
                  type="checkbox"
                  checked={callback}
                  onChange={(event) => {
                    setCallback(event.target.checked);
                    const phone = event.target.form?.elements.namedItem(
                      'phone',
                    ) as HTMLInputElement | null;
                    if (!event.target.checked && !phone?.value.trim())
                      phone?.setCustomValidity('');
                  }}
                />
                <span>Ich möchte zurückgerufen werden.</span>
              </label>
              <div hidden aria-hidden="true">
                <label>
                  Fax
                  <input name="fax" autoComplete="off" tabIndex={-1} />
                </label>
              </div>
              <p className="home-contact-privacy home-contact-full">
                Informationen zum Umgang mit Ihren Angaben finden Sie in unserer{' '}
                <a
                  href="/datenschutz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Datenschutzerklärung
                </a>
                .
              </p>
              {error && (
                <p
                  className="home-contact-error home-contact-full"
                  role="alert"
                  ref={feedback}
                  tabIndex={-1}
                >
                  {error}
                </p>
              )}
              <div className="home-contact-full">
                <button
                  className="c-button c-button-blue"
                  type="submit"
                  disabled={busy}
                >
                  {busy ? 'Wird gesendet …' : 'Nachricht senden'}
                </button>
              </div>
            </fieldset>
            <noscript>
              <p>
                Für das Formular wird JavaScript benötigt. Schreiben Sie uns
                gerne an{' '}
                <a href="mailto:anfrage@nineai.de">anfrage@nineai.de</a>.
              </p>
            </noscript>
          </form>
        )}
      </div>
    </section>
  );
}
