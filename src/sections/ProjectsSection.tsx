"use client";

import Image from "next/image";
import { Badge } from "@/components/Badge";
import { Container } from "@/components/Container";
import { MotionInView } from "@/components/MotionInView";
import { SectionHeading } from "@/components/SectionHeading";
import { profile, type Project } from "@/data/profile";

const DEFAULT_PROJECT_COVERS = [
  "/projects/cover-1.svg",
  "/projects/cover-2.svg",
  "/projects/cover-3.svg",
] as const;

export function ProjectsSection() {
  const projects = profile.projects as readonly Project[];

  return (
    <section id="projects" className="scroll-mt-24 py-16">
      <Container>
        <MotionInView>
          <SectionHeading
            eyebrow="Projects"
            title="My Projects"
            description="Here are a few projects I’ve worked on recently. Each one represents a unique challenge and learning experience."
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, idx) => {
              const coverSrc =
                p.image?.src ??
                DEFAULT_PROJECT_COVERS[idx % DEFAULT_PROJECT_COVERS.length];
              const coverAlt = p.image?.alt ?? `${p.name} project cover`;

              return (
                <article
                  key={p.name}
                  className="overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition will-change-transform hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="relative aspect-video w-full bg-black/2 dark:bg-white/4">
                    <Image
                      src={coverSrc}
                      alt={coverAlt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                      priority={idx < 3}
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-semibold">{p.name}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted">
                      {p.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <Badge
                          key={t}
                          className="border-violet-200 bg-violet-50 text-violet-700 dark:border-violet-400/25 dark:bg-violet-400/10 dark:text-violet-200"
                        >
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </MotionInView>
      </Container>
    </section>
  );
}


