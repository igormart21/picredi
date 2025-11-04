import Hero from '@/components/sections/Hero';
import { StatsSection, FeaturesSection } from '@/components/sections/StatsSection';
import { ProductsShowcase } from '@/components/sections/ProductsShowcase';
import { DigitalExperience } from '@/components/sections/DigitalExperience';
import { CompleteSolutions } from '@/components/sections/CompleteSolutions';
import { TechSecuritySection } from '@/components/sections/TechSecuritySection';
import { PartnersSection } from '@/components/sections/PartnersSection';
import { CoreBanking } from '@/components/sections/CoreBanking';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Início',
  description: 'Descubra uma nova era bancária com tecnologia de ponta, segurança incomparável e atendimento personalizado. Seu dinheiro, sua vida, simplificada.',
  openGraph: {
    title: 'Picredi - O Futuro do Banking Digital',
    description: 'Descubra uma nova era bancária com tecnologia de ponta, segurança incomparável e atendimento personalizado.',
    images: ['/og-home.jpg'],
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <DigitalExperience />
      <StatsSection />
      <FeaturesSection />
      <ProductsShowcase />
      <CompleteSolutions />
      <PartnersSection />
      <CoreBanking />
      <TechSecuritySection />
    </>
  );
}
