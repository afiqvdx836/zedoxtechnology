// All page content and product data lives here. Components only render it.
// Text fields support **bold** (see components/ui/Rich.tsx).
//
// Copy rule (KKM, Aug 2026): hydrogen inhalers are not MDA-registered, so never
// claim to treat, manage or improve a named disease or lab marker. Talk about
// the experience, relaxation and routine instead.

export type Tone = "cyan" | "orange" | "rose";

export const contact = {
  whatsapp: "60122033324",
  phoneDisplay: "+60 12-203 3324",
  tiktokHandle: "zedox678",
  tiktokFollowers: "1,300+",
  founder: "En. Zedox",
  founderTitle: "Wellness Clinic Founder",
  clinicName: "Bangi Hydrogen Wellness by Zedox",
  address: "Bandar Baru Bangi, Selangor, Malaysia.",
  serviceArea:
    "Serving regional areas around Damansara, Sungai Buloh, and Kampung Subang.",
};

// Pre-filled WhatsApp messages, keyed by where the click came from.
// Session tiers build their own message from `sessions.tiers[].whatsapp`.
export const whatsappMessages = {
  default:
    "Hi En. Zedox, I'm visiting your landing page and want to know more about Hydrogen Wellness.",
  scan: "Hi En. Zedox, I want to book a slot for the FREE Fatty Liver & Fibrosis Scan at Bangi. What are the available dates/times this week?",
  specs:
    "Hi En. Zedox, I'm interested in the GenQi Hydrogen Inhaler machine specs. Can you share details and payment plans?",
} as const;

export type WhatsappSource = keyof typeof whatsappMessages;

export const site = {
  brand: { name: "HYDROGEN", suffix: "BY ZEDOX" },
  title: "Hydrogen by Zedox | Bangi Hydrogen Wellness Clinic",
  description:
    "Try molecular hydrogen (H₂) inhalation in a calm wellness clinic in Bandar Baru Bangi. Trial sessions, session packs, and a free fatty liver scan on your first visit.",
  keywords: [
    "molecular hydrogen",
    "hydrogen inhalation",
    "Bangi hydrogen wellness",
    "fatty liver scan",
    "Elken GenQi",
    "Zedox",
  ],
  tagline:
    "Tubuh rosak bukan sebab umur. A calm, local place in Bangi to try molecular hydrogen inhalation.",
};

export const nav = [
  { label: "Home", href: "#hero" },
  { label: "Sessions", href: "#sessions" },
  { label: "About H₂", href: "#science" },
  { label: "Who It's For", href: "#audience" },
  { label: "Machine", href: "#education" },
  { label: "FAQs", href: "#faq" },
];

export const hero = {
  badge: "Bangi Hydrogen Wellness",
  titleLead: "“Tubuh Rosak Bukan Sebab Umur,",
  titleAccent: "Tapi Sebab Redox Imbalance”",
  description:
    "Take a quiet break with **molecular hydrogen (H₂) inhalation** at our wellness clinic in Bandar Baru Bangi. Start with a trial session, and get a free fatty liver scan on your first visit.",
  primaryCta: {
    label: "Try a Session",
    href: "#sessions",
    icon: "fa-calendar-days",
  },
  secondaryCta: { label: "What Is H₂?", href: "#science", icon: "fa-flask" },
};

// Short safety line shown next to every booking CTA (full text is in `footer`).
export const bookingNote =
  "Hydrogen inhalation is a wellness experience, not a medical treatment. If you have a health condition, are pregnant, or take regular medication, check with your doctor first.";

export const offer = {
  badge: "First Visit Perk",
  title: "FREE Fatty Liver & Fibrosis Scan",
  subtitle: "At Bangi Hydrogen Wellness Clinic",
  description:
    "Curious about your liver health? On your first visit you can get a **non-invasive liver scan** for free (normally around RM250 at external clinics). No needles, no pain, and you see the reading on the spot. Talk to your doctor about what the result means for you.",
  highlights: [
    { icon: "fa-heart-pulse", label: "100% Non-Invasive" },
    { icon: "fa-clock", label: "Takes About 10 Minutes" },
    { icon: "fa-file-waveform", label: "Reading On the Spot" },
  ],
  cta: "Book My Free Scan",
};

