import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactSection from "@/components/contact/ContactSection";
import FAQSection from "@/components/contact/FAQSection";

export const metadata: Metadata = {
  title: "Contact Us | PrimeSolutions",
  description:
    "Get in touch with PrimeSolutions. Schedule a free consultation to discuss how our BPO and digital solutions can help your business grow.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactSection />
      <FAQSection />
    </>
  );
}
