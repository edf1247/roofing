import Link from 'next/link';
import { Quote, Star } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const reviews = [
  {
    name: 'Sarah M.',
    location: 'Providence',
    rating: 5,
    text: 'Same-day inspection after the storm. Crew was on time and left the yard clean. New roof looks great.',
  },
  {
    name: 'James T.',
    location: 'Cranston',
    rating: 5,
    text: 'Full replacement—helped with insurance and finished ahead of schedule. Highly recommend.',
  },
  {
    name: 'Linda K.',
    location: 'Warwick',
    rating: 5,
    text: 'They found the leak others missed, fixed it right, fair price. True pros.',
  },
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
      aria-labelledby="reviews-heading"
    >
      <div className="mx-auto max-w-7xl">
        <AnimatedSection>
          <h2 id="reviews-heading" className="section-heading">
            What Our Customers Say
          </h2>
          <p className="section-subheading">
            Real reviews from homeowners who chose us for their roofing needs.
          </p>
        </AnimatedSection>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {reviews.map(({ name, location, rating, text }) => (
            <AnimatedSection key={name}>
              <blockquote className="flex h-full flex-col rounded-xl border border-slate-200 bg-cream/30 p-6">
                <Quote className="h-10 w-10 text-slate-300" aria-hidden />
                <div className="mt-2 flex gap-1" aria-label={`${rating} out of 5 stars`}>
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-slate-warm">&ldquo;{text}&rdquo;</p>
                <footer className="mt-4 font-semibold text-primary">
                  — {name}, {location}
                </footer>
              </blockquote>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection className="mt-12 text-center">
          <Link href="#contact" className="btn-primary">
            Get Your Free Quote
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
