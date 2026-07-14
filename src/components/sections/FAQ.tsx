import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";

export function FAQ() {
  const faqs = [
    {
      q: "Quanto tempo leva um projeto?",
      a: "Depende do escopo. Uma mentoria pode começar a gerar resultado em semanas; uma formatação de franquia costuma levar de 4 a 8 meses. No diagnóstico, você recebe prazo e entregas definidos antes de decidir."
    },
    {
      q: "Minha empresa é pequena demais para uma consultoria?",
      a: "Trabalhamos justamente com pequenas e médias empresas. Se você tem um negócio funcionando e quer crescer com estrutura, é exatamente o nosso lugar."
    },
    {
      q: "Vocês atendem fora do Paraná?",
      a: "Sim. Nossa base é Curitiba, mas conduzimos projetos remotos e híbridos em todo o Brasil."
    },
    {
      q: "Como funciona a parte de IA?",
      a: "Não vendemos software. Identificamos onde a IA gera ganho real no seu negócio, ajudamos a escolher e implantar as ferramentas, criamos agentes personalizados e treinamos sua equipe para usá-los no dia a dia."
    },
    {
      q: "Vocês vão mudar a cara da minha empresa?",
      a: "Não. Vamos preservar o que te trouxe até aqui e mudar o que impede você de ir além. Sua identidade é ativo, não obstáculo."
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-dark-900 relative overflow-hidden border-t border-white/5" aria-labelledby="faq-heading">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-gold-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold text-gold-500 uppercase tracking-widest block">Perguntas Frequentes</span>
            <h2 id="faq-heading" className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
              FAQ - Dúvidas Comuns
            </h2>
            <p className="text-lg text-gray-400 font-light leading-relaxed">
              Esclareça suas dúvidas gerais sobre prazos, escopos de projetos e a metodologia de consultoria da R.Guirado.
            </p>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;
              return (
                <div 
                  key={index} 
                  className="border border-white/5 bg-dark-800 rounded-2xl overflow-hidden transition-all duration-300 hover:border-gold-500/20 shadow-lg"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-6 text-left cursor-pointer group select-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex gap-4 items-center pr-4">
                      <HelpCircle className="w-5 h-5 text-gold-500 shrink-0" />
                      <span className="text-md font-bold text-white group-hover:text-gold-400 transition-colors leading-relaxed">
                        {faq.q}
                      </span>
                    </div>
                    <ChevronDown 
                      className={`w-5 h-5 text-gray-400 transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180 text-gold-500" : ""}`} 
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 pt-1 text-gray-400 text-sm leading-relaxed font-light border-t border-white/5 bg-dark-900/30">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
