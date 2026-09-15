import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import PracticeAreas from "@/components/PracticeAreas";
import Services from "@/components/Services";
import Differentials from "@/components/Differentials";
import Articles from "@/components/Articles";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import LocationMap from "@/components/LocationMap";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <PracticeAreas />
      <Services />
      <Differentials />
      <Articles />
      <Testimonials />
      <FAQ />
      <LocationMap />
      <Contact />
    </>
  );
}
