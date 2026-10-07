import { defaultLocale, getLocalizedPath } from "@/resources";
import { permanentRedirect } from "next/navigation";

export default function RootRedirect() {
  permanentRedirect(getLocalizedPath(defaultLocale, "/"));
}
