import Image from "next/image";
import Reveal from "./Reveal";
import { process, waLink, waMessages } from "@/lib/content";

export default function ProcessSteps() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-narrow grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-center">
        <Reveal>
          <div className="relative mx-auto w-full max-w-[420px] lg:max-w-none">
            <div className="absolute -inset-3 rounded-[2rem] bg-navy-wash -z-10" aria-hidden />
            <div className="relative aspect-[4/3] rounded-[1.5rem] overflow-hidden shadow-[0_24px_48px_-24px_rgba(18,22,42,0.35)]">
              <Image
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&q=80&auto=format&fit=crop"
                alt="Aperto de mãos selando um acordo"
                fill
                sizes="(max-width: 1024px) 420px, 560px"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-xs sm:text-[13px] uppercase tracking-[0.14em] text-gold font-medium">Como funciona</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="font-display text-3xl sm:text-4xl text-ink mt-3 text-balance">
              Do primeiro contato à solução do seu caso
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-4 text-[15px] sm:text-base text-smoke leading-relaxed max-w-lg">
              Um processo simples, pensado para que você entenda cada decisão antes de ela
              ser tomada.
            </p>
          </Reveal>

          <ol className="mt-8 space-y-6">
            {process.map((step, i) => (
              <Reveal key={step.title} delay={0.15 + i * 0.08}>
                <li className="flex gap-4">
                  <span className="shrink-0 h-9 w-9 rounded-full bg-navy text-parchment font-display text-[15px] flex items-center justify-center">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-display text-lg text-ink">{step.title}</p>
                    <p className="mt-1 text-sm text-smoke leading-relaxed">{step.description}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={0.4}>
            <a
              href={waLink(waMessages.consulta)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp text-white font-medium px-7 py-3.5 text-[15px] hover:bg-whatsapp-deep transition-colors active:scale-[0.98]"
            >
              Começar pelo diagnóstico inicial
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
