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
  icons: {
    icon: "/favicon.ico",
  },
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
        <html lang="en">
            <body
                className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden max-w-[1855px] mx-auto`}
            >
                <StarsCanvas />
                <Navbar />
                {children}
                {/* <Footer /> */}
            </body>
        </html>
    );
}