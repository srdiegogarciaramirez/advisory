"use client";

import { useState, type FormEvent } from "react";
import { site, links } from "@/lib/site";
import {
  IconWhatsApp,
  IconMail,
  IconPhone,
  IconPin,
  IconArrow,
} from "./Icons";

const capitalOptions = [
  "Crédito puente para construcción",
  "Levantamiento de equity",
  "Ambos (deuda y equity)",
  "Aún no lo tengo claro",
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    const body = [
      `Nombre: ${get("nombre")}`,
      `Empresa / desarrolladora: ${get("empresa")}`,
      `Email: ${get("email")}`,
      `Teléfono: ${get("telefono")}`,
      `Ubicación del proyecto: ${get("ubicacion")}`,
      `Tipo de capital: ${get("capital")}`,
      `Monto estimado del proyecto: ${get("monto")}`,
      "",
      "Mensaje:",
      get("mensaje"),
    ].join("\n");

    const subject = `Consulta de advisory — ${get("nombre") || "Nuevo proyecto"}`;
    const href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = href;
    setSent(true);
  }

  const contactCards = [
    {
      icon: IconWhatsApp,
      label: "WhatsApp",
      value: site.phoneDisplay,
      href: links.whatsapp,
      external: true,
    },
    {
      icon: IconMail,
      label: "Email",
      value: site.email,
      href: links.email,
      external: false,
    },
    {
      icon: IconPhone,
      label: "Teléfono",
      value: site.phoneDisplay,
      href: links.phone,
      external: false,
    },
    {
      icon: IconPin,
      label: "Ubicación",
      value: site.city,
      href: null,
      external: false,
    },
  ];

  const inputBase =
    "w-full rounded-lg border border-ink-800/20 bg-ink-800/40 px-4 py-3 text-cream placeholder:text-cream/40 outline-none transition-colors focus:border-gold focus:bg-ink-800/70";

  return (
    <section id="contacto" className="relative bg-ink py-24 text-cream bg-grid lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-gold/10 blur-[120px]"
      />
      <div className="container-x relative grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Info de contacto */}
        <div>
          <p className="eyebrow text-gold">Hablemos</p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
            Cuéntame de tu proyecto
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-cream/70">
            Agenda una consulta inicial sin costo. Revisamos tu proyecto y te
            digo con franqueza qué estructura de capital tiene más sentido.
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {contactCards.map((card) => {
              const Icon = card.icon;
              const inner = (
                <div className="flex items-center gap-4 rounded-xl border border-cream/10 bg-ink-800/40 p-4 transition-colors hover:border-gold/40">
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-ink text-gold">
                    <Icon width={22} height={22} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wider text-cream/50">
                      {card.label}
                    </p>
                    <p className="truncate text-sm text-cream">{card.value}</p>
                  </div>
                </div>
              );
              return card.href ? (
                <a
                  key={card.label}
                  href={card.href}
                  target={card.external ? "_blank" : undefined}
                  rel={card.external ? "noopener noreferrer" : undefined}
                >
                  {inner}
                </a>
              ) : (
                <div key={card.label}>{inner}</div>
              );
            })}
          </div>

          {site.calendarUrl ? (
            <a
              href={site.calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-gold transition-colors hover:text-gold-light"
            >
              O reserva directo en mi calendario
              <IconArrow width={18} height={18} />
            </a>
          ) : null}
        </div>

        {/* Formulario */}
        <div className="rounded-2xl border border-gold/20 bg-ink-900/70 p-7 shadow-lift backdrop-blur-sm lg:p-9">
          {sent ? (
            <div className="flex h-full flex-col items-center justify-center py-12 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/15 text-gold">
                <IconMail width={30} height={30} />
              </span>
              <h3 className="mt-6 font-serif text-2xl">
                Se abrió tu cliente de correo
              </h3>
              <p className="mt-3 max-w-sm text-cream/70">
                Revisa tu aplicación de email y envía el mensaje que preparamos.
                Si no se abrió, escríbeme directo a{" "}
                <a
                  href={links.email}
                  className="text-gold underline underline-offset-4"
                >
                  {site.email}
                </a>
                .
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-6 text-sm text-cream/60 underline underline-offset-4 hover:text-cream"
              >
                Volver al formulario
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Nombre" htmlFor="nombre">
                  <input
                    id="nombre"
                    name="nombre"
                    required
                    autoComplete="name"
                    placeholder="Tu nombre"
                    className={inputBase}
                  />
                </Field>
                <Field label="Empresa / desarrolladora" htmlFor="empresa">
                  <input
                    id="empresa"
                    name="empresa"
                    autoComplete="organization"
                    placeholder="Nombre de tu empresa"
                    className={inputBase}
                  />
                </Field>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Email" htmlFor="email">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="tucorreo@empresa.com"
                    className={inputBase}
                  />
                </Field>
                <Field label="Teléfono / WhatsApp" htmlFor="telefono">
                  <input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    autoComplete="tel"
                    placeholder="55 1234 5678"
                    className={inputBase}
                  />
                </Field>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Ubicación del proyecto" htmlFor="ubicacion">
                  <input
                    id="ubicacion"
                    name="ubicacion"
                    placeholder="Ciudad / zona"
                    className={inputBase}
                  />
                </Field>
                <Field label="Monto estimado del proyecto" htmlFor="monto">
                  <input
                    id="monto"
                    name="monto"
                    placeholder="Ej. $80 MDP"
                    className={inputBase}
                  />
                </Field>
              </div>

              <Field label="¿Qué capital buscas?" htmlFor="capital">
                <select
                  id="capital"
                  name="capital"
                  defaultValue={capitalOptions[0]}
                  className={`${inputBase} appearance-none`}
                >
                  {capitalOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-ink-900">
                      {opt}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Cuéntame de tu proyecto" htmlFor="mensaje">
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  placeholder="Etapa, número de unidades, avance, y en qué te puedo ayudar…"
                  className={`${inputBase} resize-y`}
                />
              </Field>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 font-semibold text-ink transition-all hover:-translate-y-0.5 hover:bg-gold-light"
              >
                Enviar consulta
                <IconArrow
                  width={18}
                  height={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
              <p className="text-center text-xs text-cream/45">
                Al enviar se abrirá tu aplicación de correo con el mensaje ya
                redactado. Tus datos no se almacenan en este sitio.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-1.5 block text-sm text-cream/75">{label}</span>
      {children}
    </label>
  );
}
