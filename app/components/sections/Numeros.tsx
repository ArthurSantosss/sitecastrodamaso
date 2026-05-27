"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "Multidisciplinar", label: "Atuação em diversas áreas do Direito" },
  { value: "Ponte Nova", label: "e toda a Zona da Mata mineira" },
  { value: "Presencial e Online", label: "Atendimento flexível para você" },
];

export function Numeros() {
  return (
    <section className="relative overflow-hidden border-y border-champagne/10 bg-dark py-14 md:py-16">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-dark via-dark-surface to-dark" />
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center"
            >
              <span className="block font-serif text-3xl font-bold text-champagne md:text-4xl">
                {stat.value}
              </span>
              <span className="mt-2 block font-sans text-sm tracking-wide text-offwhite/60">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
