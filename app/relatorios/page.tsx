'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  BarChart3,
  LineChart,
  PiggyBank,
  ShieldCheck,
  Globe,
  Building,
  Smartphone,
  BookOpenCheck,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import Link from 'next/link';

interface ReportCard {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  bullets: string[];
}

const reportList: ReportCard[] = [
  {
    icon: FileText,
    title: 'Relatórios Anuais',
    description:
      'Apresentam as principais ações, resultados financeiros e conquistas da cooperativa a cada exercício.',
    bullets: [
      'Demonstram a solidez e a gestão transparente do Picredi.',
      'Trazem a visão estratégica e o balanço das iniciativas do período.',
    ],
  },
  {
    icon: Globe,
    title: 'Relatórios de Sustentabilidade (ESG)',
    description:
      'Evidenciam como o modelo cooperativo gera valor econômico, social e ambiental nas comunidades.',
    bullets: [
      'Mostram indicadores ESG (ambientais, sociais e de governança).',
      'Reforçam o compromisso com o desenvolvimento sustentável e práticas responsáveis.',
    ],
  },
  {
    icon: LineChart,
    title: 'Demonstrações Financeiras',
    description:
      'Documentos formais com a situação financeira em conformidade com as normas do Banco Central e pronunciamentos contábeis (COSIF, CPCs).',
    bullets: [
      'Composição de ativos, passivos, patrimônio líquido e resultados.',
      'Notas explicativas e auditorias que asseguram transparência.',
    ],
  },
  {
    icon: PiggyBank,
    title: 'Informes de Rendimento',
    description:
      'Relatórios específicos para associados utilizarem na declaração do Imposto de Renda.',
    bullets: [
      'Detalham rendimentos de aplicações e distribuição de resultados.',
      'Disponibilizados anualmente em formato digital e acessível.',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Relatórios de Gestão e Governança',
    description:
      'Destacam eficiência, integridade e as práticas de governança do Picredi.',
    bullets: [
      'Estrutura de governança cooperativa e comitês de apoio.',
      'Indicadores de desempenho e mecanismos de controle interno.',
    ],
  },
];

const accessChannels = [
  {
    icon: Building,
    title: 'Site Institucional',
    description:
      'Na página “Documentos e Relatórios” ou “Sobre Nós/Relatórios” do Picredi você encontra as publicações institucionais.',
    href: 'https://picredi.com.br/relatorios',
  },
  {
    icon: Globe,
    title: 'Cooperativas Singulares',
    description:
      'Cada cooperativa singular, como Picredi Pioneira ou Picredi Confiança, divulga relatórios específicos em seus portais.',
    href: 'https://picredi.com.br/cooperativas',
  },
  {
    icon: Smartphone,
    title: 'Aplicativo Picredi',
    description:
      'Associados visualizam capital social, distribuição de resultados e documentos relacionados diretamente pelo app.',
    href: '/ajuda',
  },
  {
    icon: BarChart3,
    title: 'Picredi RI',
    description:
      'Portal de Relações com Investidores com dados financeiros consolidados, indicadores e apresentações.',
    href: 'https://picredi.com.br/ri',
  },
];

export default function RelatoriosPage() {
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
              Relatórios{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
                Institucionais
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Transparência e governança são pilares do Picredi. Conheça os relatórios que apresentam
              nosso desempenho financeiro, social e operacional.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {reportList.map((report, index) => {
              const IconComponent = report.icon;

              return (
                <motion.div
                  key={report.title}
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
                      <CardTitle className="text-xl">{report.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {report.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3 mt-auto">
                      <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                        {report.bullets.map((bullet) => (
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
              Onde encontrar os relatórios oficiais
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 text-center">
              Os relatórios estão disponíveis em diferentes canais digitais do Picredi. Escolha a fonte
              mais adequada ao tipo de documento que você precisa acessar.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {accessChannels.map((channel) => {
                const IconComponent = channel.icon;

                return (
                  <div
                    key={channel.title}
                    className="bg-background/70 border border-border rounded-2xl p-6 flex flex-col hover:border-accent/40 transition-colors"
                  >
                    <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{channel.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {channel.description}
                    </p>
                    <Link
                      href={channel.href}
                      className="inline-flex items-center text-sm font-medium text-secondary hover:underline"
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

