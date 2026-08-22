import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { SITE_URL } from "@/lib/seo";
import getCases from "@/api/case";
import { getRawServices } from "@/api/service";
import { getRawCareers } from "@/api/careers";
import { getBlogsStaticParams } from "@/api/blogs";

const STATIC_PATHS = [
  "",
  "about",
  "services",
  "portfolio",
  "blog",
  "contact",
  "career",
  "faq",
  "pricing",
  "privacy-policy",
  "terms-conditions",
  "team",
];

function languagesFor(path: string) {
  const normalized = path ? `/${path}` : "";
  const languages: Record<string, string> = {};
  for (const locale of routing.locales) {
    languages[locale] = `${SITE_URL}/${locale}${normalized}`;
  }
  return languages;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const path of STATIC_PATHS) {
    const languages = languagesFor(path);
    for (const locale of routing.locales) {
      entries.push({
        url: languages[locale],
        lastModified: new Date(),
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1 : 0.7,
        alternates: { languages },
      });
    }
  }

  const caseSlugs = getCases().map((c) => `portfolio/${c.slug.toLowerCase()}`);
  const serviceSlugs = getRawServices().map(
    (s) => `services/${s.slug.toLowerCase()}`
  );
  const careerSlugs = getRawCareers().map((c) => `career/${c.slug}`);
  const blogSlugs = getBlogsStaticParams().map((b) => `blog/${b.slug}`);

  for (const path of [
    ...caseSlugs,
    ...serviceSlugs,
    ...careerSlugs,
    ...blogSlugs,
  ]) {
    const languages = languagesFor(path);
    for (const locale of routing.locales) {
      entries.push({
        url: languages[locale],
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
        alternates: { languages },
      });
    }
  }

  return entries;
}
