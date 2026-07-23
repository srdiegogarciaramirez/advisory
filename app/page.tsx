import Link from "next/link";
import { site, solutions, transactions, pillars, sectors } from "@/lib/site";
import Media from "@/components/Media";
import Reveal from "@/components/Reveal";
import { ArrowLink, SectionHeading, StatBand } from "@/components/UI";
import { IconArrow } from "@/components/Icons";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: site.brand,
    description: site.seoDescription,
    areaServed: "MX",
    email: site.email,
    telephone: `+${site.phoneRaw}`,
    url: site.domain,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="border-b border-line bg-paper pt-[76px]">
        <div className="container-x grid gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-line-2" />
              <p className="label text-green">Asesoría de capital · Vivienda</p>
            </div>
            <h1 className="mt-7 font-serif text-[2.6rem] leading-[1.05] tracking-tight text-ink sm:text-6xl">
              Estructuramos y levantamos el capital que{" "}
              <span className="italic text-forest">construye vivienda.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">
              Somos una firma boutique de asesoría de capital inmobiliario.
              Acompañamos a desarrolladores de vivienda en la estructuración y
              levantamiento de crédito puente, deuda y equity —de la originación
              al cierre.
            </p>
            <div className="mt-9 flex flex-col gap-x-8 gap-y-4 sm:flex-row sm:items-center">
              <Link
                href="/soluciones"
                className="arrow-link justify-center border border-ink bg-ink px-6 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-transparent hover:text-ink sm:justify-start"
              >
                Ver soluciones de capital
                <IconArrow width={17} height={17} />
              </Link>
              <ArrowLink href="/contacto" tone="ink" className="justify-center text-sm sm:justify-start">
                Hablar con la firma
              </ArrowLink>
            </div>
          </Reveal>

          <Reveal delay={120} className="relative">
            <Media variant="tower" className="aspect-[4/5] w-full" tag priority />
            <div aria-hidden className="absolute -bottom-4 -left-4 -z-10 h-full w-full border border-line-2" />
          </Reveal>
        </div>
      </section>

      {/* ── TRACK RECORD ─────────────────────────────────── */}
      <section className="border-b border-line bg-paper">
        <div className="container-x py-6">
          <Reveal>
            <p className="label text-center text-muted">Un historial que respalda cada operación</p>
          </Reveal>
        </div>
        <div className="border-t border-line">
          <div className="container-x">
            <StatBand stats={site.stats} />
          </div>
        </div>
      </section>

      {/* ── LA FIRMA ─────────────────────────────────────── */}
      <section className="border-b border-line bg-paper py-24 lg:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Reveal className="relative order-2 lg:order-1">
            <Media variant="facade" className="aspect-[5/6] w-full" tag />
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionHeading
              label="La Firma"
              title="Un aliado independiente que habla el idioma del capital"
              intro="No colocamos un producto propio: buscamos en todo el mercado la estructura que más conviene a tu proyecto. Trabajamos exclusivamente desarrollo de vivienda, con la disciplina de una firma institucional y la cercanía de un socio."
            />
            <div className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2">
              {pillars.map((p, i) => (
                <Reveal key={p.title} delay={i * 90}>
                  <div className="border-t border-line pt-4">
                    <h3 className="font-serif text-xl text-ink">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="mt-10">
              <ArrowLink href="/firma" tone="green">Conoce a la firma</ArrowLink>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOLUCIONES ───────────────────────────────────── */}
      <section className="border-b border-line bg-paper-2/50 py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading
            label="Soluciones de Capital"
            title="Toda la estructura de financiamiento, bajo un mismo techo"
            intro="Combinamos deuda y equity según lo que cada desarrollo necesita."
          />
          <div className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 80} className="bg-paper">
                <Link href="/soluciones" className="group flex h-full flex-col p-8 transition-colors hover:bg-white">
                  <p className="label text-green">{s.kicker}</p>
                  <h3 className="mt-4 font-serif text-xl leading-snug text-ink">{s.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{s.summary}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink">
                    Ver detalle
                    <IconArrow width={16} height={16} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRANSACCIONES (oscuro) ───────────────────────── */}
      <section className="border-b border-paper/10 bg-ink py-24 text-paper lg:py-32">
        <div className="container-x">
          <Reveal className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-sage/60" />
              <p className="label text-sage">Transacciones</p>
            </div>
            <h2 className="mt-5 font-serif text-[2rem] leading-[1.12] tracking-tight sm:text-[2.6rem]">
              Operaciones representativas
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-paper/70">
              Una muestra del tipo de estructuras que originamos, colocamos y
              cerramos para desarrolladores de vivienda.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-px border border-paper/15 bg-paper/15 md:grid-cols-3">
            {transactions.slice(0, 3).map((t, i) => (
              <Reveal key={i} delay={i * 90} className="bg-ink">
                <div className="p-8">
                  <p className="label text-sage">{t.capital}</p>
                  <p className="tnum mt-4 font-serif text-3xl text-paper">{t.amount}</p>
                  <div className="mt-6 space-y-1.5 text-sm text-paper/65">
                    <p>{t.location}</p>
                    <p>{t.units} · {t.segment}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10">
            <ArrowLink href="/transacciones" tone="paper">Ver todas las transacciones</ArrowLink>
          </div>
        </div>
      </section>

      {/* ── SEGMENTOS ────────────────────────────────────── */}
      <section className="bg-paper py-24 lg:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <SectionHeading
              label="Segmentos"
              title="Especialistas en desarrollo habitacional"
              intro="Estructuramos capital a lo largo del espectro de la vivienda."
            />
            <ul className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-2">
              {sectors.map((s, i) => (
                <Reveal key={s} delay={(i % 2) * 80} className="bg-paper">
                  <li className="flex items-center gap-3 px-6 py-5 text-ink">
                    <span className="tnum text-sm text-sage">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-[0.95rem]">{s}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
          <Reveal delay={120}>
            <Media variant="aerial" className="aspect-square w-full" tag />
          </Reveal>
        </div>
      </section>
    </>
  );
}
