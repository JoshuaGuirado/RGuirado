import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "../ui/Button";
import { SectionLabel } from "../ui/SectionLabel";
import { RevealText } from "../ui/RevealText";
import { Reveal } from "../ui/Reveal";
import { WHATSAPP_URL, EASE_OUT_EXPO } from "../../lib/constants";

type Status = "idle" | "loading" | "success" | "error";

const formatPhone = (value: string) => {
  const d = value.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d.length ? `(${d}` : "";
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
};

function Field({ id, label, ...props }: { id: string; label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="group relative">
      <input
        id={id}
        name={id}
        placeholder={label}
        className="peer w-full rounded-2xl border border-white/10 bg-dark-950/60 px-5 pb-2.5 pt-7 font-medium text-white placeholder-transparent transition-colors duration-300 focus:border-gold-500 focus:bg-dark-950 focus:outline-none"
        {...props}
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-5 top-2.5 text-[11px] font-semibold uppercase tracking-wider text-gray-500 transition-all duration-300 peer-placeholder-shown:top-[1.15rem] peer-placeholder-shown:text-base peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-gray-400 peer-focus:top-2.5 peer-focus:text-[11px] peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-gold-500"
      >
        {label}
      </label>
    </div>
  );
}

export function LeadForm() {
  const [form, setForm] = useState({ name: "", phone: "", niche: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Hidden honeypot: real visitors never fill it, bots usually do.
    if (new FormData(e.currentTarget).get("_honey")) return;
    setStatus("loading");
    try {
      const response = await fetch("https://formsubmit.co/ajax/joshuafguirado@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: "Novo Lead - RGuirado Consultoria",
          _template: "table",
          Nome: form.name,
          WhatsApp: form.phone,
          Nicho: form.niche,
        }),
      });
      if (!response.ok) throw new Error(String(response.status));
      setStatus("success");
      setForm({ name: "", phone: "", niche: "" });
      setTimeout(() => setStatus("idle"), 6000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3500);
    }
  };

  return (
    <section id="contato" className="relative overflow-hidden bg-dark-900 py-24 md:py-36" aria-labelledby="form-heading">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-40 top-1/4 h-[600px] w-[600px] rounded-full bg-gold-500/[0.08] blur-[150px]" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-6 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionLabel className="mb-6">Diagnóstico inicial</SectionLabel>
          <RevealText
            id="form-heading"
            className="mb-7 text-4xl font-black leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-6xl"
            lines={[{ text: "O próximo ano da sua empresa começa" }, { text: "com uma conversa.", className: "text-gold-gradient" }]}
          />
          <Reveal delay={0.1}>
            <p className="mb-10 max-w-lg text-base font-light leading-relaxed text-gray-400 sm:text-lg">
              Preencha o formulário para agendar um diagnóstico inicial com Ricardo Guirado. Entendemos seu momento e apresentamos o caminho mais curto para escalar.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="mb-10 space-y-5">
            {[
              ["Sem compromisso", "Conversa franca sobre os gargalos do seu negócio."],
              ["Plano sob medida", "Proposta desenhada para o seu orçamento e objetivo."],
            ].map(([title, desc], i) => (
              <div key={title} className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold-500/30 bg-gold-500/10 text-sm font-black text-gold-400">{i + 1}</span>
                <div>
                  <h3 className="text-sm font-bold text-white">{title}</h3>
                  <p className="text-sm text-gray-400">{desc}</p>
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.3} className="border-t border-white/[0.07] pt-8">
            <p className="mb-3 text-xs font-medium text-gray-400">Prefere conversar direto pelo WhatsApp?</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#25d366]/40 bg-[#25d366]/10 px-5 py-3 text-xs font-bold text-[#4ade80] transition-all duration-300 hover:bg-[#25d366] hover:text-white"
            >
              <MessageCircle className="h-4 w-4" />
              Falar agora no WhatsApp
            </a>
          </Reveal>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60, rotateX: 12 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 1.2, ease: EASE_OUT_EXPO }}
          style={{ transformPerspective: 1200 }}
          className="relative"
        >
          {/* Animated gold border */}
          <div className="absolute -inset-px rounded-[2.1rem] bg-[linear-gradient(120deg,rgb(243_198_17/0.6),transparent_30%,transparent_70%,rgb(243_198_17/0.4))] bg-[length:200%_200%] animate-gradient-x" aria-hidden="true" />
          <div className="relative rounded-[2rem] bg-dark-900 p-7 shadow-2xl shadow-black/40 sm:p-10">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
                  className="flex min-h-[380px] flex-col items-center justify-center text-center"
                  role="status"
                >
                  <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.15 }}>
                    <CheckCircle2 className="mb-6 h-16 w-16 text-gold-500" />
                  </motion.span>
                  <h3 className="mb-2 text-2xl font-black text-white">Tudo certo!</h3>
                  <p className="max-w-xs text-gray-400">Recebemos suas informações. Em breve nossa equipe entra em contato pelo WhatsApp.</p>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit} exit={{ opacity: 0, y: -10 }} className="space-y-4" aria-label="Formulário de contato">
                  <h3 className="mb-6 text-xl font-black tracking-tight text-white">Agende seu diagnóstico</h3>
                  <Field id="name" label="Nome completo" required autoComplete="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                  <Field
                    id="phone"
                    label="Seu WhatsApp"
                    required
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel-national"
                    pattern="\(\d{2}\)\s\d{4,5}-\d{4}"
                    title="Digite um WhatsApp válido no formato (XX) XXXXX-XXXX"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: formatPhone(e.target.value) })}
                  />
                  <Field id="niche" label="Nicho do seu negócio" required value={form.niche} onChange={(e) => setForm({ ...form, niche: e.target.value })} />
                  <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

                  <Button type="submit" disabled={status === "loading"} icon={status === "idle"} className="mt-2 w-full py-5 text-[13px]">
                    {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
                    {status === "idle" && "Agendar diagnóstico"}
                    {status === "loading" && "Enviando..."}
                    {status === "error" && "Erro ao enviar. Tente novamente."}
                  </Button>
                  <p className="pt-2 text-center text-[11px] text-gray-500">Seus dados são usados apenas para entrarmos em contato.</p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
