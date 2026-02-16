import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Providence's Trusted Roofing Experts | Free Inspections & Same-Day Estimates",
  description:
    'Licensed & insured roofing company in Providence. Free roof inspections, repairs, replacements. 20+ years experience. 0% financing available. Call for same-day estimates.',
  keywords: [
    'roofing Providence',
    'roof repair',
    'roof replacement',
    'free roof inspection',
    'storm damage roof',
    'emergency roof repair',
  ],
  openGraph: {
    title: "Providence's Trusted Roofing Experts | Free Inspections & Same-Day Estimates",
    description:
      'Licensed & insured roofing company. Free inspections, repairs, replacements. 20+ years experience. Call for same-day estimates.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Providence's Trusted Roofing Experts",
    description: 'Free roof inspections, repairs & replacements. 20+ years experience.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://example-roofing.com',
  },
};

const localBusinessStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'RoofingContractor',
  name: "Providence's Trusted Roofing Experts",
  description: 'Licensed & insured roofing company offering free inspections, repairs, and replacements.',
  url: 'https://example-roofing.com',
  telephone: '+1-401-555-0123',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Providence',
    addressRegion: 'RI',
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'City', name: 'Providence', containedInPlace: { '@type': 'State', name: 'Rhode Island' } },
    { '@type': 'City', name: 'Cranston' },
    { '@type': 'City', name: 'Warwick' },
  ],
  priceRange: '$$',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '07:00',
    closes: '18:00',
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessStructuredData) }}
        />
      </head>
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
