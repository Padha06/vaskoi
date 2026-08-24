export const SITE = {
  name: "Vaskoi",
  tagline: "Build. Connect. Scale.",
  description:
    "Full-stack development and custom solutions company specializing in web, mobile, Business Central integrations, and warehouse management systems.",
  email: "hello@vaskoi.com",
  phone: "+91 98765 43210",
  location: "Vadodara, India",
  url: "https://vaskoi.com",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "ScanGo", href: "/scango" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES = [
  {
    id: "web",
    title: "Web Development",
    shortDesc:
      "Custom web applications built with modern frameworks. Scalable, performant, and designed to convert.",
    description:
      "We build custom web applications tailored to your business needs. From landing pages to complex SaaS platforms, our team delivers responsive, fast, and accessible solutions using React, Next.js, Node.js, and modern cloud infrastructure.",
    features: [
      "Custom React/Next.js applications",
      "Progressive Web Apps (PWA)",
      "E-commerce platforms",
      "SaaS dashboards & admin panels",
      "API development & integration",
      "Performance optimization",
    ],
    techStack: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
    icon: "🌐",
  },
  {
    id: "mobile",
    title: "Mobile Development",
    shortDesc:
      "Native and cross-platform mobile apps that deliver seamless experiences on iOS and Android.",
    description:
      "Our mobile development team creates intuitive, high-performance apps for iOS and Android. We use React Native and Flutter for cross-platform efficiency, ensuring your app reaches the widest audience without compromising quality.",
    features: [
      "React Native cross-platform apps",
      "Flutter development",
      "Native iOS & Android",
      "Offline-first architecture",
      "Push notifications & analytics",
      "App Store optimization",
    ],
    techStack: ["React Native", "Flutter", "Dart", "Firebase", "Swift", "Kotlin"],
    icon: "📱",
  },
  {
    id: "bc",
    title: "Business Central Customization",
    shortDesc:
      "Tailored ERP solutions that streamline operations and unlock the full potential of Microsoft Dynamics 365.",
    description:
      "We specialize in customizing Microsoft Dynamics 365 Business Central to fit your unique workflows. From custom reports and automated processes to third-party integrations, we make your ERP work for you — not the other way around.",
    features: [
      "Custom AL extensions",
      "Report development & customization",
      "Workflow automation",
      "Data migration & cleansing",
      "Third-party integrations",
      "Training & support",
    ],
    techStack: ["AL", "Business Central", "Power BI", "Azure", "SQL Server", "REST APIs"],
    icon: "⚙️",
  },
  {
    id: "integration",
    title: "System Integration",
    shortDesc:
      "Connect your existing tools and platforms into a unified, efficient ecosystem.",
    description:
      "We bridge the gap between your systems. Whether you need to connect your ERP with your CRM, sync inventory across platforms, or automate data flows between applications, our integration solutions eliminate silos and boost efficiency.",
    features: [
      "API integration & middleware",
      "ERP-CRM connectivity",
      "Real-time data synchronization",
      "Legacy system modernization",
      "Cloud migration",
      "Custom connectors",
    ],
    techStack: ["REST APIs", "GraphQL", "Azure Service Bus", "MuleSoft", "Zapier", "Power Automate"],
    icon: "🔗",
  },
];

export const CASE_STUDIES = [
  {
    id: "scango-wms",
    title: "ScanGo WMS",
    category: "bc",
    clientType: "Mid-Market Distribution",
    timeline: "4 months",
    challenge:
      "A mid-market distributor was struggling with manual warehouse operations, leading to 15% picking errors, slow fulfillment times, and zero real-time visibility into inventory levels. Existing Business Central modules couldn't handle their complex multi-location warehouse needs.",
    solution:
      "We built ScanGo — a custom WMS extension for Business Central that integrates barcode scanning, real-time inventory tracking, and intelligent picking optimization. The system uses mobile devices for warehouse floor operations, with dashboards for management visibility.",
    results: [
      { metric: "Picking Accuracy", before: "85%", after: "99.5%", improvement: "+17%" },
      { metric: "Picking Time", before: "12 min/order", after: "4 min/order", improvement: "67% faster" },
      { metric: "Operational Visibility", before: "Daily batch reports", after: "Real-time dashboards", improvement: "100% faster" },
      { metric: "Labor Productivity", before: "Baseline", after: "+40% throughput", improvement: "+40%" },
    ],
    techStack: ["Business Central", "AL", "Barcode Scanning", "Azure", "Power BI"],
    testimonial: {
      quote: "ScanGo transformed our warehouse operations. We went from guessing inventory levels to knowing exactly where everything is, in real time.",
      author: "Operations Director",
      company: "Mid-Market Distribution Co.",
    },
  },
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    category: "web",
    clientType: "D2C Retailer",
    timeline: "3 months",
    challenge:
      "A growing D2C brand was stuck on a limiting Shopify template that couldn't handle their complex product configurations, custom pricing rules, or loyalty program requirements. Migration seemed impossible without disrupting revenue.",
    solution:
      "We built a custom Next.js storefront with headless CMS integration, custom product configurator, and a loyalty engine that syncs with their existing Business Central ERP for real-time inventory and pricing.",
    results: [
      { metric: "Page Load Speed", before: "4.2s", after: "0.8s", improvement: "81% faster" },
      { metric: "Conversion Rate", before: "1.8%", after: "3.6%", improvement: "+100%" },
      { metric: "Average Order Value", before: "$45", after: "$62", improvement: "+38%" },
      { metric: "Mobile Revenue", before: "30%", after: "55%", improvement: "+83%" },
    ],
    techStack: ["Next.js", "React", "Headless CMS", "Stripe", "Business Central"],
    testimonial: {
      quote: "The new platform handles our complexity beautifully. Our conversion rate doubled in the first quarter alone.",
      author: "Head of Digital",
      company: "D2C Retail Brand",
    },
  },
  {
    id: "field-service-app",
    title: "Field Service App",
    category: "mobile",
    clientType: "HVAC Services Company",
    timeline: "5 months",
    challenge:
      "An HVAC services company managed field technicians through paper forms and phone calls. Scheduling was chaotic, job tracking was manual, and customer communication was inconsistent. They needed a unified mobile solution.",
    solution:
      "We developed a React Native mobile app for field technicians with offline-first architecture, real-time job updates, digital forms, photo documentation, and automated customer notifications. The app syncs with their Business Central ERP for billing and inventory.",
    results: [
      { metric: "Job Completion Rate", before: "72%", after: "94%", improvement: "+31%" },
      { metric: "Paper Usage", before: "500+ sheets/day", after: "Zero paper", improvement: "100% reduction" },
      { metric: "Customer Satisfaction", before: "3.2/5", after: "4.7/5", improvement: "+47%" },
      { metric: "First-Time Fix Rate", before: "60%", after: "85%", improvement: "+42%" },
    ],
    techStack: ["React Native", "Node.js", "Business Central", "Azure", "Offline-First"],
    testimonial: {
      quote: "Our technicians love the app. It's like going from a flip phone to a smartphone — everything just works.",
      author: "VP of Operations",
      company: "Regional HVAC Services",
    },
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Vaskoi delivered exactly what we needed — a custom BC extension that automated our entire procurement workflow. What used to take hours now takes minutes.",
    author: "Finance Manager",
    company: "Manufacturing Firm",
    rating: 5,
  },
  {
    quote:
      "Their mobile app for our field team reduced our paperwork by 95% and improved our customer satisfaction scores significantly.",
    author: "Operations Director",
    company: "HVAC Services Co.",
    rating: 5,
  },
  {
    quote:
      "The e-commerce platform they built handles our complex pricing and product rules flawlessly. Conversion rates doubled within the first quarter.",
    author: "Head of Digital",
    company: "D2C Retail Brand",
    rating: 5,
  },
];

