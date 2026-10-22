import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SectionDivider } from "../ui/SectionDivider";
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
    <section id="faq" className="relative bg-dark-950 pb-24 pt-20 md:pb-36 md:pt-28" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionDivider index="06" label="Perguntas frequentes" className="mb-14 md:mb-20" />
      </div>
      <div className="relative mx-auto grid max-w-7xl items-start gap-12 px-5 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28">
          <RevealText
            id="faq-heading"
            className="mb-6 text-4xl font-black leading-[1.05] tracking-[-0.03em] sm:text-5xl"
            lines={[{ text: "Dúvidas" }, { text: "comuns.", className: "text-gold-500" }]}
          />
          <Reveal delay={0.1}>
            <p className="text-base leading-relaxed text-gray-400 sm:text-lg">Prazos, escopo e como a metodologia da R.Guirado funciona na prática.</p>
          </Reveal>
        </div>

        <Stagger className="border-t border-white/20" stagger={0.08}>
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <StaggerItem key={faq.q}>
                <div className={`relative overflow-hidden border-b transition-colors duration-500 ${isOpen ? "border-gold-500" : "border-white/10"}`}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="group flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left"
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="text-[11px] font-black tabular-nums text-gold-500">0{i + 1}</span>
                      <span className={`text-base font-bold leading-snug transition-colors sm:text-lg ${isOpen ? "text-white" : "text-gray-300 group-hover:text-white"}`}>{faq.q}</span>
                    </span>
                    {/* Two hairlines: a cross that folds into a minus when open. */}
                    <span aria-hidden="true" className={`relative h-4 w-4 shrink-0 transition-colors ${isOpen ? "text-gold-500" : "text-gray-400"}`}>
                      <span className="absolute left-0 top-1/2 h-[1.5px] w-4 -translate-y-1/2 bg-current" />
                      <motion.span
                        animate={{ rotate: isOpen ? 90 : 0, opacity: isOpen ? 0 : 1 }}
                        transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
                        className="absolute left-1/2 top-0 h-4 w-[1.5px] -translate-x-1/2 bg-current"
                      />
                    </span>
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
                        <p className="max-w-2xl pb-7 pl-9 pr-10 text-[15px] leading-relaxed text-gray-400">{faq.a}</p>
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
