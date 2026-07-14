import React from "react";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-20 w-full h-full bg-dark-900 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Sleek High-Tech Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px"
        }}
      />
      
      {/* Background Soft Orbs with Floating Animation */}
      <div className="absolute top-[10%] right-[10%] w-[600px] h-[600px] bg-gold-500/5 blur-[130px] rounded-full animate-float-orb" />
      <div className="absolute bottom-[10%] left-[5%] w-[700px] h-[700px] bg-blue-500/3 blur-[150px] rounded-full animate-float-orb" style={{ animationDelay: "4s" }} />

      {/* Yellow/Gold Soft Laser Beams (Horizontal) */}
      <div className="absolute left-0 w-[500px] h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-40 blur-[2px] animate-laser-h-1" style={{ top: "25%" }} />
      <div className="absolute left-0 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-gold-500/30 to-transparent opacity-30 blur-[3px] animate-laser-h-2" style={{ top: "65%" }} />

      {/* Yellow/Gold Soft Laser Beams (Vertical) */}
      <div className="absolute top-0 w-[1px] h-[500px] bg-gradient-to-b from-transparent via-gold-400 to-transparent opacity-30 blur-[2px] animate-laser-v-1" style={{ left: "15%" }} />
      <div className="absolute top-0 w-[1px] h-[600px] bg-gradient-to-b from-transparent via-gold-500/20 to-transparent opacity-20 blur-[3px] animate-laser-v-2" style={{ left: "75%" }} />

      {/* Floating Paint Drops (Pingos de Tinta / Gotas) */}
      <div className="absolute top-[15%] left-[20%] w-3 h-3 bg-gold-500/10 rounded-full animate-float-orb blur-[1px]" style={{ animationDelay: "1s" }} />
      <div className="absolute top-[45%] right-[25%] w-4 h-4 bg-gold-400/8 rounded-full animate-float-orb blur-[1.5px]" style={{ animationDelay: "3s" }} />
      <div className="absolute bottom-[35%] left-[40%] w-2 h-2 bg-gold-500/15 rounded-full animate-float-orb blur-[0.5px]" style={{ animationDelay: "5s" }} />
      <div className="absolute bottom-[20%] right-[15%] w-5 h-5 bg-gold-600/5 rounded-full animate-float-orb blur-[2px]" style={{ animationDelay: "2s" }} />

      {/* Subtle Artistic Paint Splatters (Low Opacity SVGs for texture) */}
      <svg className="absolute top-[20%] left-[8%] w-32 h-32 text-gold-500/3 fill-current" viewBox="0 0 100 100">
        <path d="M50 20 C40 30, 20 40, 30 50 C40 60, 50 80, 60 70 C70 60, 85 50, 75 45 C65 40, 60 10, 50 20 Z" />
        <circle cx="25" cy="25" r="4" />
        <circle cx="75" cy="70" r="3" />
        <circle cx="45" cy="85" r="2" />
      </svg>

      <svg className="absolute bottom-[15%] right-[10%] w-40 h-40 text-gold-500/3 fill-current" viewBox="0 0 100 100">
        <path d="M40 30 C30 35, 10 50, 25 65 C40 80, 60 75, 70 60 C80 45, 75 30, 60 25 C45 20, 50 25, 40 30 Z" />
        <circle cx="15" cy="40" r="3" />
        <circle cx="85" cy="35" r="5" />
        <circle cx="65" cy="80" r="2" />
      </svg>
    </div>
  );
}
