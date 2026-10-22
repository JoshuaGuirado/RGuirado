import React from "react";
import { motion } from "motion/react";
import { EASE_OUT_EXPO } from "../../lib/constants";

/** Small uppercase eyebrow shown above section titles, with a line that draws in. */
export function SectionLabel({ children, className = "", center = false }: { children: React.ReactNode; className?: string; center?: boolean }) {
  return (
    <motion.span
      className={`flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-gold-500 ${center ? "justify-center" : ""} ${className}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.span
        aria-hidden="true"
        className="h-px w-8 origin-left bg-gold-500"
        variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 0.8, ease: EASE_OUT_EXPO } } }}
      />
      <motion.span
        variants={{ hidden: { opacity: 0, x: -8 }, show: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.15, ease: EASE_OUT_EXPO } } }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
}
