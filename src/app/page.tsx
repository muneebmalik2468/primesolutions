import Hero from "@/components/home/Hero";
import ServicesShowcase from "@/components/home/ServicesShowcase";
import Stats from "@/components/home/Stats";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import SaaSShowcase from "@/components/home/SaaSShowcase";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesShowcase />
      <Stats />
      <WhyChooseUs />
      <Testimonials />
      <SaaSShowcase />
      <CTASection />
    </>
  );
}
