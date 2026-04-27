"use client";

import useEmblaCarousel from "embla-carousel-react";
import {ArrowLeft, ArrowRight} from "lucide-react";
import {useCallback} from "react";
import type {Locale} from "@/lib/types";
import {proofItems} from "@/lib/site-data";

export function ProofCarousel({locale}: {locale: Locale}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({align: "start", loop: true});
  const items = proofItems[locale];

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="section-dark py-20">
      <div className="container-shell">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mono-label text-lab-blue">proof standard</p>
            <h2 className="display-title mt-3 text-4xl sm:text-5xl">
              {locale === "hr" ? "Rezultati bez lažnog kazališta" : "Results without fake theatre"}
            </h2>
            <p className="mt-5 text-lg leading-8 text-paper/70">
              {locale === "hr"
                ? "Dok stvarni rezultati ne dobiju pristanak za objavu, dokazujemo proces, granice i način rada."
                : "Until real results have consent for publication, we prove the process, boundaries and way of working."}
            </p>
          </div>
          <div className="flex gap-2">
            <button
              className="grid size-11 place-items-center rounded-md border border-paper/20 text-paper transition hover:bg-paper/10"
              type="button"
              onClick={scrollPrev}
              aria-label={locale === "hr" ? "Prethodni dokaz" : "Previous proof"}
            >
              <ArrowLeft aria-hidden size={18} />
            </button>
            <button
              className="grid size-11 place-items-center rounded-md border border-paper/20 text-paper transition hover:bg-paper/10"
              type="button"
              onClick={scrollNext}
              aria-label={locale === "hr" ? "Sljedeći dokaz" : "Next proof"}
            >
              <ArrowRight aria-hidden size={18} />
            </button>
          </div>
        </div>
        <div className="mt-10 overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {items.map((item) => (
              <article
                className="min-w-0 flex-[0_0_86%] rounded-md border border-paper/12 bg-paper/6 p-6 md:flex-[0_0_48%] lg:flex-[0_0_32%]"
                key={item.title}
              >
                <p className="mono-label text-lab-blue">{item.label}</p>
                <h3 className="mt-5 font-display text-3xl font-black">{item.title}</h3>
                <p className="mt-4 leading-7 text-paper/70">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
