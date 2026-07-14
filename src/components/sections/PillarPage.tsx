import React, { useEffect } from "react";
import { motion } from "motion/react";
import { ArrowLeft, CheckCircle2, Star, Zap, Users, BarChart3, Settings2 } from "lucide-react";
import { Button } from "../ui/Button";

interface PillarPageProps {
  pillarId: "franchising" | "gestao" | "performance";
}

const pillarDetails = {
  franchising: {
    title: "RGuirado Franchising",
    subtitle: "Formatação, Estruturação e Expansão de Franquias",
    tagline: "Transforme o seu modelo de negócio em uma rede de expansão nacional altamente lucrativa.",
    description: "Criamos a engenharia necessária para que sua marca cresça de forma padronizada, segura e previsível. Nosso trabalho cobre desde a análise de franqueabilidade até a criação de manuais operacionais e estratégias de venda de cotas de franquia.",
    color: "from-gold-400 to-gold-600",
    glowColor: "bg-gold-500/10",
    features: [
      { title: "Análise de Franqueabilidade", desc: "Estudo financeiro e operacional profundo para provar a viabilidade de replicação." },
      { title: "Manuais e Padronização", desc: "Documentação completa de processos para que cada franqueado opere com a qualidade da matriz." },
      { title: "COF e Jurídico Completo", desc: "Segurança total através da Circular de Oferta de Franquia e contratos robustos." },
      { title: "Funil de Vendas de Expansão", desc: "Desenho da máquina de captação e venda de franquias para investidores qualificados." }
    ],
    icon: <BarChart3 className="w-12 h-12 text-gold-400" />
  },
  gestao: {
    title: "Gestão Estratégica",
    subtitle: "Otimização de Processos, Finanças e Governança",
    tagline: "Estruture sua empresa para crescer sem depender da presença física do fundador.",
    description: "Organizamos os pilares de governança, finanças e processos internos. Mapeamos gargalos, implementamos indicadores de performance (KPIs) claros e desenhamos um fluxo de trabalho que traga previsibilidade de caixa e autonomia operacional.",
    color: "from-blue-400 to-blue-600",
    glowColor: "bg-blue-500/10",
    features: [
      { title: "Diagnóstico e DRE", desc: "Análise financeira cirúrgica para otimização de margens e controle de custos." },
      { title: "Mapeamento de Processos", desc: "Desenho de fluxos eficientes que eliminam o retrabalho e aumentam a produtividade." },
      { title: "Painel de Indicadores (KPIs)", desc: "Criação de dashboards práticos para tomadas de decisão rápidas baseadas em dados." },
      { title: "Estrutura de Governança", desc: "Preparação societária e organizacional para captação de investimento ou sucessão." }
    ],
    icon: <Settings2 className="w-12 h-12 text-blue-400" />
  },
  performance: {
    title: "Performance Comportamental",
    subtitle: "Treinamento de Lideranças e Alinhamento Cultural",
    tagline: "Profissionalize suas equipes e forme líderes preparados para sustentar o crescimento.",
    description: "Empresas são feitas de pessoas. Alinhamos a cultura da sua empresa com os objetivos de crescimento, desenhamos planos de carreira atrativos e treinamos seus gestores para operarem em alta performance com foco em resultados reais.",
    color: "from-purple-400 to-purple-600",
    glowColor: "bg-purple-500/10",
    features: [
      { title: "Desenvolvimento de Líderes", desc: "Capacitação prática para que seus gerentes ajam como donos do negócio." },
      { title: "Alinhamento Cultural", desc: "Definição clara de valores e rituais corporativos para reter os melhores talentos." },
      { title: "Planos de Cargos e Salários", desc: "Estruturação de metas, bonificações e trilhas de carreira transparentes." },
      { title: "Recrutamento Estratégico", desc: "Processo otimizado para contratar pessoas que combinam perfeitamente com a cultura." }
    ],
    icon: <Users className="w-12 h-12 text-purple-400" />
  }
};

export function PillarPage({ pillarId }: PillarPageProps) {
  const detail = pillarDetails[pillarId];

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pillarId]);

  const handleBack = () => {
    window.location.hash = "";
  };

  const handleCTA = () => {
    window.location.hash = "";
    // Wait briefly for page transition, then scroll
    setTimeout(() => {
      document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  return (
    <div className="min-h-screen bg-dark-900 text-white relative overflow-hidden pb-24">
      {/* Background Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className={`absolute top-[-10%] right-[-10%] w-[600px] h-[600px] ${detail.glowColor} blur-[120px] rounded-full`} />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-dark-800/20 blur-[100px] rounded-full" />
      </div>

      {/* Floating Back Button & Logo Header */}
      <header className="max-w-7xl mx-auto px-6 pt-12 flex justify-between items-center relative z-20">
        <button 
          onClick={handleBack}
          className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 border border-white/10 hover:border-gold-500/50 hover:bg-gold-500/10 text-gray-300 hover:text-white transition-all shadow-xl group cursor-pointer"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-semibold text-sm">Voltar para Início</span>
        </button>
        <span className="font-heading font-black text-2xl tracking-tighter cursor-pointer" onClick={handleBack}>
          RGuirado<span className="text-gold-500">.</span>
        </span>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 pt-20 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Heading and Tagline */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <span className={`inline-block text-sm font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r ${detail.color}`}>
                {detail.subtitle}
              </span>
              <h1 className="text-5xl sm:text-6xl font-black tracking-tight leading-none">
                {detail.title}
              </h1>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-2xl font-light text-gray-300 leading-relaxed border-l-2 border-gold-500/30 pl-6"
            >
              {detail.tagline}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-6 text-lg text-gray-400 leading-relaxed"
            >
              <p>{detail.description}</p>
              <p>
                Estruturamos soluções customizadas baseadas na realidade da sua empresa, focando em gerar margem, reter talentos e blindar a sua operação para crescer exponencialmente.
              </p>
            </motion.div>

            {/* Premium CTA Button */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="pt-4"
            >
              <Button onClick={handleCTA} className="w-full sm:w-auto text-lg py-5 px-10 shadow-2xl shadow-gold-500/20">
                Falar com um Especialista
              </Button>
            </motion.div>
          </div>

          {/* Right Column: Features and Deliverables */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-gradient-to-br from-dark-800 to-dark-900 border border-white/5 rounded-[2.5rem] p-10 md:p-12 shadow-2xl relative overflow-hidden"
            >
              {/* Decorative Subtle Corner Gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-[40px] pointer-events-none" />

              <div className="flex items-center gap-6 mb-10 relative z-10">
                <div className="w-20 h-20 bg-dark-900 rounded-2xl flex items-center justify-center border border-white/5 shadow-inner">
                  {detail.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-black tracking-tight">O que entregamos</h2>
                  <p className="text-gray-400 text-sm">Escopo detalhado de atuação</p>
                </div>
              </div>

              <div className="space-y-8 relative z-10">
                {detail.features.map((feature, index) => (
                  <div key={index} className="flex gap-5 items-start">
                    <CheckCircle2 className="w-6 h-6 text-gold-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-lg font-bold text-white tracking-tight mb-1">{feature.title}</h4>
                      <p className="text-gray-400 text-md leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Small Premium Highlight Box */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-5"
            >
              <div className="w-12 h-12 bg-gold-500/10 rounded-full flex items-center justify-center shrink-0">
                <Star className="w-6 h-6 text-gold-400" />
              </div>
              <p className="text-gray-300 text-sm font-medium">
                Metodologia testada e comprovada em dezenas de empresas em todo o território nacional.
              </p>
            </motion.div>
          </div>

        </div>
      </main>
    </div>
  );
}
