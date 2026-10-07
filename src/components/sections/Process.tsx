import type { LandingContent } from "@/content";
import { ArrowRight } from "lucide-react";

type ProcessProps = {
  content: LandingContent;
};

export function Process({ content }: ProcessProps) {
  const { process } = content;

  return (
    <section id="process" className="section process-section container">
      <div className="process-intro">
        <p className="eyebrow">{process.eyebrow}</p>
        <h2>
          {process.titleLead}
          <br />
          <em>{process.titleEmphasis}</em>
        </h2>
        <p>{process.intro}</p>
        <a className="button primary" href="#contact">
          {process.cta}
          <ArrowRight size={16} />
        </a>
      </div>

      <div className="steps">
        {process.steps.map((step, index) => (
          <article key={step.label} className="step reveal">
            <span className="step-number">{String(index + 1).padStart(2, "0")}</span>
            <div>
              <p className="step-label">{step.label}</p>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
