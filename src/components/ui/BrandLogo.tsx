import React from "react";

export function LogoSymbol({ className = "w-8 h-8", color = "text-[#f3c611]" }: { className?: string; color?: string }) {
  return (
    <svg className={`${className} ${color} fill-current`} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      {/* Outer Circle */}
      <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="8" fill="none" />
      {/* Inside letter R */}
      <text 
        x="50" 
        y="64" 
        fill="currentColor" 
        fontFamily="Montserrat Variable, Montserrat, sans-serif" 
        fontWeight="900" 
        fontSize="44" 
        textAnchor="middle"
      >
        R
      </text>
      {/* Small Dot at 4 o'clock */}
      <circle cx="82" cy="74" r="8" fill="currentColor" />
    </svg>
  );
}

export function Logo({ className = "", showText = true }: { className?: string; showText?: boolean }) {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      <LogoSymbol className="w-8 h-8 text-[#f3c611]" />
      {showText && (
        <span className="font-sans font-black text-2xl tracking-tighter text-white lowercase">
          guirado
        </span>
      )}
    </div>
  );
}

/** Main logo followed by the name of a pillar, separated by a hairline. */
export function LogoPillar({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`flex items-center gap-3 select-none sm:gap-4 ${className}`}>
      <Logo />
      <span className="hidden h-8 w-px bg-white/20 sm:block" aria-hidden="true" />
      <span className="hidden text-[11px] font-bold uppercase tracking-[0.2em] text-gold-500 sm:block">{label}</span>
    </div>
  );
}
