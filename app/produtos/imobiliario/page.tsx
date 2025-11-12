'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function ImobiliarioPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen">
      {/* Hero: imagem no topo e conteúdo abaixo (sem sticky/overlay) */}
      <section>
        <div className="w-full h-[60vh] sm:h-[70vh] lg:h-[75vh]">
          <img
            src="/assets/imagnes/enhanced_real-estate-finance-mortgage-interest-260nw-2636368449-jpg copy.png"
            alt="Picredi Investimento Imobiliário"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center max-w-4xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-good-times text-foreground mb-6">
                Investimento <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">Imobiliário</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Investir no mercado imobiliário é uma forma tradicional de buscar segurança patrimonial e renda passiva, com diversas opções que variam em complexidade, liquidez e perfil de risco.
              </p>
              
            </motion.div>
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
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mt-16 bg-muted/20 border border-border rounded-3xl p-8 sm:p-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl sm:text-3xl font-good-times text-foreground mb-6 text-center">
              Já sabe como escolher o melhor investimento imobiliário?
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground text-center max-w-3xl mx-auto">
              A decisão ideal exige uma visão estratégica alinhada ao seu perfil, objetivos e capital disponível. Analise os pilares abaixo e monte uma carteira equilibrada entre valorização e renda passiva.
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Capital disponível',
                  description: 'Defina o investimento inicial e a capacidade de aportes futuros para escolher o veículo adequado.',
                },
                {
                  title: 'Objetivo financeiro',
                  description:
                    'Avalie se busca renda recorrente, valorização patrimonial ou diversificação do portfólio.',
                },
              ].map((item) => (
                <Card key={item.title} variant="luxury" className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <Card variant="luxury" className="mt-8">
              <CardHeader>
                <CardTitle className="text-lg">Precisa de renda passiva imediata?</CardTitle>
                <CardDescription className="text-sm sm:text-base leading-relaxed">
                  Aluguel por temporada ou fundos imobiliários (FIIs) são excelentes alternativas. Eles combinam liquidez
                  com retornos frequentes e possibilidade de reinvestimento automático dos proventos.
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA final da página */}
      <section className="py-20 bg-gradient-to-r from-accent/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-good-times text-foreground mb-6">
              Pronto para realizar sua operação?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Simule sua operação ou fale com nossos especialistas e encontre a melhor solução para o seu investimento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="accent"
                onClick={() => router.push('/contato')}
              >
                Falar com Especialista
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => router.push('/contato')}
              >
                Simular Operação
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


