import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { ArrowRight, CheckCircle2, TrendingUp, Users, Target, ShieldCheck, PlayCircle, Pause, Star, Instagram, Linkedin, Mail, MapPin, ChevronRight, Phone, Volume2, VolumeX } from "lucide-react";
import VaporizeTextCycle, { Tag } from "./ui/vapour-text-effect";

export function Button({ children, className = "", onClick, type = "button", disabled = false }: { children: React.ReactNode, className?: string, onClick?: () => void, type?: "button" | "submit", disabled?: boolean }) {
  return (
    <button 
      type={type} 
      onClick={onClick} 
      disabled={disabled}
      className={`relative overflow-hidden group bg-gold-500 hover:bg-gold-400 text-dark-900 font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(243,192,18,0.3)] hover:shadow-[0_0_30px_rgba(243,192,18,0.5)] active:scale-95 ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
      </span>
      <div className="absolute inset-0 h-full w-full bg-white/20 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
    </button>
  );
}

// Liquid Glass Button Component Inspired by 21st.dev
export function GlassButton({ children, className = "", onClick, type = "button" }: { children: React.ReactNode, className?: string, onClick?: () => void, type?: "button" | "submit" }) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`relative inline-flex items-center justify-center px-8 py-4 font-heading font-semibold text-white overflow-hidden rounded-full transition-all group ${className}`}
    >
      {/* Outer Glow Background */}
      <div className="absolute inset-0 bg-gold-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Liquid Glass Container */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-full border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_8px_32px_rgba(0,0,0,0.4)] group-hover:bg-gradient-to-br group-hover:from-white/20 group-hover:to-white/10 group-hover:border-white/30 transition-all duration-300 pointer-events-none" />
      
      <span className="relative z-10 flex items-center gap-2 drop-shadow-md">
        {children}
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </span>
      
      {/* Reflection Shine */}
      <div className="absolute top-0 right-0 left-0 h-[40%] bg-gradient-to-b from-white/20 to-transparent rounded-t-full opacity-50 pointer-events-none" />
      <div className="absolute inset-0 h-full w-[200%] bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none mix-blend-overlay" />
    </motion.button>
  );
}

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

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gold-500 origin-left z-[60]" style={{ scaleX }} />
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-dark-900/90 backdrop-blur-xl border-b border-white/5 py-3 shadow-2xl" : "bg-transparent py-6"}`}
      >
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between relative">
          
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3 cursor-pointer z-10" onClick={() => window.scrollTo(0,0)}>
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 p-2 shadow-[inset_0_1px_rgba(255,255,255,0.2)] backdrop-blur-md">
              <img src="/logo.png" alt="RGuirado" className="h-full w-full object-contain drop-shadow-md" />
            </div>
            
            <div className="relative h-12 w-[220px] hidden sm:block -ml-1">
              <VaporizeTextCycle
                texts={["RGuirado."]}
                font={{ fontFamily: "ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'", fontSize: "32px", fontWeight: 900 }}
                color="rgb(255, 255, 255)"
                spread={1.5}
                density={10}
                animation={{ vaporizeDuration: 2, fadeInDuration: 1.5, waitDuration: 8 }}
                direction="left-to-right"
                alignment="left"
                tag={Tag.H1}
               />
            </div>
          </motion.div>
          
          <div className="hidden md:block z-10">
            <GlassButton onClick={scrollToForm} className="px-6 py-2.5 text-[0.85rem] border border-white/10">
              Falar com Especialista
            </GlassButton>
          </div>
        </div>
      </motion.nav>
    </>
  );
}

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
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-dark-900 border-b border-white/5 bg-[radial-gradient(circle_at_top_right,_rgba(243,192,18,0.08),_transparent_50%),radial-gradient(circle_at_bottom_left,_rgba(38,100,200,0.08),_transparent_50%)]">
      {/* Zero GPU Cost CSS Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]" />
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
            <span className="text-sm font-semibold text-gray-200 uppercase tracking-widest">
              Método RGuirado.
            </span>
          </motion.div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.1] mb-6 tracking-tight">
            Engenharia estrutural para <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">franqueadoras de ponta.</span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-10 leading-relaxed font-light">
            Estratégia, estrutura e crescimento previsível para quem quer expandir de verdade. Construa um império e pare de depender apenas da sua operação.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <Button onClick={scrollToForm} className="w-full sm:w-auto text-lg py-5 px-10">
              Quero expandir agora
            </Button>
            <GlassButton onClick={() => document.getElementById("recursos")?.scrollIntoView({ behavior: "smooth" })} className="w-full sm:w-auto text-lg py-5 px-10">
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
             <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden bg-dark-900 border border-white/5 group bg-black" onClick={toggleVideo} style={{ cursor: 'pointer' }}>
               <video 
                 ref={videoRef}
                 src="/reel.mp4" 
                 autoPlay 
                 loop 
                 muted 
                 playsInline 
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
               />
               <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-dark-900/90 to-transparent pointer-events-none" />
             </div>

             <motion.div 
              onClick={toggleVolume}
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 md:-left-12 max-w-[200px] bg-dark-900/95 backdrop-blur-xl p-4 md:p-5 rounded-2xl border border-gold-500/30 flex items-center gap-4 z-30 cursor-pointer shadow-2xl hover:border-gold-500 transition-colors"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center shadow-lg shadow-gold-500/30">
                {isMuted ? <VolumeX className="w-5 h-5 md:w-6 md:h-6 text-dark-900" /> : <Volume2 className="w-5 h-5 md:w-6 md:h-6 text-dark-900" />}
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


export function PartnersMarquee() {
  const partners = ["Gela Boca", "Lava Thru", "Dom Pizza", "Colégio Platão", "ETZME", "Mundo do Futsal", "Armazém da Limpeza", "Bless Internet", "Consórcio Triângulo", "Marques Administrações Judiciais", "CLZO", "Cultura Steam", "Facilita Pass", "Grupo Titanium", "Rolls Food"];
  
  return (
    <section className="py-16 bg-dark-900 border-y border-white/5 overflow-hidden flex flex-col items-center">
      <p className="text-gold-500/80 font-bold text-sm tracking-[0.25em] uppercase mb-10">Empresas parceiras que já aceleramos</p>
      <div className="relative w-full flex overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-dark-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-dark-900 to-transparent z-10 pointer-events-none" />
        
        <motion.div 
          animate={{ x: ["0%", "-33.333333333333%"] }} 
          transition={{ ease: "linear", duration: 70, repeat: Infinity }}
          className="flex whitespace-nowrap items-center w-max"
        >
          {[...partners, ...partners, ...partners].map((partner, idx) => (
             <span key={idx} className="mx-8 md:mx-14 text-lg md:text-2xl font-heading font-bold text-white/30 hover:text-white/90 transition-all uppercase tracking-widest cursor-default select-none">
              {partner}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function Problem() {
  const problems = [
    { icon: <Target className="w-8 h-8 text-gold-500" />, title: "Falta de estrutura", desc: "Processos confusos que impedem a replicação exata do seu modelo atual." },
    { icon: <TrendingUp className="w-8 h-8 text-gold-500" />, title: "Crescimento desorganizado", desc: "Vender mais significa trabalhar o dobro, sem ganho de escala real ou margem." },
    { icon: <Users className="w-8 h-8 text-gold-500" />, title: "Dependência do dono", desc: "Se você tira férias, a empresa para de faturar e os problemas só acumulam." },
    { icon: <ShieldCheck className="w-8 h-8 text-gold-500" />, title: "Expansão sem padrão", desc: "Cada nova unidade montada perde a qualidade e a essência da marca matriz." }
  ];

  return (
    <section id="recursos" className="py-32 bg-dark-900 relative overflow-hidden bg-[radial-gradient(circle_at_top_right,_rgba(243,192,18,0.05),_transparent_40%),radial-gradient(circle_at_bottom_left,_rgba(38,100,200,0.05),_transparent_40%)]">
      {/* Zero GPU Cost CSS Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading subtitle="O Desafio" title="Por que a maioria não consegue escalar?" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((prob, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.15, duration: 0.7, type: "spring" }}
              whileHover={{ y: -15, scale: 1.03 }}
              className="group bg-gradient-to-br from-dark-800 to-dark-900 backdrop-blur-sm p-10 rounded-[2.5rem] border-t border-white/10 border-b-4 border-b-transparent hover:border-b-gold-500 transition-all hover:bg-dark-800 shadow-xl hover:shadow-[0_20px_50px_rgba(243,192,18,0.15)] relative overflow-hidden flex flex-col items-start"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-gold-500/5 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 group-hover:bg-gold-500/20 transition-colors duration-500" />
              <div className="relative z-10 w-full">
                <div className="w-20 h-20 bg-dark-900 border border-gold-500/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-inner">
                  {React.cloneElement(prob.icon, { className: "w-10 h-10 text-gold-500" })}
                </div>
                <h3 className="text-2xl font-black mb-4 tracking-tight">{prob.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed group-hover:text-gray-200 transition-colors">{prob.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Solution() {
  const solutions = [
    { step: "01", title: "Diagnóstico Estratégico", desc: "Analisamos a viabilidade do seu negócio para o modelo de franquias, identificando gargalos financeiros e operacionais a fundo." },
    { step: "02", title: "Estruturação do Modelo", desc: "Desenhamos o formato ideal e lucrativo: taxas, royalties, modelo jurídico robusto e DRE projetado." },
    { step: "03", title: "Padronização de Processos", desc: "Criamos tecnologia e manuais operacionais completos. Qualquer pessoa conseguirá replicar o seu sucesso de ponta a ponta." },
    { step: "04", title: "Expansão Ativa", desc: "Aplicação de estratégia de marketing e vendas fechadas para captar, nutrir e converter os investidores perfeitos." }
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-dark-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-stretch">
          <div className="flex flex-col justify-center">
            <SectionHeading align="left" subtitle="O Método RGuirado" title="Como nós entregamos a sua liberdade executiva" />
            
            <div className="space-y-6">
              {solutions.map((sol, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.5 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex gap-6 p-6 rounded-3xl bg-dark-900/50 border border-transparent hover:border-gold-500/20 hover:bg-dark-900 transition-all cursor-default"
                >
                  <div className="flex-shrink-0">
                    <span className="font-heading font-black text-5xl text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent">
                      {sol.step}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-gold-500">{sol.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{sol.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mt-12 lg:mt-0 h-full flex flex-col"
          >
            <div className="absolute inset-0 bg-gold-500/20 blur-[120px] rounded-full" />
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.4 }} className="relative rounded-[2.5rem] p-2 bg-gradient-to-br from-gold-500/30 to-white/10 flex-grow min-h-[450px] shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden">
              <div className="absolute inset-0 bg-dark-900 rounded-[2.3rem] m-[2px]" />
              <div className="relative z-10 w-full h-full rounded-[2.3rem] overflow-hidden bg-dark-900 group">
                <div className="absolute inset-0 bg-dark-900 mix-blend-color z-20 opacity-80 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" />
                <div className="absolute inset-0 bg-gold-500 mix-blend-multiply z-20 opacity-30 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none" />
                
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1000&q=80" 
                  alt="Time corporativo formulando estratégia"
                  className="w-full h-full object-cover grayscale brightness-75 contrast-125 group-hover:grayscale-0 transition-all duration-700"
                  crossOrigin="anonymous"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function SocialProof() {
  const scrollToForm = () => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="resultados" className="py-32 bg-dark-900 border-y border-white/5 relative overflow-hidden">
      <div className="absolute -left-64 top-1/2 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[150px] -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading subtitle="Autoridade Comprovada" title="Quem já escalou com a gente" />
        
        <div className="grid md:grid-cols-2 gap-8 mb-24 max-w-4xl mx-auto">
          {[
            { number: "250+", label: "Empresas estruturadas", icon: <Target className="w-8 h-8 text-gold-500" /> },
            { number: "1000+", label: "Unidades abertas", icon: <TrendingUp className="w-8 h-8 text-gold-500" /> }
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
          <Button onClick={scrollToForm} className="text-lg py-5 px-12">
            Ver meus resultados futuros
          </Button>
        </div>
      </div>
    </section>
  );
}

export function Team() {
  const team = [
    { name: "Gabriel Krüger", role: "Gestor de Projetos", image: "/gabriel.png" },
    { name: "Ricardo Guirado", role: "Dono da RGuirado e Consultor", image: "/ricardo.jpg" },
    { name: "Joshua Guirado", role: "Consultor Júnior", image: "/joshua.png" }
  ];

  return (
    <section id="time" className="py-32 bg-dark-800 relative border-t border-white/5">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-[120px]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading subtitle="Nosso Time" title="A inteligência por trás do negócio" />
        
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
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent z-10 opacity-60" />
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 text-center relative bg-dark-900 border-t border-white/5 flex-grow flex flex-col justify-center">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-1 bg-gold-500 rounded-full z-20 shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
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

export function Offer() {
  return (
    <section className="py-32 relative bg-dark-900">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <SectionHeading subtitle="O Próximo Nível" title="Transforme seu negócio em uma máquina" />
        <p className="text-2xl text-gray-400 mb-16 font-light">
          A consultoria definitiva que entrega o modelo de franquia validado pronto. Você não precisa inventar a roda, o mapa está conosco.
        </p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gold-500 via-dark-800 to-dark-900 p-[2px] rounded-[3rem] shadow-[0_0_80px_rgba(234,179,8,0.1)]"
        >
          <div className="bg-dark-900 p-10 md:p-16 rounded-[calc(3rem-2px)] relative overflow-hidden">
            <div className="grid md:grid-cols-2 gap-10 text-left relative z-10">
              <ul className="space-y-6">
                {['Análise de Franqueabilidade Extrema', 'Modelagem Financeira Avançada', 'Dossiês e Jurídico Blindado (COF)', 'Desenvolvimento de Manuais'].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 bg-dark-800/50 p-4 rounded-2xl border border-white/5">
                    <CheckCircle2 className="w-6 h-6 text-gold-500" />
                    <span className="text-gray-200 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-6">
                {['Estratégia de Marketing Focada', 'Funil de Vendas de Franquia', 'Posicionamento Premium', 'Mentoria Contínua de Escalada'].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 bg-dark-800/50 p-4 rounded-2xl border border-white/5">
                    <CheckCircle2 className="w-6 h-6 text-gold-500" />
                    <span className="text-gray-200 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function LeadForm() {
  const [formData, setFormData] = useState({ name: "", phone: "", niche: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/91e1fe9c6f7c21b8746e1f0ea8c4fbf3", {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            _subject: "Novo Lead - RGuirado Franquias",
            _template: "table",
            Nome: formData.name,
            WhatsApp: formData.phone,
            Nicho: formData.niche,
        })
      });
      
      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", phone: "", niche: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch (err) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section id="contato" className="py-32 bg-dark-800 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-black mb-8 leading-tight tracking-tight"
            >
              É hora de dar o <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">verdadeiro passo.</span>
            </motion.h2>
            <p className="text-2xl text-gray-400 mb-10 font-light leading-relaxed">
              Vamos alinhar uma Sessão Rápida com um especialista para analisar sua franqueabilidade.
            </p>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 font-bold">
              <span className="flex h-3 w-3 rounded-full bg-gold-500 animate-pulse" />
              Diagnóstico Estratégico Gratuito
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-dark-900 p-10 md:p-12 rounded-[3rem] border border-white/5 shadow-2xl relative"
          >
            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="space-y-6">
                <div>
                  <input required type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-dark-800/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-gold-500 transition-all font-medium" placeholder="Nome Completo" />
                </div>
                <div>
                  <input required type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full bg-dark-800/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-gold-500 transition-all font-medium" placeholder="Seu WhatsApp" />
                </div>
                <div>
                  <input required type="text" value={formData.niche} onChange={(e) => setFormData({...formData, niche: e.target.value})} className="w-full bg-dark-800/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-gold-500 transition-all font-medium" placeholder="Nicho do seu Negócio" />
                </div>
              </div>
              
              <Button type="submit" disabled={status === "loading" || status === "success"} className="w-full py-5 text-lg relative overflow-hidden transition-all duration-300">
                {status === "idle" && "Enviar Meus Dados"}
                {status === "loading" && "Enviando dados..."}
                {status === "success" && "Tudo certo! Recebemos suas informações."}
                {status === "error" && "Ocorreu um erro. Tente novamente."}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-dark-900 pt-16 pb-12 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <div className="flex items-center gap-3 mb-8 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          <img src="/logo.png" alt="RGuirado Franquias" className="h-10 w-auto object-contain drop-shadow-md" />
          <span className="font-heading font-black text-2xl tracking-tighter hover:text-gold-500 transition-colors">
            RGuirado<span className="text-gold-500">.</span>
          </span>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 text-gray-400 font-medium mb-10">
          <a href="#recursos" className="hover:text-gold-500 transition-colors">Método</a>
          <a href="#resultados" className="hover:text-gold-500 transition-colors">Resultados</a>
          <a href="#time" className="hover:text-gold-500 transition-colors">Time Técnico</a>
          <a href="#contato" className="hover:text-gold-500 transition-colors px-3 py-1 bg-white/5 rounded-full border border-white/5">Consultoria de Expansão</a>
        </div>

        <div className="flex items-center gap-4 mb-8">
          <a href="https://www.instagram.com/rguiradofranquias/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-dark-800 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gold-500/20 hover:border-gold-500/50 transition-all shadow-lg hover:shadow-gold-500/20">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/ricardoguiradofranquias/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-dark-800 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-500/20 hover:border-blue-500/50 transition-all shadow-lg hover:shadow-blue-500/20">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        <div className="flex items-center gap-2 mb-10 text-gray-400/80 font-medium text-sm bg-white/5 py-2 px-4 rounded-full border border-white/5 cursor-default hover:border-gold-500/30 hover:text-gray-300 transition-colors">
          <MapPin className="w-4 h-4 text-gold-500" />
          <span>Sede de Operações em Maringá, Paraná • Atendimento Regional</span>
        </div>
        
        <p className="text-center text-sm font-medium text-gray-600">
          © {new Date().getFullYear()} RGuirado Franquias. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
