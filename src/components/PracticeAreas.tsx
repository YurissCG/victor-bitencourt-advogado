"use client";

import { motion } from "motion/react";
import { Users, Briefcase, Building2, Scale, Gavel, PiggyBank, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { practiceAreas, waLink, waMessages } from "@/lib/content";

const icons: Record<string, typeof Users> = {
  familia: Users,
  trabalhista: Briefcase,
  empresarial: Building2,
  civel: Scale,
  criminal: Gavel,
  previdenciario: PiggyBank,
};

export default function PracticeAreas() {
  return (
    <section id="areas" className="py-20 sm:py-28 bg-parchment-deep/40">
      <div className="container-narrow">
        <Reveal>
          <p className="text-xs sm:text-[13px] uppercase tracking-[0.14em] text-gold font-medium text-center">Áreas de atuação</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-ink text-center mt-3 text-balance">
            Onde podemos ajudar você
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-4 text-[15px] sm:text-base text-smoke text-center max-w-xl mx-auto">
            Atuação consultiva e contenciosa nas principais áreas do Direito, com atenção
            individual para pessoas físicas, famílias e empresas.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {practiceAreas.map((area, i) => {
            const Icon = icons[area.slug] ?? Scale;
            return (
              <Reveal key={area.slug} delay={(i % 3) * 0.08}>
                <motion.a
                  href={waLink(waMessages.area(area.title))}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="group flex flex-col h-full rounded-3xl border border-hairline bg-paper p-6 sm:p-7 hover:border-gold/50 hover:shadow-[0_20px_40px_-24px_rgba(18,22,42,0.25)] transition-shadow"
                >
                  <div className="h-11 w-11 rounded-full bg-navy-wash flex items-center justify-center">
                    <Icon size={20} className="text-navy" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-display text-xl text-ink mt-5">{area.title}</h3>
                  <p className="mt-2 text-sm text-smoke leading-relaxed flex-1">{area.short}</p>
                  <ul className="mt-4 space-y-1.5">
                    {area.bullets.slice(0, 2).map((b) => (
                      <li key={b} className="text-[13px] text-graphite/80 flex items-start gap-2">
                        <span className="mt-1.5 h-1 w-1 rounded-full bg-gold shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-navy group-hover:gap-2.5 transition-all">
                    Falar sobre {area.title.toLowerCase()}
                    <ArrowUpRight size={15} />
                  </span>
                </motion.a>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 text-center">
            <a
              href={waLink(waMessages.consulta)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/20 text-ink font-medium px-7 py-3 text-sm hover:border-ink/40 hover:bg-ink/[0.03] transition-colors"
            >
              Não encontrou sua área? Fale com o escritório
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
