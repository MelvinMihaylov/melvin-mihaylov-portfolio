import { ConceptPreview } from "@/components/ConceptPreview";
import type { LandingContent } from "@/content";

type DirectionsProps = {
  content: LandingContent;
};

export function Directions({ content }: DirectionsProps) {
  const { directions } = content;

  return (
    <section id="directions" className="section container">
      <div className="section-heading reveal">
        <div>
          <p className="eyebrow">{directions.eyebrow}</p>
          <h2>
            {directions.titleLead}
            <br />
            <em>{directions.titleEmphasis}</em>
          </h2>
        </div>
        <p>{directions.intro}</p>
      </div>

      <div className="project-grid">
        {directions.concepts.map((concept, index) => (
          <article key={concept.key} className={`project project-${index} reveal`}>
            <div className="project-preview">
              <ConceptPreview concept={concept} />
            </div>
            <div className="project-meta">
              <div>
                <p className="project-kicker">{concept.conceptLabel}</p>
                <h3>{concept.title}</h3>
                <p>{concept.meta}</p>
              </div>
              <span className="project-num">{String(index + 1).padStart(2, "0")}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
