"use client";

import {usePathname} from "next/navigation";
import {getAlternatePath, getLocaleFromPath} from "@/lib/routes";
import type {Locale} from "@/lib/types";

type LanguageSwitcherProps = {
  locale: Locale;
};

export function LanguageSwitcher({locale}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const currentLocale = getLocaleFromPath(pathname);
  const targetLocale: Locale = currentLocale === "hr" ? "en" : "hr";
  const href = getAlternatePath(pathname, targetLocale);

  return (
    <a
      className="mono-label rounded-sm border border-current/20 px-3 py-2 text-current/80 transition hover:border-current/50 hover:text-current"
      href={href}
      aria-label={locale === "hr" ? "Prebaci na engleski" : "Switch to Croatian"}
    >
      {targetLocale.toUpperCase()}
    </a>
  );
}
