"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  dark?: boolean;
  children: ReactNode;
  className?: string;
}

export function Section({ id, dark, children, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative py-20 md:py-28 ${
        dark ? "text-offwhite" : "bg-offwhite text-text-dark"
      } ${className}`}
    >
      {dark && (
        <>
          <img
            src="/banner.png"
            alt=""
            className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-dark/70" />
        </>
      )}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-3 block font-sans text-xs font-semibold uppercase tracking-[0.3em] text-champagne"
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
      className={`font-serif text-3xl font-semibold leading-tight md:text-4xl lg:text-[2.75rem] ${
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
