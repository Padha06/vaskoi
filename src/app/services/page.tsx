"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";
import CTASection from "@/components/CTASection";

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary to-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              From concept to deployment, we deliver full-stack solutions that solve real business problems.
              Every project is built with scalability, performance, and maintainability in mind.
            </p>
          </motion.div>
        </div>
      </section>

      {SERVICES.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 md:py-28 ${i % 2 === 0 ? "bg-white" : "bg-light"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? "lg:direction-rtl" : ""}`}>
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-4xl mb-4 block">{service.icon}</span>
                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">{service.title}</h2>
                <p className="text-navy/60 text-lg leading-relaxed mb-8">{service.description}</p>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-navy/70">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {service.techStack.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                >
                  Let&apos;s talk about {service.title.split(" ")[0]}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 border border-primary/10">
                  <div className="grid grid-cols-2 gap-4">
                    {service.features.slice(0, 4).map((feature) => (
                      <div key={feature} className="bg-white rounded-xl p-4 shadow-sm">
                        <p className="text-sm font-medium text-navy">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      <CTASection
        headline="Ready to Get Started?"
        description="Let's discuss your project and find the right solution for your business."
      />
    </>
  );
}
