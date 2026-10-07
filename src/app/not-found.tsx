import { getContent } from "@/content";
import { defaultLocale, getLocalizedPath } from "@/resources";
import Link from "next/link";

export default function NotFound() {
  const content = getContent(defaultLocale);
  const home = getLocalizedPath(defaultLocale, "/");

  return (
    <html lang={defaultLocale} data-theme="dark">
      <body>
        <main
          style={{
            minHeight: "100svh",
            display: "grid",
            placeContent: "center",
            justifyItems: "center",
            gap: 18,
            padding: 40,
            textAlign: "center",
            background: "#0c111b",
            color: "#edf3ff",
            fontFamily: "ui-sans-serif, system-ui, sans-serif",
          }}
        >
          <p style={{ fontFamily: "ui-monospace, monospace", color: "#8191a9", letterSpacing: 2 }}>
            404
          </p>
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 500,
              letterSpacing: "-0.04em",
            }}
          >
            {content.meta.title}
          </h1>
          <Link
            href={home}
            style={{
              marginTop: 10,
              padding: "14px 24px",
              borderRadius: 7,
              background: "#6aa5ff",
              color: "#071427",
              fontWeight: 600,
            }}
          >
            {content.footer.backToTop}
          </Link>
        </main>
      </body>
    </html>
  );
}
