"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { cycle, product } from "@/config/site";
import Bottle, { formatCycle } from "./ui/Bottle";
import SpotlightStage from "./ui/SpotlightStage";
import ScrollVideo from "./ui/ScrollVideo";

// Share of the scroll for each phase: fill water, run the 3-minute cycle, done.
const [FILL_END, RUN_END] = cycle.phaseEnds;

function stateAt(p: number) {
  if (p < FILL_END)
    return {
      phase: 0,
      level: p / FILL_END,
      seconds: product.cycleSeconds,
      active: false,
      intensity: 0,
    };
  if (p < RUN_END) {
    const t = (p - FILL_END) / (RUN_END - FILL_END);
    return {
      phase: 1,
      level: 1,
      seconds: product.cycleSeconds * (1 - t),
      active: true,
      intensity: 0.3 + 0.7 * t,
    };
  }
  return { phase: 2, level: 1, seconds: 0, active: true, intensity: 1 };
}

// The section is tall; its inner panel sticks while the page scrolls through it,
// and scroll progress drives the bottle.
// With the video, React only re-renders when the phase or the shown second changes;
// the playhead and progress bar read the live value from a ref instead.
export default function CycleStory() {
  const ref = useRef<HTMLElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const liveProgress = useRef(0);
  const [progress, setProgress] = useState(0);
  const [videoFailed, setVideoFailed] = useState(false);
  const onVideoFail = useCallback(() => setVideoFailed(true), []);
  const useVideo = Boolean(cycle.video.src) && !videoFailed;

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const travel = el.offsetHeight - window.innerHeight;
      const p = travel > 0 ? Math.min(1, Math.max(0, -rect.top / travel)) : 1;
      liveProgress.current = p;
      if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;
      setProgress((prev) => {
        if (!useVideo) return p;
        const a = stateAt(prev);
        const b = stateAt(p);
        return a.phase === b.phase &&
          Math.round(a.seconds) === Math.round(b.seconds)
          ? prev
          : p;
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [useVideo]);

  const s = stateAt(progress);

  return (
    <section
      id="cara"
      ref={ref}
      className="relative h-[300vh] scroll-mt-16 bg-deep"
    >
      <div className="sticky top-16 flex h-[calc(100svh-4rem)] items-center overflow-hidden">
        <div className="wrap grid w-full items-center gap-6 min-[900px]:grid-cols-[0.9fr_1.1fr] min-[900px]:gap-14">
          <div className="order-2 min-[900px]:order-1">
            <div className="mb-2 text-xs font-bold tracking-[2px] text-accent uppercase">
              {cycle.eyebrow}
            </div>
            <h2 className="mb-6 text-[clamp(32px,5vw,60px)] leading-none">
              {cycle.phases.map((ph, i) => (
                <span
                  key={ph.label}
                  className={`transition-colors duration-300 ${i <= s.phase ? "text-fg" : "text-line"}`}
                >
                  {ph.label}.{i < cycle.phases.length - 1 ? " " : ""}
                </span>
              ))}
            </h2>
            <ol className="grid gap-3">
              {cycle.phases.map((ph, i) => (
                <li
                  key={ph.label}
                  aria-current={i === s.phase ? "step" : undefined}
                  className={`rounded-2xl border p-4 transition duration-300 min-[900px]:p-5 ${
                    i === s.phase
                      ? "border-accent/40 bg-accent/8"
                      : "border-line opacity-50 max-[899px]:hidden"
                  }`}
                >
                  <h3 className="mb-1 text-lg">
                    <span className="mr-2 font-mono text-sm text-accent">
                      0{i + 1}
                    </span>
                    {ph.title}
                  </h3>
                  <p className="text-sm text-muted">{ph.body}</p>
                </li>
              ))}
            </ol>
            <div
              className="mt-5 h-1 overflow-hidden rounded-full bg-line"
              aria-hidden
            >
              <div
                ref={barRef}
                className="h-full origin-left bg-grad will-change-transform"
                style={{ transform: `scaleX(${progress})` }}
              />
            </div>
          </div>

          <SpotlightStage
            className={`order-1 h-[46svh] min-[900px]:order-2 min-[900px]:h-[78svh] ${useVideo ? "w-auto justify-self-center" : ""}`}
            style={useVideo ? { aspectRatio: cycle.video.aspect } : undefined}
            plain={useVideo}
          >
            {useVideo ? (
              <ScrollVideo
                src={cycle.video.src}
                srcMobile={cycle.video.srcMobile}
                poster={cycle.video.poster}
                progressRef={liveProgress}
                onFail={onVideoFail}
                className="absolute inset-0 size-full object-cover"
              />
            ) : (
              <div className="relative h-[36svh] drop-shadow-[0_30px_40px_rgb(0_0_0/0.6)] min-[900px]:h-[62svh]">
                <Bottle
                  id="cycle-bottle"
                  level={s.level}
                  seconds={s.seconds}
                  active={s.active}
                  intensity={s.intensity}
                />
              </div>
            )}
            {cycle.video.showTimer && (
              <span className="absolute top-5 right-5 rounded-full border border-accent/30 bg-deep/80 px-3 py-1 font-mono text-sm text-accent">
                {s.phase === 2 ? "Siap ✓" : formatCycle(s.seconds)}
              </span>
            )}
          </SpotlightStage>
        </div>
      </div>
    </section>
  );
}
