"use client";

import type {MouseEvent} from "react";
import {useEffect, useRef} from "react";
import {usePathname} from "next/navigation";
import {getAlternatePath} from "@/lib/routes";
import type {Locale} from "@/lib/types";

type LanguageSwitcherProps = {
  locale: Locale;
};

export function LanguageSwitcher({locale}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const targetLocale: Locale = locale === "hr" ? "en" : "hr";
  const href = getAlternatePath(`/${locale}`, targetLocale);
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    linkRef.current?.setAttribute("href", getAlternatePath(pathname, targetLocale));
  }, [pathname, targetLocale]);

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    const alternateHref = getAlternatePath(pathname, targetLocale);

    if (alternateHref !== href) {
      event.preventDefault();
      window.location.assign(alternateHref);
    }
  }

  return (
    <a
      ref={linkRef}
      className="mono-label rounded-sm border border-current/20 px-3 py-2 text-current/80 transition-all duration-300 ease-premium hover:border-current/50 hover:bg-current/5 hover:text-current focus-visible:outline-lab-blue"
      href={href}
      onClick={handleClick}
      aria-label={locale === "hr" ? "Prebaci na engleski" : "Switch to Croatian"}
    >
      {targetLocale.toUpperCase()}
    </a>
  );
}
