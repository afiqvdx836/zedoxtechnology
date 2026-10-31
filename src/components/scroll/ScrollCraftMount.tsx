"use client";

import { useEffect } from "react";

type ScrollCraftApi = { destroy: () => void };

declare global {
  interface Window {
    ScrollCraft?: { mount: (root: Element) => ScrollCraftApi };
  }
}

// Mounts the vendored scroll-craft engine on the rendered page. The engine reads
// the data-sc-* attributes off the markup; it never builds DOM. Loaded in the
// browser only, because it reads matchMedia the moment it runs.
export default function ScrollCraftMount() {
  useEffect(() => {
    let api: ScrollCraftApi | undefined;
    let gone = false;
    import("@/scrollcraft/scrollcraft.js").then(() => {
      if (!gone && window.ScrollCraft)
        api = window.ScrollCraft.mount(document.body);
    });
    return () => {
      gone = true;
      api?.destroy();
    };
  }, []);

  return null;
}