export const STATS = [
  { value: "50+", label: "Projects Delivered" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "90+", label: "Days Avg. ROI" },
  { value: "15+", label: "Active Clients" },
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discover",
    description:
      "We start by understanding your business, challenges, and goals. Through workshops and discovery sessions, we map out the exact requirements and success criteria for your project.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "Using agile methodology, we develop your solution in iterative sprints. You get visibility at every stage, with regular demos and the ability to provide feedback throughout the build process.",
  },
  {
    number: "03",
    title: "Scale",
    description:
      "After launch, we don't disappear. We provide ongoing support, monitoring, and optimization to ensure your solution grows with your business and continues delivering value.",
  },
];

export const SCANGO_FEATURES = [
  {
    title: "Real-Time Inventory Tracking",
    description:
      "Know exactly what you have, where it is, and when it moves. Barcode scanning provides instant updates across all warehouse locations.",
  },
  {
    title: "Intelligent Picking Optimization",
    description:
      "AI-powered pick path optimization reduces travel time by up to 60%. Wave picking, zone picking, and batch picking modes adapt to your operation.",
  },
  {
    title: "Mobile-First Warehouse Floor",
    description:
      "Technicians use mobile devices for scanning, put-away, cycle counts, and transfers. Works offline with automatic sync when connectivity returns.",
  },
  {
    title: "Business Central Integration",
    description:
      "Seamless, bi-directional sync with Dynamics 365 Business Central. No double entry, no data silos — everything stays in sync automatically.",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Real-time dashboards and Power BI reports give management complete visibility into warehouse KPIs, productivity, and bottlenecks.",
  },
  {
    title: "Multi-Location Support",
    description:
      "Manage multiple warehouses from a single interface. Transfer stock between locations, manage zone-based inventory, and consolidate reporting.",
  },
];

