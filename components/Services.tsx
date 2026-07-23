import Reveal from "./Reveal";
import { IconBridge, IconEquity, IconCheck } from "./Icons";

const services = [
  {
    icon: IconBridge,
    tag: "Deuda",
    title: "Crédito puente para construcción",
    intro:
      "Estructuro y levanto la línea de crédito que financia la obra, optimizando plazo, costo y garantías para no comprometer tu flujo ni tu margen.",
    points: [
      "Diagnóstico de capacidad de apalancamiento del proyecto",
      "Modelo financiero, proforma y flujos de disposición",
      "Armado del paquete bancable y due diligence previa",
      "Presentación y negociación con bancos y fondos de deuda",
      "Cierre, formalización y seguimiento de disposiciones",
    ],
  },
  {
    icon: IconEquity,
    tag: "Equity",
    title: "Levantamiento de equity",
    intro:
      "Diseño la estructura de capital y conecto tu proyecto con inversionistas, presentando una oportunidad clara, con retornos y riesgos bien definidos.",
    points: [
      "Estructura de capital y cascada de distribución (waterfall)",
      "Teaser y memorándum de inversión de nivel institucional",
      "Definición de retornos objetivo, preferente y promote",
      "Acceso a inversionistas, family offices y fondos",
      "Negociación de términos y cierre de la ronda",
    ],
  },
];

export default function Services() {
  return (
    <section id="servicios" className="bg-cream py-24 lg:py-32">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-gold-dark">Qué hago por ti</p>
          <h2 className="mt-3 font-serif text-3xl text-ink sm:text-4xl">
            Dos palancas de capital, una misma meta: que tu proyecto se
            construya
          </h2>
          <p className="mt-4 text-lg text-muted">
            Trabajo la estructura completa de financiamiento de tu desarrollo,
            combinando deuda y equity según lo que cada proyecto necesita.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={i * 120}>
                <article className="group h-full rounded-2xl border border-sand-dark bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-lift lg:p-10">
                  <div className="flex items-center gap-4">
                    <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-ink text-gold transition-colors group-hover:bg-ink-800">
                      <Icon width={26} height={26} />
                    </span>
                    <span className="eyebrow rounded-full bg-sand px-3 py-1 text-gold-dark">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="mt-6 font-serif text-2xl text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted">
                    {service.intro}
                  </p>

                  <ul className="mt-7 space-y-3.5">
                    {service.points.map((point) => (
                      <li key={point} className="flex gap-3 text-[0.95rem] text-ink/85">
                        <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gold/15 text-gold-dark">
                          <IconCheck width={14} height={14} />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
