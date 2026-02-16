import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import StickyCallButton from '../components/StickyCallButton';
import { Wrench, CheckCircle, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Roof Repair | Providence Roofing Experts | Free Inspection',
  description:
    'Professional roof repair in Providence. Fix leaks, replace shingles, repair flashing. Same-day emergency service. Free inspection and estimate.',
  openGraph: {
    title: 'Roof Repair | Providence Roofing Experts',
    description: 'Professional roof repair. Fix leaks, replace shingles. Free inspection.',
  },
};

const benefits = [
  'Leak detection and repair',
  'Shingle replacement',
  'Flashing and valley repair',
  'Vent and skylight sealing',
  'Emergency same-day service',
  'Free inspection and estimate',
];

export default function RoofRepairPage() {
  return (
    <>
      <Navigation />
      <main>
        <section className="bg-primary px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Roof Repair in Providence
            </h1>
            <p className="mt-4 max-w-2xl text-xl text-slate-200">
              Fast, reliable roof repairs. From small leaks to storm damage, we get your roof back in shape.
            </p>
            <Link href="#contact" className="btn-primary mt-8 inline-flex bg-amber-500 text-primary hover:bg-amber-400">
              Schedule Free Inspection
            </Link>
          </div>
        </section>

        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary text-white">
                  <Wrench className="h-7 w-7" aria-hidden />
                </div>
                <h2 className="mt-6 section-heading">Professional Roof Repair</h2>
                <p className="mt-4 text-slate-warm">
                  Don&apos;t let a small problem become a big one. We diagnose and fix leaks, replace damaged
                  shingles, repair flashing, and seal around vents and skylights. Most repairs are completed
                  in a single visit.
                </p>
                <p className="mt-4 text-slate-warm">
                  Storm damage or a sudden leak? We offer same-day emergency roof repair to protect your home
                  and belongings. Call us for fast, reliable service.
                </p>
              </div>
              <div className="rounded-xl bg-slate-50 p-8">
                <h3 className="text-xl font-semibold text-primary">What We Repair</h3>
                <ul className="mt-4 space-y-3">
                  {benefits.map((item) => (
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
            <h2 className="section-heading">Get Your Free Roof Inspection</h2>
            <p className="mt-4 text-slate-warm">
              No obligation. We&apos;ll assess your roof and provide an honest estimate for any repairs needed.
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
      <StickyCallButton />
    </>
  );
}
