import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "motion/react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

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
    <div className={`group relative aspect-[9/16] overflow-hidden rounded-[1.75rem] border border-white/10 bg-dark-950 shadow-2xl shadow-black/50 ${className}`}>
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
            <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gold-500 text-dark-900 shadow-[0_0_60px_rgb(243_198_17/0.5)]">
              <span className="absolute inset-0 animate-ping rounded-full bg-gold-500/40" />
              <Play className="relative ml-1 h-8 w-8 fill-current" aria-hidden="true" />
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 p-5 sm:p-6">{children}</div>

      {/* Sound / play state chip. */}
      <div className="pointer-events-none absolute right-4 top-4 z-20 flex gap-2 [&>button]:pointer-events-auto">
        {mode === "player" && playing && (
          <span className="pointer-events-none flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-dark-950/70 text-white backdrop-blur-md">
            <Pause className="h-4 w-4" aria-hidden="true" />
          </span>
        )}
        <button
          type="button"
          onClick={mode === "ambient" ? (e) => (e.stopPropagation(), toggle()) : toggleMute}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-dark-950/70 text-white backdrop-blur-md transition-colors hover:bg-gold-500 hover:text-dark-900"
          aria-label={muted ? "Ativar som" : "Silenciar"}
        >
          {muted ? <VolumeX className="h-4 w-4" aria-hidden="true" /> : <Volume2 className="h-4 w-4" aria-hidden="true" />}
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
