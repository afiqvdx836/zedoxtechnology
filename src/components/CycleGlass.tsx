"use client";

import { useEffect, useRef } from "react";
import { peak, product } from "@/config/site";

const BUBBLES = 9;
const clamp01 = (x: number) => Math.min(1, Math.max(0, x));

function readout(seconds: number) {
  const s = Math.ceil(seconds);
  return `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
}

// The signature move: the page runs the bottle's 3-minute cycle. The glass fills
// as the reader scrolls toward the clip, switches on at the clip's "Tekan" moment,
// fizzes harder when they scroll faster, and counts 3:00 down to "Siap" across the
// rest of the clip. Decorative: the clip's own copy carries the meaning.
export default function CycleGlass() {
  const root = useRef<HTMLDivElement>(null);
  const tube = useRef<HTMLDivElement>(null);
  const read = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = root.current;
    const tubeEl = tube.current;
    const readEl = read.current;
    const act = document.getElementById("cara");
    if (!el || !tubeEl || !readEl || !act) return;

    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dots = Array.from(
      tubeEl.querySelectorAll<HTMLElement>(".zx-glass__bubble"),
    );
    const bubbles = dots.map((dot, i) => ({
      dot,
      y: (i + 0.5) / BUBBLES,
      x: Math.random(),
      rate: 0.6 + Math.random() * 0.8,
    }));

    let frame = 0;
    let last = performance.now();
    let lastY = scrollY;
    let speed = 0;
    let shown = "";

    const tick = (now: number) => {
      frame = requestAnimationFrame(tick);
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;

      const rect = act.getBoundingClientRect();
      const travel = rect.height - innerHeight;
      const p = travel > 0 ? clamp01(-rect.top / travel) : 0;
      const pressScroll =
        scrollY + rect.top + peak.pressAt * Math.max(travel, 0);
      const level = pressScroll > 0 ? clamp01(scrollY / pressScroll) : 1;

      let state = "idle";
      let text = readout(product.cycleSeconds);
      if (p >= peak.doneAt) {
        state = "done";
        text = "Siap";
      } else if (p >= peak.pressAt) {
        state = "run";
        text = readout(
          product.cycleSeconds *
            (1 - (p - peak.pressAt) / (peak.doneAt - peak.pressAt)),
        );
      }

      el.style.setProperty("--level", level.toFixed(4));
      if (el.dataset.state !== state) el.dataset.state = state;
      if (text !== shown) readEl.textContent = shown = text;

      // Scroll velocity, smoothed, shapes how hard the glass fizzes.
      const v = Math.abs(scrollY - lastY) / Math.max(dt, 0.001);
      lastY = scrollY;
      speed += (Math.min(v / 1200, 2.5) - speed) * 0.12;
      el.style.setProperty("--fizz", Math.min(speed, 1).toFixed(3));

      if (reduce || state === "idle") return;
      const h = tubeEl.clientHeight;
      const w = tubeEl.clientWidth;
      for (const b of bubbles) {
        b.y -= dt * b.rate * (0.35 + speed * 1.6);
        if (b.y < 0.04) {
          b.y = 0.96;
          b.x = Math.random();
        }
        b.dot.style.transform = `translate3d(${(b.x * (w - 4)).toFixed(1)}px, ${(b.y * h).toFixed(1)}px, 0)`;
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="zx-glass" ref={root} data-state="idle" aria-hidden>
      <div className="zx-glass__tube" ref={tube}>
        <div className="zx-glass__water" />
        {Array.from({ length: BUBBLES }, (_, i) => (
          <i key={i} className="zx-glass__bubble" />
        ))}
      </div>
      <span className="zx-glass__read" ref={read}>
        03:00
      </span>
    </div>
  );
}
