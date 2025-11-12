'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Lock, Mail, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Redirect to dashboard or show success message
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 py-12 px-4 sm:px-6 lg:px-8 pt-32">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-6">
            <img 
              src="/assets/LOGO%2004%20quadrado.png" 
              alt="Picredi Logo" 
              className="h-12 w-auto"
            />
          </div>
          <h1 className="text-display text-3xl font-good-times text-foreground mb-2">
            Bem-vindo de volta
          </h1>
          <p className="text-muted-foreground">
            Acesse sua conta Picredi
          </p>
        </motion.div>

        {/* Login Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card variant="luxury">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Entrar</CardTitle>
              <CardDescription className="text-center">
                Digite suas credenciais para acessar sua conta
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email ou CPF
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="text"
                      id="email"
                      name="email"
                      required
                      className="w-full pl-10 pr-4 py-3 border border-input rounded-lg bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent"
                      placeholder="seu@email.com ou 000.000.000-00"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
                    Senha
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      required
                      className="w-full pl-10 pr-12 py-3 border border-input rounded-lg bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent"
                      placeholder="Sua senha"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember"
                      name="remember"
                      type="checkbox"
                      className="w-4 h-4 text-accent bg-background border-input rounded focus:ring-ring"
                    />
                    <label htmlFor="remember" className="ml-2 text-sm text-muted-foreground">
                      Lembrar de mim
                    </label>
                  </div>
                  <a
                    href="/recuperar-senha"
                    className="text-sm text-accent hover:underline"
                  >
                    Esqueceu a senha?
                  </a>
                </div>

                <Button
                  type="submit"
                  variant="accent"
                  size="lg"
                  className="w-full"
                  loading={isLoading}
                >
                  {isLoading ? 'Entrando...' : 'Entrar'}
                  {!isLoading && <ArrowRight className="w-5 h-5 ml-2" />}
                </Button>
              </form>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-card text-muted-foreground">ou</span>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <Button variant="outline" className="w-full">
                    Entrar com Biometria
                  </Button>
                  <Button variant="outline" className="w-full">
                    Entrar com Digital
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Options */}
          <motion.div
            className="mt-8 text-center space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-sm text-muted-foreground">
              Não tem uma conta?{' '}
              <a href="/cadastro" className="text-accent hover:underline font-medium">
                Abra sua conta gratuitamente
              </a>
            </p>
            
            <div className="flex justify-center space-x-6 text-sm">
              <a href="/ajuda" className="text-muted-foreground hover:text-foreground">
                Central de Ajuda
              </a>
              <a href="/contato" className="text-muted-foreground hover:text-foreground">
                Suporte
              </a>
              <a href="/seguranca" className="text-muted-foreground hover:text-foreground">
                Segurança
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Security Notice */}
        <motion.div
          className="bg-muted/50 border border-border rounded-lg p-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex items-start space-x-3">
            <div className="w-5 h-5 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <Lock className="w-3 h-3 text-accent" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-foreground mb-1">
                Conexão Segura
              </h3>
              <p className="text-xs text-muted-foreground">
                Sua conexão é criptografada com SSL/TLS. Seus dados estão protegidos 
                com tecnologia bancária de nível militar.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
