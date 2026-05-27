import { Hero } from "@/app/components/sections/Hero";
import { Numeros } from "@/app/components/sections/Numeros";
import { Sobre } from "@/app/components/sections/Sobre";
import { Areas } from "@/app/components/sections/Areas";
import { Socias } from "@/app/components/sections/Socias";
import { Metodo } from "@/app/components/sections/Metodo";
import { Depoimentos } from "@/app/components/sections/Depoimentos";
import { Faq } from "@/app/components/sections/Faq";
import { Contato } from "@/app/components/sections/Contato";
import { Footer } from "@/app/components/sections/Footer";
import { Navbar } from "@/app/components/ui/Navbar";
import { WhatsAppFloat } from "@/app/components/ui/WhatsAppFloat";
import { OFFICE } from "@/app/lib/constants";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
      <Hero />
      <Numeros />
      <Sobre />
      <Areas />
      <Socias />
      <Metodo />
      <Depoimentos />
      <Faq />
      <Contato />
      </main>
      <Footer />
      <WhatsAppFloat />
      <StructuredData />
    </>
  );
}

function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: OFFICE.fullName,
    description:
      "Escritório de advocacia em Ponte Nova/MG com atuação multidisciplinar. Atendimento personalizado, técnica e ética em cada caso.",
    url: "https://castroedamaso.adv.br",
    telephone: "+55-31-97137-8863",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Dr. José Grossi, nº 194, Sala 1102",
      addressLocality: "Ponte Nova",
      addressRegion: "MG",
      postalCode: "35430-213",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -20.4153,
      longitude: -42.9069,
    },
    openingHours: "Mo-Fr 09:00-18:00",
    sameAs: [OFFICE.instagram],
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: -20.4153,
        longitude: -42.9069,
      },
      geoRadius: "100000",
    },
    priceRange: "$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
