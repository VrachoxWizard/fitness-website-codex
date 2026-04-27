import {describe, expect, it} from "vitest";
import {leadFormSchema} from "@/lib/lead";

const validLead = {
  name: "Ana Horvat",
  email: "ana@example.com",
  phone: "",
  goal: "Plan prehrane za mršavljenje",
  preferredService: "plan-prehrane",
  trainingLevel: "beginner",
  message: "",
  locale: "hr",
  intent: "consultation",
  sourcePage: "/kontakt",
  consent: {
    privacy: true,
    marketing: false,
    healthIntake: false
  },
  honeypot: ""
};

describe("leadFormSchema", () => {
  it("accepts a valid public lead", () => {
    expect(leadFormSchema.safeParse(validLead).success).toBe(true);
  });

  it("requires privacy consent", () => {
    const result = leadFormSchema.safeParse({
      ...validLead,
      consent: {...validLead.consent, privacy: false}
    });

    expect(result.success).toBe(false);
  });

  it("rejects bot honeypot content", () => {
    const result = leadFormSchema.safeParse({...validLead, honeypot: "buy now"});

    expect(result.success).toBe(false);
  });
});
