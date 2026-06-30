import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark" | "glass";
  className?: string;
  type?: "button" | "submit";
};

const variants = {
  primary: "bg-gradient-to-r from-orange-500 to-amber-300 text-ink shadow-[0_18px_45px_rgba(251,146,60,0.28)] hover:shadow-[0_22px_65px_rgba(251,146,60,0.42)]",
  secondary: "border border-white/60 bg-white text-ink hover:bg-orange-50",
  dark: "bg-ink text-white hover:bg-navy",
  glass: "border border-white/18 bg-white/10 text-white backdrop-blur hover:bg-white/16"
};

export function Button({ href, children, variant = "primary", className = "", type = "button" }: Props) {
  const classes = `inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl px-5 py-3 text-center text-sm font-extrabold leading-none transition duration-200 hover:-translate-y-1 active:translate-y-0 ${variants[variant]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
