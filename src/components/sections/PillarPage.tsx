import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "../ui/Button";
import { LogoPillar } from "../ui/BrandLogo";
import { VideoCard } from "../ui/VideoCard";
import { MotionFilm } from "../ui/MotionFilm";
import { RevealText } from "../ui/RevealText";
import { Reveal, Stagger, StaggerItem } from "../ui/Reveal";
import { SectionDivider } from "../ui/SectionDivider";
import { Arrow } from "../ui/Icons";
import { gestaoScenes } from "../films/gestaoScenes";
import { performanceScenes } from "../films/performanceScenes";
import { queueScrollTo } from "../../lib/scroll";
import { EASE_OUT_EXPO } from "../../lib/constants";

type PillarId = "franchising" | "gestao" | "performance";

interface PillarPageProps {
  pillarId: PillarId;
}

const pillarDetails = {
  franchising: {
    title: "Franchising",
    subtitle: "Formatação, Estruturação e Expansão de Franquias",
    tagline: "Transforme seu negócio em uma rede de franquias de sucesso.",
    description: "Franquear não é vender uma marca. É empacotar um modelo que funciona, de forma que outra pessoa consiga reproduzi-lo com o mesmo resultado. Nós fazemos esse empacotamento — do teste de viabilidade à rede em operação.",
    ctaText: "Quero avaliar o potencial de expansão da minha marca",
    features: [
      { title: "Análise de Franqueabilidade", desc: "Antes de investir em expansão, a pergunta certa é: seu negócio está pronto para ser replicado? Fazemos uma avaliação criteriosa dos aspectos jurídicos, financeiros, econômicos e de mercado." },
      { title: "Modelagem de Negócio para Franqueamento", desc: "Nenhum modelo se prova no papel. Estruturamos com você a unidade piloto — no formato exato em que a franquia será vendida — e testamos na prática." },
      { title: "Formatação de Franquia", desc: "O pacote completo que transforma sua empresa em franqueadora: manuais operacionais, documentos jurídicos (COF, contratos), plataformas, softwares e suporte de expansão." },
      { title: "Mentoria para Franqueadoras", desc: "Sua rede já existe, mas a expansão travou ou os resultados são desiguais. Nossa mentoria resolve gargalos operacionais e fortalece a liderança à frente da rede." },
    ],
  },
  gestao: {
    title: "Gestão Estratégica",
    subtitle: "Otimização de Processos, Finanças e Governança",
    tagline: "Maximize sua eficiência e transforme crescimento em plano, não em sorte.",
    description: "Estratégia não é um documento bonito na gaveta. É saber onde você quer chegar, o que precisa ser feito nesta semana e quem é o responsável. É isso que construímos com você.",
    ctaText: "Quero estruturar minha gestão",
    features: [
      { title: "Plano de Negócio", desc: "Do modelo empresarial no papel à estruturação do negócio na prática. Definimos proposta de valor, modelo de receita, estrutura de custos, viabilidade e plano de implantação." },
      { title: "Planejamento Estratégico", desc: "Construa o futuro da sua empresa com objetivos claros, metas mensuráveis e um caminho viável, acompanhado de rituais de execução prática. Mais de 350 projetos conduzidos." },
      { title: "Gestão de Negócios com IA", desc: "Ajudamos você a escolher e implantar as ferramentas certas de Inteligência Artificial no seu negócio, criando agentes personalizados e automatizando processos operacionais." },
      { title: "Mentoria para Empreendedores", desc: "Sessões curtas, práticas e de alto nível para o empresário que precisa decidir bem, levando experiência prática e visão externa aos seus desafios." },
    ],
  },
  performance: {
    title: "Performance Comportamental",
    subtitle: "Treinamento de Lideranças e Alinhamento Cultural",
    tagline: "Eleve o potencial humano e a liderança da sua equipe.",
    description: "Nenhuma estratégia sobrevive a um time desalinhado. Empresa nenhuma cresce mais do que a maturidade das pessoas que a conduzem — começando pelo dono.",
    ctaText: "Quero desenvolver minha liderança e meu time",
    features: [
      { title: "RH Estratégico — do recrutamento ao desenvolvimento", desc: "Com plataforma tecnológica integrada e IA, estruturamos recrutamento, seleção, integração, avaliação de desempenho e planos de desenvolvimento." },
      { title: "Formação e Capacitação de Líderes", desc: "Desenvolvemos inteligência emocional, feedbacks construtivos, gestão de conflitos e mentalidade focada em resultados nos seus líderes e gestores." },
      { title: "Assessment Comportamental do CEO", desc: "O trabalho começa no topo: padrões de decisão, liderança e gatilhos emocionais do dono para torná-lo um líder assertivo e maduro." },
    ],
  },
};

