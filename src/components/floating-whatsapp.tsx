import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/6281234567890"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hubungi kami via WhatsApp"
      className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center gap-2 rounded-full bg-green-500 text-white shadow-2xl ring-4 ring-green-500/20 transition duration-300 hover:scale-105 hover:bg-green-600 active:scale-95 sm:bottom-6 sm:right-6 sm:h-auto sm:w-auto sm:gap-3 sm:px-5 sm:py-4"
    >
      <MessageCircle className="h-6 w-6 sm:h-6 sm:w-6" />

      <div className="hidden sm:block">
        <p className="text-xs opacity-90">Hubungi Kami</p>
        <p className="text-sm font-semibold">WhatsApp</p>
      </div>
    </a>
  );
}
