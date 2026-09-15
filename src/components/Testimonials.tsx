import { Quote } from "lucide-react";
import Reveal from "./Reveal";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-narrow">
        <Reveal>
          <p className="text-xs sm:text-[13px] uppercase tracking-[0.14em] text-gold font-medium text-center">
            Depoimentos
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="font-display text-3xl sm:text-4xl text-ink text-center mt-3 text-balance">
            O que dizem sobre o atendimento
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <figure className="rounded-3xl border border-hairline bg-paper/70 p-6 sm:p-7 h-full flex flex-col">
                <Quote size={22} className="text-gold-soft" strokeWidth={1.8} />
                <blockquote className="mt-4 text-[15px] text-graphite leading-relaxed flex-1">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 text-sm">
                  <span className="font-medium text-ink block">{t.name}</span>
                  <span className="text-smoke">{t.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-center text-[11px] text-mist">
          Depoimentos ilustrativos, usados apenas para fins de demonstração do layout.
        </p>
      </div>
    </section>
  );
}
