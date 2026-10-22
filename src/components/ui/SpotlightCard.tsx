import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "motion/react";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  /** Tilts the card in 3D toward the pointer. */
  tilt?: boolean;
  onClick?: () => void;
  role?: string;
  "aria-label"?: string;
}

/**
 * Card with a gold glow that follows the pointer, plus an optional 3D tilt.
 * Pointer effects are skipped on touch devices since they have no hover.
 */
export function SpotlightCard({ children, className = "", tilt = false, onClick, role, "aria-label": ariaLabel }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(-400);
  const my = useMotionValue(-400);
  const rx = useSpring(0, { stiffness: 200, damping: 20 });
  const ry = useSpring(0, { stiffness: 200, damping: 20 });

  const glow = useMotionTemplate`radial-gradient(420px circle at ${mx}px ${my}px, rgb(243 198 17 / 0.13), transparent 70%)`;
  const border = useMotionTemplate`radial-gradient(260px circle at ${mx}px ${my}px, rgb(243 198 17 / 0.7), transparent 70%)`;

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mx.set(x);
    my.set(y);
    if (tilt) {
      ry.set((x / rect.width - 0.5) * 10);
      rx.set((0.5 - y / rect.height) * 10);
    }
  };

  const handleLeave = () => {
    mx.set(-400);
    my.set(-400);
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      onClick={onClick}
      onKeyDown={onClick ? (e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), onClick()) : undefined}
      tabIndex={onClick ? 0 : undefined}
      role={role}
      aria-label={ariaLabel}
      style={tilt ? { rotateX: rx, rotateY: ry, transformPerspective: 1000 } : undefined}
      className={`group relative isolate overflow-hidden rounded-[1.75rem] border border-white/[0.07] bg-dark-900/80 ${className}`}
    >
      {/* Border highlight: a masked gradient layer that only shows on the 1px edge. */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] p-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: border,
          WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: glow }}
      />
      {children}
    </motion.div>
  );
}
