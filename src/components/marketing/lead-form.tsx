"use client";

import {zodResolver} from "@hookform/resolvers/zod";
import {CheckCircle2, Loader2} from "lucide-react";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {
  leadFormSchema,
  type LeadFormInputValues
} from "@/lib/lead";
import type {ConversionIntent, Locale} from "@/lib/types";
import {Button} from "@/components/ui/button";

type LeadFormProps = {
  locale: Locale;
  sourcePage: string;
  intent?: ConversionIntent;
};

const copy = {
  hr: {
    title: "Kratka procjena",
    intro: "Pošalji cilj i kontekst. Detaljne zdravstvene informacije tražimo tek kasnije uz jasnu privolu.",
    name: "Ime",
    email: "Email",
    phone: "Telefon ili WhatsApp (opcionalno)",
    goal: "Glavni cilj",
    preferredService: "Usluga",
    trainingLevel: "Razina treninga",
    message: "Kratka poruka",
    privacy: "Slažem se s obradom podataka za odgovor na upit.",
    marketing: "Želim primati korisne edukativne poruke i vodiče.",
    health: "Ako u poruci spomenem zdravstvene detalje, pristajem da se koriste samo za procjenu upita.",
    submit: "Pošalji upit",
    success: "Upit je zaprimljen. Javit ćemo se s idućim korakom.",
    error: "Nešto nije prošlo. Provjeri polja i pokušaj ponovno.",
    noMedical: "Ne šalji dijagnoze, nalaze ili osjetljive detalje u ovoj javnoj formi."
  },
  en: {
    title: "Short assessment",
    intro: "Send your goal and context. Detailed health information is requested later with explicit consent.",
    name: "Name",
    email: "Email",
    phone: "Phone or WhatsApp (optional)",
    goal: "Main goal",
    preferredService: "Service",
    trainingLevel: "Training level",
    message: "Short message",
    privacy: "I agree to data processing so you can respond to my inquiry.",
    marketing: "I want useful educational emails and guides.",
    health: "If I mention health details, I consent to their use only for inquiry assessment.",
    submit: "Send inquiry",
    success: "Inquiry received. We will reply with the next step.",
    error: "Something did not work. Check the fields and try again.",
    noMedical: "Do not send diagnoses, medical files or sensitive details in this public form."
  }
};

