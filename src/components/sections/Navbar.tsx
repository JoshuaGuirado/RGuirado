import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { GlassButton } from "../ui/GlassButton";
import { Logo } from "../ui/BrandLogo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gold-500 origin-left z-[60]" style={{ scaleX }} />
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-dark-900/90 backdrop-blur-xl border-b border-white/5 py-3 shadow-2xl" : "bg-transparent py-6"}`}
        aria-label="Navegação principal"
      >
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between relative">
          
          <motion.a 
            href="#"
            whileHover={{ scale: 1.05 }} 
            className="flex items-center gap-3 cursor-pointer z-10" 
            onClick={(e) => { e.preventDefault(); window.scrollTo(0,0); }}
            aria-label="Voltar para o topo"
          >
            <Logo />
          </motion.a>
          
          {/* Menu Superior de Navegação */}
          <div className="hidden md:flex items-center gap-8 z-10">
            <a href="#pilares" className="text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-gold-500 transition-colors">Pilares</a>
            <a href="#metodo" className="text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-gold-500 transition-colors">Método</a>
            <a href="#sobre" className="text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-gold-500 transition-colors">Sobre</a>
            <a href="#faq" className="text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-gold-500 transition-colors">FAQ</a>
          </div>
          
          <div className="hidden md:block z-10">
            <GlassButton onClick={scrollToForm} className="px-6 py-2.5 text-[0.85rem] border border-white/10" aria-label="Botão para falar com especialista">
              Falar com Especialista
            </GlassButton>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
