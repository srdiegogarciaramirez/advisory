/**
 * ─────────────────────────────────────────────────────────────
 *  CONFIGURACIÓN DEL SITIO
 * ─────────────────────────────────────────────────────────────
 *  Edita este archivo para personalizar TODO el contenido de
 *  contacto, marca y cifras. Los valores marcados con "// TODO"
 *  son placeholders que debes reemplazar con tu información real.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  // ── Marca ──────────────────────────────────────────────────
  brand: "Nombre Marca", // TODO: tu nombre o el de tu firma
  brandShort: "NM", // TODO: iniciales para el logotipo
  tagline: "Advisory en capital para desarrollo de vivienda",
  advisorName: "Tu Nombre Completo", // TODO
  advisorRole: "Asesor financiero inmobiliario",

  // ── Contacto ───────────────────────────────────────────────
  email: "contacto@tudominio.com", // TODO
  // Teléfono en formato internacional SIN símbolos para el link,
  // y una versión legible para mostrar.
  phoneRaw: "525512345678", // TODO: código país + número, sin '+'
  phoneDisplay: "+52 55 1234 5678", // TODO
  whatsappRaw: "525512345678", // TODO: mismo formato que phoneRaw
  city: "Ciudad de México, México", // TODO
  calendarUrl: "", // TODO (opcional): link a Calendly/Cal.com para "Agenda una llamada"

  // ── Redes (opcional; deja "" para ocultar) ────────────────
  linkedin: "", // TODO: https://linkedin.com/in/...

  // ── SEO ────────────────────────────────────────────────────
  domain: "https://tudominio.com", // TODO
  seoTitle:
    "Advisory en crédito puente y equity para desarrolladores de vivienda",
  seoDescription:
    "Estructuramos y levantamos el capital que tu proyecto de vivienda necesita: crédito puente para construcción y equity raising. Asesoría especializada para desarrolladores inmobiliarios.",

  // ── Cifras / prueba social (placeholders) ─────────────────
  stats: [
    { value: "+$X,XXX M", label: "Capital estructurado" }, // TODO
    { value: "+XX", label: "Proyectos asesorados" }, // TODO
    { value: "+XX", label: "Aliados financieros" }, // TODO
    { value: "+XX años", label: "En estructuración inmobiliaria" }, // TODO
  ],
} as const;

// ── Helpers de enlaces ───────────────────────────────────────
const wa = site.whatsappRaw;
const waMessage = encodeURIComponent(
  "Hola, soy desarrollador de vivienda y me interesa asesoría para estructurar capital para mi proyecto.",
);

export const links = {
  email: `mailto:${site.email}`,
  phone: `tel:+${site.phoneRaw}`,
  whatsapp: `https://wa.me/${wa}?text=${waMessage}`,
};
