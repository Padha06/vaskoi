"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SCANGO_FEATURES, SCANGO_PRICING, TESTIMONIALS } from "@/lib/constants";
import CTASection from "@/components/CTASection";

const PROBLEMS = [
  {
    title: "Manual Warehouse Operations",
    description: "Paper-based picking and counting leads to errors, delays, and zero real-time visibility into inventory levels.",
    impact: "15% average picking error rate",
  },
  {
    title: "Disconnected Systems",
    description: "Warehouse floor operations are siloed from your ERP, causing double data entry and inventory mismatches.",
    impact: "Hours of manual reconciliation daily",
  },
  {
    title: "No Operational Visibility",
    description: "Management relies on batch reports and end-of-day summaries to make decisions that need real-time data.",
    impact: "Reactive instead of proactive management",
  },
];

const HOW_IT_WORKS = [
  {
    number: "01",
    title: "Deploy",
    timeline: "1-2 days",
    description: "Install ScanGo as an extension in your Business Central environment. No disruption to existing operations.",
    activities: ["Install BC extension", "Configure warehouse locations", "Set up barcode profiles", "Initial data sync"],
  },
  {
    number: "02",
    title: "Train",
    timeline: "2-3 days",
    description: "Quick, hands-on training for warehouse staff and management. Most users are productive within hours.",
    activities: ["Warehouse staff training", "Management dashboard walkthrough", "Best practices session", "Quick reference guides"],
  },
  {
    number: "03",
    title: "Optimize",
    timeline: "Ongoing",
    description: "Continuous improvement with real-time analytics, feedback loops, and regular feature updates.",
    activities: ["Performance monitoring", "Process optimization", "Feature updates", "Ongoing support"],
  },
];

const FAQ_SCAANGO = [
  { question: "How does ScanGo integrate with Business Central?", answer: "ScanGo is built as a native AL extension for Dynamics 365 Business Central. It runs inside your BC environment with bi-directional real-time sync — no middleware or third-party connectors needed." },
  { question: "What hardware do I need for barcode scanning?", answer: "ScanGo works with any Bluetooth or WiFi barcode scanner that supports HID or wedge mode. It also works with the camera on Android/iOS devices using our mobile app." },
  { question: "Can I try ScanGo before committing?", answer: "Yes! We offer a 30-day free trial with full functionality. This includes up to 3 user licenses and full support during the trial period." },
  { question: "What if I have multiple warehouse locations?", answer: "ScanGo fully supports multi-location warehouses. You can manage inventory across locations, perform inter-location transfers, and get consolidated reporting across all sites." },
  { question: "How long does implementation take?", answer: "Most implementations are complete within 1-2 weeks. Simple setups can be done in as little as 3-5 days. Complex multi-location deployments may take 2-3 weeks." },
  { question: "Is ongoing support included?", answer: "All ScanGo licenses include email support and monthly feature updates. Premium support with dedicated account management and priority response is available for an additional fee." },
];

