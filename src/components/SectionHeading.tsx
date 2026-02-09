import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-8 space-y-2">
      {eyebrow ? (
        <p className="text-xs font-semibold tracking-wider text-muted uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <div className="max-w-2xl text-sm leading-6 text-muted sm:text-base">
          {description}
        </div>
      ) : null}
    </div>
  );
}