// TODO(Afiq): confirm every price with En. Zedox before launch.
// Placeholders are set inside the Malaysian market range (RM29–59 per trial).
export const sessions = {
  badge: "Sessions & Prices",
  titleLead: "Try It First,",
  titleAccent: "Then Decide",
  subtitle:
    "Book on WhatsApp and pick the session that suits you. Every first visit includes the free liver scan.",
  tiers: [
    {
      name: "Trial Session",
      price: "RM29",
      unit: "/ 30 min",
      blurb:
        "For first-timers who want to see what hydrogen inhalation feels like.",
      perks: [
        "30 min inhalation",
        "Free liver scan",
        "Walkthrough by En. Zedox",
      ],
      cta: "Book Trial",
      whatsapp:
        "Hi En. Zedox, I'd like to book a Trial Session (30 min). When are you free this week?",
      featured: true,
    },
    {
      name: "Full Session",
      price: "RM59",
      unit: "/ 60 min",
      blurb:
        "A longer, unhurried session in a quiet room. Bring a book or rest.",
      perks: [
        "60 min inhalation",
        "Hydrogen water to drink",
        "Relaxed private room",
      ],
      cta: "Book Session",
      whatsapp:
        "Hi En. Zedox, I'd like to book a Full Session (60 min). When are you free this week?",
    },
    {
      name: "10-Session Pack",
      price: "RM450",
      unit: "/ 10 × 60 min",
      blurb: "For regulars who visit weekly. Share it with a parent or spouse.",
      perks: [
        "10 × 60 min sessions",
        "Shareable with family",
        "Valid 6 months",
      ],
      cta: "Ask About Packs",
      whatsapp:
        "Hi En. Zedox, I'm interested in the 10-Session Pack. Can you share the details?",
    },
    {
      name: "Own a GenQi",
      price: "~RM5,175",
      unit: "one-off",
      blurb:
        "Use it at home every day, with local support and training from the clinic.",
      perks: [
        "3-in-1: inhale, drink, goggles",
        "0% installment plans",
        "Clinic warranty & support",
      ],
      cta: "Get Machine Details",
      whatsapp:
        "Hi En. Zedox, I'm interested in owning a GenQi unit. Can you share the specs and installment plans?",
    },
  ],
};

export const science = {
  badge: "What Is H₂?",
  title: "Molecular Hydrogen, Explained Simply",
  paragraphs: [
    "Our bodies make free radicals every day. Stress, poor sleep, poor diet and pollution add to the load. Scientists call the balance between free radicals and the body's antioxidants **redox balance**.",
    "**Why researchers are interested:** In laboratory studies, molecular hydrogen (H₂) behaves as a **selective** antioxidant. It reacts with the most reactive radicals and leaves useful signalling molecules such as nitric oxide (NO) alone. Research in people is still early, and results are mixed.",
  ],
  bad: {
    title: "Highly Reactive Radicals",
    body: "**Hydroxyl (•OH) & Peroxynitrite (ONOO⁻)** are the most reactive free radicals and can damage cell structures in laboratory settings.",
  },
  good: {
    title: "How H₂ Behaves",
    body: "H₂ is a tiny molecule that spreads easily. In lab studies it reacts with hydroxyl radicals and forms ordinary water (H₂O).",
  },
};

export const audienceSection = {
  badge: "Who It's For",
  titleLead: "People Who",
  titleAccent: "Visit Our Clinic",
  subtitle:
    "Our visitors come for a calm, regular wellness routine. Here is who usually walks through the door.",
};

