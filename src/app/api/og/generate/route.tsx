import { person } from "@/resources";
import { ImageResponse } from "next/og";

export const runtime = "nodejs";

/** Pulls a single weight of a Google font as an ArrayBuffer for Satori. */
async function loadGoogleFont(family: string) {
  const css = await (
    await fetch(`https://fonts.googleapis.com/css2?family=${family}`, {
      headers: {
        // Without a desktop UA Google serves woff2, which Satori cannot parse.
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36",
      },
    })
  ).text();

  const resource = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/);
  if (!resource) throw new Error(`Could not resolve a TTF/OTF source for ${family}`);

  const response = await fetch(resource[1]);
  if (!response.ok) throw new Error(`Font download failed with ${response.status}`);

  return response.arrayBuffer();
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const title = url.searchParams.get("title") || person.name;
  const role = url.searchParams.get("role") || person.role;
  const name = url.searchParams.get("name") || person.name;
  const assetOrigin = url.origin;

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        padding: "5rem",
        background: "#0c111b",
        color: "#edf3ff",
      }}
    >
      {/* Echoes the journey line that defines the site itself. */}
      <svg
        width="1200"
        height="630"
        viewBox="0 0 1200 630"
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        <title>decoration</title>
        <path
          d="M 880 -40 C 880 180, 1120 220, 1120 420 C 1120 600, 820 560, 820 700"
          fill="none"
          stroke="#478fff"
          strokeWidth="9"
          opacity="0.3"
        />
        <path
          d="M 880 -40 C 880 180, 1120 220, 1120 420 C 1120 600, 820 560, 820 700"
          fill="none"
          stroke="#9bceff"
          strokeWidth="2"
        />
      </svg>

      <span
        style={{
          fontSize: "2rem",
          letterSpacing: "0.15em",
          color: "#8191a9",
          textTransform: "uppercase",
        }}
      >
        {role}
      </span>

      <span
        style={{
          fontSize: title.length > 60 ? "4.25rem" : "5.5rem",
          lineHeight: 1.1,
          letterSpacing: "-0.05em",
          maxWidth: "62rem",
        }}
      >
        {title}
      </span>

      <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        <img
          src={`${assetOrigin}${person.avatar}`}
          alt=""
          width={104}
          height={104}
          style={{ width: "6.5rem", height: "6.5rem", objectFit: "cover", borderRadius: "100%" }}
        />
        <span style={{ fontSize: "2.75rem", letterSpacing: "-0.02em" }}>{name}</span>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Manrope",
          data: await loadGoogleFont("Manrope:wght@500"),
          style: "normal",
          weight: 500,
        },
      ],
    },
  );
}
