"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary via-primary-dark to-navy overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gold rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-white/90 text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Full-Stack Development & Custom Solutions
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Build. Connect.
              <span className="block text-accent">Scale.</span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 mb-10 max-w-lg leading-relaxed">
              We build custom web, mobile, and ERP solutions that solve real business problems.
              From startups to enterprises — we deliver technology that moves the needle.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg text-center"
              >
                Start a Project
              </Link>
              <Link
                href="/portfolio"
                className="px-8 py-4 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors text-center"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="glass rounded-3xl p-8 text-white">
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass rounded-2xl p-5 text-center">
                    <div className="text-3xl font-bold text-accent mb-1">50+</div>
                    <div className="text-sm text-white/60">Projects</div>
                  </div>
                  <div className="glass rounded-2xl p-5 text-center">
                    <div className="text-3xl font-bold text-accent mb-1">99%</div>
                    <div className="text-sm text-white/60">Satisfaction</div>
                  </div>
                  <div className="glass rounded-2xl p-5 text-center">
                    <div className="text-3xl font-bold text-accent mb-1">15+</div>
                    <div className="text-sm text-white/60">Active Clients</div>
                  </div>
                  <div className="glass rounded-2xl p-5 text-center">
                    <div className="text-3xl font-bold text-accent mb-1">90+</div>
                    <div className="text-sm text-white/60">Days Avg. ROI</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-accent/20 rounded-3xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-white/40"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
