import React from "react";
import { motion } from "motion/react";
import { ArrowRight, ChevronRight, CheckCircle2, TrendingUp, Users, Target, ShieldCheck, PlayCircle, Star } from "lucide-react";

export function Button({ children, className = "", onClick, type = "button" }: { children: React.ReactNode, className?: string, onClick?: () => void, type?: "button" | "submit" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`group relative inline-flex items-center justify-center px-8 py-4 font-heading font-semibold text-dark-900 bg-gold-500 rounded-full overflow-hidden transition-all hover:bg-gold-400 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.5)] ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
      </span>
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
    </button>
  );
}

export function SectionHeading({ title, subtitle, align = "center" }: { title: string, subtitle?: string, align?: "left" | "center" }) {
  return (
    <div className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
      {subtitle && (
        <span className="inline-block py-1 px-3 rounded-full bg-gold-500/10 text-gold-500 font-semibold text-sm tracking-wider uppercase mb-4">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-bold leading-tight">
        {title}
      </h2>
    </div>
  );
}

export function Navbar() {
  const scrollToForm = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-dark-900/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gold-500 rounded-lg flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-dark-900" />
          </div>
          <span className="font-heading font-bold text-xl tracking-tight">RGuirado<span className="text-gold-500">.</span></span>
        </div>
        <div className="hidden md:block">
          <Button onClick={scrollToForm} className="px-6 py-2.5 text-sm">
            Quero escalar meu negócio
          </Button>
        </div>
      </div>
    </nav>
  );
}

export function Hero() {
  const scrollToForm = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--color-dark-700),_transparent_50%)] opacity-40" />
      <div className="absolute top-1/4 -right-64 w-96 h-96 bg-gold-500/20 rounded-full blur-[120px]" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <span className="flex h-2 w-2 rounded-full bg-gold-500 animate-pulse" />
            <span className="text-sm font-medium text-gray-300">Vagas limitadas para novos projetos</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-6">
            Transformamos negócios comuns em <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">franquias lucrativas</span> e escaláveis.
          </h1>
          
          <p className="text-xl text-gray-400 mb-10 leading-relaxed">
            Estratégia, estrutura e crescimento previsível para quem quer expandir de verdade. Pare de depender apenas de você e construa um império.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <Button onClick={scrollToForm} className="w-full sm:w-auto text-lg">
              Quero escalar meu negócio
            </Button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:h-[600px] flex items-center justify-center"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-gold-500/20 to-transparent rounded-3xl transform rotate-6" />
            <img 
              src="https://picsum.photos/seed/business/800/800" 
              alt="Consultoria de Negócios" 
              className="relative rounded-3xl object-cover w-full h-full shadow-2xl border border-white/10"
              referrerPolicy="no-referrer"
            />
            
            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-dark-800 p-4 rounded-2xl border border-white/10 shadow-xl flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Crescimento</p>
                <p className="font-bold text-xl">Acelerado</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Problem() {
  const problems = [
    {
      icon: <Target className="w-6 h-6 text-red-400" />,
      title: "Falta de estrutura",
      desc: "Processos confusos que impedem a replicação do modelo."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-red-400" />,
      title: "Crescimento desorganizado",
      desc: "Vender mais significa trabalhar mais, sem ganho de escala real."
    },
    {
      icon: <Users className="w-6 h-6 text-red-400" />,
      title: "Dependência do dono",
      desc: "Se você tira férias, a empresa para de faturar e os problemas acumulam."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-red-400" />,
      title: "Expansão sem padrão",
      desc: "Cada nova unidade perde a qualidade e a essência da marca original."
    }
  ];

  return (
    <section className="py-24 bg-dark-800 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          subtitle="O Desafio"
          title="Por que a maioria dos negócios não consegue escalar?" 
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((prob, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-dark-900 p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors"
            >
              <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center mb-6">
                {prob.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{prob.title}</h3>
              <p className="text-gray-400 leading-relaxed">{prob.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Solution() {
  const solutions = [
    {
      step: "01",
      title: "Diagnóstico Estratégico",
      desc: "Analisamos a viabilidade do seu negócio para o modelo de franquias, identificando gargalos e oportunidades."
    },
    {
      step: "02",
      title: "Estruturação do Modelo",
      desc: "Desenhamos o formato ideal da sua franquia: taxas, royalties, DRE projetado e modelo jurídico."
    },
    {
      step: "03",
      title: "Padronização de Processos",
      desc: "Criamos manuais operacionais completos para que qualquer pessoa consiga replicar o seu sucesso."
    },
    {
      step: "04",
      title: "Plano de Expansão",
      desc: "Estratégia de marketing e vendas focada em atrair e converter os investidores certos para sua marca."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading 
              align="left"
              subtitle="O Método"
              title="Como nós resolvemos isso e preparamos você para o topo" 
            />
            
            <div className="space-y-8">
              {solutions.map((sol, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0">
                    <span className="font-heading font-bold text-4xl text-white/10">{sol.step}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gold-500">{sol.title}</h3>
                    <p className="text-gray-400">{sol.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gold-500/20 blur-[100px] rounded-full" />
            <img 
              src="https://picsum.photos/seed/solution/800/1000" 
              alt="Nossa Solução" 
              className="relative rounded-3xl object-cover w-full h-[600px] border border-white/10"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function SocialProof() {
  const scrollToForm = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-dark-800">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          subtitle="Resultados"
          title="Quem já escalou com a gente" 
        />
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { number: "[Nº]+", label: "Empresas estruturadas" },
            { number: "[Nº]+", label: "Unidades abertas" },
            { number: "R$ [Valor]M+", label: "Movimentados em rede" }
          ].map((stat, idx) => (
            <div key={idx} className="text-center p-8 rounded-2xl bg-dark-900 border border-white/5">
              <h3 className="text-5xl font-bold text-gold-500 mb-2">{stat.number}</h3>
              <p className="text-gray-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {[1, 2].map((i) => (
            <div key={i} className="bg-dark-900 p-8 rounded-2xl border border-white/5">
              <div className="flex gap-1 mb-6">
                {[1,2,3,4,5].map(star => <Star key={star} className="w-5 h-5 fill-gold-500 text-gold-500" />)}
              </div>
              <p className="text-lg text-gray-300 mb-8 italic">
                "[Insira aqui o depoimento real de um cliente satisfeito com o processo de formatação e expansão da franquia.]"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-dark-700 flex items-center justify-center text-gray-400">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold">[Nome do Cliente]</p>
                  <p className="text-sm text-gray-500">[Cargo / Empresa]</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button onClick={scrollToForm}>
            Quero escalar meu negócio
          </Button>
        </div>
      </div>
    </section>
  );
}

export function Offer() {
  return (
    <section className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <SectionHeading 
          subtitle="A Oportunidade"
          title="Transforme seu negócio em uma máquina de crescimento" 
        />
        <p className="text-xl text-gray-400 mb-12">
          Nossa consultoria completa entrega o modelo de franquia validado e suporte total na expansão. Você não precisa inventar a roda, nós já temos o mapa.
        </p>
        
        <div className="bg-gradient-to-br from-dark-800 to-dark-900 p-1 rounded-3xl">
          <div className="bg-dark-900 p-8 md:p-12 rounded-[22px] border border-white/10">
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <ul className="space-y-4">
                {['Análise de Franqueabilidade', 'Modelagem Financeira (DRE, ROI)', 'Documentação Jurídica (COF, Contrato)', 'Manuais de Operação e Gestão'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-gold-500 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-4">
                {['Estratégia de Marketing para Expansão', 'Treinamento de Vendas de Franquia', 'Acompanhamento Estratégico', 'Acesso a Rede de Investidores'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-gold-500 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function LeadForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission or redirect to WhatsApp
    alert("Formulário enviado com sucesso! Entraremos em contato.");
  };

  return (
    <section id="contato" className="py-24 bg-dark-800 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Dê o próximo passo</h2>
            <p className="text-xl text-gray-400 mb-8">
              Preencha o formulário abaixo para agendarmos uma sessão estratégica gratuita. Vamos entender o seu momento e desenhar o melhor caminho para a sua expansão.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 font-medium">
              <span className="flex h-2 w-2 rounded-full bg-gold-500 animate-pulse" />
              Vagas limitadas para novos projetos
            </div>
          </div>
          
          <div className="bg-dark-900 p-8 rounded-3xl border border-white/10 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Nome completo</label>
                <input required type="text" className="w-full bg-dark-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors" placeholder="Seu nome" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">WhatsApp</label>
                <input required type="tel" className="w-full bg-dark-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors" placeholder="(00) 00000-0000" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">E-mail profissional</label>
                <input required type="email" className="w-full bg-dark-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors" placeholder="seu@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Tipo de negócio</label>
                <input required type="text" className="w-full bg-dark-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors" placeholder="Ex: Restaurante, Clínica, Varejo..." />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Faturamento mensal (Opcional)</label>
                <select className="w-full bg-dark-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors appearance-none">
                  <option value="">Selecione uma faixa</option>
                  <option value="ate-50k">Até R$ 50.000</option>
                  <option value="50k-100k">R$ 50.000 a R$ 100.000</option>
                  <option value="100k-500k">R$ 100.000 a R$ 500.000</option>
                  <option value="mais-500k">Mais de R$ 500.000</option>
                </select>
              </div>
              
              <Button type="submit" className="w-full">
                Quero escalar meu negócio
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const scrollToForm = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-dark-900 pt-24 pb-12 border-t border-white/5 text-center">
      <div className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">
          Seu negócio pode crescer muito mais do que você imagina.
        </h2>
        <Button onClick={scrollToForm} className="text-lg px-10 py-5">
          Quero escalar meu negócio
        </Button>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-gray-500 text-sm">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <TrendingUp className="w-5 h-5 text-gold-500" />
          <span className="font-heading font-bold text-lg text-white tracking-tight">RGuirado<span className="text-gold-500">.</span></span>
        </div>
        <p>© {new Date().getFullYear()} RGuirado Franquias. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
