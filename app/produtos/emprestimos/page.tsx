'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  PiggyBank, 
  Shield, 
  Zap, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Download,
  Smartphone,
  Calculator,
  Target,
  DollarSign,
  Globe,
  Lock,
  Star,
  Award,
  Users,
  Activity,
  CreditCard,
  TrendingUp,
  FileText,
  Home,
  Car,
  GraduationCap
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const loanTypes = [
  {
    icon: PiggyBank,
    title: 'Empréstimo Pessoal',
    description: 'Dinheiro rápido para suas necessidades',
    minValue: 'R$ 1.000',
    maxValue: 'R$ 50.000',
    rate: '3.5% a.m.',
    term: 'Até 24 meses',
    color: 'from-blue-500 to-blue-600',
    features: ['Aprovação em 5 min', 'Sem comprovação de renda', 'Dinheiro na conta', 'Sem taxa de abertura'],
    popular: true,
  },
  {
    icon: Home,
    title: 'Financiamento Imobiliário',
    description: 'Realize o sonho da casa própria',
    minValue: 'R$ 50.000',
    maxValue: 'R$ 1.000.000',
    rate: '0.89% a.m.',
    term: 'Até 360 meses',
    color: 'from-green-500 to-green-600',
    features: ['Taxa especial', 'Entrada facilitada', 'Seguro incluso', 'FGTS para entrada'],
  },
  {
    icon: Car,
    title: 'Financiamento de Veículos',
    description: 'Compre seu carro novo ou usado',
    minValue: 'R$ 10.000',
    maxValue: 'R$ 200.000',
    rate: '1.49% a.m.',
    term: 'Até 60 meses',
    color: 'from-purple-500 to-purple-600',
    features: ['Taxa competitiva', 'Sem entrada', 'Seguro incluso', 'Aprovação rápida'],
  },
];

const benefits = [
  {
    icon: Zap,
    title: 'Aprovação Rápida',
    description: 'Resposta em até 5 minutos para empréstimos pessoais',
    highlight: '5 min',
  },
  {
    icon: Shield,
    title: 'Segurança Máxima',
    description: 'Seus dados protegidos com tecnologia bancária',
    highlight: 'ISO 27001',
  },
  {
    icon: DollarSign,
    title: 'Taxas Competitivas',
    description: 'As melhores taxas do mercado para você',
    highlight: 'A partir de 3.5%',
  },
  {
    icon: Clock,
    title: 'Dinheiro Rápido',
    description: 'Receba o dinheiro na sua conta em até 1 dia útil',
    highlight: '24h',
  },
  {
    icon: Calculator,
    title: 'Simulação Gratuita',
    description: 'Simule seu empréstimo sem compromisso',
    highlight: 'Grátis',
  },
  {
    icon: Users,
    title: 'Atendimento Especializado',
    description: 'Equipe dedicada para te ajudar',
    highlight: '24/7',
  },
];

const features = [
  {
    icon: CheckCircle,
    title: 'Sem Taxa de Abertura',
    description: 'Empréstimo sem custos extras',
  },
  {
    icon: CheckCircle,
    title: 'Sem Comprovação de Renda',
    description: 'Aprovação baseada no seu relacionamento conosco',
  },
  {
    icon: CheckCircle,
    title: 'Parcelamento Flexível',
    description: 'Escolha o prazo que melhor se adequa ao seu orçamento',
  },
  {
    icon: CheckCircle,
    title: 'Antecipação Sem Juros',
    description: 'Antecipe parcelas sem pagar juros adicionais',
  },
  {
    icon: CheckCircle,
    title: 'Contrato Digital',
    description: 'Assine seu contrato online, sem burocracia',
  },
  {
    icon: CheckCircle,
    title: 'App Integrado',
    description: 'Gerencie seu empréstimo pelo app Picredi',
  },
];

