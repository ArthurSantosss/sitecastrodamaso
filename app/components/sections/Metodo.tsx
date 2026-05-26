"use client";

import { Section, Eyebrow, SectionTitle, FadeIn } from "@/app/components/ui/Section";
import { METHODOLOGY } from "@/app/lib/constants";

export function Metodo() {
  return (
    <Section id="metodo" dark>
      <div className="text-center">
        <Eyebrow>Nosso Método</Eyebrow>
        <SectionTitle dark>Como conduzimos cada caso</SectionTitle>
        <FadeIn delay={0.15}>
          <p className="mx-auto mt-4 max-w-xl font-sans text-base text-gray-subtle">
            Um processo cuidadoso, do primeiro contato ao resultado final.
          </p>
        </FadeIn>
      </div>

      <div className="relative mx-auto mt-16 max-w-3xl">
        <div className="absolute top-0 bottom-0 left-[23px] w-px bg-gradient-to-b from-champagne/30 via-champagne/15 to-transparent sm:left-1/2 sm:-translate-x-px" />

        {METHODOLOGY.map((item, i) => (
          <FadeIn key={item.number} delay={i * 0.12}>
            <div
              className={`relative mb-12 flex items-start gap-8 last:mb-0 sm:gap-0 ${
                i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              }`}
            >
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-champagne/30 bg-dark-surface sm:absolute sm:left-1/2 sm:-translate-x-1/2">
                <span className="font-serif text-lg font-semibold text-champagne">
                  {item.number}
                </span>
              </div>

              <div
                className={`flex-1 rounded-sm border border-champagne/10 bg-dark-surface p-6 transition-all duration-500 hover:border-champagne/25 sm:w-[calc(50%-3rem)] sm:flex-initial ${
                  i % 2 === 0 ? "sm:mr-auto sm:pr-8" : "sm:ml-auto sm:pl-8"
                }`}
              >
                <h3 className="font-serif text-xl font-semibold text-offwhite">
                  {item.title}
                </h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-gray-subtle">
                  {item.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
