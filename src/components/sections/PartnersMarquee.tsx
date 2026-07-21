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
    name: "Gela Boca",
    renderLogo: () => (
      <div className="flex items-center gap-2.5">
        <svg viewBox="0 0 100 60" className="h-6 w-auto fill-current" aria-hidden="true">
          <path d="M 15,35 Q 35,15 50,30 Q 65,15 85,35 Q 50,55 15,35 Z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          <path d="M 40,25 Q 50,18 60,25" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
        <span className="font-heading font-extrabold text-sm sm:text-base tracking-tight lowercase">gelaboca</span>
      </div>
    )
  },
  {
    id: "lavathru",
    name: "Lava Thru",
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 40 40" className="h-6 w-6 stroke-current fill-none" strokeWidth="2.5">
          <path d="M8 20 C12 14, 16 14, 20 20 C24 26, 28 26, 32 20" strokeLinecap="round" />
          <path d="M8 26 C12 20, 16 20, 20 26 C24 32, 28 32, 32 26" strokeLinecap="round" opacity="0.6" />
          <circle cx="20" cy="10" r="3" fill="currentColor" />
        </svg>
        <span className="font-heading font-black text-xs sm:text-sm tracking-wider uppercase">LAVA THRU</span>
      </div>
    )
  },
  {
    id: "dompizza",
    name: "Dom Pizza",
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 40 40" className="h-6 w-6 stroke-current fill-none" strokeWidth="2.5">
          <polygon points="20,6 34,32 6,32" strokeLinejoin="round" />
          <circle cx="20" cy="18" r="2.5" fill="currentColor" />
          <circle cx="15" cy="26" r="2" fill="currentColor" />
          <circle cx="25" cy="26" r="2" fill="currentColor" />
        </svg>
        <span className="font-heading font-black text-xs sm:text-sm tracking-widest uppercase">DOM PIZZA</span>
      </div>
    )
  },
  {
    id: "colegioplatao",
    name: "Colégio Platão",
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 40 40" className="h-6 w-6 stroke-current fill-none" strokeWidth="2.5">
          <path d="M6 14 L20 6 L34 14 L20 22 Z" strokeLinejoin="round" />
          <path d="M12 18 V28 C12 30 28 30 28 28 V18" strokeLinecap="round" />
          <line x1="34" y1="14" x2="34" y2="26" strokeLinecap="round" />
        </svg>
        <span className="font-heading font-extrabold text-xs sm:text-sm tracking-wide uppercase">COLÉGIO PLATÃO</span>
      </div>
    )
  },
  {
    id: "etzme",
    name: "ETZME",
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 40 40" className="h-6 w-6 stroke-current fill-none" strokeWidth="2.5">
          <rect x="8" y="8" width="24" height="24" rx="4" strokeLinejoin="round" />
          <path d="M14 20 L20 14 L26 20 L20 26 Z" fill="currentColor" />
        </svg>
        <span className="font-heading font-black text-sm sm:text-base tracking-widest uppercase">ETZME</span>
      </div>
    )
  },
  {
    id: "mundodofutsal",
    name: "Mundo do Futsal",
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 40 40" className="h-6 w-6 stroke-current fill-none" strokeWidth="2.5">
          <circle cx="20" cy="20" r="14" />
          <polygon points="20,12 25,16 23,22 17,22 15,16" fill="currentColor" />
          <line x1="20" y1="6" x2="20" y2="12" />
          <line x1="34" y1="20" x2="25" y2="22" />
          <line x1="6" y1="20" x2="15" y2="22" />
        </svg>
        <span className="font-heading font-black text-xs sm:text-sm tracking-wider uppercase">MUNDO DO FUTSAL</span>
      </div>
    )
  },
  {
    id: "armazemdalimpeza",
    name: "Armazém da Limpeza",
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 40 40" className="h-6 w-6 stroke-current fill-none" strokeWidth="2.5">
          <path d="M20 6 C20 6 30 18 30 25 C30 30.5 25.5 35 20 35 C14.5 35 10 30.5 10 25 C10 18 20 6 20 6 Z" strokeLinejoin="round" />
          <circle cx="17" cy="24" r="2" fill="currentColor" />
        </svg>
        <span className="font-heading font-bold text-xs sm:text-sm tracking-wide uppercase">ARMAZÉM DA LIMPEZA</span>
      </div>
    )
  },
  {
    id: "blessinternet",
    name: "Bless Internet",
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 40 40" className="h-6 w-6 stroke-current fill-none" strokeWidth="2.5">
          <path d="M8 12 A16 16 0 0 1 32 12" strokeLinecap="round" />
          <path d="M13 18 A10 10 0 0 1 27 18" strokeLinecap="round" />
          <path d="M18 24 A4 4 0 0 1 22 24" strokeLinecap="round" />
          <circle cx="20" cy="30" r="2.5" fill="currentColor" />
        </svg>
        <span className="font-heading font-extrabold text-xs sm:text-sm tracking-wider uppercase">BLESS INTERNET</span>
      </div>
    )
  },
  {
    id: "consorciotriangulo",
    name: "Consórcio Triângulo",
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 40 40" className="h-6 w-6 stroke-current fill-none" strokeWidth="2.5">
          <polygon points="20,6 35,32 5,32" strokeLinejoin="round" />
          <polygon points="20,14 28,28 12,28" strokeLinejoin="round" opacity="0.5" fill="currentColor" />
        </svg>
        <span className="font-heading font-bold text-xs sm:text-sm tracking-wider uppercase">CONSÓRCIO TRIÂNGULO</span>
      </div>
    )
  },
  {
    id: "marques",
    name: "Marques Adm. Judiciais",
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 40 40" className="h-6 w-6 stroke-current fill-none" strokeWidth="2.5">
          <path d="M8 32 V12 L20 24 L32 12 V32" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="5" y1="32" x2="35" y2="32" strokeLinecap="round" />
        </svg>
        <span className="font-heading font-extrabold text-xs sm:text-sm tracking-wide uppercase">MARQUES ADM. JUDICIAIS</span>
      </div>
    )
  },
  {
    id: "clzo",
    name: "CLZO",
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 40 40" className="h-6 w-6 stroke-current fill-none" strokeWidth="2.5">
          <polygon points="20,6 33,13 33,27 20,34 7,27 7,13" strokeLinejoin="round" />
          <line x1="20" y1="6" x2="20" y2="34" opacity="0.4" />
        </svg>
        <span className="font-heading font-black text-sm sm:text-base tracking-widest uppercase">CLZO</span>
      </div>
    )
  },
  {
    id: "culturasteam",
    name: "Cultura Steam",
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 40 40" className="h-6 w-6 stroke-current fill-none" strokeWidth="2.5">
          <ellipse cx="20" cy="20" rx="14" ry="6" transform="rotate(-30 20 20)" />
          <ellipse cx="20" cy="20" rx="14" ry="6" transform="rotate(30 20 20)" />
          <circle cx="20" cy="20" r="3" fill="currentColor" />
        </svg>
        <span className="font-heading font-black text-xs sm:text-sm tracking-wider uppercase">CULTURA STEAM</span>
      </div>
    )
  },
  {
    id: "facilitapass",
    name: "Facilita Pass",
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 40 40" className="h-6 w-6 stroke-current fill-none" strokeWidth="2.5">
          <rect x="6" y="10" width="28" height="20" rx="4" strokeLinejoin="round" />
          <line x1="6" y1="17" x2="34" y2="17" strokeWidth="3" fill="currentColor" />
          <circle cx="12" cy="24" r="2" fill="currentColor" />
        </svg>
        <span className="font-heading font-bold text-xs sm:text-sm tracking-wider uppercase">FACILITA PASS</span>
      </div>
    )
  },
  {
    id: "grupotitanium",
    name: "Grupo Titanium",
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 40 40" className="h-6 w-6 stroke-current fill-none" strokeWidth="2.5">
          <path d="M8 10 H32 L20 32 Z" strokeLinejoin="round" />
          <line x1="14" y1="18" x2="26" y2="18" />
        </svg>
        <span className="font-heading font-black text-xs sm:text-sm tracking-widest uppercase">GRUPO TITANIUM</span>
      </div>
    )
  },
  {
    id: "rollsfood",
    name: "Rolls Food",
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 40 40" className="h-6 w-6 stroke-current fill-none" strokeWidth="2.5">
          <circle cx="20" cy="20" r="13" />
          <path d="M14 20 Q 20 12 26 20 Q 20 28 14 20 Z" fill="currentColor" opacity="0.6" />
        </svg>
        <span className="font-heading font-black text-xs sm:text-sm tracking-wider uppercase">ROLLS FOOD</span>
      </div>
    )
  }
];

