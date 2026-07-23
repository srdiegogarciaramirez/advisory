import Reveal from "./Reveal";
import { IconSearch, IconCompass, IconDoc, IconHandshake, IconShield } from "./Icons";

const steps = [
  {
    icon: IconSearch,
    title: "Diagnóstico",
    desc: "Revisamos tu proyecto, sus números y tu necesidad de capital. Definimos cuánto y de qué tipo (deuda / equity) conviene levantar.",
  },
  {
    icon: IconCompass,
    title: "Estructuración",
    desc: "Diseñamos la estructura óptima de capital: montos, plazos, garantías, retornos y cascada de distribución.",
  },
  {
    icon: IconDoc,
    title: "Empaquetado",
    desc: "Preparamos el material que bancos e inversionistas exigen: modelo financiero, memorándum y paquete de due diligence.",
  },
  {
    icon: IconHandshake,
    title: "Levantamiento",
    desc: "Presentamos ante nuestra red, negociamos términos y llevamos la operación hasta el cierre y la formalización.",
  },
  {
    icon: IconShield,
    title: "Acompañamiento",
    desc: "Damos seguimiento a las disposiciones y a los compromisos del financiamiento durante la vida del proyecto.",
  },
];

export default function Process() {
  return (
    <section id="proceso" className="relative bg-ink py-24 text-cream bg-grid lg:py-32">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-gold">Cómo trabajamos</p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
            Un proceso claro, del diagnóstico al cierre
          </h2>
          <p className="mt-4 text-lg text-cream/70">
            Sabes en todo momento en qué etapa está tu levantamiento y qué
            sigue. Sin sorpresas.
          </p>
        </Reveal>

        <div className="mt-16">
          <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.title} delay={i * 90} className="relative">
                  <div className="flex items-center gap-4 lg:flex-col lg:items-start">
                    <span className="flex h-14 w-14 flex-none items-center justify-center rounded-xl border border-gold/30 bg-ink-800 text-gold">
                      <Icon width={26} height={26} />
                    </span>
                    <span className="font-serif text-4xl text-gold/25 lg:hidden">
                      0{i + 1}
                    </span>
                  </div>
                  <span className="mt-5 hidden font-serif text-4xl text-gold/25 lg:block">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 font-serif text-xl">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/65">
                    {step.desc}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
