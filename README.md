# Landing page — Advisory de capital para desarrollo de vivienda

Sitio web (landing page) para un servicio de **advisory** dirigido a
desarrolladores inmobiliarios de vivienda: estructuración y levantamiento de
**crédito puente para construcción** y **equity raising**.

Construido con **Next.js 16 (App Router)**, **TypeScript** y **Tailwind CSS v4**.

---

## 🚀 Cómo correrlo

```bash
npm install       # instala dependencias
npm run dev       # servidor de desarrollo → http://localhost:3000
npm run build     # build de producción
npm run start     # sirve el build de producción
```

---

## ✏️ Personalización (lo más importante)

**Casi todo el contenido editable está en un solo archivo:**

### `lib/site.ts`

Ahí reemplazas los placeholders marcados con `// TODO`:

- **Marca:** `brand`, `brandShort` (iniciales del logo), `advisorName`
- **Contacto:** `email`, `phoneRaw` / `phoneDisplay`, `whatsappRaw`, `city`
- **Calendario:** `calendarUrl` (Calendly / Cal.com — opcional; si lo llenas
  aparece un botón "reserva en mi calendario")
- **Redes:** `linkedin` (opcional; deja `""` para ocultar)
- **SEO:** `domain`, `seoTitle`, `seoDescription`
- **Cifras / prueba social:** el arreglo `stats` (capital estructurado,
  proyectos, aliados, años)

> ⚠️ Formato de teléfono: usa código de país + número **sin** el símbolo `+`
> ni espacios (ej. `525512345678`). Eso hace que los links de WhatsApp y
> llamada funcionen bien.

### Textos de las secciones

Si quieres afinar la redacción de cada sección, están en:

| Sección | Archivo |
|---|---|
| Encabezado / navegación | `components/Header.tsx` |
| Hero (portada) | `components/Hero.tsx` |
| Cifras | usa `lib/site.ts` → `stats` |
| Servicios | `components/Services.tsx` |
| Proceso | `components/Process.tsx` |
| Por qué yo | `components/WhyMe.tsx` |
| Preguntas frecuentes | `components/FAQ.tsx` |
| Contacto | `components/Contact.tsx` |
| Pie de página | `components/Footer.tsx` |

### Colores y tipografía

El sistema de diseño (paleta azul tinta + oro + crema y las fuentes) está en
`app/globals.css`, bloque `@theme`. Cambia ahí los tokens de color si quieres
otra identidad visual.

---

## 📩 Cómo llegan los mensajes de contacto

El formulario **abre el cliente de correo del visitante** con un email ya
redactado dirigido a tu dirección (`site.email`). No se guarda nada en un
servidor — es privado y sin backend.

También hay botones directos de **WhatsApp**, **email** y **teléfono**, más un
botón flotante de WhatsApp.

**¿Quieres recibir los leads automáticamente en tu correo (sin que el visitante
tenga que enviar el email)?** Se puede conectar el formulario a un servicio como
[Formspree](https://formspree.io/) o [Netlify Forms](https://docs.netlify.com/forms/setup/).
Avísame y lo configuro.

---

## ☁️ Despliegue

Este proyecto está listo para desplegarse en **Vercel** (recomendado para
Next.js) o cualquier plataforma que soporte Node.js:

1. Sube el repositorio a GitHub (ya está en la rama de trabajo).
2. Importa el repo en [vercel.com](https://vercel.com) → detecta Next.js solo.
3. Deploy. Configura tu dominio en el panel de Vercel.

No requiere variables de entorno para funcionar.

---

## 📂 Estructura

```
app/
  layout.tsx        # metadata, fuentes, SEO
  page.tsx          # ensambla las secciones + JSON-LD
  globals.css       # sistema de diseño (colores, tipografía, utilidades)
components/          # cada sección de la landing
lib/
  site.ts           # ⭐ configuración central editable
```
