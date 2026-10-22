import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "../ui/Button";
import { SectionDivider } from "../ui/SectionDivider";
import { WhatsAppGlyph } from "../ui/Icons";
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
        className="peer w-full border-0 border-b border-white/20 bg-transparent px-0 pb-3 pt-7 font-medium text-white placeholder-transparent transition-colors duration-300 focus:border-gold-500 focus:outline-none"
        {...props}
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-0 top-1 text-[11px] font-semibold uppercase tracking-wider text-gray-500 transition-all duration-300 peer-placeholder-shown:top-7 peer-placeholder-shown:text-base peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-[11px] peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-gold-500"
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
    <section id="contato" className="relative overflow-hidden bg-dark-900 pb-24 pt-20 md:pb-36 md:pt-28" aria-labelledby="form-heading">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionDivider index="07" label="Diagnóstico inicial" note="Conversa com Ricardo Guirado" className="mb-14 md:mb-20" />
      </div>
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-6 lg:grid-cols-2 lg:gap-20">
        <div>
          <RevealText
            id="form-heading"
            className="mb-7 text-4xl font-black leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-6xl"
            lines={[{ text: "O próximo ano da sua empresa começa" }, { text: "com uma conversa.", className: "text-gold-500" }]}
          />
          <Reveal delay={0.1}>
            <p className="mb-10 max-w-lg text-base leading-relaxed text-gray-400 sm:text-lg">
              Preencha o formulário para agendar um diagnóstico inicial com Ricardo Guirado. Entendemos seu momento e apresentamos o caminho mais curto para escalar.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="mb-10 grid gap-6 sm:grid-cols-2">
            {[
              ["Sem compromisso", "Conversa franca sobre os gargalos do seu negócio."],
              ["Plano sob medida", "Proposta desenhada para o seu orçamento e objetivo."],
            ].map(([title, desc]) => (
              <div key={title} className="border-t border-white/20 pt-4">
                <div>
                  <h3 className="mb-1 text-sm font-black text-white">{title}</h3>
                  <p className="text-sm text-gray-400">{desc}</p>
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.3}>
            <p className="mb-3 text-xs font-medium text-gray-400">Prefere conversar direto pelo WhatsApp?</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 border-b border-[#25d366]/60 pb-1 text-sm font-bold text-white transition-colors duration-300 hover:border-[#25d366] hover:text-[#25d366]"
            >
              <WhatsAppGlyph className="h-4 w-4 text-[#25d366]" />
              Falar agora no WhatsApp
            </a>
          </Reveal>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 1.1, ease: EASE_OUT_EXPO }}
          className="relative"
        >
          <div className="relative border-t-2 border-gold-500 bg-dark-950 p-7 sm:p-10">
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
                  <svg viewBox="0 0 52 52" className="mb-6 h-14 w-14 text-gold-500" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <motion.circle cx="26" cy="26" r="24" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, ease: EASE_OUT_EXPO }} />
                    <motion.path d="M15 27l7 7 15-16" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 0.5, ease: EASE_OUT_EXPO }} />
                  </svg>
                  <h3 className="mb-2 text-2xl font-black text-white">Tudo certo!</h3>
                  <p className="max-w-xs text-gray-400">Recebemos suas informações. Em breve nossa equipe entra em contato pelo WhatsApp.</p>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit} exit={{ opacity: 0, y: -10 }} className="space-y-5" aria-label="Formulário de contato">
                  <h3 className="mb-4 text-xl font-black tracking-tight text-white">Agende seu diagnóstico</h3>
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

                  <Button type="submit" disabled={status === "loading"} icon={status === "idle"} className="!mt-8 w-full py-5 text-[12px]">
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
