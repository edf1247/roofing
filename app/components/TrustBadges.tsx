import { Shield, Clock, ClipboardCheck, AlertCircle } from 'lucide-react';

const badges = [
  { icon: Shield, label: 'Licensed & Insured' },
  { icon: Clock, label: '20+ Years Experience' },
  { icon: ClipboardCheck, label: 'Free Estimates' },
  { icon: AlertCircle, label: 'Emergency Repairs' },
];

export default function TrustBadges() {
  return (
    <section
      className="border-b border-slate-200 bg-white px-4 py-8 sm:px-6 lg:px-8"
      aria-label="Trust badges"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {badges.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 text-primary"
            >
              <Icon className="h-6 w-6 shrink-0 text-accent" aria-hidden />
              <span className="text-sm font-semibold sm:text-base">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
