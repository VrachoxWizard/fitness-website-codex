"use client";

import {usePathname} from "next/navigation";
import type {Locale} from "@/lib/types";
import {getPath, getStaticRouteByLocalizedPath, normalizePath} from "@/lib/routes";
import {navChromeText} from "@/lib/nav-data";

export function StickyMobileCTA({locale}: {locale: Locale}) {
  const pathname = usePathname();
  const routeKey = getStaticRouteByLocalizedPath(pathname);
  const normalizedPath = normalizePath(pathname);
  const contactPath = normalizePath(getPath(locale, "contact"));

  if (
    routeKey === "contact" ||
    normalizedPath === contactPath ||
    normalizedPath.endsWith(contactPath)
  ) {
    return null;
  }

  return (
    <div className="sticky-mobile-cta fixed inset-x-0 bottom-0 z-40 border-t border-paper/20 bg-ink/92 px-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl lg:hidden">
      <a
        href={getPath(locale, "contact")}
        className="flex min-h-12 items-center justify-center rounded-md bg-blood px-4 text-center text-sm font-black leading-5 text-paper-soft shadow-soft"
      >
        {navChromeText[locale].primaryCta}
      </a>
    </div>
  );
}
