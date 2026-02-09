"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { profile } from "@/data/profile";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useActiveSection } from "@/hooks/useActiveSection";

type NavItem = (typeof profile.nav)[number];

function getId(href: NavItem["href"]) {
  return href.replace(/^#/, "");
}

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1]?.[0] ?? "" : "";
  return (first + last).toUpperCase() || "AY";
}

export function Navbar() {
  const sectionIds = profile.nav.map((n) => getId(n.href));
  const { activeId } = useActiveSection({ sectionIds });
  const [open, setOpen] = useState(false);
  const initials = getInitials(profile.fullName);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-(--background)/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="#top"
          className="flex items-center gap-3 font-semibold tracking-tight text-foreground"
          onClick={() => setOpen(false)}
        >
          <span
            aria-hidden="true"
            className="grid h-9 w-9 place-items-center rounded-full border border-border bg-black/5 text-xs font-bold tracking-wide text-foreground dark:bg-white/10"
          >
            {initials}
          </span>
          {profile.fullName}
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {profile.nav.map((item) => {
            const id = getId(item.href);
            const isActive = activeId === id;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "location" : undefined}
                className={cn(
                  "rounded-full px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-black/6 text-foreground dark:bg-white/8"
                    : "text-muted hover:bg-black/4 hover:text-foreground dark:hover:bg-white/6",
                )}
              >
                {item.label}
              </Link>
            );
          })}
         
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] hover:bg-black/[0.04] dark:hover:bg-white/[0.06]"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="md:hidden">
          <div className="border-t border-border bg-background">
            <div className="mx-auto w-full max-w-5xl px-4 py-3 sm:px-6 lg:px-8">
              <div className="flex flex-col gap-1">
                {profile.nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-xl px-3 py-2 text-sm font-medium text-foreground hover:bg-black/4 dark:hover:bg-white/[0.06]"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href={profile.resume.href}
                  download
                  className="rounded-xl px-3 py-2 text-sm font-semibold text-foreground hover:bg-black/4 dark:hover:bg-white/[0.06]"
                  onClick={() => setOpen(false)}
                >
                  {profile.resume.label}
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}


