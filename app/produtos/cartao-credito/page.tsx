'use client';

import { motion } from 'framer-motion';
import { 
  CreditCard, 
  TrendingUp, 
  Shield, 
  Zap, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Download,
  Smartphone,
  Gift,
  Plane,
  ShoppingBag,
  Star,
  Award,
  Globe,
  Lock
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { CreditCardComponent, CreditCardStack } from '@/components/ui/CreditCard';
import Link from 'next/link';

const cardTypes = [
  {
    variant: 'black' as const,
    name: 'Picredi Black',
    description: 'Para quem busca exclusividade e benefícios premium',
    limit: 'Até R$ 50.000',
    annualFee: 'R$ 0',
    cashback: '2%',
    features: ['Cashback 2%', 'Seguro viagem', 'Lounge Priority Pass', 'Concierge 24h'],
    popular: true,
  },
  {
    variant: 'gold' as const,
    name: 'Picredi Gold',
    description: 'O equilíbrio perfeito entre benefícios e praticidade',
    limit: 'Até R$ 25.000',
    annualFee: 'R$ 0',
    cashback: '1.5%',
    features: ['Cashback 1.5%', 'Seguro viagem', 'Programa de pontos', 'Atendimento prioritário'],
    popular: false,
  },
  {
    variant: 'platinum' as const,
    name: 'Picredi Platinum',
    description: 'Tecnologia e segurança para seu dia a dia',
    limit: 'Até R$ 15.000',
    annualFee: 'R$ 0',
    cashback: '1%',
    features: ['Cashback 1%', 'Seguro básico', 'App integrado', 'Notificações instantâneas'],
    popular: false,
  },
];

const benefits = [
  {
    icon: Gift,
    title: 'Cashback Automático',
    description: 'Receba dinheiro de volta em todas as suas compras',
    highlight: 'Até 2%',
  },
  {
    icon: Plane,
    title: 'Seguro Viagem',
    description: 'Proteção completa em suas viagens nacionais e internacionais',
    highlight: 'Incluso',
  },
  {
    icon: ShoppingBag,
    title: 'Programa de Pontos',
    description: 'Acumule pontos e troque por produtos e experiências',
    highlight: '1 ponto por R$ 1',
  },
  {
    icon: Shield,
    title: 'Proteção de Compras',
    description: 'Garantia estendida e proteção contra fraudes',
    highlight: 'Até 120 dias',
  },
  {
    icon: Star,
    title: 'Atendimento Premium',
    description: 'Suporte dedicado 24 horas por dia',
    highlight: '24/7',
  },
  {
    icon: Award,
    title: 'Sem Anuidade',
    description: 'Cartão sem taxa anual para sempre',
    highlight: 'R$ 0',
  },
];

const features = [
  {
    icon: CheckCircle,
    title: 'Aprovação Rápida',
    description: 'Resposta em até 5 minutos',
  },
  {
    icon: CheckCircle,
    title: 'Cartão',
    description: 'Use no celular antes do físico chegar',
  },
  {
    icon: CheckCircle,
    title: 'Bloqueio Instantâneo',
    description: 'Bloqueie e desbloqueie pelo app',
  },
  {
    icon: CheckCircle,
    title: 'Limite Dinâmico',
    description: 'Aumente seu limite conforme sua necessidade',
  },
  {
    icon: CheckCircle,
    title: 'Parcelamento Flexível',
    description: 'Parcelamento em até 24x sem juros',
  },
  {
    icon: CheckCircle,
    title: 'Extrato Detalhado',
    description: 'Acompanhe todos os seus gastos',
  },
];

const steps = [
  {
    step: '01',
    title: 'Solicite Online',
    description: 'Preencha o formulário em poucos minutos',
    icon: Smartphone,
  },
  {
    step: '02',
    title: 'Análise Instantânea',
    description: 'Nossa IA analisa seu perfil em segundos',
    icon: Zap,
  },
  {
    step: '03',
    title: 'Aprovação',
    description: 'Receba a aprovação em até 5 minutos',
    icon: CheckCircle,
  },
  {
    step: '04',
    title: 'Cartão Ativo',
    description: 'Use o cartão imediatamente',
    icon: CreditCard,
  },
];

export default function CartaoCreditoPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-background via-background to-muted/20">
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
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center">
                    <CreditCard className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h1 className="text-display text-4xl sm:text-5xl lg:text-6xl font-good-times text-foreground">
                      Cartão de{' '}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
                        Crédito
                      </span>
                    </h1>
                    <p className="text-lg text-muted-foreground mt-2">
                      Sem anuidade para sempre
                    </p>
                  </div>
                </div>
                
                <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                  Cartão premium com benefícios exclusivos, cashback automático 
                  e sem taxa anual. Sua vida financeira mais inteligente.
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
                  Solicitar Cartão
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline">
                  Simular Limite
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
                  <div className="text-2xl font-bold text-foreground">5 min</div>
                  <div className="text-sm text-muted-foreground">Aprovação</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">R$ 0</div>
                  <div className="text-sm text-muted-foreground">Anuidade</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">2%</div>
                  <div className="text-sm text-muted-foreground">Cashback</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Credit Cards Display */}
            <motion.div
              className="relative flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <CreditCardStack />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Card Types Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-good-times text-foreground mb-6">
              Escolha seu{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
                Cartão
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Três opções para diferentes perfis e necessidades. 
              Todos sem anuidade e com benefícios exclusivos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {cardTypes.map((cardType, index) => (
              <motion.div
                key={cardType.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {cardType.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-accent to-secondary text-primary px-4 py-1 rounded-full text-sm font-medium">
                      Mais Popular
                    </span>
                  </div>
                )}
                
                <Card 
                  variant={cardType.popular ? 'luxury' : 'default'} 
                  className="h-full hover:scale-105 transition-transform duration-300"
                >
                  <CardHeader className="text-center">
                    {/* Card Preview */}
                    <div className="mb-6">
                      <CreditCardComponent
                        variant={cardType.variant}
                        cardNumber="4532 **** **** 9012"
                        cardHolder="SEU NOME"
                        expiryDate="12/28"
                        className="mx-auto scale-75"
                      />
                    </div>
                    
                    <CardTitle className="text-2xl mb-2">{cardType.name}</CardTitle>
                    <CardDescription className="text-base mb-6">
                      {cardType.description}
                    </CardDescription>
                    
                    {/* Card Details */}
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Limite:</span>
                        <span className="font-semibold text-foreground">{cardType.limit}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Anuidade:</span>
                        <span className="font-semibold text-green-500">{cardType.annualFee}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Cashback:</span>
                        <span className="font-semibold text-accent">{cardType.cashback}</span>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {cardType.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-col space-y-3">
                      <Button variant={cardType.popular ? "accent" : "outline"} className="w-full">
                        Solicitar {cardType.name}
                      </Button>
                      <Button variant="ghost" className="w-full">
                        Comparar Cartões
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
              Benefícios{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
                Exclusivos
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Vantagens que fazem a diferença no seu dia a dia.
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
              Tecnologia que facilita sua vida financeira.
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

      {/* How to Apply */}
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
                Solicitar
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Processo simples e rápido. Em poucos minutos você terá seu cartão aprovado.
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

      {/* Security Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-good-times text-foreground mb-6">
                Segurança{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
                  Máxima
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Seu cartão protegido com as mais avançadas tecnologias de segurança 
                do mercado financeiro.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Lock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Criptografia Avançada</h3>
                    <p className="text-sm text-muted-foreground">Proteção de dados com tecnologia bancária</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Monitoramento 24/7</h3>
                    <p className="text-sm text-muted-foreground">Detecção de fraudes em tempo real</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Smartphone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Controle Total</h3>
                    <p className="text-sm text-muted-foreground">Bloqueie e desbloqueie pelo app</p>
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
              <div className="flex justify-center">
                <CreditCardComponent
                  variant="black"
                  cardNumber="4532 1234 5678 9012"
                  cardHolder="JOÃO SILVA"
                  expiryDate="12/28"
                  className="scale-110"
                />
              </div>
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
              Pronto para seu Cartão?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Solicite seu cartão Picredi agora e tenha acesso a todos os benefícios 
              exclusivos sem pagar anuidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="accent" className="group">
                Solicitar Cartão Agora
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                Simular Limite
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

