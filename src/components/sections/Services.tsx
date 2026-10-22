import React from "react";
import { RevealText } from "../ui/RevealText";
import { Reveal, Stagger, StaggerItem } from "../ui/Reveal";
import { Curtain } from "../ui/Curtain";
import { SectionDivider } from "../ui/SectionDivider";
import { Arrow } from "../ui/Icons";

/** Tiny diagrams drawn for each pillar; they come alive when the card is hovered. */
const marks = {
  // One unit that replicates into a network.
  franchising: (
    <svg viewBox="0 0 88 28" className="h-7 w-[88px]" aria-hidden="true">
      <rect x="0" y="4" width="20" height="20" className="fill-current" />
      {[0, 1, 2].map((i) => (
        <rect
          key={i}
          x={34 + i * 19}
          y="8"
          width="12"
          height="12"
          className="fill-none stroke-current transition-[opacity,transform] duration-500 group-hover:translate-x-0 group-hover:opacity-100 opacity-30 -translate-x-2"
          style={{ transitionDelay: `${i * 70}ms` }}
          strokeWidth="1.5"
        />
      ))}
    </svg>
  ),
  // Bars that climb into a plan.
  gestao: (
    <svg viewBox="0 0 88 28" className="h-7 w-[88px]" aria-hidden="true">
      {[8, 13, 19, 28].map((h, i) => (
        <rect
          key={i}
          x={i * 16}
          y={28 - h}
          width="10"
          height={h}
          className="origin-bottom fill-current transition-transform duration-500 [transform-box:fill-box] group-hover:scale-y-100 scale-y-50"
          style={{ transitionDelay: `${i * 70}ms` }}
        />
      ))}
      <path d="M66 22h22" className="stroke-current" strokeWidth="1.5" />
    </svg>
  ),
  // Scattered strokes that align.
  performance: (
    <svg viewBox="0 0 88 28" className="h-7 w-[88px]" aria-hidden="true">
      {[-40, 25, -15, 50, -30, 10].map((r, i) => (
        <line
          key={i}
          x1={6 + i * 15}
          y1="4"
          x2={6 + i * 15}
          y2="24"
          strokeWidth="2.5"
          className="stroke-current transition-[rotate] duration-500 [rotate:var(--r)] [transform-box:fill-box] [transform-origin:center] group-hover:[rotate:0deg]"
          style={{ "--r": `${r}deg`, transitionDelay: `${i * 50}ms` } as React.CSSProperties}
        />
      ))}
    </svg>
  ),
};

const pillars = [
  {
    id: "franchising" as const,
    title: "Franchising",
    desc: "Transforme seu negócio em uma rede de franquias de sucesso. Empacotamos seu modelo para que seja replicado e expandido nacionalmente.",
    tags: ["Franqueabilidade", "Formatação", "Expansão"],
  },
  {
    id: "gestao" as const,
    title: "Gestão Estratégica",
    desc: "Transforme crescimento em plano, não em sorte. Estabelecemos governança, metas mensuráveis e rotina de execução.",
    tags: ["Planejamento", "Processos", "IA aplicada"],
  },
  {
    id: "performance" as const,
    title: "Performance Comportamental",
    desc: "Eleve o potencial humano e a liderança do seu time. Alinhamos a cultura aos objetivos e desenvolvemos inteligência comportamental.",
    tags: ["Liderança", "RH estratégico", "Assessment"],
  },
];

export function Services() {
  return (
    <Curtain id="pilares" aria-labelledby="services-heading" className="pb-24 pt-14 md:pb-32 md:pt-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionDivider index="01" label="Pilares" note="Três frentes de atuação" tone="light" className="mb-14 md:mb-20" />

        <div className="mb-14 grid gap-8 md:mb-20 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <RevealText
            id="services-heading"
            className="text-4xl font-black leading-[1.03] tracking-[-0.03em] sm:text-5xl lg:text-6xl"
            lines={[{ text: "Três frentes." }, { text: "Um objetivo:", className: "text-dark-950/35" }, { text: "o próximo nível." }]}
          />
          <Reveal delay={0.2}>
            <p className="max-w-md text-base leading-relaxed text-ink sm:text-lg lg:ml-auto">
              Contrate um pilar isolado ou combine-os em um plano integrado. O diagnóstico inicial define o caminho — sempre desenhado para o seu negócio.
            </p>
          </Reveal>
        </div>

        <Stagger as="ol" className="grid border-t border-dark-950 md:grid-cols-3" stagger={0.12}>
          {pillars.map(({ id, title, desc, tags }, idx) => (
            <StaggerItem as="li" key={id} className={`h-full border-b border-dark-950/15 md:border-b-0 ${idx > 0 ? "md:border-l" : ""}`}>
              <a
                href={`#/${id}`}
                className="group relative flex h-full flex-col overflow-hidden px-1 py-9 text-dark-950 transition-colors duration-500 hover:text-white sm:px-8 sm:py-10"
                aria-label={`Ver mais sobre ${title}`}
              >
                {/* Navy fill that rises from the bottom on hover. */}
                <span aria-hidden="true" className="absolute inset-0 -z-0 origin-bottom scale-y-0 bg-dark-950 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100" />
                <div className="relative flex h-full flex-col">
                  <div className="mb-12 flex items-start justify-between">
                    <span className="text-[11px] font-black tabular-nums tracking-[0.2em] text-dark-950/50 transition-colors duration-500 group-hover:text-gold-500">0{idx + 1}</span>
                    <span className="text-dark-950 transition-colors duration-500 group-hover:text-gold-500">{marks[id]}</span>
                  </div>
                  <h3 className="mb-4 text-2xl font-black tracking-tight sm:text-[1.75rem]">{title}</h3>
                  <p className="mb-8 text-[15px] leading-relaxed text-ink transition-colors duration-500 group-hover:text-gray-300">{desc}</p>
                  <p className="mb-10 mt-auto text-[11px] font-semibold uppercase tracking-[0.16em] text-dark-950/55 transition-colors duration-500 group-hover:text-gray-400">
                    {tags.join("  /  ")}
                  </p>
                  <span className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em]">
                    Ver o pilar
                    <Arrow className="h-2.5 w-6 transition-transform duration-500 group-hover:translate-x-2" />
                  </span>
                </div>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Curtain>
  );
}
