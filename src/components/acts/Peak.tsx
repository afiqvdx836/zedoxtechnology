import Image from "next/image";
import { media, peak } from "@/config/site";
import ReducedScrub from "./ReducedScrub";

// Cue windows for Isi / Tekan / Tunggu, overlapping so there is never an empty
// stage. Measured against the clip (full-life mapping with dwell 0.4): pour runs
// through the entry slide to p 0.22, the base lights at about 0.22, bubbles from
// about 0.37. Isi greets so the stage is never empty as it slides in. The last
// one closes at 1 because this is not the page's last act.
const cues = ["0 0.25 0 0.05", "0.22 0.58 0.05 0.06", "0.56 1 0.05 0.2"];

const DWELL = 0.4;

// Act 3, the peak: the only clip on the page, scrubbed by the reader's hand.
export default function Peak() {
  return (
    <section
      id="cara"
      data-sc-act="scrub"
      data-sc-span="3.6"
      data-sc-dwell={DWELL}
      className="zx-peak"
      aria-label="Cara guna"
    >
      <div data-sc-stage className="zx-peak__stage">
        <div className="zx-peak__frame">
          <Image
            className="sc-stage__poster"
            src={media.cyclePoster}
            alt=""
            width={720}
            height={1280}
          />
          <video
            data-sc-scrub
            data-sc-src={media.cycle}
            data-sc-src-mobile={media.cycleMobile}
            muted
            playsInline
            preload="none"
            aria-hidden
          />
        </div>
        <div className="sc-scrim sc-scrim--band zx-peak__scrim" aria-hidden />
        <ReducedScrub src={media.cycle} srcMobile={media.cycleMobile} dwell={DWELL} />
        {peak.steps.map((s, i) => (
          <div key={s.title} className="zx-peak__copy" data-sc-cue={cues[i]}>
            <h2 className="sc-display zx-peak__title">{s.title}</h2>
            <p className="zx-peak__body">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
