'use client';

import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Scale,
  LockKeyhole,
  Users,
  ClipboardList,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';

const principles = [
  {
    icon: ShieldCheck,
    title: '1. Compromisso com a Ética e Integridade',
    description:
      'A base das nossas relações é a ética, a transparência e a responsabilidade, refletindo os valores cooperativos do Picredi Administração de Ativos.',
    bullets: [
      'Honestidade e Imparcialidade: decisões e operações conduzidas com total honestidade e sem favorecimento pessoal.',
      'Conformidade Regulatória: aderência rigorosa às leis, às normas do Banco Central e às diretrizes da ANBIMA para administração de recursos de terceiros.',
      'Combate a Ilicitudes: políticas robustas para prevenir lavagem de dinheiro, corrupção e financiamento ao terrorismo.',
    ],
  },
  {
    icon: Scale,
    title: '2. Gestão de Conflitos de Interesse',
    description:
      'A confiança é preservada com transparência na identificação e na condução de conflitos de interesse.',
    bullets: [
      'Transparência: divulgação proativa de conflitos reais ou potenciais.',
      'Prioridade do Associado: decisões de investimento priorizam o melhor interesse de cotistas e associados, evitando benefícios indevidos.',
    ],
  },
  {
    icon: LockKeyhole,
    title: '3. Confidencialidade e Uso de Informações',
    description:
      'Informações estratégicas são tratadas com sigilo absoluto para proteger investidores, associados e a instituição.',
    bullets: [
      'Sigilo Profissional: proteção rigorosa de informações confidenciais ou privilegiadas.',
      'Uso Adequado: informações privilegiadas não podem ser utilizadas para realizar ou recomendar operações no mercado financeiro.',
    ],
  },
  {
    icon: Users,
    title: '4. Relacionamento e Conduta Profissional',
    description:
      'Nosso ambiente de trabalho estimula respeito, colaboração e alta diligência em todas as interações.',
    bullets: [
      'Zelo e Diligência: atuação cuidadosa na gestão dos recursos, buscando a melhor execução das estratégias.',
      'Respeito e Inclusão: ambiente livre de assédio, discriminação ou preconceito.',
      'Relacionamento com o Mercado: trato ético e profissional com concorrentes, reguladores e parceiros.',
    ],
  },
  {
    icon: ClipboardList,
    title: '5. Monitoramento e Responsabilidade',
    description:
      'O Código de Conduta é um guia vivo, acompanhado de mecanismos de monitoramento e canais de denúncia seguros.',
    bullets: [
      'Adesão: todos os colaboradores, gestores e administradores devem conhecer e seguir o Código.',
      'Reporte de Violações: canais confidenciais para reportar condutas inadequadas e violações éticas.',
    ],
  },
];

export default function CodigoCondutaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 pt-20 sm:pt-24">
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-good-times text-foreground mb-6">
              Código de{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
                Conduta
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              O Código de Conduta do Picredi Administração de Ativos é um compromisso com a ética,
              a transparência e a responsabilidade, alinhado aos valores do cooperativismo.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {principles.map((principle, index) => {
              const IconComponent = principle.icon;

              return (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card variant="luxury" className="h-full flex flex-col">
                    <CardHeader>
                      <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                        <IconComponent className="w-6 h-6 text-accent" />
                      </div>
                      <CardTitle className="text-xl">{principle.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {principle.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto space-y-3">
                      <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                        {principle.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-2">
                            <span className="mt-1 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

