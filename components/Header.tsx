"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site, nav } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-line/70 bg-paper/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-x flex h-[76px] items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center border border-ink/25 font-serif text-[0.95rem] text-ink">
            {site.brandShort}
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-[1.15rem] tracking-tight text-ink">
              {site.wordmark}
            </span>
            <span className="mt-1 text-[0.58rem] uppercase tracking-[0.22em] text-muted">
              {site.descriptor}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {nav.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              data-active={isActive(item.href)}
              className={`navlink text-[0.82rem] font-medium tracking-wide transition-colors ${
                isActive(item.href) ? "text-ink" : "text-muted hover:text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="border border-ink bg-ink px-5 py-2.5 text-[0.8rem] font-medium tracking-wide text-paper transition-colors hover:bg-transparent hover:text-ink"
          >
            Contáctanos
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
        >
          <span className={`h-px w-6 bg-ink transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-px w-6 bg-ink transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Menú móvil */}
      <div
        className={`overflow-hidden border-t bg-paper transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-[420px] border-line" : "max-h-0 border-transparent"
        }`}
      >
        <nav className="container-x flex flex-col py-3">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              data-active={isActive(item.href)}
              className={`border-b border-line/60 py-3.5 text-[0.95rem] ${
                isActive(item.href) ? "text-ink" : "text-muted"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            onClick={() => setOpen(false)}
            className="mt-4 bg-ink px-5 py-3 text-center text-sm font-medium text-paper"
          >
            Contáctanos
          </Link>
        </nav>
      </div>
    </header>
  );
}
