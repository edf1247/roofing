'use client';

import { Phone } from 'lucide-react';

export default function StickyCallButton() {
  return (
    <a
      href="tel:+14015550123"
      className="fixed bottom-16 right-4 z-30 flex items-center gap-2 rounded-full bg-accent px-4 py-2.5 text-white shadow-lg transition hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 sm:bottom-[4.5rem] sm:right-6 sm:px-5 sm:py-3 md:bottom-20 md:right-8"
      aria-label="Call for free inspection"
    >
      <Phone className="h-5 w-5" aria-hidden />
      <span className="font-semibold">Free Inspection</span>
    </a>
  );
}
