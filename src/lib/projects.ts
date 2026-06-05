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
  technicalHighlights?: string[];
  stack?: string;
};

export const projects: Project[] = [
  {
    slug: "panel-systems-room-dividers",
    title: "Panel Systems Room Dividers",
    category: "Manufacturing Website",
    shortDescription:
      "A modern rebuild concept for a Wisconsin room-divider manufacturer. Product catalog, trust content, and a quote funnel built for institutional buyers.",
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
    previewDomain: "mueller-room-dividers.vercel.app",
    liveUrl: "https://mueller-room-dividers.vercel.app/",
    portfolioNote:
      "Personal portfolio project: a concept redesign based on publicly available content from Panel Systems Manufacturing (roomdividers.org). Not an official client engagement.",
  },
  {
    slug: "states-ive-visited",
    title: "States I've Visited",
    category: "Personal Travel App",
    shortDescription:
      "An interactive U.S. map and admin workflow for tracking states, cities, and places I've been.",
    problem:
      "Tracking where I've been across 50 states, and the cities and specific places within them, doesn't work well in spreadsheets or flat notes. There's no instant sense of progress, and a single list can't reflect how trips actually nest: state, then city, then park, restaurant, or landmark.",
    solution:
      "A public map with visited states in blue and unvisited in neutral gray, plus a stats row (states visited, percent covered, cities recorded). Clicking a visited state opens a modal with cities and places instead of cluttering the map. A password-protected admin supports search, visited filters, nested city/place editing, and batch Save all so multiple states can be updated in one commit.",
    overview:
      "States I've Visited is a personal travel portfolio that turns where I've been in the U.S. into an interactive map and a small content-management workflow behind it. The public side centers on a clickable map; the admin side is built for real editing at scale with draft tracking before save. Under the hood it's a full-stack Next.js 14 app with Neon Postgres, Tailwind, and deployment on Vercel. The data model is layered—state → cities → places—so the map stays simple while detail lives one click deeper.",
    designDecisions: [
      "Blue visited states (#3B82F6) vs. one uniform unvisited gray (#E2E8F0)—progress reads instantly; nothing looks partially visited",
      "Inter for UI typography, system-ui on map labels so two-letter state codes stay sharp in the SVG without an extra font layer",
      "Stats cards instead of intro copy—the title, numbers, and map give context without redundant explanation",
      "Drill-down via modal on state click—cities and places stay scannable on the map while still showing the nested data model",
      "Admin search and visited filters (All / Visited / Not visited), including smarter matching for Washington, D.C., so updates don't mean scrolling 50+ rows",
    ],
    outcome:
      "The app gives a clear picture of travel progress on the map while keeping rich trip detail accessible when I want it—and the admin flow makes adding cities and places practical as the list grows.",
    accent: "from-blue-500/20 to-slate-600/10",
    previewImage: "/images/StatesIveVisited.png",
    previewDomain: "state-travels.vercel.app",
    liveUrl: "https://state-travels.vercel.app/",
    portfolioNote:
      "Personal portfolio project: a full-stack travel tracking app I built and maintain. Not a client engagement.",
    technicalHighlights: [
      "Password-protected writes with a public read-only map",
      "Draft and dirty-state tracking before batch save with Save all",
      "Legacy data migration from flat places text into structured city rows",
    ],
    stack: "Next.js 14, React, TypeScript, Neon Postgres, Tailwind CSS, Vercel",
  },
  {
    slug: "prosser-basketball",
    title: "Prosser Basketball",
    category: "Basketball Training Website",
    shortDescription:
      "A four-page site for an Eau Claire skills trainer: credibility signals, dual-audience copy, and a contact funnel built for cold outreach.",
    problem:
      "Despite a compelling coaching philosophy, real community credentials, and 40+ athletes already trained, Prosser Basketball had no dedicated website. Rayce relied entirely on cold email outreach—leaving nowhere for prospects to verify his legitimacy, understand his program, or take the next step.",
    solution:
      "A lean four-page site—Home, About, Services, and Contact—designed to convert cold traffic into email inquiries. It works as both a discovery tool and a credibility landing page for outbound outreach, funneling parents and players toward contact via form or email. Placeholder zones for photography, testimonials, and social media were built in from the start so the site can grow without a redesign.",
    overview:
      "Prosser Basketball LLC runs Playmakers Academy, offering individual and small group basketball skills training for youth and teen athletes in Eau Claire, Wisconsin. Founder Rayce Prosser develops both the physical and mental sides of the game—teaching when and why to use skills, not just how. He also serves as assistant varsity coach at Eau Claire Memorial High School and 14U head coach with Wisconsin Playmakers.",
    designDecisions: [
      "Dark charcoal backgrounds with electric orange accents and condensed athletic typography—premium and credible from the first scroll",
      "Dual-focus coaching philosophy on the homepage: physical and mental development, competitive stamina, and attention to detail",
      "Trust built through authority signals—Memorial and Wisconsin Playmakers coaching roles, 40+ athletes trained—with testimonial components ready to populate",
      "Copy and layout speak to both parents and teen players without separate pages; persistent Get in Touch CTA in navigation",
    ],
    outcome:
      "The site gives Rayce a professional online home that validates cold outreach, builds passive trust for local search, and gives curious parents and players a clear path to inquire—without relying on a single email to make the case.",
    accent: "from-orange-500/20 to-neutral-900/15",
    previewImage: "/images/ProsserBasketballSite.png",
    previewDomain: "prosser-basketball.vercel.app",
    liveUrl: "https://prosser-basketball.vercel.app/",
    portfolioNote:
      "Personal portfolio project: a site built to demonstrate web design for a local basketball skills training business. Not an official client engagement.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
