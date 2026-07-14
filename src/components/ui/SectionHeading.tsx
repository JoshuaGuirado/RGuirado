import React from "react";
import { motion } from "motion/react";

export function SectionHeading({ title, subtitle, align = "center" }: { title: string, subtitle?: string, align?: "left" | "center" }) {
  return (
    <div className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
      {subtitle && (
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 font-bold text-xs tracking-widest uppercase mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-gold-500" />
          {subtitle}
        </motion.span>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight"
      >
        {title}
      </motion.h2>
    </div>
  );
}
