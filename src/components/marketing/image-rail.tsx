import Image from "next/image";
import type {Locale} from "@/lib/types";

export function ImageRail({locale}: {locale: Locale}) {
  const labels =
    locale === "hr"
      ? ["fight camp detalj", "nutrition review", "coach notes"]
      : ["fight camp detail", "nutrition review", "coach notes"];

  return (
    <section className="section-dark py-16">
      <div className="container-shell">
        <div className="grid gap-4 md:grid-cols-3">
          {labels.map((label, index) => (
            <figure
              key={label}
              className="group relative aspect-[4/5] overflow-hidden rounded-md border border-paper/12 bg-steel"
            >
              <Image
                src="/assets/generated/fight-lab-hero.png"
                alt={label}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
                style={{
                  objectPosition:
                    index === 0 ? "70% 50%" : index === 1 ? "45% 50%" : "25% 50%"
                }}
              />
              <figcaption className="absolute inset-x-4 bottom-4 rounded-sm border border-paper/15 bg-ink/76 px-3 py-2 text-sm font-bold text-paper backdrop-blur">
                {label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
