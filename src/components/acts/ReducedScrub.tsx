"use client";

import { useEffect, useRef } from "react";

// Under prefers-reduced-motion the engine never fetches a scrub clip and holds
// the poster. The clip here only moves when the reader scrolls (no autoplay, no
// smoothing), so this page keeps it scroll-driven in that mode too. It mirrors
// the engine's mapping (the stage's whole visible life, then the dwell remap) so
// the copy cues land on the same frames. With motion allowed the engine owns the
// clip and this does nothing.
export default function ReducedScrub({
  src,
  srcMobile,
  dwell,
}: {
  src: string;
  srcMobile: string;
  dwell: number;
}) {
  const anchor = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const act = anchor.current?.closest<HTMLElement>("[data-sc-act]");
    const frame = act?.querySelector<HTMLElement>(".zx-peak__frame");
    const video = frame?.querySelector<HTMLVideoElement>("video");
    if (!act || !frame || !video) return;

    let url = "";
    let frameId = 0;
    let gone = false;
    const remap = (x: number) => {
      const c = x - 0.5;
      return (1 - dwell) * x + dwell * (4 * c * c * c + 0.5);
    };

    const tick = () => {
      frameId = requestAnimationFrame(tick);
      if (!video.duration || video.seeking) return;
      const rect = act.getBoundingClientRect();
      const life = Math.min(
        1,
        Math.max(0, (innerHeight - rect.top) / (rect.height + innerHeight)),
      );
      const t = Math.min(remap(life), 0.999) * video.duration;
      if (Math.abs(video.currentTime - t) > 0.02) video.currentTime = t;
    };

    const chosen =
      srcMobile && matchMedia("(max-width: 860px)").matches ? srcMobile : src;
    fetch(chosen)
      .then((r) => {
        if (!r.ok) throw new Error(String(r.status));
        return r.blob();
      })
      .then((blob) => {
        if (gone) return;
        url = URL.createObjectURL(blob);
        // Show the clip (the engine's own .sc-has-clip rules) once a frame has painted.
        video.addEventListener(
          "seeked",
          () => frame.classList.add("sc-has-clip"),
          { once: true },
        );
        video.addEventListener(
          "loadedmetadata",
          () => {
            video.currentTime = 0.001;
            // iOS paints a muted clip only after it has played once.
            video.play().then(
              () => video.pause(),
              () => {},
            );
            tick();
          },
          { once: true },
        );
        video.preload = "auto";
        video.src = url;
      })
      .catch(() => {}); // the poster stays up

    return () => {
      gone = true;
      cancelAnimationFrame(frameId);
      if (url) {
        video.removeAttribute("src");
        video.load();
        URL.revokeObjectURL(url);
      }
    };
  }, [src, srcMobile, dwell]);

  return <span ref={anchor} hidden />;
}
