"use client";

import { useState } from "react";
import { Phone, Mail, Clock, MessageCircle } from "lucide-react";
import Reveal from "./Reveal";
import { firm, waLink } from "@/lib/content";

const interestAreas = [
  "Direito de Família",
  "Direito Trabalhista",
  "Direito Empresarial",
  "Direito Cível",
  "Direito Criminal",
  "Direito Previdenciário",
  "Outro assunto",
];

export default function Contact() {
  const [name, setName] = useState("");
  const [area, setArea] = useState(interestAreas[0]);
  const [message, setMessage] = useState("");

  const composedMessage = [
    `Olá! Meu nome é ${name || "___"}.`,
    `Tenho interesse em: ${area}.`,
    message ? `Mensagem: ${message}` : null,
  ]
    .filter(Boolean)
    .join(" ");

  const canSend = name.trim().length > 1;

  return (
    <section id="contato" className="py-20 sm:py-28">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <Reveal>
              <p className="text-xs sm:text-[13px] uppercase tracking-[0.14em] text-gold font-medium">Contato</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="font-display text-3xl sm:text-4xl text-ink mt-3 text-balance">
                Precisa de orientação jurídica?
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-4 text-[15px] sm:text-base text-smoke leading-relaxed max-w-md">
                Conte brevemente o seu caso e entre em contato com nossa equipe. Respondemos
                o mais rápido possível.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-8 space-y-4">
                <a href={waLink("Olá! Vim pelo site e gostaria de falar sobre meu caso.")} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                  <span className="h-11 w-11 rounded-full bg-whatsapp/10 flex items-center justify-center shrink-0">
                    <MessageCircle size={19} className="text-whatsapp-deep" />
                  </span>
                  <span className="text-sm text-graphite group-hover:text-ink transition-colors">{firm.phoneDisplay} (WhatsApp)</span>
                </a>
                <a href={`tel:+${firm.phoneWhatsApp}`} className="flex items-center gap-3 group">
                  <span className="h-11 w-11 rounded-full bg-navy-wash flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-navy" />
                  </span>
                  <span className="text-sm text-graphite group-hover:text-ink transition-colors">{firm.phoneDisplay} (Telefone)</span>
                </a>
                <a href={`mailto:${firm.email}`} className="flex items-center gap-3 group">
                  <span className="h-11 w-11 rounded-full bg-navy-wash flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-navy" />
                  </span>
                  <span className="text-sm text-graphite group-hover:text-ink transition-colors">{firm.email}</span>
                </a>
                <div className="flex items-start gap-3">
                  <span className="h-11 w-11 rounded-full bg-navy-wash flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-navy" />
                  </span>
                  <div className="text-sm text-graphite">
                    {firm.hours.map((h) => (
                      <p key={h.day}>
                        <span className="text-ink">{h.day}:</span> {h.time}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="rounded-xl border border-hairline bg-paper/80 p-6 sm:p-8">
              <p className="font-display text-xl text-ink">Envie uma mensagem</p>
              <p className="mt-1 text-sm text-smoke">Preencha os campos abaixo. Vamos abrir o WhatsApp com sua mensagem pronta.</p>

              <div className="mt-6 space-y-4">
                <div>
                  <label className="text-xs text-smoke" htmlFor="name">Nome</label>
                  <input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Seu nome"
                    className="mt-1.5 w-full rounded-xl border border-ink/15 bg-parchment px-4 py-3 text-sm text-ink placeholder:text-mist focus:outline-none focus:border-gold/60 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs text-smoke" htmlFor="area">Área de interesse</label>
                  <select
                    id="area"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-ink/15 bg-parchment px-4 py-3 text-sm text-ink focus:outline-none focus:border-gold/60 transition-colors"
                  >
                    {interestAreas.map((a) => (
                      <option key={a} value={a}>{a}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs text-smoke" htmlFor="message">Conte brevemente seu caso</label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    placeholder="Escreva aqui..."
                    className="mt-1.5 w-full rounded-xl border border-ink/15 bg-parchment px-4 py-3 text-sm text-ink placeholder:text-mist focus:outline-none focus:border-gold/60 transition-colors resize-none"
                  />
                </div>

                <a
                  href={canSend ? waLink(composedMessage) : undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-disabled={!canSend}
                  onClick={(e) => {
                    if (!canSend) e.preventDefault();
                  }}
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-lg font-medium px-6 py-3.5 text-[15px] transition-colors ${
                    canSend
                      ? "bg-whatsapp text-white hover:bg-whatsapp-deep active:scale-[0.98]"
                      : "bg-ink/10 text-mist cursor-not-allowed"
                  }`}
                >
                  <MessageCircle size={18} />
                  Enviar pelo WhatsApp
                </a>
                <p className="text-[11px] text-mist text-center">Preencha ao menos o seu nome para habilitar o envio.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
