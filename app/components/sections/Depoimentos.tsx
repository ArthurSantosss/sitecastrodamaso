"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Section, Eyebrow, SectionTitle, FadeIn } from "@/app/components/ui/Section";
import { TESTIMONIALS } from "@/app/lib/constants";

export function Depoimentos() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1));

  return (
    <Section id="depoimentos">
      <div className="text-center">
        <Eyebrow>O Que Dizem</Eyebrow>
        <SectionTitle>A confiança de quem foi atendido</SectionTitle>
        <FadeIn delay={0.15}>
          <div className="mt-6 flex items-center justify-center gap-1.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-champagne text-champagne" />
            ))}
            <span className="ml-2 font-sans text-sm font-semibold text-accent-deep">
              5.0 no Google
            </span>
          </div>
        </FadeIn>
      </div>

      <div className="relative mx-auto mt-16 max-w-3xl">
        <div className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 font-serif text-[180px] leading-none text-champagne/[0.08] select-none">
          &ldquo;
        </div>

        <div className="relative min-h-[180px] flex items-center justify-center" aria-live="polite" aria-atomic="true">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-center"
            >
              <p className="font-serif text-2xl italic leading-relaxed text-text-dark md:text-3xl lg:text-[2rem] lg:leading-relaxed">
                &ldquo;{TESTIMONIALS[current].text}&rdquo;
              </p>
              <div className="mt-10 flex items-center justify-center gap-4">
                <div className="h-px w-10 bg-gradient-to-r from-transparent to-champagne/50" />
                <p className="font-sans text-sm font-semibold tracking-wider uppercase text-champagne">
                  {TESTIMONIALS[current].author}
                </p>
                <div className="h-px w-10 bg-gradient-to-l from-transparent to-champagne/50" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-14 flex flex-col items-center justify-center gap-8">
          <div className="flex items-center justify-center gap-8">
            <button
              onClick={prev}
              className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-champagne/20 text-champagne transition-all duration-300 hover:border-champagne/50 hover:bg-champagne/8 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex gap-3">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2.5 cursor-pointer rounded-full transition-all duration-500 ${
                    i === current
                      ? "w-10 bg-gradient-to-r from-champagne to-champagne-dark"
                      : "w-2.5 bg-champagne/15 hover:bg-champagne/35"
                  }`}
                  aria-label={`Ir para depoimento ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-champagne/20 text-champagne transition-all duration-300 hover:border-champagne/50 hover:bg-champagne/8 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <a
            href="https://share.google/0N4D3fWJDCE6EcrAq"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-champagne/20 bg-champagne/5 px-7 py-3 font-sans text-sm font-semibold tracking-wide text-champagne transition-all duration-300 hover:bg-champagne/12 hover:border-champagne/40 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
          >
            Veja todas as avaliações no Google
          </a>
        </div>
      </div>
    </Section>
  );
}
