'use client';

import React from 'react';

const partners = [
  '/assets/logo_branco_tagline.svg',
  '/assets/logo-evostack-color-dark.svg',
  '/assets/Boitel-Ribas-Agropecuaria.png',
  '/assets/logotipo-degustus-white.png',
];

const rotatedPartners = [
  partners[partners.length - 1],
  ...partners.slice(0, partners.length - 1),
];

const marqueePartners = [...rotatedPartners, ...rotatedPartners, ...rotatedPartners];

export function PartnersSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-good-times text-foreground mb-8 text-center">
          Nossos
          {' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">Parceiros</span>
        </h2>

        <div className="relative overflow-hidden">
          <div className="flex items-center gap-12 animate-marquee will-change-transform">
            {marqueePartners.map((src, idx) => (
              <div
                key={`partner-${idx}`}
                className="h-12 sm:h-14 w-48 flex items-center justify-center flex-shrink-0"
                aria-hidden={idx >= rotatedPartners.length}
              >
                <img
                  src={src}
                  alt="Parceiro"
                  className="max-h-10 sm:max-h-12 w-auto opacity-80 hover:opacity-100 transition-opacity object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

 