export function PartnersMarquee() {
  return (
    <section className="py-12 sm:py-16 bg-dark-900 border-y border-white/5 overflow-hidden flex flex-col items-center" aria-label="Nossos parceiros">
      <p className="text-gold-500/70 font-bold text-xs sm:text-sm tracking-[0.25em] uppercase mb-8 sm:mb-10 text-center px-4">
        Empresas parceiras que já aceleramos
      </p>
      
      <div className="relative w-full flex overflow-hidden">
        {/* Subtle Fade Edges */}
        <div className="absolute inset-y-0 left-0 w-20 sm:w-48 bg-gradient-to-r from-dark-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 sm:w-48 bg-gradient-to-l from-dark-900 to-transparent z-10 pointer-events-none" />
        
        <motion.div 
          animate={{ x: ["0%", "-33.333333333333%"] }} 
          transition={{ ease: "linear", duration: 60, repeat: Infinity }}
          className="flex whitespace-nowrap items-center w-max"
          aria-hidden="true"
        >
          {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((partner, idx) => (
            <motion.div 
              key={`${partner.id}-${idx}`}
              whileHover={{ scale: 1.08, y: -2 }}
              className="mx-3 sm:mx-5 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-gold-500/40 hover:bg-white/[0.06] transition-all duration-300 text-gray-400 hover:text-gold-400 flex items-center justify-center cursor-default select-none shadow-lg backdrop-blur-sm opacity-50 hover:opacity-100 grayscale hover:grayscale-0"
            >
              {partner.renderLogo()}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
