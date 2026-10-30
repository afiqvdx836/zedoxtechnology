import { contact, demo, footer } from "@/config/site";
import Logo from "./ui/Logo";

export default function Footer() {
  return (
    <footer className="pt-12 pb-8 text-[13px] text-muted">
      <div className="wrap">
        <div className="mb-7 flex flex-wrap justify-between gap-6">
          <Logo />
          <div>
            WhatsApp: {contact.whatsappDisplay}
            <br />
            TikTok:{" "}
            <a href={`https://www.tiktok.com/@${contact.tiktokHandle}`} target="_blank" rel="noopener noreferrer" className="hover:text-fg">
              @{contact.tiktokHandle}
            </a>
          </div>
          <div>No. SSM: {contact.ssm}</div>
        </div>
        <p className="border-t border-line pt-5 text-xs">
          {footer.disclaimer} {footer.copyright}
          {demo.enabled && " Demo konsep."}
        </p>
      </div>
    </footer>
  );
}
