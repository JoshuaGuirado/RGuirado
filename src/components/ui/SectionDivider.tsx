import React from "react";
import { motion } from "motion/react";
import { EASE_OUT_EXPO } from "../../lib/constants";

interface SectionDividerProps {
  index: string;
  label: string;
  /** Short note shown on the right side of the rule (hidden on phones). */
  note?: string;
  tone?: "dark" | "light";
  className?: string;
}

/**
 * Editorial section opener: chapter number, a rule that draws across the page,
 * and the chapter name. Replaces the small eyebrow labels above headings.
 */
export function SectionDivider({ index, label, note, tone = "dark", className = "" }: SectionDividerProps) {
  const light = tone === "light";
  return (
    <motion.div
      className={`flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.24em] sm:gap-6 ${className}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
    >
      <motion.span
        className={`font-black tabular-nums ${light ? "text-dark-950" : "text-gold-500"}`}
        variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT_EXPO } } }}
      >
        {index}
      </motion.span>
      <motion.span
        className={light ? "text-dark-950" : "text-white"}
        variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.08, ease: EASE_OUT_EXPO } } }}
      >
        {label}
      </motion.span>
      <motion.span
        aria-hidden="true"
        className={`h-px flex-1 origin-left ${light ? "bg-dark-950/20" : "bg-white/15"}`}
        variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 1.4, delay: 0.15, ease: EASE_OUT_EXPO } } }}
      />
      {note && (
        <motion.span
          className={`hidden sm:block ${light ? "text-ink/70" : "text-gray-500"}`}
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.8, delay: 0.6 } } }}
        >
          {note}
        </motion.span>
      )}
    </motion.div>
  );
}
