import HeroSection from "@/components/hero/HeroSection";
import Services from "@/components/Services";
import FeaturedWork from "@/components/FeaturedWork";
import Trust from "@/components/Trust";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Services />
      <FeaturedWork />
      <Trust />
      <CTA />
    </>
  );
}
