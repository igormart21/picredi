'use client';

import React from 'react';
import type { SVGProps } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, Send } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const WhatsAppIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12.004 2.003c-5.514 0-9.997 4.483-9.997 9.997 0 1.763.462 3.482 1.337 4.998L2 22l5.173-1.326a9.944 9.944 0 0 0 4.83 1.247h.001c5.514 0 9.997-4.483 9.997-9.997 0-2.67-1.04-5.181-2.929-7.07a9.944 9.944 0 0 0-7.068-2.851Zm0 1.8a8.2 8.2 0 0 1 5.822 2.413A8.203 8.203 0 0 1 20.003 12c0 4.525-3.676 8.2-8.201 8.2a8.21 8.21 0 0 1-4.184-1.124l-.299-.18-3.076.788.82-2.99-.194-.307A8.192 8.192 0 0 1 3.8 12c0-4.525 3.675-8.2 8.2-8.2Zm-2.198 4.902c-.189-.42-.388-.429-.568-.437-.147-.006-.315-.006-.483-.006-.168 0-.44.063-.671.314-.231.252-.883.863-.883 2.104 0 1.24.904 2.438 1.03 2.604.126.168 1.743 2.79 4.273 3.8 2.519 1.004 2.519.669 2.973.626.454-.042 1.463-.598 1.669-1.177.206-.58.206-1.075.147-1.177-.058-.1-.231-.168-.482-.295-.252-.126-1.493-.736-1.725-.819-.231-.084-.4-.126-.568.126-.168.252-.651.819-.799.987-.148.168-.294.189-.546.063-.252-.126-1.064-.392-2.026-1.247-.748-.668-1.252-1.492-1.4-1.744-.147-.252-.016-.389.111-.514.114-.114.252-.294.378-.441.126-.147.168-.252.253-.42.084-.168.042-.314-.021-.441-.063-.126-.55-1.32-.778-1.806Z" />
  </svg>
);

type ContactInfoCard = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: React.ReactNode;
  details: string;
};

const contactInfo: ContactInfoCard[] = [
  {
    icon: WhatsAppIcon,
    title: 'Telefone',
    description: (
      <a
        href="https://wa.me/5511914247595"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-colors"
      >
        +55 11 91424-7595
      </a>
    ),
    details: 'Atendimento 24h, 7 dias por semana',
  },
  {
    icon: Mail,
    title: 'Email',
    description: (
      <a
        href="mailto:controladoria@picredi.com.br"
        className="hover:text-accent transition-colors"
      >
        controladoria@picredi.com.br
      </a>
    ),
    details: 'Resposta em até 2 horas úteis',
  },
  {
    icon: MapPin,
    title: 'Endereço',
    description: 'Av. Pres. Juscelino Kubitschek, 1455 - 4º Andar',
    details: 'Vila Nova Conceição, São Paulo - SP, 04543-011',
  },
  {
    icon: Clock,
    title: 'Horário',
    description: '24/7',
    details: 'Atendimento digital sempre disponível',
  },
];

const departments = [
  {
    title: 'Suporte Técnico',
    email: 'suporte@picredi.com.br',
    description: 'Problemas técnicos e dúvidas sobre o app',
  },
  {
    title: 'Atendimento Comercial',
    email: 'vendas@picredi.com.br',
    description: 'Informações sobre produtos e serviços',
  },
  {
    title: 'Relacionamento',
    email: 'relacionamento@picredi.com.br',
    description: 'Atendimento personalizado para clientes',
  },
  {
    title: 'Imprensa',
    email: 'imprensa@picredi.com.br',
    description: 'Assuntos relacionados à mídia',
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-display text-4xl sm:text-5xl lg:text-6xl font-good-times text-foreground mb-6">
              Fale{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
                Conosco
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Nossa equipe está pronta para ajudar você a encontrar as melhores 
              soluções financeiras para suas necessidades.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card variant="glass" className="text-center h-full min-w-[240px] flex flex-col items-center px-6 py-6">
                    <CardHeader className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                        <info.icon className="w-6 h-6 text-accent" />
                      </div>
                      <CardTitle className="text-lg text-center">{info.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 w-full">
                      <div className="text-xl font-semibold text-foreground break-words">
                        {info.description}
                      </div>
                      <p className="text-sm text-muted-foreground break-words">
                        {info.details}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card variant="luxury">
                <CardHeader>
                  <CardTitle className="text-2xl">Envie sua Mensagem</CardTitle>
                  <CardDescription>
                    Preencha o formulário abaixo e entraremos em contato em breve.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Nome Completo *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent"
                          placeholder="Seu nome completo"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent"
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Telefone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent"
                          placeholder="(11) 99999-9999"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                          Assunto *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent"
                        >
                          <option value="">Selecione um assunto</option>
                          <option value="suporte">Suporte Técnico</option>
                          <option value="comercial">Informações Comerciais</option>
                          <option value="relacionamento">Relacionamento</option>
                          <option value="outros">Outros</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Mensagem *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
                        placeholder="Descreva sua dúvida ou solicitação..."
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="consent"
                        name="consent"
                        required
                        className="w-4 h-4 text-accent bg-background border-input rounded focus:ring-ring"
                      />
                      <label htmlFor="consent" className="text-sm text-muted-foreground">
                        Concordo com a{' '}
                        <a href="/privacidade" className="text-accent hover:underline">
                          Política de Privacidade
                        </a>
                      </label>
                    </div>

                    <Button type="submit" variant="accent" className="w-full" size="lg">
                      <Send className="w-5 h-5 mr-2" />
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Departments */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card variant="glass">
                <CardHeader>
                  <CardTitle className="text-2xl">Departamentos</CardTitle>
                  <CardDescription>
                    Encontre o departamento mais adequado para sua solicitação.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {departments.map((dept, index) => (
                      <motion.div
                        key={dept.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <h3 className="font-semibold text-foreground mb-2">{dept.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{dept.description}</p>
                        <a
                          href={`mailto:${dept.email}`}
                          className="text-accent hover:underline text-sm font-medium"
                        >
                          {dept.email}
                        </a>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-good-times text-foreground mb-6">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Encontre respostas rápidas para as dúvidas mais comuns.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: 'Como abro uma conta na Picredi?',
                answer: 'É muito simples! Basta baixar nosso app, preencher seus dados e fazer a verificação de identidade. Todo o processo é digital e leva apenas alguns minutos.',
              },
              {
                question: 'Quais documentos preciso para abrir conta?',
                answer: 'Você precisa de RG ou CNH, CPF e comprovante de residência. Tudo pode ser enviado digitalmente pelo app.',
              },
              {
                question: 'A Picredi é segura?',
                answer: 'Sim! Somos regulamentados pelo Banco Central e utilizamos criptografia bancária de nível militar para proteger seus dados.',
              },
              {
                question: 'Posso falar com um atendente humano?',
                answer: 'Claro! Nossa central de atendimento está disponível 24h por dia, 7 dias por semana, com atendentes especializados.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card variant="default">
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
