"use client";

import Image from "next/image";
import {
  close,
  contact,
  demo,
  footer,
  media,
  product,
  site,
} from "@/config/site";
import { useOrder } from "../order/OrderProvider";

// Act 7, resolve. The last element on the page: the full bottle, the visitor's
// choices, one button. The footer lives inside the stage so nothing trails after.
export default function Close() {
  const { color, setColor, bundleId, setBundleId, qty, setQty, order } =
    useOrder();

  return (
    <section
      id="order"
      data-sc-act="pin"
      data-sc-span="1.3"
      className="zx-close"
      aria-labelledby="close-title"
    >
      <div data-sc-stage className="zx-close__stage" data-sc-spotlight>
        <Image
          className="zx-close__bottle"
          src={media.closeBottle}
          alt={close.imageAlt}
          width={720}
          height={1280}
        />

        <div className="zx-close__panel" data-sc-cue="0 1 0 0">
          <h2 id="close-title" className="sc-display zx-h2">
            {close.title}
          </h2>
          <p className="zx-close__lead">{close.lead}</p>

          <fieldset className="zx-field">
            <legend>{close.colorLabel}</legend>
            <div className="zx-field__row">
              {product.colors.map((c) => (
                <label key={c.name} className="zx-option zx-option--color">
                  <input
                    type="radio"
                    name="color"
                    value={c.name}
                    checked={c.name === color}
                    onChange={() => setColor(c.name)}
                  />
                  <i style={{ background: c.hex }} aria-hidden />
                  {c.name}
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className="zx-field">
            <legend>{close.bundleLabel}</legend>
            <div className="zx-field__row">
              {product.bundles.map((b) => (
                <label key={b.id} className="zx-option zx-option--bundle">
                  <input
                    type="radio"
                    name="bundle"
                    value={b.id}
                    checked={b.id === bundleId}
                    onChange={() => setBundleId(b.id)}
                  />
                  <span>
                    <b>{b.label}</b> {b.price}
                    <small>{b.note}</small>
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="zx-close__act">
            <div className="zx-qty" role="group" aria-label={close.qtyLabel}>
              <button
                type="button"
                aria-label="Kurangkan"
                onClick={() => setQty(qty - 1)}
                disabled={qty <= 1}
              >
                −
              </button>
              <span aria-live="polite">{qty}</span>
              <button
                type="button"
                aria-label="Tambah"
                onClick={() => setQty(qty + 1)}
              >
                +
              </button>
            </div>
            <button
              type="button"
              className="zx-btn zx-btn--lg"
              data-sc-magnet="0.26"
              onClick={order}
            >
              {site.cta}
            </button>
          </div>
        </div>

        <footer className="zx-close__foot">
          <p>{footer.disclaimer}</p>
          <p>
            {demo.note} {footer.clipNote}
          </p>
          <p>
            {footer.copyright} · SSM {contact.ssm} · WhatsApp{" "}
            {contact.whatsappDisplay} ·{" "}
            <a
              href={`https://www.tiktok.com/@${contact.tiktokHandle}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              TikTok @{contact.tiktokHandle}
            </a>
          </p>
        </footer>
      </div>
    </section>
  );
}
