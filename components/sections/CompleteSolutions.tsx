'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, CreditCard, TrendingUp, Shield, ShoppingCart, FileText, DollarSign, Building } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useRouter } from 'next/navigation';

const solutions = [
  {
    icon: Smartphone,
    title: 'Conta Digital',
    description: 'Gerencie suas finanças 24 horas por dia, direto do seu celular',
    color: 'text-accent',
    bgColor: 'bg-accent/20',
  },
  {
    icon: CreditCard,
    title: 'Cartões',
    description: 'Crédito e débito com tecnologia avançada e benefícios exclusivos',
    color: 'text-secondary',
    bgColor: 'bg-secondary/20',
  },
  {
    icon: TrendingUp,
    title: 'Investimentos',
    description: 'Diversifique seu portfólio com opções de renda fixa e variável',
    color: 'text-green-500',
    bgColor: 'bg-green-500/20',
  },
  {
    icon: Shield,
    title: 'Segurança',
    description: 'Proteção completa com criptografia bancária de nível militar',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/20',
  },
  {
    icon: ShoppingCart,
    title: 'Compras',
    description: 'Cashback e benefícios exclusivos em suas compras online e presenciais',
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/20',
  },
  {
    icon: FileText,
    title: 'Gestão',
    description: 'Relatórios detalhados e controle total sobre suas finanças',
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/20',
  },
];

export function CompleteSolutions() {
  const router = useRouter();

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-good-times text-foreground mb-6">
            Soluções{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
              Completas
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Um ecossistema financeiro completo e integrado. Tudo que você precisa para gerenciar seu dinheiro,
            fazer investimentos e realizar transações com segurança, tudo em um só lugar.
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
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/assets/ComfyUI_00001_vdvvp_1761919112.png"
                alt="Soluções Completas Picredi - Ecossistema Financeiro Integrado"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
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
              Tudo Integrado,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
                Tudo Conectado
              </span>
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              A Picredi oferece uma plataforma completa onde todos os seus serviços financeiros trabalham juntos.
              Da sua conta digital aos investimentos, passando por cartões e segurança, tudo está conectado em
              um único ecossistema inteligente.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-foreground">Acesse pelo celular ou computador</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-secondary rounded-full" />
                <span className="text-foreground">Todos os serviços em uma única plataforma</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-foreground">Segurança e proteção em todas as operações</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-secondary rounded-full" />
                <span className="text-foreground">Controle total sobre suas finanças</span>
              </div>
            </div>

            <Button 
              variant="accent" 
              size="lg"
              onClick={() => router.push('/produtos')}
            >
              Ver Todas as Soluções
            </Button>
          </motion.div>
        </div>

        {/* Grid de Soluções */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card variant="glass" className="h-full hover:scale-105 transition-transform duration-300">
                <CardHeader>
                  <div className={`w-12 h-12 ${solution.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                    <solution.icon className={`w-6 h-6 ${solution.color}`} />
                  </div>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {solution.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

