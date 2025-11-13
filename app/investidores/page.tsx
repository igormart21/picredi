'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Gauge,
  Rocket,
  Users,
  Coins,
  Layers,
  Smartphone,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import Link from 'next/link';

type InvestorProfile = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  bullets: string[];
};

const profiles: InvestorProfile[] = [
  {
    icon: Shield,
    title: '1. Perfil Conservador',
    description:
      'Busca preservar o patrimônio e prefere investimentos com baixo risco e previsibilidade de rendimento.',
    bullets: [
      'Características: baixa tolerância à volatilidade e foco em segurança.',
      'Indicados: RDC com garantia do FGC, LCI, LCA (isenta de IR) e Poupança.',
    ],
  },
  {
    icon: Gauge,
    title: '2. Perfil Moderado',
    description:
      'Procura equilíbrio entre segurança e rentabilidade, aceitando algum risco calculado para obter retornos melhores.',
    bullets: [
      'Características: tolerância intermediária ao risco e horizonte de investimento médio/longo prazo.',
      'Indicados: carteira diversificada com renda fixa e fundos multimercado de perfil moderado.',
    ],
  },
  {
    icon: Rocket,
    title: '3. Perfil Arrojado (ou Agressivo)',
    description:
      'Foca em maximizar retornos e aceita oscilações maiores, com visão de longo prazo e conhecimento de mercado.',
    bullets: [
      'Características: alta tolerância à volatilidade e acompanhamento ativo das aplicações.',
      'Indicados: renda variável via Home Broker (ações, FIIs, ETFs) e fundos com maior exposição, inclusive cripto.',
    ],
  },
];

const differentiators = [
  {
    icon: Users,
    title: 'Consultoria Personalizada',
    description:
      'Apoio de consultores e gerentes especializados para montar estratégias alinhadas aos objetivos de vida, sem comissionamento direto sobre os produtos.',
  },
  {
    icon: Coins,
    title: 'Participação nos Resultados',
    description:
      'O associado é dono da cooperativa: além dos rendimentos dos investimentos, participa da distribuição anual dos resultados conforme seu engajamento.',
  },
  {
    icon: Layers,
    title: 'Portfólio Diversificado',
    description:
      'Ampla oferta de produtos para atender quem busca renda fixa, previdência, fundos multimercado ou alternativas de renda variável.',
  },
];

export default function InvestidoresPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 pt-20 sm:pt-24">
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-good-times text-foreground mb-6">
              Investidores{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
                Picredi
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Descubra o seu perfil de investidor por meio do teste de suitability disponível no
              aplicativo ou no site e escolha as opções mais adequadas para o seu momento financeiro.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {profiles.map((profile, index) => {
              const IconComponent = profile.icon;

              return (
                <motion.div
                  key={profile.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card variant="luxury" className="h-full flex flex-col">
                    <CardHeader>
                      <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                        <IconComponent className="w-6 h-6 text-accent" />
                      </div>
                      <CardTitle className="text-xl">{profile.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {profile.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3 mt-auto">
                      <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                        {profile.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-2">
                            <span className="mt-1 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-accent/10 border border-accent/20 rounded-3xl p-6 sm:p-8 lg:p-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-good-times text-foreground mb-4">
              Diferenciais para o Investidor
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-10">
              Independente do perfil, você conta com consultoria próxima, participação nos resultados
              e um portfólio que cresce junto com as demandas de mercado.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {differentiators.map((item) => {
                const IconComponent = item.icon;

                return (
                  <div
                    key={item.title}
                    className="bg-background/70 border border-border rounded-2xl p-6 flex flex-col hover:border-accent/40 transition-colors"
                  >
                    <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 flex flex-col items-center space-y-4">
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Smartphone className="w-5 h-5 text-accent" />
                <span>
                  Faça o teste de perfil no app ou no site do Picredi e descubra a estratégia ideal
                  para você.
                </span>
              </div>
              <Link
                href="/ajuda"
                className="inline-flex items-center text-sm font-medium text-secondary hover:underline"
              >
                Acessar canais de atendimento
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

