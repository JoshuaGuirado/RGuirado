# R.Guirado Consultoria — site

Landing page da R.Guirado (rguirado.com.br): React 19 + Vite + Tailwind CSS v4, animações com Motion (Framer Motion) e rolagem suave com Lenis.

## Rodar localmente

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint    # checagem de tipos
npm run build   # build de produção em dist/
```

## Estrutura

- `src/components/sections/` — seções da página (Hero, Pilares, Método ALTA, Cases, Quem Somos, FAQ, Formulário…)
- `src/components/ui/` — peças reutilizáveis (Reveal, RevealText, SpotlightCard, VideoCard, Button…)
- `src/lib/` — rolagem suave (`scroll.ts`) e constantes (WhatsApp, redes)
- `public/logos/` — logos dos parceiros em SVG (vetorizados, brancos)
- `public/media/` — vídeos comprimidos (H.264, faststart) e capas em WebP
- `public/team/` — fotos do time em WebP
