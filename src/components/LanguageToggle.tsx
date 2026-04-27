"use client";

import { useEffect, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { ToggleButton } from "@once-ui-system/core";
import { getAlternateLocale, type Locale } from "@/resources";

type LanguageToggleProps = {
  locale: Locale;
  switchToBgLabel: string;
  switchToEnLabel: string;
};

export function LanguageToggle({
  locale,
  switchToBgLabel,
  switchToEnLabel,
}: LanguageToggleProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isSaving, setIsSaving] = useState(false);
  const nextLocale = getAlternateLocale(locale);
  const ariaLabel = nextLocale === "bg" ? switchToBgLabel : switchToEnLabel;
  const isDisabled = isPending || isSaving;

  useEffect(() => {
    setIsSaving(false);
  }, [locale]);

  const handleToggle = async () => {
    if (isDisabled) {
      return;
    }

    setIsSaving(true);

    const response = await fetch("/api/locale", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ locale: nextLocale }),
    });

    if (!response.ok) {
      setIsSaving(false);
      throw new Error("Failed to update locale");
    }

    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <ToggleButton
      label={nextLocale.toUpperCase()}
      size="m"
      onClick={() => void handleToggle()}
      disabled={isDisabled}
      aria-label={ariaLabel}
    />
  );
}
