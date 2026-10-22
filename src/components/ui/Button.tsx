import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  variant?: "primary" | "glass";
  icon?: boolean;
  "aria-label"?: string;
}

const variants = {
  primary:
    "bg-gold-500 text-dark-900 shadow-[0_10px_40px_-10px_rgb(243_198_17/0.6)] hover:bg-gold-400 hover:shadow-[0_14px_50px_-8px_rgb(243_198_17/0.75)]",
  glass:
    "border border-white/15 bg-white/[0.04] text-white backdrop-blur-md hover:border-gold-500/50 hover:bg-white/[0.08]",
};

/** Pill button with a light sweep on hover. `variant="glass"` is the secondary style. */
export function Button({ children, className = "", onClick, type = "button", disabled = false, variant = "primary", icon = true, "aria-label": ariaLabel }: ButtonProps) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      whileHover={disabled ? undefined : { y: -2 }}
      whileTap={disabled ? undefined : { scale: 0.97 }}
      className={`group relative inline-flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full px-8 py-4 text-xs font-extrabold uppercase tracking-[0.14em] transition-[background-color,box-shadow,border-color] duration-300 ${variants[variant]} ${disabled ? "cursor-not-allowed opacity-60" : ""} ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />}
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-full -translate-x-[120%] bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-shimmer"
      />
    </motion.button>
  );
}
