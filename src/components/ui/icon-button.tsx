import * as React from "react";
import {cn} from "@/lib/utils";

type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  tone?: "dark" | "paper";
};

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({className, tone = "dark", ...props}, ref) => (
    <button
      ref={ref}
      className={cn(
        "grid size-11 place-items-center rounded-md border transition-all duration-300 ease-premium active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50",
        tone === "dark"
          ? "border-paper/20 text-paper backdrop-blur-md hover:bg-paper/10 hover:-translate-y-[1px] focus-visible:outline-lab-blue"
          : "border-ink/15 text-ink hover:bg-ink/6 hover:-translate-y-[1px] focus-visible:outline-lab-blue",
        className
      )}
      {...props}
    />
  )
);

IconButton.displayName = "IconButton";
