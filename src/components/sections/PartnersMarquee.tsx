import React from "react";
import { motion } from "motion/react";

interface PartnerItem {
  id: string;
  name: string;
  imageSrc?: string;
  renderLogo?: () => React.ReactNode;
}

const partners: PartnerItem[] = [
  {
    id: "gelaboca",
    name: "Gela Boca Sorvetes",
    imageSrc: "/logos/gelaboca.png"
  },
  {
    id: "bless",
    name: "Bless Internet",
    imageSrc: "/logos/bless.png"
  },
  {
    id: "marques",
    name: "Marques Adm. Judiciais",
    imageSrc: "/logos/marques.png"
  },
  {
    id: "triangulo",
    name: "Consórcio Triângulo",
    imageSrc: "/logos/triangulo.png"
  },
  {
    id: "titanium",
    name: "Grupo Titanium",
    imageSrc: "/logos/titanium.png"
  },
  {
    id: "dompizza",
    name: "Dom Pizza 18",
    imageSrc: "/logos/dompizza.png"
  },
  {
    id: "lavathru",
    name: "Lava Thru",
    imageSrc: "/logos/lavathru.png"
  },
  {
    id: "clzo",
    name: "CLZO Alvos Premium",
    imageSrc: "/logos/clzo.png"
  },
  {
    id: "rolls",
    name: "Rolls Food",
    imageSrc: "/logos/rolls.png"
  },
  {
    id: "etzme",
    name: "ETZME",
    imageSrc: "/logos/etzme.png"
  },
  {
    id: "mundodofutsal",
    name: "Mundo do Futsal",
    imageSrc: "/logos/mundodofutsal.png"
  },
  {
    id: "armazem",
    name: "Armazém da Limpeza",
    imageSrc: "/logos/armazem.png"
  },
  {
    id: "culturasteam",
    name: "Cultura Steam",
    imageSrc: "/logos/culturasteam.png"
  },
  {
    id: "facilitapass",
    name: "Facilita Pass",
    imageSrc: "/logos/facilitapass.png"
  },
  {
    id: "colegioplatao",
    name: "Colégio Platão",
    renderLogo: () => (
      <svg viewBox="0 0 220 80" className="h-10 sm:h-12 w-auto fill-current">
        <path d="M10 25 L40 10 L70 25 L40 40 Z" stroke="currentColor" strokeWidth="5" fill="none" strokeLinejoin="round" />
        <path d="M20 32 V52 C20 56 60 56 60 52 V32" stroke="currentColor" strokeWidth="5" fill="none" strokeLinecap="round" />
        <text x="82" y="36" fontWeight="700" fontSize="12" letterSpacing="2" fill="currentColor">COLÉGIO</text>
        <text x="82" y="62" fontWeight="900" fontSize="28" letterSpacing="1" fill="currentColor">PLATÃO</text>
      </svg>
    )
  }
];

export function PartnersMarquee() {
  return (
    <section className="py-14 sm:py-20 bg-dark-900 border-y border-white/5 overflow-hidden flex flex-col items-center" aria-label="Nossos parceiros">
      <p className="text-gold-500/70 font-bold text-xs sm:text-sm tracking-[0.25em] uppercase mb-10 sm:mb-14 text-center px-4">
        Empresas parceiras que já aceleramos
      </p>
      
      <div className="relative w-full flex overflow-hidden">
        {/* Subtle Fade Edges */}
        <div className="absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-dark-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-dark-900 to-transparent z-10 pointer-events-none" />
        
        <motion.div 
          animate={{ x: ["0%", "-33.333333333333%"] }} 
          transition={{ ease: "linear", duration: 55, repeat: Infinity }}
          className="flex whitespace-nowrap items-center w-max"
          aria-hidden="true"
        >
          {[...partners, ...partners, ...partners].map((partner, idx) => (
            <motion.div 
              key={`${partner.id}-${idx}`}
              whileHover={{ scale: 1.08 }}
              className="mx-6 sm:mx-10 md:mx-14 flex items-center justify-center cursor-default select-none transition-all duration-300"
            >
              {partner.imageSrc ? (
                <img 
                  src={partner.imageSrc} 
                  alt={partner.name}
                  className="h-10 sm:h-12 md:h-14 w-auto max-w-[150px] sm:max-w-[200px] object-contain filter grayscale brightness-125 contrast-125 opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300 rounded-md mix-blend-screen"
                />
              ) : (
                <div className="text-white/60 hover:text-white opacity-70 hover:opacity-100 transition-all duration-300 filter drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                  {partner.renderLogo ? partner.renderLogo() : partner.name}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
