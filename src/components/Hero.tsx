"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";
import { firm, waLink, waMessages } from "@/lib/content";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div aria-hidden className="absolute inset-0 bg-grain opacity-[0.5] pointer-events-none" />
      <div
        aria-hidden
        className="absolute -top-24 -right-24 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-gold-wash blur-3xl opacity-70 animate-float pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute top-1/3 -left-32 h-72 w-72 rounded-full bg-navy-wash blur-3xl opacity-70 pointer-events-none"
      />

      <div className="container-narrow relative grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-10 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-paper/70 px-4 py-1.5 text-xs sm:text-[13px] text-graphite/80 mb-6"
          >
            <ShieldCheck size={14} className="text-gold" />
            Atuação cível, familiar, criminal e trabalhista
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-balance text-[2.6rem] leading-[1.05] sm:text-6xl sm:leading-[1.04] lg:text-[4.2rem] lg:leading-[1.02] text-ink"
          >
            Bitencourt Advocacia
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-3 font-display italic text-xl sm:text-2xl text-gold"
          >
            {firm.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-5 max-w-lg text-[15px] sm:text-base leading-relaxed text-smoke"
          >
            Está no meio de um divórcio, uma demissão, uma cobrança indevida ou um processo
            e não sabe qual é o próximo passo? Explicamos sua situação em linguagem simples
            e construímos uma estratégia jurídica pensada para o seu caso, do primeiro
            contato até a solução.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <a
              href={waLink(waMessages.consulta)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp text-white font-medium px-7 py-3.5 text-[15px] hover:bg-whatsapp-deep transition-colors active:scale-[0.98]"
            >
              <MessageCircle size={18} />
              Falar com um advogado
            </a>
            <a
              href="#areas"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/20 text-ink font-medium px-7 py-3.5 text-[15px] hover:border-ink/40 hover:bg-ink/[0.03] transition-colors"
            >
              Áreas de atuação
              <ArrowRight size={16} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex items-center gap-5 text-xs sm:text-[13px] text-smoke"
          >
            <span>{firm.oab}</span>
            <span className="h-1 w-1 rounded-full bg-ink/20" />
            <span>{firm.address.city}/{firm.address.state}</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-[360px] lg:max-w-none"
        >
          <div className="absolute -inset-3 rounded-[2rem] border border-gold/30" aria-hidden />
          <div className="relative aspect-[4/5] rounded-[1.75rem] overflow-hidden bg-navy shadow-[0_30px_60px_-20px_rgba(18,22,42,0.35)]">
            <Image
              src="/images/victor-hero.webp"
              alt="Victor Bitencourt, advogado"
              fill
              sizes="(max-width: 1024px) 360px, 460px"
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-paper/90 backdrop-blur-sm px-4 py-3 flex items-center justify-between">
              <div>
                <p className="font-display text-[15px] text-ink leading-none">{firm.lawyerName}</p>
                <p className="text-[11px] text-smoke mt-1">{firm.lawyerTitle} · {firm.oab}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
