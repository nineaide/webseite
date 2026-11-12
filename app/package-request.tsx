'use client';
import { useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { packages, money } from './site-data';
import { websiteOffers } from './website-offers';
import { InquiryForm } from './inquiry-form';
import { resolveInquiryInterest } from '../lib/inquiry-options';
import { taxNotice } from '../lib/business-identity';

export default function PackageRequest({
  slug,
  initialService,
}: {
  slug?: string;
  initialService?: string;
}) {
  const initialInterest = resolveInquiryInterest(slug, initialService);
  const [interest, setInterest] = useState(initialInterest);
  const offer =
    websiteOffers.find((p) => p.slug === interest) ??
    packages.find((p) => p.slug === interest);
  return (
    <div className="c-request-layout inquiry-page">
      <aside className="c-request-summary">
        <span className="c-eyebrow">
          {offer ? 'PAKET ANFRAGEN' : 'DEIN PROJEKT'}
        </span>
        <h1>{offer ? offer.name + ' anfragen' : 'Projekt anfragen'}</h1>
        <p>
          {offer
            ? offer.goal
            : 'Du brauchst noch keine fertige Planung. Beschreibe dein Vorhaben, damit wir den passenden Umfang mit dir besprechen können.'}
        </p>
        {offer && (
          <>
            <div className="c-request-price">{money(offer.price)}</div>
            <span className="c-request-unit">
              {'suffix' in offer && offer.suffix.includes('Monat')
                ? 'pro Monat'
                : 'einmalig'}{' '}
              · Basispreis
            </span>
            <ul>
              {offer.includes.map((item) => (
                <li key={item}>
                  <Check size={17} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="c-request-note">
              Basispreis für den beschriebenen Leistungsumfang. Dein
              persönliches Angebot richtet sich nach den vereinbarten
              Anforderungen. {taxNotice}
            </p>
            {interest === 'nine-scale' && (
              <p>
                Umfang, Laufzeit und Betreuung stimmen wir passend zu deinem
                Bedarf ab. Das Werbebudget kommt separat hinzu.
              </p>
            )}
          </>
        )}
        <a href="/pakete" className="c-request-back">
          Pakete und Preise ansehen{' '}
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </aside>
      <InquiryForm
        initialInterest={initialInterest}
        onInterestChange={setInterest}
      />
    </div>
  );
}
