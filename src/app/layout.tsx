import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { firm } from "@/lib/content";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://victor-bitencourt-advogado.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${firm.name} | Advogado em Belo Horizonte`,
    template: `%s | ${firm.name}`,
  },
  description:
    "Escritório de advocacia em Belo Horizonte com atuação consultiva e contenciosa nas áreas cível, familiar, criminal e trabalhista. Atendimento personalizado e fale agora pelo WhatsApp.",
  keywords: [
    "advogado Belo Horizonte",
    "advocacia cível",
    "advogado de família",
    "advogado trabalhista",
    "advogado criminal",
    "Bitencourt Advocacia",
  ],
  authors: [{ name: firm.lawyerName }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: firm.name,
    title: `${firm.name} | Advogado em Belo Horizonte`,
    description:
      "Atendimento jurídico consultivo e contencioso nas áreas cível, familiar, criminal e trabalhista.",
    images: [{ url: "/images/victor-hero.webp", width: 1200, height: 1500 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${firm.name} | Advogado em Belo Horizonte`,
    description: "Atendimento jurídico consultivo e contencioso em Belo Horizonte.",
    images: ["/images/victor-hero.webp"],
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#faf7f0",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Attorney",
    name: firm.name,
    image: `${siteUrl}/images/victor-hero.webp`,
    url: siteUrl,
    telephone: `+${firm.phoneWhatsApp}`,
    email: firm.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: firm.address.street,
      addressLocality: firm.address.city,
      addressRegion: firm.address.state,
      postalCode: firm.address.zip,
      addressCountry: "BR",
    },
    areaServed: "Belo Horizonte, MG",
    knowsAbout: [
      "Direito de Família",
      "Direito Trabalhista",
      "Direito Empresarial",
      "Direito Cível",
      "Direito Criminal",
      "Direito Previdenciário",
    ],
    sameAs: [firm.social.instagram],
  };

  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-parchment text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
