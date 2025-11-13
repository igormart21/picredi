'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Lock,
  FileText,
  Share2,
  Shield,
  UserCheck,
  Cookie,
  RefreshCcw,
  Mail,
  Building2,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';

interface PolicyItem {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  bullets?: string[];
}

const policyItems: PolicyItem[] = [
  {
    icon: FileText,
    title: '1. Informações que coletamos',
    description:
      'Ao se cadastrar em nossos canais digitais, podemos solicitar dados pessoais e financeiros necessários à prestação de serviços.',
    bullets: [
      'Nome completo, CPF/CNPJ e dados de contato como telefone e e-mail.',
      'Endereço, dados bancários e informações financeiras indispensáveis para operações.',
    ],
  },
  {
    icon: Lock,
    title: '2. Como usamos os dados',
    description:
      'Os dados pessoais são utilizados para oferecer experiências seguras e personalizadas.',
    bullets: [
      'Criar e gerenciar sua conta e relacionamento com o Picredi.',
      'Processar transações, pagamentos e serviços financeiros.',
      'Personalizar produtos, campanhas de marketing autorizadas e recomendações.',
      'Aprimorar a segurança e a experiência de uso do aplicativo e dos canais digitais.',
    ],
  },
  {
    icon: Share2,
    title: '3. Compartilhamento dos dados',
    description:
      'Compartilhamos informações somente quando necessário e em situações específicas, sempre com garantia de confidencialidade.',
    bullets: [
      'Cumprimento de obrigações legais e regulatórias.',
      'Parcerias estratégicas autorizadas pelo usuário.',
      'Provedores de serviços essenciais (com contratos rigorosos).',
    ],
  },
  {
    icon: Shield,
    title: '4. Segurança dos dados',
    description:
      'Adotamos padrões avançados de segurança para proteger seus dados pessoais.',
    bullets: [
      'Uso de criptografia, autenticação multifatorial e monitoramento contínuo.',
      'Auditorias periódicas e controles internos alinhados às melhores práticas.',
    ],
  },
  {
    icon: UserCheck,
    title: '5. Direitos dos usuários',
    description:
      'Você pode exercer seus direitos previstos na LGPD a qualquer momento.',
    bullets: [
      'Acessar, corrigir ou atualizar seus dados pessoais.',
      'Solicitar portabilidade ou exclusão das informações, respeitando obrigações legais.',
      'Entre em contato pelo e-mail: controladoria@picredi.com.br.',
    ],
  },
  {
    icon: Cookie,
    title: '6. Cookies',
    description:
      'Utilizamos cookies e tecnologias similares para personalizar a navegação e aprimorar serviços.',
    bullets: [
      'As configurações podem ser ajustadas conforme a Política de Cookies específica.',
      'Os cookies ajudam a lembrar preferências e oferecer conteúdo relevante.',
    ],
  },
  {
    icon: RefreshCcw,
    title: '7. Alterações desta política',
    description:
      'Esta Política pode ser atualizada periodicamente e a versão vigente será comunicada pelos canais oficiais.',
    bullets: [
      'Recomenda-se consulta regular para acompanhar eventuais alterações.',
      'Mantemos registros da versão e da data da última atualização.',
    ],
  },
  {
    icon: Mail,
    title: '8. Contato',
    description:
      'Para dúvidas ou solicitações sobre privacidade e proteção de dados, fale conosco.',
    bullets: [
      'E-mail: controladoria@picredi.com.br',
      'Endereço: Av. Pres. Juscelino Kubitschek, 1455 - 4º Andar - Vila Nova Conceição, São Paulo - SP, 04543-011',
    ],
  },
];

export default function PoliticaPrivacidadePage() {
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
              Política de{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
                Privacidade
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-6">
              PICREDI ADMINISTRACAO ATIVOS LTDA • CNPJ 19.969.164/0001-50 • Av. Pres. Juscelino
              Kubitschek, 1455 - 4º Andar - Vila Nova Conceição, São Paulo - SP, 04543-011
            </p>
            <p className="text-base sm:text-lg text-muted-foreground">
              Esta Política descreve como coletamos, usamos e protegemos seus dados pessoais,
              respeitando a legislação vigente e os princípios do cooperativismo.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {policyItems.map((item, index) => {
              const IconComponent = item.icon;

              return (
                <motion.div
                  key={item.title}
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
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                    {item.bullets && (
                      <CardContent className="space-y-3 mt-auto">
                        <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                          {item.bullets.map((bullet) => (
                            <li key={bullet} className="flex items-start gap-2">
                              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    )}
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            className="mt-16 bg-accent/10 border border-accent/20 rounded-3xl p-6 sm:p-8 lg:p-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-muted-foreground">
              Última atualização: Novembro de 2025.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

