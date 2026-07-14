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
      desc: "Conversamos com você, abrimos os números, ouvimos o time e observamos a operação por dentro. Mapeamos processos, gargalos, margem, cultura e o modo como as decisões são tomadas de verdade — não o que está escrito no organograma. O objetivo aqui é um só: descobrir onde dói de verdade. E raramente é onde parece doer.",
      deliverable: "retrato honesto da sua empresa — inclusive das partes que ninguém teve coragem de te dizer."
    },
    {
      letter: "L",
      title: "LINHA DE AÇÃO",
      subtitle: "O plano é seu. Construído com você, não para você.",
      desc: "Com o diagnóstico na mesa, definimos juntos o caminho: qual pilar entra em jogo — franchising, gestão estratégica, performance comportamental — ou qual combinação deles resolve o seu problema. Cada projeto nasce com escopo, prazo, responsáveis e entregas definidos antes de começar.",
      deliverable: "plano de ação claro, com prioridades ordenadas e ninguém adivinhando o próximo passo."
    },
    {
      letter: "T",
      title: "TRANSFORMAÇÃO",
      subtitle: "Aqui a maioria das consultorias vai embora. Aqui a gente fica.",
      desc: "Plano no papel não muda empresa. Execução muda. Estamos ao seu lado na implantação: rodando os rituais de gestão, treinando o time, ajustando o que a realidade exigir — porque ela sempre exige. Acompanhamos indicadores, corrigimos rota e seguramos a mão de quem precisa mudar.",
      deliverable: "processos rodando, time engajado e resultado começando a aparecer no número."
    },
    {
      letter: "A",
      title: "AUTONOMIA",
      subtitle: "O sucesso do trabalho se mede pela nossa ausência.",
      desc: "Existe um único jeito honesto de medir se uma consultoria funcionou: a empresa continua performando depois que ela vai embora. Por isso a última etapa é transferência real de capacidade. Deixamos método instalado, indicadores definidos, líderes formados e o dono fora da operação.",
      deliverable: "empresa que anda sozinha. E um dono que voltou a ser dono e pensar estrategicamente."
    }
  ];

  return (
    <section id="metodo" className="py-32 relative overflow-hidden bg-dark-800 border-t border-white/5" aria-labelledby="solution-heading">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-[20%] right-[5%] w-[500px] h-[500px] bg-gold-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Concept and Taglines */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold text-gold-500 uppercase tracking-widest block">Nosso Método</span>
              <h2 id="solution-heading" className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
                Um método. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Nenhuma fórmula pronta.</span>
              </h2>
            </div>

            <p className="text-lg text-gray-400 leading-relaxed font-light">
              Consultoria séria não é sobre entregar diagnóstico bonito. É sobre fazer a empresa andar — e continuar andando depois que a gente sai. Por isso todo projeto da R.Guirado percorre quatro etapas. Elas se chamam **ALTA**.
            </p>

            {/* Fundo Escuro Destaque Slogan */}
            <div className="p-8 rounded-3xl bg-dark-900 border border-white/5 text-center relative overflow-hidden">
              <div className="absolute -top-12 -left-12 w-24 h-24 bg-gold-500/5 rounded-full blur-[20px]" />
              <p className="text-xl text-gray-400 font-light leading-relaxed">
                Toda consultoria quer ficar.
              </p>
              <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600 tracking-tight mt-2">
                A gente quer te dar alta.
              </p>
            </div>

            <div className="space-y-6">
              <h4 className="text-xl font-black tracking-tight text-white">Da dependência à alta.</h4>
              <p className="text-md text-gray-400 leading-relaxed">
                ALTA é a distância entre a empresa que só funciona quando você está presente e a empresa que cresce mesmo quando você não está. É esse percurso que percorremos com você — em 25 anos, centenas de vezes.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <Button onClick={scrollToForm} className="w-full sm:w-auto text-md py-4 px-8" aria-label="Começar pela Análise">
                Começar pela Análise
              </Button>
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block">
                Método ALTA®
              </span>
            </div>
          </div>

          {/* Right Column: The 4 Steps Accordion/Cards */}
          <div className="lg:col-span-7 space-y-8">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="group bg-dark-900 border border-white/5 hover:border-gold-500/20 rounded-[2rem] p-8 md:p-10 shadow-xl transition-all relative overflow-hidden"
              >
                {/* Decorative Background Letter */}
                <div className="absolute -top-10 -right-6 font-heading font-black text-[9rem] text-white/2 select-none group-hover:text-gold-500/5 transition-colors duration-500">
                  {step.letter}
                </div>

                <div className="relative z-10 space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center font-heading font-black text-gold-500 text-lg">
                      {step.letter}
                    </span>
                    <h3 className="text-2xl font-black tracking-tight text-white group-hover:text-gold-400 transition-colors">
                      {step.title}
                    </h3>
                  </div>

                  <h5 className="text-md font-bold text-gray-300">
                    {step.subtitle}
                  </h5>

                  <p className="text-gray-400 text-md leading-relaxed">
                    {step.desc}
                  </p>

                  <div className="pt-2 border-t border-white/5 flex flex-col md:flex-row md:items-center gap-2">
                    <span className="text-xs font-bold text-gold-500 uppercase tracking-wider shrink-0">
                      Você sai com:
                    </span>
                    <span className="text-xs font-medium text-gray-300">
                      {step.deliverable}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
