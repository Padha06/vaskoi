"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CASE_STUDIES } from "@/lib/constants";
import CTASection from "@/components/CTASection";

const CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Dev" },
  { id: "mobile", label: "Mobile" },
  { id: "bc", label: "BC Custom" },
  { id: "integration", label: "Integration" },
];

export default function PortfolioPage() {
  const [active, setActive] = useState("all");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = active === "all" ? CASE_STUDIES : CASE_STUDIES.filter((c) => c.category === active);

  return (
    <>
      <section className="bg-gradient-to-br from-primary to-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Projects</h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Real results from real projects. We anonymize client details to protect privacy, but the outcomes speak for themselves.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  active === cat.id
                    ? "bg-primary text-white shadow-md"
                    : "bg-gray-100 text-navy/60 hover:bg-gray-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {filtered.map((study, i) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-shadow"
                >
                  <div className="h-48 bg-gradient-to-br from-primary to-navy flex items-center justify-center">
                    <span className="text-5xl">{study.category === "web" ? "🌐" : study.category === "mobile" ? "📱" : "⚙️"}</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2.5 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full">{study.clientType}</span>
                      <span className="text-navy/40 text-xs">{study.timeline}</span>
                    </div>
                    <h3 className="text-xl font-bold text-navy mb-2">{study.title}</h3>

                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {study.results.slice(0, 4).map((r) => (
                        <div key={r.metric} className="bg-light rounded-lg p-3">
                          <div className="text-primary font-bold text-sm">{r.improvement}</div>
                          <div className="text-navy/50 text-xs">{r.metric}</div>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => setExpanded(expanded === study.id ? null : study.id)}
                      className="text-primary font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      {expanded === study.id ? "Show Less" : "View Details"}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={expanded === study.id ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                      </svg>
                    </button>

                    <AnimatePresence>
                      {expanded === study.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-6 space-y-4 border-t border-gray-100 mt-4">
                            <div>
                              <h4 className="font-semibold text-navy text-sm mb-2">Challenge</h4>
                              <p className="text-navy/60 text-sm leading-relaxed">{study.challenge}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-navy text-sm mb-2">Solution</h4>
                              <p className="text-navy/60 text-sm leading-relaxed">{study.solution}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-navy text-sm mb-2">Tech Stack</h4>
                              <div className="flex flex-wrap gap-2">
                                {study.techStack.map((tech) => (
                                  <span key={tech} className="px-2.5 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">{tech}</span>
                                ))}
                              </div>
                            </div>
                            {study.testimonial && (
                              <div className="bg-light rounded-xl p-4">
                                <p className="text-navy/70 text-sm italic mb-2">&ldquo;{study.testimonial.quote}&rdquo;</p>
                                <p className="text-navy/50 text-xs font-medium">— {study.testimonial.author}, {study.testimonial.company}</p>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to Build Your Success Story?"
        description="Let's discuss your project and create something remarkable together."
      />
    </>
  );
}
