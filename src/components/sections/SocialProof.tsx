import React from "react";
import { motion } from "motion/react";
import { Target, TrendingUp } from "lucide-react";
import { Button } from "../ui/Button";
import { SectionHeading } from "../ui/SectionHeading";
import { AnimatedCounter } from "../ui/AnimatedCounter";

export function SocialProof() {
  const scrollToForm = () => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });

  const stats = [
    { number: "750+", label: "Empresas estruturadas", icon: <Target className="w-8 h-8 text-gold-500" aria-hidden="true" /> },
    { number: "1500+", label: "Unidades abertas", icon: <TrendingUp className="w-8 h-8 text-gold-500" aria-hidden="true" /> }
  ];

  const testimonials = [
    {
      quote: "A estruturação de processos e a formatação de franquias da R.Guirado nos deram a segurança necessária para expandir nossa marca nacionalmente.",
      author: "Diretoria de Expansão",
      role: "Gela Boca Franquias"
    },
    {
      quote: "Com a consultoria de gestão e processos, organizamos a casa por completo e destravamos um crescimento muito mais previsível.",
      author: "Sócio-Fundador",
      role: "Lava Thru"
    },
    {
      quote: "O trabalho comportamental com nossos líderes alinhou nossa cultura corporativa aos objetivos estratégicos de expansão.",
      author: "Direção de Operações",
      role: "Colégio Platão"
    }
  ];

  return (
    <section id="resultados" className="py-14 md:py-28 bg-dark-900 border-y border-white/5 relative overflow-hidden" aria-labelledby="social-proof-heading">
      <div className="absolute -left-64 top-1/2 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[150px] -translate-y-1/2" aria-hidden="true" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div id="social-proof-heading">
          <SectionHeading subtitle="Autoridade Comprovada" title="Quem já escalou com a gente" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-24 max-w-4xl mx-auto">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="text-center p-6 sm:p-8 lg:p-12 rounded-[2rem] md:rounded-[2.5rem] bg-gradient-to-b from-dark-800 to-dark-900 border border-white/5 hover:border-gold-500/30 transition-all shadow-xl"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 mx-auto bg-gold-500/10 rounded-2xl flex items-center justify-center mb-4 md:mb-6">
                {stat.icon}
              </div>
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600 mb-2 md:mb-4">
                <AnimatedCounter value={stat.number} />
              </h3>
              <p className="text-lg md:text-xl text-gray-400 font-medium tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Depoimentos reais dos parceiros */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-12 md:mb-20">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="bg-dark-800/40 backdrop-blur-md border border-white/5 hover:border-gold-500/20 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 flex flex-col justify-between shadow-xl transition-all"
            >
              <div className="space-y-4">
                <span className="text-4xl font-serif text-gold-500/20 block leading-[0.1] select-none">“</span>
                <p className="text-gray-300 text-sm leading-relaxed italic">{t.quote}</p>
              </div>
              <div className="pt-6 border-t border-white/5 mt-6">
                <p className="font-bold text-white text-sm">{t.author}</p>
                <p className="text-xs text-gold-500/80 font-bold uppercase tracking-wider mt-0.5">{t.role}</p>
              </div>
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
