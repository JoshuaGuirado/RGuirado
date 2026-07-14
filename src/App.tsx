/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import Landing from "./components/Landing";
import { PillarPage } from "./components/sections/PillarPage";
import { MessageCircle } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

type Route = "landing" | "franchising" | "gestao" | "performance";

export default function App() {
  const [route, setRoute] = useState<Route>("landing");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === "#/franchising") {
        setRoute("franchising");
      } else if (hash === "#/gestao") {
        setRoute("gestao");
      } else if (hash === "#/performance") {
        setRoute("performance");
      } else {
        setRoute("landing");
      }
    };

    // Initial check
    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-dark-900 text-white font-sans selection:bg-gold-500/30 selection:text-gold-400 overflow-x-hidden">
      <AnimatePresence mode="wait">
        {route === "landing" && (
          <motion.div
            key="landing"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <Landing />
          </motion.div>
        )}
        {route !== "landing" && (
          <motion.div
            key={route}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <PillarPage pillarId={route} />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Sticky WhatsApp Button */}
      <a 
        href="https://wa.me/5544999665711?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20como%20escalar%20meu%20neg%C3%B3cio." 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
}
