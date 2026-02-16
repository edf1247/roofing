'use client';

import { Phone } from 'lucide-react';

export default function StickyCallButton() {
  return (
    <a
      href="tel:+14015550123"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-white shadow-lg transition hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 md:bottom-8 md:right-8"
      aria-label="Call for free inspection"
    >
      <Phone className="h-5 w-5" aria-hidden />
      <span className="font-semibold">Free Inspection</span>
    </a>
  );
}
