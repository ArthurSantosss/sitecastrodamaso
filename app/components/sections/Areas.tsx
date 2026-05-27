import {
  Scale,
  Users,
  ShoppingBag,
  Briefcase,
  Shield,
  FileText,
} from "lucide-react";
import { Section, Eyebrow, SectionTitle, FadeIn } from "@/app/components/ui/Section";
import { PRACTICE_AREAS } from "@/app/lib/constants";

const iconMap = {
  Scale,
  Users,
  ShoppingBag,
  Briefcase,
  Shield,
  FileText,
} as const;

export function Areas() {
  return (
    <Section id="areas" dark>
      <div className="text-center">
        <Eyebrow>Áreas de Atuação</Eyebrow>
        <SectionTitle dark>
          Soluções jurídicas em múltiplas frentes
        </SectionTitle>
        <FadeIn delay={0.15}>
          <p className="mx-auto mt-5 max-w-2xl font-sans text-base leading-relaxed text-offwhite/70">
            Assessoria jurídica abrangente, adaptada à complexidade de cada
            demanda e à particularidade de cada cliente.
          </p>
        </FadeIn>
      </div>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {PRACTICE_AREAS.map((area, i) => {
          const Icon = iconMap[area.icon];
          return (
            <FadeIn key={area.title} delay={i * 0.1}>
              <div className="group relative overflow-hidden rounded-xl border border-champagne/8 bg-dark-surface/80 p-10 backdrop-blur-sm transition-all duration-600 hover:border-champagne/25 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(209,169,120,0.08)]">
                <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-champagne/[0.03] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                <div className="relative">
                  <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-champagne/15 to-champagne/5 transition-all duration-500 group-hover:from-champagne/25 group-hover:to-champagne/10 group-hover:shadow-[0_0_30px_rgba(209,169,120,0.12)]">
                    <Icon className="h-6 w-6 text-champagne transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-offwhite">
                    {area.title}
                  </h3>
                  <p className="mt-4 font-sans text-sm leading-relaxed text-offwhite/70">
                    {area.description}
                  </p>
                </div>

                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-champagne/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </FadeIn>
          );
        })}
      </div>
    </Section>
  );
}
