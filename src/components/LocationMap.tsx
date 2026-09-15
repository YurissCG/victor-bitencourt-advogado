import { MapPin, Navigation } from "lucide-react";
import Reveal from "./Reveal";
import { firm } from "@/lib/content";

export default function LocationMap() {
  const query = encodeURIComponent(firm.address.full);
  const embedSrc = `https://www.google.com/maps?q=${query}&output=embed`;
  const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${query}`;

  return (
    <section className="py-20 sm:py-28 bg-parchment-deep/40">
      <div className="container-narrow">
        <Reveal>
          <p className="text-xs sm:text-[13px] uppercase tracking-[0.14em] text-gold font-medium text-center">Localização</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="font-display text-3xl sm:text-4xl text-ink text-center mt-3 text-balance">
            Atendimento presencial em Belo Horizonte
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] rounded-3xl border border-hairline overflow-hidden bg-paper">
            <div className="p-6 sm:p-8 flex flex-col justify-center gap-5">
              <div className="flex items-start gap-3">
                <span className="h-11 w-11 rounded-full bg-gold-wash flex items-center justify-center shrink-0">
                  <MapPin size={19} className="text-gold" />
                </span>
                <div>
                  <p className="text-sm font-medium text-ink">{firm.address.street}</p>
                  <p className="text-sm text-smoke">{firm.address.city}, {firm.address.state}, {firm.address.zip}</p>
                </div>
              </div>
              <a
                href={directionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/20 text-ink font-medium px-6 py-3 text-sm w-full sm:w-fit hover:border-ink/40 hover:bg-ink/[0.03] transition-colors"
              >
                <Navigation size={16} />
                Como chegar
              </a>
            </div>
            <div className="relative min-h-[260px] sm:min-h-[340px]">
              <iframe
                title="Localização do escritório no mapa"
                src={embedSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full grayscale-[0.15] contrast-[1.05]"
                style={{ border: 0 }}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
