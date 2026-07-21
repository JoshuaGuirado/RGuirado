import React from "react";
import { motion } from "motion/react";

interface PartnerItem {
  id: string;
  name: string;
  imageSrc: string;
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
    id: "platao",
    name: "Colégio Platão",
    imageSrc: "/logos/platao.png"
  }
];

export function PartnersMarquee() {
  return (
    <section className="py-16 sm:py-24 bg-dark-900 border-y border-white/5 overflow-hidden flex flex-col items-center" aria-label="Nossos parceiros">
      <p className="text-gold-500/70 font-bold text-xs sm:text-sm tracking-[0.25em] uppercase mb-12 sm:mb-16 text-center px-4">
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
              whileHover={{ scale: 1.1 }}
              className="mx-8 sm:mx-12 md:mx-16 flex items-center justify-center shrink-0 min-w-[160px] sm:min-w-[220px] cursor-default select-none transition-all duration-300"
            >
              <img 
                src={partner.imageSrc} 
                alt={partner.name}
                className="h-12 sm:h-16 md:h-20 w-auto object-contain opacity-85 hover:opacity-100 transition-all duration-300 filter drop-shadow-[0_0_12px_rgba(255,255,255,0.18)]"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
