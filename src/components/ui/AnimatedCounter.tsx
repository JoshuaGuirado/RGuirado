import React, { useEffect, useRef } from "react";
import { animate, useInView } from "motion/react";

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

/** Counts up to the first number in `value` (keeping any prefix/suffix) once visible. */
export function AnimatedCounter({ value, className }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const match = value.match(/\d+/);

  useEffect(() => {
    const el = ref.current;
    if (!el || !match || !inView) return;
    const prefix = value.slice(0, match.index);
    const suffix = value.slice(match.index! + match[0].length);
    const controls = animate(0, parseInt(match[0], 10), {
      duration: 2.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (n) => {
        el.textContent = `${prefix}${Math.round(n).toLocaleString("pt-BR")}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className={`tabular-nums ${className ?? ""}`}>
      {value}
    </span>
  );
}
