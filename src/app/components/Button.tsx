import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../util/cn";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

export default function TwButton({
  children,
  className,
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <button
      id="TwButton"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      <span className="flex row justify-between items-center gap-2">
        {children}
      </span>
    </button>
  );
}
const buttonVariants = cva(["rounded-md  "], {
  variants: {
    variant: {
      primary: [
        "bg-skin-primary hover:bg-skin-secondary text-skin-secondary hover:text-skin-primary",
      ],
      secondary: [
        "bg-skin-secondary hover:bg-skin-primary hover:text-skin-secondary text-skin-primary focus:outline-neutral-400",
      ],
    },
    size: {
      xs: ["text-sm p-2"],
      sm: ["text-sm p-2"],
      md: [],
      lg: ["text-base px-4 pt-[14px] pb-4 "],
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "sm",
  },
});
