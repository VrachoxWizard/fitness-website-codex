"use client";

import {zodResolver} from "@hookform/resolvers/zod";
import {CheckCircle2, Loader2} from "lucide-react";
import {
  cloneElement,
  useId,
  useMemo,
  useState,
  type ReactElement
} from "react";
import {useForm} from "react-hook-form";
import {getLeadFormSchema, type LeadFormInputValues} from "@/lib/lead";
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
    noMedical: "Ne šalji dijagnoze, nalaze ili osjetljive detalje u ovoj javnoj formi.",
    options: {
      notSure: "Nisam siguran/a",
      nutrition: "Plan prehrane",
      workout: "Plan treninga",
      coaching: "Online coaching",
      transformation: "Transformacija",
      beginner: "Početnik",
      intermediate: "Srednja razina",
      advanced: "Napredno"
    }
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
    noMedical: "Do not send diagnoses, medical files or sensitive details in this public form.",
    options: {
      notSure: "Not sure",
      nutrition: "Nutrition plan",
      workout: "Workout plan",
      coaching: "Online coaching",
      transformation: "Transformation",
      beginner: "Beginner",
      intermediate: "Intermediate",
      advanced: "Advanced"
    }
  }
};

export function LeadForm({locale, sourcePage, intent = "consultation"}: LeadFormProps) {
  const t = copy[locale];
  const schema = useMemo(() => getLeadFormSchema(locale), [locale]);
  const baseId = useId();
  const [serverState, setServerState] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: {errors, isSubmitting}
  } = useForm<LeadFormInputValues>({
    resolver: zodResolver(schema),
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
        <Field id={`${baseId}-name`} label={t.name} error={errors.name?.message}>
          <input {...register("name")} autoComplete="name" />
        </Field>
        <Field id={`${baseId}-email`} label={t.email} error={errors.email?.message}>
          <input {...register("email")} autoComplete="email" type="email" />
        </Field>
        <Field id={`${baseId}-phone`} label={t.phone} error={errors.phone?.message}>
          <input {...register("phone")} autoComplete="tel" />
        </Field>
        <Field id={`${baseId}-goal`} label={t.goal} error={errors.goal?.message}>
          <input
            {...register("goal")}
            placeholder={locale === "hr" ? "mršavljenje, snaga, mišićna masa..." : "fat loss, strength, muscle gain..."}
          />
        </Field>
        <Field id={`${baseId}-service`} label={t.preferredService} error={errors.preferredService?.message}>
          <select {...register("preferredService")}>
            <option value="not-sure">{t.options.notSure}</option>
            <option value="plan-prehrane">{t.options.nutrition}</option>
            <option value="plan-treninga">{t.options.workout}</option>
            <option value="online-coaching">{t.options.coaching}</option>
            <option value="transformacija">{t.options.transformation}</option>
          </select>
        </Field>
        <Field id={`${baseId}-level`} label={t.trainingLevel} error={errors.trainingLevel?.message}>
          <select {...register("trainingLevel")}>
            <option value="beginner">{t.options.beginner}</option>
            <option value="intermediate">{t.options.intermediate}</option>
            <option value="advanced">{t.options.advanced}</option>
          </select>
        </Field>
      </div>

      <Field id={`${baseId}-message`} label={t.message} error={errors.message?.message} className="mt-4">
        <textarea {...register("message")} rows={5} />
      </Field>

      <p className="mt-3 rounded-sm border border-warning/30 bg-warning/10 px-3 py-2 text-xs leading-5 text-paper/76">
        {t.noMedical}
      </p>

      <div className="mt-5 grid gap-3 text-sm text-paper/76">
        <CheckboxField
          id={`${baseId}-privacy`}
          label={t.privacy}
          error={errors.consent?.privacy?.message}
          input={<input className="mt-1 size-4 accent-blood" type="checkbox" {...register("consent.privacy")} />}
        />
        <CheckboxField
          id={`${baseId}-marketing`}
          label={t.marketing}
          input={<input className="mt-1 size-4 accent-blood" type="checkbox" {...register("consent.marketing")} />}
        />
        <CheckboxField
          id={`${baseId}-health`}
          label={t.health}
          input={<input className="mt-1 size-4 accent-blood" type="checkbox" {...register("consent.healthIntake")} />}
        />
      </div>

      <Button className="mt-6 w-full" disabled={isSubmitting} type="submit">
        {isSubmitting ? <Loader2 aria-hidden className="animate-spin" size={18} /> : null}
        {t.submit}
      </Button>

      {serverState === "success" ? (
        <p
          className="mt-4 flex items-center gap-2 rounded-sm border border-lab-blue/30 bg-lab-blue/10 px-3 py-2 text-sm text-paper"
          role="status"
        >
          <CheckCircle2 aria-hidden size={18} />
          {t.success}
        </p>
      ) : null}
      {serverState === "error" ? (
        <p
          className="mt-4 rounded-sm border border-blood/40 bg-blood/15 px-3 py-2 text-sm text-paper"
          role="alert"
        >
          {t.error}
        </p>
      ) : null}
    </form>
  );
}

type FieldControlProps = {
  id?: string;
  "aria-invalid"?: boolean;
  "aria-describedby"?: string;
};

type FieldProps = {
  id: string;
  label: string;
  error?: string;
  children: ReactElement<FieldControlProps>;
  className?: string;
};

function Field({id, label, error, children, className}: FieldProps) {
  const errorId = `${id}-error`;
  const control = cloneElement(children, {
    id,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? errorId : undefined
  });

  return (
    <label className={className} htmlFor={id}>
      <span className="mb-2 block text-sm font-bold text-paper/78">{label}</span>
      <span className="block [&_input]:min-h-11 [&_input]:w-full [&_input]:rounded-md [&_input]:border [&_input]:border-paper/14 [&_input]:bg-ink/70 [&_input]:px-3 [&_input]:text-paper [&_input]:outline-none [&_input]:transition [&_input]:focus-visible:border-lab-blue [&_select]:min-h-11 [&_select]:w-full [&_select]:rounded-md [&_select]:border [&_select]:border-paper/14 [&_select]:bg-ink/70 [&_select]:px-3 [&_select]:text-paper [&_select]:outline-none [&_select]:transition [&_select]:focus-visible:border-lab-blue [&_textarea]:w-full [&_textarea]:rounded-md [&_textarea]:border [&_textarea]:border-paper/14 [&_textarea]:bg-ink/70 [&_textarea]:p-3 [&_textarea]:text-paper [&_textarea]:outline-none [&_textarea]:transition [&_textarea]:focus-visible:border-lab-blue">
        {control}
      </span>
      {error ? (
        <span id={errorId} className="mt-2 block text-sm text-blood-bright">
          {error}
        </span>
      ) : null}
    </label>
  );
}

function CheckboxField({
  id,
  label,
  input,
  error
}: {
  id: string;
  label: string;
  input: ReactElement<FieldControlProps>;
  error?: string;
}) {
  const errorId = `${id}-error`;
  const control = cloneElement(input, {
    id,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? errorId : undefined
  });

  return (
    <div>
      <label className="flex gap-3" htmlFor={id}>
        {control}
        <span>{label}</span>
      </label>
      {error ? (
        <p id={errorId} className="mt-2 text-sm text-blood-bright">
          {error}
        </p>
      ) : null}
    </div>
  );
}
