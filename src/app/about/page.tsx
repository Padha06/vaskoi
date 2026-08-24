"use client";

import { motion } from "framer-motion";
import { ABOUT_VALUES, TEAM_MEMBERS } from "@/lib/constants";
import CTASection from "@/components/CTASection";

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary to-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Vaskoi</h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              We&apos;re a team of builders, problem-solvers, and technologists who believe great software
              starts with understanding the business behind it.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-6">Built from Real Challenges</h2>
              <div className="space-y-4 text-navy/60 leading-relaxed">
                <p>
                  Vaskoi was born from a simple observation: too many businesses struggle with technology
                  that doesn&apos;t quite fit. Off-the-shelf software forces companies to adapt their workflows
                  to the tool, instead of the other way around.
                </p>
                <p>
                  We started by helping businesses customize their Microsoft Dynamics 365 Business Central
                  implementations — building extensions, automating workflows, and creating reports that
                  actually matched how teams work. Along the way, we noticed a pattern: our clients needed
                  more than just ERP tweaks. They needed end-to-end solutions.
                </p>
                <p>
                  That&apos;s how ScanGo was born — our flagship warehouse management system that emerged from
                  a client&apos;s need for real-time inventory visibility. It&apos;s now used by multiple
                  distribution and manufacturing companies to transform their warehouse operations.
                </p>
                <p>
                  Today, Vaskoi delivers full-stack development services spanning web, mobile, ERP
                  customization, and system integration. We work with startups building their first
                  product, growing businesses scaling their operations, and enterprises modernizing
                  their tech stack.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 border border-primary/10">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-5 shadow-sm">
                    <div className="text-3xl font-bold text-primary mb-1">50+</div>
                    <div className="text-navy/50 text-sm">Projects Delivered</div>
                  </div>
                  <div className="bg-white rounded-xl p-5 shadow-sm">
                    <div className="text-3xl font-bold text-primary mb-1">5+</div>
                    <div className="text-navy/50 text-sm">Years Experience</div>
                  </div>
                  <div className="bg-white rounded-xl p-5 shadow-sm">
                    <div className="text-3xl font-bold text-primary mb-1">99%</div>
                    <div className="text-navy/50 text-sm">Client Satisfaction</div>
                  </div>
                  <div className="bg-white rounded-xl p-5 shadow-sm">
                    <div className="text-3xl font-bold text-primary mb-1">15+</div>
                    <div className="text-navy/50 text-sm">Active Clients</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3">What Drives Us</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {ABOUT_VALUES.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <div className="text-3xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-navy mb-3">{value.title}</h3>
                <p className="text-navy/60 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Team</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3">Meet the Builder</h2>
          </div>
          <div className="flex justify-center">
            {TEAM_MEMBERS.map((member) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 max-w-md text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-navy rounded-full mx-auto mb-6 flex items-center justify-center text-white text-3xl font-bold">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-navy mb-1">{member.name}</h3>
                <p className="text-primary font-medium text-sm mb-4">{member.title}</p>
                <p className="text-navy/60 leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Want to Work With Us?"
        description="We're always looking for interesting projects and great people to collaborate with."
      />
    </>
  );
}
