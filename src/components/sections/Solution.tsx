import React, { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useSpring } from "motion/react";
import { Button } from "../ui/Button";
import { SectionDivider } from "../ui/SectionDivider";
import { RevealText } from "../ui/RevealText";
import { Reveal } from "../ui/Reveal";
import { scrollToForm } from "../../lib/scroll";
import { EASE_OUT_EXPO } from "../../lib/constants";

const steps = [
  {
    letter: "A",
    title: "Análise",
    subtitle: "Antes de propor, entender.",
    desc: "Conversamos com você, abrimos os números, ouvimos o time e observamos a operação por dentro. Mapeamos processos, gargalos, margem e cultura de verdade — não o que está no organograma.",
    deliverable: "Um retrato honesto da sua empresa — inclusive as verdades que ninguém teve coragem de te dizer.",
  },
  {
    letter: "L",
    title: "Linha de ação",
    subtitle: "O plano é seu. Construído com você.",
    desc: "Definimos juntos o caminho: qual pilar entra em jogo — franchising, gestão ou comportamento. Cada projeto nasce com escopo, prazo, responsáveis e entregas definidos antes de começar.",
    deliverable: "Plano de ação claro com prioridades ordenadas, sem adivinhações.",
  },
  {
    letter: "T",
    title: "Transformação",
    subtitle: "Aqui a gente fica na execução.",
    desc: "Plano no papel não muda empresa. Execução muda. Estamos ao seu lado rodando os rituais de gestão, treinando o time, acompanhando indicadores, corrigindo rotas e mudando comportamentos.",
    deliverable: "Processos rodando, equipe engajada e resultados aparecendo no caixa.",
  },
  {
    letter: "A",
    title: "Autonomia",
    subtitle: "O sucesso mede-se pela nossa ausência.",
    desc: "O único jeito de medir se a consultoria funcionou: a empresa continuar performando depois que saímos. Deixamos métodos, indicadores e líderes formados, tirando o dono da operação.",
    deliverable: "Uma empresa que roda sozinha. E um dono livre para voltar a ser dono.",
  },
];

function StepCard({ step, index, active }: { step: (typeof steps)[number]; index: number; active: boolean }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -15% 0px" }}
      transition={{ duration: 1, ease: EASE_OUT_EXPO }}
      className={`relative border-t pt-8 transition-[opacity,border-color] duration-700 sm:pt-10 ${active ? "border-gold-500" : "border-white/15 lg:opacity-40"}`}
    >
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute right-0 top-4 select-none text-[7rem] font-black leading-none transition-colors duration-700 sm:text-[9rem] ${active ? "text-white/[0.07]" : "text-white/[0.03]"}`}
      >
        {step.letter}
      </span>
      <div className="relative">
        <div className="mb-6 flex items-center gap-4">
          <div>
            <p className={`mb-1 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors duration-700 ${active ? "text-gold-500" : "text-gray-500"}`}>Etapa 0{index + 1}</p>
            <h3 className="text-2xl font-black uppercase tracking-tight text-white">{step.title}</h3>
          </div>
        </div>
        <p className="mb-3 text-lg font-bold text-white">{step.subtitle}</p>
        <p className="mb-8 text-[15px] leading-relaxed text-gray-400">{step.desc}</p>
        <div className="grid gap-2 border-l-2 border-gold-500 pl-5 sm:grid-cols-[7rem_1fr] sm:gap-6">
          <p className="pt-0.5 text-[10px] font-bold uppercase tracking-[0.2em] text-gold-500">Você sai com</p>
          <p className="text-sm leading-relaxed text-gray-200">{step.deliverable}</p>
        </div>
      </div>
    </motion.article>
  );
}

export function Solution() {
  const [active, setActive] = useState(0);
  const stepsRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: stepsRef, offset: ["start 60%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  // The active step follows how far the rail has been scrolled through.
  useMotionValueEvent(scrollYProgress, "change", (p) => {
    setActive(Math.min(steps.length - 1, Math.max(0, Math.floor(p * steps.length))));
  });

  return (
    <section id="metodo" className="relative bg-dark-950 pb-24 pt-20 md:pb-36 md:pt-28" aria-labelledby="solution-heading">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionDivider index="02" label="Método ALTA" note="Análise · Linha de ação · Transformação · Autonomia" className="mb-14 md:mb-20" />
      </div>
      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        {/* Sticky narrative column */}
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <RevealText
            id="solution-heading"
            className="mb-6 text-4xl font-black leading-[1.05] tracking-[-0.03em] sm:text-5xl"
            lines={[{ text: "Toda consultoria quer ficar." }, { text: "A gente quer te dar alta.", className: "text-gold-500" }]}
          />
          <Reveal delay={0.1}>
            <p className="mb-10 max-w-lg text-base leading-relaxed text-gray-400 sm:text-lg">
              Consultoria séria não é sobre entregar diagnóstico bonito. É sobre fazer a empresa andar — e continuar andando depois que a gente sai. Por isso todo projeto percorre quatro etapas.
            </p>
          </Reveal>

          {/* A · L · T · A indicator, lit by the step in view */}
          <div className="mb-10 hidden items-end gap-3 lg:flex" aria-hidden="true">
            {steps.map((s, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <motion.span
                  animate={{ color: i <= active ? "#f3c611" : "rgba(255,255,255,0.08)", scale: i === active ? 1.08 : 1 }}
                  transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
                  className="text-[5.5rem] font-black leading-none tracking-tighter"
                >
                  {s.letter}
                </motion.span>
                <motion.span animate={{ scaleX: i === active ? 1 : 0 }} className="h-[2px] w-10 origin-left bg-gold-500" transition={{ duration: 0.5 }} />
              </div>
            ))}
          </div>

          <Reveal delay={0.2} className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <Button onClick={scrollToForm}>Começar pela análise</Button>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-500">Método ALTA®</span>
          </Reveal>
        </div>

        {/* Steps with a progress rail */}
        <div ref={stepsRef} className="relative pl-6 sm:pl-10">
          <div className="absolute bottom-0 left-0 top-0 w-px bg-white/10" aria-hidden="true">
            <motion.div className="h-full w-full origin-top bg-gold-500" style={{ scaleY: progress }} />
          </div>
          <div className="space-y-14 lg:space-y-[16vh] lg:py-[6vh]">
            {steps.map((step, i) => (
              <StepCard key={i} step={step} index={i} active={i === active} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
