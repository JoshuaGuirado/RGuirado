import React from "react";
import { motion } from "motion/react";
import { AlertCircle, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";

export function Problem() {
  const scrollToForm = () => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });

  const painPoints = [
    "Tudo depende de você — e nada anda quando você não está.",
    "A equipe entrega, mas nunca com a qualidade ou autonomia da matriz.",
    "O faturamento cresce, mas a margem de lucro não acompanha.",
    "Sensação de trabalhar mais que todos e estar sempre correndo atrás."
  ];

  const targetAudience = [
    "PMEs que cresceram no esforço e travaram no limite operacional.",
    "Profissionais liberais (clínicas, escritórios) querendo escalar.",
    "Empresários com modelo validado buscando formatar franquias.",
    "Franqueadoras precisando estruturar processos e destravar vendas."
  ];

  return (
    <section id="recursos" className="py-24 bg-dark-900 relative overflow-hidden border-t border-white/5" aria-labelledby="problem-heading">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-gold-500/5 blur-[120px] rounded-full" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-stretch">
          
          {/* Left Block: Pain Points (O Momento) */}
          <div className="bg-gradient-to-br from-dark-800 to-dark-900 border border-gold-500/10 rounded-[2rem] p-8 md:p-10 shadow-xl flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold text-red-400 uppercase tracking-widest block mb-2">O Desafio</span>
                <h3 id="problem-heading" className="text-3xl font-black tracking-tight text-white">
                  Falta de Estrutura, não de esforço.
                </h3>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed font-light">
                O negócio deu certo no improviso competente. Mas você chegou naquele gargalo crítico onde tudo depende exclusivamente da sua presença física:
              </p>
              
              <div className="space-y-4 pt-2">
                {painPoints.map((point, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <p className="text-gray-300 text-md leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="pt-8 border-t border-white/5 mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Identificou-se com dois pontos?</span>
              <Button onClick={scrollToForm} className="text-xs py-3 px-6" aria-label="Vamos conversar">
                Falar com Especialista
              </Button>
            </div>
          </div>
          
          {/* Right Block: Target (Para quem é) */}
          <div className="bg-gradient-to-br from-dark-800 to-dark-900 border border-gold-500/10 rounded-[2rem] p-8 md:p-10 shadow-xl flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold text-gold-500 uppercase tracking-widest block mb-2">Público-Alvo</span>
                <h3 className="text-3xl font-black tracking-tight text-white">
                  Para quem é a R.Guirado?
                </h3>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed font-light">
                Estruturamos e preparamos negócios em diferentes etapas de maturidade corporativa para alcançarem a escalabilidade com segurança:
              </p>
              
              <div className="space-y-4 pt-2">
                {targetAudience.map((target, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                    <p className="text-gray-300 text-md leading-relaxed">{target}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-white/5 mt-6">
              <p className="text-xs text-gray-400 font-medium">
                Desenvolvemos o empresário para que a empresa performe com governança e autonomia.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
