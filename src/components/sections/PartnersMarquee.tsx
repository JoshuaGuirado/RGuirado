import React from "react";
import { useReducedMotion } from "motion/react";
import { Reveal } from "../ui/Reveal";

interface Partner {
  id: string;
  name: string;
  /** width / height of the SVG artwork, used to balance optical size. */
  ratio: number;
}

export const partners: Partner[] = [
  { id: "gelaboca", name: "Gela Boca Sorvetes", ratio: 1.89 },
  { id: "bless", name: "Bless Internet", ratio: 1.28 },
  { id: "marques", name: "Marques Administrações Judiciais", ratio: 0.71 },
  { id: "triangulo", name: "Consórcio Triângulo", ratio: 3.2 },
  { id: "titanium", name: "Grupo Titanium", ratio: 3.57 },
  { id: "dompizza", name: "Dom Pizza 18", ratio: 1.69 },
  { id: "lavathru", name: "Lava Thru", ratio: 1 },
  { id: "clzo", name: "CLZO Alvos Premium", ratio: 2.72 },
  { id: "rolls", name: "Rolls Food", ratio: 1.9 },
  { id: "etzme", name: "ETZME Inteligência Integrativa", ratio: 3.14 },
  { id: "mundodofutsal", name: "Mundo do Futsal", ratio: 2.44 },
  { id: "armazem", name: "Armazém da Limpeza", ratio: 1.75 },
  { id: "culturasteam", name: "Cultura Steam", ratio: 2.62 },
  { id: "facilitapass", name: "Facilita Pass", ratio: 6.07 },
  { id: "platao", name: "Colégio Platão", ratio: 0.77 },
];

/** Gives every logo roughly the same visual area, so wide wordmarks don't dominate square marks. */
function logoSize(ratio: number, base: number) {
  const height = Math.round(Math.min(base * 1.15, Math.max(base * 0.45, base / Math.pow(ratio, 0.5))));
  return { height, width: Math.round(height * ratio) };
}

function LogoItem({ partner, base }: { partner: Partner; base: number }) {
  const size = logoSize(partner.ratio, base);
  return (
    <div className="flex h-24 shrink-0 items-center justify-center px-7 sm:h-28 sm:px-12" title={partner.name}>
      <img
        src={`/logos/${partner.id}.svg`}
        alt={partner.name}
        width={size.width}
        height={size.height}
        loading="lazy"
        decoding="async"
        draggable={false}
        className="select-none opacity-55 transition-opacity duration-300 hover:opacity-100"
        style={{ width: size.width, height: size.height }}
      />
    </div>
  );
}

/** Endless logo strip animated with a CSS keyframe, so it never touches the main thread. */
function MarqueeRow({ items, reverse = false, duration }: { items: Partner[]; reverse?: boolean; duration: number }) {
  return (
    <div className="mask-fade-x group overflow-hidden" aria-hidden="true">
      <div
        className="flex w-max animate-marquee group-hover:[animation-play-state:paused]"
        style={{ animationDuration: `${duration}s`, animationDirection: reverse ? "reverse" : "normal" }}
      >
        {[...items, ...items].map((p, i) => (
          <LogoItem key={`${p.id}-${i}`} partner={p} base={64} />
        ))}
      </div>
    </div>
  );
}

export function PartnersMarquee() {
  const reduceMotion = useReducedMotion();
  const half = Math.ceil(partners.length / 2);
  // Each row is repeated so a half-width loop always has logos filling the screen.
  const rowA = [...partners.slice(0, half), ...partners.slice(0, half)];
  const rowB = [...partners.slice(half), ...partners.slice(half)];

  return (
    <section id="parceiros" className="relative overflow-hidden bg-dark-950 pb-12 pt-6 sm:pb-16" aria-labelledby="partners-heading">
      <Reveal className="mx-auto mb-8 flex max-w-7xl items-center gap-6 px-5 sm:mb-10 sm:px-6">
        <h2 id="partners-heading" className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.24em] text-gray-400">
          Empresas que já aceleramos
        </h2>
        <span className="h-px flex-1 bg-white/10" aria-hidden="true" />
        <span className="hidden text-[11px] font-semibold uppercase tracking-[0.24em] text-gray-500 sm:block">{partners.length} marcas</span>
      </Reveal>

      {reduceMotion ? (
        <ul className="mx-auto flex max-w-6xl flex-wrap items-center justify-center px-5">
          {partners.map((p) => (
            <li key={p.id}>
              <LogoItem partner={p} base={48} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="space-y-2">
          <p className="sr-only">{partners.map((p) => p.name).join(", ")}</p>
          <MarqueeRow items={rowA} duration={60} />
          <MarqueeRow items={rowB} duration={70} reverse />
        </div>
      )}
    </section>
  );
}
