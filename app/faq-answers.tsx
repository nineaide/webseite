'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function FAQAnswers({ items }: { items: string[][] }) {
  return (
    <Accordion multiple className="faq-answers">
      {items.map(([question, answer]) => (
        <AccordionItem key={question} value={question} className="faq-item">
          <AccordionTrigger className="faq-trigger">
            {question}
            <span className="faq-plus" aria-hidden="true">
              +
            </span>
          </AccordionTrigger>
          <AccordionContent keepMounted className="faq-answer">
            <p>{answer}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
