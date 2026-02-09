import { Badge } from "@/components/Badge";
import { Container } from "@/components/Container";
import { LinkButton } from "@/components/LinkButton";
import { MotionInView } from "@/components/MotionInView";
import { profile } from "@/data/profile";

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden pt-14 pb-20 sm:pt-18">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [background:radial-gradient(1200px_circle_at_20%_-10%,rgba(59,130,246,0.20),transparent_55%),radial-gradient(900px_circle_at_100%_10%,rgba(236,72,153,0.14),transparent_48%)]"
      />

      <Container className="relative">
        <MotionInView>
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-2">
              <Badge>{profile.location}</Badge>
              <Badge>Open to opportunities</Badge>
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                {profile.fullName}
              </h1>
              <p className="text-lg font-medium text-muted sm:text-xl">
                {profile.headline}
              </p>
              <p className="max-w-2xl text-sm leading-7 text-muted sm:text-base">
                {profile.summary}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <LinkButton href={profile.resume.href} variant="secondary" download>
                Download resume
              </LinkButton>
              <LinkButton href="#contact" variant="secondary">
                Contact
              </LinkButton>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-black/2 p-5 dark:bg-white/4">
                <p className="text-xs font-semibold tracking-wider text-muted uppercase">
                  Focus
                </p>
                <p className="mt-2 text-sm text-foreground">
                  Next.js • React • Node.js • PostgreSQL/Prisma • MongoDB • GenAI
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-black/2 p-5 dark:bg-white/4">
                <p className="text-xs font-semibold tracking-wider text-muted uppercase">
                  Certifications
                </p>
                <p className="mt-2 text-sm text-foreground">
                  {profile.certifications.join(" • ")}
                </p>
              </div>
            </div>
          </div>
        </MotionInView>
      </Container>
    </section>
  );
}


