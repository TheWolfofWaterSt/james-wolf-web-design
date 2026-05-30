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
  heroImage?: string;
  heroImageLarge?: string;
  previewImage?: string;
  previewDomain?: string;
  previewConcept?: "hvac" | "plumbing";
  liveUrl?: string;
  portfolioNote?: string;
};

export const projects: Project[] = [
  {
    slug: "panel-systems-room-dividers",
    title: "Panel Systems Room Dividers",
    category: "Manufacturing Website (Personal Redesign)",
    shortDescription:
      "A modern rebuild concept for a Wisconsin room-divider manufacturer—product catalog, trust content, and a quote funnel built for institutional buyers.",
    problem:
      "The existing roomdividers.org site hadn’t been updated since 2011–2012. Solid product and testimonial content was trapped in a dated, sloppy layout—dense walls of text, inconsistent formatting, defunct Flash embeds, duplicate pages, and no meaningful mobile experience. Buyers comparing sliding, folding, and modular systems had no clear path from browsing to quote.",
    solution:
      "Restructured the site around a conversion-focused homepage and organized product hubs. The savings claim leads above the fold, category cards route visitors to the right system type, and quote plus click-to-call CTAs stay visible on every page—presenting real business content in a clean, fast, mobile-first layout.",
    overview:
      "Panel Systems Manufacturing is a Wisconsin-based direct manufacturer of floor-supported commercial room dividers, serving churches, schools, offices, and factories nationwide for 30+ years. This is a personal portfolio project—a concept redesign using publicly available content from the existing site, not an official client engagement. The goal was to preserve factual product information while delivering the modern, credible web presence the business deserves.",
    designDecisions: [
      "Hero anchored on the verifiable 50–75% factory-direct savings claim with three trust signals beneath",
      "Product navigation grouped into four category hubs—sliding, folding, modular, and clean room—with model comparison tables",
      "Section-based homepage funnel: savings story, industries served, testimonials, three-step process, and FAQ objection handling",
      "Sticky header with click-to-call and “Get a Quote” for institutional buyers who prefer the phone",
      "Navy-and-amber palette with geometric sans-serif typography—institutional trust with high-contrast conversion CTAs",
    ],
    outcome:
      "The redesign turns a cluttered legacy catalog into a scannable, mobile-ready site where visitors can identify their product type, understand why floor-supported systems cost less, and reach a quote form or phone number from any page—without fighting outdated formatting.",
    accent: "from-slate-600/20 to-blue-900/15",
    heroImage: "/images/panel-systems-hero-small.jpg",
    heroImageLarge: "/images/panel-systems-hero-large.jpg",
    previewImage: "/images/NewPanelSystemsSite.png",
    previewDomain: "roomdividers.org",
    liveUrl: "https://mueller-room-dividers.vercel.app/",
    portfolioNote:
      "Personal portfolio project: a concept redesign based on publicly available content from Panel Systems Manufacturing (roomdividers.org). Not an official client engagement.",
  },
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
    previewDomain: "summithvac.com",
    previewConcept: "hvac",
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
    previewDomain: "blueridgeplumbing.com",
    previewConcept: "plumbing",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
