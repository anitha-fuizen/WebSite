 "use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/Container";
import { MotionInView } from "@/components/MotionInView";
import { SectionHeading } from "@/components/SectionHeading";
import { profile } from "@/data/profile";

const ABOUT_PREVIEW_PARAGRAPH_COUNT = 2;

export function AboutSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const paragraphs = useMemo(() => profile.about.paragraphs, []);
  const visibleParagraphs = isExpanded
    ? paragraphs
    : paragraphs.slice(0, ABOUT_PREVIEW_PARAGRAPH_COUNT);
  const canToggle = paragraphs.length > ABOUT_PREVIEW_PARAGRAPH_COUNT;

  return (
    <section id="about" className="scroll-mt-24 py-16">
      <Container>
        <MotionInView>
          <SectionHeading
            eyebrow="About"
            title="Building scalable apps with clean UX"
            description={
              <>
                I build modern web apps and AI features that feel fast, clear, and
                reliable—backed by scalable systems and clean engineering.
              </>
            }
          />

          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2 space-y-4 text-sm leading-7 text-muted sm:text-base">
              {visibleParagraphs.map((text) => (
                <p key={text}>{text}</p>
              ))}

              {canToggle ? (
                <div>
                  <button
                    type="button"
                    aria-expanded={isExpanded}
                    onClick={() => setIsExpanded((v) => !v)}
                    className="mt-1 cursor-pointer text-sm font-semibold text-foreground hover:text-violet-600"
                  >
                    {isExpanded ? "Show less" : "Show more"}
                  </button>
                </div>
              ) : null}
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-border p-5">
                <p className="text-xs font-semibold tracking-wider text-muted uppercase">
                  Location
                </p>
                <p className="mt-2 text-sm font-semibold">{profile.location}</p>
              </div>
              <div className="rounded-2xl border border-border p-5">
                <p className="text-xs font-semibold tracking-wider text-muted uppercase">
                  Links
                </p>
                <div className="mt-2 flex flex-col gap-2">
                  {profile.socials.primary.map((s) => (
                    <a
                      key={s.href}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-foreground"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </MotionInView>
      </Container>
    </section>
  );
}


