import React from "react";
import { motion } from "motion/react";
import { Briefcase, BarChart, Brain } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";

export function Services() {
  const pillars = [
    { 
      icon: <Briefcase className="w-8 h-8 text-gold-500" aria-hidden="true" />, 
      title: "RGuirado Franchising", 
      desc: "Estruturação completa e expansão acelerada para marcas que desejam se tornar franquias de sucesso, com manuais, processos e estratégias de venda validadas." 
    },
    { 
      icon: <BarChart className="w-8 h-8 text-gold-500" aria-hidden="true" />, 
      title: "Gestão Estratégica", 
      desc: "Otimização de processos, análise financeira e planejamento estratégico para empresas que buscam escalabilidade, maior margem de lucro e governança." 
    },
    { 
      icon: <Brain className="w-8 h-8 text-gold-500" aria-hidden="true" />, 
      title: "Performance Comportamental", 
      desc: "Desenvolvimento de lideranças, alinhamento cultural e treinamento de equipes de alta performance para garantir que o seu time acompanhe o crescimento." 
    }
  ];

  return (
    <section id="pilares" className="py-32 bg-dark-800 relative overflow-hidden" aria-labelledby="services-heading">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-[20%] left-[5%] w-[600px] h-[600px] bg-gold-500/5 blur-[120px] rounded-full" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div id="services-heading">
          <SectionHeading subtitle="Nossas Frentes de Atuação" title="Os 3 Pilares da RGuirado Consultoria" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.2, duration: 0.7, type: "spring" }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-dark-900 p-10 rounded-[2.5rem] border border-white/5 border-t-gold-500/30 hover:border-gold-500 transition-all shadow-xl hover:shadow-[0_20px_50px_rgba(243,192,18,0.1)] relative overflow-hidden flex flex-col items-start"
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gold-500/10 rounded-full blur-[30px] group-hover:bg-gold-500/20 transition-colors duration-500" />
              
              <div className="relative z-10 w-full">
                <div className="w-20 h-20 bg-dark-800 border border-gold-500/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-inner">
                  {React.cloneElement(pillar.icon, { className: "w-10 h-10 text-gold-500" })}
                </div>
                <h3 className="text-3xl font-black mb-4 tracking-tight">{pillar.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed group-hover:text-gray-200 transition-colors">{pillar.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
