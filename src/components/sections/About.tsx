import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Shield, Cpu, Linkedin, Instagram } from "lucide-react";
import { Button } from "../ui/Button";
import { SectionLabel } from "../ui/SectionLabel";
import { RevealText } from "../ui/RevealText";
import { Reveal } from "../ui/Reveal";
import { VideoCard } from "../ui/VideoCard";
import { scrollToForm } from "../../lib/scroll";
import { EASE_OUT_EXPO } from "../../lib/constants";

const team = [
  {
    name: "Ricardo Guirado",
    role: "Fundador e consultor principal",
    image: "/team/ricardo.webp",
    width: 640,
    height: 958,
    linkedin: "https://www.linkedin.com/in/ricardoguiradofranquias/",
    instagram: "https://www.instagram.com/ricardoguirado_/",
  },
  {
    name: "Gabriel Krüger",
    role: "Gestor de projetos",
    image: "/team/gabriel.webp",
    width: 383,
    height: 738,
    linkedin: "https://www.linkedin.com/in/gabriel-kruger/",
    instagram: "https://www.instagram.com/g.kruger97/",
  },
  {
    name: "Joshua Guirado",
    role: "Consultor de processos",
    image: "/team/joshua.webp",
    width: 640,
    height: 961,
    linkedin: "https://www.linkedin.com/in/joshua-guirado-681108353/",
    instagram: "https://www.instagram.com/joshuafguirado/",
  },
];

const differentiators = [
  { Icon: Shield, title: "Sem copiar e colar", desc: "Nossa metodologia parte da sua realidade, não de templates genéricos." },
  { Icon: Cpu, title: "IA aplicada à gestão", desc: "Automações e agentes de IA personalizados integrados ao seu fluxo real." },
];

function TeamCard({ member, index }: { member: (typeof team)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <motion.div
      ref={ref}
      initial={{ clipPath: "inset(100% 0% 0% 0% round 28px)" }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0% round 28px)" }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 1.3, delay: index * 0.12, ease: EASE_OUT_EXPO }}
      className="group relative overflow-hidden rounded-[1.75rem] border border-white/[0.07] bg-dark-800"
    >
      <div className="relative aspect-square overflow-hidden sm:aspect-[4/5]">
        <motion.img
          src={member.image}
          alt={`Foto de ${member.name}`}
          width={member.width}
          height={member.height}
          loading="lazy"
          decoding="async"
          style={{ y: imageY }}
          className="absolute left-0 top-[-8%] h-[116%] w-full object-cover object-top grayscale transition-[filter] duration-700 group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/10 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
        <div>
          <h4 className="text-base font-black leading-tight text-white">{member.name}</h4>
          <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-gold-400">{member.role}</p>
        </div>
        <div className="flex gap-1.5">
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn de ${member.name}`} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-dark-950/60 text-gray-300 backdrop-blur transition-colors hover:bg-gold-500 hover:text-dark-900">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href={member.instagram} target="_blank" rel="noopener noreferrer" aria-label={`Instagram de ${member.name}`} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-dark-950/60 text-gray-300 backdrop-blur transition-colors hover:bg-gold-500 hover:text-dark-900">
            <Instagram className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function About() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-dark-900 py-24 md:py-36" aria-labelledby="about-heading">
      <div className="pointer-events-none absolute bottom-[10%] right-[5%] h-[500px] w-[500px] rounded-full bg-gold-500/[0.05] blur-[140px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <SectionLabel className="mb-6">Quem somos</SectionLabel>
            <RevealText
              id="about-heading"
              className="mb-8 text-4xl font-black leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-6xl"
              lines={[{ text: "Consultoria de" }, { text: "dono para dono.", className: "text-gold-gradient" }]}
            />
            <Reveal>
              <p className="mb-8 border-l-2 border-gold-500/50 pl-5 text-lg font-light leading-relaxed text-gray-200 sm:text-xl">
                Crescer não é fazer mais do mesmo com mais afinco. É reinventar o que já não serve — antes que o mercado faça isso por você.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="mb-10 space-y-5 text-[15px] font-light leading-relaxed text-gray-400 sm:text-base">
              <p>
                Desde 2001, Ricardo Guirado e sua equipe acompanham empresários brasileiros exatamente no ponto de virada: quando o negócio pede um novo patamar e os métodos que trouxeram até aqui não levam adiante.
              </p>
              <p>
                São mais de 25 anos estruturando gestão, formatando redes de franquias e desenvolvendo lideranças em pequenas e médias empresas — em escala nacional, a partir de Maringá/PR.
              </p>
            </Reveal>

            <div className="mb-10 grid gap-4 sm:grid-cols-2">
              {differentiators.map(({ Icon, title, desc }, i) => (
                <Reveal key={title} delay={0.15 + i * 0.1} className="flex items-start gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gold-500/20 bg-gold-500/10">
                    <Icon className="h-4 w-4 text-gold-400" aria-hidden="true" />
                  </span>
                  <div>
                    <h4 className="mb-1 text-sm font-bold text-white">{title}</h4>
                    <p className="text-xs leading-relaxed text-gray-400">{desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <Button onClick={scrollToForm}>Agendar reunião com Ricardo</Button>
            </Reveal>
          </div>

          <Reveal direction="left" className="relative mx-auto w-full max-w-[340px]">
            <div className="absolute -inset-10 -z-10 rounded-full bg-gold-500/10 blur-[80px]" aria-hidden="true" />
            <VideoCard src="/media/institucional.mp4" poster="/media/institucional-poster.webp" label="Ricardo Guirado apresenta a R.Guirado">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-400">Conheça a R.Guirado</p>
              <p className="text-base font-black text-white">Ricardo Guirado</p>
              <p className="text-[11px] font-semibold text-gray-300">Fundador da R.Guirado</p>
            </VideoCard>
          </Reveal>
        </div>

        <div className="mt-24 md:mt-32">
          <Reveal className="mb-8 flex items-end justify-between gap-6">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-gray-400">Especialistas por trás da consultoria</h3>
            <span className="hidden h-px flex-1 bg-white/[0.08] sm:block" aria-hidden="true" />
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-3">
            {team.map((member, i) => (
              <TeamCard key={member.name} member={member} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
