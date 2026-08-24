"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface CTASectionProps {
  headline: string;
  description: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
}

export default function CTASection({
  headline,
  description,
  primaryCTA = { label: "Schedule Consultation", href: "/contact" },
  secondaryCTA = { label: "View Case Studies", href: "/portfolio" },
}: CTASectionProps) {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-primary to-navy">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {headline}
          </h2>
          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={primaryCTA.href}
              className="px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              {primaryCTA.label}
            </Link>
            <Link
              href={secondaryCTA.href}
              className="px-8 py-4 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              {secondaryCTA.label}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
