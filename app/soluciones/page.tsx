import type { Metadata } from "next";
import { solutions, process } from "@/lib/site";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { ArrowLink } from "@/components/UI";
import { IconCheck } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Soluciones de Capital",
  description:
    "Crédito puente, deuda mezzanine, equity preferente y coinversión, sponsor equity, recapitalización y desinversión para desarrollo de vivienda.",
};

export default function SolucionesPage() {
  return (
    <>
      <PageHero
        label="Soluciones de Capital"
        title={<>La estructura completa de financiamiento para tu desarrollo</>}
        intro="Cada proyecto pide una combinación distinta de deuda y equity. Estas son las palancas de capital que estructuramos y levantamos para desarrolladores de vivienda."
      />

      {/* Índice */}
      <section className="border-b border-line bg-paper-2/50">
        <div className="container-x grid grid-cols-2 gap-px border-x border-line bg-line sm:grid-cols-3 lg:grid-cols-6">
          {solutions.map((s, i) => (
            <a key={s.slug} href={`#${s.slug}`} className="group bg-paper px-5 py-6 transition-colors hover:bg-white">
              <span className="tnum text-sm text-sage">{String(i + 1).padStart(2, "0")}</span>
              <p className="mt-2 text-sm font-medium leading-snug text-ink">{s.title}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Detalle de cada solución */}
      <section className="bg-paper">
        <div className="container-x divide-y divide-line">
          {solutions.map((s, i) => (
            <Reveal key={s.slug}>
              <article id={s.slug} className="scroll-mt-24 grid gap-10 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
                <div>
                  <div className="flex items-center gap-4">
                    <span className="tnum font-serif text-4xl text-line-2">{String(i + 1).padStart(2, "0")}</span>
                    <span className="label text-green">{s.kicker}</span>
                  </div>
                  <h2 className="mt-5 max-w-md font-serif text-[1.9rem] leading-tight tracking-tight text-ink">
                    {s.title}
                  </h2>
                  <p className="mt-4 max-w-md leading-relaxed text-muted">{s.detail}</p>
                </div>
                <div className="lg:pt-2">
                  <p className="label text-muted">Qué incluye</p>
                  <ul className="mt-5 space-y-4 border-t border-line pt-6">
                    {s.points.map((point) => (
                      <li key={point} className="flex gap-4 text-ink">
                        <span className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-forest/10 text-forest">
                          <IconCheck width={13} height={13} />
                        </span>
                        <span className="text-[0.98rem]">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Proceso */}
      <section className="border-t border-line bg-ink py-24 text-paper lg:py-32">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-sage/60" />
              <p className="label text-sage">Cómo trabajamos</p>
            </div>
            <h2 className="mt-5 font-serif text-[2rem] leading-tight tracking-tight sm:text-[2.6rem]">
              Un mandato, cinco etapas
            </h2>
          </Reveal>
          <ol className="mt-14 grid gap-px border border-paper/15 bg-paper/15 md:grid-cols-5">
            {process.map((step, i) => (
              <Reveal key={step.title} delay={i * 80} className="bg-ink">
                <li className="h-full p-7">
                  <span className="tnum font-serif text-3xl text-sage/50">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-4 font-serif text-lg text-paper">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-paper/60">{step.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
          <div className="mt-12">
            <ArrowLink href="/contacto" tone="paper">Estructuremos tu capital</ArrowLink>
          </div>
        </div>
      </section>
    </>
  );
}
