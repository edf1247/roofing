import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Home, CheckCircle, Percent, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Roof Replacement | Providence Roofing Experts | Free Estimate',
  description:
    'Full roof replacement in Providence. Quality materials, 10-year workmanship warranty. 0% financing available. Free inspection and estimate.',
  openGraph: {
    title: 'Roof Replacement | Providence Roofing Experts',
    description: 'Full roof replacement. Quality materials, warranty, financing. Free estimate.',
  },
};

const benefits = [
  'Full tear-off and replacement',
  'Premium architectural shingles',
  '10-year workmanship warranty',
  'Manufacturer material warranty',
  'Insurance claim assistance',
  '0% financing available',
];

export default function RoofReplacementPage() {
  return (
    <>
      <Navigation />
      <main>
        <section className="bg-primary px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Roof Replacement in Providence
            </h1>
            <p className="mt-4 max-w-2xl text-xl text-slate-200">
              A new roof is a major investment. We make it straightforward with quality materials, expert
              installation, and flexible financing.
            </p>
            <Link href="#contact" className="btn-primary mt-8 inline-flex bg-amber-500 text-primary hover:bg-amber-400">
              Get Your Free Estimate
            </Link>
          </div>
        </section>

        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary text-white">
                  <Home className="h-7 w-7" aria-hidden />
                </div>
                <h2 className="mt-6 section-heading">Full Roof Replacement</h2>
                <p className="mt-4 text-slate-warm">
                  When repair isn&apos;t enough, a full replacement protects your home for decades. We use
                  premium architectural shingles and quality underlayment, and we handle the full tear-off,
                  disposal, and cleanup.
                </p>
                <p className="mt-4 text-slate-warm">
                  We work with your insurance company when storm damage is involved and offer 0% financing
                  so you can get a new roof without the upfront strain. Payments as low as $99/month.
                </p>
              </div>
              <div className="rounded-xl bg-slate-50 p-8">
                <h3 className="text-xl font-semibold text-primary">What You Get</h3>
                <ul className="mt-4 space-y-3">
                  {benefits.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 shrink-0 text-accent" aria-hidden />
                      <span className="text-slate-warm">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center gap-2 rounded-lg bg-primary/5 p-4">
                  <Percent className="h-8 w-8 text-accent" aria-hidden />
                  <div>
                    <p className="font-semibold text-primary">0% Financing Available</p>
                    <p className="text-sm text-slate-warm">Qualified buyers. Payments as low as $99/mo.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="section-heading">Get Your Free Roof Replacement Quote</h2>
            <p className="mt-4 text-slate-warm">
              We&apos;ll inspect your roof, discuss options, and provide a detailed estimate. No obligation.
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
