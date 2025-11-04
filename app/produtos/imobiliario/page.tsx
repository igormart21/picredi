'use client';

import { motion } from 'framer-motion';
import { Landmark, Home, MapPin, Percent } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function ImobiliarioPage() {
  return (
    <div className="min-h-screen">
      {/* Hero: imagem no topo e conteúdo abaixo (sem sticky/overlay) */}
      <section>
        <div className="w-full h-[60vh] sm:h-[70vh] lg:h-[75vh]">
          <img
            src="/assets/imagnes/enhanced_real-estate-finance-mortgage-interest-260nw-2636368449-jpg copy.png"
            alt="Picredi Crédito Imobiliário"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center max-w-4xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-good-times text-foreground mb-6">
                Crédito <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">Imobiliário</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Financiamento, consórcio e portabilidade com condições competitivas e atendimento consultivo.
              </p>
              
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 className="text-3xl sm:text-4xl font-good-times text-foreground mb-10 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            Soluções
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Home, title: 'Crédito Habitacional', desc: 'Compra, construção ou reforma do seu imóvel.' },
              { icon: Landmark, title: 'Consórcio', desc: 'Planejamento de longo prazo sem juros.' },
              { icon: Percent, title: 'Portabilidade', desc: 'Traga seu crédito e reduza as parcelas.' },
            ].map((s, idx) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: idx * 0.1 }}>
                <Card variant="glass" className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                      <s.icon className="w-6 h-6 text-accent" />
                    </div>
                    <CardTitle className="text-xl">{s.title}</CardTitle>
                    <CardDescription className="text-base">{s.desc}</CardDescription>
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
              { title: 'Taxas Competitivas', desc: 'Condições para diferentes perfis e prazos.' },
              { title: 'Aprovação Ágil', desc: 'Processo digital e sem burocracia.' },
              { title: 'Assessoria Completa', desc: 'Acompanhamento em todas as etapas.' },
            ].map((b, idx) => (
              <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: idx * 0.1 }}>
                <Card variant="luxury" className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl">{b.title}</CardTitle>
                    <CardDescription className="text-base">{b.desc}</CardDescription>
                  </CardHeader>
                  <CardContent />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final da página */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="accent">Simular Financiamento</Button>
            <Button size="lg" variant="outline">Falar com Especialista</Button>
          </div>
        </div>
      </section>
    </div>
  );
}


