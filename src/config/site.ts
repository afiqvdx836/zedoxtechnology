// All page content and product data lives here. Components only render it.
// Copy is Bahasa Malaysia. Values marked PLACEHOLDER come from the demo and
// must be replaced with real ones before launch.
//
// Copy rule: this is a drinking-water product, not medicine. Never claim it
// treats, cures or prevents any disease (see footer.disclaimer).

export const demo = {
  // Shows the yellow banner and, while contact.whatsapp is empty, a preview
  // modal of the WhatsApp message instead of opening wa.me.
  enabled: true,
  banner: "DEMO KONSEP — Harga, testimoni & spesifikasi adalah placeholder",
};

export const contact = {
  whatsapp: "", // PLACEHOLDER: e.g. "60123456789". Empty = demo modal.
  whatsappDisplay: "+60 XX-XXX XXXX", // PLACEHOLDER
  tiktokHandle: "zedoxtechnology",
  ssm: "XXXXXXXX-X", // PLACEHOLDER
};

export const site = {
  brand: "ZEDOX",
  brandSub: "TECHNOLOGY",
  title: "Zedox Technology — Botol Hidrogen Portable",
  description:
    "Botol hidrogen mudah alih. Tekan satu butang, tunggu 3 minit, dan nikmati air kaya hidrogen di rumah, pejabat atau gym. Hantar seluruh Malaysia.",
};

export const nav = [
  { label: "Kenapa", href: "#kenapa" },
  { label: "Cara Guna", href: "#cara" },
  { label: "Produk", href: "#produk" },
  { label: "FAQ", href: "#faq" },
];

// Optional top bar with a live countdown. Set endsAt to null to hide it.
export const promo = {
  text: "Promo Pelancaran",
  endsAt: "2026-11-30T23:59:59+08:00" as string | null, // PLACEHOLDER
};

// Real product media. Files go in /public. Empty = the drawn spotlight bottle is used.
export const media = {
  heroVideo: "", // e.g. "/media/hero-bubbles.mp4" (macro bubbles, 10–15 s loop)
  heroPoster: "", // e.g. "/media/hero-poster.jpg"
};

export const hero = {
  proof: "7K+ likes di TikTok",
  pill: "Stok terhad · Hantar seluruh Malaysia",
  titleLead: "Air minuman harian,",
  titleAccent: "diperkaya hidrogen.",
  lead: "Botol hidrogen mudah alih — tekan satu butang, tunggu beberapa minit, dan nikmati air kaya hidrogen di mana-mana sahaja. Di rumah, di pejabat, atau di gym.",
  primaryCta: "Order via WhatsApp →",
  secondaryCta: { label: "Tengok cara guna", href: "#cara" },
};

export const trust = [
  "Penghantaran seluruh Malaysia",
  "Bayaran FPX / e-wallet",
  "Warranty & support WhatsApp",
  "Caj USB-C",
];

// Scrolling strip under the hero.
export const marquee = [
  "Isi",
  "Tekan",
  "Minum",
  "Siap dalam 3 minit",
  "Caj USB-C",
  "Membran SPE/PEM",
  "Kaca borosilikat",
];

export type IconName = "membrane" | "clock" | "phone" | "drop";

export const features = {
  eyebrow: "Kenapa Zedox",
  title: "Direka untuk rutin harian anda",
  subtitle:
    "Ringan, senang dibawa, dan senang digunakan — tak perlu mesin besar di dapur.",
  items: [
    {
      icon: "membrane" as IconName,
      title: "Membran SPE/PEM",
      body: "Memisahkan gas sampingan supaya hanya air berhidrogen yang anda minum.",
    },
    {
      icon: "clock" as IconName,
      stat: "3:00", // the large bento card
      title: "Siap dalam 3 minit",
      body: "Satu tekan butang — kitaran automatik dengan paparan masa.",
    },
    {
      icon: "phone" as IconName,
      title: "Caj USB-C",
      body: "Sekali caj untuk banyak kitaran. Sesuai untuk travel.",
    },
    {
      icon: "drop" as IconName,
      title: "Bahan food-grade",
      body: "Kaca borosilikat & badan aluminium — selamat dan tahan lama.",
    },
  ],
};

