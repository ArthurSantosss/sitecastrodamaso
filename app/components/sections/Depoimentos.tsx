"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Section, Eyebrow, SectionTitle } from "@/app/components/ui/Section";
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
      </div>

      <div className="relative mx-auto mt-14 max-w-3xl">
        <div className="pointer-events-none absolute -top-4 left-1/2 -translate-x-1/2 font-serif text-[120px] leading-none text-champagne/[0.07] select-none">
          &ldquo;
        </div>

        <div className="relative min-h-[160px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="text-center"
            >
              <p className="font-serif text-xl italic leading-relaxed text-text-dark md:text-2xl lg:text-[1.65rem] lg:leading-relaxed">
                &ldquo;{TESTIMONIALS[current].text}&rdquo;
              </p>
              <div className="mt-8 flex items-center justify-center gap-3">
                <div className="h-px w-8 bg-champagne/40" />
                <p className="font-sans text-sm font-medium tracking-wide text-accent-deep">
                  {TESTIMONIALS[current].author}
                </p>
                <div className="h-px w-8 bg-champagne/40" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-8">
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={prev}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-champagne/20 text-champagne transition-all duration-300 hover:border-champagne/50 hover:bg-champagne/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex gap-2.5">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 cursor-pointer rounded-full transition-all duration-500 ${
                    i === current
                      ? "w-8 bg-champagne"
                      : "w-2 bg-champagne/20 hover:bg-champagne/40"
                  }`}
                  aria-label={`Ir para depoimento ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-champagne/20 text-champagne transition-all duration-300 hover:border-champagne/50 hover:bg-champagne/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <a
            href="https://share.google/0N4D3fWJDCE6EcrAq"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-champagne/30 bg-champagne/5 px-6 py-2.5 font-sans text-sm font-medium text-champagne transition-all duration-300 hover:bg-champagne/10 hover:border-champagne/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
          >
            Veja nossas avaliações no Google
          </a>
        </div>
      </div>
    </Section>
  );
}
