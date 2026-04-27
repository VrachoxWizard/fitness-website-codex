import type {ElementType, ReactNode} from "react";
import {cn} from "@/lib/utils";

type Tone = "dark" | "paper";

type MarketingSectionProps = {
  children: ReactNode;
  tone?: Tone;
  grid?: boolean;
  className?: string;
  innerClassName?: string;
  as?: ElementType;
};

export function MarketingSection({
  children,
  tone = "dark",
  grid = false,
  className,
  innerClassName,
  as: Comp = "section"
}: MarketingSectionProps) {
  return (
    <Comp
      className={cn(
        tone === "dark" ? "section-dark" : "section-paper",
        grid && (tone === "dark" ? "editorial-grid" : "paper-grid"),
        "section-pad",
        className
      )}
    >
      <div className={cn("container-shell", innerClassName)}>{children}</div>
    </Comp>
  );
}

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  text?: string;
  tone?: Tone;
  className?: string;
  titleClassName?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  text,
  tone = "dark",
  className,
  titleClassName
}: SectionHeaderProps) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <p className={cn("mono-label", tone === "dark" ? "text-lab-blue" : "text-blood")}>
        {eyebrow}
      </p>
      <h2 className={cn("display-title section-title mt-3", titleClassName)}>
        {title}
      </h2>
      {text ? (
        <p
          className={cn(
            "mt-5 text-base leading-7 text-pretty sm:text-lg sm:leading-8",
            tone === "dark" ? "text-paper/70" : "text-ink/68"
          )}
        >
          {text}
        </p>
      ) : null}
    </div>
  );
}

type MarketingCardProps = {
  children: ReactNode;
  tone?: Tone;
  highlighted?: boolean;
  className?: string;
  as?: ElementType;
};

export function MarketingCard({
  children,
  tone = "dark",
  highlighted = false,
  className,
  as: Comp = "article"
}: MarketingCardProps) {
  return (
    <Comp
      className={cn(
        "rounded-md border p-5 transition duration-200 md:p-6",
        tone === "dark"
          ? "border-paper/12 bg-paper/6 text-paper"
          : "border-ink/12 bg-paper-soft text-ink",
        highlighted && "border-blood bg-paper text-ink shadow-soft",
        className
      )}
    >
      {children}
    </Comp>
  );
}

type ProofChipProps = {
  children: ReactNode;
  tone?: Tone;
  className?: string;
};

export function ProofChip({children, tone = "dark", className}: ProofChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border px-3 py-2 text-xs font-bold leading-5",
        tone === "dark"
          ? "border-paper/12 bg-paper/6 text-paper/72"
          : "border-ink/10 bg-ink/5 text-ink/70",
        className
      )}
    >
      {children}
    </span>
  );
}