export function LeadForm({locale, sourcePage, intent = "consultation"}: LeadFormProps) {
  const t = copy[locale];
  const [serverState, setServerState] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: {errors, isSubmitting}
  } = useForm<LeadFormInputValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      goal: "",
      preferredService: "not-sure",
      trainingLevel: "beginner",
      message: "",
      locale,
      intent,
      sourcePage,
      consent: {
        privacy: false,
        marketing: false,
        healthIntake: false
      },
      honeypot: ""
    }
  });

  async function onSubmit(values: LeadFormInputValues) {
    setServerState("idle");
    const response = await fetch("/api/lead", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(values)
    });

    setServerState(response.ok ? "success" : "error");
  }

  return (
    <form
      className="rounded-md border border-paper/12 bg-paper/6 p-5 shadow-soft md:p-7"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <div className="mb-6">
        <p className="mono-label text-lab-blue">{t.title}</p>
        <p className="mt-3 text-sm leading-6 text-paper/70">{t.intro}</p>
      </div>
      <input
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        {...register("honeypot")}
      />
      <input type="hidden" {...register("locale")} value={locale} />
      <input type="hidden" {...register("intent")} value={intent} />
      <input type="hidden" {...register("sourcePage")} value={sourcePage} />

      <div className="grid gap-4 md:grid-cols-2">
        <Field label={t.name} error={errors.name?.message}>
          <input {...register("name")} autoComplete="name" />
        </Field>
        <Field label={t.email} error={errors.email?.message}>
          <input {...register("email")} autoComplete="email" type="email" />
        </Field>
        <Field label={t.phone} error={errors.phone?.message}>
          <input {...register("phone")} autoComplete="tel" />
        </Field>
        <Field label={t.goal} error={errors.goal?.message}>
          <input
            {...register("goal")}
            placeholder={locale === "hr" ? "mršavljenje, snaga, mišićna masa..." : "fat loss, strength, muscle gain..."}
          />
        </Field>
        <Field label={t.preferredService} error={errors.preferredService?.message}>
          <select {...register("preferredService")}>
            <option value="not-sure">{locale === "hr" ? "Nisam siguran/a" : "Not sure"}</option>
            <option value="plan-prehrane">{locale === "hr" ? "Plan prehrane" : "Nutrition plan"}</option>
            <option value="plan-treninga">{locale === "hr" ? "Plan treninga" : "Workout plan"}</option>
            <option value="online-coaching">Online coaching</option>
            <option value="transformacija">{locale === "hr" ? "Transformacija" : "Transformation"}</option>
          </select>
        </Field>
        <Field label={t.trainingLevel} error={errors.trainingLevel?.message}>
          <select {...register("trainingLevel")}>
            <option value="beginner">{locale === "hr" ? "Početnik" : "Beginner"}</option>
            <option value="intermediate">{locale === "hr" ? "Srednja razina" : "Intermediate"}</option>
            <option value="advanced">{locale === "hr" ? "Napredno" : "Advanced"}</option>
          </select>
        </Field>
      </div>

      <Field label={t.message} error={errors.message?.message} className="mt-4">
        <textarea {...register("message")} rows={5} />
      </Field>

      <p className="mt-3 rounded-sm border border-warning/30 bg-warning/10 px-3 py-2 text-xs leading-5 text-paper/76">
        {t.noMedical}
      </p>

      <div className="mt-5 grid gap-3 text-sm text-paper/76">
        <label className="flex gap-3">
          <input className="mt-1 size-4 accent-blood" type="checkbox" {...register("consent.privacy")} />
          <span>{t.privacy}</span>
        </label>
        {errors.consent?.privacy ? (
          <p className="text-sm text-blood-bright">{errors.consent.privacy.message}</p>
        ) : null}
        <label className="flex gap-3">
          <input className="mt-1 size-4 accent-blood" type="checkbox" {...register("consent.marketing")} />
          <span>{t.marketing}</span>
        </label>
        <label className="flex gap-3">
          <input className="mt-1 size-4 accent-blood" type="checkbox" {...register("consent.healthIntake")} />
          <span>{t.health}</span>
        </label>
      </div>

      <Button className="mt-6 w-full" disabled={isSubmitting} type="submit">
        {isSubmitting ? <Loader2 aria-hidden className="animate-spin" size={18} /> : null}
        {t.submit}
      </Button>

      {serverState === "success" ? (
        <p className="mt-4 flex items-center gap-2 rounded-sm border border-lab-blue/30 bg-lab-blue/10 px-3 py-2 text-sm text-paper">
          <CheckCircle2 aria-hidden size={18} />
          {t.success}
        </p>
      ) : null}
      {serverState === "error" ? (
        <p className="mt-4 rounded-sm border border-blood/40 bg-blood/15 px-3 py-2 text-sm text-paper">
          {t.error}
        </p>
      ) : null}
    </form>
  );
}

type FieldProps = {
  label: string;
  error?: string;
  children: React.ReactElement;
  className?: string;
};

function Field({label, error, children, className}: FieldProps) {
  return (
    <label className={className}>
      <span className="mb-2 block text-sm font-bold text-paper/78">{label}</span>
      <span className="block [&_input]:min-h-11 [&_input]:w-full [&_input]:rounded-md [&_input]:border [&_input]:border-paper/14 [&_input]:bg-ink/70 [&_input]:px-3 [&_input]:text-paper [&_select]:min-h-11 [&_select]:w-full [&_select]:rounded-md [&_select]:border [&_select]:border-paper/14 [&_select]:bg-ink/70 [&_select]:px-3 [&_select]:text-paper [&_textarea]:w-full [&_textarea]:rounded-md [&_textarea]:border [&_textarea]:border-paper/14 [&_textarea]:bg-ink/70 [&_textarea]:p-3 [&_textarea]:text-paper">
        {children}
      </span>
      {error ? <span className="mt-2 block text-sm text-blood-bright">{error}</span> : null}
    </label>
  );
}
