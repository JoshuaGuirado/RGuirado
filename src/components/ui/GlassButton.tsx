import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function GlassButton({ 
  children, 
  className = "", 
  onClick, 
  type = "button",
  "aria-label": ariaLabel
}: { 
  children: React.ReactNode, 
  className?: string, 
  onClick?: () => void, 
  type?: "button" | "submit",
  "aria-label"?: string
}) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`relative inline-flex items-center justify-center px-8 py-4 font-heading font-semibold text-white overflow-hidden rounded-full transition-all group ${className}`}
    >
      {/* Outer Glow Background */}
      <div className="absolute inset-0 bg-gold-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Liquid Glass Container */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-full border border-gold-500/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_8px_32px_rgba(0,0,0,0.4)] group-hover:bg-gradient-to-br group-hover:from-white/20 group-hover:to-white/10 group-hover:border-gold-400/50 transition-all duration-300 pointer-events-none" />
      
      <span className="relative z-10 flex items-center gap-2 drop-shadow-md">
        {children}
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </span>
      
      {/* Reflection Shine */}
      <div className="absolute top-0 right-0 left-0 h-[40%] bg-gradient-to-b from-white/20 to-transparent rounded-t-full opacity-50 pointer-events-none" />
      <div className="absolute inset-0 h-full w-[200%] bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none mix-blend-overlay" />
    </motion.button>
  );
}
