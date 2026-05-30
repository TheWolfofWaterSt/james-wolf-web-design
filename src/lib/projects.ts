export type Project = {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  problem: string;
  solution: string;
  overview: string;
  designDecisions: string[];
  outcome: string;
  accent: string;
};

export const projects: Project[] = [
  {
    slug: "summit-hvac",
    title: "Summit HVAC",
    category: "HVAC Company Website (Concept Redesign)",
    shortDescription:
      "A fictional concept redesign for a local HVAC company—clear service paths, trust signals, and emergency CTAs.",
    problem:
      "Generic template sites bury emergency repair and seasonal maintenance behind cluttered menus, leaving homeowners unsure who to call.",
    solution:
      "A focused homepage with prominent seasonal offers, service area clarity, and above-the-fold emergency contact for urgent repairs.",
    overview:
      "Summit HVAC is a placeholder brand created to demonstrate how a regional heating and cooling company could present services online. The concept prioritizes seasonal messaging, transparent pricing cues, and fast paths to schedule service.",
    designDecisions: [
      "Hero with dual CTAs: schedule maintenance vs. emergency repair",
      "Service cards grouped by residential vs. commercial needs",
      "Trust strip with certifications, years in business, and review placeholders",
      "Warm neutral palette suggesting reliability and comfort",
      "Sticky mobile call bar for on-the-go homeowners",
    ],
    outcome:
      "The layout reads as a credible local trades site within seconds—visitors understand offerings, coverage area, and how to book without hunting through pages.",
    accent: "from-amber-500/20 to-orange-600/10",
  },
  {
    slug: "harbor-kitchen",
    title: "Harbor Kitchen",
    category: "Local Restaurant Website (Concept Redesign)",
    shortDescription:
      "A fictional concept for a neighborhood restaurant—menu discovery, reservations, and atmosphere without visual clutter.",
    problem:
      "Many restaurant sites rely on PDF menus, slow image carousels, and buried hours—frustrating guests on mobile before they ever visit.",
    solution:
      "Scannable menu categories, hours and location upfront, and a reservation CTA that stays visible while browsing the menu.",
    overview:
      "Harbor Kitchen is a demo restaurant brand showcasing how a single-location eatery can convert browsing into reservations. Photography placeholders and copy are entirely fictional.",
    designDecisions: [
      "Full-bleed hero with hours, address, and reserve button overlay",
      "Menu organized by category with dietary tags as visual chips",
      "Gallery grid with consistent aspect ratios for food photography",
      "Subtle serif accent for headings to evoke hospitality",
      "Footer with map embed placeholder and social links",
    ],
    outcome:
      "Guests can answer “What’s on the menu?” and “Can I book tonight?” in under a minute on any device—reducing friction before the first visit.",
    accent: "from-rose-500/15 to-stone-600/10",
  },
  {
    slug: "blue-ridge-plumbing",
    title: "Blue Ridge Plumbing",
    category: "Plumbing Service Website (Concept Redesign)",
    shortDescription:
      "A fictional concept for a plumbing contractor—service clarity, licensing trust, and quote requests built for mobile.",
    problem:
      "Plumbing sites often list dozens of services equally, with no visual hierarchy—homeowners cannot tell if their issue is covered or how fast help arrives.",
    solution:
      "Tiered service sections (emergency, repairs, installs), license badges near the hero, and a short quote form with issue-type selection.",
    overview:
      "Blue Ridge Plumbing is a portfolio placeholder demonstrating UX for emergency-first local trades. All business details, service areas, and testimonials are invented for demonstration.",
    designDecisions: [
      "Emergency banner with estimated response copy (fictional)",
      "Icon-led service grid with plain-language descriptions",
      "Before/after project gallery using neutral placeholders",
      "Quote form limited to essential fields to reduce abandonment",
      "Cool blue-gray palette signaling professionalism and water/trade context",
    ],
    outcome:
      "The concept communicates urgency for leaks, clarity for planned work, and a trustworthy path to request a quote—without overwhelming non-technical visitors.",
    accent: "from-sky-500/20 to-slate-600/10",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
