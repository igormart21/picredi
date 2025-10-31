'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, ShoppingCart, Smartphone, Zap } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useRouter } from 'next/navigation';

export function DigitalExperience() {
  const router = useRouter();

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Imagem */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/assets/enhanced_joyous-person-delighted-online-shopping-carefully-typing-credit-card.png"
                alt="Experiência digital Picredi - Compras online com segurança e praticidade"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
          </motion.div>

          {/* Conteúdo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-good-times text-foreground mb-6">
              Experiência{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
                Digital
              </span>{' '}
              Completa
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Tenha acesso a uma experiência bancária moderna e intuitiva. Com nossa conta digital e cartões,
              gerencie seu dinheiro com total segurança e praticidade. Faça compras online, transferências instantâneas
              e controle suas finanças a qualquer hora e em qualquer lugar, direto do seu celular ou computador.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Smartphone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Conta Digital Completa</h3>
                  <p className="text-muted-foreground">
                    Acesse sua conta 24 horas por dia pelo app. Gerencie seu dinheiro, faça PIX ilimitado,
                    invista e acompanhe todas as suas movimentações em tempo real.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CreditCard className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Cartões Seguros</h3>
                  <p className="text-muted-foreground">
                    Cartões de crédito e débito com tecnologia avançada. Use para compras online e presenciais
                    com proteção completa e cashback exclusivo.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Transações Instantâneas</h3>
                  <p className="text-muted-foreground">
                    PIX em segundos, aprovações rápidas e notificações em tempo real. Tudo que você precisa
                    para movimentar seu dinheiro com agilidade e segurança.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="accent" 
                size="lg"
                onClick={() => router.push('/produtos/conta-corrente')}
              >
                Abrir Conta Digital
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => router.push('/contato')}
              >
                Falar com Especialista
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

