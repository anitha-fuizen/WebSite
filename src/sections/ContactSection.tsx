"use client";

import { useMemo, useRef, useState } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { Container } from "@/components/Container";
import { MotionInView } from "@/components/MotionInView";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

const CONTACT_SOCIAL_LABELS = ["LinkedIn", "GitHub"] as const;
type ContactSocialLabel = (typeof CONTACT_SOCIAL_LABELS)[number];

type FormState = {
  name: string;
  email: string;
  message: string;
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateForm(form: FormState): FieldErrors {
  const errors: FieldErrors = {};
  if (!form.name.trim()) errors.name = "Please enter your name.";
  if (!isValidEmail(form.email.trim())) errors.email = "Please enter a valid email.";
  if (form.message.trim().length < 10)
    errors.message = "Please write a message (at least 10 characters).";
  return errors;
}

export function ContactSection() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FieldErrors>({});

  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);

  const contactSocials = useMemo(() => {
    const allowed = new Set<string>(CONTACT_SOCIAL_LABELS);
    return profile.socials.primary.filter((link) => allowed.has(link.label));
  }, []);

  const mailtoHref = useMemo(() => {
    const subject = `Portfolio inquiry from ${form.name || "your website"}`;
    const body = [
      `Hi ${profile.fullName},`,
      "",
      form.message || "I’d like to connect.",
      "",
      "From:",
      form.name,
      form.email,
    ].join("\n");

    return `mailto:${encodeURIComponent(profile.email)}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }, [form.email, form.message, form.name]);

  function onChange<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const nextErrors = validateForm(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      if (nextErrors.name) nameRef.current?.focus();
      else if (nextErrors.email) emailRef.current?.focus();
      else if (nextErrors.message) messageRef.current?.focus();
      return;
    }

    window.location.href = mailtoHref;
  }

  return (
    <section id="contact" className="scroll-mt-24 py-16">
      <Container>
        <MotionInView>
          <SectionHeading
            eyebrow="Contact"
            title="Let’s build something great"
            description={
              "Have a question or want to collaborate? Send a message and I’ll get back to you."
            }
          />

          <div className="overflow-hidden rounded-3xl border border-border bg-black/2 shadow-sm dark:bg-white/3">
            <div className="grid md:grid-cols-5">
              <div className="border-b border-border bg-background p-6 md:col-span-2 md:border-b-0 md:border-r">
                <p className="text-sm font-semibold">Contact options</p>
                <p className="mt-1 text-sm text-muted">
                  The fastest way to reach me is email.
                </p>

                <div className="mt-5 rounded-2xl border border-border bg-black/2 p-4 dark:bg-white/3">
                  <div className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-4 w-4 text-muted" />
                    <div className="min-w-0">
                      <p className="text-xs font-semibold tracking-wider text-muted uppercase">
                        Email
                      </p>
                      <a
                        href={`mailto:${profile.email}`}
                        className="mt-1 block truncate text-sm font-semibold text-foreground"
                      >
                        {profile.email}
                      </a>
                    </div>
                  </div>
                </div>

                {contactSocials.map((link) => {
                  const label = link.label as ContactSocialLabel;
                  const icon =
                    label === "LinkedIn" ? (
                      <Linkedin className="mt-0.5 h-4 w-4 text-muted" aria-hidden="true" />
                    ) : label === "GitHub" ? (
                      <Github className="mt-0.5 h-4 w-4 text-muted" aria-hidden="true" />
                    ) : null;

                  return (
                    <div
                      key={link.href}
                      className="mt-5 rounded-2xl border border-border bg-black/2 p-4 dark:bg-white/3"
                    >
                      <div className="flex items-start gap-3">
                        {icon}
                        <div className="min-w-0">
                          <p className="text-xs font-semibold tracking-wider text-muted uppercase">
                            {link.label}
                          </p>
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-1 block truncate text-sm font-semibold text-foreground"
                          >
                            {link.href}
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}

               
                <p className="mt-6 text-xs text-muted">
                  Typical response time: 1–2 business days.
                </p>
              </div>

              <form onSubmit={onSubmit} className="p-6 md:col-span-3">
                <div className="mb-4">
                  <p className="text-sm font-semibold">Send a message</p>
                  <p className="mt-1 text-sm text-muted">
                    This opens your email app with a pre-filled draft.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-xs font-semibold tracking-wider text-muted uppercase">
                      Name
                    </span>
                    <input
                      ref={nameRef}
                      value={form.name}
                      onChange={(e) => onChange("name", e.target.value)}
                      className={cn(
                        "mt-1 w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none placeholder:text-muted focus-visible:ring-2 focus-visible:ring-violet-600/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                        errors.name ? "border-red-500" : "border-border",
                      )}
                      placeholder="Your name"
                      autoComplete="name"
                      aria-invalid={Boolean(errors.name)}
                    />
                    {errors.name ? (
                      <p className="mt-2 text-xs font-medium text-red-600">
                        {errors.name}
                      </p>
                    ) : null}
                  </label>

                  <label className="block">
                    <span className="text-xs font-semibold tracking-wider text-muted uppercase">
                      Email
                    </span>
                    <input
                      ref={emailRef}
                      value={form.email}
                      onChange={(e) => onChange("email", e.target.value)}
                      className={cn(
                        "mt-1 w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none placeholder:text-muted focus-visible:ring-2 focus-visible:ring-violet-600/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                        errors.email ? "border-red-500" : "border-border",
                      )}
                      placeholder="you@example.com"
                      autoComplete="email"
                      inputMode="email"
                      aria-invalid={Boolean(errors.email)}
                    />
                    {errors.email ? (
                      <p className="mt-2 text-xs font-medium text-red-600">
                        {errors.email}
                      </p>
                    ) : null}
                  </label>
                </div>

                <label className="mt-4 block">
                  <span className="text-xs font-semibold tracking-wider text-muted uppercase">
                    Message
                  </span>
                  <textarea
                    ref={messageRef}
                    value={form.message}
                    onChange={(e) => onChange("message", e.target.value)}
                    className={cn(
                      "mt-1 min-h-40 w-full resize-y rounded-xl border bg-background px-4 py-3 text-sm outline-none placeholder:text-muted focus-visible:ring-2 focus-visible:ring-violet-600/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                      errors.message ? "border-red-500" : "border-border",
                    )}
                    placeholder="What would you like to talk about?"
                    aria-invalid={Boolean(errors.message)}
                  />
                  <div className="mt-2 flex items-center justify-between gap-4">
                    <p className="text-xs text-muted">
                      Aim for a short summary of what you need help with.
                    </p>
                    <p className="text-xs text-muted">
                      {form.message.trim().length}/10+
                    </p>
                  </div>
                  {errors.message ? (
                    <p className="mt-2 text-xs font-medium text-red-600">
                      {errors.message}
                    </p>
                  ) : null}
                </label>

                <div className="mt-6">
                  <Button type="submit" className="w-full">
                    <Send className="h-4 w-4" />
                    Open email draft
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </MotionInView>
      </Container>
    </section>
  );
}


