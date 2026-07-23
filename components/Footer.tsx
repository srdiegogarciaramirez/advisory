import { site, links } from "@/lib/site";
import { IconWhatsApp, IconMail, IconLinkedIn } from "./Icons";

export default function Footer() {
  const year = 2025;
  return (
    <footer className="border-t border-gold/15 bg-ink text-cream">
      <div className="container-x py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Marca */}
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-md border border-gold/50 bg-ink-800 font-serif text-gold">
                {site.brandShort}
              </span>
              <span className="font-serif text-lg">{site.brand}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-cream/60">
              {site.tagline}. Estructuración y levantamiento de crédito puente
              para construcción y equity para desarrolladores de vivienda.
            </p>
          </div>

          {/* Navegación */}
          <div className="flex flex-col gap-3 text-sm">
            <p className="eyebrow text-gold/70">Navegación</p>
            <a href="#servicios" className="text-cream/70 hover:text-gold">
              Servicios
            </a>
            <a href="#proceso" className="text-cream/70 hover:text-gold">
              Proceso
            </a>
            <a href="#diferenciadores" className="text-cream/70 hover:text-gold">
              Por qué yo
            </a>
            <a href="#preguntas" className="text-cream/70 hover:text-gold">
              Preguntas
            </a>
          </div>

          {/* Contacto */}
          <div className="flex flex-col gap-3 text-sm">
            <p className="eyebrow text-gold/70">Contacto</p>
            <a href={links.email} className="text-cream/70 hover:text-gold">
              {site.email}
            </a>
            <a
              href={links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/70 hover:text-gold"
            >
              {site.phoneDisplay}
            </a>
            <span className="text-cream/50">{site.city}</span>

            <div className="mt-2 flex gap-3">
              <a
                href={links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 text-cream/70 transition-colors hover:border-gold hover:text-gold"
              >
                <IconWhatsApp width={18} height={18} />
              </a>
              <a
                href={links.email}
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 text-cream/70 transition-colors hover:border-gold hover:text-gold"
              >
                <IconMail width={18} height={18} />
              </a>
              {site.linkedin ? (
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 text-cream/70 transition-colors hover:border-gold hover:text-gold"
                >
                  <IconLinkedIn width={18} height={18} />
                </a>
              ) : null}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-cream/10 pt-6 text-xs text-cream/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.brand}. Todos los derechos reservados.
          </p>
          <p className="max-w-lg">
            Este sitio es informativo y no constituye una oferta de crédito ni
            asesoría de inversión. Cada operación se sujeta a due diligence y a
            las condiciones de las contrapartes financieras.
          </p>
        </div>
      </div>
    </footer>
  );
}
