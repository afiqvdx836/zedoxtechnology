"use client";

import { useEffect, useState } from "react";
import { demo, promo } from "@/config/site";

function remaining(endsAt: string) {
  const ms = new Date(endsAt).getTime() - Date.now();
  if (ms <= 0) return null;
  const s = Math.floor(ms / 1000);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${Math.floor(s / 86400)} hari ${pad(Math.floor((s % 86400) / 3600))}:${pad(Math.floor((s % 3600) / 60))}:${pad(s % 60)}`;
}

// Promo text with a live countdown, plus the demo notice while demo mode is on.
export default function PromoBar() {
  // Rendered only after mount so server and client markup match.
  const [left, setLeft] = useState<string | null>(null);

  useEffect(() => {
    if (!promo.endsAt) return;
    const endsAt = promo.endsAt;
    const tick = () => setLeft(remaining(endsAt));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="bg-deep text-center text-[13px] font-semibold">
      {promo.endsAt && (
        <div className="flex items-center justify-center gap-3 px-4 py-2 text-fg">
          <span>{promo.text}</span>
          <span className="min-w-[110px] rounded-full bg-accent/12 px-2.5 py-0.5 font-mono text-accent tabular-nums" aria-live="off">
            {left ?? "—"}
          </span>
        </div>
      )}
      {demo.enabled && <div className="bg-promo px-4 py-1.5 text-[12px] text-[#2a2000]">{demo.banner}</div>}
    </div>
  );
}
