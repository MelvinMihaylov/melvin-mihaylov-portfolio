import type { Concept } from "@/content";
import classNames from "classnames";
import Image from "next/image";

const IMAGES: Record<Concept["key"], string> = {
  architecture: "/images/concepts/architecture.avif",
  audio: "/images/concepts/audio.avif",
};

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
  const isObject = concept.key === "audio";

  return (
    <div className={classNames("concept", isObject ? "object" : "architecture")}>
      <Image
        src={IMAGES[concept.key]}
        alt=""
        fill
        priority={priority}
        sizes={sizes ?? "(max-width: 700px) 100vw, 50vw"}
      />
      <div className="concept-nav">
        <b>
          {concept.brand}
          <span>{concept.brandAccent}</span>
          {!isObject && "."}
        </b>
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
