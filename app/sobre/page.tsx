'use client';

import { motion } from 'framer-motion';
import { Shield, Users, Award, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';

const values = [
  {
    icon: Award,
    title: 'Excelência e Expertise',
    description: 'Contamos com uma equipe de profissionais experientes e dedicados, focados em uma gestão de ativos rigorosa e eficiente.',
  },
  {
    icon: Users,
    title: 'Transparência e Confiança',
    description: 'Acreditamos que a confiança é a base de qualquer relacionamento duradouro. Por isso, nossa comunicação é clara, transparente e acessível.',
  },
  {
    icon: Shield,
    title: 'Gestão de Riscos',
    description: 'A gestão de riscos é um pilar fundamental da nossa atuação. Nossos processos são desenhados para proteger o patrimônio e garantir a segurança dos investimentos.',
  },
  {
    icon: TrendingUp,
    title: 'Portfólio Diversificado',
    description: 'Oferecemos uma gama completa de soluções de investimento, desde a renda fixa até a renda variável, para atender aos diferentes perfis e objetivos dos investidores.',
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
      {/* Quem Somos - efeito somente nesta seção: imagem sticky atrás, conteúdo cobre ao rolar */}
      <section className="relative -mt-16">
        {/* BG sticky visível apenas dentro desta seção */}
        <div className="sticky top-0 h-[60vh] sm:h-[70vh] lg:h-[75vh] -z-10">
          <img
            src="/assets/imagnes/enhanced_emir-img-6-min.png"
            alt="Picredi - Quem Somos"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/30" />
        </div>
        {/* Conteúdo que sobrepõe a imagem enquanto rola apenas aqui */}
        <div className="relative py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-display text-4xl sm:text-5xl lg:text-6xl font-good-times text-foreground mb-6">
                Quem <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">Somos</span>
              </h1>
              <p className="text-xl text-foreground mb-6 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-lg">
                Somos a <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">Picredi Administração Ativos</span>,
                uma gestora de recursos dedicada a oferecer soluções de investimento eficientes e personalizadas.
                Nossa missão é valorizar o capital de nossos clientes, por meio de uma gestão de ativos sólida e transparente,
                buscando os melhores resultados com responsabilidade.
              </p>
              <p className="text-lg text-foreground max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                A <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">Picredi Administração Ativos</span> é a entidade responsável pela gestão de fundos e recursos financeiros
                para o Sicredi, uma das maiores instituições financeiras cooperativas do Brasil. Atuamos com base em
                princípios cooperativos, focados em soluções financeiras que geram desenvolvimento local e beneficiam
                nossos associados e a sociedade.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      

      {/* Vision & Commitment (solid background to cover the image) */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="h-full"
            >
              <Card variant="glass" className="h-full flex flex-col">
                <CardHeader className="flex-1 flex flex-col">
                  <CardTitle className="text-2xl mb-4">Nossa Visão</CardTitle>
                  <CardDescription className="text-base flex-1">
                    Ser uma gestora de ativos referência no mercado, reconhecida pela excelência em gestão,
                    inovação e pelo impacto positivo gerado para nossos associados e para o desenvolvimento
                    sustentável das comunidades.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="h-full"
            >
              <Card variant="glass" className="h-full flex flex-col">
                <CardHeader className="flex-1 flex flex-col">
                  <CardTitle className="text-2xl mb-4">Nosso Compromisso</CardTitle>
                  <CardDescription className="text-base flex-1">
                    Com um foco no crescimento sustentável, estamos comprometidos em gerar valor para nossos
                    clientes e parceiros. Nossa atuação busca alinhar os melhores resultados financeiros com
                    as necessidades e expectativas de cada investidor. A Picredi Administração Ativos é mais do
                    que uma gestora; somos parceiros de nossos clientes na construção de um futuro financeiro
                    sólido e próspero.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section (solid background) */}
      <section className="py-20 bg-background">
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
                Oferecer soluções de gestão de ativos alinhadas com os valores do cooperativismo, garantindo
                segurança, rentabilidade e transparência para nossos associados. Buscamos construir um futuro
                financeiro mais próspero e equilibrado, respeitando as pessoas e as comunidades onde atuamos.
              </p>
              <p className="text-lg text-muted-foreground">
                Valorizamos o capital de nossos clientes por meio de uma gestão de ativos sólida e transparente,
                sempre buscando os melhores resultados com responsabilidade.
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
                      <div className="text-2xl font-bold text-foreground">R$ 65 bi</div>
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
              Os princípios que fundamentam nossa atuação e guiam cada decisão e cada relacionamento.
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

      {/* Timeline Section (solid background) */}
      <section className="py-20 bg-background">
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

      {/* Differentials */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-good-times text-foreground mb-6">
              Nosso Diferencial
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Com a Picredi Administração Ativos, você tem acesso a uma gestão profissional e especializada,
              com a solidez e a confiança de uma instituição financeira cooperativa com mais de um século de história.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Nossa atuação sistêmica e nosso foco no desenvolvimento local nos permitem oferecer soluções de investimento
              que, além de rentáveis, geram um impacto positivo e duradouro. Venha fazer parte do nosso modelo de gestão
              e descubra uma nova forma de investir no seu futuro, com a força do cooperativismo.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card variant="luxury">
              <CardHeader>
                <CardTitle className="text-xl">Gestão Profissional e Especializada</CardTitle>
                <CardDescription className="text-base">
                  Equipe experiente com processos consistentes, avaliação de risco contínua e disciplina de execução.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card variant="luxury">
              <CardHeader>
                <CardTitle className="text-xl">Solidez e Confiança</CardTitle>
                <CardDescription className="text-base">
                  Instituição financeira cooperativa com mais de um século de história. Relatórios claros,
                  governança e comunicação acessível.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card variant="luxury">
              <CardHeader>
                <CardTitle className="text-xl">Desenvolvimento Local</CardTitle>
                <CardDescription className="text-base">
                  Atuação sistêmica focada em soluções que geram impacto positivo e duradouro para
                  associados e comunidades.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Valores Cooperativistas */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
              Valores do Cooperativismo
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card variant="glass">
                <CardHeader>
                  <CardTitle className="text-lg">Cooperação</CardTitle>
                  <CardDescription className="text-sm">
                    Acreditamos que a união de esforços fortalece o capital e gera resultados mais sólidos e justos.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card variant="glass">
                <CardHeader>
                  <CardTitle className="text-lg">Pessoas no Centro</CardTitle>
                  <CardDescription className="text-sm">
                    Nossos associados são o nosso maior ativo, e todas as nossas decisões são tomadas com o objetivo de beneficiá-los.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card variant="glass">
                <CardHeader>
                  <CardTitle className="text-lg">Ética e Transparência</CardTitle>
                  <CardDescription className="text-sm">
                    Atuamos com base em princípios claros e honestos, mantendo uma comunicação aberta e transparente.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card variant="glass">
                <CardHeader>
                  <CardTitle className="text-lg">Desenvolvimento Local</CardTitle>
                  <CardDescription className="text-sm">
                    Apoiamos o crescimento das comunidades onde estamos inseridos, pois acreditamos que o sucesso de nossos
                    associados impulsiona o desenvolvimento de toda a região.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </motion.div>
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
              Venha Fazer Parte
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Venha fazer parte do nosso modelo de gestão e descubra uma nova forma de investir no seu futuro,
              com a força do cooperativismo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contato"
                className="inline-flex items-center justify-center px-8 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors"
              >
                Abrir Conta
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
