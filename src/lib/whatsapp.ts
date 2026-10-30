import { contact, whatsappMessages, type WhatsappSource } from "@/config/site";

// Pass a known source key, or any custom message text (e.g. a session tier's).
export function waLink(source?: WhatsappSource | (string & {})) {
  const base = `https://wa.me/${contact.whatsapp}`;
  if (!source) return base;
  const text = source in whatsappMessages ? whatsappMessages[source as WhatsappSource] : source;
  return `${base}?text=${encodeURIComponent(text)}`;
}
