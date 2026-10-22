import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";
import { SectionLabel } from "../ui/SectionLabel";
import { RevealText } from "../ui/RevealText";
import { Reveal, Stagger, StaggerItem } from "../ui/Reveal";
import { EASE_OUT_EXPO } from "../../lib/constants";

const faqs = [
  {
    q: "Quanto tempo leva um projeto?",
    a: "Depende do escopo. Uma mentoria pode começar a gerar resultado em semanas; uma formatação de franquia costuma levar de 4 a 8 meses. No diagnóstico, você recebe prazo e entregas definidos antes de decidir.",
  },
  {
    q: "Minha empresa é pequena demais para uma consultoria?",
    a: "Trabalhamos justamente com pequenas e médias empresas. Se você tem um negócio funcionando e quer crescer com estrutura, é exatamente o nosso lugar.",
  },
  {
    q: "Vocês atendem fora do Paraná?",
    a: "Sim. Nossa base é Maringá, mas conduzimos projetos remotos e híbridos em todo o Brasil.",
  },
  {
    q: "Como funciona a parte de IA?",
    a: "Não vendemos software. Identificamos onde a IA gera ganho real no seu negócio, ajudamos a escolher e implantar as ferramentas, criamos agentes personalizados e treinamos sua equipe para usá-los no dia a dia.",
  },
  {
    q: "Vocês vão mudar a cara da minha empresa?",
    a: "Não. Vamos preservar o que te trouxe até aqui e mudar o que impede você de ir além. Sua identidade é ativo, não obstáculo.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-dark-950 py-24 md:py-36" aria-labelledby="faq-heading">
      <div className="relative mx-auto grid max-w-7xl items-start gap-12 px-5 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28">
          <SectionLabel className="mb-6">Perguntas frequentes</SectionLabel>
          <RevealText
            id="faq-heading"
            className="mb-6 text-4xl font-black leading-[1.05] tracking-[-0.03em] sm:text-5xl"
            lines={[{ text: "Dúvidas" }, { text: "comuns.", className: "text-gold-gradient" }]}
          />
          <Reveal delay={0.1}>
            <p className="text-base font-light leading-relaxed text-gray-400 sm:text-lg">Prazos, escopo e como a metodologia da R.Guirado funciona na prática.</p>
          </Reveal>
        </div>

        <Stagger className="space-y-3" stagger={0.08}>
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <StaggerItem key={faq.q}>
                <div className={`overflow-hidden rounded-2xl border transition-colors duration-500 ${isOpen ? "border-gold-500/30 bg-dark-800" : "border-white/[0.07] bg-dark-900/60 hover:border-white/15"}`}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full cursor-pointer items-center justify-between gap-6 p-6 text-left"
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="text-xs font-black text-gold-500/70">0{i + 1}</span>
                      <span className={`text-base font-bold leading-snug transition-colors sm:text-lg ${isOpen ? "text-white" : "text-gray-200"}`}>{faq.q}</span>
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 135 : 0 }}
                      transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors ${isOpen ? "border-gold-500 bg-gold-500 text-dark-900" : "border-white/15 text-gray-300"}`}
                    >
                      <Plus className="h-4 w-4" aria-hidden="true" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
                      >
                        <p className="px-6 pb-6 pl-[3.25rem] text-[15px] font-light leading-relaxed text-gray-400">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