export default function ScanGoPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [licenses, setLicenses] = useState(5);

  return (
    <>
      <section className="bg-gradient-to-br from-primary via-primary-dark to-navy py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-white/90 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                Product
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                ScanGo <span className="text-accent">WMS</span>
              </h1>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                The warehouse management system built natively for Microsoft Dynamics 365 Business Central.
                Real-time inventory tracking, barcode scanning, and intelligent picking — all from your warehouse floor.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="#pricing" className="px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center shadow-lg">
                  Request Demo
                </a>
                <a href="#pricing" className="px-8 py-4 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors text-center">
                  View Pricing
                </a>
              </div>
              <div className="flex gap-6">
                <div className="glass rounded-lg px-4 py-2 text-white/80 text-sm">
                  <span className="text-accent font-bold">10+</span> Active Customers
                </div>
                <div className="glass rounded-lg px-4 py-2 text-white/80 text-sm">
                  <span className="text-accent font-bold">$200k</span> ARR
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-4">
                  {SCANGO_FEATURES.map((f) => (
                    <div key={f.title} className="glass rounded-xl p-4">
                      <h4 className="font-semibold text-white text-sm mb-1">{f.title}</h4>
                      <p className="text-xs text-white/60">{f.description.split(".")[0]}.</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">The Problem</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3">Why ScanGo Exists</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {PROBLEMS.map((problem, i) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <div className="w-12 h-12 bg-red-50 text-red-500 rounded-xl flex items-center justify-center text-xl mb-5">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{problem.title}</h3>
                <p className="text-navy/60 leading-relaxed mb-4">{problem.description}</p>
                <p className="text-red-500 font-semibold text-sm">{problem.impact}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Features</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3">Everything You Need</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SCANGO_FEATURES.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-bold text-navy mb-3">{feature.title}</h3>
                <p className="text-navy/60 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3">Up and Running in Days</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-0.5 bg-primary/20" />
            {HOW_IT_WORKS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative text-center"
              >
                <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center text-lg font-bold mx-auto mb-6 relative z-10 shadow-lg">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-navy mb-1">{step.title}</h3>
                <p className="text-accent font-semibold text-sm mb-3">{step.timeline}</p>
                <p className="text-navy/60 leading-relaxed mb-4">{step.description}</p>
                <ul className="text-left text-sm text-navy/50 space-y-1.5 max-w-xs mx-auto">
                  {step.activities.map((a) => (
                    <li key={a} className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {a}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Results</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3">Before vs. After ScanGo</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { metric: "Picking Accuracy", before: "85%", after: "99.5%", improvement: "+17%" },
              { metric: "Picking Time", before: "12 min/order", after: "4 min/order", improvement: "67% faster" },
              { metric: "Operational Visibility", before: "Daily batch", after: "Real-time", improvement: "100% faster" },
              { metric: "Labor Productivity", before: "Baseline", after: "+40% throughput", improvement: "+40%" },
              { metric: "BC Data Accuracy", before: "Manual sync", after: "Auto sync", improvement: "Zero errors" },
            ].map((item, i) => (
              <motion.div
                key={item.metric}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <h4 className="font-semibold text-navy mb-4">{item.metric}</h4>
                <div className="flex items-center gap-4">
                  <div className="flex-1 text-center p-3 bg-red-50 rounded-lg">
                    <div className="text-xs text-red-400 mb-1">Before</div>
                    <div className="font-bold text-red-600">{item.before}</div>
                  </div>
                  <svg className="w-5 h-5 text-navy/30 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <div className="flex-1 text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-xs text-green-400 mb-1">After</div>
                    <div className="font-bold text-green-600">{item.after}</div>
                  </div>
                </div>
                <div className="text-center mt-3">
                  <span className="text-primary font-bold text-sm">{item.improvement}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Pricing</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3">Simple, Transparent Pricing</h2>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <div className="text-center mb-8">
                <div className="text-5xl font-bold text-navy">{SCANGO_PRICING.price}<span className="text-lg text-navy/50 font-normal">/mo</span></div>
                <p className="text-navy/50 mt-2">per license &middot; {SCANGO_PRICING.minimum}</p>
              </div>

              <div className="space-y-3 mb-8">
                {SCANGO_PRICING.included.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-navy/70">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-light rounded-xl p-5 mb-8">
                <label className="text-sm font-medium text-navy mb-2 block">Cost Calculator</label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min={5}
                    max={100}
                    value={licenses}
                    onChange={(e) => setLicenses(parseInt(e.target.value))}
                    className="flex-1 accent-primary"
                  />
                  <span className="text-navy font-bold w-20 text-right">{licenses} licenses</span>
                </div>
                <div className="text-center mt-3">
                  <span className="text-2xl font-bold text-primary">${licenses * 20}/month</span>
                  <span className="text-navy/50 text-sm ml-2">(${licenses * 240}/year)</span>
                </div>
              </div>

              <p className="text-sm text-navy/50 mb-6 text-center">Implementation fee: {SCANGO_PRICING.implementationFee}</p>

              <a
                href="/contact"
                className="block w-full px-8 py-4 bg-primary text-white rounded-xl font-semibold text-center hover:bg-primary-dark transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3">What Customers Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-navy/70 leading-relaxed mb-4 italic">&ldquo;{t.quote}&rdquo;</p>
                <p className="font-semibold text-navy text-sm">{t.author}</p>
                <p className="text-navy/50 text-sm">{t.company}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {FAQ_SCAANGO.map((faq, i) => (
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
        headline="Ready to Transform Your Warehouse?"
        description="Start your 30-day free trial or schedule a personalized demo with our team."
        primaryCTA={{ label: "Schedule Demo", href: "/contact" }}
        secondaryCTA={{ label: "Start Free Trial", href: "/contact" }}
      />
    </>
  );
}