const order: PillarId[] = ["franchising", "gestao", "performance"];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: EASE_OUT_EXPO },
});

/** Cinema-style opening: two black bars part to reveal the page. */
function Letterbox() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[90]" aria-hidden="true">
      <motion.div className="absolute inset-x-0 top-0 h-1/2 origin-top bg-black" initial={{ scaleY: 1 }} animate={{ scaleY: 0 }} transition={{ duration: 1.1, delay: 0.15, ease: [0.76, 0, 0.24, 1] }} />
      <motion.div className="absolute inset-x-0 bottom-0 h-1/2 origin-bottom bg-black" initial={{ scaleY: 1 }} animate={{ scaleY: 0 }} transition={{ duration: 1.1, delay: 0.15, ease: [0.76, 0, 0.24, 1] }} />
    </div>
  );
}

function FeatureRow({ feature, index }: { feature: { title: string; desc: string }; index: number }) {
  return (
    <StaggerItem as="li" className="group relative grid gap-4 border-b border-white/10 py-9 md:grid-cols-[5rem_1fr_1.2fr] md:gap-10 md:py-12">
      <span className="text-[11px] font-black tabular-nums tracking-[0.2em] text-gold-500">{String(index + 1).padStart(2, "0")}</span>
      <h3 className="text-2xl font-black leading-tight tracking-tight text-white sm:text-3xl">{feature.title}</h3>
      <p className="text-[15px] leading-relaxed text-gray-400 md:text-base">{feature.desc}</p>
      <span aria-hidden="true" className="absolute -bottom-px left-0 h-px w-full origin-left scale-x-0 bg-gold-500 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
    </StaggerItem>
  );
}

