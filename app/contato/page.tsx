'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const contactInfo = [
  {
    icon: Phone,
    title: 'Telefone',
    description: '0800 123 4567',
    details: 'Atendimento 24h, 7 dias por semana',
  },
  {
    icon: Mail,
    title: 'Email',
    description: 'contato@picredi.com.br',
    details: 'Resposta em até 2 horas úteis',
  },
  {
    icon: MapPin,
    title: 'Endereço',
    description: 'São Paulo, SP',
    details: 'Av. Paulista, 1000 - Bela Vista',
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
                <Card variant="glass" className="text-center h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <info.icon className="w-6 h-6 text-accent" />
                    </div>
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xl font-semibold text-foreground mb-2">
                      {info.description}
                    </p>
                    <p className="text-sm text-muted-foreground">
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
