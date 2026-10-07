"use client";

import type { LandingContent } from "@/content";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { ExampleShowcase } from "./ExampleShowcase";

type ServicesProps = {
  content: LandingContent;
};

export function Services({ content }: ServicesProps) {
  const { services } = content;

  return (
    <div className="section-band">
      <section id="services" className="section services-section container">
        <div className="section-heading reveal">
          <div>
            <p className="eyebrow">{services.eyebrow}</p>
            <h2>
              {services.titleLead}
              <br />
              <em>{services.titleEmphasis}</em>
            </h2>
          </div>
          <p>{services.intro}</p>
        </div>

        <Accordion.Root
          type="single"
          collapsible
          defaultValue={services.items[0]?.key}
          className="service-list"
        >
          {services.items.map((service, index) => (
            <Accordion.Item key={service.key} value={service.key} className="service-item">
              <Accordion.Header>
                <Accordion.Trigger className="service-trigger">
                  <span className="service-number">{String(index + 1).padStart(2, "0")}</span>
                  <span className="service-name">{service.name}</span>
                  <span className="service-subtitle">{service.subtitle}</span>
                  <ChevronDown />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content data-slot="accordion-content">
                <div className="service-detail">
                  <p>{service.body}</p>
                  <div className="service-tags">
                    {service.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <a className="text-link" href="#contact">
                    {service.cta}
                  </a>
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>

        <ExampleShowcase content={content} />
      </section>
    </div>
  );
}
