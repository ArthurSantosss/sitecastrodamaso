import Image from "next/image";
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
    <Section id="sobre" noDivider>
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <FadeIn>
          <div className="overflow-hidden rounded-2xl shadow-2xl shadow-champagne/10 ring-1 ring-champagne/15">
            <Image
              src="/asduas.jpg"
              alt="Escritório Castro & Damaso"
              width={1080}
              height={1920}
              className="w-full h-auto"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </FadeIn>

        <div>
          <Eyebrow>O Escritório</Eyebrow>
          <SectionTitle>Tradição que se renova a cada caso</SectionTitle>

          <FadeIn delay={0.15}>
            <div className="mt-3 h-1 w-12 bg-gradient-to-r from-champagne to-champagne-dark rounded-full" />
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-8 space-y-5 font-sans text-base leading-relaxed text-accent-deep/90 md:text-lg">
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
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="group text-center sm:text-left"
                >
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-champagne/8 transition-all duration-500 group-hover:bg-champagne/15 group-hover:shadow-[0_0_24px_rgba(201,151,62,0.15)] sm:mx-0">
                    <pillar.icon className="h-5 w-5 text-champagne transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-text-dark">
                    {pillar.title}
                  </h3>
                  <p className="mt-1.5 font-sans text-sm text-accent-deep/80">
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
