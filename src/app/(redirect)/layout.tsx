import type { ReactNode } from "react";
import { defaultLocale } from "@/resources";

type RedirectLayoutProps = {
  children: ReactNode;
};

export default function RedirectLayout({ children }: RedirectLayoutProps) {
  return (
    <html lang={defaultLocale}>
      <body>{children}</body>
    </html>
  );
}
