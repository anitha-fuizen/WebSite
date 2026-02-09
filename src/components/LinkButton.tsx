import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary";

type LinkButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: Variant;
  external?: boolean;
  download?: boolean | string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors";

const variants: Record<Variant, string> = {
  primary:
    "bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200",
  secondary:
    "border border-[var(--border)] bg-transparent text-[var(--foreground)] hover:bg-black/[0.04] dark:hover:bg-white/[0.06]",
};

export function LinkButton({
  href,
  children,
  className,
  variant = "primary",
  external = false,
  download,
}: LinkButtonProps) {
  const rel = external ? "noopener noreferrer" : undefined;
  const target = external ? "_blank" : undefined;

  if (external || download) {
    return (
      <a
        href={href}
        rel={rel}
        target={target}
        download={download}
        className={cn(base, variants[variant], className)}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      rel={rel}
      target={target}
      className={cn(base, variants[variant], className)}
    >
      {children}
    </Link>
  );
}


