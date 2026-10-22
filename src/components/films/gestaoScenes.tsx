import React from "react";
import { motion } from "motion/react";
import type { FilmScene } from "../ui/MotionFilm";
import { GOLD, LABEL, MUTED, WHITE, ease, seeded, textProps } from "./shared";

// Every stage is drawn in a 320 × 360 viewBox and plays its own timeline on mount.

/** Scattered pieces snap into a grid, then the bottlenecks light up. */
function Diagnostico() {
  const rand = seeded(7);
  const hot = new Set([6, 13, 17]);
  const cells = Array.from({ length: 20 }, (_, i) => ({
    gx: 77 + (i % 5) * 36,
    gy: 84 + Math.floor(i / 5) * 36,
    rx: 20 + rand() * 260,
    ry: 30 + rand() * 260,
    rr: -90 + rand() * 180,
  }));
  return (
    <g>
      {cells.map((c, i) => (
        <motion.rect
          key={i}
          width="22"
          height="22"
          rx="2"
          initial={{ x: c.rx, y: c.ry, rotate: c.rr, opacity: 0, fill: "rgba(255,255,255,0.85)" }}
          animate={{ x: c.gx, y: c.gy, rotate: 0, opacity: 1, fill: hot.has(i) ? GOLD : "rgba(255,255,255,0.85)" }}
          transition={{
            default: { duration: 1.2, delay: 0.8 + i * 0.025, ease },
            opacity: { duration: 0.4, delay: i * 0.02 },
            fill: { duration: 0.4, delay: 2.5 },
          }}
        />
      ))}
      <motion.path d="M77 252h166" stroke={MUTED} strokeWidth="1" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 2.6, ease }} />
      <motion.g initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 2.9, ease }}>
        <rect x="77" y="270" width="10" height="10" fill={GOLD} />
        <text x="95" y="279" fontSize="10" fill={WHITE} {...textProps}>
          GARGALOS MAPEADOS
        </text>
        <rect x="77" y="290" width="10" height="10" fill="rgba(255,255,255,0.85)" />
        <text x="95" y="299" fontSize="10" fill={LABEL} {...textProps}>
          PROCESSOS EM ORDEM
        </text>
      </motion.g>
    </g>
  );
}

/** A quarterly plan whose bars grow in while a "today" marker sweeps across. */
function Planejamento() {
  const rows = [
    { label: "VENDAS", start: 0, span: 2 },
    { label: "MARGEM", start: 1, span: 2 },
    { label: "PROCESSOS", start: 0, span: 3 },
    { label: "PESSOAS", start: 2, span: 2 },
    { label: "EXPANSÃO", start: 3, span: 1 },
  ];
  const x0 = 104;
  const col = 50;
  const today = 1.5;
  return (
    <g>
      {[0, 1, 2, 3].map((c) => (
        <motion.g key={c} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: c * 0.08, duration: 0.5 }}>
          <text x={x0 + c * col + col / 2} y="66" fontSize="10" fill={LABEL} textAnchor="middle" {...textProps}>
            T{c + 1}
          </text>
          <line x1={x0 + c * col} y1="78" x2={x0 + c * col} y2="300" stroke={MUTED} strokeDasharray="2 4" />
        </motion.g>
      ))}
      {rows.map((r, i) => {
        const active = r.start <= today && r.start + r.span >= today;
        return (
          <g key={r.label}>
            <motion.text
              x="16"
              y={104 + i * 44}
              fontSize="9.5"
              fill={WHITE}
              {...textProps}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.6, ease }}
            >
              {r.label}
            </motion.text>
            <motion.rect
              x={x0 + r.start * col + 3}
              y={93 + i * 44}
              width={r.span * col - 6}
              height="15"
              rx="2"
              style={{ originX: 0 }}
              initial={{ scaleX: 0, fill: "rgba(255,255,255,0.8)" }}
              animate={{ scaleX: 1, fill: active ? GOLD : "rgba(255,255,255,0.8)" }}
              transition={{ scaleX: { delay: 0.5 + i * 0.12, duration: 0.9, ease }, fill: { delay: 2.7, duration: 0.4 } }}
            />
          </g>
        );
      })}
      <motion.g initial={{ x: 0, opacity: 0 }} animate={{ x: today * col, opacity: 1 }} transition={{ x: { delay: 1.4, duration: 1.3, ease }, opacity: { delay: 1.3, duration: 0.3 } }}>
        <line x1={x0} y1="78" x2={x0} y2="312" stroke={GOLD} strokeWidth="1.5" />
        <text x={x0} y="328" fontSize="9.5" fill={GOLD} textAnchor="middle" {...textProps}>
          HOJE
        </text>
      </motion.g>
    </g>
  );
}

