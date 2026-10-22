import React from "react";
import { motion } from "motion/react";
import type { FilmScene } from "../ui/MotionFilm";
import { GOLD, LABEL, MUTED, WHITE, ease, seeded, textProps } from "./shared";

// Every stage is drawn in a 320 × 360 viewBox and plays its own timeline on mount.

const CX = 160;
const CY = 176;
const R = 100;
const axes = ["DECISÃO", "COMUNICAÇÃO", "EMOÇÃO", "LIDERANÇA", "EXECUÇÃO"];
const angle = (k: number) => ((-90 + k * 72) * Math.PI) / 180;
const point = (k: number, v: number) => [CX + Math.cos(angle(k)) * R * v, CY + Math.sin(angle(k)) * R * v] as const;
const polygon = (values: number[]) => "M" + values.map((v, k) => point(k, v).map((n) => n.toFixed(1)).join(" ")).join("L") + "Z";

/** Behavioural radar of the owner, compared with the profile the role demands. */
function Assessment() {
  const current = [0.88, 0.42, 0.34, 0.66, 0.92];
  const target = [0.8, 0.76, 0.72, 0.84, 0.86];
  const collapsed = polygon([0, 0, 0, 0, 0]);
  return (
    <g>
      {[0.34, 0.67, 1].map((v, i) => (
        <motion.path key={v} d={polygon([v, v, v, v, v])} fill="none" stroke={MUTED} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: i * 0.15, duration: 1, ease }} />
      ))}
      {axes.map((label, k) => {
        const [x, y] = point(k, 1);
        // Labels sit centred above the upper vertices and below the lower ones.
        const ly = k === 2 || k === 3 ? y + 18 : y - 11;
        return (
          <g key={label}>
            <motion.line x1={CX} y1={CY} x2={x} y2={y} stroke={MUTED} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.3 + k * 0.06, duration: 0.6 }} />
            <motion.text
              x={x}
              y={ly}
              fontSize="9"
              fill={LABEL}
              textAnchor="middle"
              {...textProps}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 + k * 0.06 }}
            >
              {label}
            </motion.text>
          </g>
        );
      })}
      <motion.path
        fill={GOLD}
        fillOpacity="0.18"
        stroke={GOLD}
        strokeWidth="2"
        strokeLinejoin="round"
        initial={{ d: collapsed }}
        animate={{ d: polygon(current) }}
        transition={{ delay: 1, duration: 1.2, ease }}
      />
      <motion.path
        fill="none"
        stroke={WHITE}
        strokeWidth="1.5"
        strokeDasharray="4 4"
        initial={{ d: collapsed, opacity: 0 }}
        animate={{ d: polygon(target), opacity: 1 }}
        transition={{ delay: 2.4, duration: 1.2, ease }}
      />
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3, duration: 0.6 }}>
        <rect x="58" y="320" width="10" height="10" fill={GOLD} />
        <text x="74" y="329" fontSize="9" fill={WHITE} {...textProps}>
          HOJE
        </text>
        <line x1="150" y1="325" x2="166" y2="325" stroke={WHITE} strokeWidth="1.5" strokeDasharray="4 3" />
        <text x="172" y="329" fontSize="9" fill={WHITE} {...textProps}>
          PERFIL-ALVO
        </text>
      </motion.g>
    </g>
  );
}

