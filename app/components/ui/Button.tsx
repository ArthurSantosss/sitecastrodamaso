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
    "inline-flex items-center justify-center gap-2 rounded-sm px-8 py-3.5 font-sans text-sm font-medium tracking-wider uppercase transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2 focus-visible:ring-offset-dark";

  const variants = {
    filled:
      "bg-champagne text-dark shadow-[0_2px_16px_rgba(209,169,120,0.25)] hover:bg-champagne-light hover:shadow-[0_4px_24px_rgba(209,169,120,0.35)] active:bg-champagne-dark active:shadow-none hover:-translate-y-0.5 active:translate-y-0",
    outline:
      "border border-champagne/40 text-champagne hover:border-champagne hover:bg-champagne/5 active:bg-champagne/10 hover:-translate-y-0.5 active:translate-y-0",
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
