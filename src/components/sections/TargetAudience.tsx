import React from "react";
import { motion } from "motion/react";
import { Check, UserCheck, TrendingUp, Landmark, HelpCircle, LogOut } from "lucide-react";

export function TargetAudience() {
  const targets = [
    {
      icon: <TrendingUp className="w-6 h-6 text-gold-500" />,
      text: "Empreendedores de pequenas e médias empresas que cresceram e travaram."
    },
    {
      icon: <UserCheck className="w-6 h-6 text-gold-500" />,
      text: "Profissionais liberais com operação estruturada (clínicas, escritórios, consultórios) que querem escalar sem perder qualidade."
    },
    {
      icon: <Landmark className="w-6 h-6 text-gold-500" />,
      text: "Empresários com um modelo validado que querem franquear."
    },
    {
      icon: <HelpCircle className="w-6 h-6 text-gold-500" />,
      text: "Franqueadoras que precisam destravar expansão ou organizar a rede."
    },
    {
      icon: <LogOut className="w-6 h-6 text-gold-500" />,
      text: "Donos que sabem que precisam sair da operação — e não sabem por onde começar."
    }
  ];

  return (
    <section className="py-32 relative bg-dark-800 overflow-hidden border-t border-white/5" aria-labelledby="target-heading">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-gold-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Headline */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold text-gold-500 uppercase tracking-widest block">Público-Alvo</span>
            <h2 id="target-heading" className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
              Para quem é a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">R.Guirado Consultoria?</span>
            </h2>
            <p className="text-lg text-gray-400 font-light leading-relaxed">
              Nossa metodologia atende empresários em diferentes fases da escalada corporativa, desde quem precisa organizar os processos internos até quem busca a expansão nacional via franquias.
            </p>
          </div>

          {/* Right Column: List */}
          <div className="lg:col-span-7 space-y-4">
            {targets.map((target, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="flex items-center gap-6 p-6 rounded-2xl bg-dark-900 border border-white/5 hover:border-gold-500/20 transition-all shadow-lg"
              >
                <div className="w-12 h-12 bg-gold-500/10 rounded-xl flex items-center justify-center shrink-0 border border-gold-500/20">
                  {target.icon}
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">{target.text}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
