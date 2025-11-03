'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Smartphone, CreditCard, TrendingUp, PiggyBank, Building, Shield, Sprout, Landmark, LineChart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const products = [
  {
    icon: Smartphone,
    title: 'Conta Corrente Digital',
    description: 'Gerencie seu dinheiro com total liberdade e segurança',
    features: ['PIX ilimitado', 'Cartão sem anuidade', 'Investimentos integrados'],
    price: 'Gratuito',
    popular: true,
    gradient: 'from-blue-500 to-blue-600',
    href: '/produtos/conta-corrente',
  },
  {
    icon: CreditCard,
    title: 'Cartão de Crédito',
    description: 'Cartão premium com benefícios exclusivos',
    features: ['Cashback 2%', 'Programa de pontos', 'Seguro viagem'],
    price: 'Sem anuidade',
    popular: false,
    gradient: 'from-purple-500 to-purple-600',
    href: '/produtos/cartao-credito',
  },
  {
    icon: TrendingUp,
    title: 'Investimentos',
    description: 'Invista com inteligência artificial',
    features: ['Robo-advisor gratuito', 'Fundos exclusivos', 'Renda fixa e variável'],
    price: 'A partir de R$ 10',
    popular: false,
    gradient: 'from-green-500 to-green-600',
    href: '/produtos/investimentos',
  },
];

const businessProducts = [
  {
    icon: Building,
    title: 'Conta Empresarial',
    description: 'Soluções completas para sua empresa',
    features: ['Gestão de fluxo de caixa', 'Relatórios gerenciais', 'Cartão corporativo'],
    price: 'Sob consulta',
    href: '/contato',
  },
  {
    icon: PiggyBank,
    title: 'Empréstimos',
    description: 'Dinheiro rápido com as melhores taxas',
    features: ['Aprovação em minutos', 'Taxas competitivas', 'Sem burocracia'],
    price: 'A partir de 1.99% a.m.',
    href: '/produtos/emprestimos',
  },
  {
    icon: Shield,
    title: 'Seguros',
    description: 'Proteja o que mais importa',
    features: ['Seguro de vida', 'Seguro residencial', 'Seguro auto'],
    price: 'A partir de R$ 29/mês',
    href: '/contato',
  },
  {
    icon: Sprout,
    title: 'Agronegócio',
    description: 'Crédito e soluções financeiras para o campo',
    features: ['Crédito Rural', 'Financiamento de máquinas', 'Safra e custeio'],
    price: 'Linhas subsidiadas',
    href: '/produtos/agronegocio',
  },
  {
    icon: Landmark,
    title: 'Imobiliário',
    description: 'Financiamento e consórcio para imóveis',
    features: ['Crédito habitacional', 'Consórcio', 'Portabilidade'],
    price: 'Taxas a partir de 9.9% a.a.',
    href: '/produtos/imobiliario',
  },
  {
    icon: LineChart,
    title: 'Fundos de Investimento',
    description: 'Portfólios profissionais com gestão especializada',
    features: ['Renda fixa', 'Multimercado', 'Ações e índices'],
    price: 'Aplicação inicial acessível',
    href: '/produtos/fundos-investimento',
  },
];

export function ProductsShowcase() {
  const router = useRouter();

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-background to-muted/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-good-times text-foreground mb-4 sm:mb-6">
            Nossos{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
              Produtos
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Uma linha completa de soluções financeiras para todas as suas necessidades.
          </p>
        </motion.div>

        {/* Personal Products */}
        <div className="mb-12 sm:mb-16">
          <motion.h3
            className="text-xl sm:text-2xl font-semibold text-foreground mb-6 sm:mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Produtos Pessoais
          </motion.h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
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
                  className="h-full hover:scale-105 transition-transform duration-300 flex flex-col"
                >
                  <CardHeader className="flex-shrink-0">
                    <div className="flex flex-col items-center text-center mb-4">
                      <div className={`w-16 h-16 bg-gradient-to-r ${product.gradient} rounded-xl flex items-center justify-center mb-4`}>
                        <product.icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl mb-2">{product.title}</CardTitle>
                      <CardDescription className="text-base text-center">
                        {product.description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="flex-1 flex flex-col">
                    <div className="mb-6 flex-1 flex flex-col">
                      <ul className="space-y-3 flex-1">
                        {product.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="text-center px-2 bg-muted/30 rounded-lg h-[4rem] sm:h-[5rem] flex items-end justify-center pb-2 sm:pb-3 mt-4 flex-shrink-0">
                        <span className="text-sm sm:text-base font-bold text-foreground leading-[1.5] break-words block">{product.price}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col space-y-3 mt-auto">
                      <Button 
                        variant="accent" 
                        className="w-full"
                        onClick={() => router.push(product.href)}
                      >
                        Saiba Mais
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => router.push('/contato')}
                      >
                        Contratar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Business Products */}
        <div>
          <motion.h3
            className="text-xl sm:text-2xl font-semibold text-foreground mb-6 sm:mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Soluções Empresariais
          </motion.h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {businessProducts.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card variant="glass" className="h-full hover:scale-105 transition-transform duration-300 flex flex-col">
                  <CardHeader className="flex-shrink-0">
                    <div className="flex flex-col items-center text-center mb-4">
                      <div className="w-16 h-16 bg-secondary/20 rounded-xl flex items-center justify-center mb-4">
                        <product.icon className="w-8 h-8 text-secondary" />
                      </div>
                      <CardTitle className="text-xl mb-2">{product.title}</CardTitle>
                      <CardDescription className="text-base text-center">
                        {product.description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="flex-1 flex flex-col">
                    <div className="mb-6 flex-1 flex flex-col">
                      <ul className="space-y-3 flex-1">
                        {product.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="text-center px-2 bg-muted/30 rounded-lg h-[4rem] sm:h-[5rem] flex items-end justify-center pb-2 sm:pb-3 mt-4 flex-shrink-0">
                        <span className="text-sm sm:text-base font-bold text-foreground leading-[1.5] break-words block">{product.price}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col space-y-3 mt-auto">
                      <Button 
                        variant="secondary" 
                        className="w-full"
                        onClick={() => router.push(product.href)}
                      >
                        Saiba Mais
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => router.push('/contato')}
                      >
                        Falar com Especialista
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
