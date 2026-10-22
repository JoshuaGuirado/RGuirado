import React, { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";

const quote = "As empresas morrem hoje não por fazer as coisas erradas, mas por fazerem bem as mesmas coisas durante tempo demais.";

function Word({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.12, 1]);
  const y = useTransform(progress, range, [6, 0]);
  return (
    <motion.span style={{ opacity, y }} className="inline-block">
      {children}&nbsp;
    </motion.span>
  );
}

/** Quote whose words light up one by one, tied to scroll position. */
export function Quote() {
  const ref = useRef<HTMLQuoteElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 45%"] });
  const words = quote.split(" ");
  const markScale = useTransform(scrollYProgress, [0, 1], [0.6, 1.1]);
  const markRotate = useTransform(scrollYProgress, [0, 1], [-20, 0]);

  return (
    <section className="relative overflow-hidden border-y border-white/[0.06] bg-dark-900 py-28 md:py-40" aria-label="Citação de Yves Doz">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgb(243_198_17/0.06),transparent_65%)]" aria-hidden="true" />

      <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-6">
        <motion.span
          aria-hidden="true"
          style={{ scale: markScale, rotate: markRotate }}
          className="mx-auto mb-4 block h-16 font-serif text-[8rem] leading-none text-gold-500/40"
        >
          “
        </motion.span>

        <blockquote ref={ref} className="text-[1.7rem] font-light leading-[1.35] tracking-tight text-white sm:text-4xl lg:text-5xl">
          <p className="sr-only">{quote}</p>
          <p aria-hidden="true">
            {words.map((w, i) => (
              <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
                {w}
              </Word>
            ))}
          </p>
        </blockquote>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mt-10 space-y-4">
          <cite className="block text-sm font-extrabold uppercase not-italic tracking-[0.3em] text-gold-500">— Yves Doz</cite>
          <p className="text-base font-medium text-gray-400">É exatamente contra isso que trabalhamos.</p>
        </motion.div>
      </div>
    </section>
  );
}
