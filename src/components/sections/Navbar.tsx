import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useMotionValueEvent, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/Button";
import { Logo } from "../ui/BrandLogo";
import { scrollToForm, scrollToId, scrollToTop } from "../../lib/scroll";
import { EASE_OUT_EXPO } from "../../lib/constants";

const navLinks = [
  { id: "pilares", label: "Pilares" },
  { id: "metodo", label: "Método" },
  { id: "cases", label: "Cases" },
  { id: "sobre", label: "Sobre" },
  { id: "faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  // Hide while scrolling down, reveal as soon as the user scrolls up.
  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 40);
    setHidden(y > 400 && y > prev + 4 && !open);
    if (y < prev - 4) setHidden(false);
  });

  // Highlight the link of the section currently in the middle of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    const ids = [...navLinks.map((l) => l.id), "inicio", "contato"];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <>
      <motion.div className="fixed inset-x-0 top-0 z-[80] h-[2px] origin-left bg-gradient-to-r from-gold-600 via-gold-400 to-gold-500" style={{ scaleX: progress }} />

      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: hidden ? -110 : 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
        className="fixed inset-x-0 top-0 z-[60] px-3 pt-3 sm:px-5 sm:pt-4"
      >
        <nav
          className={`mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full px-4 transition-all duration-500 sm:px-6 ${
            scrolled || open ? "border border-white/10 bg-dark-950/70 shadow-2xl shadow-black/30 backdrop-blur-xl" : "border border-transparent"
          }`}
          aria-label="Navegação principal"
        >
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setOpen(false);
              scrollToTop();
            }}
            className="relative z-10"
            aria-label="R.Guirado - voltar para o topo"
          >
            <Logo />
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    go(link.id);
                  }}
                  className={`relative block rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] transition-colors ${
                    active === link.id ? "text-dark-900" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {active === link.id && (
                    <motion.span layoutId="nav-pill" className="absolute inset-0 -z-10 rounded-full bg-gold-500" transition={{ type: "spring", stiffness: 380, damping: 32 }} />
                  )}
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Button onClick={scrollToForm} className="px-5 py-3 text-[10px]" aria-label="Falar com especialista">
              Falar com especialista
            </Button>
          </div>

          <button
            className="relative z-10 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span key={open ? "x" : "menu"} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </motion.span>
            </AnimatePresence>
          </button>
        </nav>
      </motion.header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "circle(0% at calc(100% - 44px) 44px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 44px) 44px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 44px) 44px)" }}
            transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
            className="fixed inset-0 z-[55] flex flex-col justify-center bg-dark-950/98 px-8 backdrop-blur-xl md:hidden"
          >
            <ul className="space-y-2">
              {navLinks.map((link, i) => (
                <motion.li key={link.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + i * 0.06, duration: 0.6, ease: EASE_OUT_EXPO }}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      go(link.id);
                    }}
                    className="flex items-baseline gap-4 py-2 text-4xl font-black tracking-tight text-white"
                  >
                    <span className="text-xs font-bold text-gold-500">0{i + 1}</span>
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }} className="mt-12">
              <Button onClick={() => go("contato")} className="w-full py-5">
                Quero um diagnóstico
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
