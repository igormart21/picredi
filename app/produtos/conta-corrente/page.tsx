'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  CreditCard, 
  TrendingUp, 
  Shield, 
  Zap, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Download,
  Smartphone as PhoneIcon,
  CreditCard as CardIcon,
  PiggyBank,
  Globe
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const features = [
  {
    icon: Zap,
    title: 'PIX Instantâneo',
    description: 'Transferências em segundos, 24 horas por dia',
    highlight: 'Gratuito',
  },
  {
    icon: CreditCard,
    title: 'Cartão Sem Anuidade',
    description: 'Cartão de débito e crédito sem taxas',
    highlight: 'Zero Taxa',
  },
  {
    icon: TrendingUp,
    title: 'Investimentos Integrados',
    description: 'Acesse fundos e renda fixa direto do app',
    highlight: 'A partir de R$ 10',
  },
  {
    icon: Shield,
    title: 'Segurança Máxima',
    description: 'Criptografia bancária de nível militar',
    highlight: 'ISO 27001',
  },
];

const benefits = [
  {
    icon: CheckCircle,
    title: 'Sem Taxa de Manutenção',
    description: 'Mantenha sua conta sem pagar nada',
  },
  {
    icon: CheckCircle,
    title: 'Transferências Ilimitadas',
    description: 'Faça quantas transferências quiser',
  },
  {
    icon: CheckCircle,
    title: 'Saque em Caixas Eletrônicos',
    description: 'Saques gratuitos em toda a rede Banco24Horas',
  },
  {
    icon: CheckCircle,
    title: 'Extrato Detalhado',
    description: 'Acompanhe todas as suas movimentações',
  },
  {
    icon: CheckCircle,
    title: 'Notificações em Tempo Real',
    description: 'Receba alertas instantâneos de todas as transações',
  },
  {
    icon: CheckCircle,
    title: 'Suporte 24/7',
    description: 'Atendimento disponível a qualquer hora',
  },
];

const requirements = [
  {
    icon: PhoneIcon,
    title: 'Documentos Necessários',
    items: [
      'RG ou CNH (frente e verso)',
      'CPF',
      'Comprovante de residência',
      'Comprovante de renda'
    ]
  },
  {
    icon: CardIcon,
    title: 'Requisitos',
    items: [
      'Ser maior de 18 anos',
      'Ter renda mínima de R$ 500',
      'Não ter restrições no CPF',
      'Residir no Brasil'
    ]
  }
];

const steps = [
  {
    step: '01',
    title: 'Baixe o App',
    description: 'Faça o download do app Picredi na App Store ou Google Play',
    icon: Download,
  },
  {
    step: '02',
    title: 'Cadastre-se',
    description: 'Preencha seus dados pessoais e documentos',
    icon: Smartphone,
  },
  {
    step: '03',
    title: 'Validação',
    description: 'Nossa equipe valida seus documentos em até 24h',
    icon: Shield,
  },
  {
    step: '04',
    title: 'Conta Ativa',
    description: 'Sua conta fica ativa e você já pode usar todos os serviços',
    icon: CheckCircle,
  },
];

export default function ContaCorrentePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen">
      {/* Hero com imagem sticky ao fundo (efeito igual ao Quem Somos) */}
      <section className="relative">
        {/* camada de imagem sticky visível apenas nesta seção */}
        <div className="sticky top-0 h-[45vh] sm:h-[55vh] lg:h-[60vh] -z-10 bg-background flex items-center justify-center">
          <img
            src="/assets/imagnes/image-115.png"
            alt="Picredi App Preview"
            className="w-full h-full object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/15 to-black/10" />
        </div>
        <div className="relative py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                  <Smartphone className="w-10 h-10 text-white" />
                </div>
              </div>
              <h1 className="text-display text-4xl sm:text-5xl lg:text-6xl font-good-times text-foreground mb-6">
                Conta Corrente{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">Digital</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Gerencie seu dinheiro com total liberdade e segurança. 
                Uma conta completa, sem taxas e com todos os serviços que você precisa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button 
                  size="lg" 
                  variant="accent" 
                  className="group"
                  onClick={() => router.push('/contato')}
                >
                  Abrir Conta Agora
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline">
                  Baixar App
                </Button>
              </div>
              {/* Trust Indicators */}
              <div className="flex items-center justify-center space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">500K+</div>
                  <div className="text-sm text-muted-foreground">Clientes Ativos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">R$ 0</div>
                  <div className="text-sm text-muted-foreground">Taxa de Manutenção</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">24/7</div>
                  <div className="text-sm text-muted-foreground">Disponível</div>
                </div>
              </div>
            </motion.div>
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
              Tudo que você{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
                Precisa
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Uma conta completa com todos os serviços essenciais para sua vida financeira.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card variant="luxury" className="h-full text-center hover:scale-105 transition-transform duration-300 flex flex-col">
                  <CardHeader>
                    <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-8 h-8 text-accent" />
                    </div>
                    <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <div className="mt-6 flex justify-center">
                      <span className="px-3 py-1 bg-gradient-to-r from-accent to-secondary text-primary rounded-full text-sm font-medium inline-block whitespace-nowrap">
                        {feature.highlight}
                      </span>
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
                Picredi
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Descubra todos os benefícios de ter uma conta Picredi.
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
                <Card variant="glass" className="h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                        <benefit.icon className="w-6 h-6 text-green-500" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{benefit.title}</CardTitle>
                        <CardDescription className="text-sm">
                          {benefit.description}
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

      {/* How to Open Account */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-good-times text-foreground mb-6">
              Como Abrir sua{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
                Conta
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Processo simples e rápido. Em poucos minutos você terá sua conta ativa.
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
      <section className="py-20 bg-muted/30">
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
              Tudo que você precisa para abrir sua conta Picredi.
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-gradient-to-r from-accent/10 to-secondary/10 rounded-2xl p-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-good-times text-foreground mb-6">
              Pronto para Começar?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Abra sua conta Picredi agora e tenha acesso a todos os nossos serviços 
              com condições exclusivas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="accent" 
                className="group"
                onClick={() => router.push('/contato')}
              >
                Abrir Conta Agora
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                Baixar App
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

