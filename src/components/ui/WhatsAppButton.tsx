import React from "react";
import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/5544999665711?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20diagn%C3%B3stico%20para%20o%20meu%20neg%C3%B3cio."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-[99] w-14 h-14 bg-[#25d366] text-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.6)] hover:bg-[#20ba5a] transition-all duration-300 group cursor-pointer"
      aria-label="Falar no WhatsApp"
    >
      {/* Pulse rings */}
      <span className="absolute inset-0 rounded-full bg-[#25d366] opacity-30 animate-ping pointer-events-none" />
      
      <MessageCircle className="w-7 h-7" />
      
      {/* Tooltip */}
      <span className="absolute right-16 scale-0 origin-right rounded bg-dark-900 border border-white/5 px-3 py-1.5 text-xs font-bold text-white shadow-xl transition-all duration-300 group-hover:scale-100 whitespace-nowrap">
        Falar com especialista
      </span>
    </motion.a>
  );
}
