"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/app/components/ui/Button";
import { WHATSAPP_URL } from "@/app/lib/constants";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 text-center">
      <img
        src="/banner.png"
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-dark/60" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <div className="mx-auto flex flex-col items-center justify-center">
            <img 
              src="/logo.png" 
              alt="Castro & Damaso Advocacia e Consultoria" 
              className="w-full h-auto max-w-[200px] sm:max-w-[260px] md:max-w-[320px] object-contain scale-125 sm:scale-150" 
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-serif text-4xl font-semibold leading-[1.2] text-offwhite sm:text-5xl md:text-6xl lg:text-[3.75rem] lg:leading-[1.15]"
        >
          Advocacia construída sobre
          <br className="hidden sm:block" />
          <span className="text-champagne"> confiança</span>, técnica e proximidade
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mx-auto mt-7 max-w-2xl font-sans text-lg leading-relaxed text-gray-subtle md:text-xl"
        >
          Atuação jurídica personalizada em Ponte Nova e região, com olhar
          atento a cada cliente.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Button
            href={WHATSAPP_URL()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Agende uma consulta pelo WhatsApp"
          >
            Agende uma consulta
          </Button>
          <Button variant="outline" href="#sobre">
            Conheça o escritório
          </Button>
        </motion.div>
      </div>

      <motion.a
        href="#sobre"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-10 z-10"
        aria-label="Rolar para a próxima seção"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-6 w-6 text-champagne/50" />
        </motion.div>
      </motion.a>
    </section>
  );
}
