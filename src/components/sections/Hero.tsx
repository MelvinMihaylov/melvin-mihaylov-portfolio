"use client";

import { ConceptPreview } from "@/components/ConceptPreview";
import type { LandingContent } from "@/content";
import { ArrowRight, Monitor, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";

type HeroProps = {
  content: LandingContent;
};

export function Hero({ content }: HeroProps) {
  const { hero, directions } = content;
  const heroRef = useRef<HTMLElement>(null);

  // Parallax tilt on the browser mock, driven by pointer position.
  useEffect(() => {
    const node = heroRef.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (event: PointerEvent) => {
      const rect = node.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      node.style.setProperty("--mx", x.toFixed(3));
      node.style.setProperty("--my", y.toFixed(3));
    };

    const onLeave = () => {
      node.style.setProperty("--mx", "0");
      node.style.setProperty("--my", "0");
    };

    node.addEventListener("pointermove", onMove);
    node.addEventListener("pointerleave", onLeave);
    return () => {
      node.removeEventListener("pointermove", onMove);
      node.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <section className="hero container" ref={heroRef}>
      <div className="hero-copy">
        <p className="eyebrow">{hero.eyebrow}</p>
        <h1>
          <span>{hero.titleLead}</span>
          <span>
            <em>{hero.titleEmphasis}</em>
          </span>
        </h1>
        <p className="hero-intro">{hero.intro}</p>
        <div className="hero-buttons">
          <a className="button primary" href="#contact">
            {hero.primaryCta}
            <ArrowRight size={16} />
          </a>
          <a className="text-link" href="#services">
            {hero.secondaryCta}
          </a>
        </div>
        <p className="promise">
          <Sparkles size={14} />
          {hero.promise}
        </p>
      </div>

      <div className="hero-art" aria-hidden="true">
        <div className="orbit-label label-top">
          <span>{hero.orbitTop}</span>
        </div>

        <div className="hero-browser">
          <div className="browser-bar">
            <div className="browser-dots">
              <i />
              <i />
              <i />
            </div>
            <span>{hero.browserUrl}</span>
            <Monitor size={10} />
          </div>
          <ConceptPreview concept={directions.concepts[0]} priority sizes="45vw" />
        </div>

        <div className="orbit-label label-bottom">
          <span>{hero.orbitBottom}</span>
        </div>
      </div>

      <div className="hero-bottom">
        <div className="scroll-cue">
          <div className="mouse-track">
            <i />
          </div>
          <span>{hero.scrollCue}</span>
        </div>
        <span className="bottom-index">{hero.index}</span>
      </div>
    </section>
  );
}
