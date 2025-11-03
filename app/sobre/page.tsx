'use client';

import { motion } from 'framer-motion';
import { Shield, Users, Award, TrendingUp, Heart, Building2, MapPin, Link2 } from 'lucide-react';
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
      <section className="relative">
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
        <div className="relative py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
              <h1 className="text-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-good-times text-foreground mb-6 sm:mb-8 drop-shadow-2xl px-4">
                Quem <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-secondary to-accent animate-gradient bg-[length:200%_auto]">Somos</span>
            </h1>
              <p className="text-base sm:text-lg text-foreground mb-6 sm:mb-8 max-w-3xl mx-auto font-bold leading-relaxed drop-shadow-xl px-4">
                Somos a <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary font-extrabold">Picredi Administração Ativos</span>,
                uma gestora de recursos dedicada a oferecer soluções de investimento eficientes e personalizadas.
              </p>
              <p className="text-base sm:text-lg text-foreground mb-6 sm:mb-8 max-w-3xl mx-auto font-semibold leading-relaxed drop-shadow-lg px-4">
                Nossa missão é valorizar o capital de nossos clientes, por meio de uma gestão de ativos sólida e transparente,
                buscando os melhores resultados com responsabilidade.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-foreground/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md font-medium px-4">
                A <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">Picredi Administração Ativos</span> é a entidade responsável pela gestão de fundos e recursos financeiros
                para o Sicredi, uma das maiores instituições financeiras cooperativas do Brasil. Atuamos com base em
                princípios cooperativos, focados em soluções financeiras que geram desenvolvimento local e beneficiam
                nossos associados e a sociedade.
            </p>
          </motion.div>
          </div>
        </div>
      </section>

      

      {/* Vision & Commitment (solid background to cover the image) */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-background via-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="h-full"
            >
              <Card variant="luxury" className="h-full flex flex-col border-2 border-accent/20 hover:border-accent/40 transition-all duration-300 shadow-glow">
                <CardHeader className="flex-1 flex flex-col bg-gradient-to-br from-accent/10 to-transparent rounded-t-lg">
                  <CardTitle className="text-2xl sm:text-3xl mb-4 sm:mb-6 font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Nossa Visão</CardTitle>
                  <CardDescription className="text-lg flex-1 font-medium leading-relaxed">
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
              <Card variant="luxury" className="h-full flex flex-col border-2 border-secondary/20 hover:border-secondary/40 transition-all duration-300 shadow-glow">
                <CardHeader className="flex-1 flex flex-col bg-gradient-to-br from-secondary/10 to-transparent rounded-t-lg">
                  <CardTitle className="text-2xl sm:text-3xl mb-4 sm:mb-6 font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Nosso Compromisso</CardTitle>
                  <CardDescription className="text-lg flex-1 font-medium leading-relaxed mb-4">
                    Com um foco no crescimento sustentável, estamos comprometidos em gerar valor para nossos
                    clientes e parceiros. Nossa atuação busca alinhar os melhores resultados financeiros com
                    as necessidades e expectativas de cada investidor.
                  </CardDescription>
                  <CardDescription className="text-lg flex-1 font-medium leading-relaxed">
                    A Picredi Administração Ativos é mais do que uma gestora; somos parceiros de nossos clientes na construção de um futuro financeiro
                    sólido e próspero.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section (solid background) */}
      <section className="py-12 sm:py-16 lg:py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,209,255,0.1),transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-good-times text-foreground mb-6 sm:mb-8 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                Nossa <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">Missão</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-foreground mb-4 sm:mb-6 font-semibold leading-relaxed">
                Oferecer soluções de gestão de ativos alinhadas com os valores do cooperativismo, garantindo
                segurança, rentabilidade e transparência para nossos associados. Buscamos construir um futuro
                financeiro mais próspero e equilibrado, respeitando as pessoas e as comunidades onde atuamos.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-foreground/90 font-medium">
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
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-muted/30 via-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-good-times text-foreground mb-4 sm:mb-6">
              Nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">Valores</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-foreground/80 max-w-3xl mx-auto font-medium px-4">
              Os princípios que fundamentam nossa atuação e guiam cada decisão e cada relacionamento.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card variant="luxury" className="h-full hover:scale-105 transition-transform duration-300 border-2 border-border hover:border-accent/40 shadow-luxury">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-accent/30 to-secondary/30 rounded-xl flex items-center justify-center mb-6 shadow-glow">
                      <value.icon className="w-8 h-8 text-accent" />
                    </div>
                    <CardTitle className="text-2xl font-bold mb-4">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base font-medium leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment Expanded Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-background via-muted/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-good-times text-foreground mb-4 sm:mb-6">
              Nosso <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">Compromisso</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-foreground/90 max-w-4xl mx-auto font-semibold leading-relaxed px-4">
              Com um foco no crescimento sustentável, estamos comprometidos em gerar valor para nossos clientes e parceiros.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">
                    Parceria Estratégica
                  </h3>
                  <p className="text-lg text-foreground/90 font-medium leading-relaxed">
                    Nossa atuação busca alinhar os melhores resultados financeiros com as necessidades e expectativas de cada investidor. 
                    A Picredi Administração Ativos é mais do que uma gestora; somos parceiros de nossos clientes na construção de um futuro financeiro sólido e próspero.
                  </p>
                </div>
                
                <div className="space-y-4 pt-6 border-t border-border/50">
                  <h3 className="text-2xl font-bold text-foreground">
                    Relação com o Sicredi
                  </h3>
                  <p className="text-lg text-foreground/90 font-medium leading-relaxed">
                    A Picredi Administração Ativos é a entidade responsável pela gestão de fundos e recursos financeiros para o Sicredi, 
                    uma das maiores instituições financeiras cooperativas do Brasil. Atuamos com base em princípios cooperativos, 
                    focados em soluções financeiras que geram desenvolvimento local e beneficiam nossos associados e a sociedade.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <Card variant="luxury" className="border-2 border-accent/20 hover:border-accent/40 transition-all duration-300 shadow-luxury">
                <CardHeader className="bg-gradient-to-br from-accent/10 to-secondary/10 rounded-t-lg">
                  <CardTitle className="text-2xl font-bold mb-4 bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                    Por que escolher a Picredi?
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Award className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">Gestão Profissional</p>
                        <p className="text-sm text-muted-foreground">Equipe experiente e processos rigorosos para maximizar resultados.</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Shield className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">Transparência Total</p>
                        <p className="text-sm text-muted-foreground">Comunicação clara e acessível sobre todos os investimentos.</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <TrendingUp className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">Portfólio Diversificado</p>
                        <p className="text-sm text-muted-foreground">Soluções de renda fixa e variável para diferentes perfis.</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Building2 className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">Sustentabilidade</p>
                        <p className="text-sm text-muted-foreground">Foco no desenvolvimento local e impacto positivo nas comunidades.</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section (solid background) */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-good-times text-foreground mb-4 sm:mb-6">
              Nossa <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">Jornada</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-foreground/80 max-w-3xl mx-auto font-medium px-4">
              Uma trajetória marcada por inovação, crescimento e compromisso com nossos clientes.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line - Hidden on mobile, visible on desktop */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent to-secondary rounded-full" />
            
            <div className="space-y-4 sm:space-y-6 lg:space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  className={`flex items-center flex-col lg:flex-row ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-8 lg:text-right' : 'lg:pl-8'} text-left`}>
                    <Card variant="luxury" className="shadow-md">
                      <CardHeader className="p-3 sm:p-4 lg:p-6">
                        <div className="flex items-start space-x-3 sm:space-x-4">
                          <div className="w-9 h-9 sm:w-11 sm:h-11 lg:w-16 lg:h-16 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-primary font-bold text-[10px] sm:text-xs lg:text-lg">{item.year}</span>
                          </div>
                          <div className="flex-1 min-w-0 pt-0.5">
                            <CardTitle className="text-xs sm:text-sm lg:text-xl mb-1 font-semibold leading-tight">{item.title}</CardTitle>
                            <CardDescription className="text-[11px] sm:text-xs lg:text-base leading-relaxed mt-1">
                              {item.description}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </div>
                  
                  {/* Timeline Dot - Hidden on mobile, visible on desktop */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background shadow-lg" />
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
            <h2 className="text-4xl sm:text-5xl font-good-times text-foreground mb-8">
              Nosso <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">Diferencial</span>
            </h2>
            <p className="text-xl text-foreground/90 max-w-3xl mx-auto mb-6 font-semibold leading-relaxed">
              Com a Picredi Administração Ativos, você tem acesso a uma gestão profissional e especializada,
              com a solidez e a confiança de uma instituição financeira cooperativa com mais de um século de história.
            </p>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto font-medium">
              Nossa atuação sistêmica e nosso foco no desenvolvimento local nos permitem oferecer soluções de investimento
              que, além de rentáveis, geram um impacto positivo e duradouro. Venha fazer parte do nosso modelo de gestão
              e descubra uma nova forma de investir no seu futuro, com a força do cooperativismo.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card variant="luxury" className="hover:scale-105 transition-transform duration-300 border-2 border-accent/20 hover:border-accent/40 shadow-luxury">
              <CardHeader className="bg-gradient-to-br from-accent/10 to-transparent rounded-t-lg">
                <CardTitle className="text-2xl font-bold mb-4 bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Gestão Profissional e Especializada</CardTitle>
                <CardDescription className="text-base font-medium leading-relaxed">
                  Equipe experiente com processos consistentes, avaliação de risco contínua e disciplina de execução.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card variant="luxury" className="hover:scale-105 transition-transform duration-300 border-2 border-secondary/20 hover:border-secondary/40 shadow-luxury">
              <CardHeader className="bg-gradient-to-br from-secondary/10 to-transparent rounded-t-lg">
                <CardTitle className="text-2xl font-bold mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Solidez e Confiança</CardTitle>
                <CardDescription className="text-base font-medium leading-relaxed">
                  Instituição financeira cooperativa com mais de um século de história. Relatórios claros,
                  governança e comunicação acessível.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card variant="luxury" className="hover:scale-105 transition-transform duration-300 border-2 border-accent/20 hover:border-secondary/40 shadow-luxury">
              <CardHeader className="bg-gradient-to-br from-accent/10 via-secondary/10 to-transparent rounded-t-lg">
                <CardTitle className="text-2xl font-bold mb-4 bg-gradient-to-r from-accent via-secondary to-accent bg-clip-text text-transparent">Desenvolvimento Local</CardTitle>
                <CardDescription className="text-base font-medium leading-relaxed">
                  Atuação sistêmica focada em soluções que geram impacto positivo e duradouro para
                  associados e comunidades.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Valores Cooperativistas */}
          <motion.div
            className="mt-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl sm:text-4xl font-good-times text-foreground mb-4 text-center">
              Valores do <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">Cooperativismo</span>
            </h3>
            <p className="text-lg text-foreground/80 mb-12 max-w-3xl mx-auto text-center font-medium">
              Princípios que guiam nossa atuação e fortalecem nosso compromisso com o desenvolvimento sustentável.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card variant="luxury" className="hover:scale-105 transition-transform duration-300 border-2 border-accent/20 hover:border-accent/40 shadow-luxury">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-accent/30 to-secondary/30 rounded-xl flex items-center justify-center mb-4 shadow-glow">
                    <Link2 className="w-7 h-7 text-accent" />
                  </div>
                  <CardTitle className="text-xl font-bold mb-3">Cooperação</CardTitle>
                  <CardDescription className="text-base font-medium leading-relaxed">
                    Acreditamos que a união de esforços fortalece o capital e gera resultados mais sólidos e justos.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card variant="luxury" className="hover:scale-105 transition-transform duration-300 border-2 border-secondary/20 hover:border-secondary/40 shadow-luxury">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-secondary/30 to-accent/30 rounded-xl flex items-center justify-center mb-4 shadow-glow">
                    <Heart className="w-7 h-7 text-secondary" />
                  </div>
                  <CardTitle className="text-xl font-bold mb-3">Pessoas no Centro</CardTitle>
                  <CardDescription className="text-base font-medium leading-relaxed">
                    Nossos associados são o nosso maior ativo, e todas as nossas decisões são tomadas com o objetivo de beneficiá-los.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card variant="luxury" className="hover:scale-105 transition-transform duration-300 border-2 border-accent/20 hover:border-secondary/40 shadow-luxury">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-accent/30 via-secondary/30 to-accent/30 rounded-xl flex items-center justify-center mb-4 shadow-glow">
                    <Shield className="w-7 h-7 text-accent" />
                  </div>
                  <CardTitle className="text-xl font-bold mb-3">Ética e Transparência</CardTitle>
                  <CardDescription className="text-base font-medium leading-relaxed">
                    Atuamos com base em princípios claros e honestos, mantendo uma comunicação aberta e transparente com todos os nossos públicos.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card variant="luxury" className="hover:scale-105 transition-transform duration-300 border-2 border-secondary/20 hover:border-accent/40 shadow-luxury">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-secondary/30 to-accent/30 rounded-xl flex items-center justify-center mb-4 shadow-glow">
                    <MapPin className="w-7 h-7 text-secondary" />
                  </div>
                  <CardTitle className="text-xl font-bold mb-3">Desenvolvimento Local</CardTitle>
                  <CardDescription className="text-base font-medium leading-relaxed">
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
      <section className="py-24 bg-gradient-to-r from-accent/20 via-secondary/20 to-accent/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,209,255,0.15),transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-good-times text-foreground mb-8">
              Venha Fazer <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">Parte</span>
            </h2>
            <p className="text-xl text-foreground/90 mb-10 max-w-3xl mx-auto font-semibold">
              Venha fazer parte do nosso modelo de gestão e descubra uma nova forma de investir no seu futuro,
              com a força do cooperativismo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contato"
                className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-accent to-secondary text-primary rounded-full font-bold text-lg hover:shadow-glow-lg transition-all duration-300 hover:scale-105"
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
