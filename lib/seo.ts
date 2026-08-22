import type { Metadata } from "next";
import { routing } from "@/i18n/routing";

export const SITE_URL = "https://goldencodee.com";
export const SITE_NAME = "Golden Code";
// No dedicated 1200x630 social-share image exists in the project yet —
// this is the header logo used as a fallback. Swap in a real OG image
// (recommended size 1200x630) when one is available.
const DEFAULT_OG_IMAGE = "/images/logo/logo3.png";

type BuildMetadataArgs = {
  locale: string;
  /** Path with no locale prefix, e.g. "/about" or "" for the homepage */
  path: string;
  title: string;
  description: string;
  noIndex?: boolean;
};

export function buildMetadata({
  locale,
  path,
  title,
  description,
  noIndex,
}: BuildMetadataArgs): Metadata {
  const normalizedPath = path === "/" ? "" : path;

  const languages: Record<string, string> = {};
  for (const loc of routing.locales) {
    languages[loc] = `${SITE_URL}/${loc}${normalizedPath}`;
  }
  languages["x-default"] = `${SITE_URL}/${routing.defaultLocale}${normalizedPath}`;

  const canonical = `${SITE_URL}/${locale}${normalizedPath}`;
  const fullTitle = `${title} | ${SITE_NAME}`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: locale === "ar" ? "ar_EG" : "en_US",
      type: "website",
      images: [{ url: DEFAULT_OG_IMAGE }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
  };
}
