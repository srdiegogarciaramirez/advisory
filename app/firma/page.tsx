import type { Metadata } from "next";
import { site, pillars, process } from "@/lib/site";
import PageHero from "@/components/PageHero";
import Media from "@/components/Media";
import Reveal from "@/components/Reveal";
import { StatBand, ArrowLink } from "@/components/UI";

export const metadata: Metadata = {
  title: "La Firma",
  description:
    "Firma boutique e independiente de asesoría de capital inmobiliario, especializada en desarrollo de vivienda.",
};

export default function FirmaPage() {
  return (
    <>
      <PageHero
        label="La Firma"
        title={<>Una firma construida sobre independencia y especialización</>}
        intro="Existimos para que los desarrolladores de vivienda accedan al mejor capital posible, en los mejores términos, con un asesor que solo responde a sus intereses."
      />

      {/* Statement */}
      <section className="border-b border-line bg-paper py-24 lg:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <Reveal>
            <p className="font-serif text-2xl leading-relaxed text-ink sm:text-[1.7rem]">
              Levantar capital para construcción no es llenar formatos. Es
              presentar un proyecto de forma que quien pone el dinero vea una
              oportunidad clara y un riesgo controlado.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Somos una firma boutique de asesoría de capital inmobiliario
              enfocada exclusivamente en vivienda. Actuamos como un miembro más
              de tu equipo: entendemos tu proyecto a fondo, diseñamos la
              estructura de capital adecuada y conducimos el proceso de
              levantamiento con disciplina institucional, de la originación al
              cierre.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Nuestra independencia es el activo más importante que tenemos: no
              vendemos un producto propio, por lo que podemos buscar en todo el
              mercado —bancos, fondos de deuda, family offices e inversionistas
              institucionales— la combinación que más conviene a tu desarrollo.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <Media variant="skyline" className="aspect-[4/5] w-full" tag />
          </Reveal>
        </div>
      </section>

      {/* Pilares */}
      <section className="border-b border-line bg-paper-2/50 py-24 lg:py-28">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="label text-green">Lo que nos define</p>
            <h2 className="mt-5 font-serif text-[2rem] leading-tight tracking-tight text-ink sm:text-[2.4rem]">
              Cuatro principios que guían cada mandato
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px border border-line bg-line md:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 90} className="bg-paper">
                <div className="flex gap-6 p-8 lg:p-10">
                  <span className="tnum font-serif text-3xl text-line-2">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-serif text-xl text-ink">{p.title}</h3>
                    <p className="mt-2 leading-relaxed text-muted">{p.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="border-b border-line bg-paper py-24 lg:py-28">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="label text-green">Cómo trabajamos</p>
            <h2 className="mt-5 font-serif text-[2rem] leading-tight tracking-tight text-ink sm:text-[2.4rem]">
              Un proceso claro, de la originación al cierre
            </h2>
          </Reveal>
          <ol className="mt-14 grid gap-px border border-line bg-line md:grid-cols-5">
            {process.map((step, i) => (
              <Reveal key={step.title} delay={i * 80} className="bg-paper">
                <li className="h-full p-7">
                  <span className="tnum font-serif text-3xl text-line-2">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-4 font-serif text-lg text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Liderazgo */}
      <section className="border-b border-line bg-paper py-24 lg:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <Reveal>
            <Media variant="tower" className="aspect-[4/5] w-full max-w-sm" tag />
          </Reveal>
          <Reveal delay={100}>
            <p className="label text-green">Liderazgo</p>
            <h2 className="mt-5 font-serif text-[2rem] leading-tight tracking-tight text-ink sm:text-[2.4rem]">
              {site.leadName}
            </h2>
            <p className="mt-2 text-muted">{site.leadRole}</p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              {/* TODO: reemplaza con la biografía real */}
              Con trayectoria en estructuración financiera y mercados de capital
              inmobiliario, lidera cada mandato de principio a fin. Su enfoque
              combina rigor analítico, relaciones institucionales y un
              conocimiento profundo del negocio de la vivienda.
            </p>
            <div className="mt-8">
              <ArrowLink href="/contacto" tone="green">Agenda una conversación</ArrowLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Track record */}
      <section className="bg-ink py-4">
        <div className="container-x">
          <StatBand stats={site.stats} tone="dark" />
        </div>
      </section>
    </>
  );
}
