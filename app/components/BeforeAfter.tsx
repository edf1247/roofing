'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface GalleryItem {
  id: string;
  before: string;
  after: string;
  title: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: '1',
    before: 'https://eriehome.com/wp-content/uploads/2023/09/1-After-800x450.jpg',
    after: 'https://eriehome.com/wp-content/uploads/2023/09/1-Before.jpg',
    title: 'Full Shingle Replacement',
    description: 'Providence residence—architectural shingles, full tear-off and replacement.',
  },
  {
    id: '2',
    before: 'https://eriehome.com/wp-content/uploads/2023/09/11-After.jpg',
    after: 'https://eriehome.com/wp-content/uploads/2023/09/11-Before.jpg',
    title: 'Storm Damage Repair',
    description: 'Post-storm repair and re-shingling of damaged sections.',
  },
  {
    id: '3',
    before: 'https://eriehome.com/wp-content/uploads/2023/09/13-After.jpg',
    after: 'https://eriehome.com/wp-content/uploads/2023/09/13-Before.jpg',
    title: 'Leak Repair & Flashing',
    description: 'Valley and flashing repair with matching shingles.',
  },
  {
    id: '4',
    before: 'https://eriehome.com/wp-content/uploads/2023/09/6-After.jpg',
    after: 'https://eriehome.com/wp-content/uploads/2023/09/6-Before.jpg',
    title: 'Aged Roof Replacement',
    description: '20-year roof replaced with premium architectural shingles.',
  },
];

function BeforeAfterSlider({ item }: { item: GalleryItem }) {
  const [position, setPosition] = useState(50);

  const handleMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const x = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
      setPosition(x);
    },
    []
  );

  return (
    <div
      className="relative aspect-[4/3] w-full max-w-2xl overflow-hidden rounded-xl bg-slate-200 mx-auto"
      onMouseMove={handleMove}
      onMouseLeave={() => setPosition(50)}
      onTouchStart={(e) => {
        const touch = e.touches[0];
        const rect = e.currentTarget.getBoundingClientRect();
        const x = Math.max(0, Math.min(100, ((touch.clientX - rect.left) / rect.width) * 100));
        setPosition(x);
      }}
      onTouchMove={(e) => {
        const touch = e.touches[0];
        const rect = e.currentTarget.getBoundingClientRect();
        const x = Math.max(0, Math.min(100, ((touch.clientX - rect.left) / rect.width) * 100));
        setPosition(x);
      }}
    >
      <div className="absolute inset-0">
        <Image
          src={item.before}
          alt={`${item.title} - before`}
          fill
          className="object-cover"
          sizes="(max-width: 672px) 100vw, 672px"
        />
      </div>
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        <Image
          src={item.after}
          alt={`${item.title} - after`}
          fill
          className="object-cover"
          sizes="(max-width: 672px) 100vw, 672px"
        />
      </div>
      <div
        className="absolute top-0 bottom-0 w-1 bg-accent shadow-lg"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
        aria-hidden
      >
        <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-accent bg-white shadow" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-between bg-gradient-to-t from-black/70 to-transparent px-3 py-2 text-sm text-white">
        <span>Before</span>
        <span>After</span>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  const [index, setIndex] = useState(0);
  const item = galleryItems[index];

  return (
    <section
      id="before-after"
      className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto max-w-7xl">
        <AnimatedSection>
          <h2 id="gallery-heading" className="section-heading">
            Before & After
          </h2>
          <p className="section-subheading">
            See the quality of our work. Real projects from real customers.
          </p>
        </AnimatedSection>
        <AnimatedSection className="mt-12 max-w-2xl mx-auto">
          <BeforeAfterSlider item={item} />
          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-semibold text-primary">{item.title}</h3>
              <p className="text-sm text-slate-warm">{item.description}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIndex((i) => (i === 0 ? galleryItems.length - 1 : i - 1))}
                className="rounded-full p-2 text-primary hover:bg-slate-100"
                aria-label="Previous project"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <span className="text-sm text-slate-warm">
                {index + 1} / {galleryItems.length}
              </span>
              <button
                type="button"
                onClick={() => setIndex((i) => (i === galleryItems.length - 1 ? 0 : i + 1))}
                className="rounded-full p-2 text-primary hover:bg-slate-100"
                aria-label="Next project"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
