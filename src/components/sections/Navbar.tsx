import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";
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
  const openRef = useRef(open);
  openRef.current = open;
  const { scrollY, scrollYProgress } = useScroll();

  // Hide while scrolling down, reveal as soon as the user scrolls up.
  // React skips the re-render when a setter receives the value it already has.
  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 40);
    if (y > 400 && y > prev + 4 && !openRef.current) setHidden(true);
    else if (y < prev - 4 || y <= 400) setHidden(false);
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
      <motion.div className="fixed inset-x-0 top-0 z-[80] h-[2px] origin-left bg-gold-500" style={{ scaleX: scrollYProgress }} />

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
        className={`fixed inset-x-0 top-0 z-[60] transition-[background-color,border-color] duration-500 ${
          scrolled || open ? "border-b border-white/10 bg-dark-950" : "border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-6" aria-label="Navegação principal">
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

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    go(link.id);
                  }}
                  className={`relative block py-2 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors ${
                    active === link.id ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.label}
                  {active === link.id && (
                    <motion.span layoutId="nav-underline" className="absolute inset-x-0 -bottom-0.5 h-px bg-gold-500" transition={{ type: "spring", stiffness: 380, damping: 34 }} />
                  )}
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
            className="relative z-10 flex h-11 w-11 cursor-pointer flex-col items-center justify-center gap-[7px] md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            <span className={`block h-[1.5px] w-6 bg-white transition-transform duration-300 ${open ? "translate-y-[4.25px] rotate-45" : ""}`} />
            <span className={`block h-[1.5px] w-6 bg-white transition-transform duration-300 ${open ? "-translate-y-[4.25px] -rotate-45" : ""}`} />
          </button>
        </nav>
      </motion.header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
            className="fixed inset-0 z-[55] flex flex-col justify-center bg-dark-950 px-6 md:hidden"
          >
            <ul className="border-t border-white/10">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.05, duration: 0.6, ease: EASE_OUT_EXPO }}
                  className="border-b border-white/10"
                >
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      go(link.id);
                    }}
                    className="flex items-baseline justify-between py-4 text-4xl font-black tracking-tight text-white"
                  >
                    {link.label}
                    <span className="text-xs font-bold tabular-nums text-gold-500">0{i + 1}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }} className="mt-10">
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
