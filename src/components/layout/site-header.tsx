"use client";

import {Menu, X} from "lucide-react";
import {useEffect, useState} from "react";
import {getPath} from "@/lib/routes";
import type {Locale, StaticRouteKey} from "@/lib/types";
import {navChromeText, navText, primaryNav} from "@/lib/nav-data";
import {Button} from "@/components/ui/button";
import {IconButton} from "@/components/ui/icon-button";
import {LanguageSwitcher} from "@/components/layout/language-switcher";

type SiteHeaderProps = {
  locale: Locale;
};

export function SiteHeader({locale}: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const labels = navText[locale];
  const chrome = navChromeText[locale];
  const mobileItems: StaticRouteKey[] = [...primaryNav, "contact"];

  useEffect(() => {
    document.documentElement.dataset.mobileNavOpen = String(open);

    return () => {
      delete document.documentElement.dataset.mobileNavOpen;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-paper/10 bg-ink/88 backdrop-blur-xl">
      <div className="container-shell flex min-h-20 items-center justify-between gap-4">
        <a
          href={getPath(locale, "home")}
          className="group flex items-center gap-3 transition-opacity duration-300 hover:opacity-85"
          aria-label="Fight Lab Coaching"
          onClick={() => setOpen(false)}
        >
          <span className="relative grid size-10 place-items-center overflow-hidden rounded-sm border border-blood/70 bg-paper text-ink">
            <span className="absolute inset-x-0 top-1/2 h-px bg-blood" />
            <span className="font-display text-lg font-black">FL</span>
          </span>
          <span className="leading-none">
            <span className="block font-display text-xl font-black text-paper">
              Fight Lab
            </span>
            <span className="mono-label block font-bold text-chalk">coaching</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label={chrome.primaryNavigation}>
          {primaryNav.map((item) => (
            <a
              key={item}
              href={getPath(locale, item)}
              className="rounded-sm px-3 py-2 text-sm font-semibold text-paper/78 transition-all duration-300 ease-premium hover:bg-paper/8 hover:text-paper"
            >
              {labels[item]}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher locale={locale} />
          <Button asChild variant="secondary" size="sm">
            <a href={getPath(locale, "guide")}>{labels.guide}</a>
          </Button>
          <Button asChild size="sm">
            <a href={getPath(locale, "contact")}>
              {chrome.compactCta}
            </a>
          </Button>
        </div>

        <IconButton
          className="lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? chrome.closeNavigation : chrome.openNavigation}
        >
          {open ? <X aria-hidden size={20} /> : <Menu aria-hidden size={20} />}
        </IconButton>
      </div>

      {open ? (
        <div
          id="mobile-navigation"
          className="border-t border-paper/10 bg-ink text-paper lg:hidden"
        >
          <nav
            className="container-shell grid gap-2 py-5"
            aria-label={chrome.mobileNavigation}
          >
            {mobileItems.map((item) => (
              <a
                key={item}
                href={getPath(locale, item)}
                className="rounded-md border border-paper/10 px-4 py-3 text-base font-semibold"
                onClick={() => setOpen(false)}
              >
                {labels[item]}
              </a>
            ))}
            <div className="mt-2 flex items-center justify-between gap-3">
              <LanguageSwitcher locale={locale} />
              <Button asChild className="flex-1">
                <a href={getPath(locale, "contact")} onClick={() => setOpen(false)}>
                  {chrome.primaryCta}
                </a>
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
