"use client";

import { Button, Column, Heading, Input, Row, Select, Tag, Text, Textarea } from "@once-ui-system/core";
import { contactDetails, formspreeEndpoint, hasConfiguredFormspree } from "@/resources";
import type { HomeInquiry, ServiceOffer } from "@/translations/schema";
import { useMemo, useState } from "react";
import styles from "./HomeInquirySection.module.scss";

const OTHER_PROJECT_VALUE = "__other__";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type HomeInquirySectionProps = {
  content: HomeInquiry;
  serviceOffers: ServiceOffer[];
};

type FormState = {
  email: string;
  phone: string;
  projectType: string;
  otherProjectType: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialFormState: FormState = {
  email: "",
  phone: "",
  projectType: "",
  otherProjectType: "",
  message: "",
};

export function HomeInquirySection({ content, serviceOffers }: HomeInquirySectionProps) {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionState, setSubmissionState] = useState<"idle" | "success" | "error">("idle");

  const projectOptions = useMemo(
    () => [
      ...serviceOffers.map((offer) => ({
        value: offer.slug,
        label: offer.title,
        description: offer.description,
      })),
      {
        value: OTHER_PROJECT_VALUE,
        label: content.otherOptionLabel,
      },
    ],
    [content.otherOptionLabel, serviceOffers],
  );

  const isOtherSelected = formData.projectType === OTHER_PROJECT_VALUE;

  const updateField = <Key extends keyof FormState>(field: Key, value: FormState[Key]) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));

    setErrors((current) => ({
      ...current,
      [field]: undefined,
    }));

    setSubmissionState("idle");
  };

  const handleProjectTypeChange = (value: string) => {
    setFormData((current) => ({
      ...current,
      projectType: value,
      otherProjectType: value === OTHER_PROJECT_VALUE ? current.otherProjectType : "",
    }));

    setErrors((current) => ({
      ...current,
      projectType: undefined,
      otherProjectType: undefined,
    }));

    setSubmissionState("idle");
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmissionState("idle");

    const email = formData.email.trim();
    const phone = formData.phone.trim();
    const otherProjectType = formData.otherProjectType.trim();
    const message = formData.message.trim();

    const nextErrors: FormErrors = {};

    if (!email) {
      nextErrors.email = content.validation.emailRequired;
    } else if (!emailPattern.test(email)) {
      nextErrors.email = content.validation.emailInvalid;
    }

    if (!formData.projectType) {
      nextErrors.projectType = content.validation.projectTypeRequired;
    }

    if (isOtherSelected && !otherProjectType) {
      nextErrors.otherProjectType = content.validation.otherProjectRequired;
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    const selectedProjectLabel =
      String(projectOptions.find((option) => option.value === formData.projectType)?.label ?? formData.projectType) || "";

    if (!hasConfiguredFormspree) {
      setSubmissionState("error");
      return;
    }

    setIsSubmitting(true);

    try {
      const submission = new FormData();
      submission.append("email", email);
      submission.append("_replyto", email);

      if (phone) {
        submission.append("phone", phone);
      }

      submission.append("projectType", selectedProjectLabel);

      if (isOtherSelected) {
        submission.append("otherProjectType", otherProjectType);
      }

      if (message) {
        submission.append("message", message);
      }

      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: submission,
      });

      if (!response.ok) {
        throw new Error("Failed to submit inquiry");
      }

      setFormData(initialFormState);
      setErrors({});
      setSubmissionState("success");
    } catch {
      setSubmissionState("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="home-inquiry" className={styles.section}>
      <Column className={styles.shell}>
        <Row fillWidth gap="20" wrap className={styles.content}>
          <Column className={styles.infoPanel} gap="20" vertical="center">
            <Tag size="l">{content.tag}</Tag>
            <Column gap="12">
              <Heading as="h2" variant="display-strong-xs">
                {content.title}
              </Heading>
              <Text variant="body-default-l" onBackground="neutral-weak">
                {content.description}
              </Text>
            </Column>
            <Row gap="8" wrap>
              {content.benefits.map((benefit) => (
                <Tag key={benefit} size="m">
                  {benefit}
                </Tag>
              ))}
            </Row>
            <Column className={styles.contactCard} gap="12">
              <Text variant="label-default-s" onBackground="brand-weak">
                {content.directContactTitle}
              </Text>
              <Text variant="body-default-m" onBackground="neutral-weak">
                {content.directContactDescription}
              </Text>
              <Row gap="12" wrap className={styles.contactActions}>
                <Button href={`mailto:${contactDetails.email}`} variant="secondary" size="m" fillWidth>
                  {contactDetails.email}
                </Button>
                <Button href={`tel:${contactDetails.phone}`} variant="tertiary" size="m" fillWidth>
                  {contactDetails.phoneDisplay}
                </Button>
              </Row>
            </Column>
          </Column>

          <Column
            className={styles.formPanel}
            flex={1}
            background="neutral-alpha-weak"
            border="neutral-alpha-medium"
            radius="xl"
            padding="24"
            gap="16"
          >
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <Column fillWidth gap="16">
                <Input
                  id="inquiry-email"
                  type="email"
                  label={content.emailLabel}
                  placeholder={content.emailPlaceholder}
                  value={formData.email}
                  error={Boolean(errors.email)}
                  errorMessage={errors.email}
                  onChange={(event) => updateField("email", event.target.value)}
                />
                <Input
                  id="inquiry-phone"
                  type="tel"
                  label={content.phoneLabel}
                  placeholder={content.phonePlaceholder}
                  description={content.phoneDescription}
                  value={formData.phone}
                  onChange={(event) => updateField("phone", event.target.value)}
                />
                <Select
                  id="inquiry-project-type"
                  label={content.projectTypeLabel}
                  placeholder={content.projectTypePlaceholder}
                  options={projectOptions}
                  value={formData.projectType}
                  error={Boolean(errors.projectType)}
                  errorMessage={errors.projectType}
                  onSelect={(value) => handleProjectTypeChange(String(value))}
                />
                {isOtherSelected && (
                  <Input
                    id="inquiry-other-project"
                    label={content.otherProjectLabel}
                    placeholder={content.otherProjectPlaceholder}
                    value={formData.otherProjectType}
                    error={Boolean(errors.otherProjectType)}
                    errorMessage={errors.otherProjectType}
                    onChange={(event) => updateField("otherProjectType", event.target.value)}
                  />
                )}
                <Textarea
                  id="inquiry-message"
                  label={content.messageLabel}
                  placeholder={content.messagePlaceholder}
                  lines={4}
                  resize="vertical"
                  value={formData.message}
                  onChange={(event) => updateField("message", event.target.value)}
                />
                <Button type="submit" variant="primary" size="m" fillWidth arrowIcon loading={isSubmitting}>
                  {isSubmitting ? content.submission.sendingLabel : content.submitLabel}
                </Button>
                <Text className={styles.submitHint} variant="body-default-s" onBackground="neutral-weak">
                  {content.submitHint}
                </Text>
                {submissionState !== "idle" && (
                  <div aria-live="polite">
                    <Text
                      className={styles.feedback}
                      variant="body-default-s"
                      onBackground={submissionState === "error" ? "danger-weak" : "brand-weak"}
                    >
                      {submissionState === "error" ? content.submission.errorMessage : content.submission.successMessage}
                    </Text>
                  </div>
                )}
              </Column>
            </form>
          </Column>
        </Row>
      </Column>
    </section>
  );
}
