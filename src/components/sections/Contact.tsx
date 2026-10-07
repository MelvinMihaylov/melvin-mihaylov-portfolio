"use client";

import type { LandingContent } from "@/content";
import { formspreeEndpoint } from "@/resources/formspree";
import type { Locale } from "@/resources/i18n";
import { ArrowRight } from "lucide-react";
import { useId, useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

type ContactProps = {
  content: LandingContent;
  locale: Locale;
};

export function Contact({ content, locale }: ContactProps) {
  const { contact } = content;
  const { form } = contact;
  const [status, setStatus] = useState<Status>("idle");
  const ids = {
    email: useId(),
    phone: useId(),
    project: useId(),
    message: useId(),
  };

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    setStatus("sending");

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(formElement),
      });

      if (!response.ok) throw new Error(`Formspree responded ${response.status}`);
      setStatus("success");
      formElement.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section contact-section container">
      <div className="contact-copy">
        <p className="eyebrow">{contact.eyebrow}</p>
        <h2>
          {contact.titleLead}
          <br />
          <em>{contact.titleEmphasis}</em>
        </h2>
        <p>{contact.intro}</p>
        <a className="email-link" href={`mailto:${contact.email}`}>
          {contact.email}
        </a>
        <a className="phone-link" href={`tel:${contact.phoneHref}`}>
          {contact.phone}
        </a>
      </div>

      <form className="enquiry-form" onSubmit={onSubmit}>
        {/* Gives the inbox context without asking the visitor for it. */}
        <input type="hidden" name="_language" value={locale} />
        <input type="hidden" name="_subject" value={`${contact.eyebrow} — ${contact.email}`} />

        <div className="form-row">
          <div>
            <label htmlFor={ids.email}>{form.emailLabel}</label>
            <input
              id={ids.email}
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder={form.emailPlaceholder}
            />
          </div>
          <div>
            <label htmlFor={ids.phone}>{form.phoneLabel}</label>
            <input
              id={ids.phone}
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder={form.phonePlaceholder}
            />
          </div>
        </div>

        <div>
          <label htmlFor={ids.project}>{form.projectLabel}</label>
          <select id={ids.project} name="project" defaultValue={form.projectOptions[0]}>
            {form.projectOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor={ids.message}>{form.messageLabel}</label>
          <textarea
            id={ids.message}
            name="message"
            required
            placeholder={form.messagePlaceholder}
          />
        </div>

        <button type="submit" className="button primary" disabled={status === "sending"}>
          {status === "sending" ? form.sending : form.submit}
          <ArrowRight size={16} />
        </button>

        <p className="form-note">{form.note}</p>

        {status === "success" && <output className="form-status is-success">{form.success}</output>}
        {status === "error" && (
          <p className="form-status is-error" role="alert">
            {form.error}
          </p>
        )}
      </form>
    </section>
  );
}
