import type { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesList from "@/components/services/ServicesList";
import ProcessSection from "@/components/services/ProcessSection";
import ServicesCTA from "@/components/services/ServicesCTA";

export const metadata: Metadata = {
  title: "Our Services | PrimeSolutions",
  description:
    "Explore our comprehensive BPO and digital services including website development, real estate lead calling, custom software, SaaS products, and SEO & digital marketing.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <ProcessSection />
      <ServicesCTA />
    </>
  );
}
