import React from "react";
import { motion } from "motion/react";
import { SectionHeading } from "../ui/SectionHeading";

export function Team() {
  const team = [
    { name: "Gabriel Krüger", role: "Gestor de Projetos", image: "/gabriel.png" },
    { name: "Ricardo Guirado", role: "Dono da RGuirado e Consultor", image: "/ricardo.jpg" },
    { name: "Joshua Guirado", role: "Consultor Júnior", image: "/joshua.png" }
  ];

  return (
    <section id="time" className="py-32 bg-dark-800 relative border-t border-white/5" aria-labelledby="team-heading">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-[120px]" aria-hidden="true" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div id="team-heading">
          <SectionHeading subtitle="Nosso Time" title="A inteligência por trás do negócio" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {team.map((member, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ y: -10 }}
              className="bg-dark-900 rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-gold-500/30 transition-all shadow-xl group flex flex-col"
            >
              <div className="aspect-[4/5] overflow-hidden w-full relative">
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent z-10 opacity-60" aria-hidden="true" />
                <img 
                  src={member.image} 
                  alt={`Foto de ${member.name}`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-8 text-center relative bg-dark-900 border-t border-white/5 flex-grow flex flex-col justify-center">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-1 bg-gold-500 rounded-full z-20 shadow-[0_0_10px_rgba(234,179,8,0.5)]" aria-hidden="true" />
                <h3 className="text-2xl font-black mb-2">{member.name}</h3>
                <p className="text-gold-500 font-medium tracking-wide text-sm uppercase">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
