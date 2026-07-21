import React, { useState } from "react";
import { motion } from "motion/react";
import { Button } from "../ui/Button";
import { MessageCircle } from "lucide-react";

export function LeadForm() {
  const [formData, setFormData] = useState({ name: "", phone: "", niche: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/joshuafguirado@gmail.com", {
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

  const formatPhone = (value: string) => {
    const clean = value.replace(/\D/g, "");
    if (clean.length <= 2) {
      return clean.length > 0 ? `(${clean}` : "";
    }
    if (clean.length <= 6) {
      return `(${clean.slice(0, 2)}) ${clean.slice(2)}`;
    }
    if (clean.length <= 10) {
      return `(${clean.slice(0, 2)}) ${clean.slice(2, 6)}-${clean.slice(6)}`;
    }
    return `(${clean.slice(0, 2)}) ${clean.slice(2, 7)}-${clean.slice(7, 11)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setFormData(prev => ({ ...prev, phone: formatted }));
  };

  return (
    <section id="contato" className="py-14 md:py-28 bg-dark-800 relative" aria-labelledby="form-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div>
            <motion.h2 
              id="form-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 sm:mb-8 leading-tight tracking-tight"
            >
              O próximo ano da sua empresa começa <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">com uma conversa.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base sm:text-lg text-gray-400 font-light leading-relaxed mb-8 sm:mb-12"
            >
              Preencha o formulário para agendar um diagnóstico inicial com Ricardo Guirado. Entendemos seu momento e apresentamos o caminho mais rápido para a escalabilidade.
            </motion.p>
            
            <div className="hidden lg:block space-y-6 border-t border-white/5 pt-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 font-bold border border-gold-500/20">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Sem compromisso</h4>
                  <p className="text-xs text-gray-400">Conversa franca sobre os gargalos do seu negócio.</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 font-bold border border-gold-500/20">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Plano Sob Medida</h4>
                  <p className="text-xs text-gray-400">Proposta desenhada para o seu orçamento e objetivo.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5">
              <p className="text-xs text-gray-400 font-medium mb-3">Prefere conversar direto pelo WhatsApp?</p>
              <a 
                href="https://wa.me/5544999665711?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20como%20escalar%20meu%20neg%C3%B3cio." 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-bold hover:bg-gold-500 hover:text-dark-900 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                Falar agora no WhatsApp
              </a>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-dark-900 p-6 sm:p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] border border-white/5 shadow-2xl relative"
          >
            <form onSubmit={handleSubmit} className="space-y-8 relative z-10" aria-label="Formulário de contato">
              <div className="space-y-6">
                <div className="relative">
                  <input 
                    id="name" 
                    required 
                    type="text" 
                    value={formData.name} 
                    onChange={(e) => setFormData({...formData, name: e.target.value})} 
                    className="peer w-full bg-dark-800/50 border border-white/10 rounded-2xl px-6 pt-6 pb-2 text-white focus:outline-none focus:border-gold-500 transition-all font-medium placeholder-transparent" 
                    placeholder="Nome Completo" 
                  />
                  <label 
                    htmlFor="name" 
                    className="absolute left-6 top-1.5 text-xs text-gray-500 transition-all pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-gold-500"
                  >
                    Nome Completo
                  </label>
                </div>

                <div className="relative">
                  <input 
                    id="phone" 
                    required 
                    type="tel" 
                    pattern="\(\d{2}\)\s\d{4,5}-\d{4}"
                    title="Digite um WhatsApp válido no formato (XX) XXXXX-XXXX"
                    value={formData.phone} 
                    onChange={handlePhoneChange} 
                    className="peer w-full bg-dark-800/50 border border-white/10 rounded-2xl px-6 pt-6 pb-2 text-white focus:outline-none focus:border-gold-500 transition-all font-medium placeholder-transparent" 
                    placeholder="Seu WhatsApp" 
                  />
                  <label 
                    htmlFor="phone" 
                    className="absolute left-6 top-1.5 text-xs text-gray-500 transition-all pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-gold-500"
                  >
                    Seu WhatsApp
                  </label>
                </div>

                <div className="relative">
                  <input 
                    id="niche" 
                    required 
                    type="text" 
                    value={formData.niche} 
                    onChange={(e) => setFormData({...formData, niche: e.target.value})} 
                    className="peer w-full bg-dark-800/50 border border-white/10 rounded-2xl px-6 pt-6 pb-2 text-white focus:outline-none focus:border-gold-500 transition-all font-medium placeholder-transparent" 
                    placeholder="Nicho do seu Negócio" 
                  />
                  <label 
                    htmlFor="niche" 
                    className="absolute left-6 top-1.5 text-xs text-gray-500 transition-all pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-gold-500"
                  >
                    Nicho do seu Negócio
                  </label>
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
