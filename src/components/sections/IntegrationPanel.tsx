"use client";

import type { IntegrationGroup, LandingContent } from "@/content";
import * as Accordion from "@radix-ui/react-accordion";
import { FileSpreadsheet, Plus, ShoppingBag, Truck, Wallet, Workflow } from "lucide-react";
import type { ComponentType } from "react";

const GROUP_ICONS: Record<IntegrationGroup["key"], ComponentType<{ size?: number }>> = {
  commerce: ShoppingBag,
  payments: Wallet,
  delivery: Truck,
  accounting: FileSpreadsheet,
  custom: Workflow,
};

type IntegrationPanelProps = {
  content: LandingContent;
};

/**
 * Reads as a short list of what connects to what; each row opens to explain
 * what that connection actually automates.
 */
export function IntegrationPanel({ content }: IntegrationPanelProps) {
  const { panel } = content.integrations;

  return (
    <div className="surface-card integration-copy reveal">
      <p className="panel-kicker">{panel.kicker}</p>
      <h3>{panel.title}</h3>

      <Accordion.Root type="single" collapsible className="group-list">
        {panel.groups.map((group) => {
          const Icon = GROUP_ICONS[group.key];
          return (
            <Accordion.Item key={group.key} value={group.key} className="group-item">
              <Accordion.Header>
                <Accordion.Trigger className="group-trigger">
                  <span className="group-icon">
                    <Icon size={16} />
                  </span>
                  <span className="group-name">{group.name}</span>
                  <span className="group-summary">{group.summary}</span>
                  <Plus size={16} className="group-plus" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content data-slot="accordion-content">
                <div className="group-detail">
                  <p>{group.detail}</p>
                  <div className="group-chips">
                    {group.providers.map((provider) => (
                      <span key={provider}>{provider}</span>
                    ))}
                  </div>
                </div>
              </Accordion.Content>
            </Accordion.Item>
          );
        })}
      </Accordion.Root>

      <p className="integration-note">{panel.note}</p>
      <a className="text-link" href="#contact">
        {panel.cta}
      </a>
    </div>
  );
}
