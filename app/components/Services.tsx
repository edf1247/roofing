import Link from 'next/link';
import { Wrench, Home, AlertCircle, ClipboardCheck } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const services = [
  {
    icon: Wrench,
    title: 'Roof Repair',
    description: 'Fix leaks, replace damaged shingles, and repair flashing. We get your roof back in shape quickly and affordably.',
    href: '/roof-repair',
    cta: 'Schedule Free Inspection',
  },
  {
    icon: Home,
    title: 'Roof Replacement',
    description: 'Full roof replacement with quality materials and workmanship. We help with insurance claims and financing.',
    href: '/roof-replacement',
    cta: 'Schedule Free Inspection',
  },
  {
    icon: AlertCircle,
    title: 'Emergency Roof Repair',
    description: 'Storm damage or sudden leak? We offer same-day emergency service to protect your home and belongings.',
    href: '#contact',
    cta: 'Schedule Free Inspection',
  },
  {
    icon: ClipboardCheck,
    title: 'Free Inspections',
    description: 'No-obligation roof inspection. We assess condition, identify issues, and provide an honest estimate.',
    href: '#contact',
    cta: 'Schedule Free Inspection',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection>
          <h2 id="services-heading" className="section-heading">
            Our Roofing Services
          </h2>
          <p className="section-subheading">
            From quick repairs to full replacements, we deliver quality work you can count on.
          </p>
        </AnimatedSection>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, description, href, cta }) => (
            <AnimatedSection key={title}>
              <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-cream/50 p-6 shadow-sm transition hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-primary">{title}</h3>
                <p className="mt-2 flex-1 text-slate-warm">{description}</p>
                <Link
                  href={href}
                  className="mt-4 inline-flex font-semibold text-accent hover:underline"
                >
                  {cta} →
                </Link>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
