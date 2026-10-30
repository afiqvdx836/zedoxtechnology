"use client";

import { product } from "@/config/site";
import { useOrder } from "./order/OrderProvider";
import Bottle from "./ui/Bottle";
import SpotlightStage from "./ui/SpotlightStage";
import { btn } from "./ui/styles";

export default function Product() {
  const { color, qty, bundleId, setBundleId, setColor, setQty, order } = useOrder();
  const active = product.colors.find((c) => c.name === color) ?? product.colors[0];
  const bundle = product.bundles.find((b) => b.id === bundleId) ?? product.bundles[0];

  return (
    <section id="produk" className="scroll-mt-16 bg-bg-2 py-20 sm:py-28">
      <div className="wrap">
        <div className="grid items-center gap-10 rounded-3xl border border-line bg-card p-6 min-[900px]:grid-cols-2 min-[900px]:p-10">
          <SpotlightStage className="h-[340px] min-[900px]:h-[520px]">
            <div className="h-[260px] min-[900px]:h-[400px] drop-shadow-[0_30px_40px_rgb(0_0_0/0.6)]">
              <Bottle id="product-bottle" metal={active.hex} />
            </div>
          </SpotlightStage>

          <div>
            <div className="mb-3 inline-block rounded-md bg-promo/12 px-2.5 py-1 text-xs font-bold text-promo">{product.tag}</div>
            <h2 className="mb-1 text-[clamp(26px,3.6vw,38px)] leading-tight tracking-tight">{product.name}</h2>
            <p className="text-muted">{product.model}</p>
            <div className="mt-1.5 mb-0.5 text-4xl font-extrabold">
              {bundle.price}
              <s className="ml-2.5 text-lg font-medium text-muted">{product.compareAt}</s>
            </div>
            <p className="mb-[22px] text-xs text-muted">{product.priceNote}</p>

            <fieldset className="mb-[22px]">
              <legend className="mb-2 text-[13px] font-semibold text-muted">Pakej</legend>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {product.bundles.map((b) => (
                  <label
                    key={b.id}
                    className={`relative cursor-pointer rounded-2xl border p-4 transition has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-accent ${
                      b.id === bundleId ? "border-accent bg-accent/8" : "border-line hover:border-muted"
                    }`}
                  >
                    <input type="radio" name="bundle" value={b.id} checked={b.id === bundleId} onChange={() => setBundleId(b.id)} className="sr-only" />
                    {b.badge && (
                      <span className="absolute -top-2.5 right-3 rounded-full bg-grad px-2 py-0.5 text-[11px] font-bold text-ink">{b.badge}</span>
                    )}
                    <span className="block font-display text-lg font-bold">{b.label}</span>
                    <span className="block text-sm text-fg">{b.price}</span>
                    <span className="mt-1 block text-xs text-muted">{b.note}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset className="mb-[22px]">
              <legend className="mb-2 text-[13px] font-semibold text-muted">
                Warna: <span className="text-fg">{color}</span>
              </legend>
              <div className="flex gap-2.5">
                {product.colors.map((c) => (
                  <button
                    key={c.name}
                    type="button"
                    aria-label={c.name}
                    aria-pressed={c.name === color}
                    onClick={() => setColor(c.name)}
                    style={{ background: c.hex }}
                    className={`size-9 cursor-pointer rounded-full outline-2 outline-offset-2 ${c.name === color ? "outline-accent" : "outline-line"}`}
                  />
                ))}
              </div>
            </fieldset>

            <div className="mb-2 text-[13px] font-semibold text-muted" id="qty-label">
              Kuantiti
            </div>
            <div className="mb-6 inline-flex items-center rounded-full border border-line" role="group" aria-labelledby="qty-label">
              <button type="button" aria-label="Kurangkan" onClick={() => setQty(qty - 1)} className="size-10 cursor-pointer text-lg">
                −
              </button>
              <span className="w-8 text-center font-bold tabular-nums" aria-live="polite">
                {qty}
              </span>
              <button type="button" aria-label="Tambah" onClick={() => setQty(qty + 1)} className="size-10 cursor-pointer text-lg">
                +
              </button>
            </div>

            <div className="flex flex-wrap gap-2.5">
              <button type="button" onClick={order} className={`${btn.base} ${btn.primary}`}>
                {product.ctaWhatsapp}
              </button>
              <button type="button" onClick={order} className={`${btn.base} ${btn.ghost}`}>
                {product.ctaOnline}
              </button>
            </div>

            <ul className="mt-5 grid grid-cols-2 gap-2 text-[13px] text-muted">
              {product.specs.map((s) => (
                <li key={s}>
                  <span className="font-bold text-mint">✓ </span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
