import React from "react";
import { Instagram, Linkedin, MapPin, ArrowUp } from "lucide-react";
import { Logo } from "../ui/BrandLogo";
import { Button } from "../ui/Button";
import { RevealText } from "../ui/RevealText";
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
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-dark-950 pb-10 pt-24">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-gold-500/[0.06] blur-[140px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mb-20 flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <RevealText
            as="h2"
            className="text-4xl font-black leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-7xl"
            lines={[{ text: "Vamos dar alta" }, { text: "para sua empresa?", className: "text-gold-gradient" }]}
          />
          <Button onClick={scrollToForm} className="shrink-0">
            Quero um diagnóstico
          </Button>
        </div>

        <div className="grid gap-10 border-t border-white/[0.07] pt-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Logo className="mb-5" />
            <p className="flex items-start gap-2 text-sm text-gray-400">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" aria-hidden="true" />
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
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram da R.Guirado" className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-gray-300 transition-all hover:-translate-y-1 hover:border-gold-500 hover:bg-gold-500 hover:text-dark-900">
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Ricardo Guirado" className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-gray-300 transition-all hover:-translate-y-1 hover:border-gold-500 hover:bg-gold-500 hover:text-dark-900">
                <Linkedin className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-start justify-between gap-6 border-t border-white/[0.07] pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} R.Guirado Consultoria. Todos os direitos reservados.</p>
          <button onClick={() => scrollToTop()} className="group flex cursor-pointer items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gray-400 transition-colors hover:text-gold-400">
            Voltar ao topo
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition-transform group-hover:-translate-y-1">
              <ArrowUp className="h-4 w-4" aria-hidden="true" />
            </span>
          </button>
        </div>
      </div>

      {/* Oversized wordmark that peeks in at the bottom */}
      <p aria-hidden="true" className="pointer-events-none mt-10 select-none text-center text-[22vw] font-black lowercase leading-[0.75] tracking-[-0.06em] text-white/[0.025]">
        guirado
      </p>
    </footer>
  );
}
