export type RestaurantKey = "manze" | "bocca" | "andrew-edmunds" | "rules" | "tayyabs";

export type RestaurantConfig = {
  key: RestaurantKey;
  name: string;
  url: string;
  locationLine: string;
  tagline: string;
  intro: string;
  palette: {
    bg0: string;
    bg1: string;
    ink: string;
    muted: string;
    accent: string;
    accent2: string;
  };
  chapters: Array<{
    eyebrow: string;
    title: string;
    body: string;
  }>;
  signatures: Array<{ title: string; note: string }>
  cta: { label: string; href: string; note: string };
};

export const RESTAURANTS: RestaurantConfig[] = [
  {
    key: "manze",
    name: "M. Manze",
    url: "https://www.manze.co.uk/",
    locationLine: "South London · Pie & Mash since 1902",
    tagline: "Steam, vinegar, pepper — and a century of London comfort.",
    intro:
      "A cinematic homage to an institution: tiled counters, the hiss of steam, and the ritual of pie, mash & liquor — reimagined with scroll-driven storytelling.",
    palette: {
      bg0: "#070A0D",
      bg1: "#0E1722",
      ink: "#F4F1E8",
      muted: "#A9B3C1",
      accent: "#E0B15A",
      accent2: "#7DD3FC",
    },
    chapters: [
      {
        eyebrow: "Chapter I",
        title: "The Counter",
        body: "Lean in. Glossy tiles, brass details, and the quiet choreography of service. The page scrolls like a tracking shot along the counter edge.",
      },
      {
        eyebrow: "Chapter II",
        title: "The Steam",
        body: "A heat-haze gradient, subtle grain, and a slow 3D rotation that echoes the rhythm of the kitchen.",
      },
      {
        eyebrow: "Chapter III",
        title: "The Ritual",
        body: "Pie. Mash. Liquor. A three-beat reveal with typography that lands like footsteps on old linoleum.",
      },
    ],
    signatures: [
      { title: "Classic Pie & Mash", note: "Shortcrust, mash, parsley liquor." },
      { title: "Double Pie", note: "For when one is a warm-up." },
      { title: "Eels (traditional)", note: "A London legacy, served simply." },
    ],
    cta: { label: "Visit the original site", href: "https://www.manze.co.uk/", note: "Design concept demo — not affiliated." },
  },
  {
    key: "bocca",
    name: "Bocca di Lupo",
    url: "http://www.boccadilupo.com",
    locationLine: "Soho · Regional Italian cooking",
    tagline: "Low light. Loud flavour. A menu that moves like a film edit.",
    intro:
      "A premium, nocturnal experience: deep reds, specular highlights, and scroll-triggered cuts between regions, textures, and plates.",
    palette: {
      bg0: "#070506",
      bg1: "#14070A",
      ink: "#F6F1E6",
      muted: "#C0B3A8",
      accent: "#E11D48",
      accent2: "#F59E0B",
    },
    chapters: [
      {
        eyebrow: "Chapter I",
        title: "The Room",
        body: "A shadowy hero with a glinting 3D mark — like a neon sign catching rain.",
      },
      {
        eyebrow: "Chapter II",
        title: "The Regions",
        body: "Scroll through a sequence of chapters, each with its own colour wash — Sicily, Piedmont, Puglia.",
      },
      {
        eyebrow: "Chapter III",
        title: "The Finish",
        body: "A final, brightened frame: reservation energy with kinetic type and confident contrast.",
      },
    ],
    signatures: [
      { title: "Daily changing pasta", note: "Seasonal and fast — the point." },
      { title: "Secondi spotlight", note: "Meat and fish with regional intent." },
      { title: "Gelato finale", note: "A clean cut to sweetness." },
    ],
    cta: { label: "Visit the original site", href: "http://www.boccadilupo.com", note: "Design concept demo — not affiliated." },
  },
  {
    key: "andrew-edmunds",
    name: "Andrew Edmunds",
    url: "http://www.andrewedmunds.com",
    locationLine: "Soho · Candlelight · Wine list for the curious",
    tagline: "A table for two. A classic room. Modern motion — quietly done.",
    intro:
      "A restrained cinematic build: serif-led typography, subtle parallax, and a glassy 3D element that feels like a decanter turning in light.",
    palette: {
      bg0: "#060706",
      bg1: "#101712",
      ink: "#F3F4EE",
      muted: "#B8C2B5",
      accent: "#34D399",
      accent2: "#A78BFA",
    },
    chapters: [
      {
        eyebrow: "Chapter I",
        title: "Candlelight",
        body: "Soft grain and slow fades. The scroll behaves like a gentle cross-dissolve.",
      },
      {
        eyebrow: "Chapter II",
        title: "The Wine",
        body: "A typographic sequence that reads like tasting notes — crisp hierarchy, minimal spectacle.",
      },
      {
        eyebrow: "Chapter III",
        title: "The Plate",
        body: "Tight crop cards with hover tilt and micro-reflections — elegant, not loud.",
      },
    ],
    signatures: [
      { title: "Seasonal prix fixe", note: "Classics, updated with restraint." },
      { title: "Bottle spotlight", note: "A scrollable cellar moment." },
      { title: "Dessert epilogue", note: "A final, quiet flourish." },
    ],
    cta: { label: "Visit the original site", href: "http://www.andrewedmunds.com", note: "Design concept demo — not affiliated." },
  },
  {
    key: "rules",
    name: "Rules",
    url: "https://rules.co.uk",
    locationLine: "Covent Garden · London’s oldest restaurant",
    tagline: "Velvet, wood, history — told with depth and theatre.",
    intro:
      "A grand, heritage-forward cinematic layout: gilded accents, portrait-style sections, and a 3D crest that moves like stage lighting.",
    palette: {
      bg0: "#050506",
      bg1: "#121016",
      ink: "#F7F1E1",
      muted: "#C7B99C",
      accent: "#D4AF37",
      accent2: "#60A5FA",
    },
    chapters: [
      {
        eyebrow: "Act I",
        title: "The Heritage",
        body: "A slow opening: portraits, timber tones, and a sense of being watched (politely) by history.",
      },
      {
        eyebrow: "Act II",
        title: "The Game",
        body: "Texture-led storytelling with bold type: venison, grouse, and seasonal tradition.",
      },
      {
        eyebrow: "Act III",
        title: "The Curtain Call",
        body: "A final call-to-action framed like a playbill — crisp, confident, and unmistakably London.",
      },
    ],
    signatures: [
      { title: "Seasonal game", note: "Tradition with sharp timing." },
      { title: "Classic puddings", note: "Theatre in a bowl." },
      { title: "Private dining", note: "Rooms with a story." },
    ],
    cta: { label: "Visit the original site", href: "https://rules.co.uk", note: "Design concept demo — not affiliated." },
  },
  {
    key: "tayyabs",
    name: "Tayyabs",
    url: "http://www.tayyabs.co.uk",
    locationLine: "Whitechapel · Punjabi barbecue · Since 1972",
    tagline: "Smoke, spice, sizzle — scroll like heatwaves.",
    intro:
      "A high-energy cinematic experience: ember gradients, kinetic typography, and a 3D ‘charcoal’ form that rotates with your scroll.",
    palette: {
      bg0: "#070404",
      bg1: "#160707",
      ink: "#FFF3E0",
      muted: "#FBCFA4",
      accent: "#FB7185",
      accent2: "#F97316",
    },
    chapters: [
      {
        eyebrow: "Round I",
        title: "The Smoke",
        body: "A sticky, ember-lit hero with moving gradients and a 3D coal-like knot turning in space.",
      },
      {
        eyebrow: "Round II",
        title: "The Grill",
        body: "Scroll-triggered cuts: seekh, chops, sizzling platters — the layout accelerates.",
      },
      {
        eyebrow: "Round III",
        title: "The Feast",
        body: "A communal finale: big type, generous spacing, and a reservation/visit section that feels like an invitation.",
      },
    ],
    signatures: [
      { title: "Lamb chops", note: "The headline act." },
      { title: "Seekh kebab", note: "Smoky, spiced, fast." },
      { title: "Mixed grill", note: "Because decisions are overrated." },
    ],
    cta: { label: "Visit the original site", href: "http://www.tayyabs.co.uk", note: "Design concept demo — not affiliated." },
  },
];

export function getRestaurant(slug: string) {
  return RESTAURANTS.find((r) => r.key === slug);
}
