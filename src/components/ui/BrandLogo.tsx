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
        fontFamily="Montserrat, sans-serif" 
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

export function LogoFranchising({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-start select-none ${className}`}>
      <div className="flex items-center gap-2">
        <LogoSymbol className="w-8 h-8 text-[#f3c611]" />
        <span className="font-sans font-black text-2xl text-white lowercase tracking-tighter">guirado</span>
      </div>
      <span className="font-sans font-black text-[9px] text-[#f3c611] tracking-[0.24em] uppercase self-end mt-1 mr-0.5">
        franchising
      </span>
    </div>
  );
}

export function LogoGestao({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-start select-none ${className}`}>
      <div className="flex items-center gap-2">
        <LogoSymbol className="w-8 h-8 text-[#f3c611]" />
        <span className="font-sans font-black text-2xl text-white lowercase tracking-tighter">guirado</span>
      </div>
      <span className="font-sans font-black text-[7px] text-[#f3c611] tracking-[0.16em] uppercase self-end mt-1 mr-0.5">
        gestão estratégica
      </span>
    </div>
  );
}

export function LogoPerformance({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-start select-none ${className}`}>
      <div className="flex items-center gap-2">
        <LogoSymbol className="w-8 h-8 text-[#f3c611]" />
        <span className="font-sans font-black text-2xl text-white lowercase tracking-tighter">guirado</span>
      </div>
      <span className="font-sans font-black text-[6.5px] text-[#f3c611] tracking-[0.11em] uppercase self-end mt-1 mr-0.5">
        performance comportamental
      </span>
    </div>
  );
}
