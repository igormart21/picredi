'use client';

import React from 'react';

const partners = [
  '/assets/logo-picredi-white.png',
  '/assets/LOGO 2.png',
  '/assets/LOGO 4.png',
  '/assets/logo-picredi-white.png',
  '/assets/LOGO 2.png',
  '/assets/LOGO 4.png',
];

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
            {partners.map((src, idx) => (
              <img
                key={`row1-${idx}`}
                src={src}
                alt="Parceiro"
                className="h-8 sm:h-10 w-auto opacity-80 hover:opacity-100 transition-opacity object-contain"
                loading="lazy"
              />
            ))}
            {/* duplicado para loop contínuo */}
            {partners.map((src, idx) => (
              <img
                key={`row1b-${idx}`}
                src={src}
                alt="Parceiro"
                className="h-8 sm:h-10 w-auto opacity-80 hover:opacity-100 transition-opacity object-contain"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

 