import Link from "next/link";
import { site, links, nav } from "@/lib/site";
import { IconArrow } from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      {/* Franja CTA */}
      <div className="border-b border-paper/10">
        <div className="container-x flex flex-col gap-6 py-14 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="label text-sage">¿Tienes un proyecto?</p>
            <h2 className="mt-3 max-w-xl font-serif text-2xl leading-snug sm:text-3xl">
              Conversemos sobre la estructura de capital de tu desarrollo.
            </h2>
          </div>
          <Link
            href="/contacto"
            className="arrow-link shrink-0 border border-paper/40 px-6 py-3.5 text-sm font-medium text-paper transition-colors hover:border-sage hover:text-sage"
          >
            Iniciar conversación
            <IconArrow width={17} height={17} />
          </Link>
        </div>
      </div>

      <div className="container-x grid gap-10 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-sm">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center border border-paper/30 font-serif text-paper">
              {site.brandShort}
            </span>
            <span className="font-serif text-xl">{site.wordmark}</span>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-paper/60">
            {site.tagline}
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.18em] text-paper/40">
            {site.hq}
          </p>
        </div>

        <div>
          <p className="label text-sage">Navegación</p>
          <ul className="mt-5 space-y-3 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-paper/70 transition-colors hover:text-paper">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="label text-sage">Contacto</p>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a href={links.email} className="text-paper/70 transition-colors hover:text-paper">
                {site.email}
              </a>
            </li>
            <li>
              <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="text-paper/70 transition-colors hover:text-paper">
                WhatsApp · {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={links.phone} className="text-paper/70 transition-colors hover:text-paper">
                {site.phoneDisplay}
              </a>
            </li>
            {site.linkedin ? (
              <li>
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="text-paper/70 transition-colors hover:text-paper">
                  LinkedIn
                </a>
              </li>
            ) : null}
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="container-x flex flex-col gap-3 py-6 text-xs text-paper/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {2025} {site.brand}. Todos los derechos reservados.</p>
          <p className="max-w-lg">
            Sitio informativo. No constituye una oferta de crédito ni asesoría de
            inversión. Cada operación se sujeta a due diligence y a las
            condiciones de las contrapartes financieras.
          </p>
        </div>
      </div>
    </footer>
  );
}
