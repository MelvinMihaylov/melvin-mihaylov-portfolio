"use client";

import { useCallback, useEffect, useSyncExternalStore } from "react";

const MOTION_KEY = "data-motion";
const THEME_KEY = "data-theme";

type Theme = "dark" | "light";

function subscribeToRoot(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: [MOTION_KEY, THEME_KEY],
  });
  return () => observer.disconnect();
}

/**
 * Motion preference, stored as `data-motion` on <html> so CSS can act on it too.
 * Starts from the OS `prefers-reduced-motion` setting; the footer toggle overrides it.
 */
export function useReducedMotion() {
  const reduced = useSyncExternalStore(
    subscribeToRoot,
    () => document.documentElement.getAttribute(MOTION_KEY) === "reduced",
    () => false,
  );

  const toggle = useCallback(() => {
    const root = document.documentElement;
    const next = root.getAttribute(MOTION_KEY) === "reduced" ? "full" : "reduced";
    root.setAttribute(MOTION_KEY, next);
    try {
      localStorage.setItem(MOTION_KEY, next);
    } catch {
      // Private mode — the choice simply won't persist.
    }
  }, []);

  return { reduced, toggle };
}

export function useTheme() {
  const theme = useSyncExternalStore(
    subscribeToRoot,
    () => (document.documentElement.getAttribute(THEME_KEY) as Theme | null) ?? "dark",
    () => "dark" as Theme,
  );

  const toggle = useCallback(() => {
    const root = document.documentElement;
    const next: Theme = root.getAttribute(THEME_KEY) === "light" ? "dark" : "light";
    root.setAttribute(THEME_KEY, next);
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      // Ignore — theme falls back to the default on next load.
    }
  }, []);

  return { theme, toggle };
}

/**
 * Adds `is-visible` to `.reveal` elements as they enter the viewport.
 * A no-op when motion is reduced, since CSS already shows them.
 */
export function useScrollReveal(reduced: boolean) {
  useEffect(() => {
    if (reduced) return;
    const targets = document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)");
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );

    for (const target of targets) observer.observe(target);
    return () => observer.disconnect();
  }, [reduced]);
}
