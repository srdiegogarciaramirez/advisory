import Link from "next/link";
import { IconArrow } from "./Icons";
import Reveal from "./Reveal";

export function ArrowLink({
  href,
  children,
  className = "",
  tone = "ink",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  tone?: "ink" | "green" | "paper";
}) {
  const color =
    tone === "green"
      ? "text-green hover:text-forest"
      : tone === "paper"
        ? "text-paper hover:text-sage"
        : "text-ink hover:text-green";
  const external = href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel");

  const inner = (
    <>
      {children}
      <IconArrow width={17} height={17} />
    </>
  );

  if (external) {
    return (
      <a href={href} className={`arrow-link ${color} ${className}`}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={`arrow-link ${color} ${className}`}>
      {inner}
    </Link>
  );
}

export function SectionHeading({
  label,
  title,
  intro,
  align = "left",
  className = "",
}: {
  label?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-3xl"} ${className}`}
    >
      {label ? (
        <div className={`flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}>
          <span className="h-px w-8 bg-line-2" />
          <p className="label text-green">{label}</p>
        </div>
      ) : null}
      <h2 className="mt-5 font-serif text-[2rem] leading-[1.12] tracking-tight text-ink sm:text-[2.6rem]">
        {title}
      </h2>
      {intro ? (
        <p className="mt-5 text-lg leading-relaxed text-muted">{intro}</p>
      ) : null}
    </Reveal>
  );
}

export function StatBand({
  stats,
  tone = "paper",
}: {
  stats: readonly { value: string; label: string }[];
  tone?: "paper" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <div
      className={`grid grid-cols-2 gap-px md:grid-cols-4 ${
        dark ? "bg-paper/10" : "bg-line"
      }`}
    >
      {stats.map((s, i) => (
        <Reveal
          key={s.label}
          delay={i * 80}
          className={dark ? "bg-ink" : "bg-paper"}
        >
          <div className="px-6 py-10">
            <p
              className={`tnum font-serif text-4xl tracking-tight md:text-5xl ${
                dark ? "text-paper" : "text-forest"
              }`}
            >
              {s.value}
            </p>
            <p className={`mt-2 text-sm ${dark ? "text-paper/60" : "text-muted"}`}>
              {s.label}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
