import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { articles } from "@/lib/content";

export default function Articles() {
  return (
    <section id="conteudos" className="py-20 sm:py-28">
      <div className="container-narrow">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <Reveal>
              <p className="text-xs sm:text-[13px] uppercase tracking-[0.14em] text-gold font-medium">Conteúdos</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="font-display text-3xl sm:text-4xl text-ink mt-3 text-balance">
                Dúvidas comuns explicadas em linguagem simples
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {articles.map((a, i) => (
            <Reveal key={a.slug} delay={i * 0.08}>
              <article className="group rounded-3xl border border-hairline bg-paper/70 overflow-hidden h-full flex flex-col hover:border-gold/50 transition-colors">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={`${a.image}?w=800&q=80&auto=format&fit=crop`}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 sm:p-7 flex flex-col flex-1">
                  <p className="text-[11px] uppercase tracking-wide text-smoke">{a.area}</p>
                  <h3 className="mt-2 font-display text-lg sm:text-xl text-ink leading-snug text-balance">{a.title}</h3>
                  <p className="mt-3 text-sm text-smoke leading-relaxed flex-1">{a.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-navy group-hover:gap-2.5 transition-all cursor-default">
                    Ler em breve
                    <ArrowUpRight size={15} />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
