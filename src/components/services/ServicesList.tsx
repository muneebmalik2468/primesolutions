"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";

const services = [
  {
    id: "web-development",
    title: "Website Development",
    tagline: "Build Your Digital Presence",
    description:
      "We create stunning, high-performance websites that captivate visitors and convert them into customers. Our development team uses the latest technologies to build responsive, fast, and SEO-optimized websites.",
    benefits: [
      "Custom design tailored to your brand",
      "Mobile-first responsive development",
      "Fast loading speeds & optimized performance",
      "SEO-ready structure",
      "Easy content management system",
    ],
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    color: "primary",
  },
  {
    id: "real-estate",
    title: "Real Estate Lead Calling",
    tagline: "Generate Qualified Leads Daily",
    description:
      "Our expert calling team specializes in real estate lead generation. We use proven scripts and professional techniques to connect you with motivated buyers and sellers, delivering 300+ qualified leads monthly.",
    benefits: [
      "Trained real estate calling specialists",
      "Proven cold-calling scripts",
      "Lead qualification & verification",
      "CRM integration & reporting",
      "Flexible calling hours coverage",
    ],
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
    color: "accent",
  },
  {
    id: "custom-software",
    title: "Custom Software Development",
    tagline: "Tailored Solutions for Your Needs",
    description:
      "We build custom software solutions designed specifically for your business operations. From internal tools to customer-facing applications, our development team creates scalable, secure, and efficient software.",
    benefits: [
      "Requirements analysis & planning",
      "Scalable architecture design",
      "Agile development methodology",
      "Quality assurance & testing",
      "Ongoing maintenance & support",
    ],
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
    color: "primary",
  },
  {
    id: "saas",
    title: "SaaS Products",
    tagline: "Ready-to-Use Business Solutions",
    description:
      "Access our suite of SaaS products designed to streamline your operations. Our flagship LeadFlow Pro helps businesses manage leads efficiently with real-time tracking, automation, and analytics.",
    benefits: [
      "Instant deployment & setup",
      "Regular updates & new features",
      "Cloud-based accessibility",
      "Data security & compliance",
      "Dedicated customer support",
    ],
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
    color: "accent",
  },
  {
    id: "seo-marketing",
    title: "SEO & Digital Marketing",
    tagline: "Grow Your Online Visibility",
    description:
      "Boost your online presence with our data-driven SEO and digital marketing strategies. We help you rank higher, attract more traffic, and convert visitors into loyal customers through targeted campaigns.",
    benefits: [
      "Comprehensive SEO audits",
      "Keyword research & optimization",
      "Content marketing strategy",
      "PPC campaign management",
      "Performance tracking & reporting",
    ],
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    color: "primary",
  },
  {
    id: "virtual-assistance",
    title: "Virtual Assistance",
    tagline: "Support When You Need It",
    description:
      "Our professional virtual assistants handle administrative tasks, customer support, data entry, and more. Free up your time to focus on growing your business while we take care of the details.",
    benefits: [
      "Administrative task management",
      "Customer support & communication",
      "Data entry & processing",
      "Calendar & email management",
      "Research & documentation",
    ],
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    color: "accent",
  },
];

export default function ServicesList() {
  return (
    <section className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {services.map((service, index) => (
            <ScrollReveal key={service.id}>
              <div
                id={service.id}
                className={`scroll-mt-24 grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 ${
                      service.color === "primary"
                        ? "bg-primary/10 text-primary"
                        : "bg-accent/10 text-accent"
                    }`}
                  >
                    {service.icon}
                    <span className="text-sm font-medium">{service.tagline}</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-secondary tracking-tight mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-text-secondary leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.benefits.map((benefit) => (
                      <motion.li
                        key={benefit}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                      >
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                            service.color === "primary"
                              ? "bg-primary/20"
                              : "bg-accent/20"
                          }`}
                        >
                          <svg
                            className={`w-3 h-3 ${
                              service.color === "primary"
                                ? "text-primary"
                                : "text-accent"
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-text-primary">{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <Button
                    href="/contact"
                    variant={service.color === "primary" ? "primary" : "secondary"}
                  >
                    Get Started
                  </Button>
                </div>

                {/* Visual Card */}
                <motion.div
                  whileHover={{ y: -8 }}
                  className={`${index % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <div
                    className={`relative rounded-3xl p-8 ${
                      service.color === "primary"
                        ? "bg-primary/5"
                        : "bg-accent/5"
                    }`}
                  >
                    <div className="bg-card rounded-2xl shadow-xl p-8 border border-border">
                      <div
                        className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 ${
                          service.color === "primary"
                            ? "bg-primary/10 text-primary"
                            : "bg-accent/10 text-accent"
                        }`}
                      >
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-secondary mb-4">
                        {service.title}
                      </h3>
                      <div className="space-y-3">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div
                              className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                                service.color === "primary"
                                  ? "bg-primary/10"
                                  : "bg-accent/10"
                              }`}
                            >
                              <div
                                className={`w-2 h-2 rounded-full ${
                                  service.color === "primary"
                                    ? "bg-primary"
                                    : "bg-accent"
                                }`}
                              />
                            </div>
                            <div className="flex-1 h-3 bg-border rounded-full" />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Decorative elements */}
                    <div
                      className={`absolute -top-4 -right-4 w-24 h-24 rounded-full blur-2xl ${
                        service.color === "primary"
                          ? "bg-primary/20"
                          : "bg-accent/20"
                      }`}
                    />
                    <div
                      className={`absolute -bottom-4 -left-4 w-32 h-32 rounded-full blur-2xl ${
                        service.color === "primary"
                          ? "bg-primary/10"
                          : "bg-accent/10"
                      }`}
                    />
                  </div>
                </motion.div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
