"use client";

import { useEffect } from "react";
import type { Locale } from "@/resources";

type HtmlLangSyncProps = {
  locale: Locale;
};

export function HtmlLangSync({ locale }: HtmlLangSyncProps) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
