import { contact } from "@/config/site";
import { waLink } from "@/lib/whatsapp";

export default function WhatsAppWidget() {
  return (
    <a
      href={waLink("default")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with ${contact.founder} on WhatsApp`}
      className="group fixed right-5 bottom-5 z-40 flex size-[50px] items-center justify-center rounded-full bg-[#25d366] text-2xl text-white shadow-[0_4px_15px_rgb(37_211_102/0.4)] transition hover:scale-110 md:right-8 md:bottom-8 md:size-[60px] md:text-[1.8rem]"
    >
      <i className="fa-brands fa-whatsapp" aria-hidden />
      <span className="pointer-events-none absolute right-[75px] hidden translate-x-2.5 rounded-lg border border-line-strong bg-[#0d1423] px-4 py-2 text-sm font-medium whitespace-nowrap opacity-0 shadow-premium transition group-hover:translate-x-0 group-hover:opacity-100 md:block">
        Chat with {contact.founder}
      </span>
    </a>
  );
}
