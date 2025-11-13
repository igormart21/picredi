'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Briefcase,
  GraduationCap,
  HeartPulse,
  Laptop,
  Globe,
  Building2,
  Mail,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import Link from 'next/link';

type OpportunityCard = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  bullets: string[];
};

const opportunityAreas: OpportunityCard[] = [
  {
    icon: Users,
    title: 'Áreas de Atuação',
    bullets: [
      'Gerente de Negócios (Agro, Pessoa Física, Jurídica).',
      'Assistente de Atendimento e Assistente Administrativo.',
      'Caixa e Especialistas em diversas frentes.',
      'Analistas em TI, Marketing, Pessoas e Cultura, Compliance e muito mais.',
      'Programas de Jovem Aprendiz e Estágio.',
    ],
  },
  {
    icon: Globe,
    title: 'Onde atuamos',
    bullets: [
      'Presença nacional com oportunidades em todo o Brasil.',
      'Modelos presencial, híbrido e home office conforme a vaga.',
      'Atuação em agências, escritórios regionais e sedes administrativas.',
    ],
  },
];

const cultureHighlights: OpportunityCard[] = [
  {
    icon: GraduationCap,
    title: 'Plano de Carreira e Desenvolvimento',
    bullets: [
      'Incentivo à capacitação contínua e trilhas de crescimento dentro da cooperativa.',
      'Programas de estágio, jovem aprendiz e trainee com abordagem prática do cooperativismo.',
    ],
  },
  {
    icon: HeartPulse,
    title: 'Benefícios Atrativos',
    bullets: [
      'PPR (Participação nos Resultados) e previdência privada.',
      'Vale-alimentação/refeição, plano de saúde e odontológico.',
      'Auxílio creche e programas de bem-estar (Gympass, Zenklub).',
    ],
  },
];

const applyChannels = [
  {
    icon: Building2,
    title: 'Site de Carreiras do Picredi',
    description:
      'Portal oficial com vagas em aberto, depoimentos e a cultura da cooperativa. Cadastre seu currículo e acompanhe as oportunidades.',
    href: '/ajuda',
    email: 'controladoria@picredi.com.br',
  },
  {
    icon: Laptop,
    title: 'Plataforma Gupy',
    description:
      'Sistema principal utilizado pelo Picredi para gestão de vagas, cadastro de currículos, testes e entrevistas online.',
    href: '/ajuda',
    email: 'controladoria@picredi.com.br',
  },
];

export default function CarreirasPage() {
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
              Carreiras{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
                Picredi
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Trabalhar no Picredi é crescer em um ambiente cooperativo, inovador e reconhecido como
              um dos melhores lugares para se trabalhar no Brasil pelo GPTW.
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
            {opportunityAreas.map((area, index) => {
              const IconComponent = area.icon;

              return (
                <motion.div
                  key={area.title}
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
                      <CardTitle className="text-xl">{area.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        Descubra as áreas e oportunidades para construir sua trajetória profissional no Picredi.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3 mt-auto">
                      <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                        {area.bullets.map((bullet) => (
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

      <section className="pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {cultureHighlights.map((highlight, index) => {
              const IconComponent = highlight.icon;

              return (
                <motion.div
                  key={highlight.title}
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
                      <CardTitle className="text-xl">{highlight.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {highlight.bullets[0]}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2 mt-auto">
                      <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                        {highlight.bullets.slice(1).map((bullet) => (
                          <li key={bullet} className="flex items-start gap-2">
                            <span className="mt-1 w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
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
              Como se candidatar
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-10">
              O processo seletivo é digital. Crie ou atualize seu cadastro nas plataformas oficiais e
              acompanhe as etapas — desde testes online até entrevistas com o time de gestão de pessoas.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {applyChannels.map((channel) => {
                const IconComponent = channel.icon;

                return (
                  <div
                    key={channel.title}
                    className="bg-background/70 border border-border rounded-2xl p-6 flex flex-col items-center hover:border-accent/40 transition-colors text-center"
                  >
                    <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{channel.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {channel.description}
                    </p>
                    <div className="flex flex-col items-center space-y-2">
                      <Link
                        href={channel.href}
                        className="inline-flex items-center text-sm font-medium text-secondary hover:underline"
                      >
                        Acessar plataforma
                      </Link>
                      <div className="flex items-center text-xs text-muted-foreground gap-2">
                        <Mail className="w-4 h-4 text-secondary" />
                        <span>{channel.email}</span>
                      </div>
                    </div>
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

