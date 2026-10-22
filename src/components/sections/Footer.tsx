import React from "react";
import { Logo } from "../ui/BrandLogo";
import { Button } from "../ui/Button";
import { RevealText } from "../ui/RevealText";
import { Arrow, InstagramGlyph, LinkedinGlyph } from "../ui/Icons";
import { scrollToForm, scrollToId, scrollToTop } from "../../lib/scroll";
import { INSTAGRAM_URL, LINKEDIN_URL } from "../../lib/constants";

const links = [
  { id: "pilares", label: "Pilares" },
  { id: "metodo", label: "Método ALTA" },
  { id: "cases", label: "Cases" },
  { id: "sobre", label: "Quem somos" },
  { id: "contato", label: "Contato" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-dark-950 pb-10 pt-24">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mb-20 flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <RevealText
            as="h2"
            className="text-4xl font-black leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-7xl"
            lines={[{ text: "Vamos dar alta" }, { text: "para sua empresa?", className: "text-gold-500" }]}
          />
          <Button onClick={scrollToForm} className="shrink-0">
            Quero um diagnóstico
          </Button>
        </div>

        <div className="grid gap-10 border-t border-white/15 pt-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Logo className="mb-5" />
            <p className="max-w-xs text-sm leading-relaxed text-gray-400">
              Atendimento presencial em Maringá e região · Projetos remotos em todo o Brasil
            </p>
          </div>

          <nav aria-label="Links do rodapé">
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">Navegação</p>
            <ul className="space-y-2.5">
              {links.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToId(l.id);
                    }}
                    className="text-sm text-gray-300 transition-colors hover:text-gold-400"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">Redes</p>
            <div className="flex gap-3">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram da R.Guirado" className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-gray-300 transition-colors hover:border-gold-500 hover:bg-gold-500 hover:text-dark-950">
                <InstagramGlyph className="h-5 w-5" />
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Ricardo Guirado" className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-gray-300 transition-colors hover:border-gold-500 hover:bg-gold-500 hover:text-dark-950">
                <LinkedinGlyph className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-start justify-between gap-6 border-t border-white/15 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} R.Guirado Consultoria. Todos os direitos reservados.</p>
          <button onClick={() => scrollToTop()} className="group flex cursor-pointer items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gray-400 transition-colors hover:text-gold-400">
            Voltar ao topo
            <Arrow className="h-2.5 w-5 -rotate-90 transition-transform duration-300 group-hover:-translate-y-1" />
          </button>
        </div>
      </div>

      {/* Oversized wordmark that peeks in at the bottom */}
      <p aria-hidden="true" className="pointer-events-none mt-10 select-none text-center text-[22vw] font-black lowercase leading-[0.75] tracking-[-0.06em] text-white/[0.04]">
        guirado
      </p>
    </footer>
  );
}
