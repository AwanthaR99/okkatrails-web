// app/page.tsx
import Hero from '@/components/hero';
import AboutHook from '@/components/about-hook';
import ExperienceGrid from '@/components/experience-grid';
import FeaturedPackages from '@/components/featured-packages';
import LocationMap from '@/components/location-map';
import TrustAssurance from '@/components/trust-assurance';
import FinalCTA from '@/components/final-cta';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutHook />
      <ExperienceGrid />
      <FeaturedPackages />
      <LocationMap />
      <TrustAssurance />
      <FinalCTA />
    </>
  );
}