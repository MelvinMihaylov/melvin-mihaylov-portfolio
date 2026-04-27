import { NextResponse } from "next/server";
import { isLocale, localeCookieName } from "@/resources";

export async function POST(request: Request) {
  const body = await request.json();
  const { locale } = body as { locale?: unknown };

  if (!isLocale(locale)) {
    return NextResponse.json({ error: "Invalid locale" }, { status: 400 });
  }

  const response = NextResponse.json({ locale });

  response.cookies.set({
    name: localeCookieName,
    value: locale,
    path: "/",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365,
    secure: process.env.NODE_ENV === "production",
  });

  return response;
}
