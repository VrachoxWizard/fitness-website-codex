import type {MetadataRoute} from "next";
import {blogPosts, pageMeta} from "@/lib/site-data";
import {getPath} from "@/lib/routes";
import type {Locale, StaticRouteKey} from "@/lib/types";
import {absoluteUrl} from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = (Object.keys(pageMeta) as StaticRouteKey[]).flatMap((key) => {
    const hr = getPath("hr", key);
    const en = getPath("en", key);
    return [
      item(hr, "hr", hr, en),
      item(en, "en", hr, en)
    ];
  });

  const posts = blogPosts.map((post) => {
    const path = `${post.locale === "en" ? "/en" : ""}/blog/${post.slug}`;
    return {
      url: absoluteUrl(path),
      lastModified: post.reviewed,
      changeFrequency: "monthly" as const,
      priority: 0.7
    };
  });

  return [...pages, ...posts];
}

function item(path: string, locale: Locale, hr: string, en: string) {
  return {
    url: absoluteUrl(path),
    lastModified: new Date("2026-04-27"),
    changeFrequency: "weekly" as const,
    priority: path === "/" || path === "/en" ? 1 : 0.8,
    alternates: {
      languages: {
        hr: absoluteUrl(hr),
        en: absoluteUrl(en),
        "x-default": absoluteUrl(hr)
      }
    },
    images: locale ? [absoluteUrl("/assets/generated/fight-lab-hero.png")] : undefined
  };
}
