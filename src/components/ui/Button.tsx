import React from "react";
import { ArrowRight } from "lucide-react";

export function Button({ 
  children, 
  className = "", 
  onClick, 
  type = "button", 
  disabled = false,
  "aria-label": ariaLabel
}: { 
  children: React.ReactNode, 
  className?: string, 
  onClick?: () => void, 
  type?: "button" | "submit", 
  disabled?: boolean,
  "aria-label"?: string
}) {
  return (
    <button 
      type={type} 
      onClick={onClick} 
      disabled={disabled}
      aria-label={ariaLabel}
      className={`relative overflow-hidden group bg-gold-500 hover:bg-gold-400 text-dark-900 font-sans font-black uppercase tracking-wider text-xs py-4 px-8 rounded-full border border-gold-600/30 hover:border-gold-400/50 transition-all duration-300 shadow-[0_0_20px_rgba(243,192,18,0.3)] hover:shadow-[0_0_30px_rgba(243,192,18,0.5)] active:scale-95 ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </span>
      <div className="absolute inset-0 h-full w-full bg-white/20 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
    </button>
  );
}
