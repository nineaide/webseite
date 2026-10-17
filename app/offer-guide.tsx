'use client';
import {
  ArrowUpRight,
  Check,
  Globe2,
  TrendingUp,
  Layers3,
  Workflow,
} from 'lucide-react';
import { GlassIcon } from './glass-icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
export const offers = [
  {
    id: 'website',
    label: 'Neue Website',
    icon: Globe2,
    eyebrow: 'NINE LAUNCH',
    title: 'Eine Website, die dein Angebot auf den Punkt bringt.',
    description:
      'Wir gestalten und entwickeln deinen Unternehmensauftritt. Du bekommst eine fertige Website, die du selbst pflegen kannst.',
    price: '6.900 €',
    unit: 'einmalig · netto',
    href: '/checkout/nine-launch',
    cta: 'Website-Paket ansehen',
    items: [
      'Individuelles Design für dein Unternehmen',
      'Bis zu 6 Seitentypen, mobil optimiert',
      'Inhalte selbst ändern & Anfragen erhalten',
    ],
    second: 'Mehr Seiten und Werbung zum Start?',
    secondHref: '/checkout/nine-growth',
    secondLabel: 'Nine Growth entdecken',
    number: '01',
  },
  {
    id: 'growth',
    label: 'Mehr Kunden',
    icon: TrendingUp,
    eyebrow: 'NINE SCALE',
    title: 'Mit Google Ads die richtigen Menschen erreichen.',
    description:
      'Deine Website steht schon? Wir betreuen deine Werbung bei Google und prüfen, welche Anfragen daraus entstehen.',
    price: 'ab 1.490 €',
    unit: 'pro Monat · netto',
    href: '/checkout/nine-scale',
    cta: 'Werbepaket ansehen',
    items: [
      'Google-Werbung einrichten und betreuen',
      'Anfragen und Kampagnen auswerten',
      'Zielseiten Schritt für Schritt verbessern',
    ],
    second: 'Deine Website braucht auch einen Neustart?',
    secondHref: '/checkout/nine-growth',
    secondLabel: 'Website + Werbung ansehen',
    number: '02',
  },
  {
    id: 'platform',
    label: 'Eigene Plattform',
    icon: Layers3,
    eyebrow: 'PLATFORM DISCOVERY',
    title: 'Aus deiner Web-App-Idee wird ein konkreter Plan.',
    description:
      'Kundenportal, Buchungsplattform oder Marktplatz: Wir klären zuerst, was gebraucht wird, wie es funktioniert und was die Entwicklung kostet.',
    price: '2.900 €',
    unit: 'einmalig · netto',
    href: '/checkout/platform-discovery',
    cta: 'Planungs-Paket ansehen',
    items: [
      'Gemeinsame Workshops zu deiner Idee',
      'Funktionen und Nutzerabläufe festlegen',
      'Umsetzungsplan und Kostenschätzung',
    ],
    second: 'Die individuelle Entwicklung folgt separat.',
    secondHref: '/checkout/custom-platform',
    secondLabel: 'Plattformentwicklung ab 30.000 €',
    number: '03',
  },
  {
    id: 'automation',
    label: 'Weniger Handarbeit',
    icon: Workflow,
    eyebrow: 'KI & AUTOMATISIERUNG',
    title: 'Wiederkehrende Aufgaben automatisch erledigen.',
    description:
      'Zum Beispiel Anfragen vorsortieren, Dokumente auslesen oder Daten zwischen Programmen übertragen. Wir prüfen, was sich bei dir sinnvoll automatisieren lässt.',
    price: 'ab 4.900 €',
    unit: 'je Projekt · netto',
    href: '/projekt-starten?service=KI%20%26%20Automation',
    cta: 'Aufgabe beschreiben',
    items: [
      'Deinen heutigen Ablauf verstehen',
      'Passende Programme und Daten verbinden',
      'Lösung mit Kontroll- und Freigabeschritten',
    ],
    second: 'Noch keine konkrete Aufgabe im Kopf?',
    secondHref: '/ki-automation',
    secondLabel: 'Beispiele für Automatisierung',
    number: '04',
  },
];
export function OfferGuide() {
  return (
    <Tabs defaultValue="website" className="c-guide">
      <TabsList className="c-goal-tabs" aria-label="Dein Ziel auswählen">
        {offers.map((o) => (
          <TabsTrigger key={o.id} value={o.id}>
            <GlassIcon icon={o.icon} />
            {o.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {offers.map((o) => (
        <TabsContent value={o.id} key={o.id} className="c-offer-panel">
          <div className="s-offer-story">
            <div className="c-offer-top">
              <span>{o.eyebrow}</span>
            </div>
            <h2>{o.title}</h2>
            <p className="c-offer-description">{o.description}</p>
          </div>
          <div className="s-offer-details">
            <ul>
              {o.items.map((item) => (
                <li key={item}>
                  <Check size={17} strokeWidth={2.2} />
                  {item}
                </li>
              ))}
            </ul>
            <div className="c-offer-price">
              <strong>{o.price}</strong>
              <span>{o.unit}</span>
            </div>
            <a href={o.href} className="c-button c-button-blue">
              {o.cta}
              <ArrowUpRight size={20} />
            </a>
            <p className="c-offer-disclaimer">
              Preisorientierung. Leistungsumfang vor Start bestätigen.
            </p>
            <div className="c-offer-alternative">
              <span>{o.second}</span>
              <a href={o.secondHref}>
                {o.secondLabel} <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
