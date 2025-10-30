'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Server, Database, Key, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';

const securityFeatures = [
  { icon: Lock, title: 'Criptografia End-to-End', description: 'Dados protegidos com AES-256 e TLS 1.3.', details: 'AES-256, RSA-4096, TLS 1.3' },
  { icon: Shield, title: 'Autenticação Multifator', description: 'Múltiplas camadas de verificação.', details: 'Biometria, SMS, Email, Hardware Token' },
  { icon: Eye, title: 'Monitoramento 24/7', description: 'Detecção de anomalias em tempo real.', details: 'Machine Learning, Análise Comportamental' },
  { icon: Server, title: 'Infraestrutura Segura', description: 'Data centers certificados e redundantes.', details: 'ISO 27001, SOC 2, Tier III+' },
  { icon: Database, title: 'Backup Automático', description: 'Replicação geográfica contínua.', details: '3x Replicação, Backup Incremental' },
  { icon: Key, title: 'Chaves de Segurança', description: 'Gerenciamento seguro com HSM.', details: 'HSM, Rotação de Chaves' },
];

const certifications = [
  { name: 'ISO 27001', description: 'Gestão de Segurança da Informação', validUntil: '2025-12-31' },
  { name: 'PCI DSS Level 1', description: 'Segurança de Dados de Cartões', validUntil: '2024-06-30' },
  { name: 'SOC 2 Type II', description: 'Segurança, Disponibilidade e Confidencialidade', validUntil: '2024-09-15' },
  { name: 'LGPD Compliance', description: 'Conformidade com a LGPD', validUntil: 'Ongoing' },
];

export function TechSecuritySection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-good-times text-foreground mb-4">
            Tecnologia & <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">Segurança</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Proteção em múltiplas camadas, certificações internacionais e monitoramento contínuo para manter seus dados seguros.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card variant="tech" className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
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

        <motion.div
          className="text-center mt-16 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-good-times text-foreground mb-4">Certificações & Compliance</h3>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto">
            Segurança reconhecida por padrões globais e conformidade contínua.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
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
                  <CardDescription className="text-base">{cert.description}</CardDescription>
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
  );
}


