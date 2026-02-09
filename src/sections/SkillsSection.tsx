"use client";

import { useMemo, useState } from "react";
import { X } from "lucide-react";
import { Container } from "@/components/Container";
import { MotionInView } from "@/components/MotionInView";
import { SectionHeading } from "@/components/SectionHeading";
import { Badge } from "@/components/Badge";
import { profile } from "@/data/profile";

export function SkillsSection() {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();

  const groups = useMemo(() => {
    if (!q) return profile.skills;
    return profile.skills
      .map((g) => ({
        ...g,
        items: g.items.filter((s) => s.toLowerCase().includes(q)),
      }))
      .filter((g) => g.items.length > 0);
  }, [q]);

  return (
    <section id="skills" className="scroll-mt-24 py-16">
      <Container>
        <MotionInView>
          <SectionHeading
            eyebrow="Skills"
            title="A stack I’m productive in"
            description="Search to quickly filter skills. This makes the section interactive and keeps it readable even as you add more."
          />

          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative max-w-md">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search (e.g. Next.js, Docker, Prisma)"
                className="w-full rounded-2xl border border-[var(--border)] bg-transparent px-4 py-3 pr-10 text-sm outline-none placeholder:text-[var(--muted)] focus-visible:outline-none"
                aria-label="Search skills"
              />
              {query ? (
                <button
                  type="button"
                  aria-label="Clear search"
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 text-[var(--muted)] hover:bg-black/[0.04] hover:text-[var(--foreground)] dark:hover:bg-white/[0.06]"
                  onClick={() => setQuery("")}
                >
                  <X className="h-4 w-4" />
                </button>
              ) : null}
            </div>

            <p className="text-sm text-[var(--muted)]">
              Showing{" "}
              <span className="font-semibold text-[var(--foreground)]">
                {groups.reduce((acc, g) => acc + g.items.length, 0)}
              </span>{" "}
              skills
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {groups.map((g) => (
              <div
                key={g.group}
                className="rounded-2xl border border-[var(--border)] p-5"
              >
                <p className="text-sm font-semibold">{g.group}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <Badge key={s}>{s}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </MotionInView>
      </Container>
    </section>
  );
}


