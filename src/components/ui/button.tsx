import * as React from "react";
import {Slot} from "@radix-ui/react-slot";
import {cva, type VariantProps} from "class-variance-authority";
import {cn} from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-center text-sm font-bold leading-5 transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-blood text-paper-soft shadow-soft hover:bg-blood-bright focus-visible:outline-lab-blue",
        secondary:
          "border border-paper/30 bg-paper/8 text-paper hover:border-paper/60 hover:bg-paper/12",
        dark:
          "bg-ink text-paper hover:bg-steel focus-visible:outline-lab-blue",
        ghost:
          "text-current hover:bg-current/8",
        paper:
          "bg-paper text-ink hover:bg-paper-soft focus-visible:outline-lab-blue"
      },
      size: {
        sm: "min-h-10 px-4 py-2 text-xs",
        md: "min-h-11 px-5 py-3",
        lg: "min-h-12 px-6 py-3.5 text-base"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({className, variant, size, asChild = false, ...props}, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({variant, size, className}))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export {buttonVariants};
