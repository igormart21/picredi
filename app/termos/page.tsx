'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  FileCheck,
  MonitorSmartphone,
  Copyright,
  LineChart,
  TriangleAlert,
  Shield,
  RefreshCcw,
  BookOpenCheck,
  MessageCircle,
  Phone,
  Users,
  Laptop,
  Headphones,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import Link from 'next/link';

type TermSection = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  bullets?: string[];
};

const termsSections: TermSection[] = [
  {
    icon: FileCheck,
    title: '1. Aceitação dos Termos',
    description:
      'Ao utilizar os serviços, sites ou aplicativos do Picredi, o usuário e/ou associado concorda em cumprir e aceitar os presentes Termos de Uso, a Política de Privacidade e a legislação vigente.',
  },
  {
    icon: MonitorSmartphone,
    title: '2. Uso dos Serviços e Plataformas Digitais',
    description:
      'O acesso aos serviços digitais do Picredi exige responsabilidade do usuário em relação às credenciais e ao comportamento nas plataformas.',
    bullets: [
      'Acesso e Cadastro: alguns serviços exigem cadastro e credenciais (login e senha). O usuário é responsável pela segurança dessas informações.',
      'Conduta do Usuário: é proibido acessar dados de terceiros, introduzir vírus ou códigos maliciosos e violar a segurança dos sistemas.',
    ],
  },
  {
    icon: Copyright,
    title: '3. Propriedade Intelectual',
    description:
      'Todo conteúdo das plataformas do Picredi (textos, gráficos, logotipos, softwares, etc.) pertence ao Picredi ou aos seus licenciadores. O uso comercial não autorizado é proibido.',
  },
  {
    icon: LineChart,
    title: '4. Administração de Ativos – Informações e Riscos',
    description:
      'As informações disponibilizadas têm caráter informativo e não constituem aconselhamento financeiro, jurídico ou fiscal.',
    bullets: [
      'Riscos de Investimento: investimentos em ativos financeiros envolvem riscos, inclusive perdas substanciais. O Picredi não garante rentabilidade ou ausência de oscilações de mercado.',
      'Documentação Legal: a aplicação em fundos é regida por regulamentos e prospectos que devem ser lidos atentamente antes de qualquer decisão.',
    ],
  },
  {
    icon: TriangleAlert,
    title: '5. Limitação de Responsabilidade',
    description:
      'O Picredi não se responsabiliza por danos decorrentes do uso indevido das plataformas, decisões de investimento baseadas exclusivamente nas informações disponíveis ou indisponibilidade temporária de sistemas e conexões.',
  },
  {
    icon: Shield,
    title: '6. Privacidade e Proteção de Dados',
    description:
      'A coleta e uso de dados pessoais seguem a Política de Privacidade do Picredi e a LGPD, garantindo tratamento seguro e adequado das informações confidenciais.',
  },
  {
    icon: RefreshCcw,
    title: '7. Modificações dos Termos',
    description:
      'O Picredi pode alterar estes Termos de Uso a qualquer momento, mediante aviso prévio aos usuários em suas plataformas.',
  },
];

const additionalSections = [
  {
    icon: BookOpenCheck,
    title: 'Termos de Uso – Picredi (Aplicáveis à Administração de Ativos e Plataformas Digitais)',
    description:
      'Para acessar a versão completa e oficial dos Termos de Uso, consulte sempre o site institucional do Picredi. Nele você encontra documentos atualizados e comunicados relevantes.',
    bullets: [
      'Política de Segurança - Picredi: contamos com mecanismos que monitoram e registram o uso das informações geradas, armazenadas ou transmitidas em nosso ambiente.',
    ],
  },
];

const helpChannels = [
  {
    icon: MessageCircle,
    title: '1. Atendimento via WhatsApp (Assistente Virtual "Marcelo Berlinck" e Atendente)',
    items: [
      'Número Oficial: +55 11 91424-7595',
      'Como usar: salve o número na agenda e envie “Oi Picredi!”. Você será atendido pelo assistente virtual Theo ou, se necessário, por um atendente humano ou seu gerente.',
    ],
  },
  {
    icon: Phone,
    title: '2. Telefones da Central de Atendimento',
    items: [
      'Capitais e Regiões Metropolitanas: +55 11 91424-7595',
      'Demais Localidades: +55 11 91424-7595',
    ],
  },
  {
    icon: Users,
    title: '3. Fale com seu Gerente',
    items: [
      'Contato direto para dúvidas sobre investimentos, fundos ou administração de ativos.',
      'Consulte o site oficial para localizar telefone e endereço da sua agência em “Encontre uma agência”.',
    ],
  },
  {
    icon: Laptop,
    title: '4. Canais Digitais (Site e Aplicativo)',
    items: [
      'Perguntas Frequentes (FAQ): base de conhecimento para dúvidas recorrentes.',
      'Chat Online: disponível em plataformas digitais selecionadas do Picredi.',
    ],
  },
  {
    icon: Headphones,
    title: '5. Ouvidoria',
    items: [
      'Solicite atendimento quando os demais canais não solucionarem sua demanda.',
      'Site da Ouvidoria: disponível no portal oficial do Picredi.',
    ],
    alert:
      'Alerta de Segurança: o Picredi não liga solicitando senhas, códigos ou procedimentos de segurança. Em caso de suspeita, entre em contato imediatamente pelos canais oficiais.',
  },
];

export default function TermosPage() {
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
              Termos de{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
                Uso
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Estes Termos regulam a utilização dos serviços, plataformas digitais e soluções de
              administração de ativos do Picredi. Ao prosseguir, você concorda com as condições aqui
              descritas e com a Política de Privacidade vigente.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {termsSections.map((section, index) => {
              const IconComponent = section.icon ?? FileCheck;

              return (
                <motion.div
                  key={section.title}
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
                      <CardTitle className="text-xl">{section.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {section.description}
                      </CardDescription>
                    </CardHeader>
                    {section.bullets && (
                      <CardContent className="space-y-3">
                        <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                          {section.bullets.map((bullet) => (
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

      <section className="pb-16 sm:pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 gap-6 sm:gap-8 place-items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {additionalSections.map((section, index) => {
              const IconComponent = section.icon ?? BookOpenCheck;

              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card variant="glass" className="h-full flex flex-col w-full max-w-2xl mx-auto">
                    <CardHeader>
                      <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                        <IconComponent className="w-6 h-6 text-secondary" />
                      </div>
                      <CardTitle className="text-xl">{section.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {section.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2 mt-auto">
                      {section.bullets?.map((bullet) => (
                        <p key={bullet} className="text-sm text-muted-foreground leading-relaxed">
                          {bullet}
                        </p>
                      ))}
                    </CardContent>
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
            className="text-center max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-good-times text-foreground mb-4">
              Central de Ajuda Picredi Administração de Ativos
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Não encontrou o que precisava? Os canais oficiais abaixo estão prontos para auxiliar
              associados e investidores em todas as etapas.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {helpChannels.map((channel, index) => {
              const IconComponent = channel.icon ?? MessageCircle;

              return (
                <motion.div
                  key={channel.title}
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
                      <CardTitle className="text-xl">{channel.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                        {channel.items.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-1 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      {channel.alert && (
                        <p className="text-sm text-foreground bg-accent/10 border border-accent/20 rounded-lg p-3">
                          {channel.alert}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            className="text-center mt-12 text-sm text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Para acessar os termos completos e atualizados, visite{' '}
            <Link href="/termos" className="text-accent hover:underline">
              picredi.com.br/termos
            </Link>
            .
          </motion.div>
        </div>
      </section>
    </div>
  );
}

