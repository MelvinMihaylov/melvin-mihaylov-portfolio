"use client";

import { usePathname } from "next/navigation";
import { ToggleButton } from "@once-ui-system/core";
import {
  getAlternateLocale,
  getLocalizedPath,
  getLocaleNativeLabel,
  getLocaleShortLabel,
  getPathnameWithoutLocale,
  type Locale,
} from "@/resources";

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
  const pathname = usePathname() ?? getLocalizedPath(locale, "/");
  const pathnameWithoutLocale = getPathnameWithoutLocale(pathname);
  const nextLocale = getAlternateLocale(locale);
  const ariaLabel = nextLocale === "bg"
    ? switchToBgLabel
    : nextLocale === "en"
      ? switchToEnLabel
      : getLocaleNativeLabel(nextLocale);

  return (
    <ToggleButton
      href={getLocalizedPath(nextLocale, pathnameWithoutLocale)}
      label={getLocaleShortLabel(nextLocale)}
      size="m"
      aria-label={ariaLabel}
    />
  );
}
