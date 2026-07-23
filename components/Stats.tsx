import { site } from "@/lib/site";
import Reveal from "./Reveal";

export default function Stats() {
  return (
    <section className="border-y border-sand-dark bg-cream">
      <div className="container-x grid grid-cols-2 gap-8 py-12 md:grid-cols-4">
        {site.stats.map((stat, i) => (
          <Reveal
            key={stat.label}
            delay={i * 80}
            className="text-center md:text-left"
          >
            <p className="font-serif text-3xl text-ink md:text-4xl">
              {stat.value}
            </p>
            <p className="mt-1 text-sm text-muted">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
