import React from "react";
import { Arrow } from "./Icons";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  /** "primary": gold. "outline": hairline border. "dark": navy, for light sections. */
  variant?: "primary" | "outline" | "dark";
  icon?: boolean;
  "aria-label"?: string;
}

const variants = {
  primary: { base: "bg-gold-500 text-dark-950", fill: "bg-white", hover: "" },
  outline: { base: "border border-white/25 text-white", fill: "bg-white", hover: "group-hover:text-dark-950" },
  dark: { base: "bg-dark-950 text-white", fill: "bg-gold-500", hover: "group-hover:text-dark-950" },
};

/** Squared button whose hover state is a fill that wipes in from the left. */
export function Button({ children, className = "", onClick, type = "button", disabled = false, variant = "primary", icon = true, "aria-label": ariaLabel }: ButtonProps) {
  const v = variants[variant];
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`group relative inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-[3px] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.18em] transition-transform duration-200 active:scale-[0.98] ${v.base} ${disabled ? "cursor-not-allowed opacity-60" : ""} ${className}`}
    >
      <span
        aria-hidden="true"
        className={`absolute inset-0 origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 ${v.fill} ${disabled ? "hidden" : ""}`}
      />
      <span className={`relative flex items-center gap-3 transition-colors duration-300 ${v.hover}`}>
        {children}
        {icon && <Arrow className="h-2.5 w-5 shrink-0 transition-transform duration-500 group-hover:translate-x-1" />}
      </span>
    </button>
  );
}
