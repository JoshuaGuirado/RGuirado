import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Check } from "lucide-react";
import { Button } from "../ui/Button";
import { SectionLabel } from "../ui/SectionLabel";
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
  const scale = useTransform(scrollYProgress, [0, 1], [0.82, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [flip ? 8 : -8, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [80, 0]);

  return (
    <div ref={ref} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
      <motion.div style={{ scale, rotate, y }} className={`relative mx-auto w-full max-w-[340px] ${flip ? "lg:order-2" : ""}`}>
        <div className="absolute -inset-8 -z-10 rounded-full bg-gold-500/10 blur-[70px]" aria-hidden="true" />
        <VideoCard src={c.video} poster={c.poster} label={`Depoimento de ${c.person}, ${c.company}`}>
          <p className="text-base font-black text-white">{c.person}</p>
          <p className="text-[11px] font-semibold text-gray-300">{c.role}</p>
        </VideoCard>
      </motion.div>

      <div className={flip ? "lg:order-1" : ""}>
        <Reveal>
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-gold-500 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-dark-900">Case 0{index + 1}</span>
            <span className="rounded-full border border-gold-500/30 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-gold-400">{c.pillar}</span>
          </div>
          <h3 className="mb-2 text-3xl font-black tracking-tight text-white sm:text-4xl">{c.company}</h3>
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.14em] text-gray-500">{c.segment}</p>
          <p className="mb-8 text-base font-light leading-relaxed text-gray-300 sm:text-lg">{c.summary}</p>
        </Reveal>
        <Stagger className="grid gap-3 sm:grid-cols-2" stagger={0.08}>
          {c.results.map((r) => (
            <StaggerItem key={r} className="flex items-start gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-500/15">
                <Check className="h-3 w-3 text-gold-400" aria-hidden="true" />
              </span>
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
    <section id="cases" className="relative overflow-hidden bg-dark-950 py-24 md:py-36" aria-labelledby="cases-heading">
      <div className="pointer-events-none absolute -left-60 top-1/3 h-[600px] w-[600px] rounded-full bg-gold-500/[0.06] blur-[150px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center md:mb-24">
          <SectionLabel center className="mb-6">
            Cases de sucesso
          </SectionLabel>
          <RevealText
            id="cases-heading"
            className="mb-6 text-4xl font-black leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-6xl"
            lines={[{ text: "Quem viveu o método" }, { text: "conta como foi.", className: "text-gold-gradient" }]}
          />
          <Reveal delay={0.15}>
            <p className="text-base font-light leading-relaxed text-gray-400 sm:text-lg">Sem roteiro de vendas: empresários e líderes falando, com as próprias palavras, do que mudou depois da R.Guirado.</p>
          </Reveal>
        </div>

        <div className="space-y-24 md:space-y-36">
          {cases.map((c, i) => (
            <CaseRow key={c.id} c={c} index={i} />
          ))}
        </div>

        {/* Written testimonials */}
        <div className="mt-28 md:mt-40">
          <Reveal className="mb-10 text-center">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-gray-400">
              E o que mais dizem <span className="text-gold-500">nossos parceiros</span>
            </h3>
          </Reveal>
          <Stagger className="grid gap-5 md:grid-cols-3" stagger={0.12}>
            {testimonials.map((t) => (
              <StaggerItem key={t.company} className="h-full">
                <figure className="flex h-full flex-col rounded-[1.75rem] border border-white/[0.07] bg-dark-900/70 p-7 transition-colors duration-500 hover:border-gold-500/30 sm:p-8">
                  <img src={`/logos/${t.logo}.svg`} alt={t.company} loading="lazy" className="mb-6 h-12 w-auto max-w-[140px] self-start object-contain object-left opacity-80" />
                  <blockquote className="mb-8 text-[15px] leading-relaxed text-gray-300">“{t.quote}”</blockquote>
                  <figcaption className="mt-auto border-t border-white/[0.07] pt-5">
                    <p className="text-sm font-bold text-white">{t.author}</p>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-gold-500/80">{t.company}</p>
                  </figcaption>
                </figure>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <Reveal className="mt-16 text-center">
          <Button onClick={scrollToForm} aria-label="Quero ser o próximo case">
            Quero ser o próximo case
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
