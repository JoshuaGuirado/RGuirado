import React from "react";
import { motion } from "motion/react";
import { Button } from "../ui/Button";

export function Solution() {
  const scrollToForm = () => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });

  const steps = [
    {
      letter: "A",
      title: "ANÁLISE",
      subtitle: "Antes de propor, entender.",
      desc: "Conversamos com você, abrimos os números, ouvimos o time e observamos a operação por dentro. Mapeamos processos, gargalos, margem e cultura de verdade — não o que está no organograma.",
      deliverable: "retrato honesto da sua empresa — inclusive as verdades que ninguém teve coragem de te dizer."
    },
    {
      letter: "L",
      title: "LINHA DE AÇÃO",
      subtitle: "O plano é seu. Construído com você.",
      desc: "Definimos juntos o caminho: qual pilar entra em jogo — franchising, gestão ou comportamento. Cada projeto nasce com escopo, prazo, responsáveis e entregas definidos antes de começar.",
      deliverable: "plano de ação claro com prioridades ordenadas, sem adivinhações."
    },
    {
      letter: "T",
      title: "TRANSFORMAÇÃO",
      subtitle: "Aqui a gente fica na execução.",
      desc: "Plano no papel não muda empresa. Execução muda. Estamos ao seu lado rodando os rituais de gestão, treinando o time, acompanhando indicadores, corrigindo rotas e mudando comportamentos.",
      deliverable: "processos rodando, equipe engajada e resultados aparecendo no caixa."
    },
    {
      letter: "A",
      title: "AUTONOMIA",
      subtitle: "O sucesso mede-se pela nossa ausência.",
      desc: "O único jeito de medir se a consultoria funcionou: a empresa continuar performando depois que saímos. Deixamos métodos, indicadores e líderes formados, tirando o dono da operação.",
      deliverable: "uma empresa que roda sozinha. E um dono livre para voltar a ser dono."
    }
  ];

  return (
    <section id="metodo" className="py-14 md:py-24 relative overflow-hidden bg-dark-800 border-t border-white/5" aria-labelledby="solution-heading">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-[20%] right-[5%] w-[500px] h-[500px] bg-gold-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Row 1: Header (Intro & Slogans) */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-12 lg:mb-16">
          {/* Left Side: Concept & Quote */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-bold text-gold-500 uppercase tracking-widest block">Nosso Método</span>
              <h2 id="solution-heading" className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                Um método - <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">ALTA</span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-gray-400 leading-relaxed font-light">
              Consultoria séria não é sobre entregar diagnóstico bonito. É sobre fazer a empresa andar — e continuar andando depois que a gente sai. Por isso todo projeto da R.Guirado percorre quatro etapas. Elas se chamam ALTA.
            </p>

            {/* Frase Yves Doz Integrada */}
            <div className="border-l-2 border-gold-500 pl-4 sm:pl-6 italic text-gray-300 text-base sm:text-lg leading-relaxed">
              "As empresas morrem hoje não por fazer as coisas erradas, mas por fazerem bem as mesmas coisas durante tempo demais."
              <span className="block text-xs sm:text-sm font-black uppercase tracking-widest text-gold-500 mt-2 not-italic">— Yves Doz</span>
            </div>
          </div>

          {/* Right Side: Slogan highlight & CTA */}
          <div className="lg:col-span-5 space-y-6">
            {/* Fundo Escuro Destaque Slogan */}
            <div className="p-6 rounded-3xl bg-dark-900 border border-gold-500/10 text-center relative overflow-hidden">
              <div className="absolute -top-12 -left-12 w-24 h-24 bg-gold-500/5 rounded-full blur-[20px]" />
              <p className="text-md text-gray-400 font-light leading-relaxed">
                Toda consultoria quer ficar.
              </p>
              <p className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600 tracking-tight mt-1">
                A gente quer te dar alta.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-black tracking-tight text-white">Da dependência à alta.</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                ALTA é a distância entre a empresa que só funciona quando você está presente e a empresa que cresce mesmo quando você não está. É esse percurso que percorremos com você.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4 justify-between">
              <Button onClick={scrollToForm} className="w-full sm:w-auto text-xs py-3.5 px-6" aria-label="Começar pela Análise">
                Começar pela Análise
              </Button>
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block">
                Método ALTA®
              </span>
            </div>
          </div>
        </div>

        {/* Row 2: The 4 Steps (Side by Side in 4-Column Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="group bg-dark-900 border border-gold-500/10 hover:border-gold-500/30 rounded-[1.8rem] md:rounded-[2rem] p-6 md:p-8 shadow-xl transition-all relative overflow-hidden flex flex-col justify-between min-h-0 md:min-h-[380px]"
            >
              {/* Decorative Background Letter */}
              <div className="absolute -top-6 -right-4 font-heading font-black text-[7rem] text-white/2 select-none group-hover:text-gold-500/5 transition-colors duration-500">
                {step.letter}
              </div>

              <div className="relative z-10 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center font-heading font-black text-gold-500 text-sm">
                      {step.letter}
                    </span>
                    <h3 className="text-lg font-black tracking-tight text-white group-hover:text-gold-400 transition-colors">
                      {step.title}
                    </h3>
                  </div>

                  <h5 className="text-xs font-bold text-gray-300 leading-snug">
                    {step.subtitle}
                  </h5>

                  <p className="text-gray-400 text-xs leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 space-y-1 mt-4">
                  <span className="text-[10px] font-bold text-gold-500 uppercase tracking-wider block">
                    Você sai com:
                  </span>
                  <span className="text-[10px] font-medium text-gray-300 block leading-relaxed">
                    {step.deliverable}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
