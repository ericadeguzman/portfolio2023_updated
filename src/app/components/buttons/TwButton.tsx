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
const buttonVariants = cva(["rounded-md"], {
  variants: {
    variant: {
      primary: ["bg-[#1f2532] text-white"],
      secondary: [
        "border-[1px] border-neutral-300 hover:bg-neutral-100  text-[#333] dark:text-white",
      ],
    },
    size: {
      xs: ["text-sm p-1"],
      sm: ["text-sm p-2"],
      md: ["text-sm px-2 py-3"],
      lg: ["text-base px-4 pt-[14px] pb-4 "],
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "sm",
  },
});
