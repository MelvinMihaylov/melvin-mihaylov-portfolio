import type { CapabilityKey, LandingContent } from "@/content";
import { Check, CreditCard, FileSpreadsheet, Package, Users } from "lucide-react";
import type { ComponentType } from "react";
import { IntegrationPanel } from "./IntegrationPanel";
import { SystemDemo } from "./SystemDemo";

const CAPABILITY_ICONS: Record<CapabilityKey, ComponentType<{ size?: number }>> = {
  accounting: FileSpreadsheet,
  payments: CreditCard,
  dropshipping: Package,
  crm: Users,
};

type IntegrationsProps = {
  content: LandingContent;
};

export function Integrations({ content }: IntegrationsProps) {
  const { integrations } = content;

  return (
    <section id="integrations" className="section integration-section container">
      <div className="section-heading reveal">
        <div>
          <p className="eyebrow">{integrations.eyebrow}</p>
          <h2>
            {integrations.titleLead}
            <br />
            <em>{integrations.titleEmphasis}</em>
          </h2>
        </div>
        <p>{integrations.intro}</p>
      </div>

      <div className="capability-rail">
        {integrations.capabilities.map((capability) => {
          const Icon = CAPABILITY_ICONS[capability.key];
          return (
            <article
              key={capability.key}
              className={`capability reveal${capability.flagship ? " is-flagship" : ""}`}
            >
              <span className="capability-icon">
                <Icon size={19} />
              </span>
              {capability.badge && <span className="capability-badge">{capability.badge}</span>}
              <h3>{capability.title}</h3>
              <p>{capability.body}</p>
              <ul>
                {capability.points.map((point) => (
                  <li key={point}>
                    <Check size={14} />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>

      <div className="systems-grid">
        <IntegrationPanel content={content} />
        <SystemDemo content={content} />
      </div>
    </section>
  );
}
