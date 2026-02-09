"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

type CopyToClipboardButtonProps = {
  value: string;
  label?: string;
  className?: string;
};

const RESET_AFTER_MS = 1500;

export function CopyToClipboardButton({
  value,
  label = "Copy",
  className,
}: CopyToClipboardButtonProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = window.setTimeout(() => setCopied(false), RESET_AFTER_MS);
    return () => window.clearTimeout(t);
  }, [copied]);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
    } catch {
      // If clipboard is blocked, we silently no-op.
    }
  }

  return (
    <button
      type="button"
      onClick={onCopy}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-4 py-2 text-sm font-semibold text-[var(--foreground)] transition-colors hover:bg-black/[0.04] dark:hover:bg-white/[0.06]",
        className,
      )}
      aria-label={copied ? "Copied" : label}
    >
      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      {copied ? "Copied" : label}
    </button>
  );
}


