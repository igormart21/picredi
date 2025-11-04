'use client';

import { motion } from 'framer-motion';
import { LineChart, BarChart3, PieChart, Shuffle, Calculator, Wallet, Clock, Percent, Receipt, CheckCircle, Info, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function FundosInvestimentoPage() {
  return (
    <div className="min-h-screen">
      {/* Hero: imagem no topo e conteúdo abaixo (sem sticky/overlay) */}
      <section>
        <div className="w-full h-[60vh] sm:h-[70vh] lg:h-[75vh]">
          <img
            src="/assets/imagnes/enhanced_fundo-de-investimento-em-acoes-entenda-mais-sobre-o-fia.png"
            alt="Picredi Fundos de Investimento"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center max-w-4xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-good-times text-foreground mb-6">
                Fundos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">Investimento</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Portfólios profissionais com gestão especializada em diferentes estratégias e perfis de risco.
              </p>
              
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

      {/* Multimercados - Seção detalhada */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-good-times text-foreground mb-4">
              Fundos <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">Multimercados</span>
            </h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              Diversificação, flexibilidade e gestão ativa em um único produto.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Card variant="luxury" className="h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                      <Shuffle className="w-5 h-5 text-accent" />
                    </div>
                    <CardTitle className="text-xl">Como funciona um fundo multimercado?</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    Um fundo multimercado pode investir em várias classes de ativos (ações, renda fixa, moedas, entre outros) dentro de um mesmo produto, 
                    buscando o melhor rendimento em diferentes mercados.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}>
              <Card variant="luxury" className="h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                      <Calculator className="w-5 h-5 text-accent" />
                    </div>
                    <CardTitle className="text-xl">Como funciona o rendimento?</CardTitle>
                  </div>
                  <CardContent className="pt-0">
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium text-foreground">Cálculo:</span> o valor da cota é atualizado diariamente, refletindo a valorização dos ativos da carteira.
                        </p>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium text-foreground">Distribuição:</span> ganhos e perdas são incorporados à cota; não há distribuição periódica e os lucros permanecem investidos.
                        </p>
                      </li>
                    </ul>
                  </CardContent>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <Card variant="luxury" className="h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                      <Wallet className="w-5 h-5 text-accent" />
                    </div>
                    <CardTitle className="text-xl">E o resgate?</CardTitle>
                  </div>
                  <CardContent className="pt-0">
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-3">
                        <Clock className="w-4 h-4 text-muted-foreground mt-1.5" />
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium text-foreground">Prazo:</span> definido em regulamento; varia conforme a política do fundo.
                        </p>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Receipt className="w-4 h-4 text-muted-foreground mt-1.5" />
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium text-foreground">Procedimento:</span> solicite o resgate à administradora; o crédito é efetuado após o prazo estabelecido.
                        </p>
                      </li>
                    </ul>
                  </CardContent>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>
              <Card variant="luxury" className="h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                      <Percent className="w-5 h-5 text-accent" />
                    </div>
                    <CardTitle className="text-xl">Quais os custos?</CardTitle>
                  </div>
                  <CardContent className="pt-0">
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium text-foreground">Taxa de administração:</span> geralmente entre 1% e 2% a.a., podendo ser maior em estratégias complexas.
                        </p>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium text-foreground">Taxa de performance:</span> cobrada sobre ganhos que superam um benchmark.
                        </p>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium text-foreground">Outros custos:</span> custódia, auditoria e despesas operacionais diluídas entre os cotistas.
                        </p>
                      </li>
                    </ul>
                  </CardContent>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <Card variant="luxury" className="h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                      <Receipt className="w-5 h-5 text-accent" />
                    </div>
                    <CardTitle className="text-xl">Como funciona a tributação?</CardTitle>
                  </div>
                  <CardContent className="pt-0">
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium text-foreground">Imposto de Renda:</span> tabela regressiva (fundos longos: 22,5% até 15%; curtos: 22,5% até 20%).
                        </p>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium text-foreground">Come-cotas:</span> antecipação semestral (maio e novembro) de IR: 15% (longo prazo) e 20% (curto prazo).
                        </p>
                      </li>
                    </ul>
                  </CardContent>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }}>
              <Card variant="luxury" className="h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-accent" />
                    </div>
                    <CardTitle className="text-xl">Vantagens do Multimercado</CardTitle>
                  </div>
                  <CardContent className="pt-0">
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium text-foreground">Flexibilidade e diversificação:</span> diferentes estratégias conforme o cenário econômico.
                        </p>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium text-foreground">Retorno:</span> busca superar o CDI no médio e longo prazo, especialmente em ciclos de Selic em queda.
                        </p>
                      </li>
                    </ul>
                  </CardContent>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
              <Card variant="luxury" className="h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                      <Info className="w-5 h-5 text-accent" />
                    </div>
                    <CardTitle className="text-xl">O que são fundos de investimento?</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    São condomínios de investidores que reúnem recursos para aplicar em diversos ativos de uma só vez, conforme regulamento e estratégia definida.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.35 }}>
              <Card variant="luxury" className="h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-accent" />
                    </div>
                    <CardTitle className="text-xl">Quem são os gestores?</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    Profissionais registrados na CVM, especializados em estruturar estratégias e alocar os recursos de forma eficiente, buscando a melhor relação risco-retorno.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA final da página */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="accent">Ver Fundos</Button>
            <Button size="lg" variant="outline">Falar com Assessor</Button>
          </div>
        </div>
      </section>
    </div>
  );
}


