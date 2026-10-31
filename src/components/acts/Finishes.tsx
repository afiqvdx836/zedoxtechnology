"use client";

import { finishes, product } from "@/config/site";
import { useOrder } from "../order/OrderProvider";

// Act 5, desire. The finishes travel past sideways; picking one carries into the
// order at the close.
export default function Finishes() {
  const { color, setColor } = useOrder();

  return (
    <section
      data-sc-act="pan"
      data-sc-span="2.6"
      className="zx-range"
      aria-labelledby="range-title"
    >
      <div data-sc-stage className="zx-range__stage">
        <div className="zx-rail" data-sc-pan="0.06">
          <div className="zx-rail__lead">
            <h2 id="range-title" className="sc-display zx-h2">
              {finishes.title}
            </h2>
            <p className="zx-body">{finishes.lead}</p>
          </div>
          {product.colors.map((c, i) => {
            const on = c.name === color;
            return (
              <article
                key={c.name}
                className="zx-finish"
                data-on={on || undefined}
                style={
                  { "--i": i + 1, "--metal": c.hex } as React.CSSProperties
                }
              >
                <div className="zx-finish__swatch" aria-hidden />
                <h3 className="zx-finish__name">{c.name}</h3>
                <button
                  type="button"
                  className="zx-chip"
                  aria-pressed={on}
                  aria-label={`${finishes.pick} ${c.name}`}
                  onClick={() => setColor(c.name)}
                >
                  {on ? finishes.picked : finishes.pick}
                </button>
              </article>
            );
          })}
          <aside className="zx-rail__note">
            <h3 className="zx-finish__name">{finishes.note.title}</h3>
            <p className="zx-body">{finishes.note.body}</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
