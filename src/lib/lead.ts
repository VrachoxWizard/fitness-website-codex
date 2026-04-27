import {z} from "zod";
import type {LeadFormInput, Locale} from "@/lib/types";

const validationMessages = {
  hr: {
    name: "Unesite ime.",
    email: "Unesite ispravnu email adresu.",
    goal: "Odaberite ili upišite cilj.",
    privacy: "Potrebna je privola za obradu upita."
  },
  en: {
    name: "Enter your name.",
    email: "Enter a valid email address.",
    goal: "Choose or enter your goal.",
    privacy: "Consent is required so we can respond to your inquiry."
  }
} satisfies Record<Locale, Record<string, string>>;

export function getLeadFormSchema(locale: Locale = "hr") {
  const messages = validationMessages[locale];

  return z.object({
    name: z.string().trim().min(2, messages.name).max(90),
    email: z.email(messages.email).max(160),
    phone: z.string().trim().max(40).optional().or(z.literal("")),
    goal: z.string().trim().min(3, messages.goal).max(160),
    preferredService: z.enum([
      "plan-prehrane",
      "plan-treninga",
      "online-coaching",
      "transformacija",
      "not-sure"
    ]),
    trainingLevel: z.enum(["beginner", "intermediate", "advanced"]),
    message: z.string().trim().max(1200).optional().or(z.literal("")),
    locale: z.enum(["hr", "en"]),
    intent: z.enum(["consultation", "custom-plan", "free-guide"]),
    sourcePage: z.string().trim().min(1).max(180),
    consent: z.object({
      privacy: z
        .boolean()
        .refine((value) => value, messages.privacy),
      marketing: z.boolean().default(false),
      healthIntake: z.boolean().default(false)
    }),
    honeypot: z.string().max(0).optional().or(z.literal(""))
  });
}

export const leadFormSchema = getLeadFormSchema("hr");

export type LeadFormValues = z.infer<typeof leadFormSchema>;
export type LeadFormInputValues = z.input<typeof leadFormSchema>;

export function sanitizeLeadForLog(input: LeadFormInput) {
  return {
    locale: input.locale,
    intent: input.intent,
    sourcePage: input.sourcePage,
    preferredService: input.preferredService,
    trainingLevel: input.trainingLevel,
    consent: input.consent,
    hasPhone: Boolean(input.phone),
    hasMessage: Boolean(input.message)
  };
}
