"use client";

import * as Accordion from "@radix-ui/react-accordion";
import {ChevronDown} from "lucide-react";
import type {FaqItem, Locale} from "@/lib/types";

type FAQAccordionProps = {
  locale: Locale;
  items: FaqItem[];
  title?: string;
};

export function FAQAccordion({locale, items, title}: FAQAccordionProps) {
  return (
    <section className="section-paper py-20">
      <div className="container-shell grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="mono-label text-blood">faq</p>
          <h2 className="display-title mt-3 text-4xl sm:text-5xl">
            {title ?? (locale === "hr" ? "Pitanja prije odluke" : "Questions before deciding")}
          </h2>
        </div>
        <Accordion.Root type="single" collapsible className="grid gap-3">
          {items.map((item, index) => (
            <Accordion.Item
              value={`item-${index}`}
              key={item.question}
              className="rounded-md border border-ink/12 bg-paper-soft"
            >
              <Accordion.Header>
                <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-display text-xl font-black">
                  <span>{item.question}</span>
                  <ChevronDown
                    aria-hidden
                    size={18}
                    className="shrink-0 transition group-data-[state=open]:rotate-180"
                  />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden px-5 pb-5 text-sm leading-7 text-ink/70 data-[state=closed]:animate-none">
                {item.answer}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
