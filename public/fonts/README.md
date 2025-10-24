# 🔤 Fontes do Picredi

Esta pasta contém as fontes customizadas do projeto.

## 📂 Fontes Necessárias

### Good Times Rg (Display/Headings)
Fonte principal para títulos e elementos de destaque.

**Arquivos necessários:**
- `GoodTimesRg-Regular.woff2` (preferencial - mais leve)
- `GoodTimesRg-Regular.woff` (fallback)

**Uso:**
```css
font-family: 'Good Times Rg', sans-serif;
```

**Aplicação:**
- Títulos principais (h1, h2)
- Logo text
- CTAs importantes
- Hero sections

### Inter (Body/UI)
Fonte do sistema para texto e interface.

**Instalação:**
- Já incluída via Google Fonts no `globals.css`
- Não requer arquivos locais

**Uso:**
```css
font-family: 'Inter', system-ui, sans-serif;
```

**Aplicação:**
- Parágrafos
- Botões
- Formulários
- Navegação
- Footer

## 📝 Como Adicionar a Fonte Good Times Rg

1. **Obtenha os arquivos da fonte:**
   - `GoodTimesRg-Regular.woff2`
   - `GoodTimesRg-Regular.woff`

2. **Coloque os arquivos nesta pasta:**
   ```
   public/fonts/
   ├── GoodTimesRg-Regular.woff2
   └── GoodTimesRg-Regular.woff
   ```

3. **A fonte já está configurada em `app/globals.css`:**
   ```css
   @font-face {
     font-family: 'Good Times Rg';
     src: url('/fonts/GoodTimesRg-Regular.woff2') format('woff2'),
          url('/fonts/GoodTimesRg-Regular.woff') format('woff');
     font-weight: 400;
     font-style: normal;
     font-display: swap;
   }
   ```

4. **Use a classe utilitária:**
   ```tsx
   <h1 className="font-good-times">Título</h1>
   ```

## 🎨 Hierarquia Tipográfica

### Display (Good Times Rg)
- **display-2xl**: 4.5rem (72px)
- **display-xl**: 3.75rem (60px)
- **display-lg**: 3rem (48px)
- **display-md**: 2.25rem (36px)
- **display-sm**: 1.875rem (30px)

### Body (Inter)
- **text-xl**: 1.25rem (20px)
- **text-lg**: 1.125rem (18px)
- **text-base**: 1rem (16px)
- **text-sm**: 0.875rem (14px)
- **text-xs**: 0.75rem (12px)

## 🔧 Otimização

### Preload da Fonte
A fonte Good Times Rg está sendo pre-carregada no `layout.tsx`:
```tsx
<link 
  rel="preload" 
  href="/fonts/GoodTimesRg-Regular.woff2" 
  as="font" 
  type="font/woff2" 
  crossOrigin="anonymous" 
/>
```

### Font Display Strategy
Usamos `font-display: swap` para:
- Mostrar texto imediatamente com fallback
- Trocar para fonte customizada quando carregar
- Evitar FOIT (Flash of Invisible Text)

## 📦 Fontes Alternativas (Fallback)

Se Good Times Rg não carregar:
1. Sans-serif do sistema
2. -apple-system (macOS/iOS)
3. BlinkMacSystemFont (Chrome/macOS)
4. Segoe UI (Windows)
5. Roboto (Android)

## ⚠️ Licenciamento

**IMPORTANTE:** Verifique a licença da fonte Good Times Rg antes de usar em produção.

- ✅ Uso pessoal: Geralmente permitido
- ⚠️ Uso comercial: Requer licença
- 📄 Consulte: [Licença da fonte]

## 🔗 Recursos

- **Google Fonts (Inter)**: https://fonts.google.com/specimen/Inter
- **Font Squirrel**: https://www.fontsquirrel.com/
- **Web Font Generator**: https://www.fontsquirrel.com/tools/webfont-generator

---

**Desenvolvido pela equipe Picredi**
