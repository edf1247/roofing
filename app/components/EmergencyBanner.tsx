import { AlertTriangle, Phone } from 'lucide-react';

export default function EmergencyBanner() {
  return (
    <section
      className="bg-accent px-4 py-4 text-white"
      aria-label="Emergency roofing assistance"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row sm:gap-6">
        <div className="flex items-center gap-3">
          <AlertTriangle className="h-8 w-8 shrink-0" aria-hidden />
          <div>
            <p className="font-semibold">Storm damage or leak? We&apos;re here to help.</p>
            <p className="text-sm text-red-100">
              Same-day emergency roof repair available. Don&apos;t wait—protect your home now.
            </p>
          </div>
        </div>
        <a
          href="tel:+14015550123"
          className="flex shrink-0 items-center gap-2 rounded-lg bg-white px-5 py-3 font-bold text-accent shadow-lg transition hover:bg-red-50"
        >
          <Phone className="h-5 w-5" aria-hidden />
          Call Now for Emergency Repairs
        </a>
      </div>
    </section>
  );
}
