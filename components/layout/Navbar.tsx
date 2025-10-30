'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

const navigation: NavItem[] = [
  { label: 'Início', href: '/' },
  { label: 'Quem Somos', href: '/sobre' },
  {
    label: 'Produtos',
    href: '/produtos',
    children: [
      { label: 'Conta Corrente', href: '/produtos/conta-corrente' },
      { label: 'Cartão de Crédito', href: '/produtos/cartao-credito' },
      { label: 'Investimentos', href: '/produtos/investimentos' },
      { label: 'Empréstimos', href: '/produtos/emprestimos' },
      { label: 'Agronegócio', href: '/produtos/agronegocio' },
      { label: 'Imobiliário', href: '/produtos/imobiliario' },
      { label: 'Fundos de Investimento', href: '/produtos/fundos-investimento' },
    ],
  },
  
  { label: 'Contato', href: '/contato' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloquear scroll do body quando menu mobile está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup quando componente desmonta
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMobileMenu = () => setIsOpen(!isOpen);
  const closeMobileMenu = () => setIsOpen(false);

  return (
    <motion.nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-luxury'
          : 'bg-transparent'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <img 
                src="/assets/logo-picredi.png" 
                alt="Picredi Logo" 
                className="h-8 w-auto"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 ml-8">
            {navigation.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-colors hover:text-accent whitespace-nowrap',
                    pathname === item.href
                      ? 'text-accent'
                      : 'text-foreground'
                  )}
                >
                  <span className="whitespace-nowrap">{item.label}</span>
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown Menu */}
                {item.children && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-luxury overflow-hidden"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-3 text-sm text-foreground hover:bg-muted transition-colors"
                            onClick={closeMobileMenu}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-2">
            <Link href="/login">
              <Button variant="ghost" size="sm" className="rounded-full border border-border/50 hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 px-6 py-2 whitespace-nowrap">
                Acessar Conta
              </Button>
            </Link>
            <Link href="/contato">
              <Button variant="accent" size="sm" className="rounded-full shadow-glow hover:shadow-glow-lg transition-all duration-300 px-6 py-2 whitespace-nowrap">
                Abrir Conta
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-md text-foreground hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-card border-t border-border"
          >
            <div className="px-4 py-6 space-y-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
              {navigation.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className={cn(
                      'block px-3 py-2 text-base font-medium transition-colors whitespace-nowrap',
                      pathname === item.href
                        ? 'text-accent'
                        : 'text-foreground hover:text-accent'
                    )}
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                          onClick={closeMobileMenu}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-6 border-t border-border space-y-4">
                <Link href="/login" onClick={closeMobileMenu}>
                  <Button variant="ghost" className="w-full justify-center rounded-full border border-border/50 hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 px-8 py-4 text-base whitespace-nowrap">
                    Acessar Conta
                  </Button>
                </Link>
                <Link href="/contato" onClick={closeMobileMenu}>
                  <Button variant="accent" className="w-full rounded-full shadow-glow hover:shadow-glow-lg transition-all duration-300 px-8 py-4 text-base whitespace-nowrap">
                    Abrir Conta
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
