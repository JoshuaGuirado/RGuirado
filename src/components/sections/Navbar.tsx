import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { GlassButton } from "../ui/GlassButton";
import { Logo } from "../ui/BrandLogo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    setMobileMenuOpen(false);
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { href: "#pilares", label: "Pilares" },
    { href: "#metodo", label: "Método" },
    { href: "#sobre", label: "Sobre" },
    { href: "#faq", label: "FAQ" }
  ];

  return (
    <>
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gold-500 origin-left z-[60]" style={{ scaleX }} />
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled || mobileMenuOpen ? "bg-dark-900/95 backdrop-blur-xl border-b border-white/5 py-3 shadow-2xl" : "bg-transparent py-6"}`}
        aria-label="Navegação principal"
      >
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between relative">
          
          <motion.a 
            href="#"
            whileHover={{ scale: 1.05 }} 
            className="flex items-center gap-3 cursor-pointer z-10" 
            onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); window.scrollTo(0,0); }}
            aria-label="Voltar para o topo"
          >
            <Logo />
          </motion.a>
          
          {/* Menu Superior de Navegação */}
          <div className="hidden md:flex items-center gap-8 z-10">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-gold-500 transition-colors">
                {link.label}
              </a>
            ))}
          </div>
          
          <div className="hidden md:block z-10">
            <GlassButton onClick={scrollToForm} className="px-6 py-2.5 text-[0.85rem] border border-white/10" aria-label="Botão para falar com especialista">
              Falar com Especialista
            </GlassButton>
          </div>

          {/* Botão Hambúrguer Mobile */}
          <button 
            className="md:hidden z-50 text-gray-300 hover:text-gold-500 transition-colors p-2 cursor-pointer focus:outline-none bg-transparent border-0"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu Mobile Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute top-full left-0 right-0 bg-dark-900 border-b border-white/5 shadow-2xl overflow-hidden md:hidden"
            >
              <div className="flex flex-col px-6 py-8 space-y-6">
                {navLinks.map((link) => (
                  <a 
                    key={link.href} 
                    href={link.href} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-bold uppercase tracking-wider text-gray-300 hover:text-gold-500 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <GlassButton 
                  onClick={scrollToForm} 
                  className="w-full py-4 text-sm border border-white/10 text-center"
                  aria-label="Botão para falar com especialista mobile"
                >
                  Falar com Especialista
                </GlassButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
