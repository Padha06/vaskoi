import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import Process from "@/components/Process";
import ScanGoPreview from "@/components/ScanGoPreview";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import Newsletter from "@/components/Newsletter";
import CTASection from "@/components/CTASection";
import { SERVICES } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3">Our Services</h2>
            <p className="text-navy/60 mt-4 max-w-2xl mx-auto text-lg">
              End-to-end development solutions tailored to your business needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {SERVICES.map((service, i) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.shortDesc}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      <Process />
      <ScanGoPreview />
      <Stats />
      <Testimonials />
      <Newsletter />
      <CTASection
        headline="Ready to Build Something Great?"
        description="Whether you need a custom web app, mobile solution, or ERP customization — we're here to help you scale."
      />
    </>
  );
}
