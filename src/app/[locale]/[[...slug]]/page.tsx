import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {
  AboutPage,
  BlogIndexPage,
  ContactPage,
  GuidePage,
  HomePage,
  LegalPage,
  PackagesPage,
  ResultsPage,
  ServiceDetailPage,
  ServicesPage
} from "@/components/pages/marketing-pages";
import {JsonLd} from "@/components/json-ld";
import {getPath, isLocale, locales} from "@/lib/routes";
import {
  getServiceByRoute,
  getStaticRouteForSlug,
  pageMeta,
  sharedFaq
} from "@/lib/site-data";
import type {Locale, StaticRouteKey} from "@/lib/types";
import {localizedAlternates, pageTitle} from "@/lib/seo";

type PageProps = {
  params: Promise<{locale: string; slug?: string[]}>;
};

export async function generateMetadata({params}: PageProps): Promise<Metadata> {
  const {locale, routeKey} = await resolveStaticRoute(params);
  const meta = pageMeta[routeKey][locale];

  return {
    title: pageTitle(meta.title, locale),
    description: meta.description,
    alternates: localizedAlternates(routeKey),
    openGraph: {
      title: pageTitle(meta.title, locale),
      description: meta.description,
      url: localizedAlternates(routeKey).languages[locale],
      siteName: "Fight Lab Coaching",
      locale: locale === "hr" ? "hr_HR" : "en_US",
      type: "website",
      images: [
        {
          url: "/assets/generated/fight-lab-hero.png",
          width: 1536,
          height: 1024,
          alt: meta.title
        }
      ]
    }
  };
}

export function generateStaticParams() {
  const params: Array<{locale: Locale; slug?: string[]}> = [];

  for (const locale of locales) {
    for (const key of Object.keys(pageMeta) as StaticRouteKey[]) {
      const path = localizedPathToSlug(locale, key);
      params.push({locale, slug: path});
    }
  }

  return params;
}

export default async function LocalizedPage({params}: PageProps) {
  const {locale, routeKey} = await resolveStaticRoute(params);
  const kind = pageMeta[routeKey][locale].kind;

  return (
    <>
      {renderPage(locale, routeKey, kind)}
      <JsonLd data={pageJsonLd(locale, routeKey)} />
    </>
  );
}

async function resolveStaticRoute(paramsPromise: PageProps["params"]) {
  const params = await paramsPromise;
  if (!isLocale(params.locale)) {
    notFound();
  }

  const slugPath = (params.slug ?? []).join("/");
  const routeKey = getStaticRouteForSlug(params.locale, slugPath);

  if (!routeKey) {
    notFound();
  }

  return {locale: params.locale, routeKey};
}

function renderPage(locale: Locale, routeKey: StaticRouteKey, kind: string) {
  if (kind === "home") {
    return <HomePage locale={locale} />;
  }

  if (kind === "services") {
    return <ServicesPage locale={locale} />;
  }

  if (kind === "service") {
    const service = getServiceByRoute(locale, routeKey);
    if (!service) {
      notFound();
    }
    return <ServiceDetailPage locale={locale} service={service} />;
  }

  if (kind === "packages") {
    return <PackagesPage locale={locale} />;
  }

  if (kind === "about") {
    return <AboutPage locale={locale} />;
  }

  if (kind === "results") {
    return <ResultsPage locale={locale} />;
  }

  if (kind === "blogIndex") {
    return <BlogIndexPage locale={locale} />;
  }

  if (kind === "contact") {
    return <ContactPage locale={locale} />;
  }

  if (kind === "guide") {
    return <GuidePage locale={locale} />;
  }

  return <LegalPage locale={locale} routeKey={routeKey} />;
}

function localizedPathToSlug(locale: Locale, key: StaticRouteKey) {
  const path = getPath(locale, key);
  const normalized =
    locale === "en" ? path.replace(/^\/en\/?/, "") : path.replace(/^\//, "");
  return normalized ? normalized.split("/") : [];
}

function pageJsonLd(locale: Locale, routeKey: StaticRouteKey) {
  const meta = pageMeta[routeKey][locale];
  const url = localizedAlternates(routeKey).languages[locale];

  if (routeKey === "home") {
    return {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Fight Lab Coaching",
      url,
      inLanguage: locale
    };
  }

  if (routeKey === "services" || meta.kind === "service") {
    return {
      "@context": "https://schema.org",
      "@type": "Service",
      name: meta.title,
      description: meta.description,
      areaServed: locale === "hr" ? "Hrvatska" : "Croatia",
      provider: {
        "@type": "Organization",
        name: "Fight Lab Coaching"
      },
      url
    };
  }

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: meta.title,
    description: meta.description,
    url,
    inLanguage: locale,
    mainEntity: sharedFaq[locale].map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}
