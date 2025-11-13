'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { SVGProps } from 'react';
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail, 
  MapPin,
  Shield,
  Award,
  Users
} from 'lucide-react';

const WhatsAppIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12.004 2.003c-5.514 0-9.997 4.483-9.997 9.997 0 1.763.462 3.482 1.337 4.998L2 22l5.173-1.326a9.944 9.944 0 0 0 4.83 1.247h.001c5.514 0 9.997-4.483 9.997-9.997 0-2.67-1.04-5.181-2.929-7.07a9.944 9.944 0 0 0-7.068-2.851Zm0 1.8a8.2 8.2 0 0 1 5.822 2.413A8.203 8.203 0 0 1 20.003 12c0 4.525-3.676 8.2-8.201 8.2a8.21 8.21 0 0 1-4.184-1.124l-.299-.18-3.076.788.82-2.99-.194-.307A8.192 8.192 0 0 1 3.8 12c0-4.525 3.675-8.2 8.2-8.2Zm-2.198 4.902c-.189-.42-.388-.429-.568-.437-.147-.006-.315-.006-.483-.006-.168 0-.44.063-.671.314-.231.252-.883.863-.883 2.104 0 1.24.904 2.438 1.03 2.604.126.168 1.743 2.79 4.273 3.8 2.519 1.004 2.519.669 2.973.626.454-.042 1.463-.598 1.669-1.177.206-.58.206-1.075.147-1.177-.058-.1-.231-.168-.482-.295-.252-.126-1.493-.736-1.725-.819-.231-.084-.4-.126-.568.126-.168.252-.651.819-.799.987-.148.168-.294.189-.546.063-.252-.126-1.064-.392-2.026-1.247-.748-.668-1.252-1.492-1.4-1.744-.147-.252-.016-.389.111-.514.114-.114.252-.294.378-.441.126-.147.168-.252.253-.42.084-.168.042-.314-.021-.441-.063-.126-.55-1.32-.778-1.806Z" />
  </svg>
);

const footerLinks = {
  products: [
    { label: 'Conta Corrente', href: '/produtos/conta-corrente' },
    { label: 'Cartão de Crédito', href: '/produtos/cartao-credito' },
    { label: 'Investimentos', href: '/produtos/investimentos' },
    { label: 'Empréstimos', href: '/produtos/emprestimos' },
    { label: 'Seguros', href: '/produtos/seguros' },
  ],
  company: [
    { label: 'Sobre Nós', href: '/sobre' },
    { label: 'Carreiras', href: '/carreiras' },
    { label: 'Imprensa', href: '/imprensa' },
    { label: 'Sustentabilidade', href: '/sustentabilidade' },
    { label: 'Investidores', href: '/investidores' },
  ],
  support: [
    { label: 'Central de Ajuda', href: '/ajuda' },
    { label: 'Contato', href: '/contato' },
    { label: 'Termos de Uso', href: '/termos' },
    { label: 'Política de Privacidade', href: '/privacidade' },
    { label: 'Código de Conduta', href: '/codigo-conduta' },
  ],
  corporate: [
    { label: 'Soluções Corporativas', href: '/solucoes-corporativas' },
    { label: 'Tecnologia & Segurança', href: '/tecnologia-seguranca' },
    { label: 'Compliance', href: '/compliance' },
    { label: 'Relatórios', href: '/relatorios' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

const certifications = [
  { icon: Shield, label: 'ISO 27001' },
  { icon: Award, label: 'PCI DSS' },
  { icon: Users, label: 'LGPD' },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <img 
                src="/assets/LOGO%2004%20quadrado.png" 
                alt="Picredi Logo" 
                className="h-8 w-auto"
              />
            </Link>
            
            <p className="text-muted-foreground mb-6 max-w-sm">
              O banco digital que combina tecnologia de ponta com o atendimento personalizado 
              que você merece. Sua vida financeira, simplificada.
            </p>

            {/* Certifications */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-foreground">Certificações</h4>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center space-x-1 px-2 py-1 bg-muted rounded text-xs text-muted-foreground"
                  >
                    <cert.icon className="w-3 h-3" />
                    <span>{cert.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-sm font-semibold text-foreground mb-4">Produtos</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-sm font-semibold text-foreground mb-4">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-sm font-semibold text-foreground mb-4">Suporte</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Corporate */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-sm font-semibold text-foreground mb-4">Corporativo</h3>
            <ul className="space-y-3">
              {footerLinks.corporate.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="py-8 border-t border-border"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <WhatsAppIcon className="w-5 h-5 text-accent" />
              <div>
                <Link
                  href="https://wa.me/5511914247595"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-foreground hover:text-accent transition-colors"
                >
                  +55 11 91424-7595
                </Link>
                <p className="text-xs text-muted-foreground">WhatsApp e Atendimento 24h</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-accent" />
              <div>
                <p className="text-sm font-medium text-foreground">controladoria@picredi.com.br</p>
                <p className="text-xs text-muted-foreground">Suporte por email</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-accent" />
              <div>
                <p className="text-sm font-medium text-foreground">Av. Pres. Juscelino Kubitschek, 1455 - 4º Andar</p>
                <p className="text-xs text-muted-foreground">Vila Nova Conceição, São Paulo - SP, 04543-011</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="py-6 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <div className="text-sm text-muted-foreground">
            © 2024 Picredi. Todos os direitos reservados.
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="text-muted-foreground hover:text-accent transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
