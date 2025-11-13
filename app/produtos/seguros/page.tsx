'use client';

import type { SVGProps } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Shield,
  Home,
  Car,
  Plane,
  Building2,
  Users,
  Sprout,
  ShieldCheck,
  Clock,
  Settings2,
  Smile,
  Smartphone,
  MapPin,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const WhatsAppIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12.002 2.004c-5.524 0-10 4.393-10 9.804 0 1.94.578 3.76 1.677 5.352L2 22l5.058-1.487c1.616.883 3.438 1.35 5.287 1.35 5.524 0 10-4.393 10-9.804s-4.476-9.805-10-9.805Zm0 17.842c-1.652 0-3.267-.44-4.694-1.272l-.336-.195-3.001.874.872-2.894-.218-.335c-1.04-1.597-1.589-3.44-1.589-5.216 0-4.673 3.988-8.475 8.956-8.475s8.956 3.802 8.956 8.475-3.988 8.472-8.956 8.472Zm4.88-6.308c-.264-.132-1.556-.767-1.797-.854-.24-.088-.416-.132-.593.132-.176.264-.682.854-.834 1.03-.152.175-.305.197-.568.066-.264-.132-1.114-.408-2.123-1.3-.785-.668-1.314-1.492-1.466-1.756-.152-.264-.016-.406.115-.537.12-.119.264-.309.396-.463.132-.154.176-.264.264-.44.088-.175.044-.33-.022-.463-.064-.132-.593-1.417-.813-1.94-.214-.514-.432-.445-.593-.452l-.507-.009c-.176 0-.462.066-.705.33-.24.264-.924.902-.924 2.2 0 1.298.947 2.555 1.079 2.731.132.175 1.862 2.98 4.515 4.167.631.272 1.122.435 1.505.556.632.201 1.206.172 1.66.104.507-.076 1.556-.637 1.777-1.253.218-.615.218-1.143.152-1.253-.064-.109-.24-.175-.504-.307Z" />
  </svg>
);

const personalInsurances = [
  {
    icon: Shield,
    title: 'Seguro de Vida',
    description:
      'Proteção financeira para quem você ama, com coberturas que podem ser utilizadas ainda em vida.',
    features: [
      'Indenização em casos de doenças graves ou invalidez',
      'Assistência viagem e descontos em farmácias',
      'Diária por internação hospitalar',
      'Participação em sorteios mensais',
    ],
  },
  {
    icon: Home,
    title: 'Seguro Residencial',
    description:
      'Cobertura para seu imóvel e bens contra danos inesperados, com assistências 24h.',
    features: [
      'Incêndio, explosão, queda de raios e vendaval',
      'Roubo, danos elétricos e impactos acidentais',
      'Chaveiro, eletricista e outros serviços emergenciais',
      'Proteção para equipamentos e eletrodomésticos',
    ],
  },
  {
    icon: Car,
    title: 'Seguro Auto',
    description:
      'Coberturas e assistências personalizadas para manter seu veículo protegido todos os dias.',
    features: [
      'Proteção contra colisão, roubo e fenômenos naturais',
      'Carro reserva e assistência 24h em todo o país',
      'Serviços personalizados conforme o perfil do motorista',
      'Cobertura para terceiros e danos materiais',
    ],
  },
  {
    icon: Plane,
    title: 'Seguro Viagem',
    description:
      'Segurança e suporte completo em viagens nacionais e internacionais.',
    features: [
      'Despesas médicas e hospitalares no exterior',
      'Extravio de bagagem e retardamento de voo',
      'Assistência jurídica e tradução',
      'Cobertura para esportes e atividades especiais',
    ],
  },
];

