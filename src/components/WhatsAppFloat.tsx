"use client";

import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { waLink, waMessages } from "@/lib/content";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={waLink(waMessages.default)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-40 flex items-center gap-2 rounded-full bg-whatsapp text-white pl-4 pr-5 py-3.5 sm:py-4 shadow-[0_8px_24px_rgba(18,22,42,0.25)] animate-pulse-soft"
    >
      <MessageCircle size={22} strokeWidth={2.3} className="text-white" />
      <span className="text-sm font-semibold hidden sm:inline">Fale conosco</span>
    </motion.a>
  );
}
