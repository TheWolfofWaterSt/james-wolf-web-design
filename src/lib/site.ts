export const site = {
  name: "James Wolf Web Design",
  brandName: "James Wolf",
  brandSuffix: "Web Design",
  monogram: "JW",
  tagline: "Websites for small businesses, without the tech headaches",
  email: "jameswolfwebdesign@gmail.com",
  phone: "715-894-7799",
  description:
    "Freelance web design for small businesses that want a professional online presence without wrestling with hosting, domains, or technical setup. I handle the build and launch—you focus on your work.",
} as const;

export const sitePhoneTel = site.phone.replace(/\D/g, "");
