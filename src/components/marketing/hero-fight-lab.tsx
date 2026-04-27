import Image from "next/image";
import {ArrowRight, Activity, ShieldCheck} from "lucide-react";
import type {Locale} from "@/lib/types";
import {getPath} from "@/lib/routes";
import {Button} from "@/components/ui/button";
import {homeContent} from "@/lib/site-data";
import {navChromeText} from "@/lib/nav-data";

type HeroFightLabProps = {
  locale: Locale;
};

export function HeroFightLab({locale}: HeroFightLabProps) {
  const copy = homeContent[locale];
  const chrome = navChromeText[locale];

  return (
    <section className="section-dark editorial-grid texture-noise relative overflow-hidden">
      <div className="absolute inset-0 lg:hidden" aria-hidden="true">
        <Image
          src="/assets/generated/fight-lab-hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/88 to-ink" />
      </div>
      <div className="container-shell relative z-10 grid gap-10 py-8 lg:min-h-[calc(86svh-80px)] lg:grid-cols-[0.95fr_1.05fr] lg:py-14">
        <div className="soft-reveal max-w-3xl">
          <p className="mono-label mb-5 inline-flex rounded-sm border border-lab-blue/40 bg-lab-blue/10 px-3 py-2 text-lab-blue">
            {copy.eyebrow}
          </p>
          <h1 className="display-title page-title max-w-4xl text-paper-soft">
            {copy.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-paper/86">
            {copy.lead}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href={getPath(locale, "contact")}>
                {copy.primaryCta}
                <ArrowRight aria-hidden size={18} />
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href={getPath(locale, "packages")}>{chrome.secondaryCta}</a>
            </Button>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {copy.proof.map((item) => (
              <div
                className="flex items-center gap-2 border-l border-paper/20 py-2 pl-3 text-xs text-paper/78 sm:gap-3 sm:pl-4 sm:text-sm"
                key={item}
              >
                <ShieldCheck aria-hidden className="text-lab-blue" size={18} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden min-h-[420px] soft-reveal [animation-delay:120ms] lg:block lg:min-h-[640px]">
          <div className="absolute inset-0 rotate-2 rounded-md border border-paper/15 bg-paper/5" />
          <div className="absolute inset-x-5 bottom-0 top-5 overflow-hidden rounded-md border border-paper/15 bg-steel shadow-hard lg:inset-x-8">
            <Image
              src="/assets/generated/fight-lab-hero.png"
              alt={
                locale === "hr"
                  ? "Trening dnevnik, boksačke bandaže, prehrana i coaching bilješke"
                  : "Training notebook, boxing wraps, nutrition and coaching notes"
              }
              fill
              priority
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
          </div>
          <div className="absolute bottom-8 left-0 max-w-sm rounded-md border border-paper/15 bg-ink/88 p-5 shadow-soft backdrop-blur">
            <div className="mb-3 flex items-center gap-2 text-lab-blue">
              <Activity aria-hidden size={18} />
              <span className="mono-label">coach note</span>
            </div>
            <p className="text-sm leading-6 text-paper/80">{copy.labNote}</p>
          </div>
          <div className="absolute right-0 top-10 hidden rounded-md border border-blood/50 bg-blood/18 p-4 text-paper shadow-soft md:block">
            <p className="mono-label text-paper/68">signal</p>
            <p className="mt-2 font-display text-3xl font-black">15+</p>
            <p className="text-xs text-paper/70">
              {locale === "hr" ? "godina iskustva" : "years experience"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
