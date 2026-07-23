import Image from "next/image";

type Variant = "facade" | "skyline" | "tower" | "aerial";

/**
 * Marco de imagen institucional.
 *
 * Si pasas `src` (una ruta a /public/images/… o una URL), muestra la foto real.
 * Si no, dibuja un placeholder arquitectónico duotono en la paleta de la firma.
 *
 * Para usar fotos reales: deja el archivo en `public/images/` y pásalo como
 * `src="/images/mi-foto.jpg"`.
 */
export default function Media({
  variant = "facade",
  src,
  alt = "",
  className = "",
  priority = false,
  tag = false,
}: {
  variant?: Variant;
  src?: string;
  alt?: string;
  className?: string;
  priority?: boolean;
  tag?: boolean;
}) {
  if (src) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-forest ${className}`}>
      <Placeholder variant={variant} />
      {tag ? (
        <span className="absolute bottom-3 right-3 rounded-sm bg-ink/30 px-2 py-1 text-[0.6rem] uppercase tracking-[0.18em] text-paper/70 backdrop-blur-sm">
          Imagen provisional
        </span>
      ) : null}
    </div>
  );
}

function Placeholder({ variant }: { variant: Variant }) {
  return (
    <svg
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      aria-hidden
    >
      <defs>
        <linearGradient id={`g-${variant}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#26503f" />
          <stop offset="1" stopColor="#152e26" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill={`url(#g-${variant})`} />
      {variant === "facade" && <Facade />}
      {variant === "skyline" && <Skyline />}
      {variant === "tower" && <Tower />}
      {variant === "aerial" && <Aerial />}
    </svg>
  );
}

const stroke = "#3f6b59";
const lit = "#c9d3c5";
const dim = "#33594a";

function Facade() {
  const cols = 9;
  const rows = 7;
  const cells = [];
  const pad = 26;
  const w = (400 - pad * 2) / cols;
  const h = (300 - pad * 2) / rows;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const isLit = (r * 5 + c * 3) % 7 === 0;
      cells.push(
        <rect
          key={`${r}-${c}`}
          x={pad + c * w + 3}
          y={pad + r * h + 3}
          width={w - 6}
          height={h - 6}
          fill={isLit ? lit : dim}
          opacity={isLit ? 0.85 : 0.5}
        />,
      );
    }
  }
  return <g>{cells}</g>;
}

function Skyline() {
  const buildings = [
    { x: 20, w: 46, h: 150 },
    { x: 72, w: 38, h: 210 },
    { x: 116, w: 54, h: 120 },
    { x: 176, w: 42, h: 245 },
    { x: 224, w: 50, h: 170 },
    { x: 280, w: 36, h: 220 },
    { x: 322, w: 58, h: 140 },
  ];
  return (
    <g>
      {buildings.map((b, i) => (
        <g key={i}>
          <rect x={b.x} y={300 - b.h} width={b.w} height={b.h} fill={dim} opacity={0.7} />
          {Array.from({ length: Math.floor(b.h / 22) }).map((_, r) =>
            Array.from({ length: Math.floor(b.w / 16) }).map((_, c) => {
              const isLit = (i * 3 + r * 2 + c) % 5 === 0;
              return (
                <rect
                  key={`${r}-${c}`}
                  x={b.x + 6 + c * 16}
                  y={300 - b.h + 12 + r * 22}
                  width={7}
                  height={10}
                  fill={isLit ? lit : stroke}
                  opacity={isLit ? 0.8 : 0.4}
                />
              );
            }),
          )}
        </g>
      ))}
    </g>
  );
}

function Tower() {
  return (
    <g>
      <rect x={150} y={40} width={100} height={260} fill={dim} opacity={0.75} />
      <rect x={150} y={40} width={100} height={260} fill="none" stroke={stroke} strokeWidth={1.5} />
      {Array.from({ length: 11 }).map((_, r) => (
        <line
          key={r}
          x1={150}
          y1={40 + (r + 1) * 22}
          x2={250}
          y2={40 + (r + 1) * 22}
          stroke={stroke}
          strokeWidth={1}
          opacity={0.6}
        />
      ))}
      {Array.from({ length: 12 }).map((_, r) =>
        Array.from({ length: 4 }).map((_, c) => {
          const isLit = (r * 3 + c * 2) % 5 === 0;
          return (
            <rect
              key={`${r}-${c}`}
              x={158 + c * 22}
              y={48 + r * 22}
              width={14}
              height={12}
              fill={isLit ? lit : "#2b4f41"}
              opacity={isLit ? 0.85 : 0.55}
            />
          );
        }),
      )}
    </g>
  );
}

function Aerial() {
  return (
    <g opacity={0.7}>
      {Array.from({ length: 6 }).map((_, r) =>
        Array.from({ length: 8 }).map((_, c) => (
          <rect
            key={`${r}-${c}`}
            x={20 + c * 46}
            y={20 + r * 46}
            width={34}
            height={34}
            fill="none"
            stroke={stroke}
            strokeWidth={1.2}
            opacity={0.5}
          />
        )),
      )}
      {[
        [1, 2],
        [3, 4],
        [4, 1],
        [2, 5],
        [5, 3],
        [0, 6],
      ].map(([r, c], i) => (
        <rect
          key={i}
          x={20 + c * 46 + 4}
          y={20 + r * 46 + 4}
          width={26}
          height={26}
          fill={dim}
          opacity={0.8}
        />
      ))}
    </g>
  );
}
