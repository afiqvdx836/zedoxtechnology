"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  srcMobile?: string; // used below 900px when set (e.g. a portrait crop)
  poster?: string;
  progress: number; // 0–1, mapped onto the clip's duration
  onFail?: () => void;
  className?: string;
};

// A muted clip whose playhead follows the scroll instead of playing on its own.
// The file is fetched whole into a blob once the section is near the viewport,
// so seeking is instant. Encode it with a keyframe on every frame (see docs/scroll-video.md).
export default function ScrollVideo({ src, srcMobile, poster, progress, onFail, className = "" }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const target = useRef(progress);
  const [near, setNear] = useState(false);
  const [url, setUrl] = useState<string | null>(null);

  target.current = progress;

  // Start loading when the section is within one screen of the viewport.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setNear(true), { rootMargin: "100% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!near) return;
    const chosen = srcMobile && window.matchMedia("(max-width: 899px)").matches ? srcMobile : src;
    let objectUrl: string | null = null;
    let cancelled = false;
    fetch(chosen)
      .then((r) => {
        if (!r.ok) throw new Error(`${r.status}`);
        return r.blob();
      })
      .then((blob) => {
        if (cancelled) return;
        objectUrl = URL.createObjectURL(blob);
        setUrl(objectUrl);
      })
      .catch(() => !cancelled && onFail?.());
    return () => {
      cancelled = true;
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [near, src, srcMobile, onFail]);

  // Ease the playhead toward the scroll position every frame.
  useEffect(() => {
    let frame = 0;
    const loop = () => {
      const v = ref.current;
      if (v && v.duration && !v.seeking) {
        const goal = target.current * Math.max(0, v.duration - 0.04);
        const diff = goal - v.currentTime;
        if (Math.abs(diff) > 0.008) v.currentTime += diff * 0.3;
      }
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frame);
  }, []);

  // iOS Safari only paints seeked frames after the video has played once.
  const prime = () => {
    const v = ref.current;
    v?.play()
      .then(() => v.pause())
      .catch(() => {});
  };

  return (
    <video
      ref={ref}
      src={url ?? undefined}
      poster={poster || undefined}
      muted
      playsInline
      preload="auto"
      onLoadedData={prime}
      onError={() => url && onFail?.()}
      aria-hidden
      className={className}
    />
  );
}
