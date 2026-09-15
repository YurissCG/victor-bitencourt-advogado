import Image from "next/image";
import { GraduationCap, Landmark, BadgeCheck } from "lucide-react";
import Reveal from "./Reveal";
import { firm } from "@/lib/content";

const credentials = [
  {
    icon: GraduationCap,
    title: "Formação", // FICTÍCIO: instituição e ano inventados
    text: "Bacharel em Direito pela PUC Minas (2015)",
  },
  {
    icon: Landmark,
    title: "Especialização", // FICTÍCIO
    text: "Pós-graduação em Direito Civil e Processual Civil",
  },
  {
    icon: BadgeCheck,
    title: "Registro profissional",
    text: firm.oab,
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 sm:py-28">
      <div className="container-narrow grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-center">
        <Reveal>
          <div className="relative mx-auto w-full max-w-[320px] lg:max-w-none">
            <div className="absolute -inset-3 rounded-xl bg-gold-wash -z-10" aria-hidden />
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-[0_24px_48px_-24px_rgba(18,22,42,0.35)]">
              <Image
                src="/images/victor-portrait.webp"
                alt={`${firm.lawyerName}, advogado responsável pela ${firm.name}`}
                fill
                sizes="(max-width: 1024px) 320px, 440px"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-xs sm:text-[13px] uppercase tracking-[0.14em] text-gold font-medium">Sobre o profissional</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight text-ink mt-3 text-balance">
              Dedicação técnica e atenção humana em cada caso
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 text-[15px] sm:text-base leading-relaxed text-smoke max-w-xl">
              {firm.lawyerName} atua há {firm.yearsOfExperience} anos{/* FICTÍCIO */} nas áreas cível, familiar,
              criminal e trabalhista, conduzindo casos com uma combinação de rigor técnico e
              proximidade com o cliente. A convicção por trás do escritório é simples: decisões
              jurídicas importantes exigem clareza, não jargão. Cada estratégia é desenhada
              para a realidade específica de quem está do outro lado da mesa.
            </p>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {credentials.map((c, i) => (
              <Reveal key={c.title} delay={0.15 + i * 0.06}>
                <div className="rounded-xl border border-hairline bg-paper/70 p-4 h-full">
                  <c.icon size={20} className="text-navy" strokeWidth={1.8} />
                  <p className="mt-3 text-[11px] uppercase tracking-wide text-smoke">{c.title}</p>
                  <p className="mt-1 text-sm text-ink leading-snug">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
