import type { Locale } from "@/resources/i18n";
import { bg } from "./bg";
import { en } from "./en";
import type { LandingContent } from "./types";

export type * from "./types";

const contentByLocale = { bg, en } satisfies Record<Locale, LandingContent>;

export function getContent(locale: Locale): LandingContent {
  return contentByLocale[locale];
}
