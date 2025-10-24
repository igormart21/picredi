'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Server, Database, Key, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';

const securityFeatures = [
  {
    icon: Lock,
    title: 'Criptografia End-to-End',
    description: 'Todos os dados são criptografados com AES-256, o mesmo padrão usado por bancos centrais.',
    details: 'AES-256, RSA-4096, TLS 1.3',
  },
  {
    icon: Shield,
    title: 'Autenticação Multifator',
    description: 'Múltiplas camadas de verificação para garantir que apenas você acesse sua conta.',
    details: 'Biometria, SMS, Email, Hardware Token',
  },
  {
    icon: Eye,
    title: 'Monitoramento 24/7',
    description: 'Sistema de detecção de anomalias em tempo real com IA avançada.',
    details: 'Machine Learning, Análise Comportamental',
  },
  {
    icon: Server,
    title: 'Infraestrutura Segura',
    description: 'Data centers certificados com redundância e backup automático.',
    details: 'ISO 27001, SOC 2, Tier III+',
  },
  {
    icon: Database,
    title: 'Backup Automático',
    description: 'Seus dados são replicados em múltiplas localizações geográficas.',
    details: '3x Replicação, Backup Incremental',
  },
  {
    icon: Key,
    title: 'Chaves de Segurança',
    description: 'Gerenciamento seguro de chaves criptográficas com HSM.',
    details: 'Hardware Security Module, Key Rotation',
  },
];

const certifications = [
  {
    name: 'ISO 27001',
    description: 'Sistema de Gestão de Segurança da Informação',
    status: 'certified',
    validUntil: '2025-12-31',
  },
  {
    name: 'PCI DSS Level 1',
    description: 'Padrão de Segurança de Dados da Indústria de Cartões',
    status: 'certified',
    validUntil: '2024-06-30',
  },
  {
    name: 'SOC 2 Type II',
    description: 'Controles de Segurança, Disponibilidade e Confidencialidade',
    status: 'certified',
    validUntil: '2024-09-15',
  },
  {
    name: 'LGPD Compliance',
    description: 'Conformidade com a Lei Geral de Proteção de Dados',
    status: 'certified',
    validUntil: 'Ongoing',
  },
];

const architecture = [
  {
    layer: 'Frontend',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    security: 'CSP, HSTS, XSS Protection',
  },
  {
    layer: 'API Gateway',
    technologies: ['Kong', 'Rate Limiting', 'Authentication'],
    security: 'OAuth 2.0, JWT, API Keys',
  },
  {
    layer: 'Microservices',
    technologies: ['Node.js', 'Python', 'Go', 'Docker'],
    security: 'mTLS, Service Mesh, Zero Trust',
  },
  {
    layer: 'Database',
    technologies: ['PostgreSQL', 'Redis', 'MongoDB'],
    security: 'Encryption at Rest, Row-Level Security',
  },
  {
    layer: 'Infrastructure',
    technologies: ['AWS', 'Kubernetes', 'Terraform'],
    security: 'VPC, WAF, DDoS Protection',
  },
];

export default function TechnologySecurityPage() {
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
              Tecnologia &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
                Segurança
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Sua segurança é nossa prioridade. Utilizamos as mais avançadas tecnologias 
              e certificações internacionais para proteger seus dados e transações.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-good-times text-foreground mb-6">
              Nossa Arquitetura de Segurança
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Múltiplas camadas de proteção que trabalham em conjunto para garantir 
              a máxima segurança dos seus dados.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card variant="tech" className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-accent" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted/50 rounded-lg p-3">
                      <p className="text-sm font-medium text-foreground mb-1">Tecnologias:</p>
                      <p className="text-sm text-muted-foreground">{feature.details}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-good-times text-foreground mb-6">
              Certificações & Compliance
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Nossas certificações internacionais comprovam nosso compromisso 
              com a segurança e conformidade regulatória.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card variant="luxury" className="h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{cert.name}</CardTitle>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-sm font-medium text-green-500">Certificado</span>
                      </div>
                    </div>
                    <CardDescription className="text-base">
                      {cert.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted/50 rounded-lg p-3">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium">Válido até:</span> {cert.validUntil}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-good-times text-foreground mb-6">
              Arquitetura Técnica
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Nossa infraestrutura é construída com as melhores práticas de segurança 
              e escalabilidade do mercado.
            </p>
          </motion.div>

          <div className="space-y-6">
            {architecture.map((layer, index) => (
              <motion.div
                key={layer.layer}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card variant="glass" className="overflow-hidden">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{layer.layer}</CardTitle>
                      <div className="flex items-center space-x-2">
                        <Shield className="w-5 h-5 text-accent" />
                        <span className="text-sm text-accent font-medium">Seguro</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Tecnologias</h4>
                        <div className="flex flex-wrap gap-2">
                          {layer.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Medidas de Segurança</h4>
                        <p className="text-sm text-muted-foreground">{layer.security}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Stats */}
      <section className="py-20 bg-gradient-to-r from-accent/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-good-times text-foreground mb-6">
              Números da Segurança
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Nossos indicadores de segurança falam por si só.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '99.99%', label: 'Uptime Garantido', icon: Server },
              { number: '0', label: 'Vazamentos de Dados', icon: Shield },
              { number: '256-bit', label: 'Criptografia AES', icon: Lock },
              { number: '24/7', label: 'Monitoramento', icon: Eye },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-accent" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-gradient-to-r from-accent/10 to-secondary/10 rounded-2xl p-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-good-times text-foreground mb-6">
              Sua Segurança é Nossa Prioridade
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Conheça mais sobre nossas medidas de segurança e como protegemos 
              seus dados e transações.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/relatorio-seguranca"
                className="inline-flex items-center justify-center px-8 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors"
              >
                Relatório de Segurança
              </a>
              <a
                href="/contato"
                className="inline-flex items-center justify-center px-8 py-3 border border-border bg-transparent text-foreground rounded-lg font-medium hover:bg-muted transition-colors"
              >
                Falar com Especialista
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
