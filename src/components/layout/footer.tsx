import type {Locale} from "@/lib/types";
import {getPath} from "@/lib/routes";
import {navText} from "@/lib/nav-data";

type FooterProps = {
  locale: Locale;
};

export function Footer({locale}: FooterProps) {
  const labels = navText[locale];
  const legalText =
    locale === "hr"
      ? "Sadržaj je namijenjen fitness edukaciji i coachingu, ne dijagnozi ili liječenju."
      : "Content is for fitness education and coaching, not diagnosis or treatment.";

  return (
    <footer className="section-dark border-t border-paper/10 py-12">
      <div className="container-shell grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="font-display text-3xl font-black">Fight Lab Coaching</p>
          <p className="mt-4 max-w-md text-sm leading-6 text-paper/70">
            {legalText}
          </p>
        </div>
        <div>
          <p className="mono-label text-lab-blue">Navigation</p>
          <div className="mt-4 grid gap-2 text-sm text-paper/76">
            {(["services", "packages", "about", "results", "blog", "contact"] as const).map(
              (item) => (
                <a key={item} className="hover:text-paper" href={getPath(locale, item)}>
                  {labels[item]}
                </a>
              )
            )}
          </div>
        </div>
        <div>
          <p className="mono-label text-lab-blue">Legal</p>
          <div className="mt-4 grid gap-2 text-sm text-paper/76">
            <a href={getPath(locale, "privacy")} className="hover:text-paper">
              {labels.privacy}
            </a>
            <a href={getPath(locale, "terms")} className="hover:text-paper">
              {labels.terms}
            </a>
            <a href={getPath(locale, "healthDisclaimer")} className="hover:text-paper">
              {labels.healthDisclaimer}
            </a>
          </div>
        </div>
      </div>
      <div className="container-shell mt-10 border-t border-paper/10 pt-6 text-xs text-paper/50">
        © {new Date().getFullYear()} Fight Lab Coaching. Zagreb / Hrvatska.
      </div>
    </footer>
  );
}
