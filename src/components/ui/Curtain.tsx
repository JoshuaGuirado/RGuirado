import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface CurtainProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  "aria-labelledby"?: string;
}

/**
 * Light section that rises over the dark page like a sheet of paper:
 * it starts slightly narrower and grows to full width as it scrolls in.
 * Only `scale` is animated, so the effect stays on the compositor.
 */
export function Curtain({ id, children, className = "", "aria-labelledby": labelledBy }: CurtainProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start 25%"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.93, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);

  return (
    <section id={id} ref={ref} aria-labelledby={labelledBy} className="relative bg-dark-950">
      <motion.div style={{ scale, y, transformOrigin: "50% 0%" }} className={`relative rounded-t-[28px] bg-off-white text-dark-950 sm:rounded-t-[44px] ${className}`}>
        {children}
      </motion.div>
    </section>
  );
}
