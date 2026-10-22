import React from "react";
import { motion, type Variants } from "motion/react";
import { EASE_OUT_EXPO } from "../../lib/constants";

type Direction = "up" | "down" | "left" | "right" | "none";

const offsets: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 40 },
  down: { y: -40 },
  left: { x: 48 },
  right: { x: -48 },
  none: {},
};

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: Direction;
  blur?: boolean;
  as?: "div" | "section" | "li" | "span" | "p";
}

/** Fades and slides its children in the first time they scroll into view. */
export function Reveal({ children, className, delay = 0, duration = 0.9, direction = "up", blur = true, as = "div" }: RevealProps) {
  const Component = motion[as];
  return (
    <Component
      className={className}
      initial={{ opacity: 0, ...offsets[direction], filter: blur ? "blur(8px)" : "blur(0px)" }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration, delay, ease: EASE_OUT_EXPO }}
    >
      {children}
    </Component>
  );
}

const staggerParent: Variants = {
  hidden: {},
  show: (stagger: number) => ({ transition: { staggerChildren: stagger } }),
};

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 48, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.9, ease: EASE_OUT_EXPO } },
};

/** Reveals each direct `StaggerItem` child one after the other. */
export function Stagger({ children, className, stagger = 0.12 }: { children: React.ReactNode; className?: string; stagger?: number }) {
  return (
    <motion.div
      className={className}
      variants={staggerParent}
      custom={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={staggerChild}>
      {children}
    </motion.div>
  );
}
