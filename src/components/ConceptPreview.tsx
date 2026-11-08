"use client";

import type { Concept } from "@/content";
import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";

const IMAGES: Record<Concept["key"], string> = {
  renovation: "/images/concepts/renovation-after.jpg",
  wine: "/images/concepts/wine.jpg",
  coffee: "/images/concepts/coffee.jpg",
  honey: "/images/concepts/honey.jpg",
};

/** Shown on the left of the split when a concept has `compare`. */
const BEFORE_IMAGE = "/images/concepts/renovation-before.jpg";

type ConceptPreviewProps = {
  concept: Concept;
  priority?: boolean;
  sizes?: string;
};

/**
 * A miniature of an imagined brand site. Used both inside the hero browser frame
 * and full size in the directions grid — the CSS scales the type down in the former.
 */
export function ConceptPreview({ concept, priority = false, sizes }: ConceptPreviewProps) {
  const imageSizes = sizes ?? "(max-width: 700px) 100vw, 50vw";
  const [split, setSplit] = useState(50);

  return (
    <div className={classNames("concept", `concept--${concept.key}`)}>
      <Image src={IMAGES[concept.key]} alt="" fill priority={priority} sizes={imageSizes} />
      {concept.compare && (
        <>
          <div className="concept-before" style={{ clipPath: `inset(0 ${100 - split}% 0 0)` }}>
            <Image src={BEFORE_IMAGE} alt="" fill priority={priority} sizes={imageSizes} />
          </div>
          <span className="concept-tag before">{concept.compare.before}</span>
          <span className="concept-tag after">{concept.compare.after}</span>
          <span className="concept-divider" style={{ left: `${split}%` }} />
          <input
            className="concept-slider"
            type="range"
            min={0}
            max={100}
            step={0.1}
            value={split}
            onChange={(event) => setSplit(Number(event.target.value))}
            aria-label={concept.compare.label}
          />
        </>
      )}
      <div className="concept-nav">
        {concept.brand && (
          <b>
            {concept.brand}
            {concept.brandAccent && <span>{concept.brandAccent}</span>}
          </b>
        )}
        {concept.navItems.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      <div className="concept-copy">
        <p className="tiny">{concept.kicker}</p>
        <h3>
          {concept.headlineTop}
          <br />
          <i>{concept.headlineBottom}</i>
        </h3>
        <span className="concept-link">{concept.link}</span>
      </div>
      <div className="concept-bottom">
        <span>{concept.footLeft}</span>
        <span>{concept.footRight}</span>
      </div>
    </div>
  );
}
