import React, { useEffect, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "motion/react";
import Landing from "./components/Landing";
import { PillarPage } from "./components/sections/PillarPage";
import { WhatsAppButton } from "./components/ui/WhatsAppButton";
import { scrollToTop } from "./lib/scroll";
import { EASE_OUT_EXPO } from "./lib/constants";

type Route = "landing" | "franchising" | "gestao" | "performance";

const routeFromHash = (): Route => {
  const hash = window.location.hash;
  if (hash === "#/franchising") return "franchising";
  if (hash === "#/gestao") return "gestao";
  if (hash === "#/performance") return "performance";
  return "landing";
};

export default function App() {
  const [route, setRoute] = useState<Route>(routeFromHash);

  useEffect(() => {
    const handleHashChange = () => {
      const next = routeFromHash();
      // Plain section anchors (#contato) keep the landing page mounted.
      if (next === "landing" && window.location.hash && !window.location.hash.startsWith("#/")) return;
      setRoute(next);
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen overflow-x-clip bg-dark-950 font-sans text-white">
        <AnimatePresence mode="wait" onExitComplete={() => scrollToTop(true)}>
          {/* Opacity only: a transform here would break the fixed navbar and sticky sections. */}
          <motion.div
            key={route}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
          >
            {route === "landing" ? <Landing /> : <PillarPage pillarId={route} />}
          </motion.div>
        </AnimatePresence>
        <WhatsAppButton />
      </div>
    </MotionConfig>
  );
}
