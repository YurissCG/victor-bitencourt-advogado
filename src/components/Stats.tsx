"use client";

import { motion } from "motion/react";
import { stats } from "@/lib/content";

export default function Stats() {
  return (
    <section className="border-y border-hairline bg-paper/60">
      <div className="container-narrow grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 py-10 sm:py-14">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="text-center sm:text-left"
          >
            <p className="font-display text-3xl sm:text-4xl text-navy">{s.value}</p>
            <p className="mt-1 text-xs sm:text-[13px] text-smoke">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
