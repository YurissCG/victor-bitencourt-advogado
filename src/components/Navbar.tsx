"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { nav, firm, waLink, waMessages } from "@/lib/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={clsx(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled || open
          ? "bg-parchment/90 backdrop-blur-md border-b border-hairline shadow-[0_1px_0_rgba(18,22,42,0.04)]"
          : "bg-transparent"
      )}
    >
      <nav className="container-narrow flex items-center justify-between py-3">
        <a href="#inicio" className="flex items-center gap-2.5 shrink-0" onClick={() => setOpen(false)}>
          <Image src="/images/logo.png" alt="Bitencourt Advocacia" width={40} height={40} className="h-9 w-9 sm:h-10 sm:w-10 object-contain" priority />
          <span className="font-display text-[17px] sm:text-lg tracking-tight text-ink leading-none">
            Bitencourt <span className="text-gold">Advocacia</span>
          </span>
        </a>

        <div className="hidden xl:flex items-center gap-6">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] text-graphite/80 hover:text-ink transition-colors whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden xl:block">
          <a
            href={waLink(waMessages.consulta)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-navy text-parchment text-sm font-medium px-5 py-2.5 hover:bg-navy-deep transition-colors whitespace-nowrap"
          >
            Falar com o escritório
          </a>
        </div>

        <button
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
          className="xl:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink shrink-0"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="xl:hidden overflow-hidden bg-parchment border-b border-hairline"
          >
            <div className="container-narrow flex flex-col py-4">
              {nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="py-3 text-[15px] text-graphite border-b border-hairline/60 last:border-none"
                >
                  {item.label}
                </motion.a>
              ))}
              <a
                href={waLink(waMessages.consulta)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex items-center justify-center rounded-lg bg-navy text-parchment text-sm font-medium px-5 py-3"
              >
                Falar com o escritório
              </a>
              <p className="mt-3 text-xs text-smoke">{firm.phoneDisplay} · {firm.address.city}/{firm.address.state}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
