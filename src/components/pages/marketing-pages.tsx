import {ArrowRight, BookOpen, FileText} from "lucide-react";
import type {BlogPost, Locale, Service, StaticRouteKey} from "@/lib/types";
import {getPath} from "@/lib/routes";
import {
  getBlogPosts,
  homeContent,
  pageMeta,
  serviceData,
  sharedFaq
} from "@/lib/site-data";
import {navChromeText} from "@/lib/nav-data";
import {HeroFightLab} from "@/components/marketing/hero-fight-lab";
import {CredibilityStrip} from "@/components/marketing/credibility-strip";
import {ServiceMatrix} from "@/components/marketing/service-matrix";
import {PackageComparison} from "@/components/marketing/package-comparison";
import {FounderDuo} from "@/components/marketing/founder-duo";
import {ProofCarousel} from "@/components/marketing/proof-carousel";
import {FAQAccordion} from "@/components/marketing/faq-accordion";
import {LeadForm} from "@/components/marketing/lead-form";
import {
  MarketingCard,
  MarketingSection,
  ProofChip,
  SectionHeader
} from "@/components/marketing/section";
import {Button} from "@/components/ui/button";

const pageEyebrows = {
  hr: {
    services: "Usluge",
    packages: "Paketi",
    about: "O nama",
    results: "Rezultati",
    blog: "Edukacija",
    contact: "Kontakt",
    guide: "Besplatni vodič",
    privacy: "Privatnost",
    terms: "Uvjeti",
    healthDisclaimer: "Zdravstvena napomena"
  },
  en: {
    services: "Services",
    packages: "Packages",
    about: "About",
    results: "Results",
    blog: "Education",
    contact: "Contact",
    guide: "Free guide",
    privacy: "Privacy",
    terms: "Terms",
    healthDisclaimer: "Health disclaimer"
  }
} satisfies Record<Locale, Partial<Record<StaticRouteKey, string>>>;

const sectionLabels = {
  hr: {
    nextStep: "Sljedeći korak",
    process: "Proces",
    objections: "Prije odluke",
    consultation: "Konzultacija",
    consent: "Pristanak prvo",
    sources: "Izvori",
    related: "Povezano",
    legal: "Pravno",
    serviceChoice: "Odaberi smjer",
    guideIncludes: "Što vodič pokriva"
  },
  en: {
    nextStep: "Next step",
    process: "Process",
    objections: "Before deciding",
    consultation: "Consultation",
    consent: "Consent first",
    sources: "Sources",
    related: "Related",
    legal: "Legal",
    serviceChoice: "Choose a direction",
    guideIncludes: "What the guide covers"
  }
} satisfies Record<Locale, Record<string, string>>;

export function HomePage({locale}: {locale: Locale}) {
  const copy = homeContent[locale];

  return (
    <>
      <HeroFightLab locale={locale} />
      <QuickChoiceBand locale={locale} />
      <CredibilityStrip locale={locale} />
      <ServiceMatrix locale={locale} />
      <ProcessSection locale={locale} />
      <FounderDuo locale={locale} />
      <ProofCarousel locale={locale} />
      <PackageComparison locale={locale} />
      <ObjectionSection locale={locale} />
      <FAQAccordion locale={locale} items={sharedFaq[locale]} />
      <ContactBand
        locale={locale}
        sourcePage={getPath(locale, "home")}
        title={copy.finalCtaTitle}
        text={copy.finalCtaText}
        eyebrow={sectionLabels[locale].nextStep}
      />
    </>
  );
}

export function ServicesPage({locale}: {locale: Locale}) {
  return (
    <>
      <PageHero
        locale={locale}
        routeKey="services"
        label={pageEyebrows[locale].services}
        title={pageMeta.services[locale].title}
        description={pageMeta.services[locale].description}
      />
      <ServiceMatrix locale={locale} />
      <PackageComparison locale={locale} />
      <FAQAccordion locale={locale} items={sharedFaq[locale]} />
      <ContactBand locale={locale} sourcePage={getPath(locale, "services")} />
    </>
  );
}

