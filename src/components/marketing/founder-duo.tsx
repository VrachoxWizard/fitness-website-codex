import Image from "next/image";
import {Shield, BookOpenCheck} from "lucide-react";
import type {Locale} from "@/lib/types";
import {founders} from "@/lib/site-data";

export function FounderDuo({locale}: {locale: Locale}) {
  const people = founders[locale];
  const icons = [Shield, BookOpenCheck];

  return (
    <section className="section-paper py-20">
      <div className="container-shell">
        <div className="max-w-3xl">
          <p className="mono-label text-blood">
            {locale === "hr" ? "Trenerski kredibilitet" : "Coach credibility"}
          </p>
          <h2 className="display-title mt-3 text-4xl sm:text-5xl">
            {locale === "hr"
              ? "Dva profila. Jedan sustav."
              : "Two profiles. One system."}
          </h2>
          <p className="mt-5 text-lg leading-8 text-ink/68">
            {locale === "hr"
              ? "Jedan dio brenda dolazi iz borilišta i sportskog terena. Drugi iz čitanja, testiranja i prevođenja fitness znanja u jednostavne odluke."
              : "One side of the brand comes from sport and combat practice. The other comes from reading, testing and translating fitness knowledge into simple decisions."}
          </p>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {people.map((person, index) => {
            const Icon = icons[index];
            return (
              <article
                className="group overflow-hidden rounded-md border border-ink/12 bg-paper-soft shadow-soft transition-all duration-300 ease-premium hover:-translate-y-1 hover:shadow-hard"
                key={person.name}
              >
                <div className="relative aspect-video w-full overflow-hidden bg-steel">
                  <Image 
                    src={index === 0 ? "/assets/generated/founder-sports.png" : "/assets/generated/founder-science.png"}
                    alt={person.name}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
                  <Icon aria-hidden className="absolute bottom-5 left-7 text-paper" size={32} />
                </div>
                <div className="p-7 pt-6">
                  <h3 className="font-display text-4xl font-black">
                    {person.name}
                  </h3>
                  <p className="mono-label mt-2 text-iron">{person.role}</p>
                  <p className="mt-6 leading-8 text-ink/72">{person.profile}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {person.proof.map((item) => (
                      <span
                        key={item}
                        className="rounded-sm border border-ink/10 bg-ink/5 px-3 py-2 text-xs font-bold text-ink/70"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
