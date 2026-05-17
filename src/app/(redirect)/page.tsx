import { permanentRedirect } from "next/navigation";
import { defaultLocale, getLocalizedPath } from "@/resources";

export default function RootRedirect() {
  permanentRedirect(getLocalizedPath(defaultLocale, "/"));
}
