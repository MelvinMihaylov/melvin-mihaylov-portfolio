"use client";

import type { LandingContent, NavKey } from "@/content";
import {
  type Locale,
  getAlternateLocale,
  getLocaleShortLabel,
  getPathnameWithoutLocale,
} from "@/resources/i18n";
import classNames from "classnames";
import { ArrowRight, ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "./use-preferences";

const NAV_ORDER: NavKey[] = ["services", "integrations", "process", "about", "pricing"];

/** Scroll distance past which downward scrolling tucks the island away. */
const HIDE_AFTER = 260;

type SiteHeaderProps = {
  locale: Locale;
  content: LandingContent;
};

export function SiteHeader({ locale, content }: SiteHeaderProps) {
  const { header, nav } = content;
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { toggle: toggleTheme } = useTheme();
  const shellRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  const otherLocale = getAlternateLocale(locale);
  const otherHref = `/${otherLocale}${getPathnameWithoutLocale(pathname ?? `/${locale}`).replace(/^\/$/, "")}`;

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      // Hide while scrolling down past the fold, reveal on any upward scroll.
      setHidden(y > HIDE_AFTER && y > lastY);
      lastY = y;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The lit edge and bloom follow the pointer across the bar.
  useEffect(() => {
    const shell = shellRef.current;
    if (!shell) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (event: PointerEvent) => {
      const rect = shell.getBoundingClientRect();
      shell.style.setProperty(
        "--mx",
        `${(((event.clientX - rect.left) / rect.width) * 100).toFixed(1)}%`,
      );
      shell.style.setProperty(
        "--my",
        `${(((event.clientY - rect.top) / rect.height) * 100).toFixed(1)}%`,
      );
    };

    const onLeave = () => {
      shell.style.setProperty("--mx", "50%");
      shell.style.setProperty("--my", "50%");
    };

    shell.addEventListener("pointermove", onMove);
    shell.addEventListener("pointerleave", onLeave);
    return () => {
      shell.removeEventListener("pointermove", onMove);
      shell.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  /** Any activation that lands on a link inside the overlay dismisses it. */
  const closeOnAnchor = (event: React.SyntheticEvent) => {
    // Links wrap spans now, so the target is often a child of the anchor.
    if ((event.target as HTMLElement).closest?.("a")) setMenuOpen(false);
  };

  return (
    <>
      <header
        ref={shellRef}
        className={classNames("site-header", { "is-hidden": hidden && !menuOpen })}
      >
        <a className="site-brand" href="#page" aria-label={header.homeLabel}>
          mm<span>.</span>
        </a>

        <nav aria-label={header.navLabel}>
          {NAV_ORDER.map((key) => (
            <a key={key} href={`#${key}`}>
              {nav[key]}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <Link className="language" href={otherHref} aria-label={header.languageLabel}>
            {getLocaleShortLabel(locale)}
            <span>/</span>
            {getLocaleShortLabel(otherLocale)}
          </Link>

          <button
            type="button"
            className="theme-btn"
            onClick={toggleTheme}
            aria-label={header.themeLabel}
          >
            {/*
              Both icons ship; CSS shows one based on [data-theme], which the
              inline script sets before paint. Choosing in JS here meant the
              server guessed "dark" and the icon flipped on hydration.
            */}
            <Sun size={17} className="icon-when-dark" />
            <Moon size={17} className="icon-when-light" />
          </button>

          <a className="header-cta" href="#contact">
            <span className="cta-point" aria-hidden="true" />
            {header.cta}
          </a>

          <button
            type="button"
            className="menu-button"
            onClick={() => setMenuOpen(true)}
            aria-label={header.menuLabel}
            aria-expanded={menuOpen}
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      {menuOpen && (
        <nav
          className="mobile-menu"
          aria-label={header.navLabel}
          onClick={closeOnAnchor}
          onKeyUp={closeOnAnchor}
        >
          <div className="mobile-menu-top">
            <span className="mobile-menu-brand">
              mm<span>.</span>
            </span>
            <button
              type="button"
              className="mobile-menu-close"
              onClick={() => setMenuOpen(false)}
              aria-label={header.closeLabel}
            >
              <X size={20} />
            </button>
          </div>

          <ul className="mobile-nav">
            {NAV_ORDER.map((key, index) => (
              <li key={key} style={{ "--i": index } as React.CSSProperties}>
                <a href={`#${key}`}>
                  <span className="mobile-nav-num">{String(index + 1).padStart(2, "0")}</span>
                  <span className="mobile-nav-label">{nav[key]}</span>
                  <ArrowUpRight size={17} />
                </a>
              </li>
            ))}
          </ul>

          <div className="mobile-menu-foot">
            <a className="button primary" href="#contact">
              {header.cta}
              <ArrowRight size={16} />
            </a>
            <a className="mobile-menu-mail" href={`mailto:${content.contact.email}`}>
              {content.contact.email}
            </a>
            <a className="mobile-menu-tel" href={`tel:${content.contact.phoneHref}`}>
              {content.contact.phone}
            </a>
          </div>
        </nav>
      )}
    </>
  );
}
