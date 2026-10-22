import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "../ui/Button";
import { RevealText } from "../ui/RevealText";
import { VideoCard } from "../ui/VideoCard";
import { AnimatedCounter } from "../ui/AnimatedCounter";
import { scrollToForm, scrollToId } from "../../lib/scroll";
import { EASE_OUT_EXPO } from "../../lib/constants";

const stats = [
  { value: "+25 anos", label: "de mercado real" },
  { value: "+750", label: "empresas estruturadas" },
  { value: "+1500", label: "unidades abertas" },
  { value: "+350", label: "projetos estratégicos" },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, delay, ease: EASE_OUT_EXPO },
});

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  // Scroll-out: copy drifts up and fades while the video card moves the other way.
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const cardY = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <section id="inicio" ref={ref} className="relative isolate overflow-hidden bg-dark-950 pb-14 pt-28 sm:pt-36 lg:min-h-[100svh] lg:pb-20" aria-labelledby="hero-title">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-5 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
        <motion.div style={{ y: copyY, opacity: copyOpacity }}>
          <motion.p {...fadeUp(0.1)} className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-gray-400">
            <span className="text-gold-500">Desde 2001</span>
            <span className="h-px w-10 bg-white/25" aria-hidden="true" />
            Consultoria empresarial · Todo o Brasil
          </motion.p>

          <RevealText
            as="h1"
            id="hero-title"
            immediate
            delay={0.2}
            className="mb-8 text-[2.6rem] font-black leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-[4.1rem] xl:text-[4.6rem]"
            lines={[{ text: "Talento funda e constrói." }, { text: "Método organiza e escala.", className: "text-gold-500" }]}
          />

          <motion.p {...fadeUp(0.6)} className="mb-4 max-w-xl text-base leading-relaxed text-gray-200 sm:text-lg">
            Se o instinto e o esforço trouxeram sua empresa até aqui, o próximo salto pede estrutura, processo e uma direção clara.
          </motion.p>
          <motion.p {...fadeUp(0.7)} className="mb-10 max-w-xl text-sm leading-relaxed text-gray-400 sm:text-base">
            A R.Guirado ajuda empreendedores de pequenas e médias empresas a organizar a casa e escalar com método — via franchising, gestão estratégica e performance comportamental. Sem fórmula pronta. Sem descaracterizar o que você construiu.
          </motion.p>

          <motion.div {...fadeUp(0.85)} className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button onClick={scrollToForm} aria-label="Quero um diagnóstico do meu negócio">
              Quero um diagnóstico
            </Button>
            <Button variant="outline" onClick={() => scrollToId("pilares")} aria-label="Conheça os 3 pilares">
              Conheça os 3 pilares
            </Button>
          </motion.div>
        </motion.div>

        {/* Video card: opens like a shutter, then counter-scrolls. */}
        <motion.div style={{ y: cardY }} className="relative mx-auto w-full max-w-[300px] sm:max-w-[340px]">
          <motion.div
            initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ duration: 1.3, delay: 0.3, ease: EASE_OUT_EXPO }}
          >
            <VideoCard src="/media/hero.mp4" poster="/media/hero-poster.webp" label="Vídeo: a R.Guirado na prática" mode="ambient">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-400">Na prática</p>
              <p className="text-sm font-bold text-white">Toque para ouvir</p>
            </VideoCard>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.8, ease: EASE_OUT_EXPO }}
            className="absolute -left-4 top-10 hidden bg-gold-500 px-4 py-3 text-dark-950 sm:block lg:-left-12"
          >
            <p className="text-[9px] font-bold uppercase tracking-[0.22em]">Método</p>
            <p className="text-lg font-black leading-none">ALTA®</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Proof bar */}
      <div className="mx-auto mt-16 w-full max-w-7xl px-5 sm:px-6 lg:mt-24">
        <motion.dl
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.08, delayChildren: 1 }}
          className="grid grid-cols-2 border-t border-white/15 lg:grid-cols-4"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE_OUT_EXPO } } }}
              className={`flex flex-col pt-6 pb-2 ${i % 2 === 1 ? "pl-5 sm:pl-8" : "pr-5"} ${i > 1 ? "mt-6 border-t border-white/15 lg:mt-0 lg:border-t-0" : ""} ${i > 0 ? "lg:border-l lg:border-white/15 lg:pl-8" : ""}`}
            >
              <dt className="order-2 mt-2 text-[10px] font-semibold uppercase leading-snug tracking-[0.18em] text-gray-400 sm:text-[11px]">{s.label}</dt>
              <dd className="whitespace-nowrap text-[1.9rem] font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
                <AnimatedCounter value={s.value} />
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
