'use client';

import { Phone, X } from 'lucide-react';
import { useState } from 'react';

export default function EmergencyBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <section
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-red-600 bg-accent px-4 py-3 text-white shadow-2xl"
      aria-label="Emergency roofing assistance"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <a
          href="tel:+14015550123"
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 font-bold text-accent shadow transition hover:bg-red-50 sm:flex-none"
        >
          <Phone className="h-5 w-5" aria-hidden />
          <span className="whitespace-nowrap">Call Now</span>
        </a>
        <p className="hidden flex-1 text-center text-sm sm:block md:text-base">
          <span className="font-semibold">Storm damage or leak?</span>{' '}
          Same-day emergency repair available.
        </p>
        <button
          type="button"
          onClick={() => setVisible(false)}
          className="shrink-0 rounded p-1 text-white/80 hover:bg-white/10 hover:text-white"
          aria-label="Dismiss emergency banner"
        >
          <X className="h-5 w-5" aria-hidden />
        </button>
      </div>
    </section>
  );
}
