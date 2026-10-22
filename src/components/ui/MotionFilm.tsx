import React, { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, animate, motion, useInView, useMotionValue, useReducedMotion, type AnimationPlaybackControls } from "motion/react";
import { EASE_OUT_EXPO } from "../../lib/constants";
import { PauseGlyph, PlayGlyph } from "./Icons";

export interface FilmScene {
  title: string;
  caption: string;
  /** SVG content drawn inside a 320 × 360 viewBox. It animates itself on mount. */
  Stage: React.ComponentType;
}

interface MotionFilmProps {
  scenes: FilmScene[];
  label: string;
  sceneDuration?: number;
  className?: string;
}

/**
 * A short animated "video" built from SVG scenes: story-style progress bars,
 * chapter captions and play/pause. It only runs while it is on screen.
 */
export function MotionFilm({ scenes, label, sceneDuration = 5.2, className = "" }: MotionFilmProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.35 });
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const progress = useMotionValue(0);
  const controls = useRef<AnimationPlaybackControls | null>(null);

  const goTo = useCallback(
    (i: number) => {
      progress.set(0);
      setIndex((i + scenes.length) % scenes.length);
    },
    [progress, scenes.length],
  );

  // Drive the current progress bar; resuming continues from where it stopped.
  useEffect(() => {
    if (!inView || paused || reduceMotion) return;
    const remaining = (1 - progress.get()) * sceneDuration;
    controls.current = animate(progress, 1, { duration: remaining, ease: "linear", onComplete: () => goTo(index + 1) });
    return () => controls.current?.stop();
  }, [index, inView, paused, reduceMotion, sceneDuration, goTo, progress]);

  const scene = scenes[index];

  return (
    <div
      ref={ref}
      className={`group relative flex aspect-[9/16] w-full select-none flex-col overflow-hidden rounded-[6px] bg-dark-900 ${className}`}
      role="region"
      aria-roledescription="animação"
      aria-label={label}
    >
      {/* Click anywhere on the frame to pause or resume. */}
      <button type="button" onClick={() => setPaused((p) => !p)} className="absolute inset-0 z-10 cursor-pointer" aria-label={paused ? "Continuar animação" : "Pausar animação"} />

      {/* Story-style chapter bars */}
      <div className="relative z-20 flex gap-1.5 px-5 pt-5">
        {scenes.map((s, i) => (
          <button key={s.title} type="button" onClick={() => goTo(i)} className="relative h-5 flex-1 cursor-pointer" aria-label={`Ir para: ${s.title}`}>
            <span className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 bg-white/20" />
            <motion.span
              className="absolute inset-x-0 top-1/2 h-[2px] origin-left -translate-y-1/2 bg-gold-500"
              style={{ scaleX: i === index ? (reduceMotion ? 1 : progress) : i < index ? 1 : 0 }}
            />
          </button>
        ))}
      </div>
      <div className="pointer-events-none relative z-0 flex items-center justify-between px-5 pt-2 text-[10px] font-bold uppercase tracking-[0.2em]">
        <span className="text-gray-400">{label}</span>
        <span className="tabular-nums text-white">
          {String(index + 1).padStart(2, "0")} <span className="text-gray-500">/ {String(scenes.length).padStart(2, "0")}</span>
        </span>
      </div>

      {/* Stage */}
      <div className="pointer-events-none relative flex flex-1 items-center justify-center px-4">
        <svg viewBox="0 0 320 360" className="h-full max-h-full w-full" aria-hidden="true">
          <AnimatePresence mode="wait">
            <motion.g key={index} exit={{ opacity: 0, transition: { duration: 0.35 } }}>
              <scene.Stage />
            </motion.g>
          </AnimatePresence>
        </svg>
      </div>

      {/* Caption */}
      <div className="pointer-events-none relative z-0 min-h-[9.5rem] border-t border-white/10 px-5 pb-6 pt-5">
        <AnimatePresence mode="wait">
          <motion.div key={index} initial="hidden" animate="show" exit="exit">
            <span className="block overflow-hidden">
              <motion.span
                className="block text-xl font-black leading-tight tracking-tight text-white sm:text-2xl"
                variants={{ hidden: { y: "110%" }, show: { y: 0, transition: { duration: 0.8, ease: EASE_OUT_EXPO } }, exit: { opacity: 0, transition: { duration: 0.25 } } }}
              >
                {scene.title}
              </motion.span>
            </span>
            <motion.p
              className="mt-2 text-[13px] leading-relaxed text-gray-400"
              variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2, ease: EASE_OUT_EXPO } }, exit: { opacity: 0, transition: { duration: 0.2 } } }}
            >
              {scene.caption}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>

      <span className="pointer-events-none absolute bottom-5 right-5 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 data-[paused=true]:opacity-100" data-paused={paused}>
        {paused ? <PlayGlyph className="ml-0.5 h-3 w-3" /> : <PauseGlyph className="h-3 w-3" />}
      </span>
    </div>
  );
}
