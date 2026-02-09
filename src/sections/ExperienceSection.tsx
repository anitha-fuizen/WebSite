import { Container } from "@/components/Container";
import { MotionInView } from "@/components/MotionInView";
import { SectionHeading } from "@/components/SectionHeading";
import { profile } from "@/data/profile";

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24 py-16">
      <Container>
        <MotionInView>
          <SectionHeading
            eyebrow="Experience"
            title="Where I’ve delivered impact"
            description="Roles and outcomes from recent work."
          />

          <ol className="space-y-8">
            {profile.experience.map((e) => (
              <li
                key={`${e.company}-${e.role}`}
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
                    <p className="text-sm font-semibold">{e.role}</p>
                    <p className="mt-1 text-sm text-[var(--muted)]">{e.company}</p>

                    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-[var(--muted)]">
                      {e.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </MotionInView>
      </Container>
    </section>
  );
}


