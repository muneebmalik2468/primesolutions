"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We start by understanding your business, goals, and challenges through a comprehensive discovery call.",
  },
  {
    number: "02",
    title: "Strategy & Planning",
    description:
      "Our team develops a tailored strategy and detailed plan aligned with your objectives and timeline.",
  },
  {
    number: "03",
    title: "Implementation",
    description:
      "We execute the plan with precision, keeping you informed at every stage of the process.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "After successful delivery, we provide ongoing support and optimization to ensure continued success.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Our Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary tracking-tight text-balance">
              How We <span className="text-primary">Work Together</span>
            </h2>
            <p className="mt-4 text-lg text-text-secondary leading-relaxed">
              A streamlined process designed to deliver results efficiently and
              keep you informed every step of the way.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <ScrollReveal key={step.number} delay={index * 0.15}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="relative bg-card rounded-2xl p-8 shadow-lg border border-border text-center"
                >
                  {/* Step Number */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/25">
                      <span className="text-white font-bold">{step.number}</span>
                    </div>
                  </div>

                  <div className="pt-6">
                    <h3 className="text-xl font-semibold text-secondary mb-3">
                      {step.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
