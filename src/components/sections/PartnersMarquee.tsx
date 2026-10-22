import React, { useRef } from "react";
import { motion, useAnimationFrame, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform, useVelocity } from "motion/react";
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
  { id: "clzo", name: "CLZO Alvos Premium", ratio: 3.84 },
  { id: "rolls", name: "Rolls Food", ratio: 1.9 },
  { id: "etzme", name: "ETZME Inteligência Integrativa", ratio: 3.14 },
  { id: "mundodofutsal", name: "Mundo do Futsal", ratio: 2.44 },
  { id: "armazem", name: "Armazém da Limpeza", ratio: 1.75 },
  { id: "culturasteam", name: "Cultura Steam", ratio: 2.62 },
  { id: "facilitapass", name: "Facilita Pass", ratio: 6.07 },
  { id: "platao", name: "Colégio Platão", ratio: 1 },
];

/** Gives every logo roughly the same visual area, so wide wordmarks don't dominate square marks. */
function logoSize(ratio: number, base: number) {
  const height = Math.round(Math.min(base * 1.15, Math.max(base * 0.45, base / Math.pow(ratio, 0.5))));
  return { height, width: Math.round(height * ratio) };
}

const wrap = (min: number, max: number, v: number) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

function LogoItem({ partner, base }: { partner: Partner; base: number }) {
  const size = logoSize(partner.ratio, base);
  return (
    <div className="flex h-24 shrink-0 items-center justify-center px-6 sm:h-28 sm:px-12" title={partner.name}>
      <img
        src={`/logos/${partner.id}.svg`}
        alt={partner.name}
        width={size.width}
        height={size.height}
        loading="lazy"
        decoding="async"
        draggable={false}
        className="select-none opacity-60 transition-[opacity,transform] duration-500 hover:scale-110 hover:opacity-100"
        style={{ width: size.width, height: size.height }}
      />
    </div>
  );
}

/**
 * Endless logo strip whose speed reacts to scroll velocity,
 * and which flips direction when the user scrolls back up.
 */
function VelocityRow({ items, baseVelocity }: { items: Partner[]; baseVelocity: number }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useSpring(useVelocity(scrollY), { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(velocity, [0, 1000], [0, 4], { clamp: false });
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);
  const direction = useRef(1);
  const paused = useRef(false);

  useAnimationFrame((_, delta) => {
    if (paused.current) return;
    const factor = velocityFactor.get();
    if (factor < 0) direction.current = -1;
    else if (factor > 0) direction.current = 1;
    let moveBy = direction.current * baseVelocity * (delta / 1000);
    moveBy += direction.current * moveBy * factor;
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="mask-fade-x overflow-hidden" aria-hidden="true" onPointerEnter={() => (paused.current = true)} onPointerLeave={() => (paused.current = false)}>
      <motion.div className="flex w-max" style={{ x }}>
        {[...items, ...items].map((p, i) => (
          <LogoItem key={`${p.id}-${i}`} partner={p} base={64} />
        ))}
      </motion.div>
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
    <section id="parceiros" className="relative overflow-hidden border-y border-white/[0.06] bg-dark-950 py-16 sm:py-20" aria-labelledby="partners-heading">
      <Reveal className="mx-auto mb-10 max-w-7xl px-5 text-center sm:mb-12">
        <h2 id="partners-heading" className="text-[11px] font-bold uppercase tracking-[0.3em] text-gray-400">
          Empresas que já <span className="text-gold-500">aceleramos</span>
        </h2>
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
          <VelocityRow items={rowA} baseVelocity={-2.2} />
          <VelocityRow items={rowB} baseVelocity={2.2} />
        </div>
      )}
    </section>
  );
}
