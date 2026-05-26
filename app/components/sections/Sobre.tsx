"use client";

import { BookOpen, Heart, Scale } from "lucide-react";
import { Section, Eyebrow, SectionTitle, FadeIn } from "@/app/components/ui/Section";

const pillars = [
  {
    icon: BookOpen,
    title: "Atuação Multidisciplinar",
    description: "Cobertura ampla em diversas áreas do Direito.",
  },
  {
    icon: Heart,
    title: "Atendimento Personalizado",
    description: "Cada cliente é único e assim é tratado.",
  },
  {
    icon: Scale,
    title: "Ética e Transparência",
    description: "Compromisso com os valores da advocacia.",
  },
];

export function Sobre() {
  return (
    <Section id="sobre">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <FadeIn>
          <div className="relative">
            <div className="aspect-[4/3] md:aspect-[3/4] overflow-hidden rounded-sm bg-gradient-to-br from-champagne/20 to-accent-deep/10">
              <img
                src="/asduas.jpg"
                alt="Escritório Castro & Damaso"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 h-full w-full rounded-sm border border-champagne/15 -z-10" />
          </div>
        </FadeIn>

        <div>
          <Eyebrow>O Escritório</Eyebrow>
          <SectionTitle>Tradição que se renova a cada caso</SectionTitle>

          <FadeIn delay={0.2}>
            <div className="mt-6 space-y-4 font-sans text-base leading-relaxed text-accent-deep md:text-lg">
              <p>
                O escritório Castro & Damaso nasce da convicção de que a
                advocacia de excelência se constrói com técnica, ética e
                proximidade real com o cliente. Com sede em Ponte Nova/MG,
                atuamos de forma multidisciplinar em diversas áreas do Direito,
                oferecendo soluções jurídicas que respeitam a singularidade de
                cada caso.
              </p>
              <p>
                Nosso compromisso é com um atendimento humanizado, onde a escuta
                ativa e a comunicação transparente são pilares essenciais.
                Acreditamos que a relação de confiança entre advogado e cliente é
                o alicerce para uma atuação jurídica responsável e eficiente.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="group text-center sm:text-left"
                >
                  <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-champagne/20 transition-colors duration-300 group-hover:border-champagne/50 group-hover:bg-champagne/5 sm:mx-0">
                    <pillar.icon className="h-5 w-5 text-champagne" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-text-dark">
                    {pillar.title}
                  </h3>
                  <p className="mt-1 font-sans text-sm text-accent-deep">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}
