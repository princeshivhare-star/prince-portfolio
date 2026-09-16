import { MessageCircle } from "lucide-react";

const whatsappUrl =
  "https://wa.me/919752383672?text=Hi%20Prince%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Prince on WhatsApp"
      className="whatsapp-float group fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-[#25D366] p-4 text-white shadow-lg shadow-green-500/25 transition-all duration-300 hover:-translate-y-1 hover:bg-[#20bd5a] hover:shadow-xl hover:shadow-green-500/30"
    >
      <MessageCircle size={24} strokeWidth={2.5} />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 group-hover:max-w-32 group-hover:opacity-100">
        Chat on WhatsApp
      </span>
    </a>
  );
}