export const audience = [
  {
    icon: "fa-briefcase",
    title: "Busy Professionals",
    body: "A quiet hour away from screens and traffic. Many visitors come after work to unwind before heading home.",
    markers: ["After-work slots", "Quiet room", "Wi-Fi free zone"],
  },
  {
    icon: "fa-people-roof",
    title: "Aging Parents & Families",
    body: "Adult children bring their parents for a relaxing outing together. Sessions are seated, simple and supervised.",
    markers: ["Seated & easy", "Family packs", "Supervised"],
  },
  {
    icon: "fa-person-running",
    title: "Active & Fitness Lovers",
    body: "Runners, gym-goers and weekend athletes add a session to their rest day as part of their routine.",
    markers: ["Rest-day routine", "Hydrogen water", "Weekend slots"],
  },
  {
    icon: "fa-seedling",
    title: "Curious First-Timers",
    body: "Seen hydrogen on TikTok and want to try it properly? Start with a short trial and ask En. Zedox anything.",
    markers: ["30 min trial", "No pressure", "Ask questions"],
  },
  {
    icon: "fa-house-chimney",
    title: "Thinking of Buying a Machine",
    body: "Try the same GenQi unit we use before you commit to one at home. Compare it against the buyer checklist below.",
    markers: ["Try before you buy", "Hands-on demo", "Installments"],
  },
  {
    icon: "fa-mug-hot",
    title: "Wellness Routine Builders",
    body: "People who already care about sleep, food and exercise, and want to add a calm weekly habit.",
    markers: ["Weekly habit", "Session packs", "Shareable"],
  },
];

// Shown under the audience grid. Keep this list conservative.
export const notSuitable = {
  title: "Please Check With Your Doctor First If You",
  items: [
    "Are pregnant or breastfeeding",
    "Have a lung or breathing condition, or use oxygen therapy",
    "Are under ongoing medical treatment or take regular medication",
    "Are booking for a child",
  ],
  note: "Hydrogen inhalation does not replace any medicine or treatment from your doctor. Never stop prescribed medication.",
};

// The machine used at the clinic. The hero device illustration reads from here too.
export const product = {
  name: "Elken GenQi 3-in-1",
  shortName: "GenQi",
  deviceLabel: "ZEDOX REDOX DEVICE",
  tech: "PEM/SPE TECH",
  flowRate: 150, // ml/min
  purity: "99.997%",
  functions: ["Inhale", "Drink", "Goggles"],
  priceApprox: "~RM 5,175",
  installment: "0% installment plans available",
  features: [
    {
      icon: "fa-shield-halved",
      title: "DuPont Nafion N117 PEM Membrane:",
      body: "The global standard for generating ultra-pure hydrogen gas cleanly.",
    },
    {
      icon: "fa-circle-check",
      title: "IHSA Certified Performance:",
      body: "Checked against strict International Hydrogen Standards Association metrics for flow rate and safety.",
    },
    {
      icon: "fa-water",
      title: "Dual Nozzles & Built-in TDS sensor:",
      body: "Auto-detects water purity levels to protect the membrane, ensuring clean 150ml/min output.",
    },
  ],
};

export const education = {
  badge: "Buyer Education Guide",
  title: "Not All Hydrogen Machines Are Created Equal",
  intro:
    "Many cheap hydrogen devices sold online use liquid electrolyte solutions (which leak potassium hydroxide mist) or low-quality membranes that degrade quickly, risking trace ozone or toxic chlorine leaks.",
  lead: "**Hydrogen by Zedox** uses certified, clinic-grade devices that feature:",
  support: {
    icon: "fa-hospital-user",
    title: "Local Support & Clinic Backing",
    body: "Don't risk buying overseas units with zero warranty or repair options. At **Bangi Hydrogen Wellness**, En. Zedox provides physical machine support, direct training, and clinic warranties.",
    cta: "Request Machine Specs",
  },
};

// Comparison matrix. The first competitor column is ours and gets highlighted.
// mark: "check" | "cross" shows an icon before the text; strong bolds it.
type Cell = {
  text: string;
  mark?: "check" | "cross";
  strong?: boolean;
  tag?: string;
};

