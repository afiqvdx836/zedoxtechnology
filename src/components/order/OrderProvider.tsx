"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { contact, demo, orderMessage, product } from "@/config/site";
import { btn } from "../ui/styles";

type OrderState = {
  color: string;
  qty: number;
  bundleId: string;
  setBundleId: (id: string) => void;
  setColor: (c: string) => void;
  setQty: (q: number) => void;
  order: () => void;
};

const OrderContext = createContext<OrderState | null>(null);

export function useOrder() {
  const ctx = useContext(OrderContext);
  if (!ctx) throw new Error("useOrder must be used inside <OrderProvider>");
  return ctx;
}

// Holds the chosen bundle, colour and quantity for every order button on the page.
// With a real WhatsApp number it opens wa.me; without one (demo) it previews the message.
export function OrderProvider({ children }: { children: React.ReactNode }) {
  const [color, setColor] = useState(product.colors[0].name);
  const [qty, setQtyRaw] = useState(1);
  const [bundleId, setBundleId] = useState(product.bundles[0].id);
  const [preview, setPreview] = useState<string | null>(null);

  const setQty = useCallback((q: number) => setQtyRaw(Math.max(1, q)), []);

  const order = useCallback(() => {
    const bundle = product.bundles.find((b) => b.id === bundleId) ?? product.bundles[0];
    const msg = orderMessage(color, qty, bundle.label);
    if (contact.whatsapp) {
      window.open(`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
    } else if (demo.enabled) {
      setPreview(msg);
    }
  }, [color, qty, bundleId]);

  useEffect(() => {
    if (!preview) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setPreview(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [preview]);

  return (
    <OrderContext.Provider value={{ color, qty, bundleId, setBundleId, setColor, setQty, order }}>
      {children}
      {preview && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="order-preview-title"
          className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-5"
          onClick={(e) => e.target === e.currentTarget && setPreview(null)}
        >
          <div className="w-full max-w-[420px] rounded-[20px] border border-line bg-card p-7">
            <h3 id="order-preview-title" className="mb-2 text-lg">
              Demo: Mesej WhatsApp
            </h3>
            <p className="text-sm text-muted">Dalam versi live, butang ni akan buka WhatsApp dengan mesej siap diisi:</p>
            <pre className="my-4 rounded-xl border border-line bg-bg p-3.5 font-sans text-sm whitespace-pre-wrap text-muted">{preview}</pre>
            <button type="button" autoFocus className={`${btn.base} ${btn.primary} w-full`} onClick={() => setPreview(null)}>
              Faham
            </button>
          </div>
        </div>
      )}
    </OrderContext.Provider>
  );
}
