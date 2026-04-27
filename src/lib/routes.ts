import type {Locale, StaticRouteKey} from "@/lib/types";

export const locales = ["hr", "en"] as const;
export const defaultLocale: Locale = "hr";

export const routeMap: Record<StaticRouteKey, Record<Locale, string>> = {
  home: {hr: "/", en: "/en"},
  services: {hr: "/usluge", en: "/en/services"},
  nutrition: {hr: "/plan-prehrane", en: "/en/nutrition-plan"},
  workout: {hr: "/plan-treninga", en: "/en/workout-plan"},
  coaching: {hr: "/online-coaching", en: "/en/online-coaching"},
  packages: {hr: "/paketi", en: "/en/packages"},
  about: {hr: "/o-nama", en: "/en/about"},
  results: {hr: "/rezultati", en: "/en/results"},
  blog: {hr: "/blog", en: "/en/blog"},
  contact: {hr: "/kontakt", en: "/en/contact"},
  guide: {hr: "/besplatni-vodic", en: "/en/free-guide"},
  privacy: {hr: "/pravila-privatnosti", en: "/en/privacy-policy"},
  terms: {hr: "/uvjeti-koristenja", en: "/en/terms"},
  healthDisclaimer: {
    hr: "/zdravstvena-napomena",
    en: "/en/health-disclaimer"
  }
};

export function isLocale(value: string | undefined): value is Locale {
  return value === "hr" || value === "en";
}

export function getPath(locale: Locale, key: StaticRouteKey) {
  return routeMap[key][locale];
}

export function slugToPath(slug?: string[]) {
  return `/${(slug ?? []).join("/")}`.replace(/\/$/, "") || "/";
}

export function pathToSlug(path: string) {
  const clean = path.replace(/^\/+|\/+$/g, "");
  return clean ? clean.split("/") : [];
}

export function getStaticRouteByLocalizedPath(pathname: string) {
  const normalized = normalizePath(pathname);

  for (const [key, paths] of Object.entries(routeMap)) {
    if (normalizePath(paths.hr) === normalized || normalizePath(paths.en) === normalized) {
      return key as StaticRouteKey;
    }
  }

  return null;
}

export function getLocaleFromPath(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/")
    ? "en"
    : defaultLocale;
}

export function getAlternatePath(pathname: string, targetLocale: Locale) {
  const key = getStaticRouteByLocalizedPath(pathname);
  return key ? getPath(targetLocale, key) : getPath(targetLocale, "home");
}

export function normalizePath(pathname: string) {
  if (pathname === "") {
    return "/";
  }

  const clean = pathname.replace(/\/+$/g, "");
  return clean || "/";
}

export function getAllStaticPaths() {
  return Object.values(routeMap).flatMap((paths) => [
    {locale: "hr" as const, path: paths.hr},
    {locale: "en" as const, path: paths.en}
  ]);
}

export function getInternalSlugForPath(locale: Locale, path: string) {
  const normalized = normalizePath(path);
  if (locale === "en") {
    return pathToSlug(normalized.replace(/^\/en\/?/, "/"));
  }

  return pathToSlug(normalized);
}
