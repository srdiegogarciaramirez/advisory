"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";
import { IconArrow, IconMail } from "./Icons";

const capitalOptions = [
  "Crédito puente para construcción",
  "Deuda mezzanine / entrepiso",
  "Equity preferente o coinversión (JV)",
  "Sponsor equity",
  "Recapitalización / situación especial",
  "Aún no lo tengo claro",
];

export default function ContactForm() {
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

    const subject = `Consulta — ${get("nombre") || "Nuevo proyecto"}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const inputBase =
    "w-full border border-line bg-white px-4 py-3 text-ink placeholder:text-muted/50 outline-none transition-colors focus:border-forest";

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center border border-line bg-white px-8 py-16 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-forest/10 text-forest">
          <IconMail width={26} height={26} />
        </span>
        <h3 className="mt-6 font-serif text-2xl text-ink">
          Se abrió tu cliente de correo
        </h3>
        <p className="mt-3 max-w-sm text-muted">
          Revisa tu aplicación de email y envía el mensaje que preparamos. Si no
          se abrió, escríbenos a{" "}
          <a href={`mailto:${site.email}`} className="text-green underline underline-offset-4">
            {site.email}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 text-sm text-muted underline underline-offset-4 hover:text-ink"
        >
          Volver al formulario
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border border-line bg-paper-2/40 p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Nombre" htmlFor="nombre">
          <input id="nombre" name="nombre" required autoComplete="name" placeholder="Tu nombre" className={inputBase} />
        </Field>
        <Field label="Empresa / desarrolladora" htmlFor="empresa">
          <input id="empresa" name="empresa" autoComplete="organization" placeholder="Nombre de tu empresa" className={inputBase} />
        </Field>
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <Field label="Email" htmlFor="email">
          <input id="email" name="email" type="email" required autoComplete="email" placeholder="tucorreo@empresa.com" className={inputBase} />
        </Field>
        <Field label="Teléfono / WhatsApp" htmlFor="telefono">
          <input id="telefono" name="telefono" type="tel" autoComplete="tel" placeholder="55 1234 5678" className={inputBase} />
        </Field>
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <Field label="Ubicación del proyecto" htmlFor="ubicacion">
          <input id="ubicacion" name="ubicacion" placeholder="Ciudad / zona" className={inputBase} />
        </Field>
        <Field label="Monto estimado del proyecto" htmlFor="monto">
          <input id="monto" name="monto" placeholder="Ej. $80 MDP" className={inputBase} />
        </Field>
      </div>
      <div className="mt-4">
        <Field label="¿Qué capital buscas?" htmlFor="capital">
          <select id="capital" name="capital" defaultValue={capitalOptions[0]} className={`${inputBase} appearance-none`}>
            {capitalOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </Field>
      </div>
      <div className="mt-4">
        <Field label="Cuéntanos de tu proyecto" htmlFor="mensaje">
          <textarea id="mensaje" name="mensaje" rows={4} placeholder="Etapa, número de unidades, avance y en qué podemos ayudarte…" className={`${inputBase} resize-y`} />
        </Field>
      </div>
      <button
        type="submit"
        className="arrow-link mt-6 w-full justify-center border border-ink bg-ink px-6 py-3.5 font-medium text-paper transition-colors hover:bg-transparent hover:text-ink"
      >
        Enviar consulta
        <IconArrow width={17} height={17} />
      </button>
      <p className="mt-3 text-center text-xs text-muted">
        Al enviar se abrirá tu aplicación de correo con el mensaje ya redactado.
        Tus datos no se almacenan en este sitio.
      </p>
    </form>
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
      <span className="mb-1.5 block text-[0.8rem] font-medium text-ink">{label}</span>
      {children}
    </label>
  );
}
