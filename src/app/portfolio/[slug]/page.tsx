import Link from 'next/link';
import { notFound } from 'next/navigation';
import CTASection from '@/components/CTASection';

const PROJECTS: Record<string, any> = {
  'scango-wms-engine': {
    title: 'ScanGo WMS Engine',
    sys: 'SYS: SCAN-GO // WMS',
    image: 'https://lh3.googleusercontent.com/aida/AEtjO1XMkRmAecuOTznhX8AkA2HvYfq2OTb0JzpcXxCQvDU_e4n1LC-n4V5xXudCI1aFqUrqinFsmkUIZ3Ji_oEFnz3NypGHYyOI2GkcEeHs23K99yMl9ytOJICA_hXFndo3CsHAMxUvMsUiVUl22Q9hq1o3pLNpaKzdZieLpRvWU6O3-auFl3TA-O-P75XzeQlBaMiXoUjhwKZUCrw2a5TspCw-jZg4tpp03-HcUH4B4W7ys75wql8VCofUUw',
    description: 'Offline-first mobile warehouse execution system directly connected to Microsoft Dynamics 365 Business Central. Barcode decoders running at sub-50ms latency.',
    details: [
      { label: 'Client Type', value: 'Mid-Market Distribution' },
      { label: 'Timeline', value: '4 months' },
      { label: 'Tech Stack', value: 'Business Central, AL, Barcode Scanning, Azure' }
    ],
    body: 'ScanGo transformed warehouse operations by shifting from manual tracking to an offline-first mobile warehouse execution system. Connected directly to Microsoft Dynamics 365 Business Central, it processes barcode scans with sub-50ms latency, enabling real-time inventory visibility and boosting picking accuracy by over 17%.'
  },
  'dynamics-365-bc-custom-cockpit': {
    title: 'Dynamics 365 BC Custom Cockpit',
    sys: 'SYS: BC_CUSTOM_DASH',
    image: '/dynamics-365.png',
    description: 'A tailored ERP dashboard providing real-time analytics and streamlined operational controls.',
    details: [
      { label: 'Client Type', value: 'Enterprise Manufacturing' },
      { label: 'Timeline', value: '3 months' },
      { label: 'Tech Stack', value: 'Dynamics 365 BC, Power BI, Azure' }
    ],
    body: 'We engineered a highly customized dashboard on top of Dynamics 365 Business Central to surface critical operational metrics. This cockpit empowers managers to make data-driven decisions instantly, eliminating hours of manual reporting and providing a unified view of production.'
  },
  'e-signature-workflow-integration': {
    title: 'E-Signature Workflow Integration',
    sys: 'SYS: ESIGN_PIPELINE',
    image: '/esignature.png',
    description: 'Automated document signing pipeline seamlessly connected with existing CRM and ERP systems.',
    details: [
      { label: 'Client Type', value: 'Financial Services' },
      { label: 'Timeline', value: '2 months' },
      { label: 'Tech Stack', value: 'Node.js, Next.js, API Integration' }
    ],
    body: 'By integrating advanced e-signature capabilities directly into the client\'s existing workflow, we reduced document turnaround time by 80%. The system securely tracks document states, sends automated follow-ups, and securely archives finalized contracts.'
  },
  'afterlight-creative-studio': {
    title: 'AfterLight Creative Studio',
    sys: 'SYS: AFTERLIGHT_STUDIO',
    image: '/afterlight.png',
    description: 'A cutting-edge digital showcase platform built for high-performance media rendering.',
    details: [
      { label: 'Client Type', value: 'Creative Agency' },
      { label: 'Timeline', value: '3 months' },
      { label: 'Tech Stack', value: 'Next.js, Tailwind CSS, Framer Motion' }
    ],
    body: 'Designed for a top-tier creative agency, this platform delivers stunning visuals with lightning-fast load times. We leveraged advanced caching and optimized media pipelines to ensure high-fidelity video and image assets never compromise the user experience.'
  },
  'dap-canada-client-portal': {
    title: 'DAP Canada Client Portal',
    sys: 'SYS: DAP_CANADA',
    image: '/dap-canada.png',
    description: 'Secure, multi-tenant client portal engineered for seamless data exchange and account management.',
    details: [
      { label: 'Client Type', value: 'B2B Enterprise' },
      { label: 'Timeline', value: '5 months' },
      { label: 'Tech Stack', value: 'React, Node.js, PostgreSQL' }
    ],
    body: 'This secure portal centralizes client interactions, providing a single pane of glass for document sharing, ticketing, and account health. With robust multi-tenant architecture, it handles thousands of concurrent users with enterprise-grade security.'
  },
  'one-stop-computer-shop': {
    title: 'One Stop Computer Shop',
    sys: 'SYS: ONE_STOP_COMP',
    image: '/one-stop.jpg',
    description: 'A highly optimized e-commerce storefront for a specialized hardware retailer.',
    details: [
      { label: 'Client Type', value: 'Retail E-Commerce' },
      { label: 'Timeline', value: '3 months' },
      { label: 'Tech Stack', value: 'Next.js, Stripe, Headless CMS' }
    ],
    body: 'We completely overhauled the digital presence for this hardware retailer. The new headless e-commerce setup integrates seamlessly with their inventory system, providing lightning-fast product searches and a frictionless checkout experience.'
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
        
        <Link href="/#portfolio" className="inline-flex items-center gap-2 text-text-secondary hover:text-white transition-colors mb-8 font-code-inline text-sm">
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          RETURN_TO_SYSTEM
        </Link>

        <div className="bg-surface-base border border-border-subtle rounded-xl overflow-hidden mb-12 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
          <div className="relative h-64 md:h-96 w-full bg-[#08080A]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-contain md:object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-base via-transparent to-transparent opacity-90"></div>
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
