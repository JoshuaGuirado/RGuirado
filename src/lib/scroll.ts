import Lenis from "lenis";
import { useEffect } from "react";

let lenis: Lenis | null = null;

const NAV_OFFSET = -72;

/** Starts Lenis smooth scrolling for the lifetime of the component that calls it. */
export function useSmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1 });
    let frame = requestAnimationFrame(function raf(time) {
      lenis?.raf(time);
      frame = requestAnimationFrame(raf);
    });

    return () => {
      cancelAnimationFrame(frame);
      lenis?.destroy();
      lenis = null;
    };
  }, []);
}

/** Smoothly scrolls to the element with the given id, accounting for the fixed navbar. */
export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  if (lenis) {
    lenis.scrollTo(el, { offset: NAV_OFFSET, duration: 1.4 });
  } else {
    const top = el.getBoundingClientRect().top + window.scrollY + NAV_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

export function scrollToTop(immediate = false) {
  if (lenis) {
    lenis.scrollTo(0, { immediate, duration: 1.2 });
  } else {
    window.scrollTo({ top: 0, behavior: immediate ? "instant" : "smooth" });
  }
}

export const scrollToForm = () => scrollToId("contato");

let pendingTarget: string | null = null;

/** Remembers a section to scroll to once the landing page has mounted again. */
export function queueScrollTo(id: string) {
  pendingTarget = id;
}

export function consumeQueuedScroll() {
  const id = pendingTarget;
  pendingTarget = null;
  if (id) setTimeout(() => scrollToId(id), 300);
}
