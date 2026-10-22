import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

/**
 * Oversized words that slide sideways as the page scrolls, used as a
 * divider between chapters. Words alternate between solid and hollow type.
 */
export function TextBand({ words, className = "" }: { words: string[]; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-38%"]);
  const sequence = [...words, ...words, ...words];

  return (
    <div ref={ref} className={`overflow-hidden border-y border-white/10 bg-dark-950 py-7 sm:py-10 ${className}`} aria-hidden="true">
      <motion.p style={{ x }} className="flex w-max items-center whitespace-nowrap text-[15vw] font-black uppercase leading-[0.9] tracking-[-0.04em] sm:text-[9vw]">
        {sequence.map((word, i) => (
          <React.Fragment key={i}>
            <span className={i % 2 === 0 ? "text-white" : "text-outline text-white/50"}>{word}</span>
            <span className="mx-[0.35em] inline-block h-[0.14em] w-[0.14em] translate-y-[0.06em] bg-gold-500" />
          </React.Fragment>
        ))}
      </motion.p>
    </div>
  );
}
