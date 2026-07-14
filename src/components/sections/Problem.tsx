import React from "react";
import { motion } from "motion/react";
import { Target, TrendingUp, Users, ShieldCheck } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";

export function Problem() {
  const problems = [
    { icon: <Target className="w-8 h-8 text-gold-500" aria-hidden="true" />, title: "Falta de estrutura", desc: "Processos confusos que impedem a replicação exata do seu modelo atual." },
    { icon: <TrendingUp className="w-8 h-8 text-gold-500" aria-hidden="true" />, title: "Crescimento desorganizado", desc: "Vender mais significa trabalhar o dobro, sem ganho de escala real ou margem." },
    { icon: <Users className="w-8 h-8 text-gold-500" aria-hidden="true" />, title: "Dependência do dono", desc: "Se você tira férias, a empresa para de faturar e os problemas só acumulam." },
    { icon: <ShieldCheck className="w-8 h-8 text-gold-500" aria-hidden="true" />, title: "Expansão sem padrão", desc: "Cada nova unidade montada perde a qualidade e a essência da marca matriz." }
  ];

  return (
    <section id="recursos" className="py-32 bg-dark-900 relative overflow-hidden" aria-labelledby="problem-heading">
      {/* Safe Edge-Compatible Background Orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-dark-900 opacity-95" />
        <div className="absolute top-[10%] right-[5%] w-[500px] h-[500px] bg-gold-500/5 blur-[100px] rounded-full" />
      </div>
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div id="problem-heading">
          <SectionHeading subtitle="O Desafio" title="Por que a maioria não consegue escalar?" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((prob, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.15, duration: 0.7, type: "spring" }}
              whileHover={{ y: -15, scale: 1.03 }}
              className="group bg-gradient-to-br from-dark-800 to-dark-900 backdrop-blur-sm p-10 rounded-[2.5rem] border-t border-white/10 border-b-4 border-b-transparent hover:border-b-gold-500 transition-all hover:bg-dark-800 shadow-xl hover:shadow-[0_20px_50px_rgba(243,192,18,0.15)] relative overflow-hidden flex flex-col items-start"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-gold-500/5 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 group-hover:bg-gold-500/20 transition-colors duration-500" />
              <div className="relative z-10 w-full">
                <div className="w-20 h-20 bg-dark-900 border border-gold-500/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-inner">
                  {React.cloneElement(prob.icon, { className: "w-10 h-10 text-gold-500" })}
                </div>
                <h3 className="text-2xl font-black mb-4 tracking-tight">{prob.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed group-hover:text-gray-200 transition-colors">{prob.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
