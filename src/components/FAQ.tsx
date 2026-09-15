"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";
import Reveal from "./Reveal";
import { faqs } from "@/lib/content";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 sm:py-28 bg-parchment-deep/40">
      <div className="container-narrow max-w-3xl">
        <Reveal>
          <p className="text-xs sm:text-[13px] uppercase tracking-[0.14em] text-gold font-medium text-center">
            Perguntas frequentes
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="font-display text-3xl sm:text-4xl text-ink text-center mt-3 text-balance">
            Ainda com dúvidas?
          </h2>
        </Reveal>

        <div className="mt-10 divide-y divide-hairline rounded-3xl border border-hairline bg-paper/70 overflow-hidden">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.question}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-5 sm:px-7 py-5"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-[16px] sm:text-lg text-ink">{item.question}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0 h-7 w-7 rounded-full bg-navy-wash flex items-center justify-center"
                  >
                    <Plus size={15} className="text-navy" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 sm:px-7 pb-5 text-[14px] sm:text-[15px] text-smoke leading-relaxed">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
