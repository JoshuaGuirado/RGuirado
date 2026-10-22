import React from "react";
import { motion } from "motion/react";
import { EASE_OUT_EXPO } from "../../lib/constants";

export interface TextLine {
  text: string;
  className?: string;
}

interface RevealTextProps {
  lines: TextLine[];
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  id?: string;
  delay?: number;
  /** Animate on mount instead of waiting for the element to scroll into view. */
  immediate?: boolean;
}

/**
 * Headline that rises word by word from behind a mask.
 * Each line keeps its own className so gradients can be applied per line.
 */
export function RevealText({ lines, as = "h2", className, id, delay = 0, immediate = false }: RevealTextProps) {
  const Tag = motion[as];
  const trigger = immediate ? { animate: "show" } : { whileInView: "show", viewport: { once: true, margin: "0px 0px -10% 0px" } };
  let index = 0;

  return (
    <Tag
      id={id}
      className={className}
      initial="hidden"
      {...trigger}
      transition={{ staggerChildren: 0.06, delayChildren: delay }}
      aria-label={lines.map((l) => l.text).join(" ")}
    >
      {lines.map((line, li) => (
        <span key={li} className="block" aria-hidden="true">
          {line.text.split(" ").map((word) => {
            const i = index++;
            return (
              <span key={i} className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom">
                <motion.span
                  className={`inline-block will-change-transform ${line.className ?? ""}`}
                  variants={{
                    hidden: { y: "110%", rotate: 4 },
                    show: { y: "0%", rotate: 0, transition: { duration: 0.9, ease: EASE_OUT_EXPO } },
                  }}
                >
                  {word}
                </motion.span>
                {" "}
              </span>
            );
          })}
        </span>
      ))}
    </Tag>
  );
}
