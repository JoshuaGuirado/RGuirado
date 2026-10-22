# R.Guirado Consultoria — site

Landing page da R.Guirado (rguirado.com.br): React 19 + Vite + Tailwind CSS v4, animações com Motion (Framer Motion) e rolagem nativa do navegador (sem biblioteca de smooth scroll, para não travar).

## Rodar localmente

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint    # checagem de tipos
npm run build   # build de produção em dist/
```

## Estrutura

- `src/components/sections/` — seções da página (Hero, Pilares, Método ALTA, Cases, Quem Somos, FAQ, Formulário…)
- `src/components/ui/` — peças reutilizáveis (Reveal, RevealText, SectionDivider, Curtain, TextBand, MotionFilm, VideoCard, Button, Icons…)
- `src/components/films/` — cenas animadas em SVG dos pilares Gestão Estratégica e Performance Comportamental
- `src/lib/` — navegação por âncoras (`scroll.ts`) e constantes (WhatsApp, redes)
- `public/logos/` — logos dos parceiros em SVG (vetorizados, brancos)
- `public/media/` — vídeos comprimidos (H.264, faststart) e capas em WebP
- `public/team/` — fotos do time em WebP
