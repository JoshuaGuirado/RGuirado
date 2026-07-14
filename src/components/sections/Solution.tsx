import React from "react";
import { motion } from "motion/react";
import { SectionHeading } from "../ui/SectionHeading";

export function Solution() {
  const solutions = [
    { step: "01", title: "Diagnóstico Estratégico", desc: "Analisamos a viabilidade do seu negócio para o modelo de franquias, identificando gargalos financeiros e operacionais a fundo." },
    { step: "02", title: "Estruturação do Modelo", desc: "Desenhamos o formato ideal e lucrativo: taxas, royalties, modelo jurídico robusto e DRE projetado." },
    { step: "03", title: "Padronização de Processos", desc: "Criamos tecnologia e manuais operacionais completos. Qualquer pessoa conseguirá replicar o seu sucesso de ponta a ponta." },
    { step: "04", title: "Expansão Ativa", desc: "Aplicação de estratégia de marketing e vendas fechadas para captar, nutrir e converter os investidores perfeitos." }
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-dark-800" aria-labelledby="solution-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-stretch">
          <div className="flex flex-col justify-center">
            <div id="solution-heading">
              <SectionHeading align="left" subtitle="O Método RGuirado" title="Como nós entregamos a sua liberdade executiva" />
            </div>
            
            <div className="space-y-6">
              {solutions.map((sol, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.5 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex gap-6 p-6 rounded-3xl bg-dark-900/50 border border-transparent hover:border-gold-500/20 hover:bg-dark-900 transition-all cursor-default"
                >
                  <div className="flex-shrink-0">
                    <span className="font-heading font-black text-5xl text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent" aria-hidden="true">
                      {sol.step}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-gold-500">{sol.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{sol.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mt-12 lg:mt-0 h-full flex flex-col"
          >
            <div className="absolute inset-0 bg-gold-500/20 blur-[120px] rounded-full" aria-hidden="true" />
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.4 }} className="relative rounded-[2.5rem] p-2 bg-gradient-to-br from-gold-500/30 to-white/10 flex-grow min-h-[450px] shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden">
              <div className="absolute inset-0 bg-dark-900 rounded-[2.3rem] m-[2px]" aria-hidden="true" />
              <div className="relative z-10 w-full h-full rounded-[2.3rem] overflow-hidden bg-dark-900 group">
                <div className="absolute inset-0 bg-dark-900 mix-blend-color z-20 opacity-80 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" aria-hidden="true" />
                <div className="absolute inset-0 bg-gold-500 mix-blend-multiply z-20 opacity-30 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none" aria-hidden="true" />
                
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1000&q=80" 
                  alt="Equipe corporativa formulando estratégia de negócios"
                  className="w-full h-full object-cover grayscale brightness-75 contrast-125 group-hover:grayscale-0 transition-all duration-700"
                  crossOrigin="anonymous"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
