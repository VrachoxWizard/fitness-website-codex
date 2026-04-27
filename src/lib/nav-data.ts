import type {Locale, StaticRouteKey} from "@/lib/types";

export const primaryNav: StaticRouteKey[] = [
  "services",
  "packages",
  "about",
  "results",
  "blog"
];

export const navText: Record<Locale, Record<StaticRouteKey, string>> = {
  hr: {
    home: "Početna",
    services: "Usluge",
    nutrition: "Plan prehrane",
    workout: "Plan treninga",
    coaching: "Online coaching",
    packages: "Paketi",
    about: "O nama",
    results: "Rezultati",
    blog: "Blog",
    contact: "Kontakt",
    guide: "Besplatni vodič",
    privacy: "Privatnost",
    terms: "Uvjeti",
    healthDisclaimer: "Zdravstvena napomena"
  },
  en: {
    home: "Home",
    services: "Services",
    nutrition: "Nutrition plan",
    workout: "Workout plan",
    coaching: "Online coaching",
    packages: "Packages",
    about: "About",
    results: "Results",
    blog: "Blog",
    contact: "Contact",
    guide: "Free guide",
    privacy: "Privacy",
    terms: "Terms",
    healthDisclaimer: "Health disclaimer"
  }
};
