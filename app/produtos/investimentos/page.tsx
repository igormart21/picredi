'use client';

import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Shield, 
  Zap, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Download,
  Smartphone,
  BarChart3,
  Target,
  PieChart,
  DollarSign,
  Globe,
  Lock,
  Star,
  Award,
  Users,
  Activity,
  LineChart,
  TrendingDown
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const investmentTypes = [
  {
    icon: BarChart3,
    title: 'Renda Fixa',
    description: 'Investimentos seguros com rendimento garantido',
    minValue: 'R$ 10',
    return: '12-15% a.a.',
    risk: 'Baixo',
    color: 'from-green-500 to-green-600',
    features: ['CDB', 'LCI/LCA', 'Tesouro Direto', 'Debêntures'],
  },
  {
    icon: TrendingUp,
    title: 'Renda Variável',
    description: 'Potencial de maior retorno com análise profissional',
    minValue: 'R$ 100',
    return: '15-25% a.a.',
    risk: 'Médio',
    color: 'from-blue-500 to-blue-600',
    features: ['Fundos de Ações', 'ETFs', 'Stocks', 'REITs'],
  },
  {
    icon: Target,
    title: 'Gestão Profissional',
    description: 'Gestão especializada com análise de mercado',
    minValue: 'R$ 10',
    return: '14-18% a.a.',
    risk: 'Baixo-Médio',
    color: 'from-purple-500 to-purple-600',
    features: ['Análise Especializada', 'Rebalanceamento', 'Diversificação', 'Taxa Zero'],
    popular: true,
  },
];

const benefits = [
  {
    icon: BarChart3,
    title: 'Análise de Mercado',
    description: 'Nossa equipe analisa o mercado diariamente para otimizar seus investimentos',
    highlight: 'Análise Diária',
  },
  {
    icon: Shield,
    title: 'Segurança Máxima',
    description: 'Seus investimentos protegidos com tecnologia bancária',
    highlight: 'ISO 27001',
  },
  {
    icon: Zap,
    title: 'Rebalanceamento Automático',
    description: 'Ajuste automático da carteira conforme o mercado',
    highlight: '24/7',
  },
  {
    icon: DollarSign,
    title: 'Taxa Zero',
    description: 'Invista sem pagar taxas de administração',
    highlight: 'R$ 0',
  },
  {
    icon: PieChart,
    title: 'Diversificação Inteligente',
    description: 'Carteira diversificada para reduzir riscos',
    highlight: 'Multi-Ativos',
  },
  {
    icon: Users,
    title: 'Suporte Especializado',
    description: 'Equipe de especialistas em investimentos',
    highlight: '24/7',
  },
];

const features = [
  {
    icon: CheckCircle,
    title: 'Aplicação Mínima Baixa',
    description: 'Comece investindo a partir de R$ 10',
  },
  {
    icon: CheckCircle,
    title: 'Sem Taxa de Administração',
    description: 'Invista sem pagar taxas mensais',
  },
  {
    icon: CheckCircle,
    title: 'Relatórios Detalhados',
    description: 'Acompanhe performance com relatórios completos',
  },
  {
    icon: CheckCircle,
    title: 'Meta de Investimento',
    description: 'Defina metas e acompanhe o progresso',
  },
  {
    icon: CheckCircle,
    title: 'Resgate Rápido',
    description: 'Resgate seus investimentos em até 1 dia útil',
  },
  {
    icon: CheckCircle,
    title: 'Educação Financeira',
    description: 'Conteúdo educativo para melhorar seus investimentos',
  },
];

const steps = [
  {
    step: '01',
    title: 'Defina seu Perfil',
    description: 'Responda algumas perguntas sobre seus objetivos',
    icon: Target,
  },
  {
    step: '02',
    title: 'Análise Especializada',
    description: 'Nossa equipe analisa o mercado e cria sua carteira ideal',
    icon: BarChart3,
  },
  {
    step: '03',
    title: 'Aprove a Estratégia',
    description: 'Revise e aprove a estratégia sugerida',
    icon: CheckCircle,
  },
  {
    step: '04',
    title: 'Monitore e Cresça',
    description: 'Acompanhe a performance e ajuste conforme necessário',
    icon: TrendingUp,
  },
];

const performanceData = [
  { month: 'Jan', return: 2.1 },
  { month: 'Fev', return: 1.8 },
  { month: 'Mar', return: 2.5 },
  { month: 'Abr', return: 1.9 },
  { month: 'Mai', return: 2.3 },
  { month: 'Jun', return: 2.7 },
];

