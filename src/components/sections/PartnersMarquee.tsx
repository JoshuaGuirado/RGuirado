import React from "react";
import { motion } from "motion/react";

export function PartnersMarquee() {
  const partners = ["Gela Boca", "Lava Thru", "Dom Pizza", "Colégio Platão", "ETZME", "Mundo do Futsal", "Armazém da Limpeza", "Bless Internet", "Consórcio Triângulo", "Marques Administrações Judiciais", "CLZO", "Cultura Steam", "Facilita Pass", "Grupo Titanium", "Rolls Food"];
  
  return (
    <section className="py-16 bg-dark-900 border-y border-white/5 overflow-hidden flex flex-col items-center" aria-label="Nossos parceiros">
      <p className="text-gold-500/80 font-bold text-sm tracking-[0.25em] uppercase mb-10">Empresas parceiras que já aceleramos</p>
      <div className="relative w-full flex overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-dark-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-dark-900 to-transparent z-10 pointer-events-none" />
        
        <motion.div 
          animate={{ x: ["0%", "-33.333333333333%"] }} 
          transition={{ ease: "linear", duration: 70, repeat: Infinity }}
          className="flex whitespace-nowrap items-center w-max"
          aria-hidden="true"
        >
          {[...partners, ...partners, ...partners].map((partner, idx) => (
             <span key={idx} className="mx-8 md:mx-14 text-lg md:text-2xl font-heading font-bold text-white/30 hover:text-white/90 transition-all uppercase tracking-widest cursor-default select-none">
              {partner}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
