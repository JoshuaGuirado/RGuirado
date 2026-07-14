import React from "react";
import { motion } from "motion/react";
import { AlertCircle, ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";

export function Problem() {
  const scrollToForm = () => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });

  const painPoints = [
    "Tudo depende de você — e por isso nada anda quando você não está.",
    "A equipe entrega, mas nunca do jeito que você faria.",
    "Você sabe que dá pra crescer, só não sabe se é abrindo filial, franqueando, contratando ou reorganizando o que já existe.",
    "O faturamento sobe, a margem não acompanha, e o motivo nunca fica claro.",
    "Você trabalha mais do que qualquer funcionário e ganha a sensação de estar sempre correndo atrás."
  ];

  return (
    <section id="recursos" className="py-32 bg-dark-900 relative overflow-hidden" aria-labelledby="problem-heading">
      {/* Safe Background Orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-gold-500/5 blur-[120px] rounded-full" />
      </div>
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Heading and Context */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold text-gold-500 uppercase tracking-widest block">O Desafio</span>
              <h2 id="problem-heading" className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
                Você não tem um problema de esforço.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Tem um problema de estrutura.</span>
              </h2>
            </div>
            
            <p className="text-lg text-gray-400 leading-relaxed font-light">
              O negócio deu certo. Cresceu no boca a boca, na sua energia, no seu improviso competente. E agora chegou naquele ponto limitante.
            </p>

            <div className="space-y-4 border-l-2 border-gold-500/30 pl-6">
              <p className="text-md text-gray-300 font-bold uppercase tracking-wider">
                Se você se reconheceu em dois desses pontos, o problema não é falta de trabalho. É falta de método.
              </p>
            </div>

            <div className="pt-4">
              <Button onClick={scrollToForm} className="text-md py-4 px-8 w-full sm:w-auto" aria-label="Vamos conversar sobre o seu caso - rolar para contato">
                Vamos conversar sobre o seu caso
              </Button>
            </div>
          </div>
          
          {/* Right Column: Pain Points Card */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-gradient-to-br from-dark-800 to-dark-900 border border-white/5 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-[40px] pointer-events-none" />
              
              <div className="space-y-8 relative z-10">
                {painPoints.map((point, idx) => (
                  <div key={idx} className="flex gap-5 items-start">
                    <div className="w-8 h-8 rounded-xl bg-gold-500/10 flex items-center justify-center shrink-0 mt-0.5 border border-gold-500/20">
                      <AlertCircle className="w-4 h-4 text-gold-500" />
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
