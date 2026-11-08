"use client";

import type { LandingContent } from "@/content";
import { ArrowRight, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";

const DISMISSED_KEY = "free-banner-dismissed";
const APPEAR_DELAY_MS = 1500;

type FreeSiteBannerProps = {
  content: LandingContent;
};

/**
 * Floating "free website" offer. Slides in shortly after the page opens,
 * steps aside while pricing or contact is on screen (they already make the offer),
 * and stays closed after the visitor dismisses it.
 */
export function FreeSiteBanner({ content }: FreeSiteBannerProps) {
  const { freeBanner } = content;
  const [dismissed, setDismissed] = useState(true);
  const [ready, setReady] = useState(false);
  const [offerInView, setOfferInView] = useState(false);

  useEffect(() => {
    try {
      setDismissed(localStorage.getItem(DISMISSED_KEY) === "1");
    } catch {
      setDismissed(false);
    }

    // A short beat first, so the offer lands after the hero has drawn the eye.
    const timer = setTimeout(() => setReady(true), APPEAR_DELAY_MS);

    const visible = new Set<Element>();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) visible.add(entry.target);
        else visible.delete(entry.target);
      }
      setOfferInView(visible.size > 0);
    });
    for (const id of ["pricing", "contact"]) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  const dismiss = () => {
    setDismissed(true);
    try {
      localStorage.setItem(DISMISSED_KEY, "1");
    } catch {
      // Private mode — it simply comes back on the next visit.
    }
  };

  const shown = !dismissed && ready && !offerInView;

  return (
    <aside
      className={`free-banner${shown ? " is-shown" : ""}`}
      aria-label={freeBanner.title}
      inert={!shown}
    >
      <span className="free-banner-icon" aria-hidden="true">
        <Sparkles size={20} />
      </span>
      <p className="free-banner-text">
        <strong>{freeBanner.title}</strong>
        <span>{freeBanner.body}</span>
      </p>
      <a className="text-link free-banner-cta" href="#contact">
        {freeBanner.cta}
        <ArrowRight size={14} />
      </a>
      <button
        type="button"
        className="free-banner-close"
        onClick={dismiss}
        aria-label={freeBanner.closeLabel}
      >
        <X size={16} />
      </button>
    </aside>
  );
}
