import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import MissionValues from "@/components/about/MissionValues";
import TeamSection from "@/components/about/TeamSection";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About Us | PrimeSolutions",
  description:
    "Learn about PrimeSolutions - your trusted growth partner for BPO services and digital solutions. Discover our story, mission, values, and the team behind our success.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <MissionValues />
      <TeamSection />
      <AboutCTA />
    </>
  );
}
