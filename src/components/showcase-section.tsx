import Image from "next/image";

import type { ShowcaseItem } from "@/config/site";

type ShowcaseSectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  items: readonly ShowcaseItem[];
  priorityFirst?: boolean;
};

export function ShowcaseSection({
  id,
  title,
  subtitle,
  items,
  priorityFirst = false,
}: ShowcaseSectionProps) {
  return (
    <section aria-labelledby={`${id}-heading`} className="flex flex-col gap-16">
      <div className="mx-auto max-w-3xl text-center">
        <h2
          id={`${id}-heading`}
          className="text-brand text-4xl font-bold tracking-tight uppercase sm:text-5xl"
        >
          {title}
        </h2>
        {subtitle ? (
          <p className="text-muted mt-4 text-lg">{subtitle}</p>
        ) : null}
      </div>

      <div className="flex flex-col gap-24 sm:gap-32">
        {items.map((item, index) => (
          <article
            key={item.image}
            aria-labelledby={`${id}-${index}`}
            className="flex flex-col gap-8"
          >
            <div className="max-w-3xl">
              <p className="text-brand text-sm font-semibold tracking-widest uppercase">
                {String(index + 1).padStart(2, "0")} · {item.eyebrow}
              </p>
              <h3
                id={`${id}-${index}`}
                className="mt-2 text-3xl font-bold tracking-tight uppercase sm:text-4xl"
              >
                {item.title}
              </h3>
              <p className="text-muted mt-4 text-lg">{item.description}</p>
            </div>
            <Image
              src={item.image}
              alt={item.alt}
              width={1672}
              height={941}
              sizes="(min-width: 1152px) 1120px, 100vw"
              priority={priorityFirst && index === 0}
              className="shadow-foreground/10 ring-foreground/5 w-full rounded-2xl shadow-xl ring-1"
            />
          </article>
        ))}
      </div>
    </section>
  );
}
