import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'Picredi - O Futuro do Banking Digital',
    template: '%s | Picredi',
  },
  description: 'Descubra uma nova era bancária com tecnologia de ponta, segurança incomparável e atendimento personalizado. Seu dinheiro, sua vida, simplificada.',
  keywords: [
    'banco digital',
    'fintech',
    'conta corrente',
    'cartão de crédito',
    'investimentos',
    'empréstimos',
    'segurança bancária',
    'tecnologia financeira',
  ],
  authors: [{ name: 'Picredi Team' }],
  creator: 'Picredi',
  publisher: 'Picredi',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://picredi.com.br'),
  alternates: {
    canonical: '/',
    languages: {
      'pt-BR': '/',
      'en-US': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://picredi.com.br',
    title: 'Picredi - O Futuro do Banking Digital',
    description: 'Descubra uma nova era bancária com tecnologia de ponta, segurança incomparável e atendimento personalizado.',
    siteName: 'Picredi',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Picredi - Banking Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Picredi - O Futuro do Banking Digital',
    description: 'Descubra uma nova era bancária com tecnologia de ponta, segurança incomparável e atendimento personalizado.',
    images: ['/twitter-image.jpg'],
    creator: '@picredi',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/GoodTimesRg-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
