import { MapPin } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const areas = [
  'Providence',
  'Cranston',
  'Warwick',
  'Pawtucket',
  'East Providence',
  'Woonsocket',
  'North Providence',
  'Johnston',
  'Bristol',
  'Barrington',
  'Newport',
  'South Kingstown',
];

export default function ServiceAreas() {
  return (
    <section
      id="service-areas"
      className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
      aria-labelledby="areas-heading"
    >
      <div className="mx-auto max-w-7xl">
        <AnimatedSection>
          <h2 id="areas-heading" className="section-heading">
            Areas We Serve
          </h2>
          <p className="section-subheading">
            Proudly serving Providence and surrounding Rhode Island communities.
          </p>
        </AnimatedSection>
        <AnimatedSection className="mt-12">
          <div className="flex flex-wrap justify-center gap-3">
            {areas.map((area) => (
              <div
                key={area}
                className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm"
              >
                <MapPin className="h-4 w-4 text-accent" aria-hidden />
                <span className="font-medium text-primary">{area}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-slate-warm">
            Don&apos;t see your town? Give us a call—we may still serve your area.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
