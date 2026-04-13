"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function OurStory() {
  return (
    <section className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image/Visual */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="relative bg-primary/5 rounded-3xl p-8">
                <div className="bg-card rounded-2xl shadow-xl overflow-hidden border border-border">
                  <div className="aspect-[4/3] bg-background flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg
                          className="w-12 h-12 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-secondary mb-2">
                        Since 2019
                      </h3>
                      <p className="text-text-secondary">
                        Helping businesses grow worldwide
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 bg-card rounded-2xl shadow-xl p-4 border border-border"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-text-secondary">Team Members</p>
                      <p className="text-sm font-semibold text-secondary">100+</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -left-4 bg-card rounded-2xl shadow-xl p-4 border border-border"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-accent"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-text-secondary">Global Reach</p>
                      <p className="text-sm font-semibold text-secondary">15+ Countries</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal direction="right">
            <div>
              <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary tracking-tight mb-6 text-balance">
                From Vision to <span className="text-primary">Global Impact</span>
              </h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  PrimeSolutions was founded in 2019 with a simple yet powerful
                  vision: to help businesses of all sizes access enterprise-level
                  BPO and digital solutions that were once only available to large
                  corporations.
                </p>
                <p>
                  What started as a small team of dedicated professionals has grown
                  into a global operation serving clients across 15+ countries. Our
                  journey has been fueled by a passion for innovation, a commitment
                  to excellence, and a genuine desire to see our clients succeed.
                </p>
                <p>
                  Today, we continue to expand our services and capabilities,
                  always staying ahead of industry trends to deliver cutting-edge
                  solutions. Our success is measured not just by our growth, but by
                  the success stories of the businesses we have helped transform.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
