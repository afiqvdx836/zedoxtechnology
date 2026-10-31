"use client";

import { useOrder } from "./order/OrderProvider";

export default function WhatsAppFloat() {
  const { order } = useOrder();
  return (
    <button
      type="button"
      onClick={order}
      aria-label="Order melalui WhatsApp"
      className="fixed right-5 bottom-5 z-30 grid size-14 cursor-pointer place-items-center rounded-full bg-wa shadow-[0_10px_30px_-6px_rgb(37_211_102/0.6)]"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff" aria-hidden>
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-3.9-4.7-4.1-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.3 0 .5l-.4.6-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.1 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1.1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.2.1.7-.1 1.3Z" />
      </svg>
    </button>
  );
}
