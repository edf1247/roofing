'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#why-choose-us', label: 'Why Us' },
  { href: '#before-after', label: 'Gallery' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-cream/95 backdrop-blur-sm"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label="Home">
          <div className="relative h-10 w-10 rounded-lg bg-primary">
            <Image
              src="/logo.svg"
              alt="Roofing company logo"
              width={40}
              height={40}
              className="rounded-lg object-contain p-1"
            />
          </div>
          <span className="font-bold text-primary">Roofing Experts</span>
        </Link>

        <div className="hidden md:flex md:items-center md:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-primary transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+14015550123"
            className="btn-primary flex items-center gap-2 text-sm"
          >
            <Phone className="h-4 w-4" aria-hidden />
            Free Inspection
          </a>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-primary hover:bg-slate-100 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-slate-200 bg-cream md:hidden ${mobileOpen ? 'block' : 'hidden'}`}
        role="region"
        aria-label="Mobile menu"
      >
        <div className="flex flex-col gap-1 px-4 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-3 font-medium text-primary hover:bg-slate-100"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+14015550123"
            className="btn-primary mt-2 flex items-center justify-center gap-2"
            onClick={() => setMobileOpen(false)}
          >
            <Phone className="h-4 w-4" aria-hidden />
            Free Inspection
          </a>
        </div>
      </div>
    </nav>
  );
}
