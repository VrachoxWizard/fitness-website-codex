import {Check} from "lucide-react";
import type {Locale} from "@/lib/types";
import {getPath} from "@/lib/routes";
import {packageData} from "@/lib/site-data";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";

export function PackageComparison({locale}: {locale: Locale}) {
  const packages = packageData[locale];

  return (
    <section className="section-dark py-20">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <p className="mono-label text-lab-blue">packages</p>
            <h2 className="display-title mt-3 text-4xl sm:text-5xl">
              {locale === "hr" ? "Paketi bez pritiska i sitnih trikova" : "Packages without pressure tricks"}
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-paper/70">
            {locale === "hr"
              ? "Cijena se potvrđuje nakon kratke procjene opsega. Prvo mora biti jasno što kupuješ, koji je ritam podrške i gdje su granice coachinga."
              : "Pricing is confirmed after a short scope assessment. First you should know what you are buying, the support rhythm and the coaching boundaries."}
          </p>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {packages.map((item) => (
            <article
              key={item.name}
              className={cn(
                "rounded-md border p-6",
                item.highlighted
                  ? "border-blood bg-paper text-ink shadow-hard"
                  : "border-paper/12 bg-paper/5 text-paper"
              )}
            >
              <p className={cn("mono-label", item.highlighted ? "text-blood" : "text-lab-blue")}>
                {item.label}
              </p>
              <h3 className="mt-4 font-display text-4xl font-black">{item.name}</h3>
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
                    <Check aria-hidden className={item.highlighted ? "text-blood" : "text-lab-blue"} size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className="mt-7 w-full"
                variant={item.highlighted ? "dark" : "secondary"}
              >
                <a href={getPath(locale, "contact")}>{item.cta}</a>
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
