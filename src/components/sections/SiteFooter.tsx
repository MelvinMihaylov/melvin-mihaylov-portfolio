"use client";

import { useReducedMotion, useScrollReveal } from "@/components/use-preferences";
import type { LandingContent } from "@/content";
import { Gauge } from "lucide-react";

type SiteFooterProps = {
  content: LandingContent;
};

export function SiteFooter({ content }: SiteFooterProps) {
  const { footer } = content;
  const { reduced, toggle } = useReducedMotion();

  // The footer is the one component guaranteed to be on the page, so it owns
  // the reveal observer for every `.reveal` element above it.
  useScrollReveal(reduced);

  return (
    <footer className="footer container">
      <div className="footer-top">
        <div>
          <p className="footer-name">{footer.name}</p>
          <p>{footer.tagline}</p>
        </div>
        <a className="text-link" href="#page">
          {footer.backToTop}
        </a>
      </div>

      <div className="footer-bottom">
        <span>{footer.copyright}</span>
        <button type="button" onClick={toggle}>
          <Gauge size={14} />
          {reduced ? footer.restoreMotion : footer.reduceMotion}
        </button>
        <span>{footer.motto}</span>
      </div>
    </footer>
  );
}