/** Weekly indicator drawn point by point until it crosses the target. */
function Indicadores() {
  const values = [0.14, 0.22, 0.19, 0.33, 0.3, 0.45, 0.41, 0.58, 0.67, 0.8];
  const pts = values.map((v, i) => [34 + i * 29, 250 - v * 180] as const);
  const line = "M" + pts.map(([x, y]) => `${x} ${y}`).join("L");
  const area = `${line}L${pts[pts.length - 1][0]} 250L${pts[0][0]} 250Z`;
  const goalY = 250 - 0.7 * 180;
  const draw = 2.2;
  const bars = seeded(3);
  return (
    <g>
      {[0, 1, 2, 3].map((i) => (
        <line key={i} x1="30" x2="300" y1={250 - i * 60} y2={250 - i * 60} stroke={MUTED} />
      ))}
      <motion.path d={`M30 ${goalY}H300`} stroke={WHITE} strokeOpacity="0.6" strokeDasharray="5 5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, ease }} />
      <motion.text x="30" y={goalY - 8} fontSize="9.5" fill={WHITE} {...textProps} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
        META
      </motion.text>
      <motion.path d={area} fill={GOLD} initial={{ opacity: 0 }} animate={{ opacity: 0.1 }} transition={{ delay: 0.4 + draw, duration: 0.8 }} />
      <motion.path d={line} fill="none" stroke={GOLD} strokeWidth="2.5" strokeLinejoin="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: draw, delay: 0.4, ease: "easeInOut" }} />
      {pts.map(([x, y], i) => (
        <motion.circle
          key={i}
          cx={x}
          cy={y}
          r={i === pts.length - 1 ? 5 : 3}
          fill={i === pts.length - 1 ? GOLD : "#121c2c"}
          stroke={GOLD}
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4 + (i / (pts.length - 1)) * draw, type: "spring", stiffness: 400, damping: 18 }}
        />
      ))}
      {values.map((_, i) => {
        const h = 10 + bars() * 26;
        return (
          <motion.rect
            key={i}
            x={34 + i * 29 - 6}
            y={322 - h}
            width="12"
            height={h}
            fill="rgba(255,255,255,0.3)"
            style={{ originY: 1 }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.6 + i * 0.12, duration: 0.6, ease }}
          />
        );
      })}
      <text x="30" y="340" fontSize="9" fill={LABEL} {...textProps}>
        ACOMPANHAMENTO SEMANAL
      </text>
    </g>
  );
}

/** A month of work: the weekly ritual gets checked off, week after week. */
function Rotina() {
  const days = ["S", "T", "Q", "Q", "S"];
  const x0 = 38;
  const y0 = 92;
  const step = 50;
  const size = 42;
  return (
    <g>
      {days.map((d, c) => (
        <text key={c} x={x0 + c * step + size / 2} y="76" fontSize="10" fill={LABEL} textAnchor="middle" {...textProps}>
          {d}
        </text>
      ))}
      {Array.from({ length: 20 }, (_, i) => {
        const c = i % 5;
        const r = Math.floor(i / 5);
        const x = x0 + c * step;
        const y = y0 + r * step;
        const ritual = c === 0;
        const delay = 0.3 + i * 0.09;
        return (
          <g key={i}>
            <rect x={x} y={y} width={size} height={size} rx="3" fill="none" stroke={MUTED} />
            <motion.rect
              x={x}
              y={y}
              width={size}
              height={size}
              rx="3"
              fill={ritual ? GOLD : "rgba(255,255,255,0.14)"}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay, duration: 0.45, ease }}
            />
            {ritual && (
              <motion.path
                d={`M${x + 12} ${y + 22}l6 6l12-13`}
                fill="none"
                stroke="#0b121f"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: delay + 0.3, duration: 0.4, ease }}
              />
            )}
          </g>
        );
      })}
      <motion.g initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.4, duration: 0.8, ease }}>
        <rect x={x0} y="306" width="10" height="10" fill={GOLD} />
        <text x={x0 + 18} y="315" fontSize="10" fill={WHITE} {...textProps}>
          REUNIÃO DE RESULTADOS
        </text>
      </motion.g>
    </g>
  );
}

export const gestaoScenes: FilmScene[] = [
  { title: "Do improviso ao método", caption: "Abrimos números, processos e rotina para enxergar a empresa como ela realmente é.", Stage: Diagnostico },
  { title: "Metas com dono e prazo", caption: "Objetivos claros, metas mensuráveis e um caminho viável, trimestre a trimestre.", Stage: Planejamento },
  { title: "Execução que aparece no caixa", caption: "Indicadores semanais mostram o que avança e o que precisa de correção.", Stage: Indicadores },
  { title: "Rituais que sustentam o plano", caption: "Reuniões curtas, responsáveis definidos e acompanhamento até virar hábito.", Stage: Rotina },
];
