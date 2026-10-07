import type { LandingContent, PledgeKey } from "@/content";
import { Eye, Gauge, Lightbulb, Receipt } from "lucide-react";
import type { ComponentType } from "react";

const PLEDGE_ICONS: Record<PledgeKey, ComponentType<{ size?: number }>> = {
  idea: Lightbulb,
  fast: Gauge,
  price: Receipt,
  open: Eye,
};

type WhyProps = {
  content: LandingContent;
};

/**
 * The argument for bothering at all, followed by the three things a client
 * actually wants to hear before they get in touch.
 */
export function Why({ content }: WhyProps) {
  const { why } = content;

  return (
    <section id="why" className="section why-section container">
      <div className="section-heading reveal">
        <div>
          <p className="eyebrow">{why.eyebrow}</p>
          <h2>
            {why.titleLead}
            <br />
            <em>{why.titleEmphasis}</em>
          </h2>
        </div>
        <p>{why.intro}</p>
      </div>

      <div className="pledge-grid">
        {why.pledges.map((pledge) => {
          const Icon = PLEDGE_ICONS[pledge.key];
          return (
            <article key={pledge.key} className="pledge reveal">
              <span className="pledge-icon">
                <Icon size={18} />
              </span>
              <h3>{pledge.title}</h3>
              <p>{pledge.body}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
