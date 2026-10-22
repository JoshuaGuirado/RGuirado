import React from "react";
import { RevealText } from "../ui/RevealText";
import { Reveal, Stagger, StaggerItem } from "../ui/Reveal";
import { SectionDivider } from "../ui/SectionDivider";

const differentiators = [
  { key: "25 anos", title: "de estrada real", desc: "Desde 2001 no campo, com problemas de verdade e resultados verificáveis." },
  { key: "Método", title: "não template", desc: "Personalização máxima: preservamos sua cultura, identidade e valores." },
  { key: "IA", title: "de forma prática", desc: "Tecnologia que reduz retrabalho, automatiza processos e apoia decisões." },
  { key: "Negócio", title: "+ gente", desc: "Unimos estratégia, expansão e comportamento. Na prática, andam juntos." },
];

export function Offer() {
  return (
    <section id="diferenciais" className="relative overflow-hidden bg-dark-900 pb-24 pt-20 md:pb-36 md:pt-28" aria-labelledby="offer-heading">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <SectionDivider index="05" label="Diferenciais" className="mb-14 md:mb-20" />

        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <RevealText
              id="offer-heading"
              className="mb-8 text-4xl font-black leading-[1.03] tracking-[-0.03em] sm:text-5xl"
              lines={[{ text: "Por que escolher a" }, { text: "R.Guirado?", className: "text-gold-500" }]}
            />
            <Reveal delay={0.1}>
              <p className="max-w-md text-base leading-relaxed text-gray-400 sm:text-lg">
                Falamos a língua de quem tem folha para pagar no dia 5 e sonho grande na cabeça. Unimos experiência real com tecnologia aplicada.
              </p>
            </Reveal>
          </div>

          <Stagger as="dl" className="border-t border-white/20" stagger={0.1}>
            {differentiators.map(({ key, title, desc }) => (
              <StaggerItem key={key} className="group relative grid gap-3 border-b border-white/10 py-7 sm:grid-cols-[1fr_1.1fr] sm:items-baseline sm:gap-10 sm:py-9">
                <dt className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                  {key} <span className="text-gray-500 transition-colors duration-500 group-hover:text-gold-500">{title}</span>
                </dt>
                <dd className="text-[15px] leading-relaxed text-gray-400">{desc}</dd>
                <span aria-hidden="true" className="absolute -bottom-px left-0 h-px w-full origin-left scale-x-0 bg-gold-500 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
