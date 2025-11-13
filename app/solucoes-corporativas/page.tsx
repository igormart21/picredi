'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  CreditCard,
  TrendingUp,
  ShieldCheck,
  Users,
  Wallet,
  LineChart,
  Building,
  BookOpenCheck,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';

interface SolutionCard {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  bullets: string[];
}

const corporateSolutions: SolutionCard[] = [
  {
    icon: Wallet,
    title: '1. Conta Corrente e Gestão do Dia a Dia',
    description:
      'Serviços desenhados para estruturar o fluxo diário da empresa com eficiência e profissionalismo.',
    bullets: [
      'Conta Corrente PJ para separar e organizar as finanças empresariais.',
      'Gestão de fluxo de caixa com ferramentas que acompanham cada movimentação.',
      'Pagamentos e recebimentos via Pix PJ, boletos, débito automático e folha.',
      'Internet Banking e aplicativo empresarial com experiência segura e intuitiva.',
    ],
  },
  {
    icon: CreditCard,
    title: '2. Crédito e Financiamento',
    description:
      'Linhas flexíveis de financiamento para apoiar capital de giro, projetos e expansão dos negócios.',
    bullets: [
      'Capital de giro, crédito rural e financiamentos com taxas competitivas.',
      'PRONAMPE e outros programas direcionados para micro e pequenas empresas.',
      'Cartões empresariais que centralizam despesas e simplificam a prestação de contas.',
    ],
  },
  {
    icon: TrendingUp,
    title: '3. Investimentos e Administração de Ativos',
    description:
      'Soluções de investimento alinhadas ao perfil e às metas de crescimento de cada organização.',
    bullets: [
      'Fundos de investimento estruturados conforme objetivos e tolerância ao risco.',
      'Previdência privada como ferramenta de retenção de talentos e planejamento de longo prazo.',
      'Asset management com gestão profissional dos recursos corporativos.',
    ],
  },
  {
    icon: ShieldCheck,
    title: '4. Seguros e Consórcios',
    description:
      'Proteção abrangente do patrimônio empresarial e alternativas programadas de aquisição.',
    bullets: [
      'Seguros empresariais personalizáveis para patrimônio, equipamentos, frota e colaboradores.',
      'Consórcios para compra programada de veículos, máquinas ou imóveis corporativos.',
    ],
  },
  {
    icon: Users,
    title: '5. Benefícios do Modelo Cooperativo',
    description:
      'Vantagens exclusivas do modelo cooperativista, unindo relacionamento próximo e retorno financeiro.',
    bullets: [
      'Participação na distribuição dos resultados conforme o engajamento da empresa.',
      'Atendimento especializado com assessores que entendem o mercado corporativo.',
    ],
  },
];

export default function SolucoesCorporativasPage() {
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
              Soluções{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
                Corporativas
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Um portfólio completo para impulsionar o crescimento de empresas de todos os portes,
              com proximidade e personalização desde microempreendedores até grandes corporações.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {corporateSolutions.map((solution, index) => {
              const IconComponent = solution.icon;

              return (
                <motion.div
                  key={solution.title}
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
                      <CardTitle className="text-xl">{solution.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {solution.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3 mt-auto">
                      <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                        {solution.bullets.map((bullet) => (
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
            className="bg-accent/10 border border-accent/20 rounded-3xl p-6 sm:p-8 lg:p-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-good-times text-foreground mb-4 text-center">
              Por que escolher o Picredi para sua empresa?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground text-center mb-10">
              O modelo cooperativista transforma relacionamento em rentabilidade, oferecendo soluções
              completas, atendimento especializado e participação nos resultados.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: Building,
                  title: 'Atendimento Consultivo',
                  description:
                    'Assessores de negócios acompanham de perto as demandas da empresa e definem soluções sob medida.',
                },
                {
                  icon: BookOpenCheck,
                  title: 'Transparência e Governança',
                  description:
                    'Relatórios recorrentes e governança cooperativa reforçam a confiança em cada decisão.',
                },
              ].map((highlight) => {
                const IconComponent = highlight.icon;
                return (
                  <div
                    key={highlight.title}
                    className="bg-background/70 border border-border rounded-2xl p-6 flex flex-col hover:border-accent/40 transition-colors"
                  >
                    <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
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