export const comparison: {
  badge: string;
  titleLead: string;
  titleAccent: string;
  subtitle: string;
  columns: string[];
  rows: { feature: string; cells: Cell[] }[];
} = {
  badge: "Market Comparison",
  titleLead: "Specifications & Value",
  titleAccent: "At a Glance",
  subtitle:
    "How the Elken GenQi 3-in-1 system used at Bangi Hydrogen Wellness compares on specs and price.",
  columns: [
    "GenQi (Bangi Hydrogen)",
    "Premium Japanese Brand",
    "Local Green Tech Brand",
    "E-Commerce Cheap Machine",
  ],
  rows: [
    {
      feature: "Electrolysis Technology",
      cells: [
        { text: "PEM & SPE (Safe, Clean)", strong: true },
        { text: "PEM & SPE" },
        { text: "PEM & SPE" },
        { text: "Variable (Often KOH / KOH mist danger)" },
      ],
    },
    {
      feature: "Gas Purity %",
      cells: [
        { text: product.purity, mark: "check", strong: true },
        { text: "99.99%", mark: "check" },
        { text: "99.9%", mark: "check" },
        { text: "Unverified", mark: "cross" },
      ],
    },
    {
      feature: "Inhalation Flow Rate",
      cells: [
        { text: `${product.flowRate} ml/min`, strong: true },
        { text: "110 ml/min" },
        { text: "150 ml/min" },
        { text: "100 - 300 ml/min" },
      ],
    },
    {
      feature: "3-in-1 Functions",
      cells: [
        {
          text: `Yes (${product.functions.join(", ")})`,
          mark: "check",
          strong: true,
        },
        { text: "Inhale/Drink only", mark: "cross" },
        { text: "Inhale/Drink only", mark: "cross" },
        { text: "Inhale only", mark: "cross" },
      ],
    },
    {
      feature: "Average Price",
      cells: [
        { text: product.priceApprox, strong: true, tag: "Best Value" },
        { text: "~RM 9,288" },
        { text: "~RM 9,300" },
        { text: "RM 1,800 - RM 3,500" },
      ],
    },
    {
      feature: "Physical Clinic Backing",
      cells: [
        { text: "Yes (Bangi Location)", mark: "check", strong: true },
        { text: "No (HQ Office only)" },
        { text: "No (Showroom only)" },
        { text: "No (Overseas)", mark: "cross" },
      ],
    },
  ],
};

export const faqSection = {
  badge: "Answers to Your Questions",
  titleLead: "Frequently Asked",
  titleAccent: "Questions",
  subtitle:
    "What to expect from a session, the free liver scan, and the machine.",
};

export const faqs = [
  {
    q: "What happens during a session?",
    a: "You sit in a quiet room and breathe hydrogen gas through a soft nasal cannula while you rest, read or nap. En. Zedox sets up the machine and stays nearby. A trial is 30 minutes and a full session is 60 minutes.",
  },
  {
    q: "How much does it cost?",
    a: `A trial session starts from ${sessions.tiers[0].price} and a full 60-minute session is ${sessions.tiers[1].price}. Session packs and family sharing are available. See the Sessions & Prices section above, or ask on WhatsApp.`,
  },
  {
    q: "Is the Fatty Liver & Fibrosis Scan really free?",
    a: "Yes. En. Zedox provides the scan free on your first visit to encourage early checks. It uses non-invasive sound waves and is pain-free. A similar scan is usually around RM250 at external clinics. Please share the reading with your own doctor.",
  },
  {
    q: "Who should not try hydrogen inhalation?",
    a: "Please check with your doctor first if you are pregnant or breastfeeding, have a lung or breathing condition, are under ongoing medical treatment, or are booking for a child. Hydrogen inhalation is a wellness experience. It does not diagnose, treat or cure any disease and does not replace your medication.",
  },
  {
    q: "Why does the machine require distilled water?",
    a: "The solid PEM/SPE membrane splits water directly. Tap or mineral water contains minerals (like calcium or magnesium) that scale and permanently damage the membrane. Distilled water prevents scaling and keeps the machine running longer.",
  },
  {
    q: "How can I book a session or buy a machine?",
    a: `Message En. Zedox on WhatsApp at 012-2033324 to book a session or ask about owning a ${product.shortName} unit (${product.installment}).`,
  },
];

export const footer = {
  copyright:
    "© 2026 Hydrogen by Zedox & Bangi Hydrogen Wellness. All rights reserved.",
  disclaimer:
    "Hydrogen inhalation at our clinic is offered as a wellness experience. It is not intended to diagnose, treat, cure or prevent any disease, and it does not replace professional medical advice or treatment. Always consult your doctor before starting any new health routine, and never stop prescribed medication.",
};
