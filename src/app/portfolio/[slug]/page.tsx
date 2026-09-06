"use client";
import Link from 'next/link';
import { notFound } from 'next/navigation';
import CTASection from '@/components/CTASection';

const PROJECTS: Record<string, any> = {
  'ecommerce-platform': {
    title: 'High-Conversion E-Commerce Architecture',
    sys: 'SYS: ECOMMERCE_CORE',
    image: '/dynamics-365.png',
    description: 'Architected a headless multi-currency catalog with sub-100ms server-side rendering, integrated real-time inventory caching, and friction-free payment settlement.',
    details: [
      { label: 'Client Type', value: 'Retail E-Commerce' },
      { label: 'Timeline', value: '3 months' },
      { label: 'Tech Stack', value: 'Next.js 14, React Server Components, Tailwind CSS' }
    ],
    body: 'We engineered a high-performance headless architecture for a modern retail brand. By decoupling the frontend from the backend e-commerce engine, we achieved sub-100ms page loads and real-time inventory synchronization. The solution significantly boosted mobile conversion rates and provided a scalable foundation for global expansion.'
  },
  'operations-telemetry-platform': {
    title: 'Operations & Telemetry Command Platform',
    sys: 'SYS: OPS_COMMAND',
    image: '/esignature.png',
    description: 'Unified mission-critical resource allocation, contract lifecycle, and client billings into a single low-latency cockpit.',
    details: [
      { label: 'Client Type', value: 'Enterprise Operations' },
      { label: 'Timeline', value: '4 months' },
      { label: 'Tech Stack', value: 'Node.js, PostgreSQL, WebSockets' }
    ],
    body: 'Designed for a high-volume enterprise, this command platform acts as the central nervous system for their daily operations. By consolidating disjointed legacy tools into a unified, real-time dashboard, we enabled zero-latency decision making, automated contract lifecycles, and streamlined client billing processes.'
  },
  'field-service-app': {
    title: 'Field Workforce & Offline Sync Engine',
    sys: 'SYS: FIELD_OPS',
    image: '/afterlight.png',
    description: 'Engineered an offline-first mobile application capable of bidirectional queuing and conflict resolution under zero-connectivity field conditions.',
    details: [
      { label: 'Client Type', value: 'Logistics & Field Service' },
      { label: 'Timeline', value: '5 months' },
      { label: 'Tech Stack', value: 'React Native, SQLite, Custom Sync Engine' }
    ],
    body: 'Field technicians were losing hours every week due to spotty cellular connections. We developed a robust offline-first mobile application that queues actions locally and intelligently syncs with the central database when connectivity is restored. This resolved data conflicts automatically and empowered the workforce to operate without interruptions.'
  },
  'dynamics-365-bc-custom': {
    title: 'Microsoft Dynamics 365 BC Custom Engineering',
    sys: 'SYS: BC_CUSTOM_EXT',
    image: '/dap-canada.png',
    description: 'Architected custom AL extensions, automated multi-stage invoice validation pipelines, and integrated low-code webhooks bridging modern SaaS with corporate ERP backbones.',
    details: [
      { label: 'Client Type', value: 'B2B Distribution' },
      { label: 'Timeline', value: '6 months' },
      { label: 'Tech Stack', value: 'AL Language, Business Central, Azure Logic Apps' }
    ],
    body: 'We pushed the boundaries of Microsoft Dynamics 365 Business Central by developing advanced AL extensions that automated the client\'s massive invoice validation pipelines. Integrating seamlessly with modern SaaS applications via Azure Logic Apps, the custom engineering reduced manual accounting errors by 98% and accelerated the monthly financial close.'
  }
};

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = PROJECTS[params.slug];

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-surface-deep pt-24 pb-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* We use a standard anchor tag to return to homepage case-studies section to ensure full reload which fixes the preloader hydration bug on soft-navigation */}
        <a href="/#case-studies" onClick={(e) => { e.preventDefault(); window.location.href = "/#case-studies"; }} className="inline-flex items-center gap-2 text-text-secondary hover:text-white transition-colors mb-8 font-code-inline text-sm">
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          RETURN_TO_SYSTEM
        </a>

        <div className="bg-surface-base border border-border-subtle rounded-xl overflow-hidden mb-12 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
          <div className="relative h-64 md:h-96 w-full bg-[#08080A]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-contain md:object-cover object-top opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-base via-surface-base/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-block font-code-inline text-body-sm text-border-interactive mb-2 px-2 py-1 bg-surface-deep/80 border border-border-subtle">
                {project.sys}
              </span>
              <h1 className="text-3xl md:text-5xl font-headline-sm font-bold text-white mb-2">{project.title}</h1>
              <p className="text-text-secondary text-lg max-w-3xl">{project.description}</p>
            </div>
          </div>
          
          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              
              <div className="md:col-span-2 space-y-6">
                <h2 className="text-2xl font-bold text-white mb-4">Project Overview</h2>
                <p className="text-text-primary leading-relaxed text-lg">
                  {project.body}
                </p>
                <div className="mt-8 pt-8 border-t border-border-subtle">
                  <h3 className="text-xl font-bold text-white mb-4">The Impact</h3>
                  <p className="text-text-secondary leading-relaxed">
                    By implementing modern architecture and robust engineering practices, we delivered a solution that not only met the immediate technical requirements but provided a scalable foundation for future growth.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                {project.details.map((detail: any, idx: number) => (
                  <div key={idx} className="border-l-2 border-border-interactive pl-4">
                    <p className="font-code-inline text-xs text-text-tertiary uppercase tracking-wider mb-1">{detail.label}</p>
                    <p className="font-semibold text-white">{detail.value}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

      </div>
      
      <CTASection headline="Ready to build your next system?" description="Let's craft the perfect technical solution for your operational bottlenecks." />
    </div>
  );
}
