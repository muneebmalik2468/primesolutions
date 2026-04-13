"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";

const features = [
  "Real-time lead tracking dashboard",
  "Automated follow-up sequences",
  "Performance analytics & reporting",
  "Team collaboration tools",
];

export default function SaaSShowcase() {
  return (
    <section className="py-24 bg-card overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <ScrollReveal direction="left">
            <div>
              <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
                Featured Product
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary tracking-tight text-balance">
                LeadFlow Pro:{" "}
                <span className="text-primary">
                  Your All-in-One Lead Management
                </span>
              </h2>
              <p className="mt-4 text-lg text-text-secondary leading-relaxed">
                Streamline your lead generation and management with our powerful
                SaaS platform. Track, nurture, and convert leads faster with
                intelligent automation.
              </p>

              <ul className="mt-8 space-y-4">
                {features.map((feature, index) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-text-primary">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button href="/contact" size="lg">
                  Request Demo
                </Button>
                <Button href="/services#saas" variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Visual */}
          <ScrollReveal direction="right">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative bg-secondary rounded-3xl p-6 shadow-2xl"
              >
                {/* Mock Dashboard */}
                <div className="bg-card rounded-2xl overflow-hidden">
                  {/* Header */}
                  <div className="bg-background p-4 flex items-center gap-3 border-b border-border">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div className="flex-1 h-6 bg-border rounded-lg" />
                  </div>

                  {/* Dashboard Content */}
                  <div className="p-6 space-y-6">
                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-4">
                      {["Total Leads", "Converted", "Pending"].map(
                        (label, i) => (
                          <div
                            key={label}
                            className="bg-background rounded-xl p-4 text-center"
                          >
                            <div className="text-2xl font-bold text-secondary">
                              {i === 0 ? "1,247" : i === 1 ? "328" : "156"}
                            </div>
                            <div className="text-xs text-text-secondary mt-1">
                              {label}
                            </div>
                          </div>
                        )
                      )}
                    </div>

                    {/* Chart Placeholder */}
                    <div className="bg-background rounded-xl p-4">
                      <div className="flex items-end justify-between h-32 gap-2">
                        {[40, 65, 45, 80, 55, 90, 75].map((height, i) => (
                          <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            whileInView={{ height: `${height}%` }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                            className={`flex-1 rounded-t-lg ${
                              i === 5 ? "bg-primary" : "bg-primary/30"
                            }`}
                          />
                        ))}
                      </div>
                      <div className="flex justify-between mt-2">
                        {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
                          <span
                            key={i}
                            className="text-xs text-text-secondary flex-1 text-center"
                          >
                            {day}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="space-y-3">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 bg-background rounded-lg p-3"
                        >
                          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                            <span className="text-xs font-medium text-primary">
                              {String.fromCharCode(64 + i)}
                            </span>
                          </div>
                          <div className="flex-1">
                            <div className="h-3 bg-border rounded w-3/4" />
                            <div className="h-2 bg-border/50 rounded w-1/2 mt-1" />
                          </div>
                          <div className="w-16 h-6 bg-primary/10 rounded-full" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-accent text-white px-4 py-2 rounded-full shadow-lg"
              >
                <span className="text-sm font-semibold">New Features</span>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