const steps = [
  {
    step: '01',
    title: 'Simule Online',
    description: 'Use nossa calculadora para simular seu empréstimo',
    icon: Calculator,
  },
  {
    step: '02',
    title: 'Preencha o Formulário',
    description: 'Complete seus dados em poucos minutos',
    icon: FileText,
  },
  {
    step: '03',
    title: 'Aprovação Instantânea',
    description: 'Receba a aprovação em até 5 minutos',
    icon: CheckCircle,
  },
  {
    step: '04',
    title: 'Dinheiro na Conta',
    description: 'Receba o valor em até 1 dia útil',
    icon: PiggyBank,
  },
];

const requirements = [
  {
    icon: Smartphone,
    title: 'Documentos Necessários',
    items: [
      'RG ou CNH (frente e verso)',
      'CPF',
      'Comprovante de residência',
      'Comprovante de renda (opcional)'
    ]
  },
  {
    icon: CreditCard,
    title: 'Requisitos',
    items: [
      'Ser maior de 18 anos',
      'Ter conta Picredi há pelo menos 3 meses',
      'Não ter restrições no CPF',
      'Residir no Brasil'
    ]
  }
];

// Função para calcular a parcela usando juros compostos
function calculateInstallment(principal: number, monthlyRate: number, months: number): number {
  if (monthlyRate === 0) return principal / months;
  const rate = monthlyRate / 100;
  return principal * (rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1);
}

