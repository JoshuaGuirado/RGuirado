import React, { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";

const quote = "As empresas morrem hoje não por fazer as coisas erradas, mas por fazerem bem as mesmas coisas durante tempo demais.";

function Word({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block">
      {children}&nbsp;
    </motion.span>
  );
}

/** Full-bleed gold interlude whose words darken one by one as it scrolls past. */
export function Quote() {
  const ref = useRef<HTMLQuoteElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 50%"] });
  const words = quote.split(" ");

  return (
    <section className="relative overflow-hidden bg-gold-500 py-24 text-dark-950 md:py-36" aria-label="Citação de Yves Doz">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mb-12 flex items-center gap-5 text-[11px] font-bold uppercase tracking-[0.24em] md:mb-16">
          <span>Uma frase que guia o nosso trabalho</span>
          <span className="relative h-px flex-1 bg-dark-950/20" aria-hidden="true">
            <motion.span className="absolute inset-0 origin-left bg-dark-950" style={{ scaleX: scrollYProgress }} />
          </span>
        </div>

        <blockquote ref={ref} className="text-[1.75rem] font-bold leading-[1.18] tracking-[-0.025em] sm:text-4xl lg:text-[3.4rem]">
          <p className="sr-only">{quote}</p>
          <p aria-hidden="true">
            {words.map((w, i) => (
              <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
                {w}
              </Word>
            ))}
          </p>
        </blockquote>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 flex flex-col gap-2 border-t border-dark-950/20 pt-6 sm:flex-row sm:items-baseline sm:justify-between"
        >
          <cite className="text-sm font-black uppercase not-italic tracking-[0.24em]">Yves Doz</cite>
          <p className="text-base font-semibold">É exatamente contra isso que trabalhamos.</p>
        </motion.div>
      </div>
    </section>
  );
}
