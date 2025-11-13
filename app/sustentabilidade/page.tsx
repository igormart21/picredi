'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Building2, Sun, Coins, HeartHandshake, BookOpenCheck, Sprout, FileText, Smartphone } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import Link from 'next/link';

interface InitiativeCard {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  bullets: string[];
}

const initiatives: InitiativeCard[] = [
  {
    icon: Sun,
    title: '1. Finanças Sustentáveis e Economia Verde',
    description:
      'Linhas de crédito que fomentam projetos de energia renovável e economia verde, apoiando a transição para modelos responsáveis.',
    bullets: [
      'Crédito para energia solar: financiamento de sistemas fotovoltaicos para empresas e produtores.',
      'Carteira de crédito verde robusta, com captações junto a instituições internacionais como o IFC.',
      'Campanha “Fique no Verde”: renegociação de débitos para sustentabilidade financeira dos associados.',
    ],
  },
  {
    icon: HeartHandshake,
    title: '2. Programas Sociais e Educacionais',
    description:
      'Projetos da Fundação Picredi fortalecem a educação cooperativa, a inclusão e o desenvolvimento das comunidades.',
    bullets: [
      'A União Faz a Vida: educação cooperativa para crianças e adolescentes.',
      'Cooperação na Ponta do Lápis: educação financeira com foco sustentável.',
      'Comitês Mulher e Jovem: incentivo à liderança e protagonismo desses públicos.',
    ],
  },
  {
    icon: Sprout,
    title: '3. Gestão Ambiental e Mudanças Climáticas',
    description:
      'Iniciativas para neutralizar emissões, reaproveitar recursos e digitalizar processos, reduzindo impactos ambientais.',
    bullets: [
      'Projeto Guatapará: reaproveitamento de gás de aterro sanitário para geração de eletricidade.',
      'Projeto Maracá: produção de energia a partir de biomassa renovável.',
      'Digitalização de processos com redução significativa do uso de papel.',
    ],
  },
];

const transparencyLinks = [
  {
    icon: FileText,
    title: 'Relatório de Sustentabilidade',
    description:
      'Publicado anualmente, detalha iniciativas e resultados ESG, reforçando a transparência com associados e comunidades.',
    href: '/ajuda',
  },
  {
    icon: Smartphone,
    title: 'Canal de Atendimento',
    description:
      'Fale com especialistas ou consulte materiais sobre sustentabilidade nos canais digitais do Picredi.',
    href: '/ajuda',
  },
];

export default function SustentabilidadePage() {
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
              Sustentabilidade{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
                Picredi
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              A sustentabilidade é um pilar central do cooperativismo Picredi, conectando impacto
              econômico, social e ambiental com governança de excelência.
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
            {initiatives.map((initiative, index) => {
              const IconComponent = initiative.icon;

              return (
                <motion.div
                  key={initiative.title}
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
                      <CardTitle className="text-xl">{initiative.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {initiative.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3 mt-auto">
                      <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                        {initiative.bullets.map((bullet) => (
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-accent/10 border border-accent/20 rounded-3xl p-6 sm:p-8 lg:p-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-good-times text-foreground mb-4">
              Transparência e Relatórios
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-10">
              A estratégia ESG do Picredi é guiada por frameworks internacionais como o GRI,
              reforçando o compromisso com a prestação de contas e a criação de valor compartilhado.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {transparencyLinks.map((link) => {
                const IconComponent = link.icon;

                return (
                  <div
                    key={link.title}
                    className="bg-background/70 border border-border rounded-2xl p-6 flex h-full flex-col items-center hover:border-accent/40 transition-colors text-center"
                  >
                    <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{link.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                      {link.description}
                    </p>
                    <Link
                      href={link.href}
                      className="mt-auto inline-flex items-center text-sm font-medium text-secondary hover:underline"
                    >
                      Acessar
                    </Link>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

