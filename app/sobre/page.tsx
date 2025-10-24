'use client';

import { motion } from 'framer-motion';
import { Shield, Users, Award, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';

const values = [
  {
    icon: Shield,
    title: 'Segurança em Primeiro Lugar',
    description: 'Implementamos as mais rigorosas medidas de segurança para proteger seus dados e transações.',
  },
  {
    icon: Users,
    title: 'Cliente no Centro',
    description: 'Cada decisão que tomamos é pensada para melhorar sua experiência bancária.',
  },
  {
    icon: Award,
    title: 'Excelência Operacional',
    description: 'Buscamos constantemente a excelência em todos os nossos processos e serviços.',
  },
  {
    icon: TrendingUp,
    title: 'Inovação Contínua',
    description: 'Estamos sempre à frente, desenvolvendo soluções que transformam o mercado financeiro.',
  },
];

const timeline = [
  {
    year: '2020',
    title: 'Fundação',
    description: 'A Picredi foi fundada com a visão de revolucionar o banking digital no Brasil.',
  },
  {
    year: '2021',
    title: 'Primeiro Milhão',
    description: 'Alcançamos nosso primeiro milhão de transações processadas com segurança.',
  },
  {
    year: '2022',
    title: 'Expansão Nacional',
    description: 'Expandimos nossos serviços para todo o território nacional.',
  },
  {
    year: '2023',
    title: 'Tecnologia IA',
    description: 'Implementamos inteligência artificial em nossos processos de análise de crédito.',
  },
  {
    year: '2024',
    title: 'Futuro',
    description: 'Continuamos inovando para trazer o futuro do banking para o presente.',
  },
];

export default function AboutPage() {
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
              Sobre a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
                Picredi
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Somos mais que um banco digital. Somos a ponte entre o presente e o futuro 
              das finanças, onde tecnologia, segurança e inovação se encontram para 
              transformar sua vida financeira.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-good-times text-foreground mb-6">
                Nossa Missão
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Democratizar o acesso a serviços financeiros de alta qualidade, 
                utilizando tecnologia de ponta para criar uma experiência bancária 
                verdadeiramente personalizada e segura.
              </p>
              <p className="text-lg text-muted-foreground">
                Acreditamos que todos merecem ter controle total sobre suas finanças, 
                com transparência, simplicidade e inovação em cada interação.
              </p>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-card border border-border rounded-2xl p-8 shadow-luxury">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent mb-2">500K+</div>
                    <div className="text-muted-foreground">Clientes Ativos</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-foreground">R$ 2.5B</div>
                      <div className="text-sm text-muted-foreground">Volume Transacionado</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-foreground">99.9%</div>
                      <div className="text-sm text-muted-foreground">Uptime</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-good-times text-foreground mb-6">
              Nossos Valores
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Os princípios que guiam cada decisão e cada inovação que desenvolvemos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card variant="glass" className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                      <value.icon className="w-6 h-6 text-accent" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-good-times text-foreground mb-6">
              Nossa Jornada
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Uma trajetória marcada por inovação, crescimento e compromisso com nossos clientes.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent to-secondary rounded-full" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <Card variant="luxury">
                      <CardHeader>
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center">
                            <span className="text-primary font-bold text-lg">{item.year}</span>
                          </div>
                          <div>
                            <CardTitle className="text-xl">{item.title}</CardTitle>
                            <CardDescription className="text-base">
                              {item.description}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background shadow-lg" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-good-times text-foreground mb-6">
              Faça Parte da Revolução
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Junte-se a milhares de clientes que já descobriram o futuro do banking digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contato"
                className="inline-flex items-center justify-center px-8 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors"
              >
                Abrir Conta
              </a>
              <a
                href="/carreiras"
                className="inline-flex items-center justify-center px-8 py-3 border border-border bg-transparent text-foreground rounded-lg font-medium hover:bg-muted transition-colors"
              >
                Trabalhe Conosco
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