export function PillarPage({ pillarId }: PillarPageProps) {
  const detail = pillarDetails[pillarId];
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const mediaY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  const handleBack = () => {
    window.location.hash = "";
  };

  const handleCTA = () => {
    queueScrollTo("contato");
    window.location.hash = "";
  };

  const others = order.filter((id) => id !== pillarId);

  return (
    <div className="relative min-h-screen bg-dark-950 text-white">
      <Letterbox />

      <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 pt-6 sm:px-6 sm:pt-8">
        <button onClick={handleBack} className="group flex cursor-pointer items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-300 transition-colors hover:text-white">
          <Arrow className="h-2.5 w-5 rotate-180 transition-transform duration-300 group-hover:-translate-x-1" />
          <span className="hidden sm:inline">Voltar para o início</span>
          <span className="sm:hidden">Início</span>
        </button>
        <button onClick={handleBack} className="cursor-pointer" aria-label="R.Guirado - página inicial">
          <LogoPillar label={detail.title} />
        </button>
      </header>

      <main>
        {/* Hero */}
        <div ref={heroRef} className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-24 pt-16 sm:px-6 sm:pt-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:pb-32">
          <motion.div style={{ y: copyY }} className="min-w-0">
            <motion.p {...fadeUp(0.9)} className="mb-7 flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-500">
              <span className="h-px w-10 bg-gold-500" aria-hidden="true" />
              {detail.subtitle}
            </motion.p>
            <RevealText
              as="h1"
              immediate
              delay={1}
              className="mb-8 text-[2.3rem] font-black leading-[0.98] tracking-[-0.035em] min-[400px]:text-[2.6rem] sm:text-6xl lg:text-7xl"
              lines={detail.title.split(" ").map((w) => ({ text: w }))}
            />
            <motion.p {...fadeUp(1.3)} className="mb-6 max-w-xl text-xl font-medium leading-snug text-white sm:text-2xl">
              {detail.tagline}
            </motion.p>
            <motion.div {...fadeUp(1.4)} className="mb-10 max-w-xl space-y-5 text-base leading-relaxed text-gray-400 sm:text-lg">
              <p>{detail.description}</p>
              <p>Estruturamos soluções customizadas baseadas na realidade da sua empresa, focando em gerar margem, reter talentos e blindar a sua operação para crescer.</p>
            </motion.div>
            <motion.div {...fadeUp(1.5)}>
              <Button onClick={handleCTA} className="w-full sm:w-auto">
                {detail.ctaText}
              </Button>
            </motion.div>
          </motion.div>

          <motion.div style={{ y: mediaY }} className="relative mx-auto w-full max-w-[360px]">
            <motion.div initial={{ clipPath: "inset(100% 0% 0% 0%)" }} animate={{ clipPath: "inset(0% 0% 0% 0%)" }} transition={{ duration: 1.3, delay: 1, ease: EASE_OUT_EXPO }}>
              {pillarId === "franchising" ? (
                <VideoCard src="/media/reel.mp4" poster="/media/reel-poster.webp" label="Vídeo sobre franchising" mode="ambient">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-400">Franchising na prática</p>
                  <p className="text-sm font-bold text-white">Toque para ouvir</p>
                </VideoCard>
              ) : (
                <MotionFilm scenes={pillarId === "gestao" ? gestaoScenes : performanceScenes} label={detail.title} />
              )}
            </motion.div>
          </motion.div>
        </div>

        {/* Deliverables */}
        <section className="border-t border-white/10 bg-dark-900 pb-24 pt-20 md:pb-32 md:pt-28" aria-labelledby="deliverables-heading">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <SectionDivider index="01" label="O que entregamos" note={`${detail.features.length} frentes de trabalho`} className="mb-14 md:mb-20" />
            <div className="mb-12 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
              <RevealText
                id="deliverables-heading"
                className="text-4xl font-black leading-[1.03] tracking-[-0.03em] sm:text-5xl"
                lines={[{ text: "Escopo detalhado" }, { text: "de atuação.", className: "text-gold-500" }]}
              />
              <Reveal delay={0.15}>
                <p className="max-w-md text-base leading-relaxed text-gray-400 lg:ml-auto">Metodologia testada e comprovada em dezenas de empresas em todo o território nacional.</p>
              </Reveal>
            </div>
            <Stagger as="ol" className="border-t border-white/20" stagger={0.1}>
              {detail.features.map((feature, i) => (
                <FeatureRow key={feature.title} feature={feature} index={i} />
              ))}
            </Stagger>
            <Reveal className="mt-14">
              <Button onClick={handleCTA}>{detail.ctaText}</Button>
            </Reveal>
          </div>
        </section>

        {/* Other pillars */}
        <section className="bg-dark-950 pb-24 pt-20 md:pb-28" aria-label="Outros pilares">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <SectionDivider index="02" label="Outros pilares" className="mb-10" />
            <div className="grid md:grid-cols-2">
              {others.map((id, i) => (
                <a
                  key={id}
                  href={`#/${id}`}
                  className={`group flex items-end justify-between gap-6 border-b border-white/10 py-8 md:py-10 ${i === 1 ? "md:border-l md:pl-10" : "md:pr-10"}`}
                >
                  <span>
                    <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{pillarDetails[id].subtitle}</span>
                    <span className="block text-3xl font-black tracking-tight text-white transition-colors duration-300 group-hover:text-gold-500 sm:text-4xl">{pillarDetails[id].title}</span>
                  </span>
                  <Arrow className="mb-3 h-3 w-8 shrink-0 text-gold-500 transition-transform duration-500 group-hover:translate-x-2" />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