const businessInsurances = [
  {
    icon: Building2,
    title: 'Seguro Empresarial',
    description:
      'Proteção patrimonial desenhada para diferentes portes e segmentos de empresas.',
    features: [
      'Cobertura para danos materiais e operacionais',
      'Responsabilidade civil personalizada',
      'Proteção para equipamentos, estoque e mercadorias',
      'Assistências para manter a operação ativa',
    ],
  },
  {
    icon: Users,
    title: 'Seguro de Vida em Grupo',
    description:
      'Benefício corporativo que valoriza colaboradores e garante segurança financeira às famílias.',
    features: [
      'Coberturas sob medida para cada perfil de colaborador',
      'Possibilidade de extensões para dependentes',
      'Assistência funeral e suporte psicológico',
      'Condições diferenciadas para empresas associadas',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Seguro para Condomínios',
    description:
      'Cobertura completa para áreas comuns, estrutura predial e responsabilidades do síndico.',
    features: [
      'Proteção contra incêndio, roubo e danos elétricos',
      'Responsabilidade civil do condomínio e síndico',
      'Assistência 24h para emergências prediais',
      'Cobertura para equipamentos e sistemas de segurança',
    ],
  },
];

const agribusinessInsurances = [
  {
    icon: Sprout,
    title: 'Seguro Agrícola',
    description:
      'Proteção da lavoura contra eventos climáticos que possam comprometer a produtividade.',
    features: [
      'Cobertura para seca, geada, granizo e chuvas intensas',
      'Reposição de capital de giro para replantio',
      'Opções paramétricas para eventos climáticos específicos',
      'Suporte técnico especializado em cada ciclo da safra',
    ],
  },
  {
    icon: Shield,
    title: 'Seguro Patrimônio Rural',
    description:
      'Cobertura ampla para propriedades rurais, benfeitorias e equipamentos essenciais.',
    features: [
      'Proteção para máquinas, implementos e instalações',
      'Cobertura contra incêndio, roubo e avarias acidentais',
      'Assistência para manutenção de operações críticas',
      'Extensão para residência e veículos da fazenda',
    ],
  },
];

const insuranceBenefits = [
  {
    icon: ShieldCheck,
    title: 'Proteção Financeira',
    description:
      'Coberturas que evitam impactos no orçamento e preservam suas reservas em momentos críticos.',
  },
  {
    icon: Clock,
    title: 'Assistências 24h',
    description:
      'Rede de serviços que inclui chaveiro, eletricista, limpeza emergencial e muito mais.',
  },
  {
    icon: Settings2,
    title: 'Flexibilidade',
    description:
      'Planos moduláveis com opções de coberturas adicionais conforme a sua necessidade.',
  },
  {
    icon: Smile,
    title: 'Tranquilidade',
    description:
      'A certeza de contar com o Picredi para proteger o que é essencial em cada etapa da vida.',
  },
];

const contractingChannels = [
  {
    icon: Smartphone,
    title: 'Aplicativo Picredi',
    description:
      'Contrate pelo menu de seguros no app e acompanhe coberturas, pagamentos e assistências.',
    cta: 'Abrir o app Picredi',
    href: 'https://picredi.com/app',
    external: true,
  },
  {
    icon: WhatsAppIcon,
    title: 'WhatsApp Oficial',
    description:
      'Fale com um atendente pelo canal oficial e personalize sua proposta em poucos minutos.',
    cta: 'Conversar com o Picredi',
    href: 'https://wa.me/5511914247595',
    external: true,
  },
  {
    icon: MapPin,
    title: 'Agências Picredi',
    description:
      'Visite uma de nossas agências e converse com um gerente para escolher a melhor solução.',
    cta: 'Encontrar uma agência',
    href: '/contato',
    external: false,
  },
];

export default function SegurosPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-background via-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-accent to-secondary rounded-2xl flex items-center justify-center">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-good-times text-foreground">
                    Seguros <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">Picredi</span>
                  </h1>
                  <p className="text-lg text-muted-foreground mt-2">
                    Portfólio completo de proteção para pessoas, empresas e agronegócio.
                  </p>
                </div>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                O Picredi oferece soluções em seguros pensadas para proporcionar proteção financeira e tranquilidade nos momentos que mais importam. Escolha as coberturas ideais para sua realidade e conte com nossa equipe especializada em todas as etapas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contato">
                  <Button size="lg" variant="accent" className="group">
                    Falar com Especialista
                  </Button>
                </Link>
                <Link href="/contato">
                  <Button size="lg" variant="outline">
                    Solicitar Cotação
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {personalInsurances.slice(0, 4).map((insurance) => (
                <Card key={insurance.title} variant="glass" className="p-6 h-full">
                  <CardHeader className="p-0 space-y-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                      <insurance.icon className="w-6 h-6 text-accent" />
                    </div>
                    <CardTitle className="text-lg">{insurance.title}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      {insurance.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Personal Insurances */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-good-times text-foreground mb-6">
              Para você e sua família
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Seguros que garantem cuidado integral com quem você ama, com coberturas flexíveis e benefícios exclusivos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {personalInsurances.map((insurance, index) => (
              <motion.div
                key={insurance.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card variant="luxury" className="h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center">
                        <insurance.icon className="w-7 h-7 text-accent" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{insurance.title}</CardTitle>
                        <CardDescription className="text-base">
                          {insurance.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {insurance.features.map((feature) => (
                        <li key={feature} className="flex items-start space-x-3">
                          <span className="w-2 h-2 bg-accent rounded-full mt-2" />
                          <span className="text-sm text-muted-foreground leading-relaxed">{feature}</span>
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

      {/* Business Insurances */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-good-times text-foreground mb-6">
              Para sua empresa
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Soluções que protegem patrimônio, colaboradores e a continuidade do seu negócio.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {businessInsurances.map((insurance, index) => (
              <motion.div
                key={insurance.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card variant="glass" className="h-full">
                  <CardHeader>
                    <div className="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center mb-4">
                      <insurance.icon className="w-7 h-7 text-secondary" />
                    </div>
                    <CardTitle className="text-xl">{insurance.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {insurance.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {insurance.features.map((feature) => (
                        <li key={feature} className="flex items-start space-x-3">
                          <span className="w-2 h-2 bg-secondary rounded-full mt-2" />
                          <span className="text-sm text-muted-foreground leading-relaxed">{feature}</span>
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

      {/* Agribusiness Insurances */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-good-times text-foreground mb-6">
              Para o agronegócio
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Coberturas específicas para garantir estabilidade e segurança em cada safra e operação rural.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {agribusinessInsurances.map((insurance, index) => (
              <motion.div
                key={insurance.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card variant="luxury" className="h-full">
                  <CardHeader>
                    <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-4">
                      <insurance.icon className="w-7 h-7 text-accent" />
                    </div>
                    <CardTitle className="text-xl">{insurance.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {insurance.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {insurance.features.map((feature) => (
                        <li key={feature} className="flex items-start space-x-3">
                          <span className="w-2 h-2 bg-accent rounded-full mt-2" />
                          <span className="text-sm text-muted-foreground leading-relaxed">{feature}</span>
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

      {/* Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-good-times text-foreground mb-6">
              Benefícios dos seguros Picredi
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A combinação ideal de cobertura, serviços e acompanhamento para que você se sinta seguro em qualquer cenário.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {insuranceBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card variant="glass" className="h-full text-center">
                  <CardHeader className="space-y-4">
                    <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                      <benefit.icon className="w-8 h-8 text-accent" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {benefit.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contracting */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-good-times text-foreground mb-6">
              Como contratar
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Escolha o canal mais conveniente para contratar seus seguros Picredi e mantenha tudo sob controle em tempo real.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contractingChannels.map((channel, index) => (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card variant="luxury" className="h-full">
                  <CardHeader>
                    <div className="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center mb-4">
                      <channel.icon className="w-7 h-7 text-secondary" />
                    </div>
                    <CardTitle className="text-xl">{channel.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {channel.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link
                      href={channel.href}
                      target={channel.external ? '_blank' : undefined}
                      rel={channel.external ? 'noopener noreferrer' : undefined}
                    >
                      <Button variant="outline" className="w-full">
                        {channel.cta}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16 text-center max-w-3xl mx-auto text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Para mais informações sobre coberturas, valores e condições, visite o site oficial do Picredi ou entre em contato com nossa central de atendimento.
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-accent/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-good-times text-foreground mb-6">
              Quer proteger o que mais importa?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Nossos especialistas estão prontos para elaborar uma proposta sob medida com os seguros que acompanham o seu momento de vida ou o ritmo do seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contato">
                <Button size="lg" variant="accent">
                  Solicitar Proposta
                </Button>
              </Link>
              <Link href="/contato">
                <Button size="lg" variant="outline">
                  Falar com Atendimento
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


