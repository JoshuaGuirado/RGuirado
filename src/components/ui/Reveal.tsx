import React from "react";
import { motion, type Variants } from "motion/react";
import { EASE_OUT_EXPO } from "../../lib/constants";

type Direction = "up" | "down" | "left" | "right" | "none";

const offsets: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 32 },
  down: { y: -32 },
  left: { x: 40 },
  right: { x: -40 },
  none: {},
};

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: Direction;
  as?: "div" | "section" | "li" | "span" | "p";
}

// Only opacity and transform are animated: both stay on the compositor,
// unlike filter: blur(), which forces a repaint on every frame.

/** Fades and slides its children in the first time they scroll into view. */
export function Reveal({ children, className, delay = 0, duration = 0.9, direction = "up", as = "div" }: RevealProps) {
  const Component = motion[as];
  return (
    <Component
      className={className}
      initial={{ opacity: 0, ...offsets[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
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
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE_OUT_EXPO } },
};

/** Reveals each direct `StaggerItem` child one after the other. */
export function Stagger({ children, className, stagger = 0.12, as = "div" }: { children: React.ReactNode; className?: string; stagger?: number; as?: "div" | "ol" | "ul" | "dl" }) {
  const Component = motion[as];
  return (
    <Component
      className={className}
      variants={staggerParent}
      custom={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
    >
      {children}
    </Component>
  );
}

export function StaggerItem({ children, className, as = "div" }: { children: React.ReactNode; className?: string; as?: "div" | "li" }) {
  const Component = motion[as];
  return (
    <Component className={className} variants={staggerChild}>
      {children}
    </Component>
  );
}
