import { profile } from "@/data/profile";
import { Container } from "@/components/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] py-10">
      <Container className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-[var(--muted)]">
          © {year} {profile.fullName}. All rights reserved.
        </p>
        <div className="flex flex-wrap gap-4">
          {profile.socials.primary.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}


