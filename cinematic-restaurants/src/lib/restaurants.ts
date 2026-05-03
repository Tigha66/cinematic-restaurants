export type RestaurantKey = "manze" | "bocca" | "andrew-edmunds" | "rules" | "tayyabs" | "bhuna" | "cutler-co" | "loro" | "fresh-baked" | "caffe-vita" | "zotz" | "just-love" | "kolombia";

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
  {
    key: "bhuna",
    name: "Bhuna",
    url: "https://www.touchbistro.com/blog/best-restaurant-websites/",
    locationLine: "Portland, Oregon · Contemporary Indian",
    tagline: "Spice, craft, and Pacific Northwest soul — where tradition meets innovation.",
    intro:
      "A cinematic journey through modern Indian cuisine: rich saffron tones, textured gradients, and scroll-driven plates that reveal themselves like a chef's tasting menu.",
    palette: {
      bg0: "#0A0607",
      bg1: "#140D10",
      ink: "#FDF6E3",
      muted: "#D4A574",
      accent: "#FF6B35",
      accent2: "#9B4DCA",
    },
    chapters: [
      {
        eyebrow: "Chapter I",
        title: "The Kitchen",
        body: "A slow pan across copper pots, simmering spices, and the controlled chaos of a modern kitchen meeting ancestral technique.",
      },
      {
        eyebrow: "Chapter II",
        title: "The Flame",
        body: "High heat, quick wrists, and the sizzle of tandoor — captured in ember-glow gradients and kinetic type.",
      },
      {
        eyebrow: "Chapter III",
        title: "The Table",
        body: "Where Portland's farm-to-table ethos meets Mumbai's street food energy. A communal finale.",
      },
    ],
    signatures: [
      { title: "Bhuna Lamb", note: "Slow-cooked, dry-spiced perfection." },
      { title: "Pacific Salmon Tikka", note: "Northwest fish, tandoor flame." },
      { title: "Craft Chai Flight", note: "Three preparations, one ritual." },
    ],
    cta: { label: "Explore Bhuna", href: "https://www.touchbistro.com/blog/best-restaurant-websites/", note: "Design concept demo — not affiliated." },
  },
  {
    key: "cutler-co",
    name: "Cutler & Co.",
    url: "https://www.sitebuilderreport.com/inspiration/restaurant-websites",
    locationLine: "Melbourne, Australia · Contemporary Fine Dining",
    tagline: "Precision plating. Architectural space. Dining as performance art.",
    intro:
      "A monochromatic cinematic experience: stark contrasts, geometric lines, and scroll-triggered reveals that mirror the restaurant's minimalist aesthetic.",
    palette: {
      bg0: "#050505",
      bg1: "#0F0F0F",
      ink: "#FFFFFF",
      muted: "#9CA3AF",
      accent: "#F9FAFB",
      accent2: "#6366F1",
    },
    chapters: [
      {
        eyebrow: "Movement I",
        title: "The Space",
        body: "Industrial bones, gallery lighting, and negative space that breathes. The architecture is the first course.",
      },
      {
        eyebrow: "Movement II",
        title: "The Craft",
        body: "Each plate a composition: angles, heights, and restraint. Typography tracks like a camera dolly.",
      },
      {
        eyebrow: "Movement III",
        title: "The Experience",
        body: "Service choreography meets guest journey. A final frame of quiet confidence and white tablecloths.",
      },
    ],
    signatures: [
      { title: "Tasting Menu", note: "Seven movements, one narrative." },
      { title: "Wine Pairing", note: "Old World depth, New World clarity." },
      { title: "Cheese Trolley", note: "A rolling epilogue." },
    ],
    cta: { label: "Visit Cutler & Co.", href: "https://www.sitebuilderreport.com/inspiration/restaurant-websites", note: "Design concept demo — not affiliated." },
  },
  {
    key: "loro",
    name: "Loro",
    url: "https://www.sitebuilderreport.com/inspiration/restaurant-websites",
    locationLine: "Austin, Texas · Asian Smokehouse",
    tagline: "Texas smoke. Asian soul. Where brisket meets bao.",
    intro:
      "A high-contrast cinematic fusion: burnt orange sunsets, charcoal depths, and scroll-driven typography that moves like smoke rising from an offset smoker.",
    palette: {
      bg0: "#0D0806",
      bg1: "#1A100C",
      ink: "#FEF3C7",
      muted: "#F59E0B",
      accent: "#EF4444",
      accent2: "#14B8A6",
    },
    chapters: [
      {
        eyebrow: "Round I",
        title: "The Pit",
        body: "Oak smoke, post-oak specifically. Fourteen hours of patience before the first slice. The hero section smolders.",
      },
      {
        eyebrow: "Round II",
        title: "The Wok",
        body: "High-heat Asian technique meets low-and-slow American tradition. Scroll reveals the collision.",
      },
      {
        eyebrow: "Round III",
        title: "The Patio",
        body: "Austin heat, cold beer, and a plate that doesn't fit any single cuisine. The finale feels like a backyard party.",
      },
    ],
    signatures: [
      { title: "Brisket Burnt Ends", note: "Texas candy, Thai chili finish." },
      { title: "Smoked Salmon Bao", note: "Soft, smoky, unexpected." },
      { title: "Malaysian Pork Ribs", note: "Sweet, sticky, fork-tender." },
    ],
    cta: { label: "Visit Loro", href: "https://www.sitebuilderreport.com/inspiration/restaurant-websites", note: "Design concept demo — not affiliated." },
  },
  {
    key: "fresh-baked",
    name: "Fresh Baked Café",
    url: "https://www.freshbakedcafe.com/",
    locationLine: "Wisconsin · Artisan Bakery & Café",
    tagline: "Flour, butter, time — and the warmth of a Midwest morning.",
    intro:
      "A golden-hour cinematic warmth: soft wheat tones, rising dough motion, and scroll-driven sections that feel like stepping into a sun-drenched kitchen.",
    palette: {
      bg0: "#0C0906",
      bg1: "#18120C",
      ink: "#FEF9E7",
      muted: "#D4A373",
      accent: "#F4A261",
      accent2: "#E76F51",
    },
    chapters: [
      {
        eyebrow: "Dawn",
        title: "The Oven",
        body: "4 AM starts, proof boxes humming, and the first golden loaves emerging. The page warms as you scroll.",
      },
      {
        eyebrow: "Morning",
        title: "The Counter",
        body: "Glass cases filled with possibility: croissants, scones, and pastries that catch the light.",
      },
      {
        eyebrow: "Noon",
        title: "The Gathering",
        body: "Lunch crowds, sandwich boards, and the hum of community. A comfortable finale.",
      },
    ],
    signatures: [
      { title: "Artisan Sourdough", note: "Three-day ferment, crackling crust." },
      { title: "Morning Bun", note: "Orange, cinnamon, sugar crystals." },
      { title: "Farm Egg Sandwich", note: "Local eggs, house bread, simple joy." },
    ],
    cta: { label: "Visit Fresh Baked", href: "https://www.freshbakedcafe.com/", note: "Design concept demo — not affiliated." },
  },
  {
    key: "caffe-vita",
    name: "Caffè Vita Coffee Roasting Co.",
    url: "https://www.caffevita.com/",
    locationLine: "Seattle · Brooklyn · Phoenix · Coffee Roastery",
    tagline: "From green bean to golden pour — the craft of conscious coffee.",
    intro:
      "A deep-roasted cinematic journey: espresso browns, copper highlights, and scroll-driven reveals that track a bean from origin to extraction.",
    palette: {
      bg0: "#080604",
      bg1: "#12100C",
      ink: "#FAF5EF",
      muted: "#C4A77D",
      accent: "#B45309",
      accent2: "#059669",
    },
    chapters: [
      {
        eyebrow: "Origin",
        title: "The Source",
        body: "Single-origin farms, direct trade relationships, and the terroir of altitude. The first scroll is an ascent.",
      },
      {
        eyebrow: "Roast",
        title: "The Drum",
        body: "First crack, development time, and the alchemy of heat. Gradients shift from green to amber to dark.",
      },
      {
        eyebrow: "Pour",
        title: "The Cup",
        body: "Espresso shots, pour-overs, and the ritual of morning. The finale is a close-up on steam rising.",
      },
    ],
    signatures: [
      { title: "Vita Roast Espresso", note: "Bold, balanced, signature." },
      { title: "Single Origin Pour-Over", note: "Rotating farms, clean cup." },
      { title: "House Cold Brew", note: "Smooth, twenty-hour steep." },
    ],
    cta: { label: "Visit Caffè Vita", href: "https://www.caffevita.com/", note: "Design concept demo — not affiliated." },
  },
  {
    key: "zotz",
    name: "Z'otz Café",
    url: "https://www.zotzcafe.com/",
    locationLine: "New Orleans, Louisiana · Bohemian Coffee House",
    tagline: "Late nights, strong coffee, and the spirit of the Crescent City.",
    intro:
      "A nocturnal cinematic vibe: deep purples, candle-flicker accents, and scroll-driven sections that feel like wandering through a midnight garden party.",
    palette: {
      bg0: "#0A0812",
      bg1: "#15101F",
      ink: "#F5F0FF",
      muted: "#A78BFA",
      accent: "#C084FC",
      accent2: "#F472B6",
    },
    chapters: [
      {
        eyebrow: "Dusk",
        title: "The Courtyard",
        body: "Wrought iron, string lights, and the first espresso of the evening. The page deepens as you scroll.",
      },
      {
        eyebrow: "Midnight",
        title: "The Ritual",
        body: "Tarot readings, local art, and conversations that stretch until closing. Bohemian energy in motion.",
      },
      {
        eyebrow: "Dawn",
        title: "The Encore",
        body: "One more café au lait before the sun rises. New Orleans doesn't sleep, it pauses.",
      },
    ],
    signatures: [
      { title: "Iced Café au Lait", note: "Chicory blend, NOLA style." },
      { title: "Lavender Honey Latte", note: "Floral, sweet, calming." },
      { title: "Midnight Mocha", note: "Dark chocolate, espresso depth." },
    ],
    cta: { label: "Visit Z'otz Café", href: "https://www.zotzcafe.com/", note: "Design concept demo — not affiliated." },
  },
  {
    key: "just-love",
    name: "Just Love Coffee & Cafe",
    url: "https://www.justlovecoffee.com/",
    locationLine: "Multiple U.S. Locations · Coffee & Community",
    tagline: "Great coffee. Greater purpose. Love in every cup.",
    intro:
      "A mission-driven cinematic warmth: sunrise pinks, community greens, and scroll-driven storytelling that connects every cup to a cause.",
    palette: {
      bg0: "#080708",
      bg1: "#12110F",
      ink: "#FFF7ED",
      muted: "#FDA4AF",
      accent: "#FB7185",
      accent2: "#4ADE80",
    },
    chapters: [
      {
        eyebrow: "Chapter I",
        title: "The Mission",
        body: "Coffee with purpose: every purchase supports foster care and adoption. The scroll carries weight.",
      },
      {
        eyebrow: "Chapter II",
        title: "The Craft",
        body: "Specialty roasts, scratch-made food, and baristas who know your name. Community in action.",
      },
      {
        eyebrow: "Chapter III",
        title: "The Impact",
        body: "Locations spreading, families supported, and a movement brewing. The finale feels like hope.",
      },
    ],
    signatures: [
      { title: "Love Latte", note: "Signature blend, signature warmth." },
      { title: "Breakfast Stack", note: "Pancakes that mean something." },
      { title: "Coffee Flight", note: "Three origins, one story." },
    ],
    cta: { label: "Visit Just Love", href: "https://www.justlovecoffee.com/", note: "Design concept demo — not affiliated." },
  },
  {
    key: "kolombia",
    name: "Kolombia Cafe",
    url: "https://kolombiacafe.com/",
    locationLine: "U.S. · Colombian Coffee & Culture",
    tagline: "Sabor colombiano — the rhythm, warmth, and soul of Colombia in every sip.",
    intro:
      "A vibrant cinematic celebration: emerald highlands, golden sunsets, and scroll-driven sections that pulse with Latin rhythm and coffee heritage.",
    palette: {
      bg0: "#070805",
      bg1: "#0F120A",
      ink: "#FFFBEB",
      muted: "#FCD34D",
      accent: "#FBBF24",
      accent2: "#10B981",
    },
    chapters: [
      {
        eyebrow: "Capítulo I",
        title: "Las Montañas",
        body: "Colombian highlands, family farms, and beans grown in volcanic soil. The scroll ascends through emerald hills.",
      },
      {
        eyebrow: "Capítulo II",
        title: "El Ritmo",
        body: "Cumbia rhythms, warm hospitality, and the energy of Medellín and Bogotá. Colors dance as you scroll.",
      },
      {
        eyebrow: "Capítulo III",
        title: "La Taza",
        body: "From bean to cup, tradition meets innovation. The finale tastes like home, wherever you are.",
      },
    ],
    signatures: [
      { title: "Tinto Tradicional", note: "Colombian black coffee, pure." },
      { title: "Café con Leche", note: "Smooth, sweet, comforting." },
      { title: "Empanadas & Espresso", note: "Savory meets strong." },
    ],
    cta: { label: "Visit Kolombia Cafe", href: "https://kolombiacafe.com/", note: "Design concept demo — not affiliated." },
  },
];

export function getRestaurant(slug: string) {
  return RESTAURANTS.find((r) => r.key === slug);
}
