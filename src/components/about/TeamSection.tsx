"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

const team = [
  {
    name: "Alex Thompson",
    role: "CEO & Founder",
    bio: "Visionary leader with 15+ years in BPO and tech industries.",
    initials: "AT",
  },
  {
    name: "Sarah Chen",
    role: "Head of Operations",
    bio: "Operations expert ensuring seamless service delivery worldwide.",
    initials: "SC",
  },
  {
    name: "Michael Roberts",
    role: "CTO",
    bio: "Tech innovator driving our software and SaaS solutions.",
    initials: "MR",
  },
  {
    name: "Emily Davis",
    role: "Head of Client Success",
    bio: "Dedicated to ensuring every client achieves their goals.",
    initials: "ED",
  },
];

const testimonial = {
  content:
    "Working with PrimeSolutions has been transformative for our business. Their team is professional, responsive, and truly invested in our success. The results speak for themselves - we have seen a 200% increase in leads and significant cost savings.",
  author: "Jennifer Martinez",
  role: "VP of Sales, TechCorp Industries",
  avatar: "JM",
};

export default function TeamSection() {
  return (
    <section className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Leadership Team */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Leadership Team
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary tracking-tight text-balance">
              Meet the People <span className="text-primary">Behind the Vision</span>
            </h2>
            <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
              Our leadership team brings decades of combined experience in BPO,
              technology, and business growth.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {team.map((member, index) => (
            <ScrollReveal key={member.name} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="text-center"
              >
                <div className="relative inline-block mb-6">
                  <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center mx-auto border-4 border-card shadow-xl">
                    <span className="text-3xl font-bold text-primary">
                      {member.initials}
                    </span>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap">
                    {member.role}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  {member.name}
                </h3>
                <p className="text-text-secondary text-sm">{member.bio}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Client Testimonial */}
        <ScrollReveal>
          <div className="bg-background rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

            <div className="relative max-w-3xl mx-auto text-center">
              <div className="flex justify-center gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-6 h-6 text-accent"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl text-secondary leading-relaxed mb-8">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-lg font-semibold text-primary">
                    {testimonial.avatar}
                  </span>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-secondary">
                    {testimonial.author}
                  </h4>
                  <p className="text-sm text-text-secondary">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
