import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "../ui/Button";
import { GlassButton } from "../ui/GlassButton";

export function Hero() {
  const scrollToForm = () => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const toggleVolume = () => {
    if (videoRef.current) {
      const newMutedState = !videoRef.current.muted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
      
      if (!newMutedState) {
        // Restart video softly to hear the core message
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-dark-900 border-b border-white/5" aria-labelledby="hero-title">
      {/* Safe Edge-Compatible Background Orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-gold-400/5 blur-[120px] rounded-full" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-dark-900 to-transparent opacity-90" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm cursor-default shadow-xl"
          >
            <span className="text-sm font-bold text-gold-400 uppercase tracking-widest">
              RGuirado Consultoria
            </span>
          </motion.div>
          
          <h1 id="hero-title" className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.1] mb-6 tracking-tight">
            Consultoria e escala para <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">empresas de alto impacto.</span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-10 leading-relaxed font-light">
            Mapeamento estratégico, performance de equipes e estrutura organizacional. Prepare seu negócio para crescer com governança e liberdade executiva.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <Button onClick={scrollToForm} className="w-full sm:w-auto text-lg py-5 px-10" aria-label="Quero expandir agora - rolar para o formulário">
              Quero expandir agora
            </Button>
            <GlassButton onClick={() => document.getElementById("recursos")?.scrollIntoView({ behavior: "smooth" })} className="w-full sm:w-auto text-lg py-5 px-10" aria-label="Entender o método - rolar para a seção de recursos">
              Entender o método
            </GlassButton>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative lg:h-[700px] flex items-center justify-center p-4 w-full"
        >
          {/* Instagram iframe Container */}
          <div className="relative w-full max-w-[400px] h-[600px] lg:h-[650px] mx-auto group">
             
             {/* Dynamic Glow Overlay for Depth */}
             <div className="absolute inset-0 bg-gold-500/10 blur-[90px] rounded-full pointer-events-none" />
             
             {/* Direct Looping Video File */}
             <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden bg-dark-900 border border-white/5 group bg-black" onClick={toggleVolume} style={{ cursor: 'pointer' }} role="button" aria-label="Alternar som do vídeo">
               <video 
                 ref={videoRef}
                 src="/reel.mp4" 
                 poster="/logo.png"
                 autoPlay 
                 loop 
                 muted 
                 playsInline 
                 className="w-full h-full object-cover" 
                 aria-label="Vídeo demonstrativo na prática"
               />
               <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-dark-900/90 to-transparent pointer-events-none" />
             </div>

             <motion.div 
              onClick={toggleVolume}
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 md:-left-12 max-w-[200px] bg-dark-900 p-4 md:p-5 rounded-2xl border border-gold-500/30 flex items-center gap-4 z-30 cursor-pointer shadow-2xl hover:border-gold-500 transition-colors will-change-transform"
              role="button"
              aria-label={isMuted ? "Ativar som do vídeo" : "Silenciar vídeo"}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center shadow-lg shadow-gold-500/30">
                {isMuted ? <VolumeX className="w-5 h-5 md:w-6 md:h-6 text-dark-900" aria-hidden="true" /> : <Volume2 className="w-5 h-5 md:w-6 md:h-6 text-dark-900" aria-hidden="true" />}
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-tight mb-1">{isMuted ? "Ativar Som" : "Silenciar"}</p>
                <p className="font-heading font-black text-sm md:text-md leading-tight text-white">Na Prática</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
