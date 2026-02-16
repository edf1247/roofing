import Link from 'next/link';
import { CreditCard, Percent, Calendar } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function Financing() {
  return (
    <section
      id="financing"
      className="bg-primary px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-24"
      aria-labelledby="financing-heading"
    >
      <div className="mx-auto max-w-7xl">
        <AnimatedSection>
          <h2 id="financing-heading" className="section-heading text-white">
            Flexible Financing Available
          </h2>
          <p className="section-subheading text-slate-200">
            Quality roofing shouldn&apos;t break the bank. We offer financing options to fit your budget.
          </p>
        </AnimatedSection>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <AnimatedSection>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-amber-500 text-primary">
                <Percent className="h-6 w-6" aria-hidden />
              </div>
              <div>
                <h3 className="font-semibold">0% Financing Available</h3>
                <p className="mt-1 text-sm text-slate-200">
                  Qualified buyers can take advantage of 0% APR promotional financing on roof replacements.
                </p>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-amber-500 text-primary">
                <CreditCard className="h-6 w-6" aria-hidden />
              </div>
              <div>
                <h3 className="font-semibold">Payments as Low as $99/mo</h3>
                <p className="mt-1 text-sm text-slate-200">
                  Spread the cost over time. Get a new roof now and pay in manageable monthly payments.
                </p>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-amber-500 text-primary">
                <Calendar className="h-6 w-6" aria-hidden />
              </div>
              <div>
                <h3 className="font-semibold">Quick Approval</h3>
                <p className="mt-1 text-sm text-slate-200">
                  Apply in minutes. We work with leading financing partners to get you approved fast.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
        <AnimatedSection className="mt-12 text-center">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg bg-amber-500 px-6 py-3 font-semibold text-primary hover:bg-amber-400"
          >
            Get Your Free Quote & Check Options
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
