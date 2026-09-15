import Image from "next/image";
import { firm, nav, waLink, waMessages } from "@/lib/content";

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-parchment/80">
      <div className="container-narrow py-14 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <Image src="/images/logo.png" alt={firm.name} width={36} height={36} className="h-9 w-9 object-contain" />
              <span className="font-display text-lg text-parchment">{firm.name}</span>
            </div>
            <p className="mt-4 text-sm text-parchment/60 leading-relaxed max-w-sm">
              Atendimento jurídico consultivo e contencioso em Belo Horizonte, com foco em
              orientação clara e estratégia individualizada para cada cliente.
            </p>
            <a
              href={waLink(waMessages.default)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center rounded-full bg-gold text-navy-deep font-semibold px-6 py-3 text-sm hover:bg-gold-soft transition-colors"
            >
              Falar no WhatsApp
            </a>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wide text-parchment/40 mb-4">Navegação</p>
            <ul className="space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-parchment/70 hover:text-parchment transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wide text-parchment/40 mb-4">Contato</p>
            <ul className="space-y-2.5 text-sm text-parchment/70">
              <li>{firm.phoneDisplay}</li>
              <li>{firm.email}</li>
              <li>{firm.address.street}</li>
              <li>{firm.address.city}, {firm.address.state}, {firm.address.zip}</li>
            </ul>
            <a
              href={firm.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="mt-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-parchment/20 text-parchment/70 hover:text-parchment hover:border-parchment/40 transition-colors"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-parchment/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-parchment/45">
          <p>
            {firm.name} · {firm.oab} · {firm.address.city}, {firm.address.state}
          </p>
          <p>&copy; {new Date().getFullYear()} {firm.name}. Todos os direitos reservados.</p>
        </div>

        <p className="mt-4 text-[11px] leading-relaxed text-parchment/35 max-w-3xl">
          Este site tem caráter meramente informativo e não constitui aconselhamento jurídico.
          Dados institucionais como número de OAB, formação, tempo de atuação, estatísticas e
          depoimentos são ilustrativos e devem ser substituídos por informações reais antes da
          publicação oficial do site.
        </p>
      </div>
    </footer>
  );
}
