import {ArrowUpRight, CheckCircle2} from "lucide-react";
import type {Locale} from "@/lib/types";
import {getPath} from "@/lib/routes";
import {serviceData} from "@/lib/site-data";
import {SectionHeader, MarketingSection} from "@/components/marketing/section";

export function ServiceMatrix({locale}: {locale: Locale}) {
  const services = serviceData[locale];
  const title =
    locale === "hr"
      ? "Odaberi uslugu prema stvarnoj prepreci"
      : "Choose the service around the real bottleneck";
  const intro =
    locale === "hr"
      ? "Ne guramo svakoga u isti paket. Prvo gledamo gdje sustav puca: prehrana, trening, odgovornost ili kompletna rutina."
      : "We do not push everyone into the same package. We first look where the system breaks: nutrition, training, accountability or the full routine.";

  return (
    <MarketingSection tone="paper" grid>
      <SectionHeader
        tone="paper"
        eyebrow={locale === "hr" ? "Usluge" : "Services"}
        title={title}
        text={intro}
      />
      <div className="mt-10 grid gap-4 lg:grid-cols-4">
        {services.map((service, index) => (
          <a
            key={service.slug}
            href={getPath(locale, service.routeKey)}
            aria-label={`${service.title}: ${service.primaryCta}`}
            className="group flex min-h-[320px] flex-col justify-between rounded-md border border-ink/12 bg-paper-soft p-6 shadow-soft transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-blood/45 hover:shadow-hard focus-visible:outline-lab-blue"
          >
            <div>
              <p className="mono-label text-iron">
                0{index + 1} / {service.eyebrow}
              </p>
              <h3 className="mt-5 font-display text-3xl font-black text-balance">
                {service.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-ink/68">
                {service.subtitle}
              </p>
              <p className="mt-5 border-l border-blood/30 pl-3 text-sm font-bold leading-6 text-ink/78">
                {service.bestFor}
              </p>
              <ul className="mt-5 grid gap-3 text-sm text-ink/76">
                {service.deliverables.slice(0, 2).map((item) => (
                  <li className="flex gap-2" key={item}>
                    <CheckCircle2 aria-hidden className="mt-0.5 shrink-0 text-blood" size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <span className="mt-8 inline-flex items-center gap-2 text-sm font-black text-blood">
              {service.primaryCta}
              <ArrowUpRight aria-hidden size={18} className="transition-transform duration-300 ease-premium group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </a>
        ))}
      </div>
    </MarketingSection>
  );
}