// Pinned scroll story. Each phase takes a share of the scroll (see CycleStory.tsx).
export const cycle = {
  eyebrow: "Cara Guna",
  title: "Isi. Tekan. Minum.",
  // Real clip of the cycle, scrubbed by scroll. Files go in /public. Empty src = drawn bottle.
  video: {
    src: "", // e.g. "/media/cycle.mp4" (landscape or square)
    srcMobile: "", // optional portrait crop for phones
    poster: "", // first frame as a .jpg, shown while the clip loads
    showTimer: true, // the 03:00 badge beside the bottle
  },
  // Where the Isi and Tekan phases end, as a share of the scroll (and of the clip).
  phaseEnds: [0.28, 0.85] as [number, number],
  phases: [
    {
      label: "Isi",
      title: "Isi air bersih",
      body: "Air suling atau air mineral. Elakkan air panas, air bergas atau minuman manis.",
    },
    {
      label: "Tekan",
      title: "Tekan sekali",
      body: "Kitaran 3 minit bermula. Gelembung halus naik dengan lampu biru.",
    },
    {
      label: "Minum",
      title: "Minum segar",
      body: "Minum dalam masa 15–30 minit selepas kitaran tamat untuk hasil terbaik.",
    },
  ],
};

export const product = {
  tag: "HARGA PROMO",
  name: "Botol Hidrogen Portable",
  model: "Model 400ml · Generasi terbaru",
  compareAt: "RM XXX", // PLACEHOLDER
  priceNote: "*Harga placeholder untuk demo",
  cycleSeconds: 180, // shown on the bottle display
  colors: [
    { name: "Gunmetal", hex: "#4a5965" },
    { name: "Silver", hex: "#d9dde0" },
    { name: "Hitam", hex: "#111111" },
  ],
  specs: [
    "Kapasiti 400ml",
    "Membran SPE/PEM",
    "Caj USB-C",
    "Kitaran 3 minit",
    "Kaca borosilikat",
    "Warranty 1 tahun*",
  ],
  // PLACEHOLDER prices. The selected bundle is added to the WhatsApp message.
  bundles: [
    { id: "1", label: "1 botol", price: "RM XXX", note: "Untuk diri sendiri" },
    { id: "2", label: "Beli 2", price: "RM XXX", note: "Jimat RM XX · untuk pasangan atau ibu bapa", badge: "Popular" },
  ] as { id: string; label: string; price: string; note: string; badge?: string }[],
  ctaWhatsapp: "Order via WhatsApp",
  ctaOnline: "Bayar Online",
};

// Zedox vs a typical cheap online bottle. Keep every row factual and checkable.
// ok: true = tick, false = cross, null = unknown.
export const compare = {
  eyebrow: "Bandingkan",
  title: "Zedox vs botol murah online",
  subtitle: "Bentuk botol mungkin sama. Yang beza ialah apa yang ada di belakangnya.",
  columns: ["Zedox", "Botol murah online"],
  rows: [
    { feature: "Membran SPE/PEM dengan saluran gas sampingan", zedox: { text: "Ya", ok: true }, other: { text: "Tak dinyatakan", ok: null } },
    { feature: "Bacaan hidrogen (ppb) diuji", zedox: { text: "Akan dikemaskini", ok: null }, other: { text: "Dakwaan tanpa ujian", ok: false } }, // PLACEHOLDER until measured
    { feature: "Kaca borosilikat food-grade", zedox: { text: "Ya", ok: true }, other: { text: "Kadang-kadang plastik", ok: null } },
    { feature: "Warranty di Malaysia", zedox: { text: "1 tahun", ok: true }, other: { text: "Tiada", ok: false } },
    { feature: "Support terus melalui WhatsApp", zedox: { text: "Ya", ok: true }, other: { text: "Chat platform sahaja", ok: false } },
    { feature: "Penjual berdaftar SSM", zedox: { text: "Ya", ok: true }, other: { text: "Tidak diketahui", ok: null } },
  ] as { feature: string; zedox: { text: string; ok: boolean | null }; other: { text: string; ok: boolean | null } }[],
};

