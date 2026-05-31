export const site = {
  name: "James Wolf Web Design",
  brandName: "James Wolf",
  brandSuffix: "Web Design",
  monogram: "JW",
  tagline: "Modern websites for local businesses",
  email: "jameswolfwebdesign@gmail.com",
  phone: "715-894-7799",
  description:
    "Freelance web design and development for service-based local businesses. Concept redesigns and modern, conversion-focused websites.",
} as const;

export const sitePhoneTel = site.phone.replace(/\D/g, "");
