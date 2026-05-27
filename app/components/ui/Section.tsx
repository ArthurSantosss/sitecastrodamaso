"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  dark?: boolean;
  children: ReactNode;
  className?: string;
  noDivider?: boolean;
}

export function Section({ id, dark, children, className = "", noDivider }: SectionProps) {
  return (
    <>
      {!noDivider && !dark && <SectionDivider />}
      <section
        id={id}
        className={`relative py-24 md:py-32 ${
          dark ? "text-offwhite" : "bg-offwhite text-text-dark"
        } ${className}`}
      >
        {dark && (
          <>
            <div className="absolute inset-0">
              <Image
                src="/banner.png"
                alt=""
                fill
                className="object-cover"
                sizes="100vw"
                quality={60}
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-dark/80" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-dark/40 via-transparent to-dark/40" />
          </>
        )}
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">{children}</div>
      </section>
    </>
  );
}

export function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-2 bg-offwhite">
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-champagne/30" />
      <div className="mx-4 h-1.5 w-1.5 rotate-45 border border-champagne/40" />
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-champagne/30" />
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-3 inline-block font-sans text-[11px] font-bold uppercase tracking-[0.35em] text-champagne"
    >
      {children}
    </motion.span>
  );
}

export function SectionTitle({
  children,
  dark,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`font-serif text-4xl font-bold leading-tight md:text-5xl lg:text-[3.25rem] ${
        dark ? "text-offwhite" : "text-text-dark"
      }`}
    >
      {children}
    </motion.h2>
  );
}

export function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
