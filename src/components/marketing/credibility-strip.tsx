import {BadgeCheck, Dumbbell, Microscope, TimerReset} from "lucide-react";
import type {Locale} from "@/lib/types";

export function CredibilityStrip({locale}: {locale: Locale}) {
  const items =
    locale === "hr"
      ? [
          ["Sportska baza", "Boks, rukomet, hrvanje i realan coaching teren"],
          ["Fitness znanje", "Bodybuilding, prehrana, suplementi i praksa"],
          ["Bez šablona", "Plan se gradi prema cilju, ritmu i opremi"],
          ["Sigurnije granice", "Bez medicinskih obećanja i agresivnih tvrdnji"]
        ]
      : [
          ["Sport base", "Boxing, handball, wrestling and coaching reality"],
          ["Fitness knowledge", "Bodybuilding, nutrition, supplements and practice"],
          ["No templates", "The plan follows your goal, rhythm and equipment"],
          ["Safer boundaries", "No medical promises or aggressive claims"]
        ];
  const icons = [Dumbbell, Microscope, TimerReset, BadgeCheck];

  return (
    <section className="section-dark border-y border-paper/10 py-8">
      <div className="container-shell grid gap-x-8 gap-y-6 md:grid-cols-2 lg:grid-cols-4">
        {items.map(([title, text], index) => {
          const Icon = icons[index];
          return (
            <article className="flex gap-4 border-l border-paper/12 pl-4" key={title}>
              <Icon aria-hidden className="mt-1 shrink-0 text-lab-blue" size={22} />
              <div>
                <h2 className="font-display text-2xl font-black">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-paper/68">{text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