export function ServiceDetailPage({
  locale,
  service
}: {
  locale: Locale;
  service: Service;
}) {
  return (
    <>
      <MarketingSection
        tone="dark"
        grid
        innerClassName="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start"
      >
        <div>
          <p className="mono-label text-lab-blue">{service.eyebrow}</p>
          <h1 className="display-title page-title mt-4 max-w-4xl text-paper-soft">
            {service.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-paper/74 sm:text-lg sm:leading-8">
            {service.subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <a href={getPath(locale, "contact")}>
                {service.primaryCta}
                <ArrowRight aria-hidden size={18} />
              </a>
            </Button>
            <Button asChild variant="secondary">
              <a href={getPath(locale, "packages")}>
                {navChromeText[locale].secondaryCta}
              </a>
            </Button>
          </div>
        </div>
        <OfferSnapshot locale={locale} service={service} />
      </MarketingSection>
      <MarketingSection tone="paper" innerClassName="grid gap-10 lg:grid-cols-3">
        <FeatureList
          title={locale === "hr" ? "Što dobivaš" : "What you receive"}
          items={service.deliverables}
        />
        <FeatureList
          title={locale === "hr" ? "Proces" : "Process"}
          items={service.process}
        />
        <FeatureList
          title={locale === "hr" ? "Što rješavamo" : "What we handle"}
          items={service.objections}
        />
      </MarketingSection>
      <section className="section-dark py-14">
        <div className="container-shell rounded-md border border-warning/30 bg-warning/10 p-6 shadow-soft transition-all duration-300 ease-premium hover:shadow-hard">
          <p className="mono-label text-warning">
            {locale === "hr" ? "Zdravstvena granica" : "Health boundary"}
          </p>
          <p className="mt-3 max-w-4xl leading-7 text-paper/78">{service.disclaimer}</p>
        </div>
      </section>
      <FAQAccordion locale={locale} items={[...service.faq, ...sharedFaq[locale].slice(0, 2)]} />
      <ContactBand locale={locale} sourcePage={getPath(locale, service.routeKey)} />
    </>
  );
}

export function PackagesPage({locale}: {locale: Locale}) {
  return (
    <>
      <PageHero
        locale={locale}
        routeKey="packages"
        label={pageEyebrows[locale].packages}
        title={pageMeta.packages[locale].title}
        description={pageMeta.packages[locale].description}
      />
      <PackageComparison locale={locale} />
      <ContactBand locale={locale} sourcePage={getPath(locale, "packages")} />
    </>
  );
}

export function AboutPage({locale}: {locale: Locale}) {
  const values =
    locale === "hr"
      ? [
          ["Praksa prije poze", "Plan mora preživjeti radni tjedan, opremu, umor i realnu motivaciju."],
          ["Znanje bez pretvaranja", "Studije i iskustvo prevodimo u odluke, bez glumljenja medicine."],
          ["Coaching kao odnos", "Klijent mora razumjeti zašto nešto radi i kada se plan mijenja."]
        ]
      : [
          ["Practice before posture", "The plan must survive work weeks, equipment, fatigue and real motivation."],
          ["Knowledge without pretending", "Studies and experience become decisions, without pretending to be medicine."],
          ["Coaching as a relationship", "The client should understand why they do something and when the plan changes."]
        ];

  return (
    <>
      <PageHero
        locale={locale}
        routeKey="about"
        label={pageEyebrows[locale].about}
        title={pageMeta.about[locale].title}
        description={pageMeta.about[locale].description}
      />
      <FounderDuo locale={locale} />
      <MarketingSection tone="dark" innerClassName="grid gap-5 lg:grid-cols-3">
        {values.map(([title, text]) => (
          <MarketingCard key={title}>
            <h2 className="font-display text-3xl font-black text-balance">{title}</h2>
            <p className="mt-4 leading-7 text-paper/70">{text}</p>
          </MarketingCard>
        ))}
      </MarketingSection>
    </>
  );
}

export function ResultsPage({locale}: {locale: Locale}) {
  const rules =
    locale === "hr"
      ? [
          "Fotografije se koriste samo uz jasnu pisanu privolu.",
          "Svaki rezultat mora imati kontekst: cilj, trajanje, trud i ograničenja.",
          "Ne prikazujemo rezultate kao garanciju za druge klijente."
        ]
      : [
          "Photos are used only with clear written consent.",
          "Every result needs context: goal, duration, effort and constraints.",
          "We do not present results as a guarantee for other clients."
        ];

  return (
    <>
      <PageHero
        locale={locale}
        routeKey="results"
        label={pageEyebrows[locale].results}
        title={pageMeta.results[locale].title}
        description={pageMeta.results[locale].description}
      />
      <ProofCarousel locale={locale} />
      <MarketingSection
        tone="paper"
        innerClassName="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]"
      >
        <SectionHeader
          tone="paper"
          eyebrow={sectionLabels[locale].consent}
          title={locale === "hr" ? "Nema lažnih transformacija" : "No fake transformations"}
        />
        <div className="grid gap-4">
          {rules.map((item) => (
            <p key={item} className="border-l border-blood/35 bg-paper-soft p-5 leading-7 text-ink/72 transition-all duration-300 ease-premium hover:border-blood hover:shadow-soft">
              {item}
            </p>
          ))}
        </div>
      </MarketingSection>
      <ContactBand locale={locale} sourcePage={getPath(locale, "results")} />
    </>
  );
}

export function BlogIndexPage({locale}: {locale: Locale}) {
  const posts = getBlogPosts(locale);

  return (
    <>
      <PageHero
        locale={locale}
        routeKey="blog"
        label={pageEyebrows[locale].blog}
        title={pageMeta.blog[locale].title}
        description={pageMeta.blog[locale].description}
      />
      <MarketingSection tone="paper" innerClassName="grid gap-5 lg:grid-cols-3">
        {posts.map((post) => (
          <ArticleCard key={post.slug} locale={locale} post={post} />
        ))}
      </MarketingSection>
    </>
  );
}

export function BlogPostPage({locale, post}: {locale: Locale; post: BlogPost}) {
  return (
    <article>
      <MarketingSection tone="dark" grid innerClassName="max-w-4xl">
        <p className="mono-label text-lab-blue">{post.category}</p>
        <h1 className="display-title page-title mt-4 text-paper-soft">{post.title}</h1>
        <p className="mt-6 text-base leading-7 text-paper/74 sm:text-lg sm:leading-8">
          {post.description}
        </p>
        <div className="mt-8 grid gap-3 text-sm text-paper/64 sm:grid-cols-2">
          <p>{locale === "hr" ? "Autor" : "Author"}: {post.author}</p>
          <p>{locale === "hr" ? "Recenzija" : "Reviewed by"}: {post.reviewer}</p>
          <p>{locale === "hr" ? "Zadnje pregledano" : "Last reviewed"}: {post.reviewed}</p>
          <p>{post.readingTime}</p>
        </div>
      </MarketingSection>
      <MarketingSection
        tone="paper"
        className="py-16"
        innerClassName="grid gap-10 lg:grid-cols-[0.75fr_0.25fr]"
      >
        <div className="max-w-3xl">
          {post.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mb-7 text-lg leading-9 text-ink/76">
              {paragraph}
            </p>
          ))}
          <div className="mt-10 rounded-md border border-warning/30 bg-warning/10 p-5 transition-all duration-300 ease-premium hover:shadow-soft">
            <p className="font-bold">
              {locale === "hr" ? "Zdravstvena napomena" : "Health disclaimer"}
            </p>
            <p className="mt-2 text-sm leading-6 text-ink/70">
              {locale === "hr"
                ? "Članak je edukativan i nije medicinski savjet, dijagnoza ili liječenje."
                : "This article is educational and is not medical advice, diagnosis or treatment."}
            </p>
          </div>
        </div>
        <aside className="space-y-5">
          <MarketingCard tone="paper">
            <p className="mono-label text-blood">{sectionLabels[locale].sources}</p>
            <ul className="mt-4 grid gap-3 text-sm leading-6 text-ink/68">
              {post.sources.map((source) => (
                <li key={source}>{source}</li>
              ))}
            </ul>
          </MarketingCard>
          <MarketingCard tone="paper">
            <p className="mono-label text-blood">{sectionLabels[locale].related}</p>
            <div className="mt-4 grid gap-2 text-sm font-bold">
              {post.relatedRoutes.map((route) => (
                <a key={route} href={getPath(locale, route)} className="text-blood transition-colors duration-300 ease-premium hover:text-ink">
                  {pageMeta[route][locale].title}
                </a>
              ))}
            </div>
          </MarketingCard>
        </aside>
      </MarketingSection>
    </article>
  );
}

