import {z} from "zod";
import type {LeadFormInput} from "@/lib/types";

export const leadFormSchema = z.object({
  name: z.string().trim().min(2, "Unesite ime.").max(90),
  email: z.email("Unesite ispravnu email adresu.").max(160),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  goal: z.string().trim().min(3, "Odaberite ili upišite cilj.").max(160),
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
      .refine((value) => value, "Potrebna je privola za obradu upita."),
    marketing: z.boolean().default(false),
    healthIntake: z.boolean().default(false)
  }),
  honeypot: z.string().max(0).optional().or(z.literal(""))
});

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
