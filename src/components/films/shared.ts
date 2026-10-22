import { EASE_OUT_EXPO } from "../../lib/constants";

export const GOLD = "#f3c611";
export const WHITE = "#ffffff";
export const MUTED = "rgba(255,255,255,0.18)";
export const LABEL = "rgba(255,255,255,0.55)";

/** Deterministic pseudo-random numbers, so every visit shows the same composition. */
export function seeded(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

export const ease = EASE_OUT_EXPO;

export const textProps = {
  fontFamily: "inherit",
  fontWeight: 700,
  letterSpacing: "0.12em",
} as const;
