import React from "react";
import { motion } from "motion/react";
import { Target, TrendingUp } from "lucide-react";
import { Button } from "../ui/Button";
import { SectionHeading } from "../ui/SectionHeading";

export function SocialProof() {
  const scrollToForm = () => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="resultados" className="py-32 bg-dark-900 border-y border-white/5 relative overflow-hidden" aria-labelledby="social-proof-heading">
      <div className="absolute -left-64 top-1/2 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[150px] -translate-y-1/2" aria-hidden="true" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div id="social-proof-heading">
          <SectionHeading subtitle="Autoridade Comprovada" title="Quem já escalou com a gente" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-24 max-w-4xl mx-auto">
          {[
            { number: "250+", label: "Empresas estruturadas", icon: <Target className="w-8 h-8 text-gold-500" aria-hidden="true" /> },
            { number: "1000+", label: "Unidades abertas", icon: <TrendingUp className="w-8 h-8 text-gold-500" aria-hidden="true" /> }
          ].map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="text-center p-12 rounded-[2.5rem] bg-gradient-to-b from-dark-800 to-dark-900 border border-white/5 hover:border-gold-500/30 transition-all shadow-xl"
            >
              <div className="w-16 h-16 mx-auto bg-gold-500/10 rounded-2xl flex items-center justify-center mb-6">
                {stat.icon}
              </div>
              <h3 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600 mb-4">{stat.number}</h3>
              <p className="text-xl text-gray-400 font-medium tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button onClick={scrollToForm} className="text-lg py-5 px-12" aria-label="Ver meus resultados futuros - rolar para contato">
            Ver meus resultados futuros
          </Button>
        </div>
      </div>
    </section>
  );
}
