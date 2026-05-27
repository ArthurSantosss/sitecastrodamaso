import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Castro & Damaso Advocacia | Advocacia e Consultoria Jurídica em Ponte Nova/MG",
  description:
    "Escritório de advocacia em Ponte Nova/MG especializado em direito civil, previdenciário e bancário. Atendimento personalizado com técnica, ética e proximidade real.",
  keywords: [
    "advogado Ponte Nova",
    "advocacia Ponte Nova MG",
    "consultoria jurídica Ponte Nova",
    "direito civil Ponte Nova",
    "direito previdenciário",
    "direito bancário",
    "escritório de advocacia Zona da Mata",
    "Castro Damaso advogadas",
  ],
  authors: [{ name: "Castro & Damaso Advocacia e Consultoria Jurídica" }],
  alternates: {
    canonical: "https://castroedamaso.adv.br",
  },
  other: {
    "geo.region": "BR-MG",
    "geo.placename": "Ponte Nova",
    "geo.position": "-20.4153;-42.9069",
    "ICBM": "-20.4153, -42.9069",
  },
  openGraph: {
    title:
      "Castro & Damaso Advocacia | Advocacia e Consultoria Jurídica em Ponte Nova/MG",
    description:
      "Escritório de advocacia em Ponte Nova/MG especializado em direito civil, previdenciário e bancário. Atendimento personalizado com técnica, ética e proximidade real.",
    url: "https://castroedamaso.adv.br",
    siteName: "Castro & Damaso Advocacia",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Castro & Damaso Advocacia | Ponte Nova/MG",
    description:
      "Escritório de advocacia em Ponte Nova/MG especializado em direito civil, previdenciário e bancário.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${inter.variable} antialiased`}
    >
      <body>
        <a href="#main-content" className="skip-to-content">
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
