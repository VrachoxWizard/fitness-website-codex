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
          <p className="mono-label text-blood">coach credibility</p>
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
                className="rounded-md border border-ink/12 bg-paper-soft p-7 shadow-soft"
                key={person.name}
              >
                <Icon aria-hidden className="text-blood" size={28} />
                <h3 className="mt-5 font-display text-4xl font-black">
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
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
