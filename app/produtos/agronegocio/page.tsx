'use client';

import { motion } from 'framer-motion';
import { Sprout, Tractor, ShieldCheck, Coins } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function AgronegocioPage() {
  return (
    <div className="min-h-screen">
      {/* Hero com imagem sticky ao fundo (efeito igual às outras páginas) */}
      <section className="relative -mt-16">
        {/* camada de imagem sticky visível apenas nesta seção */}
        <div className="sticky top-0 h-[60vh] sm:h-[70vh] lg:h-[75vh] -z-10 bg-background flex items-center justify-center">
          <img
            src="/assets/imagnes/enhanced_IMAGEM-2023-11-13T162613-122.png"
            alt="Picredi Agronegócio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/30" />
        </div>
        <div className="relative py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-good-times text-foreground mb-6">
                Soluções para o <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">Agronegócio</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Crédito e serviços financeiros sob medida para impulsionar a produção, a safra e o crescimento do campo.
              </p>
              <div className="flex gap-4 justify-center">
                <Button variant="accent">Falar com Especialista</Button>
                <Button variant="outline">Simular Crédito</Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl sm:text-4xl font-good-times text-foreground mb-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Linhas de Crédito
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Sprout, title: 'Crédito Rural', desc: 'Capital de giro e custeio para safra.' },
              { icon: Tractor, title: 'Máquinas e Equipamentos', desc: 'Financiamento de tratores e implementos.' },
              { icon: Coins, title: 'Armazenagem e Infraestrutura', desc: 'Investimentos em silos e melhorias.' },
            ].map((item, idx) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: idx * 0.1 }}>
                <Card variant="glass" className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription className="text-base">{item.desc}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 className="text-3xl sm:text-4xl font-good-times text-foreground mb-10 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            Benefícios
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: 'Condições Competitivas', desc: 'Linhas subsidiadas e prazos flexíveis.' },
              { icon: Sprout, title: 'Atendimento Especializado', desc: 'Time com experiência no agronegócio.' },
              { icon: Coins, title: 'Fluxo de Caixa', desc: 'Soluções que acompanham o ciclo produtivo.' },
            ].map((b, idx) => (
              <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: idx * 0.1 }}>
                <Card variant="luxury" className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                      <b.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <CardTitle className="text-xl">{b.title}</CardTitle>
                    <CardDescription className="text-base">{b.desc}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


