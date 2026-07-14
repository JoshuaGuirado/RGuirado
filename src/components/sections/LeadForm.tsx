import React, { useState } from "react";
import { motion } from "motion/react";
import { Button } from "../ui/Button";

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
            _subject: "Novo Lead - RGuirado Consultoria",
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
    <section id="contato" className="py-32 bg-dark-800 relative" aria-labelledby="form-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.h2 
              id="form-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black mb-8 leading-tight tracking-tight"
            >
              O próximo ano da sua empresa começa <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">com uma conversa.</span>
            </motion.h2>
            <p className="text-xl text-gray-400 mb-10 font-light leading-relaxed">
              Agende um diagnóstico inicial com nosso time. Sem compromisso, sem apresentação institucional de uma hora. Você fala do seu negócio, nós apontamos onde estão os gargalos e o que pode ser feito.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <div className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 font-bold" aria-hidden="true">
                <span className="flex h-3 w-3 rounded-full bg-gold-500 animate-pulse" />
                Diagnóstico Inicial Gratuito
              </div>
              <a 
                href="https://wa.me/5544999665711?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20diagn%C3%B3stico%20para%20o%20meu%20neg%C3%B3cio."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-green-500/30 hover:border-green-500 bg-green-500/10 hover:bg-green-500/20 text-green-400 font-bold transition-all text-center"
              >
                Falar agora no WhatsApp
              </a>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-dark-900 p-10 md:p-12 rounded-[3rem] border border-white/5 shadow-2xl relative"
          >
            <form onSubmit={handleSubmit} className="space-y-8 relative z-10" aria-label="Formulário de contato">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="sr-only">Nome Completo</label>
                  <input id="name" required type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-dark-800/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-gold-500 transition-all font-medium" placeholder="Nome Completo" />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">Seu WhatsApp</label>
                  <input id="phone" required type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full bg-dark-800/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-gold-500 transition-all font-medium" placeholder="Seu WhatsApp" />
                </div>
                <div>
                  <label htmlFor="niche" className="sr-only">Nicho do seu Negócio</label>
                  <input id="niche" required type="text" value={formData.niche} onChange={(e) => setFormData({...formData, niche: e.target.value})} className="w-full bg-dark-800/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-gold-500 transition-all font-medium" placeholder="Nicho do seu Negócio" />
                </div>
              </div>
              
              <Button type="submit" disabled={status === "loading" || status === "success"} className="w-full py-5 text-lg relative overflow-hidden transition-all duration-300" aria-label="Agendar diagnóstico">
                {status === "idle" && "Agendar diagnóstico"}
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