export function ContactPage({locale}: {locale: Locale}) {
  return (
    <MarketingSection
      tone="dark"
      grid
      innerClassName="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start"
    >
      <div>
        <p className="mono-label text-lab-blue">{pageEyebrows[locale].contact}</p>
        <h1 className="display-title page-title mt-4 max-w-4xl text-paper-soft">
          {pageMeta.contact[locale].title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-paper/74 sm:text-lg sm:leading-8">
          {pageMeta.contact[locale].description}
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          <ProofChip>{locale === "hr" ? "Kratka procjena" : "Short assessment"}</ProofChip>
          <ProofChip>{locale === "hr" ? "Bez javnog intakea" : "No public intake"}</ProofChip>
          <ProofChip>{locale === "hr" ? "Odgovor s idućim korakom" : "Next-step reply"}</ProofChip>
        </div>
      </div>
      <LeadForm locale={locale} sourcePage={getPath(locale, "contact")} />
    </MarketingSection>
  );
}

export function GuidePage({locale}: {locale: Locale}) {
  const guideItems =
    locale === "hr"
      ? [
          "Kako posložiti tjedan treninga",
          "Osnove prehrane bez ekstremnih pravila",
          "Kako pratiti napredak bez opsesije"
        ]
      : [
          "How to structure a training week",
          "Nutrition basics without extreme rules",
          "How to track progress without obsession"
        ];

  return (
    <>
      <PageHero
        locale={locale}
        routeKey="guide"
        label={pageEyebrows[locale].guide}
        title={pageMeta.guide[locale].title}
        description={pageMeta.guide[locale].description}
      />
      <MarketingSection
        tone="dark"
        innerClassName="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]"
      >
        <MarketingCard>
          <BookOpen aria-hidden className="text-lab-blue" size={30} />
          <h2 className="display-title section-title mt-5">
            {sectionLabels[locale].guideIncludes}
          </h2>
          <ul className="mt-6 grid gap-3 text-paper/72">
            {guideItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </MarketingCard>
        <LeadForm locale={locale} sourcePage={getPath(locale, "guide")} intent="free-guide" />
      </MarketingSection>
    </>
  );
}

export function LegalPage({locale, routeKey}: {locale: Locale; routeKey: StaticRouteKey}) {
  const meta = pageMeta[routeKey][locale];
  const blocks = getLegalBlocks(locale, routeKey);

  return (
    <>
      <PageHero
        locale={locale}
        routeKey={routeKey}
        label={getPageEyebrow(locale, routeKey, sectionLabels[locale].legal)}
        title={meta.title}
        description={meta.description}
      />
      <MarketingSection tone="paper" className="py-16" innerClassName="max-w-4xl">
        {blocks.map((block) => (
          <section key={block.title} className="mb-10 rounded-md border border-ink/12 bg-paper-soft p-6 transition-all duration-300 ease-premium hover:-translate-y-1 hover:shadow-soft">
            <h2 className="font-display text-3xl font-black">{block.title}</h2>
            <p className="mt-4 leading-8 text-ink/70">{block.text}</p>
          </section>
        ))}
      </MarketingSection>
    </>
  );
}

function PageHero({
  locale,
  routeKey,
  label,
  title,
  description
}: {
  locale: Locale;
  routeKey: StaticRouteKey;
  label?: string;
  title: string;
  description: string;
}) {
  return (
    <MarketingSection
      tone="dark"
      grid
      innerClassName="grid gap-8 lg:grid-cols-[0.85fr_0.45fr] lg:items-end"
    >
      <div>
        <p className="mono-label text-lab-blue">{label}</p>
        <h1 className="display-title page-title mt-4 max-w-5xl text-paper-soft">{title}</h1>
        <p className="mt-6 max-w-3xl text-base leading-7 text-paper/74 sm:text-lg sm:leading-8">
          {description}
        </p>
      </div>
      <Button asChild className="w-fit">
        <a href={getPath(locale, routeKey === "contact" ? "services" : "contact")}>
          {routeKey === "contact"
            ? locale === "hr"
              ? "Pogledaj usluge"
              : "View services"
            : navChromeText[locale].primaryCta}
          <ArrowRight aria-hidden size={18} />
        </a>
      </Button>
    </MarketingSection>
  );
}

function getPageEyebrow(locale: Locale, routeKey: StaticRouteKey, fallback: string) {
  const labels: Partial<Record<StaticRouteKey, string>> = pageEyebrows[locale];
  return labels[routeKey] ?? fallback;
}

function QuickChoiceBand({locale}: {locale: Locale}) {
  const services = serviceData[locale];

  return (
    <section className="section-dark border-y border-paper/10 py-6">
      <div className="container-shell grid gap-5 lg:grid-cols-[0.7fr_1.3fr_auto] lg:items-center">
        <div>
          <p className="mono-label text-lab-blue">{sectionLabels[locale].serviceChoice}</p>
          <p className="mt-2 text-sm leading-6 text-paper/70">
            {locale === "hr"
              ? "Kreni od prepreke koju prvo treba riješiti."
              : "Start with the bottleneck that needs solving first."}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {services.map((service) => (
            <a
              key={service.slug}
              href={getPath(locale, service.routeKey)}
              className="rounded-sm border border-paper/12 bg-paper/6 px-3 py-2 text-sm font-bold text-paper/78 transition-all duration-300 ease-premium hover:-translate-y-[1px] hover:bg-paper/10 hover:border-lab-blue/50 hover:text-paper"
            >
              {service.shortTitle}
            </a>
          ))}
        </div>
        <Button asChild size="sm">
          <a href={getPath(locale, "contact")}>{navChromeText[locale].compactCta}</a>
        </Button>
      </div>
    </section>
  );
}

function ProcessSection({locale}: {locale: Locale}) {
  const copy = homeContent[locale];

  return (
    <MarketingSection tone="dark">
      <SectionHeader
        eyebrow={sectionLabels[locale].process}
        title={copy.processTitle}
      />
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {copy.process.map((step, index) => (
          <article className="group border-l border-paper/14 pl-5 transition-all duration-300 ease-premium hover:border-lab-blue/50" key={step.title}>
            <p className="mono-label text-lab-blue">0{index + 1}</p>
            <h3 className="mt-5 font-display text-3xl font-black text-balance">{step.title}</h3>
            <p className="mt-4 leading-7 text-paper/70">{step.text}</p>
          </article>
        ))}
      </div>
    </MarketingSection>
  );
}

function ObjectionSection({locale}: {locale: Locale}) {
  const copy = homeContent[locale];

  return (
    <MarketingSection
      tone="paper"
      innerClassName="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]"
    >
      <SectionHeader
        tone="paper"
        eyebrow={sectionLabels[locale].objections}
        title={copy.objectionsTitle}
      />
      <div className="grid gap-4">
        {copy.objections.map((item) => (
          <p key={item} className="border-l border-blood/35 bg-paper-soft p-5 leading-7 text-ink/72 transition-all duration-300 ease-premium hover:border-blood hover:shadow-soft">
            {item}
          </p>
        ))}
      </div>
    </MarketingSection>
  );
}

function OfferSnapshot({locale, service}: {locale: Locale; service: Service}) {
  return (
    <MarketingCard className="grid gap-4">
      <InfoRow label={locale === "hr" ? "Najbolje za" : "Best for"} value={service.bestFor} />
      <InfoRow label={locale === "hr" ? "Ishod" : "Outcome"} value={service.outcome} />
      <InfoRow label={locale === "hr" ? "Rok" : "Timeline"} value={service.timeline} />
      <InfoRow label={locale === "hr" ? "Cijena" : "Pricing"} value={service.pricing} />
    </MarketingCard>
  );
}

function FeatureList({title, items}: {title: string; items: string[]}) {
  return (
    <article>
      <h2 className="font-display text-3xl font-black text-balance">{title}</h2>
      <ul className="mt-5 grid gap-3 text-ink/72">
        {items.map((item) => (
          <li key={item} className="rounded-sm border border-ink/10 bg-paper-soft p-4">
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

function InfoRow({label, value}: {label: string; value: string}) {
  return (
    <div className="border-b border-paper/10 pb-4 last:border-b-0 last:pb-0">
      <p className="mono-label text-lab-blue">{label}</p>
      <p className="mt-2 leading-7 text-paper/78">{value}</p>
    </div>
  );
}

function ContactBand({
  locale,
  sourcePage,
  title,
  text,
  eyebrow
}: {
  locale: Locale;
  sourcePage: string;
  title?: string;
  text?: string;
  eyebrow?: string;
}) {
  return (
    <MarketingSection
      tone="dark"
      innerClassName="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start"
    >
      <SectionHeader
        eyebrow={eyebrow ?? sectionLabels[locale].consultation}
        title={
          title ??
          (locale === "hr"
            ? "Pošalji kratki cilj. Vratit ćemo se s realnim idućim korakom."
            : "Send the short goal. We will reply with the realistic next step.")
        }
        text={
          text ??
          (locale === "hr"
            ? "Forma je namjerno kratka. Detaljan intake, plaćanje i osjetljivi podaci dolaze tek kad ima smisla nastaviti."
            : "The form is intentionally short. Detailed intake, payment and sensitive data come only when it makes sense to continue.")
        }
      />
      <LeadForm locale={locale} sourcePage={sourcePage} />
    </MarketingSection>
  );
}

function ArticleCard({locale, post}: {locale: Locale; post: BlogPost}) {
  const href = `${getPath(locale, "blog")}/${post.slug}`;

  return (
    <a
      href={href}
      className="group rounded-md border border-ink/12 bg-paper-soft p-6 shadow-soft transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-blood/40 hover:shadow-hard focus-visible:outline-lab-blue"
    >
      <FileText aria-hidden className="text-blood transition-transform duration-300 ease-premium group-hover:scale-110" size={26} />
      <p className="mono-label mt-5 text-iron">
        {post.category} / {post.readingTime}
      </p>
      <h2 className="mt-4 font-display text-3xl font-black text-balance">{post.title}</h2>
      <p className="mt-4 text-sm leading-7 text-ink/68">{post.description}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-black text-blood">
        {locale === "hr" ? "Pročitaj članak" : "Read article"}
        <ArrowRight aria-hidden size={16} className="transition-transform duration-300 ease-premium group-hover:translate-x-1" />
      </span>
    </a>
  );
}

function getLegalBlocks(locale: Locale, routeKey: StaticRouteKey) {
  if (routeKey === "healthDisclaimer") {
    return locale === "hr"
      ? [
          {
            title: "Nije medicinski savjet",
            text: "Sadržaj na ovoj stranici i budućoj aplikaciji služi za fitness edukaciju, trening i opće prehrambene smjernice. Ne predstavlja dijagnozu, liječenje, terapiju ili zamjenu za liječnika."
          },
          {
            title: "Kada tražiti stručnu zdravstvenu pomoć",
            text: "Ako imaš ozljedu, bolest, trudnoću, poremećaj prehrane, koristiš lijekove ili imaš simptome koji te brinu, prije promjene treninga, prehrane ili dodataka prehrani savjetuj se s odgovarajućim zdravstvenim stručnjakom."
          }
        ]
      : [
          {
            title: "Not medical advice",
            text: "Content on this website and future app is for fitness education, training and general nutrition guidance. It is not diagnosis, treatment, therapy or a replacement for a physician."
          },
          {
            title: "When to seek medical help",
            text: "If you have an injury, illness, pregnancy, eating disorder, medication use or concerning symptoms, consult an appropriate medical professional before changing training, nutrition or supplements."
          }
        ];
  }

  if (routeKey === "privacy") {
    return locale === "hr"
      ? [
          {
            title: "Podaci i privola",
            text: "Javni obrazac prikuplja samo podatke potrebne za odgovor na upit. Detaljni zdravstveno osjetljivi intake podaci smiju se tražiti tek u zaštićenom procesu uz jasnu privolu."
          },
          {
            title: "GDPR struktura",
            text: "Planirana produkcijska verzija mora bilježiti svrhu obrade, verziju privole, vrijeme privole, jezik privole i omogućiti zahtjev za brisanje ili izvoz podataka."
          }
        ]
      : [
          {
            title: "Data and consent",
            text: "The public form collects only data needed to respond to the inquiry. Detailed health-adjacent intake data should be requested only in a protected process with explicit consent."
          },
          {
            title: "GDPR structure",
            text: "The production version must record purpose, consent version, consent timestamp, consent language and provide deletion or export request workflows."
          }
        ];
  }

  return locale === "hr"
    ? [
        {
          title: "Korištenje web stranice",
          text: "Informacije su prezentacijske i edukativne. Usluge, cijene, plaćanja i detaljni uvjeti potvrđuju se prije početka rada s klijentom."
        },
        {
          title: "Granice odgovornosti",
          text: "Rezultati nisu garantirani. Napredak ovisi o provedbi, zdravlju, okolnostima, dosljednosti i drugim individualnim faktorima."
        }
      ]
    : [
        {
          title: "Website use",
          text: "Information is presentational and educational. Services, pricing, payments and detailed terms are confirmed before client work begins."
        },
        {
          title: "Limits of responsibility",
          text: "Results are not guaranteed. Progress depends on execution, health, context, consistency and other individual factors."
        }
      ];
}
