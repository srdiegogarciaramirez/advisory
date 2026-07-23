import { links } from "@/lib/site";
import { IconWhatsApp } from "./Icons";

export default function FloatingWhatsApp() {
  return (
    <a
      href={links.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbeme por WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift transition-transform hover:scale-110"
    >
      <IconWhatsApp width={28} height={28} />
    </a>
  );
}
