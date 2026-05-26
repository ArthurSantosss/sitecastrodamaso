"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface AccordionItemProps {
  question: string;
  answer: string;
}

export function AccordionItem({ question, answer }: AccordionItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-champagne/10 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full cursor-pointer items-center justify-between py-5 px-4 text-left font-serif text-lg font-medium text-offwhite transition-colors duration-300 hover:text-champagne focus:outline-none focus-visible:text-champagne md:text-xl"
        aria-expanded={open}
      >
        <span>{question}</span>
        <ChevronDown
          className={`ml-4 h-5 w-5 shrink-0 text-champagne/60 transition-all duration-300 ${
            open ? "rotate-180 text-champagne" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-4 pb-5 font-sans text-base leading-relaxed text-gray-subtle">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
