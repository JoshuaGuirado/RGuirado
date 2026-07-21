import React from "react";
import { motion } from "motion/react";

interface PartnerLogo {
  id: string;
  name: string;
  renderLogo: () => React.ReactNode;
}

const partnerLogos: PartnerLogo[] = [
  {
    id: "gelaboca",
    name: "Gela Boca Sorvetes",
    renderLogo: () => (
      <svg viewBox="0 0 240 100" className="h-9 sm:h-11 md:h-12 w-auto fill-current">
        <path d="M 60,42 Q 100,12 135,32 Q 170,12 210,42 Q 135,80 60,42 Z" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
        <path d="M 115,28 Q 135,18 155,28" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <text x="135" y="76" textAnchor="middle" fontWeight="900" fontSize="34" letterSpacing="-1" fill="currentColor">gelaboca</text>
        <text x="135" y="94" textAnchor="middle" fontWeight="700" fontSize="11" letterSpacing="7" fill="currentColor">SORVETES</text>
      </svg>
    )
  },
  {
    id: "blessinternet",
    name: "Bless Internet",
    renderLogo: () => (
      <svg viewBox="0 0 200 110" className="h-9 sm:h-11 md:h-12 w-auto fill-current">
        <path d="M 30,35 A 75,75 0 0,1 170,35" fill="none" stroke="currentColor" strokeWidth="16" strokeLinecap="round" />
        <path d="M 52,56 A 50,50 0 0,1 148,56" fill="none" stroke="currentColor" strokeWidth="14" strokeLinecap="round" />
        <path d="M 75,76 A 25,25 0 0,1 125,76" fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="round" />
        <text x="100" y="98" textAnchor="middle" fontWeight="900" fontStyle="italic" fontSize="26" letterSpacing="1" fill="currentColor">BLESS</text>
        <text x="100" y="109" textAnchor="middle" fontWeight="700" fontSize="10" letterSpacing="5" fill="currentColor">INTERNET</text>
      </svg>
    )
  },
  {
    id: "marques",
    name: "Marques Adm. Judiciais",
    renderLogo: () => (
      <svg viewBox="0 0 240 85" className="h-9 sm:h-11 md:h-12 w-auto fill-current">
        <g stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <path d="M 20,70 V 15 L 60,55 L 100,15 V 70" />
          <path d="M 20,70 L 100,15" opacity="0.6" />
          <path d="M 60,55 L 100,70 V 45" />
        </g>
        <text x="118" y="45" fontWeight="900" fontSize="22" letterSpacing="2" fill="currentColor">MARQUES</text>
        <text x="118" y="62" fontWeight="700" fontSize="9" letterSpacing="1.5" fill="currentColor">ADM. JUDICIAIS</text>
      </svg>
    )
  },
  {
    id: "consorciotriangulo",
    name: "Consórcio Triângulo",
    renderLogo: () => (
      <svg viewBox="0 0 250 85" className="h-9 sm:h-11 md:h-12 w-auto fill-current">
        <polygon points="35,10 58,52 12,52" stroke="currentColor" strokeWidth="3" fill="currentColor" />
        <polygon points="58,28 78,68 38,68" stroke="currentColor" strokeWidth="3" fill="none" />
        <polygon points="18,38 38,78 0,78" stroke="currentColor" strokeWidth="3" fill="currentColor" />
        <text x="92" y="36" fontWeight="600" fontSize="14" fill="currentColor">Consórcio</text>
        <text x="92" y="68" fontWeight="900" fontSize="28" letterSpacing="-0.5" fill="currentColor">Triângulo</text>
      </svg>
    )
  },
  {
    id: "lavathru",
    name: "Lava Thru",
    renderLogo: () => (
      <svg viewBox="0 0 200 80" className="h-9 sm:h-11 md:h-12 w-auto fill-current">
        <path d="M15 40 C25 25, 35 25, 45 40 C55 55, 65 55, 75 40" stroke="currentColor" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M15 52 C25 37, 35 37, 45 52 C55 67, 65 67, 75 52" stroke="currentColor" strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.6" />
        <circle cx="45" cy="20" r="5" fill="currentColor" />
        <text x="88" y="48" fontWeight="900" fontSize="22" letterSpacing="1.5" fill="currentColor">LAVA THRU</text>
        <text x="88" y="62" fontWeight="700" fontSize="8" letterSpacing="3" fill="currentColor">EXPRESS WASH</text>
      </svg>
    )
  },
  {
    id: "dompizza",
    name: "Dom Pizza",
    renderLogo: () => (
      <svg viewBox="0 0 190 80" className="h-9 sm:h-11 md:h-12 w-auto fill-current">
        <polygon points="30,12 55,62 5,62" stroke="currentColor" strokeWidth="4" fill="none" strokeLinejoin="round" />
        <circle cx="30" cy="32" r="4" fill="currentColor" />
        <circle cx="22" cy="46" r="3" fill="currentColor" />
        <circle cx="38" cy="46" r="3" fill="currentColor" />
        <text x="68" y="44" fontWeight="900" fontSize="24" letterSpacing="2" fill="currentColor">DOM PIZZA</text>
        <text x="68" y="60" fontWeight="700" fontSize="9" letterSpacing="4" fill="currentColor">PIZZARIA</text>
      </svg>
    )
  },
  {
    id: "colegioplatao",
    name: "Colégio Platão",
    renderLogo: () => (
      <svg viewBox="0 0 220 80" className="h-9 sm:h-11 md:h-12 w-auto fill-current">
        <path d="M10 25 L40 10 L70 25 L40 40 Z" stroke="currentColor" strokeWidth="4" fill="none" strokeLinejoin="round" />
        <path d="M20 32 V52 C20 56 60 56 60 52 V32" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
        <text x="82" y="36" fontWeight="700" fontSize="12" letterSpacing="2" fill="currentColor">COLÉGIO</text>
        <text x="82" y="62" fontWeight="900" fontSize="26" letterSpacing="1" fill="currentColor">PLATÃO</text>
      </svg>
    )
  },
  {
    id: "etzme",
    name: "ETZME",
    renderLogo: () => (
      <svg viewBox="0 0 170 80" className="h-9 sm:h-11 md:h-12 w-auto fill-current">
        <rect x="10" y="15" width="48" height="48" rx="8" stroke="currentColor" strokeWidth="4" fill="none" />
        <path d="M22 39 L34 27 L46 39 L34 51 Z" fill="currentColor" />
        <text x="70" y="52" fontWeight="900" fontSize="30" letterSpacing="4" fill="currentColor">ETZME</text>
      </svg>
    )
  },
  {
    id: "mundodofutsal",
    name: "Mundo do Futsal",
    renderLogo: () => (
      <svg viewBox="0 0 230 80" className="h-9 sm:h-11 md:h-12 w-auto fill-current">
        <circle cx="35" cy="40" r="26" stroke="currentColor" strokeWidth="4" fill="none" />
        <polygon points="35,24 45,31 41,43 29,43 25,31" fill="currentColor" />
        <text x="72" y="36" fontWeight="700" fontSize="11" letterSpacing="2" fill="currentColor">MUNDO DO</text>
        <text x="72" y="62" fontWeight="900" fontSize="25" letterSpacing="2" fill="currentColor">FUTSAL</text>
      </svg>
    )
  },
  {
    id: "armazemdalimpeza",
    name: "Armazém da Limpeza",
    renderLogo: () => (
      <svg viewBox="0 0 250 80" className="h-9 sm:h-11 md:h-12 w-auto fill-current">
        <path d="M35 12 C35 12 55 35 55 48 C55 59 46 68 35 68 C24 68 15 59 15 48 C15 35 35 12 35 12 Z" stroke="currentColor" strokeWidth="4" fill="none" strokeLinejoin="round" />
        <circle cx="30" cy="46" r="4" fill="currentColor" />
        <text x="66" y="38" fontWeight="800" fontSize="16" letterSpacing="1" fill="currentColor">ARMAZÉM</text>
        <text x="66" y="58" fontWeight="600" fontSize="12" letterSpacing="3" fill="currentColor">DA LIMPEZA</text>
      </svg>
    )
  },
  {
    id: "clzo",
    name: "CLZO",
    renderLogo: () => (
      <svg viewBox="0 0 150 80" className="h-9 sm:h-11 md:h-12 w-auto fill-current">
        <polygon points="30,12 52,24 52,48 30,60 8,48 8,24" stroke="currentColor" strokeWidth="4" fill="none" strokeLinejoin="round" />
        <text x="62" y="52" fontWeight="900" fontSize="32" letterSpacing="4" fill="currentColor">CLZO</text>
      </svg>
    )
  },
  {
    id: "culturasteam",
    name: "Cultura Steam",
    renderLogo: () => (
      <svg viewBox="0 0 220 80" className="h-9 sm:h-11 md:h-12 w-auto fill-current">
        <ellipse cx="35" cy="40" rx="24" ry="10" transform="rotate(-30 35 40)" stroke="currentColor" strokeWidth="3" fill="none" />
        <ellipse cx="35" cy="40" rx="24" ry="10" transform="rotate(30 35 40)" stroke="currentColor" strokeWidth="3" fill="none" />
        <circle cx="35" cy="40" r="5" fill="currentColor" />
        <text x="70" y="36" fontWeight="700" fontSize="12" letterSpacing="2" fill="currentColor">CULTURA</text>
        <text x="70" y="62" fontWeight="900" fontSize="25" letterSpacing="2" fill="currentColor">STEAM</text>
      </svg>
    )
  },
  {
    id: "facilitapass",
    name: "Facilita Pass",
    renderLogo: () => (
      <svg viewBox="0 0 210 80" className="h-9 sm:h-11 md:h-12 w-auto fill-current">
        <rect x="10" y="20" width="48" height="36" rx="6" stroke="currentColor" strokeWidth="4" fill="none" />
        <line x1="10" y1="32" x2="58" y2="32" stroke="currentColor" strokeWidth="5" />
        <text x="68" y="38" fontWeight="800" fontSize="16" letterSpacing="1" fill="currentColor">FACILITA</text>
        <text x="68" y="58" fontWeight="900" fontSize="18" letterSpacing="3" fill="currentColor">PASS</text>
      </svg>
    )
  },
  {
    id: "grupotitanium",
    name: "Grupo Titanium",
    renderLogo: () => (
      <svg viewBox="0 0 230 80" className="h-9 sm:h-11 md:h-12 w-auto fill-current">
        <polygon points="12,18 52,18 32,58" stroke="currentColor" strokeWidth="4" fill="none" strokeLinejoin="round" />
        <line x1="22" y1="30" x2="42" y2="30" stroke="currentColor" strokeWidth="4" />
        <text x="62" y="36" fontWeight="700" fontSize="11" letterSpacing="3" fill="currentColor">GRUPO</text>
        <text x="62" y="62" fontWeight="900" fontSize="24" letterSpacing="2" fill="currentColor">TITANIUM</text>
      </svg>
    )
  },
  {
    id: "rollsfood",
    name: "Rolls Food",
    renderLogo: () => (
      <svg viewBox="0 0 190 80" className="h-9 sm:h-11 md:h-12 w-auto fill-current">
        <circle cx="32" cy="40" r="22" stroke="currentColor" strokeWidth="4" fill="none" />
        <path d="M22 40 Q 32 26 42 40 Q 32 54 22 40 Z" fill="currentColor" opacity="0.7" />
        <text x="64" y="38" fontWeight="900" fontSize="22" letterSpacing="2" fill="currentColor">ROLLS</text>
        <text x="64" y="58" fontWeight="800" fontSize="16" letterSpacing="4" fill="currentColor">FOOD</text>
      </svg>
    )
  }
];

