'use client';

import { motion } from 'framer-motion';
import { LineChart, BarChart3, PieChart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function FundosInvestimentoPage() {
  return (
    <div className="min-h-screen">
      {/* Hero com imagem sticky ao fundo (efeito igual às outras páginas) */}
      <section className="relative">
        {/* camada de imagem sticky visível apenas nesta seção */}
        <div className="sticky top-0 h-[60vh] sm:h-[70vh] lg:h-[75vh] -z-10 bg-background flex items-center justify-center">
          <img
            src="/assets/imagnes/enhanced_fundo-de-investimento-em-acoes-entenda-mais-sobre-o-fia.png"
            alt="Picredi Fundos de Investimento"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/30" />
        </div>
        <div className="relative py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center max-w-4xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-good-times text-foreground mb-6">
                Fundos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">Investimento</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Portfólios profissionais com gestão especializada em diferentes estratégias e perfis de risco.
              </p>
              <div className="flex gap-4 justify-center">
                <Button variant="accent">Ver Fundos</Button>
                <Button variant="outline">Falar com Assessor</Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 className="text-3xl sm:text-4xl font-good-times text-foreground mb-10 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            Estratégias
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: LineChart, title: 'Renda Fixa', desc: 'Fundos conservadores com foco em juros e crédito.' },
              { icon: BarChart3, title: 'Multimercado', desc: 'Diversificação com múltiplas classes de ativos.' },
              { icon: PieChart, title: 'Ações', desc: 'Participação em empresas com visão de longo prazo.' },
            ].map((f, idx) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: idx * 0.1 }}>
                <Card variant="glass" className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                      <f.icon className="w-6 h-6 text-accent" />
                    </div>
                    <CardTitle className="text-xl">{f.title}</CardTitle>
                    <CardDescription className="text-base">{f.desc}</CardDescription>
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
              { title: 'Gestão Especializada', desc: 'Equipe dedicada a análises e alocação.' },
              { title: 'Diversificação', desc: 'Redução de risco com múltiplos ativos.' },
              { title: 'Acesso Fácil', desc: 'Aplicação e resgate com poucos cliques.' },
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
    </div>
  );
}


