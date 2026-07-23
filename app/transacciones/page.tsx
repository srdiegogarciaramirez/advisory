import type { Metadata } from "next";
import { site, transactions, sectors } from "@/lib/site";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { StatBand, ArrowLink } from "@/components/UI";

export const metadata: Metadata = {
  title: "Transacciones",
  description:
    "Operaciones representativas de crédito puente, deuda y equity estructuradas para desarrolladores de vivienda.",
};

export default function TransaccionesPage() {
  return (
    <>
      <PageHero
        label="Transacciones"
        title={<>Un historial de estructuras bien ejecutadas</>}
        intro="Estructuras que hemos originado, colocado y cerrado para desarrolladores de vivienda. Las operaciones se presentan de forma representativa; los detalles de cada mandato se manejan con estricta confidencialidad."
      />

      {/* Track record */}
      <section className="border-b border-line bg-paper">
        <div className="container-x">
          <StatBand stats={site.stats} />
        </div>
      </section>

      {/* Grid de transacciones */}
      <section className="border-b border-line bg-paper py-24 lg:py-28">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="label text-green">Operaciones representativas</p>
            <h2 className="mt-5 font-serif text-[2rem] leading-tight tracking-tight text-ink sm:text-[2.4rem]">
              Selección de mandatos
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {transactions.map((t, i) => (
              <Reveal key={i} delay={(i % 3) * 80} className="bg-paper">
                <div className="flex h-full flex-col p-8">
                  <p className="label text-green">{t.capital}</p>
                  <p className="tnum mt-4 font-serif text-4xl tracking-tight text-forest">{t.amount}</p>
                  <div className="mt-6 space-y-2 border-t border-line pt-5 text-sm text-muted">
                    <div className="flex justify-between gap-4">
                      <span className="text-sage">Ubicación</span>
                      <span className="text-right text-ink">{t.location}</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-sage">Escala</span>
                      <span className="text-right text-ink">{t.units}</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-sage">Segmento</span>
                      <span className="text-right text-ink">{t.segment}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-sm text-muted">
            {/* TODO: sustituye estas operaciones por tus transacciones reales en lib/site.ts */}
            Las cifras y ubicaciones son ilustrativas. Con gusto compartimos
            referencias específicas en una conversación privada.
          </p>
        </div>
      </section>

      {/* Segmentos */}
      <section className="bg-paper py-24 lg:py-28">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="label text-green">Segmentos</p>
            <h2 className="mt-5 font-serif text-[2rem] leading-tight tracking-tight text-ink sm:text-[2.4rem]">
              Dónde estructuramos capital
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((s, i) => (
              <Reveal key={s} delay={(i % 3) * 70} className="bg-paper">
                <div className="flex items-center gap-3 px-6 py-6 text-ink">
                  <span className="tnum text-sm text-sage">{String(i + 1).padStart(2, "0")}</span>
                  <span>{s}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12">
            <ArrowLink href="/contacto" tone="green">Cuéntanos de tu proyecto</ArrowLink>
          </div>
        </div>
      </section>
    </>
  );
}
