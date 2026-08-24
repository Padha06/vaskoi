"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  href?: string;
  index?: number;
}

export default function ServiceCard({ icon, title, description, href = "/services", index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-gray-100 transition-shadow group"
    >
      <div className="text-4xl mb-5">{icon}</div>
      <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-navy/60 leading-relaxed mb-5">{description}</p>
      <Link
        href={href}
        className="inline-flex items-center text-primary font-semibold text-sm gap-2 hover:gap-3 transition-all"
      >
        Learn More
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </motion.div>
  );
}
