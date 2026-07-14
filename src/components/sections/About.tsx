import React from "react";
import { motion } from "motion/react";
import { Shield, Cpu, Linkedin, Instagram } from "lucide-react";
import { Button } from "../ui/Button";

export function About() {
  const scrollToForm = () => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });

  const team = [
    { 
      name: "Ricardo Guirado", 
      role: "Dono e Consultor Principal", 
      image: "/ricardo.jpg",
      linkedin: "https://www.linkedin.com/in/ricardoguiradofranquias/",
      instagram: "https://www.instagram.com/ricardoguirado_/"
    },
    { 
      name: "Gabriel Krüger", 
      role: "Gestor de Projetos", 
      image: "/gabriel.png",
      linkedin: "https://www.linkedin.com/in/gabriel-kruger/",
      instagram: "https://www.instagram.com/g.kruger97/"
    },
    { 
      name: "Joshua Guirado", 
      role: "Consultor de Processos", 
      image: "/joshua.png",
      linkedin: "https://www.linkedin.com/in/joshua-guirado-681108353/",
      instagram: "https://www.instagram.com/joshuafguirado/"
    }
  ];

  return (
    <section id="sobre" className="py-24 bg-dark-900 relative overflow-hidden border-t border-white/5" aria-labelledby="about-heading">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-gold-500/5 blur-[120px] rounded-full" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Story */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold text-gold-500 uppercase tracking-widest block">Quem Somos</span>
              <h2 id="about-heading" className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
                Consultoria de <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">dono para dono.</span>
              </h2>
            </div>
            
            <p className="text-lg text-gray-300 font-light leading-relaxed border-l-2 border-gold-500/30 pl-6">
              Crescer não é fazer mais do mesmo com mais afinco. É reinventar o que já não serve — antes que o mercado faça isso por você.
            </p>

            <div className="space-y-6 text-md text-gray-400 leading-relaxed font-light">
              <p>
                Desde 2001, Ricardo Guirado e sua equipe acompanham empresários brasileiros exatamente no ponto de virada: quando o negócio pede um novo patamar e os métodos que trouxeram até aqui não levam adiante.
              </p>
              <p>
                São mais de 25 anos estruturando gestão, formatando redes de franquias e desenvolvendo lideranças em empresas de pequeno e médio porte — operando em escala nacional a partir de Maringá/PR.
              </p>
            </div>

            {/* Differentiator Badges */}
            <div className="grid sm:grid-cols-2 gap-6 pt-2">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-lg bg-gold-500/10 flex items-center justify-center shrink-0 border border-gold-500/20 mt-1">
                  <Shield className="w-4 h-4 text-gold-500" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Sem copiar e colar</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">Nossa metodologia parte da sua realidade, não de templates genéricos.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-lg bg-gold-500/10 flex items-center justify-center shrink-0 border border-gold-500/20 mt-1">
                  <Cpu className="w-4 h-4 text-gold-500" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">IA Aplicada à Gestão</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">Automações e agentes de IA personalizados integrados ao seu fluxo real.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column: Compact Team Grid */}
          <div className="lg:col-span-6 space-y-6">
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest block text-center lg:text-left">
              Especialistas por trás da consultoria
            </h4>
            
            <div className="grid sm:grid-cols-3 gap-6">
              {team.map((member, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="bg-dark-800 rounded-2xl overflow-hidden border border-white/5 shadow-lg group flex flex-col"
                >
                  <div className="aspect-[4/5] overflow-hidden relative w-full bg-dark-900">
                    <img 
                      src={member.image} 
                      alt={`Foto de ${member.name}`} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 text-center bg-dark-800 border-t border-white/5 flex-grow flex flex-col justify-center items-center">
                    <h5 className="font-bold text-sm text-white leading-tight">{member.name}</h5>
                    <p className="text-[10px] text-gold-500 font-bold uppercase tracking-wider mt-1">{member.role}</p>
                    
                    <div className="flex items-center gap-3 mt-3 border-t border-white/5 pt-3 w-full justify-center">
                      <a 
                        href={member.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-400 hover:text-gold-500 transition-colors p-1"
                        aria-label={`LinkedIn de ${member.name}`}
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a 
                        href={member.instagram} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-400 hover:text-gold-500 transition-colors p-1"
                        aria-label={`Instagram de ${member.name}`}
                      >
                        <Instagram className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="pt-4 text-center lg:text-left">
              <Button onClick={scrollToForm} className="text-xs py-3 px-6" aria-label="Vamos conversar">
                Agendar Reunião com Ricardo
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