export default function EmprestimosPage() {
  const [loanAmount, setLoanAmount] = useState(10000);
  const [loanTerm, setLoanTerm] = useState(12);
  const monthlyRate = 3.5; // Taxa mensal fixa de 3.5%

  const installmentAmount = useMemo(() => {
    return calculateInstallment(loanAmount, monthlyRate, loanTerm);
  }, [loanAmount, loanTerm]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

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
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center">
                    <PiggyBank className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h1 className="text-display text-4xl sm:text-5xl lg:text-6xl font-good-times text-foreground">
                      Empréstimos{' '}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
                        Rápidos
                      </span>
                    </h1>
                    <p className="text-lg text-muted-foreground mt-2">
                      Dinheiro na conta em até 24h
                    </p>
                  </div>
                </div>
                
                <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                  Empréstimos com as melhores taxas do mercado, aprovação em 5 minutos 
                  e dinheiro na sua conta em até 1 dia útil.
                </p>
              </div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Link href="/contato">
                  <Button size="lg" variant="accent" className="group">
                    Simular Empréstimo
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/contato">
                  <Button size="lg" variant="outline">
                    Falar com Especialista
                  </Button>
                </Link>
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
                  <div className="text-2xl font-bold text-foreground">3.5%</div>
                  <div className="text-sm text-muted-foreground">Taxa Mensal</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">24h</div>
                  <div className="text-sm text-muted-foreground">Dinheiro na Conta</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Loan Calculator Preview */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card variant="luxury" className="p-8">
                <CardHeader>
                  <CardTitle className="text-xl mb-2">Simulador de Empréstimo</CardTitle>
                  <CardDescription>Calcule suas parcelas sem compromisso</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Valor do Empréstimo</label>
                        <div className="mt-1">
                          <input 
                            type="range" 
                            min="1000" 
                            max="50000" 
                            value={loanAmount}
                            onChange={(e) => setLoanAmount(Number(e.target.value))}
                            step="1000"
                            className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                          />
                          <div className="flex justify-between text-xs text-muted-foreground mt-1">
                            <span>R$ 1.000</span>
                            <span>R$ 50.000</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Prazo</label>
                        <div className="mt-1">
                          <input 
                            type="range" 
                            min="6" 
                            max="24" 
                            value={loanTerm}
                            onChange={(e) => setLoanTerm(Number(e.target.value))}
                            step="1"
                            className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                          />
                          <div className="flex justify-between text-xs text-muted-foreground mt-1">
                            <span>6 meses</span>
                            <span>24 meses</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-accent/10 rounded-lg">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium text-muted-foreground">Valor Solicitado:</span>
                          <span className="font-semibold text-foreground">{formatCurrency(loanAmount)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm font-medium text-muted-foreground">Parcelas:</span>
                          <span className="font-semibold text-foreground">{loanTerm}x</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm font-medium text-muted-foreground">Valor da Parcela:</span>
                          <span className="font-semibold text-accent">{formatCurrency(installmentAmount)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm font-medium text-muted-foreground">Taxa Mensal:</span>
                          <span className="font-semibold text-green-500">{monthlyRate.toFixed(2)}%</span>
                        </div>
                      </div>
                    </div>
                    
                    <Link href="/contato">
                      <Button className="w-full">
                        Solicitar Empréstimo
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Loan Types Section */}
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
                Empréstimo
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Soluções financeiras para diferentes necessidades. 
              Escolha a opção que melhor se adequa ao seu perfil.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {loanTypes.map((loan, index) => (
              <motion.div
                key={loan.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {loan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-accent to-secondary text-primary px-4 py-1 rounded-full text-sm font-medium">
                      Mais Popular
                    </span>
                  </div>
                )}
                
                <Card 
                  variant={loan.popular ? 'luxury' : 'default'} 
                  className="h-full hover:scale-105 transition-transform duration-300"
                >
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${loan.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <loan.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl mb-2">{loan.title}</CardTitle>
                    <CardDescription className="text-base mb-6">
                      {loan.description}
                    </CardDescription>
                    
                    {/* Loan Details */}
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Valor:</span>
                        <span className="font-semibold text-foreground">{loan.minValue} - {loan.maxValue}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Taxa:</span>
                        <span className="font-semibold text-green-500">{loan.rate}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Prazo:</span>
                        <span className="font-semibold text-accent">{loan.term}</span>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Vantagens:</h4>
                      <ul className="space-y-2">
                        {loan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-col space-y-3">
                      <Link href="/contato">
                        <Button variant="accent" className="w-full">
                          Simular {loan.title}
                        </Button>
                      </Link>
                      <Link href="/contato">
                        <Button variant="outline" className="w-full">
                          Saiba Mais
                        </Button>
                      </Link>
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
              Vantagens dos{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
                Empréstimos Picredi
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Condições especiais para clientes Picredi.
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
                <Card variant="glass" className="h-full flex flex-col text-center hover:scale-105 transition-transform duration-300">
                  <CardHeader className="flex-1 flex flex-col">
                    <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-8 h-8 text-accent" />
                    </div>
                    <CardTitle className="text-xl mb-3 min-h-[3rem] flex items-center justify-center">
                      {benefit.title}
                    </CardTitle>
                    <CardDescription className="text-base mb-6 min-h-[4rem] flex items-start justify-center">
                      {benefit.description}
                    </CardDescription>
                    <div className="mt-auto pt-2">
                      <div className="px-3 py-1 bg-gradient-to-r from-accent to-secondary text-primary rounded-full text-sm font-medium inline-block">
                        {benefit.highlight}
                      </div>
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
                Exclusivos
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Benefícios que fazem a diferença na sua experiência.
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
              Processo simples e rápido para ter seu empréstimo aprovado.
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

      {/* Requirements Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-good-times text-foreground mb-6">
              Documentos e{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
                Requisitos
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Tudo que você precisa para solicitar seu empréstimo.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {requirements.map((req, index) => (
              <motion.div
                key={req.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card variant="glass" className="h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                        <req.icon className="w-6 h-6 text-accent" />
                      </div>
                      <CardTitle className="text-xl">{req.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {req.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
              Pronto para seu Empréstimo?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Simule seu empréstimo agora e tenha dinheiro na sua conta 
              em até 1 dia útil com as melhores taxas do mercado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contato">
                <Button size="lg" variant="accent" className="group">
                  Simular Empréstimo
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contato">
                <Button size="lg" variant="outline">
                  Falar com Especialista
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

