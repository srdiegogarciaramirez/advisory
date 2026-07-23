import type { Metadata } from "next";
import { site, links } from "@/lib/site";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { IconWhatsApp, IconMail, IconPhone, IconPin } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Conversemos sobre la estructura de capital de tu desarrollo de vivienda. Consulta inicial sin costo.",
};

export default function ContactoPage() {
  const channels = [
    { icon: IconWhatsApp, label: "WhatsApp", value: site.phoneDisplay, href: links.whatsapp, external: true },
    { icon: IconMail, label: "Email", value: site.email, href: links.email, external: false },
    { icon: IconPhone, label: "Teléfono", value: site.phoneDisplay, href: links.phone, external: false },
  ];

  return (
    <>
      <PageHero
        label="Contacto"
        title={<>Conversemos sobre tu proyecto</>}
        intro="Agenda una consulta inicial sin costo. Revisamos tu desarrollo y te decimos con franqueza qué estructura de capital tiene más sentido."
      />

      <section className="bg-paper py-20 lg:py-24">
        <div className="container-x grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Canales */}
          <Reveal>
            <p className="label text-green">Canales directos</p>
            <div className="mt-6 divide-y divide-line border-y border-line">
              {channels.map((c) => {
                const Icon = c.icon;
                return (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.external ? "_blank" : undefined}
                    rel={c.external ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-4 py-5 transition-colors hover:text-green"
                  >
                    <span className="flex h-11 w-11 flex-none items-center justify-center border border-line text-forest transition-colors group-hover:border-forest">
                      <Icon width={20} height={20} />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-[0.16em] text-sage">{c.label}</span>
                      <span className="block text-ink">{c.value}</span>
                    </span>
                  </a>
                );
              })}
            </div>

            <div className="mt-10">
              <p className="label text-green">Presencia</p>
              <ul className="mt-6 space-y-4 border-t border-line pt-6">
                {site.offices.map((o) => (
                  <li key={o.city} className="flex items-start gap-3">
                    <IconPin width={18} height={18} className="mt-0.5 flex-none text-sage" />
                    <span>
                      <span className="block text-ink">{o.city}</span>
                      <span className="block text-sm text-muted">{o.detail}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {site.calendarUrl ? (
              <a
                href={site.calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="arrow-link mt-10 text-green hover:text-forest"
              >
                Reserva directo en el calendario
              </a>
            ) : null}
          </Reveal>

          {/* Formulario */}
          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
