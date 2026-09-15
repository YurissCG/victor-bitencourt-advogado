import { ClipboardCheck, Gavel, FileSignature, Handshake } from "lucide-react";
import Reveal from "./Reveal";
import { services } from "@/lib/content";

const icons = [ClipboardCheck, Gavel, FileSignature, Handshake];

export default function Services() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16">
          <div>
            <Reveal>
              <p className="text-xs sm:text-[13px] uppercase tracking-[0.14em] text-gold font-medium">Serviços</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="font-display text-3xl sm:text-4xl text-ink mt-3 text-balance">
                O que o escritório resolve para você
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-4 text-[15px] sm:text-base text-smoke leading-relaxed max-w-sm">
                De uma dúvida pontual a um processo complexo, cada serviço é conduzido com
                planejamento e comunicação constante.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {services.map((s, i) => {
              const Icon = icons[i % icons.length];
              return (
                <Reveal key={s.title} delay={i * 0.08}>
                  <div className="rounded-2xl border border-hairline bg-paper/70 p-6 h-full">
                    <Icon size={20} className="text-gold" strokeWidth={1.8} />
                    <h3 className="mt-4 font-display text-lg text-ink">{s.title}</h3>
                    <p className="mt-2 text-sm text-smoke leading-relaxed">{s.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
