import { defaultLocale } from "@/resources";
import type { ReactNode } from "react";

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
