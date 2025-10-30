'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Shield, Zap, Users, Award, Globe } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';

const stats = [
  {
    icon: Users,
    value: '632',
    label: 'Parceiros',
    description: '',
    color: 'text-accent',
  },
  {
    icon: TrendingUp,
    value: 'R$ 65 bi',
    label: 'Em transações bancárias por mês',
    description: '',
    color: 'text-secondary',
  },
  {
    icon: Shield,
    value: '2 mi',
    label: 'Operações de crédito por mês',
    description: '',
    color: 'text-green-500',
  },
  {
    icon: Award,
    value: 'R$ 1.5 bi',
    label: 'Operações de crédito por mês',
    description: '',
    color: 'text-yellow-500',
  },
];

const features = [
  {
    icon: Zap,
    title: 'PIX Instantâneo',
    description: 'Transferências em segundos, 24 horas por dia',
    highlight: 'Gratuito',
  },
  {
    icon: Shield,
    title: 'Segurança Máxima',
    description: 'Criptografia bancária de nível militar',
    highlight: 'ISO 27001',
  },
  {
    icon: Globe,
    title: 'Global',
    description: 'Aceito em mais de 200 países',
    highlight: 'Visa/Mastercard',
  },
];

export function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-good-times text-foreground mb-6">
            Números que{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
              Impressionam
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Nossos resultados falam por si só. Crescimento constante e satisfação dos clientes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card variant="glass" className="text-center h-full">
                <CardHeader>
                  <div className={`w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <CardTitle className="text-3xl font-bold text-foreground mb-2">
                    {stat.value}
                  </CardTitle>
                  <CardDescription className="text-lg font-semibold text-foreground">
                    {stat.label}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeaturesSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-good-times text-foreground mb-6">
            Por que{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
              Escolher
            </span>{' '}
            a Picredi?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Tecnologia de ponta, segurança incomparável e atendimento personalizado.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card variant="luxury" className="h-full group hover:scale-105 transition-transform duration-300 flex flex-col">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                  <div className="mt-6 flex justify-center">
                    <span className="px-3 py-1 bg-gradient-to-r from-accent to-secondary text-primary rounded-full text-xs font-medium whitespace-nowrap">
                      {feature.highlight}
                    </span>
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

