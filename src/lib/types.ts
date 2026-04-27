export type Locale = "hr" | "en";

export type Role = "guest" | "user" | "coach" | "admin";

export type ServiceSlug =
  | "plan-prehrane"
  | "plan-treninga"
  | "online-coaching"
  | "transformacija";

export type ConversionIntent = "consultation" | "custom-plan" | "free-guide";

export type ConsentType = "marketing" | "privacy" | "health_intake";

export type StaticRouteKey =
  | "home"
  | "services"
  | "nutrition"
  | "workout"
  | "coaching"
  | "packages"
  | "about"
  | "results"
  | "blog"
  | "contact"
  | "guide"
  | "privacy"
  | "terms"
  | "healthDisclaimer";

export type PageKind =
  | "home"
  | "services"
  | "service"
  | "packages"
  | "about"
  | "results"
  | "blogIndex"
  | "contact"
  | "guide"
  | "legal";

export type Cta = {
  label: string;
  href: string;
  intent: ConversionIntent;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type Service = {
  slug: ServiceSlug;
  routeKey: StaticRouteKey;
  eyebrow: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  bestFor: string;
  outcome: string;
  timeline: string;
  pricing: string;
  deliverables: string[];
  process: string[];
  objections: string[];
  faq: FaqItem[];
  disclaimer: string;
  primaryCta: string;
};

export type Package = {
  name: string;
  label: string;
  price: string;
  description: string;
  bestFor: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
};

export type Founder = {
  name: string;
  role: string;
  profile: string;
  proof: string[];
};

export type BlogPost = {
  slug: string;
  locale: Locale;
  title: string;
  description: string;
  category: string;
  date: string;
  reviewed: string;
  author: string;
  reviewer: string;
  readingTime: string;
  sources: string[];
  paragraphs: string[];
  relatedRoutes: StaticRouteKey[];
};

export type LeadFormInput = {
  name: string;
  email: string;
  phone?: string;
  goal: string;
  preferredService: ServiceSlug | "not-sure";
  trainingLevel: "beginner" | "intermediate" | "advanced";
  message?: string;
  locale: Locale;
  intent: ConversionIntent;
  sourcePage: string;
  consent: {
    privacy: boolean;
    marketing: boolean;
    healthIntake: boolean;
  };
  honeypot?: string;
};
