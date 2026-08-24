"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PRICING_PLANS } from "@/lib/constants";
import CTASection from "@/components/CTASection";

const FAQ_PRICING = [
  { question: "What payment terms do you offer?", answer: "For fixed-price projects, we typically split payments into 3 milestones: 40% upfront, 30% at midpoint, and 30% on completion. For ongoing work, we offer monthly retainers with net-15 terms." },
  { question: "Can I get a custom quote?", answer: "Absolutely. Our pricing packages are starting points. Every project is unique, and we'll provide a detailed quote after our discovery session based on your specific requirements." },
  { question: "What's included in post-launch support?", answer: "Post-launch support includes bug fixes, minor feature adjustments, performance monitoring, and technical consultation. The duration varies by package — from 30 days (Startup) to 12 months (Enterprise)." },
  { question: "Do you offer payment plans?", answer: "Yes, for larger projects we can arrange monthly payment plans. We also offer retainer-based engagement for ongoing development needs." },
  { question: "What if my project scope changes?", answer: "We use agile methodology, so scope changes are expected. We handle changes through a change request process — you'll get a transparent estimate of impact on timeline and budget before any changes are approved." },
];

export default function PricingPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <>
      <section className="bg-gradient-to-br from-primary to-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Flexible Pricing</h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Transparent pricing tailored to your project scope. Every package includes source code ownership and a dedicated project team.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 -mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {PRICING_PLANS.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`bg-white rounded-2xl p-8 shadow-sm border-2 transition-shadow hover:shadow-xl relative ${
                  plan.popular ? "border-primary shadow-lg scale-[1.02]" : "border-gray-100"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-navy mb-2">{plan.name}</h3>
                <p className="text-navy/50 text-sm mb-6">{plan.description}</p>
                <div className="mb-8">
                  <span className="text-4xl font-bold text-navy">{plan.price}</span>
                  <span className="text-navy/50">{plan.range}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-navy/70 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`block w-full px-6 py-3 rounded-xl font-semibold text-center transition-colors ${
                    plan.popular
                      ? "bg-primary text-white hover:bg-primary-dark"
                      : "bg-light text-navy hover:bg-gray-200"
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy">Pricing FAQ</h2>
          </div>
          <div className="space-y-3">
            {FAQ_PRICING.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-light/50 transition-colors"
                >
                  <span className="font-semibold text-navy pr-4">{faq.question}</span>
                  <svg className={`w-5 h-5 text-navy/40 shrink-0 transition-transform ${activeFaq === i ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                      <p className="px-6 pb-4 text-navy/60 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Still Not Sure?"
        description="Every project is different. Let's hop on a quick call and find the right approach for your needs."
        primaryCTA={{ label: "Schedule Consultation", href: "/contact" }}
      />
    </>
  );
}
