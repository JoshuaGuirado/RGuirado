import React from "react";
import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "../../lib/constants";

export function WhatsAppButton() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      className="group fixed bottom-5 right-5 z-[70] flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_8px_30px_rgb(37_211_102/0.45)] sm:bottom-6 sm:right-6"
      aria-label="Falar no WhatsApp"
    >
      <span className="pointer-events-none absolute inset-0 animate-ping rounded-full bg-[#25d366] opacity-25 [animation-duration:2.4s]" />
      <MessageCircle className="relative h-7 w-7" aria-hidden="true" />
      <span className="pointer-events-none absolute right-[calc(100%+12px)] hidden origin-right scale-90 whitespace-nowrap rounded-full border border-white/10 bg-dark-900/95 px-4 py-2 text-xs font-bold text-white opacity-0 shadow-xl backdrop-blur transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 sm:block">
        Falar com especialista
      </span>
    </motion.a>
  );
}
