"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

const faqs = [
  {
    question: "How quickly can you start on my project?",
    answer:
      "We typically begin new projects within 1-2 weeks of contract signing. For urgent needs, we offer expedited onboarding and can often start sooner. During our initial consultation, we will discuss your timeline and find a start date that works for you.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We work with businesses across various industries including real estate, technology, healthcare, finance, e-commerce, and professional services. Our solutions are adaptable and can be customized to meet the specific needs of your industry.",
  },
  {
    question: "How do you ensure quality in your services?",
    answer:
      "Quality is our top priority. We implement rigorous quality assurance processes, regular performance reviews, and continuous training for our team. We also maintain open communication with clients and provide regular reports to ensure transparency and satisfaction.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "Our pricing varies based on the service and scope of work. We offer flexible pricing models including project-based, monthly retainers, and hourly rates. During our consultation, we will discuss your needs and provide a customized quote that fits your budget.",
  },
  {
    question: "Do you offer ongoing support after project completion?",
    answer:
      "Yes, we offer ongoing support and maintenance packages for all our services. Whether you need technical support for your website, continued lead generation, or software updates, we are here to help your business thrive long-term.",
  },
  {
    question: "How do I get started?",
    answer:
      "Getting started is easy. Simply fill out the contact form above or give us a call. We will schedule a free consultation to understand your needs, discuss potential solutions, and create a customized proposal for your business.",
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={false}
      className="border-b border-border last:border-b-0"
    >
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-medium text-secondary group-hover:text-primary transition-colors pr-8">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white text-primary transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-text-secondary leading-relaxed pr-16">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary tracking-tight text-balance">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="mt-4 text-lg text-text-secondary">
              Find answers to common questions about our services
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-lg border border-border">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-12 text-center">
            <p className="text-text-secondary mb-4">
              Still have questions? We are here to help.
            </p>
            <a
              href="mailto:info@primesolutions.com"
              className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-dark transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Email us at info@primesolutions.com
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