export const SCANGO_PRICING = {
  price: "$20",
  period: "per month",
  perUnit: "per license",
  minimum: "5 licenses minimum",
  implementationFee: "$2,000 – $5,000",
  included: [
    "Real-time inventory tracking",
    "Barcode scanning support",
    "Mobile warehouse floor app",
    "Business Central integration",
    "Analytics dashboard",
    "Email support",
    "Monthly feature updates",
    "Up to 3 user training sessions",
  ],
};

export const PRICING_PLANS = [
  {
    name: "Startup MVP",
    price: "$5k",
    range: " – $15k",
    description: "Perfect for startups building their first product.",
    features: [
      "Single-platform app (web or mobile)",
      "Up to 5 core features",
      "Basic API integration",
      "UI/UX design",
      "30-day post-launch support",
      "Source code ownership",
    ],
    popular: false,
  },
  {
    name: "Scaling Business",
    price: "$15k",
    range: " – $50k",
    description: "For growing businesses with complex requirements.",
    features: [
      "Web + mobile applications",
      "Advanced API integrations",
      "Business Central customization",
      "Custom database architecture",
      "CI/CD pipeline setup",
      "90-day post-launch support",
      "Priority support channel",
      "Monthly strategy calls",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$50k",
    range: "+",
    description: "Full-scale solutions for large organizations.",
    features: [
      "Multi-platform applications",
      "Enterprise system integrations",
      "Full BC customization suite",
      "Dedicated project manager",
      "Custom SLA & support terms",
      "12-month maintenance included",
      "Architecture reviews",
      "Scalability planning",
    ],
    popular: false,
  },
];

export const ABOUT_VALUES = [
  {
    title: "Problem Solvers First",
    description:
      "We don't just write code — we solve business problems. Every line of code we write is tied to a real-world outcome for our clients.",
    icon: "💡",
  },
  {
    title: "Radical Transparency",
    description:
      "No black boxes. We share our progress, challenges, and decisions openly. You always know where your project stands.",
    icon: "🔍",
  },
  {
    title: "Built to Last",
    description:
      "We build solutions that scale with your business. Clean architecture, thorough documentation, and maintainable code are non-negotiable.",
    icon: "🏗️",
  },
  {
    title: "Partners, Not Vendors",
    description:
      "We invest in understanding your business deeply. Our success is measured by your outcomes, not our billable hours.",
    icon: "🤝",
  },
];

export const TEAM_MEMBERS = [
  {
    name: "Shubam Padha",
    title: "Founder & Lead Developer",
    bio: "Full-stack developer with deep expertise in Business Central, web applications, and mobile development. Passionate about building solutions that make businesses more efficient.",
  },
];

export const FAQ_ITEMS = [
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on complexity. A simple web app or MVP typically takes 4-8 weeks. Medium complexity projects like custom BC extensions or mobile apps take 2-4 months. Enterprise-scale solutions may take 4-6 months. We provide detailed timelines during our discovery phase.",
  },
  {
    question: "Do you work with startups or only established businesses?",
    answer:
      "We work with both. Our Startup MVP package is designed specifically for early-stage companies building their first product. For established businesses, we handle everything from ERP customization to full-stack platform development.",
  },
  {
    question: "What is ScanGo and who is it for?",
    answer:
      "ScanGo is our warehouse management system built as an extension for Microsoft Dynamics 365 Business Central. It's designed for distribution, manufacturing, and logistics companies that need real-time inventory visibility, barcode scanning, and optimized warehouse operations.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Absolutely. We offer post-launch support packages that include bug fixes, performance monitoring, feature enhancements, and technical consultation. Most clients transition to a retainer for ongoing development and support.",
  },
  {
    question: "Can you work with our existing Business Central setup?",
    answer:
      "Yes. We specialize in extending and customizing existing Business Central implementations. We can add custom extensions, automate workflows, build reports, and integrate third-party systems — all without disrupting your current operations.",
  },
  {
    question: "How do you handle project communication?",
    answer:
      "We use agile methodology with regular sprint demos, Slack/Teams channels for daily communication, and weekly status calls. You'll have full visibility into progress, blockers, and decisions throughout the project.",
  },
];

export const SOCIAL_LINKS = {
  github: "https://github.com/Padha06",
  linkedin: "#",
  twitter: "#",
};
