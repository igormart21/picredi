'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Server, Settings, CreditCard, Zap, Shield, DollarSign, FileText, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';

const modules = [
  {
    icon: CreditCard,
    title: 'CARTÃO',
    description: 'Gestão completa de cartões de crédito e débito',
  },
  {
    icon: Zap,
    title: 'PIX',
    description: 'Transferências instantâneas 24 horas por dia',
  },
  {
    icon: DollarSign,
    title: 'CASHBACK',
    description: 'Sistema de recompensas e cashback automatizado',
  },
  {
    icon: FileText,
    title: 'BOLETO',
    description: 'Emissão e gestão de boletos bancários',
  },
  {
    icon: Users,
    title: 'BENEFÍCIOS',
    description: 'Plataforma de benefícios e descontos',
  },
  {
    icon: Settings,
    title: 'BACKOFFICE',
    description: 'Gestão administrativa e operacional',
  },
  {
    icon: Shield,
    title: 'GATEWAY',
    description: 'Integração segura com sistemas externos',
  },
  {
    icon: Server,
    title: 'ORQUESTRADOR',
    description: 'Coordenação inteligente de todas as operações',
  },
];

export function CoreBanking() {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-good-times text-foreground mb-6">
            Um{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
              Core Bancário
            </span>{' '}
            Completo
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Uma plataforma bancária robusta e integrada, conectando todos os serviços essenciais em um único
            sistema. Do processamento de pagamentos à gestão de benefícios, tudo funciona de forma coordenada e eficiente.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Imagem */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-card p-6">
              <img
                src="/assets/finstack-img485.png"
                alt="Core Banking Completo - Sistema Integrado de Serviços Bancários"
                className="w-full h-auto object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Conteúdo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Arquitetura{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
                Integrada
              </span>
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Nosso Core Banking é o coração de toda a operação. Conecta de forma inteligente todos os módulos
              essenciais - desde pagamentos instantâneos até gestão de benefícios - garantindo que cada transação
              seja processada com segurança, agilidade e confiabilidade.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-foreground">Sistema central unificado e escalável</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-secondary rounded-full" />
                <span className="text-foreground">Módulos totalmente integrados</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-foreground">Processamento em tempo real</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-secondary rounded-full" />
                <span className="text-foreground">Alta disponibilidade e segurança</span>
              </div>
            </div>

            <Card variant="glass" className="mt-8">
              <CardHeader>
                <CardTitle className="text-lg">MULTI-SALDO E EXTRATO</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Gestão completa de múltiplas contas, saldos consolidados e extratos detalhados
                  em tempo real. Tenha visibilidade total sobre suas movimentações financeiras.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Grid de Módulos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Módulos{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
              Integrados
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((module, index) => (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card variant="glass" className="h-full hover:scale-105 transition-transform duration-300 text-center">
                  <CardHeader>
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <module.icon className="w-6 h-6 text-accent" />
                    </div>
                    <CardTitle className="text-lg font-bold">{module.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">
                      {module.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

