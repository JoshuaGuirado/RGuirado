import React from "react";
import { motion } from "motion/react";

export function Quote() {
  return (
    <section className="py-24 bg-dark-950 relative overflow-hidden flex items-center justify-center border-y border-white/5">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-gold-500/5 via-transparent to-gold-500/5 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <span className="text-6xl md:text-8xl font-serif text-gold-500/20 block h-6 leading-[0.5] select-none">“</span>
          
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light italic leading-relaxed text-gray-200">
            As empresas morrem hoje não por fazer as coisas erradas, mas por fazerem bem as mesmas coisas durante tempo demais.
          </blockquote>
          
          <cite className="block text-gold-500 font-bold tracking-widest uppercase text-sm md:text-md not-italic">
            — Yves Doz
          </cite>
          
          <div className="w-16 h-px bg-gold-500/30 mx-auto pt-2" />
          
          <p className="text-gray-400 font-medium text-lg leading-relaxed pt-2">
            É exatamente contra isso que trabalhamos.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
