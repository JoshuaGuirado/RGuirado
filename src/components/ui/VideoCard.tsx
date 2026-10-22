import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "motion/react";
import { PauseGlyph, PlayGlyph, SoundGlyph } from "./Icons";

interface VideoCardProps {
  src: string;
  poster: string;
  label: string;
  className?: string;
  /**
   * "ambient": muted loop that only plays while on screen, click toggles sound.
   * "player": stays on the poster until clicked, then plays with sound.
   */
  mode?: "ambient" | "player";
  children?: React.ReactNode;
}

/** Vertical (9:16) video with lightweight custom controls. */
export function VideoCard({ src, poster, label, className = "", mode = "player", children }: VideoCardProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const inView = useInView(ref, { margin: "100px 0px" });
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(mode === "ambient");
  const [progress, setProgress] = useState(0);

  // Ambient videos only decode while visible; players pause when scrolled away.
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (mode === "ambient" && inView) video.play().catch(() => {});
    if (!inView) video.pause();
  }, [inView, mode]);

  const toggle = () => {
    const video = ref.current;
    if (!video) return;
    if (mode === "ambient") {
      video.muted = !video.muted;
      setMuted(video.muted);
      if (!video.muted) video.currentTime = 0;
      video.play().catch(() => {});
      return;
    }
    if (video.paused) {
      video.muted = false;
      setMuted(false);
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = ref.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  const showOverlay = mode === "player" && !playing;

  return (
    <div className={`group relative aspect-[9/16] overflow-hidden rounded-[6px] bg-dark-900 ${className}`}>
      <video
        ref={ref}
        src={src}
        poster={poster}
        loop={mode === "ambient"}
        muted={muted}
        playsInline
        preload={mode === "ambient" ? "metadata" : "none"}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        onTimeUpdate={(e) => setProgress(e.currentTarget.currentTime / (e.currentTarget.duration || 1))}
        className="h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
        aria-label={label}
      />

      <button
        type="button"
        onClick={toggle}
        className="absolute inset-0 z-10 cursor-pointer"
        aria-label={mode === "ambient" ? (muted ? `Ativar som: ${label}` : `Silenciar: ${label}`) : playing ? `Pausar: ${label}` : `Assistir: ${label}`}
      />

      {/* Bottom shade so overlaid text stays readable on any frame. */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-dark-950/95 via-dark-950/40 to-transparent" />

      <AnimatePresence>
        {showOverlay && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.3 }}
            transition={{ duration: 0.4 }}
            className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center"
          >
            <span className="flex h-[72px] w-[72px] items-center justify-center rounded-full border border-white/60 text-white transition-colors duration-300 group-hover:border-gold-500 group-hover:bg-gold-500 group-hover:text-dark-950">
              <PlayGlyph className="ml-1 h-5 w-5" />
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 p-5 sm:p-6">{children}</div>

      {/* Sound / play state chip. */}
      <div className="pointer-events-none absolute right-4 top-4 z-20 flex gap-2 [&>button]:pointer-events-auto">
        {mode === "player" && playing && (
          <span className="pointer-events-none flex h-10 w-10 items-center justify-center rounded-full bg-dark-950/80 text-white">
            <PauseGlyph className="h-3 w-3" />
          </span>
        )}
        <button
          type="button"
          onClick={mode === "ambient" ? (e) => (e.stopPropagation(), toggle()) : toggleMute}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-dark-950/80 text-white transition-colors hover:bg-gold-500 hover:text-dark-950"
          aria-label={muted ? "Ativar som" : "Silenciar"}
        >
          <SoundGlyph muted={muted} />
        </button>
      </div>

      {playing && (
        <div className="absolute inset-x-0 bottom-0 z-20 h-[3px] bg-white/10">
          <div className="h-full origin-left bg-gold-500" style={{ transform: `scaleX(${progress})` }} />
        </div>
      )}
    </div>
  );
}
