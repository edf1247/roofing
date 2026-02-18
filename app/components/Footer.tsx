import Link from 'next/link';
import { Phone, Mail } from 'lucide-react';

const footerLinks = [
  { href: '#services', label: 'Services' },
  { href: '#why-choose-us', label: 'Why Us' },
  { href: '#before-after', label: 'Gallery' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

const serviceLinks = [
  { href: '/roof-repair', label: 'Roof Repair' },
  { href: '/roof-replacement', label: 'Roof Replacement' },
  { href: '/storm-damage', label: 'Storm Damage' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold">Roofing Experts</h3>
            <p className="mt-2 text-sm text-slate-300">
              Providence&apos;s trusted roofing company. Free inspections, quality work, and peace of mind.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-slate-300 hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Services</h3>
            <ul className="mt-4 space-y-2">
              {serviceLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-slate-300 hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="tel:+14015550123" className="flex items-center gap-2 text-sm text-slate-300 hover:text-white">
                  <Phone className="h-4 w-4" aria-hidden />
                  (401) 555-0123
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@example-roofing.com"
                  className="flex items-center gap-2 text-sm text-slate-300 hover:text-white"
                >
                  <Mail className="h-4 w-4" aria-hidden />
                  info@example-roofing.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-700 pt-8 text-center text-sm text-slate-400">
          <p>© {currentYear} Roofing Experts. All rights reserved. Licensed & Insured.</p>
        </div>
      </div>
    </footer>
  );
}
