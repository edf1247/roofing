import { ShieldCheck, FileCheck, Home } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const warrantyItems = [
  {
    icon: ShieldCheck,
    title: '10-Year Workmanship Warranty',
    description: 'We stand behind our installation. Our workmanship is backed by a 10-year warranty on labor.',
  },
  {
    icon: FileCheck,
    title: 'Manufacturer Warranty',
    description: 'Premium shingles come with strong manufacturer warranties—we use materials you can trust.',
  },
  {
    icon: Home,
    title: 'Transferable Warranty',
    description: 'Selling your home? Our warranty can transfer to the new owner, adding value to your sale.',
  },
];

export default function Warranty() {
  return (
    <section
      id="warranty"
      className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
      aria-labelledby="warranty-heading"
    >
      <div className="mx-auto max-w-7xl">
        <AnimatedSection>
          <h2 id="warranty-heading" className="section-heading">
            Our Warranty Promise
          </h2>
          <p className="section-subheading">
            Quality work deserves a strong guarantee. We back every roof we install.
          </p>
        </AnimatedSection>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {warrantyItems.map(({ icon: Icon, title, description }) => (
            <AnimatedSection key={title}>
              <div className="flex flex-col items-center rounded-xl bg-white p-8 text-center shadow-sm">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
                  <Icon className="h-8 w-8" aria-hidden />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-primary">{title}</h3>
                <p className="mt-2 text-slate-warm">{description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
