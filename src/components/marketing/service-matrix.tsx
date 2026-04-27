import {ArrowUpRight, CheckCircle2} from "lucide-react";
import type {Locale} from "@/lib/types";
import {getPath} from "@/lib/routes";
import {serviceData} from "@/lib/site-data";

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
    <section className="section-paper paper-grid py-20">
      <div className="container-shell">
        <div className="max-w-3xl">
          <p className="mono-label text-blood">services</p>
          <h2 className="display-title mt-3 text-4xl sm:text-5xl">{title}</h2>
          <p className="mt-5 text-lg leading-8 text-ink/68">{intro}</p>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-4">
          {services.map((service, index) => (
            <a
              key={service.slug}
              href={getPath(locale, service.routeKey)}
              className="group flex min-h-[360px] flex-col justify-between rounded-md border border-ink/12 bg-paper-soft p-6 shadow-soft transition hover:-translate-y-1 hover:border-blood/40 hover:shadow-hard"
            >
              <div>
                <p className="mono-label text-iron">0{index + 1} / {service.eyebrow}</p>
                <h3 className="mt-5 font-display text-3xl font-black">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-ink/68">
                  {service.subtitle}
                </p>
                <ul className="mt-6 grid gap-3 text-sm text-ink/76">
                  {service.deliverables.slice(0, 3).map((item) => (
                    <li className="flex gap-2" key={item}>
                      <CheckCircle2 aria-hidden className="mt-0.5 text-blood" size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-black text-blood">
                {service.primaryCta}
                <ArrowUpRight aria-hidden size={18} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
