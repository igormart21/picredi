'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Scale,
  BarChart3,
  Gavel,
  BookOpenCheck,
  FileText,
  BellRing,
  GraduationCap,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';

interface ComplianceItem {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  bullets?: string[];
}

const objectives: ComplianceItem[] = [
  {
    icon: Scale,
    title: 'Conformidade Regulatória',
    description:
      'Garantir aderência às leis e regulamentações do sistema financeiro e cooperativista.',
    bullets: [
      'Cumprimento da Lei do Sigilo Bancário (LC 105/2001) e da LGPD.',
      'Adesão às normas do Banco Central e demais órgãos reguladores.',
    ],
  },
  {
    icon: Gavel,
    title: 'Governança Corporativa',
    description:
      'Promover transparência, responsabilidade e boas práticas na gestão institucional.',
    bullets: [
      'Estrutura de governança com comitês e órgãos de controle.',
      'Disponibilidade de políticas e mecanismos de acompanhamento.',
    ],
  },
  {
    icon: BarChart3,
    title: 'Gestão de Riscos',
    description:
      'Identificar, prevenir e mitigar riscos operacionais, financeiros, de imagem e de compliance.',
    bullets: [
      'Prevenção a crimes financeiros e lavagem de dinheiro.',
      'Avaliação contínua do ambiente de controle.',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Ética e Integridade',
    description:
      'Fomentar cultura ética entre colaboradores, dirigentes e associados, alinhada aos valores cooperativistas.',
    bullets: [
      'Código de conduta e treinamentos constantes sobre comportamento ético.',
      'Canais de comunicação para reforçar transparência e responsabilidade.',
    ],
  },
];

const structure: ComplianceItem[] = [
  {
    icon: BookOpenCheck,
    title: 'Políticas Internas',
    description:
      'Modelo Operacional de Compliance com políticas como a de Conformidade e de Auditoria Interna.',
    bullets: [
      'Normas internas atualizadas e alinhadas às exigências regulatórias.',
      'Procedimentos documentados para toda a instituição.',
    ],
  },
  {
    icon: FileText,
    title: 'Relatórios e Transparência',
    description:
      'Divulgação de relatórios institucionais e de sustentabilidade, reforçando a prestação de contas.',
    bullets: [
      'Publicações periódicas sobre desempenho e práticas ESG.',
      'Documentos acessíveis para associados e comunidade.',
    ],
  },
  {
    icon: BellRing,
    title: 'Canais de Denúncia e Ouvidoria',
    description:
      'Canais seguros para reportar desvios ou inconformidades, assegurando sigilo.',
    bullets: [
      'Ouvidoria estruturada de acordo com as normas do sistema financeiro.',
      'Canal específico para denúncias de condutas inadequadas.',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Treinamento e Capacitação',
    description:
      'Eventos e treinamentos orientam colaboradores e parceiros sobre as práticas de compliance.',
    bullets: [
      'Formação contínua sobre prevenção à lavagem de dinheiro.',
      'Programas voltados também a profissionais contábeis e parceiros.',
    ],
  },
];

export default function CompliancePage() {
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
              Compliance{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
                Picredi
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Um conjunto de políticas e práticas que assegura operações 100% alinhadas às leis,
              regulamentos e aos princípios cooperativistas, protegendo associados e a solidez da instituição.
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
            {objectives.map((objective, index) => {
              const IconComponent = objective.icon;

              return (
                <motion.div
                  key={objective.title}
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
                      <CardTitle className="text-xl">{objective.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {objective.description}
                      </CardDescription>
                    </CardHeader>
                    {objective.bullets && (
                      <CardContent className="space-y-3 mt-auto">
                        <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                          {objective.bullets.map((bullet) => (
                            <li key={bullet} className="flex items-start gap-2">
                              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    )}
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {structure.map((item, index) => {
              const IconComponent = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card variant="glass" className="h-full flex flex-col">
                    <CardHeader>
                      <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                        <IconComponent className="w-6 h-6 text-secondary" />
                      </div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                    {item.bullets && (
                      <CardContent className="space-y-3 mt-auto">
                        <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                          {item.bullets.map((bullet) => (
                            <li key={bullet} className="flex items-start gap-2">
                              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    )}
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
              Compliance que fortalece o cooperativismo
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              O modelo cooperativo do Picredi cresce com ética, transparência e controles de
              conformidade, protegendo associados, colaboradores e comunidades.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

