'use client';

import { motion } from 'framer-motion';
import { CreditCard, PiggyBank, TrendingUp, Shield, Smartphone, Building } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const products = [
  {
    icon: Smartphone,
    title: 'Conta Corrente Digital',
    description: 'Gerencie seu dinheiro com total liberdade e segurança.',
    features: [
      'Transferências ilimitadas',
      'PIX instantâneo',
      'Cartão sem anuidade',
      'Investimentos integrados',
    ],
    category: 'personal',
    popular: true,
  },
  {
    icon: CreditCard,
    title: 'Cartão de Crédito',
    description: 'Cartão premium com benefícios exclusivos e cashback.',
    features: [
      'Cashback de até 2%',
      'Programa de pontos',
      'Seguro viagem',
      'Atendimento prioritário',
    ],
    category: 'personal',
  },
  {
    icon: TrendingUp,
    title: 'Investimentos',
    description: 'Invista com inteligência artificial e gestão profissional.',
    features: [
      'Robo-advisor gratuito',
      'Fundos exclusivos',
      'Renda fixa e variável',
      'Relatórios personalizados',
    ],
    category: 'personal',
  },
  {
    icon: PiggyBank,
    title: 'Empréstimos',
    description: 'Dinheiro rápido com as melhores taxas do mercado.',
    features: [
      'Aprovação em minutos',
      'Taxas competitivas',
      'Sem burocracia',
      'Parcelamento flexível',
    ],
    category: 'personal',
  },
  {
    icon: Building,
    title: 'Soluções Corporativas',
    description: 'Produtos financeiros para empresas de todos os tamanhos.',
    features: [
      'Conta empresarial',
      'Cartão corporativo',
      'Gestão de fluxo de caixa',
      'Relatórios gerenciais',
    ],
    category: 'business',
  },
  {
    icon: Shield,
    title: 'Seguros',
    description: 'Proteja o que mais importa com nossos seguros.',
    features: [
      'Seguro de vida',
      'Seguro residencial',
      'Seguro auto',
      'Seguro viagem',
    ],
    category: 'personal',
  },
];

const categories = [
  { id: 'all', label: 'Todos', count: products.length },
  { id: 'personal', label: 'Pessoal', count: products.filter(p => p.category === 'personal').length },
  { id: 'business', label: 'Empresarial', count: products.filter(p => p.category === 'business').length },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-display text-4xl sm:text-5xl lg:text-6xl font-good-times text-foreground mb-6">
              Nossos{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
                Produtos
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Uma linha completa de soluções financeiras desenvolvida para atender 
              todas as suas necessidades, desde o dia a dia até seus maiores sonhos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                className="px-6 py-3 rounded-lg border border-border bg-card hover:bg-muted transition-colors"
              >
                <span className="font-medium text-foreground">{category.label}</span>
                <span className="ml-2 text-sm text-muted-foreground">({category.count})</span>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {product.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-accent to-secondary text-primary px-4 py-1 rounded-full text-sm font-medium">
                      Mais Popular
                    </span>
                  </div>
                )}
                
                <Card 
                  variant={product.popular ? 'luxury' : 'default'} 
                  className="h-full hover:scale-105 transition-transform duration-300"
                >
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                        <product.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{product.title}</CardTitle>
                        <CardDescription className="text-base">
                          {product.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-accent rounded-full" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-col space-y-3">
                      <Button variant="accent" className="w-full">
                        Saiba Mais
                      </Button>
                      <Button variant="outline" className="w-full">
                        Contratar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-good-times text-foreground mb-6">
              Por que Escolher a Picredi?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Oferecemos mais que produtos financeiros. Oferecemos uma experiência 
              completa que transforma sua relação com o dinheiro.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Segurança Máxima</h3>
              <p className="text-muted-foreground">
                Seus dados e transações protegidos com tecnologia bancária de nível militar.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Tecnologia Avançada</h3>
              <p className="text-muted-foreground">
                IA, blockchain e machine learning para otimizar suas operações financeiras.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Experiência Única</h3>
              <p className="text-muted-foreground">
                Interface intuitiva e funcionalidades que simplificam sua vida financeira.
              </p>
            </motion.div>
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
              Abra sua conta em minutos e tenha acesso a todos os nossos produtos 
              com condições exclusivas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="accent">
                Abrir Conta Agora
              </Button>
              <Button size="lg" variant="outline">
                Falar com Especialista
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
