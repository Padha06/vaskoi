"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SCANGO_FEATURES } from "@/lib/constants";

export default function ScanGoPreview() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              ScanGo WMS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
              Warehouse Management, Reimagined
            </h2>
            <p className="text-navy/60 text-lg leading-relaxed mb-8">
              ScanGo is our flagship warehouse management system built as a native extension for Microsoft
              Dynamics 365 Business Central. Real-time inventory tracking, barcode scanning, and intelligent
              picking — all from your warehouse floor.
            </p>

            <div className="space-y-4 mb-10">
              {SCANGO_FEATURES.slice(0, 3).map((feature) => (
                <div key={feature.title} className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold text-navy">{feature.title}</span>
                    <span className="text-navy/60"> — {feature.description.split(".")[0]}</span>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/scango"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors shadow-sm"
            >
              Learn More About ScanGo
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="bg-gradient-to-br from-primary to-navy rounded-3xl p-8 text-white shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  {SCANGO_FEATURES.map((feature) => (
                    <div key={feature.title} className="glass rounded-xl p-4">
                      <h4 className="font-semibold text-sm mb-1">{feature.title}</h4>
                      <p className="text-xs text-white/60 leading-relaxed">{feature.description.split(".")[0]}.</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-accent/10 rounded-3xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
