import React from "react";
import { Briefcase, BarChart3, Brain, ArrowUpRight } from "lucide-react";
import { SectionLabel } from "../ui/SectionLabel";
import { RevealText } from "../ui/RevealText";
import { Reveal, Stagger, StaggerItem } from "../ui/Reveal";
import { SpotlightCard } from "../ui/SpotlightCard";

const pillars = [
  {
    id: "franchising",
    Icon: Briefcase,
    title: "Franchising",
    desc: "Transforme seu negócio em uma rede de franquias de sucesso. Empacotamos seu modelo para que seja replicado e expandido nacionalmente.",
    tags: ["Franqueabilidade", "Formatação", "Expansão"],
  },
  {
    id: "gestao",
    Icon: BarChart3,
    title: "Gestão Estratégica",
    desc: "Transforme crescimento em plano, não em sorte. Estabelecemos governança, metas mensuráveis e rotina de execução.",
    tags: ["Planejamento", "Processos", "IA aplicada"],
  },
  {
    id: "performance",
    Icon: Brain,
    title: "Performance Comportamental",
    desc: "Eleve o potencial humano e a liderança do seu time. Alinhamos a cultura aos objetivos e desenvolvemos inteligência comportamental.",
    tags: ["Liderança", "RH estratégico", "Assessment"],
  },
];

export function Services() {
  return (
    <section id="pilares" className="relative overflow-hidden bg-dark-900 py-24 md:py-36" aria-labelledby="services-heading">
      <div className="pointer-events-none absolute left-[5%] top-[15%] h-[600px] w-[600px] rounded-full bg-gold-500/[0.05] blur-[140px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mb-14 grid gap-8 md:mb-20 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <div>
            <SectionLabel className="mb-6">Os 3 pilares</SectionLabel>
            <RevealText
              id="services-heading"
              className="text-4xl font-black leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-6xl"
              lines={[{ text: "Três frentes." }, { text: "Um objetivo:", className: "text-gray-500" }, { text: "o próximo nível.", className: "text-gold-gradient" }]}
            />
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-md text-base font-light leading-relaxed text-gray-400 sm:text-lg lg:ml-auto">
              Contrate um pilar isolado ou combine-os em um plano integrado. O diagnóstico inicial define o caminho — sempre desenhado para o seu negócio.
            </p>
          </Reveal>
        </div>

        <Stagger className="grid gap-5 md:grid-cols-3 md:gap-6" stagger={0.15}>
          {pillars.map(({ id, Icon, title, desc, tags }, idx) => (
            <StaggerItem key={id} className="h-full">
              <SpotlightCard
                tilt
                onClick={() => (window.location.hash = `#/${id}`)}
                role="link"
                aria-label={`Ver mais sobre ${title}`}
                className="flex h-full cursor-pointer flex-col p-7 transition-colors duration-500 hover:bg-dark-800/80 sm:p-9"
              >
                <div className="mb-10 flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gold-500/20 bg-gold-500/10 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                    <Icon className="h-6 w-6 text-gold-400" aria-hidden="true" />
                  </div>
                  <span className="font-black text-5xl leading-none tracking-tighter text-white/[0.06] transition-colors duration-500 group-hover:text-gold-500/20">0{idx + 1}</span>
                </div>

                <h3 className="mb-4 text-2xl font-black tracking-tight text-white sm:text-[1.7rem]">{title}</h3>
                <p className="mb-8 text-[15px] leading-relaxed text-gray-400 transition-colors group-hover:text-gray-300">{desc}</p>

                <div className="mt-auto">
                  <ul className="mb-8 flex flex-wrap gap-2">
                    {tags.map((t) => (
                      <li key={t} className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-400">
                        {t}
                      </li>
                    ))}
                  </ul>
                  <span className="flex items-center justify-between border-t border-white/[0.07] pt-5 text-xs font-extrabold uppercase tracking-[0.16em] text-gold-500">
                    Saiba mais
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-500/30 transition-all duration-500 group-hover:rotate-45 group-hover:bg-gold-500 group-hover:text-dark-900">
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </span>
                </div>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
