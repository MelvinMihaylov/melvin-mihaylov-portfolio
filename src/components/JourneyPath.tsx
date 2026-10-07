"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "./use-preferences";

/** Section anchors the path threads through, in document order. */
const ANCHORS = ["directions", "services", "process", "about", "pricing", "contact"] as const;

/** Scroll position that counts as "reached": three quarters down the viewport. */
const REACH_RATIO = 0.75;

/** Binary-search steps used to invert getPointAtLength — 16 is sub-pixel on any page height. */
const SEARCH_STEPS = 16;

/** Below this width the path switches to a simpler left/right zigzag. */
const NARROW_BREAKPOINT = 760;

/**
 * A single continuous line that runs the height of the page, threading between
 * sections. It draws itself in as you scroll: the base stroke is always visible,
 * while the glow and light strokes are revealed via stroke-dashoffset and a dot
 * rides the leading edge. When motion is reduced the line renders fully drawn
 * and the travelling dot is hidden.
 */
export function JourneyPath() {
  const { reduced } = useReducedMotion();
  const svgRef = useRef<SVGSVGElement>(null);
  const baseRef = useRef<SVGPathElement>(null);
  const glowRef = useRef<SVGPathElement>(null);
  const lightRef = useRef<SVGPathElement>(null);
  const dotRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const page = document.getElementById("page");
    if (!page) return;

    let totalLength = 0;
    let frame = 0;

    const update = () => {
      frame = 0;
      const base = baseRef.current;
      const glow = glowRef.current;
      const light = lightRef.current;
      const dot = dotRef.current;
      if (!base || !glow || !light || !dot || !totalLength) return;

      const reachY = window.scrollY + window.innerHeight * REACH_RATIO;

      // Invert the curve: find the arc length whose point sits at the reach line.
      let low = 0;
      let high = totalLength;
      for (let step = 0; step < SEARCH_STEPS; step += 1) {
        const mid = (low + high) / 2;
        if (base.getPointAtLength(mid).y < reachY) low = mid;
        else high = mid;
      }

      const drawn = reduced ? totalLength : low;
      light.style.strokeDashoffset = String(totalLength - drawn);
      glow.style.strokeDashoffset = String(totalLength - drawn);

      const tip = base.getPointAtLength(drawn);
      dot.setAttribute("cx", String(tip.x));
      dot.setAttribute("cy", String(tip.y));
      dot.style.opacity = reduced ? "0" : "1";
    };

    const build = () => {
      const svg = svgRef.current;
      const base = baseRef.current;
      const glow = glowRef.current;
      const light = lightRef.current;
      if (!svg || !base || !glow || !light) return;

      const width = page.clientWidth;
      const height = page.scrollHeight;

      // Page-relative offsets. `offsetTop` is measured against the nearest
      // positioned ancestor, so a section nested inside a `position: relative`
      // container reports ~0 and drags the curve off the page.
      const pageTop = page.getBoundingClientRect().top + window.scrollY;
      const topOf = (id: string) => {
        const element = document.getElementById(id);
        if (!element) return 0;
        return element.getBoundingClientRect().top + window.scrollY - pageTop;
      };

      const directions = topOf("directions");
      const services = topOf("services");
      const process = topOf("process");
      const about = topOf("about");
      const pricing = topOf("pricing");
      const contact = topOf("contact");

      svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
      svg.style.height = `${height}px`;

      const d =
        width < NARROW_BREAKPOINT
          ? `M ${width - 16} 0 C ${width - 16} 400,${width - 30} 700,${width - 16} ${directions} S 16 ${services - 70},16 ${services + 140} S ${width - 16} ${process - 90},${width - 16} ${process + 200} S 16 ${pricing - 120},16 ${pricing + 150} S ${width - 16} ${contact - 80},${width - 16} ${height}`
          : `M ${width * 0.96} -80 C ${width * 0.96} 220,${width * 0.9} 360,${width * 0.88} ${directions - 120} C ${width * 0.86} ${directions + 60},${width * 0.95} ${directions + 120},${width * 0.95} ${directions + 360} C ${width * 0.95} ${services - 50},${width * 0.075} ${services - 150},${width * 0.075} ${services + 160} C ${width * 0.075} ${process - 80},${width * 0.56} ${process - 60},${width * 0.56} ${process + 160} C ${width * 0.56} ${about - 120},${width * 0.92} ${about - 100},${width * 0.92} ${about + 130} C ${width * 0.92} ${pricing - 20},${width * 0.09} ${pricing - 80},${width * 0.09} ${pricing + 140} C ${width * 0.09} ${contact - 100},${width * 0.88} ${contact - 160},${width * 0.88} ${contact + 80} C ${width * 0.88} ${height - 200},${width * 0.55} ${height - 260},${width * 0.55} ${height}`;

      for (const path of [base, glow, light]) path.setAttribute("d", d);

      totalLength = base.getTotalLength();
      for (const path of [glow, light]) {
        path.style.strokeDasharray = String(totalLength);
      }

      update();
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    const observer = new ResizeObserver(build);
    observer.observe(page);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", build);
    build();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", build);
      cancelAnimationFrame(frame);
    };
  }, [reduced]);

  return (
    <svg ref={svgRef} className="journey-path" aria-hidden="true" preserveAspectRatio="none">
      <defs>
        <filter id="journey-glow" x="-100%" y="-30%" width="300%" height="160%">
          <feGaussianBlur stdDeviation="7" />
        </filter>
      </defs>
      <path ref={baseRef} className="path-base" />
      <path ref={glowRef} className="path-glow" filter="url(#journey-glow)" />
      <path ref={lightRef} className="path-light" />
      <circle ref={dotRef} r="4" className="path-dot" />
    </svg>
  );
}

export { ANCHORS };
