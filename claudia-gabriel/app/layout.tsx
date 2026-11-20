import type { Metadata, Viewport } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import { site } from "@/lib/site";
import { seo } from "@/lib/seo";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Fonte serifada dos títulos
const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600"],
  style: ["italic"],
  display: "swap",
  variable: "--font-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: seo.titulo, template: "%s | Psicóloga Claudia Gabriel" },
  description: seo.descricao,
  keywords: seo.palavrasChave,
  applicationName: seo.tituloCurto,
  authors: [{ name: site.nome, url: site.url }],
  creator: site.nome,
  publisher: site.nome,
  category: "health",
  alternates: { canonical: "/", languages: { "pt-BR": "/" } },
  formatDetection: { telephone: false },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: seo.tituloCurto,
    title: seo.titulo,
    description: seo.descricao,
  },
  twitter: {
    card: "summary_large_image",
    title: seo.titulo,
    description: seo.descricao,
  },
  // Preencher as variáveis de ambiente com os códigos do Google Search Console e Bing Webmaster.
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    other: process.env.NEXT_PUBLIC_BING_VERIFICATION
      ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION }
      : undefined,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "geo.region": "BR-MT",
    "geo.placename": "Rondonópolis",
    "geo.position": `${site.endereco.latitude};${site.endereco.longitude}`,
    ICBM: `${site.endereco.latitude}, ${site.endereco.longitude}`,
    "content-language": "pt-BR",
  },
};

export const viewport: Viewport = {
  themeColor: "#f6f1eb",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${montserrat.className} ${playfair.variable}`}>
      <head>
        <link rel="alternate" type="text/markdown" href="/llms.txt" title="Resumo para IA" />
      </head>
      <body>{children}</body>
    </html>
  );
}
