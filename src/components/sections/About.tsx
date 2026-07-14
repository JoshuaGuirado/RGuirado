import React from "react";
import { motion } from "motion/react";
import { Sparkles, Shield, Cpu } from "lucide-react";
import { Button } from "../ui/Button";

export function About() {
  const scrollToTeam = () => document.getElementById("time")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="sobre" className="py-32 bg-dark-900 relative overflow-hidden" aria-labelledby="about-heading">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-gold-500/5 blur-[120px] rounded-full" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Heading and Highlight */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold text-gold-500 uppercase tracking-widest block">Sobre nós</span>
              <h2 id="about-heading" className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
                Consultoria de <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">dono para dono.</span>
              </h2>
            </div>
            
            <p className="text-xl text-gray-300 font-light leading-relaxed border-l-2 border-gold-500/30 pl-6">
              Crescer não é fazer mais do mesmo com mais afinco. É reinventar o que já não serve — antes que o mercado faça isso por você.
            </p>

            <div className="pt-4">
              <Button onClick={scrollToTeam} className="text-md py-4 px-8 w-full sm:w-auto" aria-label="Conheça Ricardo Guirado - rolar para equipe">
                Conheça Ricardo Guirado
              </Button>
            </div>
          </div>
          
          {/* Right Column: Detailed copy cards */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-lg text-gray-400 leading-relaxed font-light"
            >
              <p>
                Desde 2001, Ricardo Guirado e sua equipe acompanham empresários brasileiros exatamente no ponto de virada: quando o negócio pede um novo patamar e os métodos que trouxeram até aqui não levam adiante.
              </p>
              <p>
                São mais de 25 anos estruturando gestão, formatando redes de franquias e desenvolvendo lideranças em empresas de pequeno e médio porte — a maioria delas no Paraná, muitas delas hoje operando em escala nacional.
              </p>
            </motion.div>

            {/* Differentiator Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="p-6 bg-dark-800 border border-white/5 rounded-2xl space-y-3">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center border border-gold-500/20">
                  <Shield className="w-5 h-5 text-gold-500" />
                </div>
                <h4 className="font-bold text-white tracking-tight">Sem "copiar e colar"</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Cada empresa tem uma cultura e uma jornada. Nossa metodologia parte da sua realidade, não de um template genérico.
                </p>
              </div>

              <div className="p-6 bg-dark-800 border border-white/5 rounded-2xl space-y-3">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center border border-gold-500/20">
                  <Cpu className="w-5 h-5 text-gold-500" />
                </div>
                <h4 className="font-bold text-white tracking-tight">Inteligência Artificial Aplicada</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Somamos automações, agentes personalizados e decisões baseadas em dados reais à gestão tradicional.
                </p>
              </div>
            </div>

            <p className="text-gold-500 font-bold text-lg tracking-wide uppercase pt-4">
              Experiência de quem já viu. Tecnologia de quem olha pra frente.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
