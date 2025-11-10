'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Sprout, Tractor, ShieldCheck, Coins, Activity, TrendingUp, Globe } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function AgronegocioPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen">
      {/* Hero: imagem no topo e conteúdo abaixo (sem sticky/overlay) */}
      <section>
        <div className="w-full h-[60vh] sm:h-[70vh] lg:h-[75vh]">
          <img
            src="/assets/enhanced_wide-angle-portrait-beautiful-young-cow-looking-camera-while-standing-shed-farm-copy-space_236854-27261.png"
            alt="Picredi Agronegócio"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-good-times text-foreground mb-6">
                As melhores soluções para seu investimento no <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">agronegócio</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Crédito e serviços financeiros sob medida para impulsionar a produção, a safra e o crescimento do campo.
              </p>
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

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-good-times text-foreground mb-6">
              Investimentos no agronegócio
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Com a Picredi Agronegócio, sua pecuária alcança outro nível: resultados rápidos, custos reduzidos e uma engorda que gera lucro de verdade. Com processos otimizados, tecnologia de ponta e o bem-estar animal como prioridade, garantimos que cada arroba entregue o retorno que você precisa. Fale agora com nossos especialistas e veja como podemos ajudar seu rebanho a produzir mais!
            </p>
          </motion.div>

          <motion.div
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {[
              { label: '18%', desc: 'Redução média no custo por arroba deliverida com gestão financeira integrada.' },
              { label: '120 dias', desc: 'Prazo estimado para payback em projetos de nutrição e manejo intensivo.' },
              { label: '+25%', desc: 'Incremento na taxa de lotação com monitoramento de pasto e genética orientada a dados.' },
            ].map((item) => (
              <div key={item.label} className="rounded-3xl border border-border/60 bg-muted/10 p-6 text-center">
                <div className="text-3xl font-bold text-accent">{item.label}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </motion.div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Activity,
                title: 'Compra e venda de animais',
                description:
                  'Aproveite ciclos favoráveis do mercado para comprar matrizes ou bezerros de qualidade e vender com margem ampliada.',
              },
              {
                icon: TrendingUp,
                title: 'Engorda intensiva',
                description:
                  'Estruture confinamentos com manejo de precisão para acelerar ganho de peso com menor custo diário.',
              },
              {
                icon: Globe,
                title: 'Gestão de pasto e genética',
                description:
                  'Invista em tecnologia, nutrição e genética superior para aumentar produtividade e assegurar liquidez.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card variant="glass" className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16 bg-accent/5 border border-accent/20 rounded-3xl p-8 sm:p-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl sm:text-3xl font-good-times text-foreground mb-4 text-center">
              A maneira mais eficiente de engordar seus lucros
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground text-center max-w-3xl mx-auto">
              Produzir mais arrobas com melhor conversão alimentar, reduzir desperdícios e acelerar o giro do capital é o caminho para lucratividade consistente. A Picredi conecta crédito, gestão financeira e consultoria técnica para destravar o potencial total do seu rebanho.
            </p>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card variant="luxury" className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl">Programas estruturados Picredi</CardTitle>
                  <CardDescription className="text-base leading-relaxed mt-4">
                    Combine crédito sazonal, hedge de preços e seguros paramétricos para proteger margens em todo o ciclo da pecuária.
                    Nossos especialistas desenham cronogramas de desembolso e fluxo de caixa aderentes ao calendário do campo.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card variant="luxury" className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl">Suporte técnico contínuo</CardTitle>
                  <CardDescription className="text-base leading-relaxed mt-4">
                    Acompanhe indicadores zootécnicos em dashboards exclusivos, receba alertas sobre custo da arroba e acesse protocolos
                    nutricionais validados por consultores Picredi. Tudo integrado ao seu ERP ou aplicativo de gestão.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl bg-background border border-border/60 p-6">
                <h4 className="text-lg font-semibold text-foreground mb-3">Benefícios adicionais</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="leading-relaxed">
                    <span className="text-accent font-semibold">• </span>
                    Assessoria jurídica para contratos de parceria, arrendamento e integração.
                  </li>
                  <li className="leading-relaxed">
                    <span className="text-accent font-semibold">• </span>
                    Marketplace de insumos com negociação centralizada e logística otimizada.
                  </li>
                  <li className="leading-relaxed">
                    <span className="text-accent font-semibold">• </span>
                    Inteligência climática e de mercado com projeções semanais de preços e demanda.
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl bg-secondary/10 border border-secondary/30 p-6">
                <h4 className="text-lg font-semibold text-foreground mb-3">Como começar hoje</h4>
                <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
                  <li>Realize um diagnóstico financeiro e produtivo completo com nossa equipe.</li>
                  <li>Defina metas de ganho de peso, taxa de prenhez e giro de capital por ciclo produtivo.</li>
                  <li>Estruture o plano Picredi com crédito direcionado, consultoria técnica e monitoramento contínuo.</li>
                </ol>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-good-times text-foreground mb-6">
              Pronto para Investir no Campo?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Fale com nossos especialistas e descubra as melhores soluções financeiras para o seu agronegócio.
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
                Simular operação
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


