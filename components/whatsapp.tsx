// components/WhatsAppButton.tsx
// Usage: Import in layout.tsx (recommended) or any page.tsx
// Place <WhatsAppButton /> inside your root layout's <body> for site-wide visibility

import Image from "next/image";

const WHATSAPP_NUMBER = "923072853163"; // international format, no +
const WHATSAPP_MESSAGE = "Hi! I found you online and would like to connect.";

export default function WhatsAppButton() {
  const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed bottom-6 right-6 z-50
        flex items-center gap-2
        bg-[#25D366] hover:bg-[#1ebe5d]
        text-white text-sm font-medium
        pl-3 pr-4 py-4
        rounded-full shadow-lg hover:shadow-xl
        transition-all duration-300 ease-in-out
        hover:scale-105 active:scale-95
        group
      "
    >
      {/* WhatsApp Logo */}
      <div className="relative w-6 h-6 shrink-0">
        <Image
          src="/whatsapp.png"
          alt="WhatsApp"
          fill
          className="object-contain"
          sizes="24px"
        />
      </div>

      {/* Label — visible on hover via max-width transition */}
      <span
        className="
          overflow-hidden whitespace-nowrap
          max-w-0 group-hover:max-w-[120px]
          transition-[max-width] duration-300 ease-in-out
          opacity-0 group-hover:opacity-100
        "
      >
        Contact Me
      </span>
    </a>
  );
}