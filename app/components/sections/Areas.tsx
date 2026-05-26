"use client";

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
          <p className="mx-auto mt-4 max-w-2xl font-sans text-base text-gray-subtle">
            Assessoria jurídica abrangente, adaptada à complexidade de cada
            demanda e à particularidade de cada cliente.
          </p>
        </FadeIn>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PRACTICE_AREAS.map((area, i) => {
          const Icon = iconMap[area.icon];
          return (
            <FadeIn key={area.title} delay={i * 0.08}>
              <div className="group relative overflow-hidden rounded-sm border border-champagne/10 bg-dark-surface p-8 transition-all duration-500 hover:border-champagne/30 hover:shadow-[0_0_40px_rgba(209,169,120,0.06)]">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-champagne/[0.02] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-champagne/15 transition-all duration-500 group-hover:border-champagne/40 group-hover:shadow-[0_0_20px_rgba(209,169,120,0.1)]">
                    <Icon className="h-5 w-5 text-champagne transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-offwhite">
                    {area.title}
                  </h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-gray-subtle">
                    {area.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </Section>
  );
}