export default function InvestimentosPage() {
  return (
    <div className="min-h-screen">
      {/* Hero com imagem sticky ao fundo (efeito igual às outras páginas) */}
      <section className="relative">
        {/* camada de imagem sticky visível apenas nesta seção */}
        <div className="sticky top-0 h-[60vh] sm:h-[70vh] lg:h-[75vh] -z-10 bg-background flex items-center justify-center">
          <img
            src="/assets/imagnes/enhanced_touro1-jpg.png"
            alt="Picredi Investimentos"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/30" />
        </div>
        <div className="relative py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h1 className="text-display text-4xl sm:text-5xl lg:text-6xl font-good-times text-foreground">
                        Investimentos{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
                          Profissionais
                        </span>
                      </h1>
                      <p className="text-lg text-muted-foreground mt-2">
                        Gestão especializada
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                    Invista com gestão profissional e análise especializada. 
                    Carteiras otimizadas, taxa zero e acompanhamento dedicado.
                  </p>
                </div>

                {/* CTA Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <Button size="lg" variant="accent" className="group">
                    Começar a Investir
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Simular Investimento
                  </Button>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                  className="flex items-center space-x-8 pt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">R$ 10</div>
                    <div className="text-sm text-muted-foreground">Aplicação Mínima</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">R$ 0</div>
                    <div className="text-sm text-muted-foreground">Taxa de Admin</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">18%</div>
                    <div className="text-sm text-muted-foreground">Rendimento Médio</div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Performance Chart */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Card variant="luxury" className="p-8">
                  <CardHeader>
                    <CardTitle className="text-xl mb-2">Performance dos Últimos 6 Meses</CardTitle>
                    <CardDescription>Rendimento médio mensal da carteira Picredi</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {performanceData.map((data, index) => (
                        <motion.div
                          key={data.month}
                          className="flex items-center justify-between"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <span className="text-sm font-medium text-muted-foreground">{data.month}</span>
                          <div className="flex items-center space-x-3">
                            <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                              <motion.div
                                className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full"
                                initial={{ width: '0%' }}
                                animate={{ width: `${(data.return / 3) * 100}%` }}
                                transition={{ duration: 1, delay: index * 0.1 }}
                              />
                            </div>
                            <span className="text-sm font-bold text-green-500">+{data.return}%</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    
                    <div className="mt-6 p-4 bg-green-500/10 rounded-lg">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground">Rendimento Total</span>
                        <span className="text-lg font-bold text-green-500">+13.3%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Types Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-good-times text-foreground mb-6">
              Tipos de{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
                Investimento
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Diversas opções para diferentes perfis de investidor. 
              Nossa IA escolhe a melhor estratégia para você.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {investmentTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {type.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-accent to-secondary text-primary px-4 py-1 rounded-full text-sm font-medium">
                      Mais Popular
                    </span>
                  </div>
                )}
                
                <Card 
                  variant={type.popular ? 'luxury' : 'default'} 
                  className="h-full hover:scale-105 transition-transform duration-300"
                >
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${type.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <type.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl mb-2">{type.title}</CardTitle>
                    <CardDescription className="text-base mb-6">
                      {type.description}
                    </CardDescription>
                    
                    {/* Investment Details */}
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Aplicação Mínima:</span>
                        <span className="font-semibold text-foreground">{type.minValue}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Rendimento:</span>
                        <span className="font-semibold text-green-500">{type.return}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Risco:</span>
                        <span className={`font-semibold ${
                          type.risk === 'Baixo' ? 'text-green-500' : 
                          type.risk === 'Médio' ? 'text-yellow-500' : 'text-red-500'
                        }`}>
                          {type.risk}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Produtos Disponíveis:</h4>
                      <div className="flex flex-wrap gap-2">
                        {type.features.map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="px-3 py-1 bg-muted/50 text-muted-foreground rounded-full text-sm"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-col space-y-3">
                      <Button variant={type.popular ? "accent" : "outline"} className="w-full">
                        Investir em {type.title}
                      </Button>
                      <Button variant="ghost" className="w-full">
                        Saiba Mais
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-good-times text-foreground mb-6">
              Vantagens da{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
                Picredi Invest
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Gestão profissional para maximizar seus investimentos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card variant="glass" className="h-full text-center hover:scale-105 transition-transform duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-8 h-8 text-accent" />
                    </div>
                    <CardTitle className="text-xl mb-2">{benefit.title}</CardTitle>
                    <CardDescription className="text-base mb-4">
                      {benefit.description}
                    </CardDescription>
                    <div className="px-3 py-1 bg-gradient-to-r from-accent to-secondary text-primary rounded-full text-sm font-medium inline-block">
                      {benefit.highlight}
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-good-times text-foreground mb-6">
              Recursos{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
                Avançados
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Ferramentas profissionais para investidores de todos os níveis.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card variant="default" className="h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                        <feature.icon className="w-6 h-6 text-green-500" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                        <CardDescription className="text-sm">
                          {feature.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Start */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-good-times text-foreground mb-6">
              Como{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
                Começar
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Processo simples para começar a investir com gestão profissional.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-accent to-secondary z-0" />
                )}
                
                <Card variant="luxury" className="relative z-10 text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-accent to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-primary font-bold text-lg">{step.step}</span>
                    </div>
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-6 h-6 text-accent" />
                    </div>
                    <CardTitle className="text-xl mb-2">{step.title}</CardTitle>
                    <CardDescription className="text-base">
                      {step.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Management Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-good-times text-foreground mb-6">
                Gestão{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
                  Profissional
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Nossa equipe de especialistas analisa o mercado diariamente para criar 
                a carteira ideal para seus objetivos e perfil de risco.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Análise de Mercado</h3>
                    <p className="text-sm text-muted-foreground">Monitoramento diário de oportunidades</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Otimização de Carteira</h3>
                    <p className="text-sm text-muted-foreground">Rebalanceamento estratégico</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Gestão de Risco</h3>
                    <p className="text-sm text-muted-foreground">Proteção contra volatilidade</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card variant="luxury" className="p-8">
                <CardHeader>
                  <CardTitle className="text-xl mb-2">Performance da Gestão</CardTitle>
                  <CardDescription>Resultados dos últimos 12 meses</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-muted-foreground">Precisão da Análise</span>
                      <span className="text-lg font-bold text-accent">94.2%</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-muted-foreground">Retorno Médio</span>
                      <span className="text-lg font-bold text-green-500">+18.7%</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-muted-foreground">Redução de Risco</span>
                      <span className="text-lg font-bold text-blue-500">-23%</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-muted-foreground">Clientes Satisfeitos</span>
                      <span className="text-lg font-bold text-purple-500">98.5%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
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
              Pronto para Investir?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Comece a investir com gestão profissional e tenha acesso a carteiras 
              otimizadas sem pagar taxas de administração.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="accent" className="group">
                Começar a Investir
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                Simular Investimento
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
