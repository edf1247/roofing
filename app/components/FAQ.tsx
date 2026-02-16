'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const faqs = [
  {
    question: 'Do you offer free roof inspections?',
    answer:
      'Yes. We provide no-obligation free roof inspections. We\'ll assess your roof\'s condition, identify any issues, and give you an honest estimate. No pressure—just the information you need to decide.',
  },
  {
    question: 'How do I know if I have storm damage?',
    answer:
      'After a storm, look for missing or cracked shingles, dents in metal flashing, or granules in gutters. The best way to know is a professional inspection. We can document damage for insurance claims.',
  },
  {
    question: 'Do you work with insurance companies?',
    answer:
      'Yes. We work with all major insurers and can help you through the claim process. We provide detailed estimates and documentation and can meet with adjusters when needed.',
  },
  {
    question: 'What financing options do you offer?',
    answer:
      'We offer 0% financing for qualified buyers and monthly payment plans. Payments can be as low as $99/month depending on the project. Ask us for details when you get your quote.',
  },
  {
    question: 'What warranty do you provide?',
    answer:
      'We offer a 10-year workmanship warranty on our installations. Materials come with manufacturer warranties—often 25 to 50 years for premium shingles. Our warranty is transferable if you sell your home.',
  },
  {
    question: 'How long does a roof replacement take?',
    answer:
      'Most standard residential roof replacements are completed in 1–2 days, depending on size and weather. We\'ll give you a timeline when we provide your estimate.',
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl">
        <AnimatedSection>
          <h2 id="faq-heading" className="section-heading">
            Frequently Asked Questions
          </h2>
          <p className="section-subheading">
            Common questions about roof repair, replacement, financing, and warranties.
          </p>
        </AnimatedSection>
        <div className="mt-12 space-y-2">
          {faqs.map((faq, i) => (
            <AnimatedSection key={i}>
              <div className="rounded-lg border border-slate-200 overflow-hidden">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 bg-cream/50 px-4 py-4 text-left font-semibold text-primary hover:bg-cream/80"
                  onClick={() => setOpenId(openId === i ? null : i)}
                  aria-expanded={openId === i}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-question-${i}`}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 transition-transform ${openId === i ? 'rotate-180' : ''}`}
                    aria-hidden
                  />
                </button>
                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-question-${i}`}
                  className={`overflow-hidden transition-all duration-200 ${openId === i ? 'max-h-96' : 'max-h-0'}`}
                >
                  <p className="border-t border-slate-200 bg-white px-4 py-4 text-slate-warm">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
