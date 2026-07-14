import React from "react";
import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";

export function Offer() {
  return (
    <section className="py-32 relative bg-dark-900" aria-labelledby="offer-heading">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div id="offer-heading">
          <SectionHeading subtitle="O Próximo Nível" title="Transforme seu negócio em uma máquina" />
        </div>
        <p className="text-2xl text-gray-400 mb-16 font-light">
          A consultoria definitiva que entrega o modelo de franquia validado pronto. Você não precisa inventar a roda, o mapa está conosco.
        </p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gold-500 via-dark-800 to-dark-900 p-[2px] rounded-[3rem] shadow-[0_0_80px_rgba(234,179,8,0.1)]"
        >
          <div className="bg-dark-900 p-10 md:p-16 rounded-[calc(3rem-2px)] relative overflow-hidden">
            <div className="grid md:grid-cols-2 gap-10 text-left relative z-10">
              <ul className="space-y-6" aria-label="Benefícios operacionais">
                {['Análise de Franqueabilidade Extrema', 'Modelagem Financeira Avançada', 'Dossiês e Jurídico Blindado (COF)', 'Desenvolvimento de Manuais'].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 bg-dark-800/50 p-4 rounded-2xl border border-white/5">
                    <CheckCircle2 className="w-6 h-6 text-gold-500" aria-hidden="true" />
                    <span className="text-gray-200 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-6" aria-label="Benefícios comerciais">
                {['Estratégia de Marketing Focada', 'Funil de Vendas de Franquia', 'Posicionamento Premium', 'Mentoria Contínua de Escalada'].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 bg-dark-800/50 p-4 rounded-2xl border border-white/5">
                    <CheckCircle2 className="w-6 h-6 text-gold-500" aria-hidden="true" />
                    <span className="text-gray-200 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
