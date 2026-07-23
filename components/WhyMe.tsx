import Reveal from "./Reveal";
import { links } from "@/lib/site";
import {
  IconTarget,
  IconNetwork,
  IconBlueprint,
  IconHandshake,
  IconArrow,
} from "./Icons";

const reasons = [
  {
    icon: IconTarget,
    title: "Especialización en vivienda",
    desc: "No hago de todo un poco. Vivo el negocio de la vivienda y entiendo cómo piensan quienes prestan e invierten en él.",
  },
  {
    icon: IconNetwork,
    title: "Red de capital",
    desc: "Relaciones activas con bancos, fondos de deuda, family offices e inversionistas que buscan proyectos como el tuyo.",
  },
  {
    icon: IconBlueprint,
    title: "Enfoque en bancabilidad",
    desc: "Trabajo tu proyecto para que sea financiable: números sólidos, riesgos mitigados y una historia que convence.",
  },
  {
    icon: IconHandshake,
    title: "Incentivos alineados",
    desc: "Mi éxito depende de que cierres tu capital en buenos términos. Estamos del mismo lado de la mesa.",
  },
];

export default function WhyMe() {
  return (
    <section id="diferenciadores" className="bg-sand py-24 lg:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <p className="eyebrow text-gold-dark">Por qué trabajar conmigo</p>
          <h2 className="mt-3 font-serif text-3xl text-ink sm:text-4xl">
            Un aliado que habla el idioma de los bancos y de los inversionistas
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Levantar capital para construcción no es llenar formatos: es
            presentar tu proyecto de forma que quien pone el dinero vea una
            oportunidad clara y un riesgo controlado. Ahí es donde agrego valor.
          </p>
          <a
            href="#contacto"
            className="group mt-8 inline-flex items-center gap-2 font-semibold text-ink transition-colors hover:text-gold-dark"
          >
            Hablemos de tu proyecto
            <IconArrow
              width={18}
              height={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <Reveal key={reason.title} delay={i * 90}>
                <div className="h-full rounded-2xl border border-sand-dark bg-cream p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-ink text-gold">
                    <Icon width={24} height={24} />
                  </span>
                  <h3 className="mt-5 font-serif text-xl text-ink">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">
                    {reason.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
