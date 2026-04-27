import type {Locale} from "@/lib/types";
import {getPath} from "@/lib/routes";

export function StickyMobileCTA({locale}: {locale: Locale}) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-paper/20 bg-ink/92 p-3 backdrop-blur-xl lg:hidden">
      <a
        href={getPath(locale, "contact")}
        className="flex min-h-12 items-center justify-center rounded-md bg-blood px-4 text-sm font-black text-paper-soft shadow-hard"
      >
        {locale === "hr" ? "Zatraži personalizirani plan" : "Request a custom plan"}
      </a>
    </div>
  );
}
