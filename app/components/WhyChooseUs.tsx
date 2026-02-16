import { Award, Shield, Users, Clock } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const stats = [
  { value: '20+', label: 'Years Experience' },
  { value: '2,500+', label: 'Roofs Completed' },
  { value: '5-Star', label: 'Rated' },
  { value: '100%', label: 'Satisfaction Focus' },
];

const features = [
  {
    icon: Award,
    title: 'Licensed & Insured',
    description: 'Fully licensed roofing contractor with comprehensive liability and workers comp insurance.',
  },
  {
    icon: Shield,
    title: 'Quality Materials',
    description: 'We use top-tier shingles and materials from trusted manufacturers with strong warranties.',
  },
  {
    icon: Users,
    title: 'Local & Trusted',
    description: 'Providence-area team that stands behind every job. Your neighbors recommend us.',
  },
  {
    icon: Clock,
    title: 'On-Time & Clean',
    description: 'We respect your schedule and leave your property cleaner than we found it.',
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
      aria-labelledby="why-heading"
    >
      <div className="mx-auto max-w-7xl">
        <AnimatedSection>
          <h2 id="why-heading" className="section-heading">
            Why Choose Us
          </h2>
          <p className="section-subheading">
            Experience, integrity, and results—the roofing team Providence trusts.
          </p>
        </AnimatedSection>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ value, label }) => (
            <AnimatedSection key={label}>
              <div className="rounded-xl bg-white p-6 text-center shadow-sm">
                <p className="text-3xl font-bold text-accent sm:text-4xl">{value}</p>
                <p className="mt-1 text-slate-warm">{label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, description }) => (
            <AnimatedSection key={title}>
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-white">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <div>
                  <h3 className="font-semibold text-primary">{title}</h3>
                  <p className="mt-1 text-sm text-slate-warm">{description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
