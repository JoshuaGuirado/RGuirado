import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useScroll, useSpring, useTransform } from "motion/react";
import { ChevronDown } from "lucide-react";
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
  initial: { opacity: 0, y: 24, filter: "blur(6px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 1, delay, ease: EASE_OUT_EXPO },
});

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  // Scroll-out transition: copy drifts up and fades, video card counter-moves.
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const cardY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const cardRotate = useTransform(scrollYProgress, [0, 1], [-3, 4]);
  const chipY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // Gold spotlight that follows the pointer across the hero.
  const mx = useSpring(useMotionValue(50), { stiffness: 60, damping: 20 });
  const my = useSpring(useMotionValue(30), { stiffness: 60, damping: 20 });
  const spotlight = useMotionTemplate`radial-gradient(600px circle at ${mx}% ${my}%, rgb(243 198 17 / 0.10), transparent 60%)`;

  const handleMove = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set(((e.clientX - rect.left) / rect.width) * 100);
    my.set(((e.clientY - rect.top) / rect.height) * 100);
  };

  return (
    <section
      id="inicio"
      ref={ref}
      onPointerMove={handleMove}
      className="relative isolate overflow-hidden bg-dark-950 pb-16 pt-28 sm:pt-36 lg:min-h-[100svh] lg:pb-24"
      aria-labelledby="hero-title"
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="bg-grid absolute inset-0" />
        <motion.div className="absolute inset-0" style={{ background: spotlight }} />
        <div className="absolute -right-40 -top-40 h-[700px] w-[700px] rounded-full bg-gold-500/[0.07] blur-[140px]" />
        <div className="absolute -bottom-60 -left-40 h-[600px] w-[600px] rounded-full bg-dark-700/40 blur-[140px]" />
        <div className="bg-noise absolute inset-0 opacity-[0.035] mix-blend-overlay" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-dark-950" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-5 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <motion.div style={{ y: copyY, opacity: copyOpacity }}>
          <motion.div {...fadeUp(0.1)} className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] py-2 pl-2 pr-4 backdrop-blur-sm">
            <span className="flex items-center gap-1.5 rounded-full bg-gold-500/15 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-widest text-gold-400">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold-500" />
              </span>
              Desde 2001
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-300 sm:text-[11px]">Consultoria empresarial · Todo o Brasil</span>
          </motion.div>

          <RevealText
            as="h1"
            id="hero-title"
            immediate
            delay={0.25}
            className="mb-7 text-[2.6rem] font-black leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-[4rem] xl:text-[4.5rem]"
            lines={[
              { text: "Talento funda e constrói." },
              { text: "Método organiza e escala.", className: "text-gold-gradient animate-gradient-x" },
            ]}
          />

          <motion.p {...fadeUp(0.7)} className="mb-4 max-w-xl text-base font-light leading-relaxed text-gray-300 sm:text-lg">
            Se o instinto e o esforço trouxeram sua empresa até aqui, o próximo salto pede estrutura, processo e uma direção clara.
          </motion.p>
          <motion.p {...fadeUp(0.8)} className="mb-10 max-w-xl text-sm font-light leading-relaxed text-gray-400 sm:text-base">
            A R.Guirado ajuda empreendedores de pequenas e médias empresas a organizar a casa e escalar com método — via franchising, gestão estratégica e performance comportamental. Sem fórmula pronta. Sem descaracterizar o que você construiu.
          </motion.p>

          <motion.div {...fadeUp(0.95)} className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button onClick={scrollToForm} aria-label="Quero um diagnóstico do meu negócio">
              Quero um diagnóstico
            </Button>
            <Button variant="glass" onClick={() => scrollToId("pilares")} aria-label="Conheça os 3 pilares">
              Conheça os 3 pilares
            </Button>
          </motion.div>
        </motion.div>

        {/* Video card */}
        <motion.div
          initial={{ opacity: 0, y: 60, rotate: -8, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.3, ease: EASE_OUT_EXPO }}
          className="relative mx-auto w-full max-w-[300px] sm:max-w-[340px]"
        >
          <motion.div style={{ y: cardY, rotate: cardRotate }}>
            <div className="absolute -inset-10 -z-10 rounded-full bg-gold-500/15 blur-[80px]" aria-hidden="true" />
            <VideoCard src="/media/hero.mp4" poster="/media/hero-poster.webp" label="Vídeo: a R.Guirado na prática" mode="ambient" className="ring-1 ring-gold-500/20">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-400">Na prática</p>
              <p className="text-sm font-bold text-white">Toque para ouvir</p>
            </VideoCard>
          </motion.div>

          {/* Floating chips with their own parallax speed */}
          <motion.div style={{ y: chipY }} className="absolute -left-6 top-16 hidden sm:block lg:-left-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 1, ease: EASE_OUT_EXPO }}
              className="rounded-2xl border border-white/10 bg-dark-900/80 px-5 py-4 shadow-2xl backdrop-blur-xl"
            >
              <p className="text-2xl font-black text-gold-gradient">+25 anos</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">de estrada real</p>
            </motion.div>
          </motion.div>
          <motion.div style={{ y: chipY }} className="absolute -right-4 bottom-24 hidden sm:block lg:-right-14">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3, duration: 1, ease: EASE_OUT_EXPO }}
              className="rounded-2xl border border-gold-500/30 bg-gold-500 px-5 py-3 text-dark-900 shadow-[0_20px_50px_-10px_rgb(243_198_17/0.5)]"
            >
              <p className="text-[10px] font-extrabold uppercase tracking-widest">Método</p>
              <p className="text-lg font-black leading-none">ALTA®</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Proof bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 1.2, ease: EASE_OUT_EXPO }}
        className="mx-auto mt-16 w-full max-w-7xl px-5 sm:px-6 lg:mt-24"
      >
        <dl className="grid grid-cols-2 overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-md lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`group relative flex flex-col p-5 transition-colors duration-500 hover:bg-white/[0.03] sm:p-8 ${i % 2 === 0 ? "border-r border-white/[0.08]" : ""} ${i < 2 ? "border-b border-white/[0.08] lg:border-b-0" : ""} ${i === 1 ? "lg:border-r" : ""}`}
            >
              <dt className="order-2 mt-2 text-[10px] font-bold uppercase leading-snug tracking-[0.18em] text-gray-400 sm:text-[11px]">{s.label}</dt>
              <dd className="whitespace-nowrap text-[1.7rem] font-black tracking-tight text-gold-gradient sm:text-4xl lg:text-5xl">
                <AnimatedCounter value={s.value} />
              </dd>
              <span className="absolute bottom-0 left-0 h-px w-0 bg-gold-500 transition-all duration-700 group-hover:w-full" aria-hidden="true" />
            </div>
          ))}
        </dl>
      </motion.div>

      <button
        type="button"
        onClick={() => scrollToId("parceiros")}
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 cursor-pointer flex-col items-center gap-1 text-gray-500 transition-colors hover:text-gold-400 lg:flex"
        aria-label="Rolar para baixo"
      >
        <span className="text-[9px] font-bold uppercase tracking-[0.3em]">Role</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}>
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </button>
    </section>
  );
}
