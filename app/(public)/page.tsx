import About from "@/components/home/About";
import FAQ from "@/components/home/FAQ";
import Hero from "@/components/home/Hero";
import Possibilities from "@/components/home/Possibilities";
import Process from "@/components/home/Process";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import WorldMap from "@/components/home/WorldMap";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Possibilities />
      <WhyChooseUs />
      {/* <Process /> */}
      <WorldMap />
      <FAQ />
    </div>
  );
}
