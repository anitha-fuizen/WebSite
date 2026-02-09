import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[var(--border)] bg-black/[0.03] px-3 py-1 text-xs font-medium text-[var(--foreground)] dark:bg-white/[0.05]",
        className,
      )}
    >
      {children}
    </span>
  );
}


