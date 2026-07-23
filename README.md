# Sitio institucional — Asesoría de Capital Inmobiliario

Sitio web multi-página para una **firma boutique de asesoría de capital
inmobiliario** especializada en desarrollo de vivienda: estructuración y
levantamiento de **crédito puente**, **deuda** y **equity**.

Construido con **Next.js 16 (App Router)**, **TypeScript** y **Tailwind CSS v4**.
Estética institucional (paper cálido · tinta · verde pino), con tipografía
**Newsreader** (serif editorial) e **Inter**.

---

## 🚀 Cómo correrlo

```bash
npm install       # instala dependencias
npm run dev       # desarrollo → http://localhost:3000
npm run build     # build de producción
npm run start     # sirve el build de producción
```

---

## 🗺️ Páginas

| Ruta | Página |
|---|---|
| `/` | Inicio — hero, track record, la firma, soluciones, transacciones, segmentos |
| `/firma` | La Firma — statement, principios, proceso, liderazgo |
| `/soluciones` | Soluciones de Capital — las 6 soluciones en detalle + proceso |
| `/transacciones` | Transacciones — track record + operaciones representativas |
| `/contacto` | Contacto — canales directos, oficinas y formulario |

---

## ✏️ Personalización

**Casi todo el contenido editable está en `lib/site.ts`:** marca, contacto,
oficinas, liderazgo, SEO, y los arreglos de `solutions`, `sectors`,
`transactions`, `pillars` y `process`. Los valores con `// TODO` son
placeholders que debes reemplazar por tu información real.

### Colores y tipografía
El sistema de diseño (paleta y fuentes) vive en `app/globals.css`, bloque
`@theme`.

---

## 🖼️ Imágenes

El sitio usa **placeholders arquitectónicos duotono** (componente
`components/Media.tsx`) donde irían fotos reales, porque el entorno de
desarrollo no permite descargar imágenes externas.

**Para usar fotos reales**, es muy sencillo:

1. Deja tus imágenes en `public/images/` (por ejemplo `public/images/torre.jpg`).
2. Pásalas al componente con la prop `src`:

```tsx
<Media src="/images/torre.jpg" alt="Proyecto en construcción" className="aspect-[4/5] w-full" />
```

Si `src` está presente, se muestra la foto (optimizada con `next/image`); si no,
se dibuja el placeholder. Puedes reemplazar imagen por imagen a tu ritmo.

---

## 📩 Contacto / leads

El formulario de `/contacto` **abre el cliente de correo del visitante** con un
email ya redactado hacia tu dirección (`site.email`). No hay backend ni se
almacenan datos. También hay botones directos de WhatsApp, email y teléfono.

**¿Quieres recibir los leads automáticamente en tu correo?** Se puede conectar
el formulario a [Formspree](https://formspree.io/) o
[Netlify Forms](https://docs.netlify.com/forms/setup/) — avísame y lo configuro.

---

## ☁️ Despliegue

Listo para **Vercel** (recomendado para Next.js) o cualquier plataforma con
Node.js. Importa el repo en Vercel, detecta Next.js automáticamente y despliega.
No requiere variables de entorno.

---

## 📂 Estructura

```
app/
  layout.tsx          # fuentes, metadata, Header + Footer globales
  page.tsx            # Inicio
  firma/ soluciones/ transacciones/ contacto/   # páginas
  globals.css         # sistema de diseño (@theme)
components/
  Header, Footer, PageHero, Media, UI, ContactForm, Reveal, Icons
lib/
  site.ts             # ⭐ configuración central editable
```
