import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { AlertCircle, CheckCircle, FileCheck, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Storm Damage Repair | Providence Roofing Experts | Emergency Service',
  description:
    'Storm damage roof repair in Providence and Rhode Island. Emergency inspections, insurance claim help, same-day service. Free assessment.',
  openGraph: {
    title: 'Storm Damage Repair | Providence Roofing Experts',
    description: 'Emergency storm damage repair. Insurance assistance. Free inspection.',
  },
};

const afterStormChecklist = [
  'Document damage with photos before making temporary repairs',
  'Check for missing or lifted shingles, dents in metal, and debris',
  'Look for water stains on ceilings or in attic',
  'Call us for a free inspection—we document damage for insurance',
];

const insuranceBenefits = [
  'Free inspection and written estimate',
  'Photo and written documentation for your claim',
  'We work with all major insurance companies',
  'Can meet with adjusters when needed',
];

export default function StormDamagePage() {
  return (
    <>
      <Navigation />
      <main>
        <section className="bg-primary px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Storm Damage Repair in Providence
            </h1>
            <p className="mt-4 max-w-2xl text-xl text-slate-200">
              Wind, hail, or fallen branches? We offer emergency inspections and repairs to protect your home fast.
            </p>
            <a
              href="tel:+14015550123"
              className="btn-primary mt-8 inline-flex bg-accent text-white hover:bg-accent-hover"
            >
              Call Now for Emergency Inspection
            </a>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-accent/10 px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl items-center gap-4">
            <AlertCircle className="h-10 w-10 shrink-0 text-accent" aria-hidden />
            <div>
              <h2 className="font-semibold text-primary">Same-Day Emergency Service</h2>
              <p className="text-sm text-slate-warm">
                Storm damage doesn&apos;t wait. We prioritize emergency calls and can often inspect the same day. Call (401) 555-0123.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="section-heading">What to Do After a Storm</h2>
                <p className="mt-4 text-slate-warm">
                  After high winds, hail, or heavy rain, your roof may have damage that isn&apos;t obvious from the ground.
                  Follow these steps and get a professional inspection so you have documentation for insurance.
                </p>
                <ul className="mt-6 space-y-3">
                  {afterStormChecklist.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 shrink-0 text-accent mt-0.5" aria-hidden />
                      <span className="text-slate-warm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl bg-slate-50 p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary text-white">
                  <FileCheck className="h-7 w-7" aria-hidden />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-primary">Insurance Claim Assistance</h3>
                <p className="mt-4 text-slate-warm">
                  We help Rhode Island homeowners through the insurance process. We provide the documentation
                  you need and work with your carrier so you can focus on getting your roof fixed.
                </p>
                <ul className="mt-6 space-y-3">
                  {insuranceBenefits.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 shrink-0 text-accent" aria-hidden />
                      <span className="text-slate-warm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="section-heading">Free Storm Damage Inspection</h2>
            <p className="mt-4 text-slate-warm">
              No obligation. We&apos;ll assess damage, document it for your claim, and give you an honest estimate for repairs.
            </p>
            <a href="tel:+14015550123" className="btn-primary mt-8 inline-flex items-center gap-2">
              <Phone className="h-5 w-5" aria-hidden />
              Call (401) 555-0123
            </a>
            <p className="mt-4">
              <Link href="/#contact" className="font-medium text-accent hover:underline">
                Or fill out our contact form →
              </Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
