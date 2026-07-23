import { site, links } from "@/lib/site";
import { IconArrow, IconWhatsApp } from "./Icons";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-ink text-cream bg-grid"
    >
      {/* Resplandor decorativo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-gold/10 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-56 -left-40 h-[520px] w-[520px] rounded-full bg-ink-600/40 blur-[120px]"
      />

      <div className="container-x relative grid gap-14 pb-24 pt-36 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:pb-32 lg:pt-44">
        {/* Columna de texto */}
        <div className="max-w-2xl">
          <span className="eyebrow inline-flex items-center gap-2 rounded-full border border-gold/30 bg-ink-800/60 px-4 py-1.5 text-gold">
            Advisory financiero · Vivienda
          </span>

          <h1 className="mt-6 font-serif text-4xl leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.7rem]">
            El capital que tu proyecto de vivienda necesita,{" "}
            <span className="text-gold">bien estructurado.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/75">
            Acompaño a desarrolladores inmobiliarios en la estructuración y
            levantamiento de <strong className="text-cream">crédito puente
            para construcción</strong> y{" "}
            <strong className="text-cream">equity</strong>, para que edifiques
            con certeza financiera y en los mejores términos del mercado.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contacto"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 font-semibold text-ink transition-all hover:-translate-y-0.5 hover:bg-gold-light"
            >
              Agenda una consulta
              <IconArrow
                width={18}
                height={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href={links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/25 px-7 py-3.5 font-semibold text-cream transition-colors hover:border-gold hover:text-gold"
            >
              <IconWhatsApp width={18} height={18} />
              Escríbeme por WhatsApp
            </a>
          </div>

          <p className="mt-6 text-sm text-cream/50">
            Enfoque exclusivo en desarrollo de vivienda · Deuda &amp; equity ·{" "}
            {site.city}
          </p>
        </div>

        {/* Columna visual: tarjeta resumen */}
        <div className="relative">
          <div className="rounded-2xl border border-gold/20 bg-ink-800/70 p-7 shadow-lift backdrop-blur-sm">
            <p className="eyebrow text-gold">Estructura de capital</p>
            <p className="mt-2 font-serif text-2xl text-cream">
              Cómo se financia un proyecto de vivienda
            </p>

            {/* Barra apilada deuda/equity */}
            <div className="mt-7 overflow-hidden rounded-lg">
              <div className="flex h-4 w-full">
                <div className="h-full w-[65%] bg-gold" />
                <div className="h-full w-[35%] bg-ink-600" />
              </div>
            </div>
            <div className="mt-3 flex justify-between text-xs text-cream/60">
              <span className="flex items-center gap-1.5">
                <span className="inline-block h-2.5 w-2.5 rounded-sm bg-gold" />
                Crédito puente
              </span>
              <span className="flex items-center gap-1.5">
                <span className="inline-block h-2.5 w-2.5 rounded-sm bg-ink-600" />
                Equity
              </span>
            </div>

            <div className="mt-7 space-y-4 border-t border-cream/10 pt-6">
              {[
                { k: "Diagnóstico de apalancamiento", v: "Paso 1" },
                { k: "Paquete bancable", v: "Paso 2" },
                { k: "Levantamiento y cierre", v: "Paso 3" },
              ].map((row) => (
                <div
                  key={row.k}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-cream/80">{row.k}</span>
                  <span className="rounded-full bg-ink px-3 py-1 text-xs text-gold">
                    {row.v}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            aria-hidden
            className="absolute -right-4 -top-4 -z-10 h-full w-full rounded-2xl border border-gold/10"
          />
        </div>
      </div>
    </section>
  );
}
