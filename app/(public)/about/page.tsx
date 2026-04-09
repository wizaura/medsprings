import WhyPartner from "@/components/about/Why";
import MissionVision from "@/components/about/MissionVision";
import { AboutIntro } from "@/components/about/Intro";
import { AboutIntegrity } from "@/components/about/Integrity";
import { Advantage } from "@/components/about/Advantage";
import { OurStory } from "@/components/about/Story";
import PageHero from "@/components/common/PageHero";

export default function AboutPage() {
    return (
        <>
            <PageHero
                title="About Medsprings"
                description="Precision Solutions for Global Surgery. Advancing the Standards of Clinical Excellence."
                image="/about-header.jpg"
            />
            <AboutIntro />
            <AboutIntegrity />
            <Advantage />
            <OurStory />
            <MissionVision />
            <WhyPartner />
        </>
    );
}