import React from "react";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-20 w-full h-full bg-dark-900 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Sleek High-Tech Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px"
        }}
      />
      
      {/* Background Soft Orbs with Floating Animation */}
      <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-gold-500/5 blur-[120px] rounded-full animate-float-orb" />
      <div className="absolute bottom-[20%] left-[5%] w-[600px] h-[600px] bg-blue-500/3 blur-[140px] rounded-full animate-float-orb" style={{ animationDelay: "3s" }} />

      {/* Laser Light Beams (Horizontal) */}
      <div className="absolute left-0 w-[400px] h-[1px] bg-gradient-to-r from-transparent via-gold-500/40 to-transparent blur-[2px] animate-laser-h-1" style={{ top: "30%" }} />
      <div className="absolute left-0 w-[500px] h-[1px] bg-gradient-to-r from-transparent via-gold-500/20 to-transparent blur-[3px] animate-laser-h-2" style={{ top: "70%" }} />

      {/* Laser Light Beams (Vertical) */}
      <div className="absolute top-0 w-[1px] h-[400px] bg-gradient-to-b from-transparent via-gold-500/30 to-transparent blur-[2px] animate-laser-v-1" style={{ left: "20%" }} />
      <div className="absolute top-0 w-[1px] h-[500px] bg-gradient-to-b from-transparent via-gold-500/10 to-transparent blur-[3px] animate-laser-v-2" style={{ left: "80%" }} />
    </div>
  );
}
