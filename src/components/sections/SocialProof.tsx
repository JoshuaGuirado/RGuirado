import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "../ui/Button";
import { SectionDivider } from "../ui/SectionDivider";
import { RevealText } from "../ui/RevealText";
import { Reveal, Stagger, StaggerItem } from "../ui/Reveal";
import { VideoCard } from "../ui/VideoCard";
import { scrollToForm } from "../../lib/scroll";

const cases = [
  {
    id: "clinisport",
    company: "Clinisport Prime",
    segment: "Fisioterapia, nutrição e desempenho humano",
    person: "Kleber Barbão",
    role: "CEO da Clinisport Prime",
    pillar: "Gestão Estratégica",
    video: "/media/case-clinisport.mp4",
    poster: "/media/case-clinisport-poster.webp",
    summary:
      "Uma operação que já era referência em desempenho humano e precisava de estrutura para crescer sem perder a essência. A R.Guirado entrou para olhar a empresa de dentro para fora — e organizar a forma de decidir, de executar e de liderar.",
    results: ["Cultura de gestão orientada a processos", "Decisões mais seguras e bem fundamentadas", "Entrega técnica além do que foi acordado", "Método que segue em uso no dia a dia"],
  },
  {
    id: "legendarios",
    company: "Legendários Maringá",
    segment: "Workshop de liderança",
    person: "Weslley Kendrick Silva",
    role: "Coordenador geral · Legendários Maringá",
    pillar: "Performance Comportamental",
    video: "/media/case-legendarios.mp4",
    poster: "/media/case-legendarios-poster.webp",
    summary:
      "Um workshop para 40 líderes de diferentes organizações, construído a partir do perfil e da necessidade de cada gestor — para que cada um desenvolvesse melhor a sua própria liderança.",
    results: ["40 líderes capacitados em um único workshop", "Leitura do perfil comportamental de cada gestor", "Mais relacionamento e senso de pertencimento", "Liderança aplicada ao trabalho de cada um"],
  },
];

const testimonials = [
  {
    logo: "gelaboca",
    quote: "A estruturação de processos e a formatação de franquias da R.Guirado nos deram a segurança necessária para expandir nossa marca nacionalmente.",
    author: "Diretoria de Expansão",
    company: "Gela Boca Franquias",
  },
  {
    logo: "lavathru",
    quote: "Com a consultoria de gestão e processos, organizamos a casa por completo e destravamos um crescimento muito mais previsível.",
    author: "Sócio-fundador",
    company: "Lava Thru",
  },
  {
    logo: "platao",
    quote: "O trabalho comportamental com nossos líderes alinhou nossa cultura corporativa aos objetivos estratégicos de expansão.",
    author: "Direção de Operações",
    company: "Colégio Platão",
  },
];

function CaseRow({ c, index }: { c: (typeof cases)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const flip = index % 2 === 1;
  // The video swings into place as the row scrolls up to the middle of the screen.
  const scale = useTransform(scrollYProgress, [0, 1], [0.86, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [80, 0]);

  return (
    <div ref={ref} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
      <motion.div style={{ scale, y }} className={`relative mx-auto w-full max-w-[340px] ${flip ? "lg:order-2" : ""}`}>
        <VideoCard src={c.video} poster={c.poster} label={`Depoimento de ${c.person}, ${c.company}`}>
          <p className="text-base font-black text-white">{c.person}</p>
          <p className="text-[11px] font-semibold text-gray-300">{c.role}</p>
        </VideoCard>
      </motion.div>

      <div className={flip ? "lg:order-1" : ""}>
        <Reveal>
          <p className="mb-5 flex flex-wrap items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em]">
            <span className="text-gold-500">Case 0{index + 1}</span>
            <span className="h-px w-8 bg-white/25" aria-hidden="true" />
            <span className="text-gray-400">{c.pillar}</span>
          </p>
          <h3 className="mb-2 text-3xl font-black tracking-tight text-white sm:text-4xl">{c.company}</h3>
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.14em] text-gray-500">{c.segment}</p>
          <p className="mb-8 text-base leading-relaxed text-gray-300 sm:text-lg">{c.summary}</p>
        </Reveal>
        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">O que mudou</p>
        <Stagger as="ol" className="grid border-t border-white/15 sm:grid-cols-2 sm:gap-x-8" stagger={0.08}>
          {c.results.map((r, i) => (
            <StaggerItem as="li" key={r} className="flex items-baseline gap-4 border-b border-white/10 py-4">
              <span className="text-[11px] font-black tabular-nums text-gold-500">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-sm leading-snug text-gray-200">{r}</span>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </div>
  );
}

export function SocialProof() {
  return (
    <section id="cases" className="relative overflow-hidden bg-dark-950 pb-24 pt-20 md:pb-36 md:pt-28" aria-labelledby="cases-heading">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <SectionDivider index="03" label="Cases" note="Depoimentos em vídeo" className="mb-14 md:mb-20" />
        <div className="mb-16 grid gap-8 md:mb-24 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <RevealText
            id="cases-heading"
            className="text-4xl font-black leading-[1.03] tracking-[-0.03em] sm:text-5xl lg:text-6xl"
            lines={[{ text: "Quem viveu o método" }, { text: "conta como foi.", className: "text-gold-500" }]}
          />
          <Reveal delay={0.15}>
            <p className="max-w-md text-base leading-relaxed text-gray-400 sm:text-lg lg:ml-auto">Sem roteiro de vendas: empresários e líderes falando, com as próprias palavras, do que mudou depois da R.Guirado.</p>
          </Reveal>
        </div>

        <div className="space-y-24 md:space-y-36">
          {cases.map((c, i) => (
            <CaseRow key={c.id} c={c} index={i} />
          ))}
        </div>

        {/* Written testimonials */}
        <div className="mt-28 md:mt-40">
          <Reveal className="mb-10 flex items-center gap-6">
            <h3 className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.24em] text-gray-400">E o que mais dizem nossos parceiros</h3>
            <span className="h-px flex-1 bg-white/10" aria-hidden="true" />
          </Reveal>
          <Stagger className="grid md:grid-cols-3" stagger={0.12}>
            {testimonials.map((t, i) => (
              <StaggerItem key={t.company} className={`h-full border-white/10 py-8 md:px-8 md:py-2 ${i > 0 ? "border-t md:border-l md:border-t-0" : "md:pl-0"}`}>
                <figure className="flex h-full flex-col">
                  <img src={`/logos/${t.logo}.svg`} alt={t.company} loading="lazy" className="mb-7 h-11 w-auto max-w-[130px] self-start object-contain object-left opacity-70" />
                  <blockquote className="mb-8 text-[17px] font-medium leading-relaxed text-white">“{t.quote}”</blockquote>
                  <figcaption className="mt-auto">
                    <p className="text-sm font-bold text-white">{t.author}</p>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-gold-500">{t.company}</p>
                  </figcaption>
                </figure>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <Reveal className="mt-16">
          <Button onClick={scrollToForm} aria-label="Quero ser o próximo case">
            Quero ser o próximo case
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
