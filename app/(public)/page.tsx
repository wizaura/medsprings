import About from "@/components/home/About";
import FAQ from "@/components/home/FAQ";
import Hero from "@/components/home/Hero";
import Possibilities from "@/components/home/Possibilities";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import WorldMap from "@/components/home/WorldMap";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Possibilities />
      <WhyChooseUs />
      <WorldMap />
      <FAQ />
    </div>
  );
}
