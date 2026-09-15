import Image from "next/image";
import { HeartHandshake, Award, MessagesSquare, Target } from "lucide-react";
import Reveal from "./Reveal";
import { differentials, waLink, waMessages } from "@/lib/content";

const icons = [HeartHandshake, Award, MessagesSquare, Target];

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-20 sm:py-28 relative overflow-hidden bg-navy-deep text-parchment">
      <Image
        src="https://images.unsplash.com/photo-1769092992534-f2d0210162b9?w=1600&q=70&auto=format&fit=crop"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-25"
        aria-hidden
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-navy-deep/95 via-navy/90 to-navy-deep/95 pointer-events-none" />
      <div aria-hidden className="absolute inset-0 bg-grain opacity-[0.06] pointer-events-none" />
      <div className="container-narrow relative">
        <Reveal>
          <p className="text-xs sm:text-[13px] uppercase tracking-[0.14em] text-gold-soft font-medium text-center">
            Por que escolher nosso escritório
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-center mt-3 text-balance">
            Advocacia próxima, sem abrir mão da técnica
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentials.map((d, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={d.title} delay={i * 0.08}>
                <div className="text-center sm:text-left">
                  <div className="mx-auto sm:mx-0 h-12 w-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Icon size={22} className="text-gold-soft" strokeWidth={1.8} />
                  </div>
                  <h3 className="mt-4 font-display text-lg">{d.title}</h3>
                  <p className="mt-2 text-sm text-parchment/70 leading-relaxed">{d.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-14 flex justify-center">
            <a
              href={waLink(waMessages.consulta)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold text-navy-deep font-semibold px-7 py-3.5 text-[15px] hover:bg-gold-soft transition-colors active:scale-[0.98]"
            >
              Agendar uma consulta
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
