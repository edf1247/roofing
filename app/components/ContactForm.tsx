'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function ContactForm() {
  const [wantsInspection, setWantsInspection] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2">
          <AnimatedSection>
            <h2 id="contact-heading" className="section-heading">
              Get Your Free Quote
            </h2>
            <p className="section-subheading">
              Fill out the form and we&apos;ll get back to you quickly. Or call us for same-day estimates.
            </p>
            <div className="mt-8 space-y-4">
              <a
                href="tel:+14015550123"
                className="flex items-center gap-3 text-primary hover:text-accent"
              >
                <Phone className="h-5 w-5 shrink-0" aria-hidden />
                <span className="font-medium">(401) 555-0123</span>
              </a>
              <a
                href="mailto:info@example-roofing.com"
                className="flex items-center gap-3 text-primary hover:text-accent"
              >
                <Mail className="h-5 w-5 shrink-0" aria-hidden />
                <span className="font-medium">info@example-roofing.com</span>
              </a>
              <div className="flex items-start gap-3 text-slate-warm">
                <MapPin className="h-5 w-5 shrink-0 mt-0.5" aria-hidden />
                <span>Serving Providence and surrounding Rhode Island areas</span>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            {submitted && (
              <div className="mb-6 rounded-xl border border-accent/30 bg-accent/5 px-6 py-4 text-accent">
                <p className="font-semibold">Thanks! We&apos;ll call you within 24 hours to schedule your free inspection.</p>
              </div>
            )}
            <form
              className="rounded-xl bg-white p-6 shadow-sm sm:p-8"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-primary">
                    Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-accent focus:ring-1 focus:ring-accent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-medium text-primary">
                    Phone *
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    required
                    className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-accent focus:ring-1 focus:ring-accent"
                    placeholder="(401) 555-0123"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="contact-email" className="block text-sm font-medium text-primary">
                  Email *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-accent focus:ring-1 focus:ring-accent"
                  placeholder="you@example.com"
                />
              </div>
              <div className="mt-4">
                <label htmlFor="contact-message" className="block text-sm font-medium text-primary">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-accent focus:ring-1 focus:ring-accent"
                  placeholder="Describe your roofing needs..."
                />
              </div>
              <div className="mt-4 flex items-start gap-3">
                <input
                  id="contact-inspection"
                  type="checkbox"
                  name="inspection"
                  checked={wantsInspection}
                  onChange={(e) => setWantsInspection(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-accent focus:ring-accent"
                />
                <label htmlFor="contact-inspection" className="text-sm text-primary">
                  Schedule Free Roof Inspection
                </label>
              </div>
              <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
                Get Your Free Quote
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
