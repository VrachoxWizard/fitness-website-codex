"use client";

import useEmblaCarousel from "embla-carousel-react";
import {ArrowLeft, ArrowRight} from "lucide-react";
import {useCallback} from "react";
import type {Locale} from "@/lib/types";
import {proofItems} from "@/lib/site-data";
import {MarketingCard, MarketingSection, SectionHeader} from "@/components/marketing/section";
import {IconButton} from "@/components/ui/icon-button";

export function ProofCarousel({locale}: {locale: Locale}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({align: "start", loop: true});
  const items = proofItems[locale];

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <MarketingSection tone="dark">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionHeader
          eyebrow={locale === "hr" ? "Standard dokaza" : "Proof standard"}
          title={locale === "hr" ? "Rezultati bez lažnog kazališta" : "Results without fake theatre"}
          text={
            locale === "hr"
              ? "Dok stvarni rezultati ne dobiju pristanak za objavu, dokazujemo proces, granice i način rada."
              : "Until real results have consent for publication, we prove the process, boundaries and way of working."
          }
        />
        <div className="flex gap-2">
          <IconButton
            type="button"
            onClick={scrollPrev}
            aria-label={locale === "hr" ? "Prethodni dokaz" : "Previous proof"}
          >
            <ArrowLeft aria-hidden size={18} />
          </IconButton>
          <IconButton
            type="button"
            onClick={scrollNext}
            aria-label={locale === "hr" ? "Sljedeći dokaz" : "Next proof"}
          >
            <ArrowRight aria-hidden size={18} />
          </IconButton>
        </div>
      </div>
      <div className="mt-10 overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {items.map((item) => (
            <MarketingCard
              className="min-w-0 flex-[0_0_86%] md:flex-[0_0_48%] lg:flex-[0_0_32%]"
              key={item.title}
            >
              <p className="mono-label text-lab-blue">{item.label}</p>
              <h3 className="mt-5 font-display text-3xl font-black text-balance">{item.title}</h3>
              <p className="mt-4 leading-7 text-paper/70">{item.text}</p>
            </MarketingCard>
          ))}
        </div>
      </div>
    </MarketingSection>
  );
}
