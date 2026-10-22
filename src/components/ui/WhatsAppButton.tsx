import React from "react";
import { motion } from "motion/react";
import { WHATSAPP_URL } from "../../lib/constants";
import { WhatsAppGlyph } from "./Icons";

export function WhatsAppButton() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ y: 24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="group fixed bottom-5 right-5 z-[70] flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg shadow-black/30 transition-transform duration-300 hover:-translate-y-0.5 sm:bottom-6 sm:right-6"
      aria-label="Falar no WhatsApp"
    >
      <WhatsAppGlyph className="h-7 w-7" />
      <span className="pointer-events-none absolute right-[calc(100%+12px)] hidden translate-x-2 whitespace-nowrap rounded-[3px] bg-white px-3 py-2 text-[11px] font-bold text-dark-950 opacity-0 transition-[opacity,transform] duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
        Falar com especialista
      </span>
    </motion.a>
  );
}
