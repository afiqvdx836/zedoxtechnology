import { contact, footer, site } from "@/config/site";
import { waLink } from "@/lib/whatsapp";
import Logo from "./ui/Logo";

const social = [
  { href: `https://www.tiktok.com/@${contact.tiktokHandle}`, icon: "fa-tiktok", label: "TikTok" },
  { href: waLink(), icon: "fa-whatsapp", label: "WhatsApp" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink-deep pt-20 pb-8 text-sm text-fg-2">
      <div className="container-page">
        <div className="mb-12 grid gap-10 md:grid-cols-[1.4fr_0.8fr_0.8fr] md:gap-14">
          <div>
            <div className="mb-5">
              <Logo />
            </div>
            <p className="mb-6 max-w-[340px]">{site.tagline}</p>
            <div className="flex gap-4">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex size-9 items-center justify-center rounded-full border border-line bg-white/3 transition hover:bg-cyan hover:text-ink-deep hover:shadow-glow-cyan"
                >
                  <i className={`fa-brands ${s.icon}`} aria-hidden />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-lg">Clinic Location</h4>
            <p className="mb-4 font-semibold !text-white">{contact.clinicName}</p>
            <p className="text-sm leading-normal">
              {contact.address}
              <br />
              <span className="text-fg-3">{contact.serviceArea}</span>
            </p>
          </div>

          <div>
            <h4 className="mb-6 text-lg">Contact & Inquiries</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <i className="fa-solid fa-circle-user mt-1 text-cyan" aria-hidden />
                <span>
                  {contact.founder}
                  <br />
                  <small>{contact.founderTitle}</small>
                </span>
              </li>
              <li className="flex gap-3">
                <i className="fa-solid fa-phone mt-1 text-cyan" aria-hidden />
                <a href={`tel:+${contact.whatsapp}`} className="hover:text-white">
                  {contact.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center">
          <p className="mb-3 text-xs">{footer.copyright}</p>
          <p className="mx-auto max-w-[900px] text-xs leading-relaxed !text-fg-3">
            <strong>Medical Disclaimer:</strong> {footer.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
