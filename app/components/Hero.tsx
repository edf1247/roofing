import Link from 'next/link';
import { Shield, Star, Clock, ClipboardCheck } from 'lucide-react';

const trustBadges = [
  { icon: Shield, label: 'Licensed & Insured' },
  { icon: Star, label: '5-Star Rated' },
  { icon: Clock, label: '20+ Years Experience' },
  { icon: ClipboardCheck, label: 'Free Inspections' },
];

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary px-4 py-16 text-white sm:px-6 sm:py-24 lg:px-8 lg:py-32"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 opacity-10" aria-hidden style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <h1 id="hero-heading" className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Providence&apos;s Trusted Roofing Experts
          </h1>
          <p className="mt-4 text-xl text-slate-200 sm:text-2xl">
            Free Inspections & Same-Day Estimates
          </p>
          <p className="mt-2 text-slate-300">
            Quality roof repair and replacement. Licensed, insured, and ready to protect your home.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="#contact" className="btn-primary bg-amber-500 text-primary hover:bg-amber-400 focus:ring-amber-500">
              Get Free Roof Inspection
            </Link>
            <a href="tel:+14015550123" className="btn-secondary border-white text-white hover:bg-white hover:text-primary">
              Call (401) 555-0123
            </a>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {trustBadges.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-lg bg-white/10 px-4 py-3 backdrop-blur sm:px-5 sm:py-4"
            >
              <Icon className="h-8 w-8 shrink-0 text-amber-400" aria-hidden />
              <span className="text-sm font-medium sm:text-base">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
