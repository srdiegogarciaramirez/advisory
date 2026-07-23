"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const faqs = [
  {
    q: "¿En qué etapa del proyecto conviene buscarte?",
    a: "Lo ideal es tan pronto tengas el terreno amarrado y un anteproyecto con números preliminares. Cuanto antes, mejor estructuramos la mezcla de deuda y equity. Aun así, puedo entrar en cualquier etapa previa al cierre del financiamiento.",
  },
  {
    q: "¿Qué es un crédito puente para construcción?",
    a: "Es una línea de crédito que financia la edificación de un desarrollo y se dispone conforme avanza la obra. Normalmente se paga con la venta de las unidades. Estructurarlo bien —plazo, costo, garantías y aforo— define buena parte de la rentabilidad del proyecto.",
  },
  {
    q: "¿Trabajas con proyectos de cualquier tamaño?",
    a: "Me enfoco en desarrollos de vivienda con una escala que justifique una estructura de capital formal. En nuestra primera conversación revisamos tu proyecto y te digo con franqueza si soy el aliado adecuado para lo que necesitas.",
  },
  {
    q: "¿Cómo cobras tus honorarios?",
    a: "El esquema se define según el alcance: puede combinar una cuota de estructuración y un honorario de éxito ligado al capital efectivamente levantado. Lo acordamos con total transparencia antes de empezar, sin costos ocultos.",
  },
  {
    q: "¿Garantizas que se levante el capital?",
    a: "Ningún asesor serio garantiza un cierre: depende del proyecto, del mercado y de las condiciones. Lo que sí garantizo es un trabajo de estructuración riguroso y presentar tu proyecto ante las contrapartes correctas, maximizando las probabilidades de éxito.",
  },
  {
    q: "¿En qué zonas operas?",
    a: "Trabajo con desarrolladores en distintas plazas del país. Gran parte del proceso se realiza de forma remota y viajo al proyecto cuando el levantamiento lo amerita.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="preguntas" className="bg-cream py-24 lg:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <Reveal>
          <p className="eyebrow text-gold-dark">Preguntas frecuentes</p>
          <h2 className="mt-3 font-serif text-3xl text-ink sm:text-4xl">
            Lo que suelen preguntarme los desarrolladores
          </h2>
          <p className="mt-4 text-lg text-muted">
            ¿Tienes otra duda? Escríbeme y con gusto la resolvemos en una
            llamada.
          </p>
        </Reveal>

        <div className="divide-y divide-sand-dark border-y border-sand-dark">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-serif text-lg text-ink">{faq.q}</span>
                  <span
                    className={`flex h-8 w-8 flex-none items-center justify-center rounded-full border border-gold/40 text-gold-dark transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 5v14M5 12h14"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl leading-relaxed text-muted">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