/** The structure grows from the owner to leaders and teams; leaders get "certified". */
function Lideres() {
  const leaders = [80, 160, 240];
  const team = [-26, 0, 26];
  return (
    <g>
      {[
        ["DONO", 64],
        ["LÍDERES", 164],
        ["TIME", 269],
      ].map(([label, y], i) => (
        <motion.text key={label} x="10" y={y} fontSize="9" fill={LABEL} {...textProps} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 + i * 0.4 }}>
          {label}
        </motion.text>
      ))}
      {leaders.map((lx, i) => (
        <motion.path
          key={`l${i}`}
          d={`M160 74V112H${lx}V149`}
          fill="none"
          stroke={MUTED}
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.4 + i * 0.12, duration: 0.7, ease }}
        />
      ))}
      {leaders.map((lx, i) =>
        team.map((dx, j) => (
          <motion.path
            key={`t${i}${j}`}
            d={`M${lx} 171V218H${lx + dx}V258`}
            fill="none"
            stroke={MUTED}
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.1 + i * 0.12 + j * 0.05, duration: 0.6, ease }}
          />
        )),
      )}
      <motion.circle cx="160" cy="60" r="14" fill={GOLD} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 300, damping: 16 }} />
      {leaders.map((lx, i) => (
        <g key={`n${i}`}>
          <motion.circle cx={lx} cy="160" r="11" fill={WHITE} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.9 + i * 0.12, type: "spring", stiffness: 300, damping: 16 }} />
          <motion.circle
            cx={lx}
            cy="160"
            r="18"
            fill="none"
            stroke={GOLD}
            strokeWidth="2"
            initial={{ pathLength: 0, rotate: -90 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 2.4 + i * 0.2, duration: 0.8, ease }}
          />
          {team.map((dx, j) => (
            <motion.circle
              key={j}
              cx={lx + dx}
              cy="265"
              r="7"
              fill="rgba(255,255,255,0.7)"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.5 + i * 0.12 + j * 0.05, type: "spring", stiffness: 300, damping: 16 }}
            />
          ))}
        </g>
      ))}
    </g>
  );
}

/** A crowd of strokes pointing everywhere turns, in a ripple, to the same direction. */
function Alinhamento() {
  const rand = seeded(11);
  const cols = 7;
  const rows = 6;
  const items = Array.from({ length: cols * rows }, (_, i) => {
    const c = i % cols;
    const r = Math.floor(i / cols);
    return {
      x: 52 + c * 36,
      y: 82 + r * 40,
      rot: -85 + rand() * 170,
      dist: Math.hypot(c - (cols - 1) / 2, r - (rows - 1) / 2),
    };
  });
  return (
    <motion.g initial={{ y: 0 }} animate={{ y: -10 }} transition={{ delay: 3, duration: 1.2, ease }}>
      {items.map((it, i) => (
        <motion.line
          key={i}
          x1={it.x}
          y1={it.y - 11}
          x2={it.x}
          y2={it.y + 11}
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ rotate: it.rot, stroke: "rgba(255,255,255,0.55)", opacity: 0 }}
          animate={{ rotate: 0, stroke: GOLD, opacity: 1 }}
          transition={{
            opacity: { delay: i * 0.01, duration: 0.3 },
            rotate: { delay: 1 + it.dist * 0.18, duration: 0.9, ease },
            stroke: { delay: 1.3 + it.dist * 0.18, duration: 0.4 },
          }}
        />
      ))}
    </motion.g>
  );
}

/** The HR cycle, written out line by line and closed with a loop. */
function Ciclo() {
  const words = ["Recrutar", "Integrar", "Avaliar", "Desenvolver"];
  return (
    <g>
      {words.map((w, i) => (
        <motion.g key={w} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.35, duration: 0.8, ease }}>
          <text x="30" y={112 + i * 54} fontSize="10" fill={GOLD} {...textProps}>
            0{i + 1}
          </text>
          <text x="58" y={116 + i * 54} fontSize="28" fontWeight="900" fill={WHITE} letterSpacing="-0.02em">
            {w}
          </text>
        </motion.g>
      ))}
      <motion.path
        d="M262 274H290V96H262"
        fill="none"
        stroke={GOLD}
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1.9, duration: 1.2, ease }}
      />
      <motion.path d="M269 89l-7 7 7 7" fill="none" stroke={GOLD} strokeWidth="2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3 }} />
      <motion.text x="30" y="330" fontSize="9" fill={LABEL} {...textProps} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.1 }}>
        UM CICLO CONTÍNUO, NÃO UM EVENTO
      </motion.text>
    </g>
  );
}

export const performanceScenes: FilmScene[] = [
  { title: "Começa pelo dono", caption: "Assessment comportamental do CEO: padrões de decisão, liderança e gatilhos emocionais.", Stage: Assessment },
  { title: "Líderes formados", caption: "Feedback, gestão de conflitos e inteligência emocional para quem conduz o time.", Stage: Lideres },
  { title: "Um time na mesma direção", caption: "Quando cada pessoa entende seu papel, a cultura passa a trabalhar a favor da estratégia.", Stage: Alinhamento },
  { title: "RH que sustenta a cultura", caption: "Recrutamento, integração, avaliação e desenvolvimento numa rotina só, com plataforma e IA.", Stage: Ciclo },
];
