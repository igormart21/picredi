'use client';

import { motion } from 'framer-motion';
import { Phone, MessageCircle, ShieldAlert, Headset, Users, Globe } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import Link from 'next/link';

const iconMap = {
  whatsapp: MessageCircle,
  phone: Phone,
  manager: Users,
  digital: Globe,
  ouvidoria: Headset,
  alert: ShieldAlert,
} as const;

type IconKey = keyof typeof iconMap;

interface SupportItem {
  label: string;
  value: string;
  href?: string;
}

interface SupportChannel {
  icon: IconKey;
  title: string;
  description: string;
  items: SupportItem[];
}

const supportChannels: SupportChannel[] = [
  {
    icon: 'whatsapp',
    title: '1. Atendimento via WhatsApp (Assistente Virtual "Theo")',
    description:
      'O canal mais rápido para obter informações, verificar saldo, extrato e tirar dúvidas gerais.',
    items: [
      { label: 'Número Oficial', value: '+55 11 91424-7595', href: 'https://wa.me/5511914247595' },
      {
        label: 'Como usar',
        value:
          'Adicione o número à sua agenda e envie um "Oi". Você será atendido pelo Theo e, se necessário, poderá ser transferido para um atendente humano ou seu gerente.',
      },
    ],
  },
  {
    icon: 'phone',
    title: '2. Telefones da Central de Atendimento',
    description:
      'Para quem prefere conversar por telefone, mantenha os números oficiais do Picredi sempre à mão.',
    items: [
      { label: 'Capitais e Regiões Metropolitanas', value: '+55 11 91424-7595', href: 'tel:+5511914247595' },
      { label: 'Demais Localidades', value: '+55 11 91424-7595', href: 'tel:+5511914247595' },
      {
        label: 'Outros números mencionados no FAQ',
        value:
          'Consulte o FAQ para conferir os telefones adicionais exclusivos para capitais e demais localidades.',
      },
    ],
  },
  {
    icon: 'manager',
    title: '3. Fale com seu Gerente',
    description:
      'Seu gerente acompanha seus objetivos e está pronto para apoiar decisões sobre investimentos e fundos.',
    items: [
      {
        label: 'Como acessar',
        value:
          'No site ou aplicativo, acesse a área de agências e confira os contatos diretos do seu gerente Picredi.',
      },
    ],
  },
  {
    icon: 'digital',
    title: '4. Canais Digitais',
    description:
      'O site oficial e o aplicativo do Picredi reúnem Perguntas Frequentes (FAQ), status dos fundos e acesso rápido a serviços.',
    items: [
      {
        label: 'Site',
        value: 'picredi.com.br/ajuda',
        href: '/ajuda',
      },
      {
        label: 'Aplicativo',
        value:
          'Baixe o App Picredi na Google Play ou App Store e acesse seus produtos onde estiver.',
      },
    ],
  },
  {
    icon: 'ouvidoria',
    title: '5. Ouvidoria',
    description:
      'Se a sua demanda não foi solucionada pelos canais anteriores, conte com a Ouvidoria Picredi.',
    items: [
      { label: 'Telefone', value: '+55 11 91424-7595', href: 'tel:+5511914247595' },
      {
        label: 'Portal da Ouvidoria',
        value: 'Disponível no site oficial do Picredi para registro formal de solicitações.',
      },
    ],
  },
];

export default function AjudaPage() {
  const AlertIcon = iconMap.alert;

  return (
    <div className="min-h-screen pt-20 sm:pt-24 bg-gradient-to-br from-background via-background to-muted/20">
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-good-times text-foreground mb-6">
              Central de{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
                Ajuda
              </span>
              &nbsp;e Contato
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Escolha o canal oficial do Picredi que melhor atende à sua necessidade e receba suporte
              com segurança, agilidade e atendimento humano sempre que precisar.
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
            {supportChannels.map((channel, index) => {
              const IconComponent = iconMap[channel.icon] ?? iconMap.whatsapp;

              return (
              <motion.div
                key={channel.title}
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
                    <CardTitle className="text-xl">{channel.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {channel.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 mt-auto">
                    {channel.items.map((item) => (
                      <div key={item.label}>
                        <p className="text-sm font-semibold text-foreground">{item.label}</p>
                        {item.href ? (
                          <Link
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-accent hover:underline"
                          >
                            {item.value}
                          </Link>
                        ) : (
                          <p className="text-sm text-muted-foreground">{item.value}</p>
                        )}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            );
            })}
          </motion.div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-accent/10 border border-accent/30 rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col md:flex-row gap-8 md:gap-10 items-start md:items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
              <AlertIcon className="w-8 h-8 text-accent" />
            </div>
            <div>
              <h2 className="text-2xl font-good-times text-foreground mb-4">
                Alerta de Segurança
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                O Picredi alerta que a Central de Atendimento não realiza ligações solicitando senhas,
                códigos ou procedimentos de segurança no aplicativo ou Internet Banking. Em caso de
                suspeita, encerre o contato e acione imediatamente um dos canais oficiais acima.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

