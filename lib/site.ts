/**
 * ─────────────────────────────────────────────────────────────
 *  CONFIGURACIÓN DEL SITIO
 * ─────────────────────────────────────────────────────────────
 *  Edita este archivo para personalizar TODO el contenido de
 *  marca, contacto, soluciones y transacciones. Los valores con
 *  "// TODO" son placeholders que debes reemplazar.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  // ── Marca ──────────────────────────────────────────────────
  brand: "Nombre Firma", // TODO: nombre de la firma
  brandShort: "NF", // TODO: iniciales para el monograma
  wordmark: "Nombre Firma", // TODO: cómo se escribe el logotipo
  descriptor: "Asesoría de Capital Inmobiliario",
  tagline:
    "Firma boutique de asesoría en estructuración y levantamiento de capital para el desarrollo de vivienda.",

  // ── Contacto ───────────────────────────────────────────────
  email: "contacto@tudominio.com", // TODO
  phoneRaw: "525512345678", // TODO: código país + número, sin '+'
  phoneDisplay: "+52 55 1234 5678", // TODO
  whatsappRaw: "525512345678", // TODO
  calendarUrl: "", // TODO (opcional): Calendly / Cal.com
  linkedin: "", // TODO (opcional)

  // ── Oficinas ───────────────────────────────────────────────
  offices: [
    { city: "Ciudad de México", detail: "Oficina principal" }, // TODO
    { city: "Monterrey", detail: "Cobertura Norte" }, // TODO
    { city: "Guadalajara", detail: "Cobertura Occidente" }, // TODO
  ],
  hq: "Ciudad de México, México", // TODO

  // ── Liderazgo ──────────────────────────────────────────────
  leadName: "Tu Nombre Completo", // TODO
  leadRole: "Socio Director", // TODO

  // ── SEO ────────────────────────────────────────────────────
  domain: "https://tudominio.com", // TODO
  seoTitle:
    "Asesoría de capital inmobiliario para desarrollo de vivienda",
  seoDescription:
    "Firma boutique de asesoría en estructuración y levantamiento de capital para desarrolladores de vivienda: crédito puente, deuda, equity preferente y coinversión.",

  // ── Track record (placeholders) ───────────────────────────
  stats: [
    { value: "+$X,XXX M", label: "Capital estructurado" }, // TODO
    { value: "+XX", label: "Operaciones cerradas" }, // TODO
    { value: "+XX", label: "Aliados de capital" }, // TODO
    { value: "+XX años", label: "En el mercado" }, // TODO
  ],
} as const;

// ── Soluciones de capital ────────────────────────────────────
export const solutions = [
  {
    slug: "credito-puente",
    kicker: "Deuda senior",
    title: "Crédito puente para construcción",
    summary:
      "Financiamiento senior que fondea la edificación y se dispone conforme avanza la obra.",
    detail:
      "Estructuramos y colocamos la línea que financia tu desarrollo, optimizando aforo, plazo, costo y garantías para preservar tu flujo y tu margen.",
    points: [
      "Diagnóstico de capacidad de apalancamiento",
      "Modelo financiero, proforma y calendario de disposiciones",
      "Colocación y negociación con bancos y fondos de deuda",
      "Cierre, formalización y seguimiento de disposiciones",
    ],
  },
  {
    slug: "deuda-mezzanine",
    kicker: "Entrepiso",
    title: "Deuda mezzanine y de entrepiso",
    summary:
      "Capa intermedia que completa la estructura sin diluir en exceso la posición del desarrollador.",
    detail:
      "Incorporamos capital de entrepiso para cerrar la brecha entre la deuda senior y tu aportación, elevando el apalancamiento con un costo controlado.",
    points: [
      "Dimensionamiento de la brecha de capital",
      "Estructura intercreedor con la deuda senior",
      "Términos de costo, plazo y salida",
      "Colocación con fondos especializados",
    ],
  },
  {
    slug: "equity-preferente",
    kicker: "Coinversión",
    title: "Equity preferente y coinversión (JV)",
    summary:
      "Socios de capital institucionales que acompañan tu proyecto con retornos y riesgos bien definidos.",
    detail:
      "Diseñamos la estructura de capital y conectamos tu desarrollo con inversionistas, presentando una oportunidad clara con una cascada de distribución equilibrada.",
    points: [
      "Estructura de capital y cascada (waterfall)",
      "Retorno preferente, promote y alineación",
      "Teaser y memorándum de inversión institucional",
      "Acceso a family offices, fondos e inversionistas",
    ],
  },
  {
    slug: "sponsor-equity",
    kicker: "Desarrollador",
    title: "Sponsor equity / capital del desarrollador",
    summary:
      "Apalanca tu aportación de capital y participa en más proyectos de forma simultánea.",
    detail:
      "Estructuramos vehículos que permiten al desarrollador optimizar su capital propio, coinvertir y liberar recursos para nuevas oportunidades.",
    points: [
      "Optimización del capital propio",
      "Vehículos de coinversión",
      "Alineación de incentivos con el capital",
      "Estrategia de portafolio",
    ],
  },
  {
    slug: "recapitalizacion",
    kicker: "Situaciones especiales",
    title: "Recapitalización y situaciones especiales",
    summary:
      "Refinanciamiento, reestructura y capital de rescate para proyectos en transición.",
    detail:
      "Cuando un proyecto necesita reordenar su estructura de capital, diseñamos la solución de refinanciamiento o recapitalización que lo estabiliza.",
    points: [
      "Refinanciamiento de deuda existente",
      "Reestructura y capital de rescate",
      "Negociación con acreedores",
      "Reordenamiento de la estructura de capital",
    ],
  },
  {
    slug: "desinversion",
    kicker: "Salida",
    title: "Estrategia de desinversión y venta",
    summary:
      "Estrategias de salida para activos y portafolios de vivienda, con visión de capital markets.",
    detail:
      "Asesoramos la venta y salida de activos o portafolios habitacionales, maximizando el valor con una lectura integral del mercado de capitales.",
    points: [
      "Valuación y estrategia de salida",
      "Preparación del activo para el mercado",
      "Acceso a compradores institucionales",
      "Negociación y cierre",
    ],
  },
] as const;

// ── Segmentos de vivienda ────────────────────────────────────
export const sectors = [
  "Vivienda vertical",
  "Vivienda media y residencial",
  "Usos mixtos habitacionales",
  "Comunidades y fraccionamientos",
  "Renta residencial (build-to-rent)",
  "Reconversión y regeneración urbana",
] as const;

// ── Transacciones representativas (placeholders) ────────────
// TODO: reemplaza con operaciones reales (o deja como ejemplos).
export const transactions = [
  { capital: "Crédito puente", amount: "$XXX MDP", location: "Ciudad de México", units: "180 unidades", segment: "Vivienda vertical" },
  { capital: "Equity preferente (JV)", amount: "$XXX MDP", location: "Monterrey", units: "240 unidades", segment: "Usos mixtos" },
  { capital: "Deuda mezzanine", amount: "$XX MDP", location: "Guadalajara", units: "96 unidades", segment: "Vivienda media" },
  { capital: "Crédito puente", amount: "$XXX MDP", location: "Querétaro", units: "320 unidades", segment: "Comunidad horizontal" },
  { capital: "Recapitalización", amount: "$XXX MDP", location: "Mérida", units: "150 unidades", segment: "Vivienda residencial" },
  { capital: "Coinversión de capital", amount: "$XXX MDP", location: "Puebla", units: "210 unidades", segment: "Build-to-rent" },
] as const;

// ── Pilares de la firma ──────────────────────────────────────
export const pillars = [
  {
    title: "Independencia",
    body: "No colocamos un producto propio. Buscamos en todo el mercado la estructura que más conviene a tu proyecto.",
  },
  {
    title: "Especialización en vivienda",
    body: "Trabajamos exclusivamente desarrollo habitacional. Conocemos cómo piensan quienes prestan e invierten en él.",
  },
  {
    title: "Ejecución",
    body: "De la originación al cierre, conducimos el proceso con disciplina institucional y foco en el resultado.",
  },
  {
    title: "Red de capital",
    body: "Relaciones activas con bancos, fondos de deuda, family offices e inversionistas institucionales.",
  },
];

// ── Proceso ──────────────────────────────────────────────────
export const process = [
  { title: "Originación", body: "Analizamos el proyecto, sus números y la necesidad de capital. Definimos la estructura objetivo." },
  { title: "Estructuración", body: "Diseñamos la mezcla óptima de deuda y equity: montos, plazos, garantías y retornos." },
  { title: "Empaquetado", body: "Preparamos el material que exigen bancos e inversionistas: modelo, memorándum y due diligence." },
  { title: "Distribución", body: "Presentamos la oportunidad ante nuestra red y conducimos un proceso competitivo." },
  { title: "Cierre", body: "Negociamos términos, formalizamos y damos seguimiento a las disposiciones de capital." },
];

// ── Navegación ───────────────────────────────────────────────
export const nav = [
  { href: "/", label: "Inicio" },
  { href: "/firma", label: "La Firma" },
  { href: "/soluciones", label: "Soluciones de Capital" },
  { href: "/transacciones", label: "Transacciones" },
  { href: "/contacto", label: "Contacto" },
];

// ── Helpers de enlaces ───────────────────────────────────────
const waMessage = encodeURIComponent(
  "Hola, soy desarrollador de vivienda y me interesa asesoría para estructurar capital para mi proyecto.",
);

export const links = {
  email: `mailto:${site.email}`,
  phone: `tel:+${site.phoneRaw}`,
  whatsapp: `https://wa.me/${site.whatsappRaw}?text=${waMessage}`,
};