export function PartnersMarquee() {
  return (
    <section className="py-12 sm:py-16 bg-dark-900 border-y border-white/5 overflow-hidden flex flex-col items-center" aria-label="Nossos parceiros">
      <p className="text-gold-500/70 font-bold text-xs sm:text-sm tracking-[0.25em] uppercase mb-8 sm:mb-12 text-center px-4">
        Empresas parceiras que já aceleramos
      </p>
      
      <div className="relative w-full flex overflow-hidden">
        {/* Subtle Fade Edges */}
        <div className="absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-dark-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-dark-900 to-transparent z-10 pointer-events-none" />
        
        <motion.div 
          animate={{ x: ["0%", "-33.333333333333%"] }} 
          transition={{ ease: "linear", duration: 50, repeat: Infinity }}
          className="flex whitespace-nowrap items-center w-max"
          aria-hidden="true"
        >
          {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((partner, idx) => (
            <motion.div 
              key={`${partner.id}-${idx}`}
              whileHover={{ scale: 1.08, y: -2 }}
              className="mx-6 sm:mx-10 md:mx-12 text-white/50 hover:text-white transition-all duration-300 opacity-60 hover:opacity-100 flex items-center justify-center cursor-default select-none filter drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]"
            >
              {partner.renderLogo()}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
