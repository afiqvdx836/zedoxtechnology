import { contact, tiktok } from "@/config/site";
import SectionHead from "./ui/SectionHead";

const card =
  "relative aspect-[9/16] overflow-hidden rounded-2xl border border-line";

// TikTok's player iframe, not the blockquote + embed.js snippet: it fits the card
// and loads nothing until the card is near the viewport.
const player = (id: string) =>
  `https://www.tiktok.com/player/v1/${id}?music_info=1&description=0&rel=0&native_context_menu=0`;

export default function TikTokGrid() {
  return (
    <section className="pt-5 pb-[60px] sm:pb-20">
      <div className="wrap">
        <SectionHead
          eyebrow={tiktok.eyebrow}
          title={tiktok.title}
          subtitle={tiktok.subtitle}
        />
        <div className="grid grid-cols-2 gap-3.5 min-[900px]:grid-cols-4">
          {tiktok.videos.map((v) =>
            v.id ? (
              <div key={v.title} className={`${card} bg-black`}>
                <iframe
                  src={player(v.id)}
                  title={`${v.title} @${contact.tiktokHandle} di TikTok`}
                  loading="lazy"
                  allow="encrypted-media; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 size-full"
                />
              </div>
            ) : (
              <a
                key={v.title}
                href={v.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${card} flex flex-col justify-end bg-gradient-to-br from-[#12324a] to-[#081520] p-4 transition hover:-translate-y-1`}
              >
                <span
                  aria-hidden
                  className="absolute top-1/2 left-1/2 grid size-[54px] -translate-1/2 place-items-center rounded-full bg-white/12 text-lg backdrop-blur-sm"
                >
                  ▶
                </span>
                <b className="text-sm">{v.title}</b>
                <span className="text-xs text-muted">
                  @{contact.tiktokHandle}
                </span>
              </a>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
