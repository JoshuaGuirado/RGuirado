import React from "react";
import { motion } from "motion/react";
import { Milestone, Sliders, Cpu, Layers, Landmark } from "lucide-react";

export function Offer() {
  const differentiators = [
    {
      icon: <Milestone className="w-8 h-8 text-gold-500" />,
      title: "25 anos de estrada real",
      desc: "Desde 2001 no campo, com empresas de verdade, problemas de verdade e resultados verificáveis."
    },
    {
      icon: <Sliders className="w-8 h-8 text-gold-500" />,
      title: "Personalização máxima",
      desc: "Não temos template. Temos método. Preservamos sua identidade, sua cultura e seus valores — e mudamos o que trava o crescimento."
    },
    {
      icon: <Cpu className="w-8 h-8 text-gold-500" />,
      title: "IA aplicada de forma prática",
      desc: "Tecnologia que reduz retrabalho, automatiza processo e melhora decisão. Não é modismo: é ferramenta."
    },
    {
      icon: <Layers className="w-8 h-8 text-gold-500" />,
      title: "Visão completa: negócio + gente",
      desc: "Unimos estratégia, expansão e comportamento humano na mesma consultoria. Na prática, esses três nunca andam separados."
    },
    {
      icon: <Landmark className="w-8 h-8 text-gold-500" />,
      title: "Foco em PMEs brasileiras",
      desc: "Falamos a língua de quem tem folha para pagar no dia 5 e sonho grande na cabeça."
    }
  ];

  return (
    <section className="py-32 relative bg-dark-900 overflow-hidden border-t border-white/5" aria-labelledby="offer-heading">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-[30%] right-[10%] w-[500px] h-[500px] bg-gold-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div id="offer-heading" className="max-w-3xl mb-20">
          <span className="text-xs font-bold text-gold-500 uppercase tracking-widest block mb-4">Diferenciais</span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
            Por que escolher a R.Guirado?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((diff, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="p-8 rounded-[2rem] bg-dark-800 border border-white/5 hover:border-gold-500/30 transition-all shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="w-16 h-16 bg-dark-900 border border-gold-500/10 rounded-2xl flex items-center justify-center shadow-inner">
                  {diff.icon}
                </div>
                <h3 className="text-2xl font-black tracking-tight text-white">{diff.title}</h3>
                <p className="text-gray-400 text-md leading-relaxed">{diff.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
