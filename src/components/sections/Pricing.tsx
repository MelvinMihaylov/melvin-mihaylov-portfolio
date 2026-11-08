"use client";

import type { LandingContent } from "@/content";
import * as Accordion from "@radix-ui/react-accordion";
import { ArrowRight, Check, Plus } from "lucide-react";

type PricingProps = {
  content: LandingContent;
};

export function Pricing({ content }: PricingProps) {
  const { pricing } = content;

  return (
    <section id="pricing" className="section pricing-section container">
      <div className="section-heading reveal">
        <div>
          <p className="eyebrow">{pricing.eyebrow}</p>
          <h2>
            {pricing.titleLead}
            <br />
            <em>{pricing.titleEmphasis}</em>
          </h2>
        </div>
        <div className="pricing-aside">
          <p>{pricing.intro}</p>
          <span>
            {pricing.rateLabel}
            <strong>{pricing.rate}</strong>
            {pricing.rateUnit}
          </span>
        </div>
      </div>

      <div className="pricing-grid">
        {pricing.plans.map((plan, index) => (
          <article
            key={plan.name}
            className={`price-card reveal${plan.featured ? " featured" : ""}`}
          >
            <div className="price-card-top">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span>{plan.hours}</span>
            </div>
            <h3>{plan.name}</h3>
            <p>{plan.body}</p>
            <div className="price">
              {plan.price}
              <span>{plan.priceSuffix}</span>
            </div>
            {plan.priceNote && <p className="price-note">{plan.priceNote}</p>}
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>
                  <Check size={15} />
                  {feature}
                </li>
              ))}
            </ul>
            <a className={`button ${plan.featured ? "primary" : "outline"}`} href="#contact">
              {plan.cta}
              <ArrowRight size={15} />
            </a>
          </article>
        ))}
      </div>

      <p className="custom-project">
        {pricing.customPrompt}
        <a href="#contact">{pricing.customLink}</a>
      </p>

      <div className="faq">
        <p className="eyebrow">{pricing.faqEyebrow}</p>
        <Accordion.Root type="single" collapsible>
          {pricing.faq.map((entry) => (
            <Accordion.Item key={entry.question} value={entry.question} className="faq-item">
              <Accordion.Header>
                <Accordion.Trigger className="faq-trigger">
                  {entry.question}
                  <Plus size={18} />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content data-slot="accordion-content">
                <p className="faq-answer">{entry.answer}</p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
