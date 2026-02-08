import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thawan Santos | Desenvolvedor Full-Stack",
  description: "Portfólio profissional de Thawan Santos - Desenvolvedor Full-Stack com experiência em React, Next.js, TypeScript e Web Design. Conheça meus projetos e serviços.",
  keywords: "desenvolvedor, web developer, full-stack, react, next.js, typescript, frontend, backend, portfolio, thawan santos",
  authors: [{ name: "Thawan Santos", url: "https://portfoliothawansantos.netlify.app" }],
  creator: "Thawan Santos",
  publisher: "Thawan Santos",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://portfoliothawansantos.netlify.app",
    siteName: "Portfólio Thawan Santos",
    title: "Thawan Santos | Desenvolvedor Full-Stack",
    description: "Portfólio profissional - Desenvolvedor Full-Stack com expertise em React, Next.js e TypeScript",
    images: [
      {
        url: "https://portfoliothawansantos.netlify.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Portfólio Thawan Santos - Desenvolvedor Full-Stack",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thawan Santos | Desenvolvedor Full-Stack",
    description: "Conheça meus projetos e serviços de desenvolvimento web profissional",
    creator: "@thawansantos",
    images: ["https://portfoliothawansantos.netlify.app/og-image.png"],
  },
  alternates: {
    canonical: "https://portfoliothawansantos.netlify.app",
    languages: {
      "pt-BR": "https://portfoliothawansantos.netlify.app",
    },
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "seu-google-site-verification-aqui",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Thawan Santos" />
        
        {/* Ícones e Manifest */}
        <link rel="icon" href="/favicon.jpg" type="image/jpeg" />
        <link rel="shortcut icon" href="/favicon.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/favicon.jpg" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Preconnect para otimizar recursos */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Thawan Santos",
              url: "https://portfoliothawansantos.netlify.app",
              jobTitle: "Full-Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Freelancer",
              },
              sameAs: [
                "https://linkedin.com/in/thawansantos2",
                "https://github.com/ThawanSantos2",
                "https://wa.me/5579998466084",
              ],
              image: "https://portfoliothawansantos.netlify.app/og-image.png",
              description: "Desenvolvedor Full-Stack com expertise em React, Next.js e TypeScript",
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}