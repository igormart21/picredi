'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Zap, Users, CreditCard as CreditCardIcon, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { CreditCardComponent, CreditCardStack } from '@/components/ui/CreditCard';

const features = [
  {
    icon: Shield,
    title: 'Segurança Máxima',
    description: 'Proteção bancária de nível militar',
  },
  {
    icon: Zap,
    title: 'Tecnologia Avançada',
    description: 'IA e blockchain para suas operações',
  },
  {
    icon: Users,
    title: 'Atendimento Premium',
    description: 'Suporte dedicado 24/7',
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,209,255,0.1),transparent_50%)]" />
      
      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl"
        animate={{
          y: [0, 20, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.h1
                className="text-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-good-times text-foreground leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                O futuro do{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
                  banking
                </span>{' '}
                está aqui
              </motion.h1>
              
              <motion.p
                className="text-xl text-muted-foreground max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Descubra uma nova era bancária com tecnologia de ponta, 
                segurança incomparável e atendimento personalizado. 
                Seu dinheiro, sua vida, simplificada.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/contato">
                <Button size="lg" variant="accent" className="group">
                  Abrir Conta Agora
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/produtos">
                <Button size="lg" variant="outline">
                  Ver Produtos
                </Button>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="flex items-center space-x-8 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">500K+</div>
                <div className="text-sm text-muted-foreground">Clientes Ativos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">R$ 65 bi</div>
                <div className="text-sm text-muted-foreground">Volume Transacionado</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Elements */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Credit Card Stack */}
            <div className="flex justify-center mb-8">
              <CreditCardStack />
            </div>

            {/* Mobile App Preview */}
            <motion.div
              className="relative bg-card border border-border rounded-2xl p-6 shadow-luxury mx-auto max-w-sm"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img 
                      src="/assets/logo-picredi.png" 
                      alt="Picredi Logo" 
                      className="h-5 w-auto"
                    />
                    <div>
                      <div className="font-semibold text-foreground text-sm">Picredi</div>
                      <div className="text-xs text-muted-foreground">Digital Banking</div>
                    </div>
                  </div>
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                </div>

                <div className="space-y-3">
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-accent to-secondary rounded-full"
                      initial={{ width: '0%' }}
                      animate={{ width: '85%' }}
                      transition={{ duration: 2, delay: 1 }}
                    />
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Conectando com segurança...
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-muted/50 rounded-lg p-3">
                    <div className="text-lg font-bold text-foreground">R$ 15.420</div>
                    <div className="text-xs text-muted-foreground">Saldo Disponível</div>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-3">
                    <div className="text-lg font-bold text-foreground">+12.5%</div>
                    <div className="text-xs text-muted-foreground">Rendimento Anual</div>
                  </div>
                </div>

                <div className="flex items-center justify-center space-x-4 pt-2">
                  <div className="flex items-center space-x-1">
                    <Smartphone className="w-3 h-3 text-accent" />
                    <span className="text-xs text-muted-foreground">App Mobile</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CreditCardIcon className="w-3 h-3 text-secondary" />
                    <span className="text-xs text-muted-foreground">Cartão Digital</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-6 -right-6 bg-card border border-border rounded-lg p-3 shadow-luxury"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="flex items-center space-x-2">
                <Shield className="w-3 h-3 text-accent" />
                <span className="text-xs font-medium text-foreground">Seguro</span>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -left-6 bg-card border border-border rounded-lg p-3 shadow-luxury"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="flex items-center space-x-2">
                <Zap className="w-3 h-3 text-secondary" />
                <span className="text-xs font-medium text-foreground">Rápido</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Feature Highlights */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="flex items-center space-x-4 p-6 bg-card/50 border border-border rounded-xl backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
