// All page copy and product data lives here. Components only render it.
// Copy is Bahasa Malaysia. Values marked PLACEHOLDER must be replaced with real
// ones before launch.
//
// Copy rules:
// - This is a drinking-water product, not medicine. Never claim it treats, cures
//   or prevents any disease, and no health testimonials (Food Act 1983 s17).
// - No invented numbers. A figure appears only once it is verified.
// - No em dashes in visible copy. Use a full stop, comma or colon.
//
// Page plan, feeling curve and score: scrollcraft/builds/zedox/BRIEF.md

export const demo = {
  // While contact.whatsapp is empty, order buttons preview the message instead of opening wa.me.
  enabled: true,
  note: "Harga dalam paparan ini adalah placeholder dan akan dikemas kini.",
};

export const contact = {
  whatsapp: "60176663171", // digits only, country code first. Empty = demo preview dialog.
  whatsappDisplay: "+60 17-666 3171",
  tiktokHandle: "zedoxtechnology",
  ssm: "XXXXXXXX-X", // PLACEHOLDER
};

export const site = {
  brand: "ZEDOX",
  brandSub: "TECHNOLOGY",
  title: "Zedox Technology: botol hidrogen portable",
  description:
    "Botol hidrogen mudah alih 400ml. Isi air, tekan sekali, siap dalam 3 minit. Order terus melalui WhatsApp, hantar seluruh Malaysia.",
  cta: "Order via WhatsApp", // the one label for the one action, used everywhere
};

// Clip and stills, all cut from the same AI-generated clip (see BRIEF.md).
export const media = {
  heroBottle: "/media/hero-bottle.jpg",
  heroFar: "/media/hero-far.jpg",
  cycle: "/media/cycle.mp4", // 720x1280, a keyframe on every frame, no audio
  cycleMobile: "/media/cycle-mobile.mp4",
  cyclePoster: "/media/cycle-poster.jpg",
  macro: "/media/bubbles-macro.jpg",
  closeBottle: "/media/close-bottle.jpg",
};

// Act 1: recognition.
export const hero = {
  title: "Air berhidrogen, dari botol anda sendiri.",
  lead: "Botol mudah alih 400ml. Isi air, tekan sekali, siap dalam 3 minit.",
  beat: "Nampak biasa, sampai anda tekan butang di tapaknya.",
  imageAlt:
    "Botol hidrogen Zedox separuh berisi air, berdiri di atas batu dalam bilik gelap",
};

// Act 2: curiosity. Authored silence before the clip: no media.
export const inside = {
  title: "Apa yang berlaku dalam 3 minit?",
  body: [
    "Di tapak botol ada elektrod dan membran SPE/PEM. Bila butang ditekan, arus kecil memisahkan sebahagian air, dan hidrogen larut terus ke dalam air dalam botol.",
    "Membran memisahkan gas sampingan, supaya yang tinggal untuk diminum hanyalah air berhidrogen.",
  ],
};

// Act 3: the peak. Positions are act progress (see the cue note in Peak.tsx).
export const peak = {
  steps: [
    {
      title: "Isi.",
      body: "Air suling atau air mineral. Bukan air panas, bukan air bergas.",
    },
    {
      title: "Tekan.",
      body: "Lampu biru menyala dan gelembung halus mula naik dari tapak.",
    },
    {
      title: "Tunggu 3 minit.",
      body: "Kemudian minum dalam masa 15 hingga 30 minit.",
    },
  ],
  pressAt: 0.22, // where the cycle glass switches on
  doneAt: 0.92, // where its countdown reaches 0:00
};

// Act 4: substance, as plain labels.
export const facts = {
  title: "Yang anda dapat.",
  rows: [
    { k: "Kapasiti", v: "400 ml" },
    { k: "Bekas", v: "Kaca borosilikat" },
    { k: "Badan", v: "Aluminium" },
    { k: "Penjana", v: "Elektrod, membran SPE/PEM" },
    { k: "Kitaran", v: "3 minit, satu butang" },
    { k: "Caj", v: "USB-C" },
    { k: "Warranty", v: "1 tahun*" },
  ],
  footnote: "*Terma warranty dimaklumkan semasa order.",
  imageAlt:
    "Gelembung halus naik melalui air dalam botol kaca yang bercahaya biru",
};

// Act 5: range.
export const finishes = {
  title: "Pilih warna anda.",
  lead: "Tiga kemasan. Pilihan anda terus masuk ke mesej order.",
  pick: "Pilih",
  picked: "Dipilih",
  note: {
    title: "Beli dua?",
    body: "Pakej Beli 2 untuk pasangan atau ibu bapa. Pilih pakej di bahagian order.",
  },
};

export const product = {
  name: "Botol Hidrogen Portable",
  cycleSeconds: 180,
  colors: [
    { name: "Gunmetal", hex: "#4a5965" },
    { name: "Silver", hex: "#d9dde0" },
    { name: "Hitam", hex: "#16181a" },
  ],
  // PLACEHOLDER prices. The selected bundle is added to the WhatsApp message.
  bundles: [
    { id: "1", label: "1 botol", price: "RM XXX", note: "Untuk diri sendiri" },
    {
      id: "2",
      label: "Beli 2",
      price: "RM XXX",
      note: "Untuk pasangan atau ibu bapa",
    },
  ] as { id: string; label: string; price: string; note: string }[],
};

// Act 6: reassurance.
export const faqs = {
  title: "Soalan lazim.",
  items: [
    {
      q: "Air apa yang sesuai digunakan?",
      a: "Air minuman bersih seperti air suling atau air mineral. Jangan guna air panas, air bergas, susu atau minuman manis.",
    },
    {
      q: "Berapa lama sekali caj boleh tahan?",
      a: "Bergantung kepada kekerapan penggunaan, biasanya beberapa hari untuk penggunaan harian. Spesifikasi tepat akan dikemas kini.",
    },
    {
      q: "Macam mana nak cuci botol?",
      a: "Bilas dengan air bersih. Jangan rendam bahagian tapak (elektronik) dalam air.",
    },
    {
      q: "Berapa lama penghantaran?",
      a: "Semenanjung 2 hingga 4 hari bekerja, Sabah dan Sarawak 4 hingga 7 hari bekerja.", // PLACEHOLDER
    },
    {
      q: "Ada warranty?",
      a: "Ya. Terma warranty dan cara claim dimaklumkan semasa order melalui WhatsApp.",
    },
  ],
};

// Act 7: resolve.
export const close = {
  title: "Siap. Sekarang, minum.",
  lead: "Pilihan anda dihantar sebagai mesej WhatsApp. Kami balas dengan harga, penghantaran dan cara bayaran.",
  colorLabel: "Warna",
  bundleLabel: "Pakej",
  qtyLabel: "Kuantiti",
  imageAlt:
    "Botol Zedox penuh air dengan gelembung halus dan tapak bercahaya biru",
};

export const footer = {
  disclaimer:
    "Produk ini bukan ubat dan tidak bertujuan untuk mendiagnosis, merawat, menyembuh atau mencegah sebarang penyakit.",
  copyright: "© 2026 Zedox Technology",
  clipNote: "Visual botol dijana AI untuk tujuan ilustrasi.",
};

// WhatsApp order message, built from the current colour, quantity and bundle.
export function orderMessage(color: string, qty: number, bundle: string) {
  return `Hai Zedox! Saya nak order:\n\n• ${product.name}\n• Pakej: ${bundle}\n• Warna: ${color}\n• Kuantiti: ${qty}\n\nNama:\nAlamat:`;
}
