"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/app/components/ui/Button";
import { WHATSAPP_URL } from "@/app/lib/constants";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 text-center">
      <Image
        src="/banner.png"
        alt=""
        fill
        className="object-cover scale-105"
        priority
        sizes="100vw"
        quality={75}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/50 to-dark/80" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-6"
        >
          <Image
            src="/logo.png"
            alt="Castro & Damaso Advocacia e Consultoria"
            width={400}
            height={160}
            className="mx-auto h-auto w-[280px] sm:w-[340px] md:w-[400px] object-contain"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "6rem" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mb-8 h-px bg-gradient-to-r from-transparent via-champagne/60 to-transparent"
        />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-serif text-4xl font-bold leading-[1.15] text-offwhite sm:text-5xl md:text-6xl lg:text-[4rem] lg:leading-[1.1]"
        >
          Advocacia construída sobre
          <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-champagne-light via-champagne to-champagne-dark bg-clip-text text-transparent"> confiança</span>, técnica
          <br className="hidden lg:block" />
          e proximidade
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mx-auto mt-8 max-w-2xl font-sans text-lg leading-relaxed text-offwhite/75 md:text-xl"
        >
          Atuação jurídica personalizada em Ponte Nova e região, com olhar
          atento a cada cliente.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 flex flex-col items-center gap-5 sm:flex-row sm:justify-center"
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
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-7 w-7 text-champagne/40" />
        </motion.div>
      </motion.a>
    </section>
  );
}
