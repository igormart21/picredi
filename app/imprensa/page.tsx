'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Newspaper,
  Megaphone,
  Users,
  Award,
  Globe,
  LinkIcon,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import Link from 'next/link';

interface ResourceCard {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  bullets: string[];
}

const pressResources: ResourceCard[] = [
  {
    icon: Newspaper,
    title: 'Sala de Imprensa Online',
    description:
      'Portal de notícias oficial com comunicados, posicionamentos e conteúdo institucional sobre o Picredi.',
    bullets: [
      'Publicações sobre resultados financeiros, ESG, cooperativismo, agronegócio e segurança.',
      'Histórias de sucesso e iniciativas estratégicas do modelo cooperativo.',
    ],
  },
  {
    icon: Megaphone,
    title: 'Releases e Notícias',
    description:
      'Seção que concentra os últimos comunicados e novidades para a imprensa e o mercado.',
    bullets: [
      'Reconhecimento GPTW como Melhor Empresa para Trabalhar no Brasil.',
      'Parcerias com entidades como a ARI para premiações de assessoria de imprensa.',
      'Acordos com organizações internacionais, como o IFC, para financiamentos.',
    ],
  },
  {
    icon: Users,
    title: 'Eventos com a Mídia',
    description:
      'Agenda periódica de encontros, cafés da manhã e press trips para estreitar o relacionamento com jornalistas.',
    bullets: [
      'Compartilhamento transparente de informações estratégicas.',
      'Aproximação com influenciadores e veículos regionais e nacionais.',
    ],
  },
  {
    icon: Award,
    title: 'Prêmio Nacional de Jornalismo',
    description:
      'Iniciativa para valorizar jornalistas e criadores de conteúdo que abordam cooperativismo.',
    bullets: [
      'Reconhecimento a reportagens e pautas que incentivem a cobertura do setor.',
      'Fomento ao debate sobre modelos cooperativos de negócio.',
    ],
  },
];

const pressContacts = [
  {
    icon: Globe,
    title: 'Portal Oficial',
    description:
      'Acesse a seção “Imprensa” no site institucional para consultar releases, contatos e materiais atualizados.',
    href: '/ajuda',
  },
  {
    icon: LinkIcon,
    title: 'Canais de Atendimento Geral',
    description:
      'Para o público geral, utilize a Central de Ajuda do Picredi. Nela você encontra WhatsApp, telefones e outras formas de contato.',
    href: '/ajuda',
  },
];

export default function ImprensaPage() {
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
              Sala de{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
                Imprensa
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              O Picredi mantém um espaço dedicado à imprensa para divulgar notícias, releases
              oficiais e conectar jornalistas com especialistas da instituição.
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
            {pressResources.map((resource, index) => {
              const IconComponent = resource.icon;

              return (
                <motion.div
                  key={resource.title}
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
                      <CardTitle className="text-xl">{resource.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {resource.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2 mt-auto">
                      <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                        {resource.bullets.map((bullet) => (
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
              Contato para a Imprensa
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8">
              A melhor forma de falar com a equipe de comunicação é por meio dos canais oficiais
              abaixo. Eles concentram materiais atualizados e orientações sobre como solicitar
              entrevistas ou acessar informações institucionais.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pressContacts.map((contact, index) => {
                const IconComponent = contact.icon;

                return (
                  <div
                    key={contact.title}
                    className="flex h-full flex-col items-center text-center bg-background/60 border border-border rounded-2xl p-6"
                  >
                    <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{contact.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                      {contact.description}
                    </p>
                    <Link
                      href={contact.href}
                      className="mt-auto inline-flex items-center text-sm font-medium text-secondary hover:underline"
                    >
                      Acessar canal
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

