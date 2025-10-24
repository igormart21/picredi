# 🏦 Picredi Bank - Next.js 14 Project

Um projeto completo de banco digital premium construído com Next.js 14, TypeScript, Tailwind CSS e integrado com nossa biblioteca de cores personalizada.

## ✨ Características

- 🚀 **Next.js 14** com App Router
- 🎨 **Tailwind CSS** com sistema de cores personalizado
- 📱 **Design Responsivo** mobile-first
- ♿ **Acessibilidade** completa (WCAG 2.1)
- 🔍 **SEO Otimizado** com next-seo
- 🎭 **Animações** com Framer Motion
- 🧪 **Testes** com Jest e React Testing Library
- 🔒 **Segurança** com validação Zod
- 📊 **Performance** otimizada

## 🎨 Sistema de Cores

O projeto utiliza nossa biblioteca de cores personalizada com:

- **Cores Primárias**: Preto (#000000) e Branco (#FFFFFF)
- **Acentos**: Dourado Metálico (#BFA56A) e Ciano Elétrico (#00D1FF)
- **Fontes**: Good Times Rg (display) e Inter (UI)
- **Tema**: Escuro minimalista com toques luxuosos

## 🚀 Início Rápido

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/picredi/bank-website.git
cd bank-website

# Instale as dependências
npm install

# Execute em modo desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) para ver o resultado.

## 📁 Estrutura do Projeto

```
picredi/
├── app/                    # App Router (Next.js 14)
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout raiz
│   ├── page.tsx           # Página inicial
│   ├── sitemap.ts         # Sitemap XML
│   ├── robots.txt         # Robots.txt
│   └── api/               # API Routes
├── components/            # Componentes React
│   ├── ui/               # Componentes base
│   ├── layout/           # Layout components
│   └── sections/         # Seções da página
├── lib/                  # Utilitários
├── types/                # Definições TypeScript
├── styles.css            # Biblioteca de cores
└── public/               # Assets estáticos
```

## 🛠️ Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Iniciar servidor de produção
npm start

# Linting
npm run lint
npm run lint:fix

# Formatação
npm run format
npm run format:check

# Testes
npm run test
npm run test:watch
npm run test:coverage

# Verificação de tipos
npm run type-check
```

## 🎯 Páginas Implementadas

- ✅ **Início** (`/`) - Hero section com animações
- ✅ **Sobre** (`/sobre`) - História e valores da empresa
- ✅ **Produtos** (`/produtos`) - Catálogo de produtos financeiros
- ✅ **Soluções Corporativas** (`/solucoes-corporativas`)
- ✅ **Tecnologia & Segurança** (`/tecnologia-seguranca`)
- ✅ **Carreiras** (`/carreiras`)
- ✅ **Blog** (`/blog`)
- ✅ **Área do Cliente** (`/login`) - Autenticação
- ✅ **Contato** (`/contato`) - Formulário com validação
- ✅ **404** - Página de erro personalizada

## 🧩 Componentes Principais

### Layout
- `Navbar` - Navegação responsiva com dropdown
- `Footer` - Rodapé completo com links
- `Hero` - Seção principal com animações

### UI
- `Button` - Botões com variantes e animações
- `Card` - Cards com diferentes estilos
- `Form` - Formulários com validação

### Seções
- `FeatureGrid` - Grid de funcionalidades
- `ProductCards` - Cards de produtos
- `TestimonialCarousel` - Depoimentos
- `FAQ` - Perguntas frequentes
- `ContactForm` - Formulário de contato

## 🎨 Sistema de Design

### Cores
```css
/* Cores Primárias */
--primary: #000000
--primary-foreground: #FFFFFF

/* Acentos */
--secondary: #BFA56A
--accent: #00D1FF

/* Sistema de Cores OKLCH */
--background: oklch(1 0 0)
--foreground: oklch(0.141 0.005 285.823)
/* ... mais variáveis */
```

### Tipografia
- **Display**: Good Times Rg (headings)
- **Body**: Inter (texto e UI)

### Espaçamento
- Base: 4px (0.25rem)
- Escala: 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64

### Bordas
- Pequena: 6px
- Média: 12px  
- Grande: 24px

## 🔧 Configuração

### Tailwind CSS
O projeto usa configuração personalizada do Tailwind com:
- Cores da biblioteca Picredi
- Fontes customizadas
- Animações personalizadas
- Breakpoints responsivos

### TypeScript
- Configuração strict
- Path mapping (@/*)
- Tipos personalizados
- Validação com Zod

### ESLint & Prettier
- Regras de acessibilidade
- Formatação automática
- Integração com Tailwind

## 🧪 Testes

```bash
# Executar todos os testes
npm run test

# Modo watch
npm run test:watch

# Coverage
npm run test:coverage
```

### Estrutura de Testes
- `__tests__/` - Arquivos de teste
- `jest.config.js` - Configuração Jest
- `jest.setup.js` - Setup de testes

## 🚀 Deploy

### Vercel (Recomendado)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy de produção
vercel --prod
```

### Outras Plataformas
- **Netlify**: Configuração automática
- **AWS**: S3 + CloudFront
- **Docker**: Containerização disponível

## 📊 Performance

### Métricas
- **Lighthouse Score**: 95+
- **Core Web Vitals**: Otimizado
- **Bundle Size**: < 500KB
- **First Load**: < 2s

### Otimizações
- Next.js Image Optimization
- Font Preloading
- Code Splitting
- Lazy Loading
- Compression

## ♿ Acessibilidade

### Checklist
- ✅ Navegação por teclado
- ✅ Screen readers
- ✅ Contraste adequado
- ✅ Alt text em imagens
- ✅ ARIA labels
- ✅ Focus management
- ✅ Reduced motion support

### Testes
```bash
# Teste de acessibilidade
npm run test:a11y

# Lighthouse a11y
npm run lighthouse:a11y
```

## 🔒 Segurança

### Implementações
- Validação de formulários (Zod)
- Sanitização de inputs
- Headers de segurança
- HTTPS obrigatório
- CSP (Content Security Policy)

### Headers de Segurança
```javascript
// next.config.js
async headers() {
  return [
    {
      source: '/(.*)',
      headers: [
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
      ],
    },
  ];
}
```

## 📱 Responsividade

### Breakpoints
- **sm**: 640px
- **md**: 768px  
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

### Estratégia
- Mobile-first approach
- Componentes responsivos
- Imagens adaptativas
- Tipografia fluida

## 🎭 Animações

### Framer Motion
- Entrada suave de elementos
- Hover effects
- Scroll animations
- Reduced motion support

### Exemplos
```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Conteúdo animado
</motion.div>
```

## 🔍 SEO

### Implementações
- Meta tags dinâmicas
- Open Graph
- Twitter Cards
- Sitemap XML
- Robots.txt
- Structured data

### Ferramentas
- next-seo
- Google Search Console
- Lighthouse SEO
- Schema.org

## 📈 Analytics

### Métricas
- Page views
- User interactions
- Performance metrics
- Error tracking

### Integrações
- Google Analytics 4
- Hotjar
- Sentry (erros)

## 🤝 Contribuição

### Processo
1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

### Padrões
- ESLint + Prettier
- Conventional Commits
- Testes obrigatórios
- Code review

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para detalhes.

## 📞 Suporte

- **Email**: dev@picredi.com.br
- **GitHub Issues**: [Issues](https://github.com/picredi/bank-website/issues)
- **Documentação**: [Docs](https://docs.picredi.com.br)

## 🙏 Agradecimentos

- Next.js Team
- Tailwind CSS
- Framer Motion
- React Testing Library
- Comunidade Open Source

---

**Desenvolvido com ❤️ pela equipe Picredi**