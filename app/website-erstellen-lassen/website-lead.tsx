'use client';
import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { InquiryForm } from '../inquiry-form';
import { resolveInquiryInterest } from '../../lib/inquiry-options';
import { leadOffers } from './lead-offers';
import { money } from '../site-data';
import { useInquiryStatus } from '../use-inquiry-status';

export function LeadForm({
  initialPackage = '',
  initialService = 'Website',
}: {
  initialPackage?: string;
  initialService?: string;
}) {
  return (
    <InquiryForm
      initialInterest={resolveInquiryInterest(initialPackage, initialService)}
    />
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
