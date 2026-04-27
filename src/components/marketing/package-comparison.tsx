import {Check} from "lucide-react";
import type {Locale} from "@/lib/types";
import {getPath} from "@/lib/routes";
import {packageData} from "@/lib/site-data";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {MarketingCard, MarketingSection, SectionHeader} from "@/components/marketing/section";

export function PackageComparison({locale}: {locale: Locale}) {
  const packages = packageData[locale];
  const cta = locale === "hr" ? "Zatraži personalizirani plan" : "Request a custom plan";

  return (
    <MarketingSection tone="dark">
      <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
        <SectionHeader
          eyebrow={locale === "hr" ? "Paketi" : "Packages"}
          title={
            locale === "hr"
              ? "Paketi bez pritiska i sitnih trikova"
              : "Packages without pressure tricks"
          }
        />
        <p className="max-w-2xl text-base leading-7 text-paper/70 sm:text-lg sm:leading-8">
          {locale === "hr"
            ? "Cijena se potvrđuje nakon kratke procjene opsega. Prvo mora biti jasno što kupuješ, koji je ritam podrške i gdje su granice coachinga."
            : "Pricing is confirmed after a short scope assessment. First you should know what you are buying, the support rhythm and the coaching boundaries."}
        </p>
      </div>
      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {packages.map((item) => (
          <MarketingCard
            key={item.name}
            highlighted={item.highlighted}
            className={cn("flex min-h-full flex-col", item.highlighted && "lg:-translate-y-3")}
          >
            <div className="flex items-start justify-between gap-4">
              <p className={cn("mono-label", item.highlighted ? "text-blood" : "text-lab-blue")}>
                {item.label}
              </p>
              {item.highlighted ? (
                <span className="rounded-sm bg-blood px-2 py-1 text-[0.68rem] font-black uppercase leading-none text-paper-soft">
                  {locale === "hr" ? "preporučeno" : "recommended"}
                </span>
              ) : null}
            </div>
            <h3 className="mt-4 font-display text-4xl font-black text-balance">{item.name}</h3>
            <p className={cn("mt-2 text-sm", item.highlighted ? "text-ink/60" : "text-paper/60")}>
              {item.price}
            </p>
            <p className={cn("mt-5 leading-7", item.highlighted ? "text-ink/72" : "text-paper/72")}>
              {item.description}
            </p>
            <p className="mt-5 text-sm font-bold">
              {locale === "hr" ? "Najbolje za: " : "Best for: "}
              {item.bestFor}
            </p>
            <ul className="mt-6 grid gap-3 text-sm">
              {item.features.map((feature) => (
                <li className="flex gap-2" key={feature}>
                  <Check aria-hidden className={cn("mt-0.5 shrink-0", item.highlighted ? "text-blood" : "text-lab-blue")} size={16} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-7">
              <Button
                asChild
                className="w-full"
                variant={item.highlighted ? "dark" : "secondary"}
              >
                <a href={getPath(locale, "contact")}>{cta}</a>
              </Button>
            </div>
          </MarketingCard>
        ))}
      </div>
    </MarketingSection>
  );
}
