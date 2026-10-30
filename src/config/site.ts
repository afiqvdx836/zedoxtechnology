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

export const hero = {
  pill: "Stok terhad · Hantar seluruh Malaysia",
  titleLead: "Air minuman harian,",
  titleAccent: "diperkaya hidrogen.",
  lead: "Botol hidrogen mudah alih — tekan satu butang, tunggu beberapa minit, dan nikmati air kaya hidrogen di mana-mana sahaja. Di rumah, di pejabat, atau di gym.",
  primaryCta: "Order via WhatsApp →",
  secondaryCta: { label: "Tengok cara guna", href: "#cara" },
  stats: [
    { value: "1.7K+", label: "Pengikut TikTok" },
    { value: "7K+", label: "Likes" },
    { value: "1 Tahun", label: "Warranty*" },
  ],
};

export const trust = [
  "Penghantaran seluruh Malaysia",
  "Bayaran FPX / e-wallet",
  "Warranty & support WhatsApp",
  "Caj USB-C",
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

export const steps = {
  eyebrow: "Cara Guna",
  title: "Semudah 1, 2, 3",
  items: [
    {
      title: "Isi air",
      body: "Isi dengan air minuman bersih (air suling / air mineral). Elakkan air bergas atau minuman manis.",
    },
    {
      title: "Tekan butang",
      body: "Tekan sekali untuk mula. Gelembung halus akan kelihatan dengan lampu biru.",
    },
    {
      title: "Minum segar",
      body: "Minum dalam masa 15–30 minit selepas kitaran tamat untuk hasil terbaik.",
    },
  ],
};

export const product = {
  tag: "HARGA PROMO",
  name: "Botol Hidrogen Portable",
  model: "Model 400ml · Generasi terbaru",
  price: "RM XXX", // PLACEHOLDER
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
  ctaWhatsapp: "Order via WhatsApp",
  ctaOnline: "Bayar Online",
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
export function orderMessage(color: string, qty: number) {
  return `Hai Zedox! Saya nak order:\n\n• ${product.name}\n• Warna: ${color}\n• Kuantiti: ${qty}\n\nNama:\nAlamat:`;
}
