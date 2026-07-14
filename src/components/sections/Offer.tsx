import React from "react";
import { motion } from "motion/react";
import { Milestone, Sliders, Cpu, Layers, Target, TrendingUp } from "lucide-react";

export function Offer() {
  const differentiators = [
    {
      icon: <Milestone className="w-5 h-5 text-gold-500" />,
      title: "25 anos de estrada real",
      desc: "Desde 2001 no campo, com problemas de verdade e resultados verificáveis."
    },
    {
      icon: <Sliders className="w-5 h-5 text-gold-500" />,
      title: "Personalização máxima",
      desc: "Temos método, não template. Preservamos sua cultura, identidade e valores."
    },
    {
      icon: <Cpu className="w-5 h-5 text-gold-500" />,
      title: "IA de forma prática",
      desc: "Tecnologia que reduz retrabalho, automatiza processos e apoia decisões."
    },
    {
      icon: <Layers className="w-5 h-5 text-gold-500" />,
      title: "Visão: negócio + gente",
      desc: "Unimos estratégia, expansão e comportamento. Na prática, andam juntos."
    }
  ];

  return (
    <section className="py-24 relative bg-dark-900 overflow-hidden border-t border-white/5" aria-labelledby="offer-heading">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-[30%] right-[10%] w-[400px] h-[400px] bg-gold-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Title & Key Stats */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold text-gold-500 uppercase tracking-widest block">Diferenciais</span>
              <h2 id="offer-heading" className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
                Por que escolher a <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">R.Guirado?</span>
              </h2>
            </div>
            
            <p className="text-lg text-gray-400 font-light leading-relaxed">
              Falamos a língua de quem tem folha para pagar no dia 5 e sonho grande na cabeça. Unimos experiência real com tecnologia avançada.
            </p>

            {/* Consolidating SocialProof Statistics here */}
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/5">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-gold-500">
                  <Target className="w-5 h-5" />
                  <span className="text-3xl font-black text-white">750+</span>
                </div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Empresas estruturadas</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-gold-500">
                  <TrendingUp className="w-5 h-5" />
                  <span className="text-3xl font-black text-white">1000+</span>
                </div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Unidades abertas</p>
              </div>
            </div>
          </div>

          {/* Right Column: 2x2 Grid of Differentiators */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {differentiators.map((diff, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-dark-800 border border-white/5 hover:border-gold-500/20 transition-all shadow-lg flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 bg-dark-900 border border-gold-500/10 rounded-xl flex items-center justify-center shadow-inner">
                    {diff.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">{diff.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{diff.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
