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
    "Escritório de advocacia em Ponte Nova/MG com atuação multidisciplinar. Atendimento personalizado, técnica e ética em cada caso.",
  keywords: [
    "advogado Ponte Nova",
    "advocacia Ponte Nova MG",
    "consultoria jurídica",
    "direito civil",
    "direito de família",
    "direito trabalhista",
    "Castro Damaso",
  ],
  authors: [{ name: "Castro & Damaso Advocacia e Consultoria Jurídica" }],
  openGraph: {
    title:
      "Castro & Damaso Advocacia | Advocacia e Consultoria Jurídica em Ponte Nova/MG",
    description:
      "Escritório de advocacia em Ponte Nova/MG com atuação multidisciplinar. Atendimento personalizado, técnica e ética em cada caso.",
    url: "https://castroedamaso.adv.br",
    siteName: "Castro & Damaso Advocacia",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Castro & Damaso Advocacia | Ponte Nova/MG",
    description:
      "Escritório de advocacia em Ponte Nova/MG com atuação multidisciplinar.",
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
      <body>{children}</body>
    </html>
  );
}
