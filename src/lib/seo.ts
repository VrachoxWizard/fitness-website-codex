import type {Locale, StaticRouteKey} from "@/lib/types";
import {getPath, routeMap} from "@/lib/routes";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://fightlab-coaching.hr";

export const siteName = "Fight Lab Coaching";

export function absoluteUrl(path: string) {
  return `${siteUrl}${path === "/" ? "" : path}`;
}

export function localizedAlternates(key: StaticRouteKey) {
  return {
    canonical: absoluteUrl(getPath("hr", key)),
    languages: {
      hr: absoluteUrl(routeMap[key].hr),
      en: absoluteUrl(routeMap[key].en),
      "x-default": absoluteUrl(routeMap[key].hr)
    }
  };
}

export function pageTitle(title: string, locale: Locale) {
  const suffix = locale === "hr" ? "online fitness coaching" : "online coaching";
  return `${title} | ${siteName} ${suffix}`;
}

export function organizationJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "SportsActivityLocation"],
    name: siteName,
    url: siteUrl,
    areaServed: locale === "hr" ? ["Hrvatska", "Zagreb"] : ["Croatia", "Zagreb"],
    description:
      locale === "hr"
        ? "Personalizirani planovi treninga, planovi prehrane i online coaching na hrvatskom jeziku."
        : "Personalized training plans, nutrition plans and online coaching for Croatian and English-speaking clients.",
    knowsAbout: [
      "online coaching",
      "plan prehrane",
      "plan treninga",
      "bodybuilding",
      "supplementation",
      "fitness"
    ],
    sameAs: []
  };
}

export function founderJsonLd() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Praktični trener i sportaš",
      jobTitle: "Fitness coach",
      description:
        "Trener s 15+ godina iskustva, boksačkim titulama, rukometnim i hrvačkim iskustvom."
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Istraživački trener",
      jobTitle: "Fitness and nutrition coach",
      description:
        "Trener fokusiran na bodybuilding, prehranu, suplementaciju i praktično tumačenje fitness literature."
    }
  ];
}