// PLACEHOLDER: replace with real customer quotes (with their permission).
export const testimonials = {
  eyebrow: "Testimoni",
  title: "Apa kata pelanggan",
  note: "Placeholder — akan diganti dengan testimoni sebenar (dengan izin pelanggan).",
  items: [
    {
      initial: "A",
      quote:
        "[Ruang untuk testimoni sebenar pelanggan — screenshot WhatsApp atau review.]",
      who: "Nama Pelanggan · Lokasi",
    },
    {
      initial: "B",
      quote:
        "[Ruang untuk testimoni sebenar pelanggan — screenshot WhatsApp atau review.]",
      who: "Nama Pelanggan · Lokasi",
    },
    {
      initial: "C",
      quote:
        "[Ruang untuk testimoni sebenar pelanggan — screenshot WhatsApp atau review.]",
      who: "Nama Pelanggan · Lokasi",
    },
  ],
};

export const tiktok = {
  eyebrow: "TikTok",
  title: "Tengok demo penuh di TikTok",
  subtitle: "Video sebenar boleh di-embed terus di sini.",
  // PLACEHOLDER: point each at its own video URL.
  videos: [
    {
      title: "Unboxing",
      url: `https://www.tiktok.com/@${contact.tiktokHandle}`,
    },
    {
      title: "Cara guna",
      url: `https://www.tiktok.com/@${contact.tiktokHandle}`,
    },
    {
      title: "Cuci botol",
      url: `https://www.tiktok.com/@${contact.tiktokHandle}`,
    },
    { title: "Q&A", url: `https://www.tiktok.com/@${contact.tiktokHandle}` },
  ],
};

export const faqs = {
  eyebrow: "FAQ",
  title: "Soalan lazim",
  items: [
    {
      q: "Air apa yang sesuai digunakan?",
      a: "Air minuman bersih seperti air suling atau air mineral. Jangan guna air panas, air bergas, susu atau minuman manis.",
    },
    {
      q: "Berapa lama sekali caj boleh tahan?",
      a: "Bergantung kepada kekerapan penggunaan — biasanya beberapa hari untuk penggunaan harian. (Spesifikasi tepat akan dikemaskini.)",
    },
    {
      q: "Macam mana nak cuci botol?",
      a: "Bilas dengan air bersih. Jangan rendam bahagian tapak (elektronik) dalam air.",
    },
    {
      q: "Berapa lama penghantaran?",
      a: "Semenanjung 2–4 hari bekerja, Sabah & Sarawak 4–7 hari bekerja. (Placeholder)",
    },
    {
      q: "Ada warranty?",
      a: "Ya — maklumat warranty dan cara claim akan dinyatakan di sini.",
    },
  ],
};

export const ctaBand = {
  title: "Mula rutin hidrasi baru anda hari ini",
  body: "Ada soalan? Tim kami sedia bantu melalui WhatsApp.",
  cta: "Chat & Order Sekarang",
};

export const footer = {
  disclaimer:
    "Produk ini bukan ubat dan tidak bertujuan untuk mendiagnosis, merawat, menyembuh atau mencegah sebarang penyakit.",
  copyright: "© 2026 Zedox Technology.",
};

// WhatsApp order message, built from the current colour and quantity.
export function orderMessage(color: string, qty: number, bundle: string) {
  return `Hai Zedox! Saya nak order:\n\n• ${product.name}\n• Pakej: ${bundle}\n• Warna: ${color}\n• Kuantiti: ${qty}\n\nNama:\nAlamat:`;
}
