import React from "react";
import { Instagram, Linkedin, MapPin } from "lucide-react";
import { Logo } from "../ui/BrandLogo";

export function Footer() {
  return (
    <footer className="bg-dark-900 pt-16 pb-12 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <div className="flex items-center gap-3 mb-8 cursor-pointer" onClick={(e) => { e.preventDefault(); window.scrollTo(0,0); }} role="button" aria-label="Voltar para o topo">
          <Logo />
        </div>
        
        <nav className="flex flex-wrap justify-center gap-6 text-gray-400 font-medium mb-10" aria-label="Links do rodapé">
          <a href="#recursos" className="hover:text-gold-500 transition-colors">Método</a>
          <a href="#resultados" className="hover:text-gold-500 transition-colors">Resultados</a>
          <a href="#time" className="hover:text-gold-500 transition-colors">Time Técnico</a>
          <a href="#contato" className="hover:text-gold-500 transition-colors px-3 py-1 bg-white/5 rounded-full border border-white/5">Consultoria de Expansão</a>
        </nav>

        <div className="flex items-center gap-4 mb-8" aria-label="Redes Sociais">
          <a href="https://www.instagram.com/rguiradofranquias/" target="_blank" rel="noopener noreferrer" aria-label="Siga-nos no Instagram" className="w-12 h-12 rounded-full bg-dark-800 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gold-500/20 hover:border-gold-500/50 transition-all shadow-lg hover:shadow-gold-500/20">
            <Instagram className="w-5 h-5" aria-hidden="true" />
          </a>
          <a href="https://www.linkedin.com/in/ricardoguiradofranquias/" target="_blank" rel="noopener noreferrer" aria-label="Siga-nos no LinkedIn" className="w-12 h-12 rounded-full bg-dark-800 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-500/20 hover:border-blue-500/50 transition-all shadow-lg hover:shadow-blue-500/20">
            <Linkedin className="w-5 h-5" aria-hidden="true" />
          </a>
        </div>

        <div className="flex items-center gap-2 mb-10 text-gray-400/80 font-medium text-sm bg-white/5 py-2 px-4 rounded-full border border-white/5 cursor-default hover:border-gold-500/30 hover:text-gray-300 transition-colors">
          <MapPin className="w-4 h-4 text-gold-500" aria-hidden="true" />
          <span>Atendimento presencial em Maringá e região metropolitana • Projetos remotos em todo o Brasil</span>
        </div>
        
        <p className="text-center text-sm font-medium text-gray-600">
          © {new Date().getFullYear()} RGuirado Consultoria. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
