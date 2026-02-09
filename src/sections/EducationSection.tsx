import { Container } from "@/components/Container";
import { MotionInView } from "@/components/MotionInView";
import { SectionHeading } from "@/components/SectionHeading";
import { profile, type EducationItem } from "@/data/profile";

export function EducationSection() {
  const items = profile.education as readonly EducationItem[];

  return (
    <section id="education" className="scroll-mt-24 py-16">
      <Container>
        <MotionInView>
          <SectionHeading
            eyebrow="Education"
            title="Academic foundation"
            description="Degrees, coursework, and certifications that support my work."
          />

          {items.length === 0 ? (
            <div className="rounded-2xl border border-[var(--border)] p-6 text-sm text-[var(--muted)]">
              Add your education entries in{" "}
              <span className="font-semibold text-[var(--foreground)]">
                src/data/profile.ts
              </span>
              .
            </div>
          ) : (
            <ol className="space-y-8">
              {items.map((e) => (
                <li
                  key={`${e.school}-${e.degree}-${e.start}-${e.end}`}
                  className="grid grid-cols-[24px_1fr] gap-3 md:grid-cols-[180px_24px_1fr] md:gap-8"
                >
                  <div className="col-start-2 md:col-start-1">
                    <p className="text-xs font-semibold text-[var(--muted)]">
                      {e.start} — {e.end}
                    </p>
                    {e.location ? (
                      <p className="mt-1 text-xs text-[var(--muted)]">
                        {e.location}
                      </p>
                    ) : null}
                  </div>

                  <div className="col-start-1 row-start-1 row-span-2 flex justify-center md:col-start-2 md:row-span-1">
                    <div className="relative flex w-6 justify-center">
                      <span className="absolute bottom-0 top-0 w-px bg-[var(--border)]" />
                      <span className="relative mt-1.5 h-3 w-3 rounded-full bg-violet-600 ring-4 ring-[var(--background)]" />
                    </div>
                  </div>

                  <div className="col-start-2 md:col-start-3">
                    <div className="rounded-2xl border border-[var(--border)] p-6">
                      <p className="text-sm font-semibold">{e.degree}</p>
                      <p className="mt-1 text-sm text-[var(--muted)]">
                        {e.school}
                      </p>
                      {e.details?.length ? (
                        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-[var(--muted)]">
                          {e.details.map((d) => (
                            <li key={d}>{d}</li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          )}
        </MotionInView>
      </Container>
    </section>
  );
}


