// Native scrolling only: it runs on the compositor thread, so the page keeps
// scrolling smoothly even while videos decode or React is busy.

const NAV_OFFSET = 72;

const behavior = (): ScrollBehavior =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";

/** Smoothly scrolls to the element with the given id, accounting for the fixed navbar. */
export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
  window.scrollTo({ top, behavior: behavior() });
}

export function scrollToTop(immediate = false) {
  window.scrollTo({ top: 0, behavior: immediate ? "instant" : behavior() });
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
