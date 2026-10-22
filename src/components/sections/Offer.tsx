import React from "react";
import { Milestone, Sliders, Cpu, Layers } from "lucide-react";
import { SectionLabel } from "../ui/SectionLabel";
import { RevealText } from "../ui/RevealText";
import { Reveal, Stagger, StaggerItem } from "../ui/Reveal";
import { SpotlightCard } from "../ui/SpotlightCard";

const differentiators = [
  { Icon: Milestone, title: "25 anos de estrada real", desc: "Desde 2001 no campo, com problemas de verdade e resultados verificáveis." },
  { Icon: Sliders, title: "Personalização máxima", desc: "Temos método, não template. Preservamos sua cultura, identidade e valores." },
  { Icon: Cpu, title: "IA de forma prática", desc: "Tecnologia que reduz retrabalho, automatiza processos e apoia decisões." },
  { Icon: Layers, title: "Negócio + gente", desc: "Unimos estratégia, expansão e comportamento. Na prática, andam juntos." },
];

export function Offer() {
  return (
    <section id="diferenciais" className="relative overflow-hidden bg-dark-900 py-24 md:py-36" aria-labelledby="offer-heading">
      <div className="pointer-events-none absolute right-[10%] top-[30%] h-[500px] w-[500px] rounded-full bg-gold-500/[0.05] blur-[140px]" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <SectionLabel className="mb-6">Diferenciais</SectionLabel>
          <RevealText
            id="offer-heading"
            className="mb-8 text-4xl font-black leading-[1.05] tracking-[-0.03em] sm:text-5xl"
            lines={[{ text: "Por que escolher a" }, { text: "R.Guirado?", className: "text-gold-gradient" }]}
          />
          <Reveal delay={0.1}>
            <p className="text-base font-light leading-relaxed text-gray-400 sm:text-lg">
              Falamos a língua de quem tem folha para pagar no dia 5 e sonho grande na cabeça. Unimos experiência real com tecnologia aplicada.
            </p>
          </Reveal>
        </div>

        <Stagger className="grid gap-4 sm:grid-cols-2 sm:gap-5" stagger={0.1}>
          {differentiators.map(({ Icon, title, desc }, i) => (
            <StaggerItem key={title} className={`h-full ${i % 2 === 1 ? "sm:translate-y-10" : ""}`}>
              <SpotlightCard className="h-full p-7 sm:p-8">
                <span className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-gold-500/20 bg-gold-500/10 transition-transform duration-500 group-hover:scale-110">
                  <Icon className="h-5 w-5 text-gold-400" aria-hidden="true" />
                </span>
                <h3 className="mb-3 text-xl font-black tracking-tight text-white">{title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">{desc}</p>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
