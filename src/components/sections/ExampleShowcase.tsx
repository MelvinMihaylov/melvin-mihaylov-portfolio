"use client";

import { useReducedMotion } from "@/components/use-preferences";
import type { ExampleKey, LandingContent } from "@/content";
import {
  CalendarCheck,
  ChartColumn,
  LayoutGrid,
  type LucideIcon,
  Newspaper,
  ShoppingCart,
  UserRound,
  Users,
  UtensilsCrossed,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { DEMO_SITES } from "./DemoSites";

const EXAMPLE_ICONS: Record<ExampleKey, LucideIcon> = {
  blog: Newspaper,
  menu: UtensilsCrossed,
  booking: CalendarCheck,
  shop: ShoppingCart,
  catalogue: LayoutGrid,
  portfolio: UserRound,
  dashboard: ChartColumn,
  crm: Users,
};

/** How long each demo holds before advancing. */
const DWELL_MS = 5000;

type ExampleShowcaseProps = {
  content: LandingContent;
};

/**
 * Switches between demo-site mocks. Advances on its own so the section shows
 * its range without being touched, and hands control over the moment someone
 * interacts — hovering, focusing, or picking a category outright.
 */
export function ExampleShowcase({ content }: ExampleShowcaseProps) {
  const { services } = content;
  const examples = services.examples;
  const { reduced } = useReducedMotion();

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  /** Set once the visitor picks a category; auto-advance never resumes after. */
  const [taken, setTaken] = useState(false);
  const [visible, setVisible] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);

  // Only cycle while the showcase is actually on screen.
  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      threshold: 0.25,
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (reduced || paused || taken || !visible) return;
    const timer = setTimeout(() => setActive((i) => (i + 1) % examples.length), DWELL_MS);
    return () => clearTimeout(timer);
  }, [reduced, paused, taken, visible, examples.length]);

  const pick = useCallback((index: number) => {
    setActive(index);
    setTaken(true);
  }, []);

  const onKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      const step =
        event.key === "ArrowDown" || event.key === "ArrowRight"
          ? 1
          : event.key === "ArrowUp" || event.key === "ArrowLeft"
            ? -1
            : 0;
      if (!step) return;
      event.preventDefault();
      const next = (active + step + examples.length) % examples.length;
      pick(next);
      tabsRef.current?.querySelectorAll<HTMLButtonElement>("[role=tab]")[next]?.focus();
    },
    [active, examples.length, pick],
  );

  const current = examples[active];
  const Demo = DEMO_SITES[current.key];

  return (
    <div
      className="examples"
      ref={rootRef}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <h3 className="examples-title reveal">{services.examplesTitle}</h3>

      <div className="showcase reveal">
        <div
          className="showcase-tabs"
          role="tablist"
          aria-label={services.examplesTitle}
          aria-orientation="vertical"
          ref={tabsRef}
          onKeyDown={onKeyDown}
        >
          {examples.map((example, index) => {
            const Icon = EXAMPLE_ICONS[example.key];
            const isActive = index === active;
            return (
              <button
                key={example.key}
                type="button"
                role="tab"
                id={`showcase-tab-${example.key}`}
                aria-selected={isActive}
                aria-controls={`showcase-panel-${example.key}`}
                tabIndex={isActive ? 0 : -1}
                className={`showcase-tab${isActive ? " is-active" : ""}`}
                onClick={() => pick(index)}
              >
                <Icon size={16} />
                <span className="showcase-tab-text">
                  <strong>{example.name}</strong>
                  <em>{example.body}</em>
                </span>
                {isActive && !reduced && !taken && !paused && visible && (
                  <span className="showcase-progress" key={`p-${active}`} />
                )}
              </button>
            );
          })}
        </div>

        <div
          className="showcase-stage"
          role="tabpanel"
          id={`showcase-panel-${current.key}`}
          aria-labelledby={`showcase-tab-${current.key}`}
          onClickCapture={() => setTaken(true)}
        >
          <div className="showcase-frame">
            <div className="showcase-bar">
              <i />
              <i />
              <i />
              <span>{current.preview.brand.toLowerCase().replace(/\s+/g, "")}.bg</span>
            </div>
            {/* Keyed so each switch replays the enter animation. */}
            <div className="showcase-screen" key={current.key}>
              <Demo preview={current.preview} />
            </div>
          </div>
        </div>
      </div>

      <p className="examples-note">{services.examplesNote}</p>
    </div>
  );
}
