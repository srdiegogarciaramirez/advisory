import Reveal from "./Reveal";

export default function PageHero({
  label,
  title,
  intro,
}: {
  label: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
}) {
  return (
    <section className="border-b border-line bg-paper pt-[76px]">
      <div className="container-x py-16 lg:py-24">
        <Reveal className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-line-2" />
            <p className="label text-green">{label}</p>
          </div>
          <h1 className="mt-6 font-serif text-[2.6rem] leading-[1.06] tracking-tight text-ink sm:text-6xl">
            {title}
          </h1>
          {intro ? (
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted">{intro}</p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
