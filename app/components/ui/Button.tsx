import type { ReactNode, AnchorHTMLAttributes } from "react";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "filled" | "outline";
  children: ReactNode;
}

export function Button({
  variant = "filled",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-9 py-4 font-sans text-sm font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2 focus-visible:ring-offset-dark";

  const variants = {
    filled:
      "bg-gradient-to-r from-champagne-light via-champagne to-champagne-dark text-dark shadow-[0_4px_24px_rgba(201,151,62,0.35)] hover:shadow-[0_8px_40px_rgba(201,151,62,0.5)] hover:-translate-y-1 active:translate-y-0 active:shadow-[0_2px_12px_rgba(201,151,62,0.2)]",
    outline:
      "border border-champagne/40 text-champagne hover:border-champagne hover:bg-champagne/8 hover:-translate-y-1 active:translate-y-0 active:bg-champagne/12",
  };

  return (
    <a
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
