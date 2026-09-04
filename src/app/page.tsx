"use client";

import Script from 'next/script';

export default function Home() {
  return (
    <>
      <Script id="vaskoi-logic" strategy="lazyOnload">
        {`
          
  // Preloader Logic
  const steps = [
    { percent: 18, text: "ESTABLISHING SECURE PROTOCOL...", log: "> HANDSHAKE: VASKOI_CORE_TLS ACTIVE" },
    { percent: 45, text: "LOADING DYNAMICS 365 BC ARCHITECTURE...", log: "> ATTACHING AL EXTENSION REPOSITORY & ODAV4" },
    { percent: 78, text: "OPTIMIZING ZERO-LATENCY RUNTIME ENGINES...", log: "> WMS SCANNER DRIVERS MOUNTED [SUB-50MS SLA]" },
    { percent: 100, text: "SYSTEM STATUS: NOMINAL // ALL SYSTEMS GO", log: "> TELEMETRY VERIFIED: DISPERSING CURTAIN" }
  ];

  let preloaderInterval = null;

  function runPreloader() {
    const preloader = document.getElementById('vaskoi-preloader');
    const percentEl = document.getElementById('preloader-percent');
    const barEl = document.getElementById('preloader-bar');
    const stepEl = document.getElementById('preloader-step-text');
    const log1 = document.getElementById('preloader-log-1');
    const log2 = document.getElementById('preloader-log-2');
    const log3 = document.getElementById('preloader-log-3');

    if (!preloader) return;

    // Reset styles
    preloader.style.opacity = '1';
    preloader.style.pointerEvents = 'auto';
    preloader.style.transform = 'scale(1)';
    preloader.style.filter = 'blur(0px)';
    
    let currentPercent = 0;
    let stepIndex = 0;
    if (preloaderInterval) clearInterval(preloaderInterval);

    preloaderInterval = setInterval(() => {
      // Non-linear pacing for realistic tech feel
      const increment = Math.floor(Math.random() * 6) + 2;
      currentPercent += increment;

      if (currentPercent >= 100) {
        currentPercent = 100;
        clearInterval(preloaderInterval);
      }

      // Update percent and bar width
      if (percentEl) percentEl.textContent = currentPercent < 10 ? '0' + currentPercent : currentPercent;
      if (barEl) barEl.style.width = currentPercent + '%';

      // Update text milestone steps
      if (currentPercent > 15 && currentPercent <= 45 && stepIndex === 0) {
        stepIndex = 1;
        stepEl.textContent = steps[1].text;
        log3.textContent = log2.textContent;
        log2.textContent = log1.textContent;
        log1.textContent = steps[1].log;
      } else if (currentPercent > 45 && currentPercent <= 80 && stepIndex === 1) {
        stepIndex = 2;
        stepEl.textContent = steps[2].text;
        log3.textContent = log2.textContent;
        log2.textContent = log1.textContent;
        log1.textContent = steps[2].log;
      } else if (currentPercent >= 95 && stepIndex === 2) {
        stepIndex = 3;
        stepEl.textContent = steps[3].text;
        log3.textContent = log2.textContent;
        log2.textContent = log1.textContent;
        log1.textContent = steps[3].log;
      }

      // Completed sequence
      if (currentPercent >= 100) {
        setTimeout(() => {
          preloader.style.opacity = '0';
          preloader.style.transform = 'scale(1.04)';
          preloader.style.filter = 'blur(10px)';
          preloader.style.pointerEvents = 'none';
        }, 320);
      }
    }, 38);
  }

  function skipPreloader() {
    if (preloaderInterval) clearInterval(preloaderInterval);
    const preloader = document.getElementById('vaskoi-preloader');
    if (preloader) {
      preloader.style.opacity = '0';
      preloader.style.transform = 'scale(1.04)';
      preloader.style.filter = 'blur(10px)';
      preloader.style.pointerEvents = 'none';
    }
  }

  function replayPreloader() {
    runPreloader();
  }

  // Start sequence on page load
  window.addEventListener('DOMContentLoaded', () => {
    runPreloader();
  });

  // Spotlight Glow Interaction for Bento Cards
  document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.bento-card');
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.background = \`radial-gradient(400px circle at \${x}px \${y}px, rgba(255, 42, 27, 0.08), #0E0E12 80%)\`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.background = '';
      });
    });
  });

        `}
      </Script>
      

<div className="fixed inset-0 z-[100] bg-[#08080A] flex flex-col items-center justify-center text-white overflow-hidden select-none transition-all duration-700 ease-out" id="vaskoi-preloader">

<div className="absolute inset-0 tech-grid-pattern pointer-events-none opacity-60"></div>

<div className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,42,27,0.18)_0%,rgba(0,0,0,0)_70%)] glow-pulse pointer-events-none"></div>

<div className="absolute inset-0 terminal-scanline pointer-events-none opacity-40"></div>

<div className="absolute top-6 left-6 right-6 flex items-center justify-between text-text-tertiary font-code-inline text-body-sm z-10 border-b border-border-subtle/50 pb-3">
<div className="flex items-center gap-3">
<span className="inline-block w-2 h-2 bg-border-interactive animate-ping"></span>
<span className="tracking-widest uppercase text-text-secondary">SYSTEM_BOOT // INITIALIZATION_SEQUENCE</span>
</div>
<div className="hidden sm:flex items-center gap-4 text-text-tertiary">
<span>NODE: VASKOI_PROD_HOST</span>
<span>SECURITY: ENCRYPTED_TLS_1.3</span>
<span className="text-tertiary">KERNEL: ACTIVE</span>
</div>
</div>

<div className="relative z-10 flex flex-col items-center max-w-xl w-full px-6">

<div className="relative w-28 h-28 mb-8 flex items-center justify-center">

<div className="absolute inset-0 border border-border-subtle rounded-none animate-[spin_10s_linear_infinite]"></div>
<div className="absolute inset-1 border-t-2 border-r-2 border-border-interactive/80 rounded-none animate-[spin_5s_linear_infinite]"></div>
<div className="absolute inset-3 border-b border-l border-tertiary/70 rounded-none animate-[spin_7s_linear_infinite_reverse]"></div>

<div className="relative flex flex-col items-center justify-center bg-surface-base px-3 py-2 border border-border-subtle shadow-[0_0_25px_rgba(255,42,27,0.25)]">
<span className="font-headline-sm text-headline-sm font-bold tracking-tight text-white">VASKOI</span>
<span className="font-code-inline text-[9px] text-border-interactive tracking-widest">{"// ARCH"}</span>
</div>

<span className="absolute -top-1 -left-1 text-[10px] text-text-tertiary font-code-inline">+</span>
<span className="absolute -top-1 -right-1 text-[10px] text-text-tertiary font-code-inline">+</span>
<span className="absolute -bottom-1 -left-1 text-[10px] text-text-tertiary font-code-inline">+</span>
<span className="absolute -bottom-1 -right-1 text-[10px] text-text-tertiary font-code-inline">+</span>
</div>

<div className="w-full flex items-baseline justify-between mb-3 px-1">
<div className="flex items-center gap-2 font-code-inline text-body-sm text-text-secondary">
<span className="text-border-interactive font-bold animate-pulse">&gt;</span>
<span className="text-text-primary tracking-wider" id="preloader-step-text">ESTABLISHING SECURE PROTOCOL...</span>
</div>
<div className="flex items-baseline">
<span className="font-headline-lg text-headline-lg font-bold text-text-primary tracking-tighter" id="preloader-percent">00</span>
<span className="font-code-inline text-sm text-border-interactive font-bold ml-0.5">%</span>
</div>
</div>

<div className="w-full h-1.5 bg-surface-elevated border border-border-subtle relative overflow-hidden mb-4 p-[1px]">
<div className="h-full bg-gradient-to-r from-border-interactive via-infrared-bright to-white transition-all duration-100 ease-out relative" id="preloader-bar" style="width: 0%;">

<div className="absolute top-0 right-0 h-full w-2 bg-white shadow-[0_0_12px_#ff2a1b]"></div>
</div>
</div>

<div className="w-full bg-surface-base/80 border border-border-subtle/80 p-3.5 font-code-inline text-[11px] leading-relaxed text-text-tertiary flex flex-col gap-1 backdrop-blur-md">
<div className="flex items-center justify-between text-text-secondary">
<span className="text-text-primary flex items-center gap-1.5">
<span className="w-1.5 h-1.5 bg-border-interactive inline-block"></span>
          CONSOLE LOG
        </span>
<span className="text-tertiary" id="preloader-latency">PING: 14ms</span>
</div>
<div className="text-text-secondary truncate" id="preloader-log-1">&gt; INITIALIZING VASKOI ENGINE CLUSTERS...</div>
<div className="text-text-tertiary truncate" id="preloader-log-2">&gt; CHECKING DEPENDENCY TREES: NEXTJS 14, DYNAMICS 365 BC</div>
<div className="text-text-tertiary truncate" id="preloader-log-3">&gt; MOUNTING HIGH-THROUGHPUT GRAPHQL &amp; REDIS PIPELINE</div>
</div>
</div>

<div className="absolute bottom-6 left-6 right-6 flex items-center justify-between font-code-inline text-body-sm text-text-tertiary z-10 border-t border-border-subtle/50 pt-3">
<div className="flex items-center gap-2">
<span className="text-border-interactive">[SYS]</span>
<span>INITIALIZING INDUSTRIAL RIG // SHUBAM PADHA</span>
</div>
<button className="px-2.5 py-1 bg-surface-elevated border border-border-subtle hover:border-border-interactive hover:text-white text-text-secondary transition-colors text-xs font-label-caps uppercase tracking-wider flex items-center gap-1" onclick="skipPreloader()">
<span>SKIP_INIT</span>
<span className="material-symbols-outlined text-[14px]">fast_forward</span>
</button>
</div>
</div>
<header className="fixed top-0 left-0 w-full z-50 bg-surface-deep/90 backdrop-blur-xl border-b border-border-subtle shadow-[0_1px_8px_rgba(0,0,0,0.4)]"><div className="h-16 max-w-[1360px] mx-auto px-gutter-mobile lg:px-gutter-desktop flex items-center justify-between gap-space-md"><div className="flex items-center gap-space-lg"><a className="flex items-center gap-space-sm group" data-path="home" href="#"><span className="font-headline-sm text-headline-sm uppercase tracking-tight text-text-primary group-hover:text-primary transition-colors">VASKOI</span><span className="font-code-inline text-code-inline text-text-tertiary">{"//DEV"}</span></a><div className="hidden sm:flex items-center gap-space-xs px-space-sm py-space-2xs bg-surface-base border border-border-subtle"><span className="w-2 h-2 bg-tertiary animate-pulse"></span><span className="font-label-caps text-label-caps uppercase text-text-secondary">Available for Q2 Projects</span></div></div><nav className="hidden lg:flex items-center gap-space-xl" data-active-classes="text-primary border-b border-border-interactive"><a className="font-label-caps text-label-caps uppercase text-on-surface-variant hover:text-on-surface transition-colors py-space-xs" data-path="work" href="#">Work</a><a className="font-label-caps text-label-caps uppercase text-on-surface-variant hover:text-on-surface transition-colors py-space-xs" data-path="services" href="#">Services</a><a className="font-label-caps text-label-caps uppercase text-on-surface-variant hover:text-on-surface transition-colors py-space-xs" data-path="process" href="#">Process</a><a className="font-label-caps text-label-caps uppercase text-on-surface-variant hover:text-on-surface transition-colors py-space-xs" data-path="stack" href="#">Stack</a><a className="font-label-caps text-label-caps uppercase text-on-surface-variant hover:text-on-surface transition-colors py-space-xs" data-path="contact" href="#">Contact</a></nav><div className="flex items-center gap-space-md"><button className="inline-flex items-center gap-space-xs px-space-sm py-space-2xs bg-surface-base border border-border-subtle text-text-secondary hover:text-text-primary hover:border-border-interactive font-code-inline text-body-sm transition-all" id="replay-boot-btn" onclick="replayPreloader()" title="Replay System Boot Animation"><span className="w-1.5 h-1.5 bg-border-interactive animate-pulse"></span><span className="hidden sm:inline">[ REPLAY LOADER ]</span><span className="material-symbols-outlined text-[14px]">replay</span></button><a className="hidden md:inline-flex items-center justify-center px-space-md py-space-sm bg-border-interactive text-text-primary font-label-caps text-label-caps uppercase tracking-wider hover:bg-infrared-bright transition-all" data-path="contact" href="#"><span className="mr-space-xs">Start a Project</span><span className="material-symbols-outlined text-[14px]">arrow_forward</span></a><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></div></header><main className="w-full pt-16 bg-surface-deep"><div className="flex flex-col w-full selection:bg-border-interactive selection:text-white overflow-hidden">

<section className="relative w-full min-h-[92vh] flex flex-col justify-between overflow-hidden px-gutter-mobile lg:px-gutter-desktop pt-space-xl pb-space-2xl bg-surface-deep">


<div className="absolute inset-0 bg-gradient-to-b from-surface-deep/80 via-transparent to-surface-deep pointer-events-none"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(8,8,10,0.92)_100%)] pointer-events-none"></div>

<div className="relative z-10 max-w-[1360px] w-full mx-auto flex flex-wrap items-center justify-between gap-space-sm pt-space-sm">
<div className="inline-flex items-center gap-space-sm px-space-md py-space-xs bg-surface-base/90 border border-border-subtle backdrop-blur-md">
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-border-interactive opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-border-interactive"></span>
</span>
<span className="font-label-caps text-label-caps uppercase tracking-widest text-text-primary">AVAILABLE FOR NEW CLIENT PROJECTS</span>
<span className="text-text-tertiary font-code-inline text-body-sm hidden sm:inline">| Q2-Q3 PIPELINE</span>
</div>
<div className="hidden md:flex items-center gap-space-md font-code-inline text-body-sm text-text-secondary">
<span>LOC: 32.7266° N, 74.8570° E</span>
<span className="text-border-interactive animate-pulse">●</span>
<span>LATENCY: 18ms</span>
</div>
</div>

<div className="relative z-10 max-w-[1360px] w-full mx-auto my-auto py-space-3xl flex flex-col items-start justify-center">
<div className="flex items-center gap-space-xs mb-space-md text-text-secondary font-code-inline text-body-sm tracking-widest">
<span className="text-border-interactive">[</span><span>00_SYS_INIT // VASKOI.IN</span><span className="text-border-interactive">]</span>
</div>
<h1 className="font-display text-display text-text-primary max-w-5xl tracking-tight leading-[1.05] mb-space-lg">
        You have the idea. <br className="hidden sm:inline"/>
<span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-border-interactive via-infrared-bright to-white animate-pulse">
          I build the system
        </span> 
        behind it.
      </h1>
<p className="font-body-lg text-body-lg text-text-secondary max-w-2xl mb-space-2xl leading-relaxed">
        Websites. Apps. ERP. Integrations. Architecting robust enterprise solutions, low-latency mobile platforms, and high-conversion digital ecosystems for visionary teams.
      </p>

<div className="flex flex-wrap items-center gap-space-md w-full sm:w-auto">
<a className="group relative inline-flex items-center justify-center px-space-xl py-space-md bg-border-interactive text-text-primary font-label-caps text-label-caps uppercase tracking-wider overflow-hidden transition-all duration-300 hover:bg-infrared-bright hover:-translate-y-1 shadow-[0_0_24px_rgba(255,42,27,0.35)]" href="#contact-terminal">

<span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></span>
<span className="relative z-10 mr-space-sm">Start a Project</span>
<span className="relative z-10 material-symbols-outlined text-[16px] transition-transform duration-300 group-hover:translate-x-1">terminal</span>
</a>
<a className="group relative inline-flex items-center justify-center px-space-xl py-space-md bg-surface-base border border-border-subtle text-text-primary font-label-caps text-label-caps uppercase tracking-wider transition-all duration-300 hover:border-border-interactive hover:text-white hover:-translate-y-1" href="#case-studies">
<span className="mr-space-sm">View Case Studies</span>
<span className="material-symbols-outlined text-[16px] text-text-secondary group-hover:text-border-interactive transition-colors">arrow_outward</span>
</a>
<div className="hidden xl:flex items-center gap-space-xs font-code-inline text-body-sm text-text-tertiary ml-space-md">
<span className="w-1.5 h-1.5 bg-tertiary"></span>
<span>DISCOVERY → ARCHITECTURE → DEPLOYMENT</span>
</div>
</div>
</div>

<div className="relative z-10 max-w-[1360px] w-full mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border-subtle border border-border-subtle">
<div className="bg-surface-base/95 p-space-lg flex flex-col justify-between transition-colors duration-200 hover:bg-surface-elevated group">
<span className="font-code-inline text-body-sm text-text-tertiary group-hover:text-border-interactive transition-colors">{"// PROD_RELEASE"}</span>
<div className="my-space-xs">
<span className="font-counter-num text-counter-num text-text-primary group-hover:text-white">20</span>
<span className="text-border-interactive font-counter-num text-counter-num">+</span>
</div>
<p className="font-body-sm text-body-sm text-text-secondary uppercase tracking-wider">Enterprise &amp; Web Systems</p>
</div>
<div className="bg-surface-base/95 p-space-lg flex flex-col justify-between transition-colors duration-200 hover:bg-surface-elevated group">
<span className="font-code-inline text-body-sm text-text-tertiary group-hover:text-border-interactive transition-colors">{"// ARCH_TENURE"}</span>
<div className="my-space-xs">
<span className="font-counter-num text-counter-num text-text-primary group-hover:text-white">03</span>
<span className="text-tertiary font-counter-num text-counter-num">+</span>
</div>
<p className="font-body-sm text-body-sm text-text-secondary uppercase tracking-wider">Years Applied Mastery</p>
</div>
<div className="bg-surface-base/95 p-space-lg flex flex-col justify-between transition-colors duration-200 hover:bg-surface-elevated group">
<span className="font-code-inline text-body-sm text-text-tertiary group-hover:text-border-interactive transition-colors">{"// EXEC_INTEGRITY"}</span>
<div className="my-space-xs">
<span className="font-counter-num text-counter-num text-text-primary group-hover:text-white">100</span>
<span className="text-border-interactive font-counter-num text-counter-num">%</span>
</div>
<p className="font-body-sm text-body-sm text-text-secondary uppercase tracking-wider">Client Satisfaction SLA</p>
</div>
<div className="bg-surface-base/95 p-space-lg flex flex-col justify-between transition-colors duration-200 hover:bg-surface-elevated group">
<span className="font-code-inline text-body-sm text-text-tertiary group-hover:text-tertiary transition-colors">{"// SYSTEM_UPTIME"}</span>
<div className="my-space-xs">
<span className="font-counter-num text-counter-num text-text-primary group-hover:text-white">99.9</span>
<span className="text-tertiary font-counter-num text-counter-num">%</span>
</div>
<p className="font-body-sm text-body-sm text-text-secondary uppercase tracking-wider">High Availability Standard</p>
</div>
</div>
</div>
</section>

<section className="relative w-full max-w-[1360px] mx-auto px-gutter-mobile lg:px-gutter-desktop py-space-5xl" id="case-studies">

<div className="flex flex-col md:flex-row md:items-end justify-between border-b border-border-subtle pb-space-lg mb-space-2xl gap-space-md">
<div>
<div className="flex items-center gap-space-xs font-code-inline text-body-sm text-border-interactive mb-space-xs">
<span>{"// 01_PORTFOLIO_REGISTRY"}</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-text-primary">
          From websites to enterprise systems.
        </h2>
</div>
<p className="font-body-md text-body-md text-text-secondary max-w-md">
        Proven delivery across complex e-commerce, cloud operation dashboards, warehouse scanners, and core ERP customization.
      </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg" id="spotlight-grid">

<div className="bento-card lg:col-span-7 bg-surface-base border border-border-subtle group hover:border-border-interactive transition-all duration-300 flex flex-col justify-between overflow-hidden">
<div className="p-space-lg border-b border-border-subtle flex items-center justify-between bg-surface-deep/40">
<div className="flex items-center gap-space-sm">
<span className="font-code-inline text-body-sm text-text-tertiary">#CASE_01</span>
<span className="font-label-caps text-label-caps uppercase px-space-xs py-space-2xs bg-surface-elevated text-text-primary border border-border-subtle">Retail Tech</span>
</div>
<div className="flex items-center gap-space-xs font-code-inline text-body-sm text-text-secondary group-hover:text-border-interactive transition-colors">
<span>EXPLORE</span>
<span className="material-symbols-outlined text-[16px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">arrow_outward</span>
</div>
</div>
<div className="p-space-xl">
<h3 className="font-headline-md text-headline-md text-text-primary group-hover:text-white mb-space-sm transition-colors">
            High-Conversion E-Commerce Architecture for Modern Retail
          </h3>
<p className="font-body-md text-body-md text-text-secondary mb-space-lg">
            Architected a headless multi-currency catalog with sub-100ms server-side rendering, integrated real-time inventory caching, and friction-free payment settlement.
          </p>
<div className="flex flex-wrap gap-space-xs mb-space-xl">
<span className="font-code-inline text-body-sm px-space-sm py-space-2xs bg-surface-elevated border border-border-subtle text-text-secondary group-hover:border-border-subtle">Next.js 14</span>
<span className="font-code-inline text-body-sm px-space-sm py-space-2xs bg-surface-elevated border border-border-subtle text-text-secondary">React Server Components</span>
<span className="font-code-inline text-body-sm px-space-sm py-space-2xs bg-surface-elevated border border-border-subtle text-text-secondary">Node.js</span>
<span className="font-code-inline text-body-sm px-space-sm py-space-2xs bg-surface-elevated border border-border-subtle text-text-secondary">Stripe / REST</span>
</div>
</div>

<div className="grid grid-cols-3 border-t border-border-subtle bg-surface-deep/70">
<div className="p-space-md border-r border-border-subtle">
<div className="font-headline-sm text-headline-sm text-border-interactive font-bold">+184%</div>
<div className="font-code-inline text-body-sm text-text-tertiary">Checkout Speed</div>
</div>
<div className="p-space-md border-r border-border-subtle">
<div className="font-headline-sm text-headline-sm text-text-primary font-bold">99.98%</div>
<div className="font-code-inline text-body-sm text-text-tertiary">Payment SLA</div>
</div>
<div className="p-space-md">
<div className="font-headline-sm text-headline-sm text-tertiary font-bold">42k+</div>
<div className="font-code-inline text-body-sm text-text-tertiary">Active Monthly SKU</div>
</div>
</div>
</div>

<div className="bento-card lg:col-span-5 bg-surface-base border border-border-subtle group hover:border-border-interactive transition-all duration-300 flex flex-col justify-between overflow-hidden">
<div className="p-space-lg border-b border-border-subtle flex items-center justify-between bg-surface-deep/40">
<div className="flex items-center gap-space-sm">
<span className="font-code-inline text-body-sm text-text-tertiary">#CASE_02</span>
<span className="font-label-caps text-label-caps uppercase px-space-xs py-space-2xs bg-surface-elevated text-text-primary border border-border-subtle">Internal Tools</span>
</div>
<div className="flex items-center gap-space-xs font-code-inline text-body-sm text-text-secondary group-hover:text-border-interactive transition-colors">
<span>EXPLORE</span>
<span className="material-symbols-outlined text-[16px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">arrow_outward</span>
</div>
</div>
<div className="p-space-xl">
<h3 className="font-headline-md text-headline-md text-text-primary group-hover:text-white mb-space-sm transition-colors">
            Operations &amp; Telemetry Command Platform
          </h3>
<p className="font-body-md text-body-md text-text-secondary mb-space-lg">
            Unified mission-critical resource allocation, contract lifecycle, and client billings into a single low-latency cockpit.
          </p>
<div className="flex flex-wrap gap-space-xs mb-space-lg">
<span className="font-code-inline text-body-sm px-space-sm py-space-2xs bg-surface-elevated border border-border-subtle text-text-secondary">React</span>
<span className="font-code-inline text-body-sm px-space-sm py-space-2xs bg-surface-elevated border border-border-subtle text-text-secondary">TypeScript</span>
<span className="font-code-inline text-body-sm px-space-sm py-space-2xs bg-surface-elevated border border-border-subtle text-text-secondary">PostgreSQL</span>
</div>
</div>
<div className="p-space-lg border-t border-border-subtle bg-surface-deep/70 flex items-center justify-between">
<span className="font-code-inline text-body-sm text-text-tertiary">AUDIT STATUS: FULLY CERTIFIED</span>
<span className="font-code-inline text-body-sm text-tertiary">ZERO-DOWNTIME SYNC</span>
</div>
</div>

<div className="bento-card lg:col-span-5 bg-surface-base border border-border-subtle group hover:border-border-interactive transition-all duration-300 flex flex-col justify-between overflow-hidden">
<div className="p-space-lg border-b border-border-subtle flex items-center justify-between bg-surface-deep/40">
<div className="flex items-center gap-space-sm">
<span className="font-code-inline text-body-sm text-text-tertiary">#CASE_03</span>
<span className="font-label-caps text-label-caps uppercase px-space-xs py-space-2xs bg-surface-elevated text-text-primary border border-border-subtle">Mobile Systems</span>
</div>
<div className="flex items-center gap-space-xs font-code-inline text-body-sm text-text-secondary group-hover:text-border-interactive transition-colors">
<span>EXPLORE</span>
<span className="material-symbols-outlined text-[16px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">arrow_outward</span>
</div>
</div>
<div className="p-space-xl">
<h3 className="font-headline-md text-headline-md text-text-primary group-hover:text-white mb-space-sm transition-colors">
            Field Workforce &amp; Offline Sync Engine
          </h3>
<p className="font-body-md text-body-md text-text-secondary mb-space-lg">
            Engineered an offline-first mobile application capable of bidirectional queuing and conflict resolution under zero-connectivity field conditions.
          </p>
<div className="flex flex-wrap gap-space-xs mb-space-lg">
<span className="font-code-inline text-body-sm px-space-sm py-space-2xs bg-surface-elevated border border-border-subtle text-text-secondary">React Native</span>
<span className="font-code-inline text-body-sm px-space-sm py-space-2xs bg-surface-elevated border border-border-subtle text-text-secondary">Android OS</span>
<span className="font-code-inline text-body-sm px-space-sm py-space-2xs bg-surface-elevated border border-border-subtle text-text-secondary">SQLite</span>
</div>
</div>
<div className="p-space-lg border-t border-border-subtle bg-surface-deep/70 flex items-center justify-between">
<span className="font-code-inline text-body-sm text-text-tertiary">OFFLINE BUFFER: 10,000 TRANSACTIONS</span>
<span className="font-code-inline text-body-sm text-border-interactive">AUTOMATIC HEALING</span>
</div>
</div>

<div className="bento-card lg:col-span-7 bg-surface-base border border-border-subtle group hover:border-border-interactive transition-all duration-300 flex flex-col justify-between overflow-hidden">
<div className="p-space-lg border-b border-border-subtle flex items-center justify-between bg-surface-deep/40">
<div className="flex items-center gap-space-sm">
<span className="font-code-inline text-body-sm text-text-tertiary">#CASE_04</span>
<span className="font-label-caps text-label-caps uppercase px-space-xs py-space-2xs bg-surface-elevated text-text-primary border border-border-subtle">Enterprise ERP</span>
</div>
<div className="flex items-center gap-space-xs font-code-inline text-body-sm text-text-secondary group-hover:text-border-interactive transition-colors">
<span>EXPLORE</span>
<span className="material-symbols-outlined text-[16px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">arrow_outward</span>
</div>
</div>
<div className="p-space-xl">
<h3 className="font-headline-md text-headline-md text-text-primary group-hover:text-white mb-space-sm transition-colors">
            Microsoft Dynamics 365 BC Custom Engineering
          </h3>
<p className="font-body-md text-body-md text-text-secondary mb-space-lg">
            Architected custom AL extensions, automated multi-stage invoice validation pipelines, and integrated low-code webhooks bridging modern SaaS with corporate ERP backbones.
          </p>
<div className="flex flex-wrap gap-space-xs mb-space-xl">
<span className="font-code-inline text-body-sm px-space-sm py-space-2xs bg-surface-elevated border border-border-subtle text-text-secondary">Dynamics 365 BC</span>
<span className="font-code-inline text-body-sm px-space-sm py-space-2xs bg-surface-elevated border border-border-subtle text-text-secondary">AL Language</span>
<span className="font-code-inline text-body-sm px-space-sm py-space-2xs bg-surface-elevated border border-border-subtle text-text-secondary">Power Automate</span>
<span className="font-code-inline text-body-sm px-space-sm py-space-2xs bg-surface-elevated border border-border-subtle text-text-secondary">OData v4</span>
</div>
</div>
<div className="grid grid-cols-2 border-t border-border-subtle bg-surface-deep/70">
<div className="p-space-md border-r border-border-subtle">
<div className="font-headline-sm text-headline-sm text-text-primary font-bold">120 hrs/mo</div>
<div className="font-code-inline text-body-sm text-text-tertiary">Saved via Automation</div>
</div>
<div className="p-space-md">
<div className="font-headline-sm text-headline-sm text-border-interactive font-bold">0.00%</div>
<div className="font-code-inline text-body-sm text-text-tertiary">Reconciliation Discrepancy</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative w-full max-w-[1360px] mx-auto px-gutter-mobile lg:px-gutter-desktop py-space-4xl">
<div className="flex flex-col md:flex-row md:items-end justify-between border-b border-border-subtle pb-space-lg mb-space-2xl gap-space-md">
<div>
<div className="flex items-center gap-space-xs font-code-inline text-body-sm text-border-interactive mb-space-xs">
<span>{"// 02_VISUAL_INTERFACE_ENGINEERING"}</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-text-primary">
          UI Craft in Action.
        </h2>
</div>
<span className="font-code-inline text-body-sm text-text-secondary">MODULAR INDUSTRIAL RIGOR // 6 ACTIVE DEPLOYMENTS</span>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">

<div className="bg-surface-base border border-border-subtle group hover:border-border-interactive transition-all duration-300 flex flex-col relative overflow-hidden">
<div className="relative h-60 w-full overflow-hidden bg-surface-deep">
<img alt="ScanGo WMS scanner system running" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida/AEtjO1XMkRmAecuOTznhX8AkA2HvYfq2OTb0JzpcXxCQvDU_e4n1LC-n4V5xXudCI1aFqUrqinFsmkUIZ3Ji_oEFnz3NypGHYyOI2GkcEeHs23K99yMl9ytOJICA_hXFndo3CsHAMxUvMsUiVUl22Q9hq1o3pLNpaKzdZieLpRvWU6O3-auFl3TA-O-P75XzeQlBaMiXoUjhwKZUCrw2a5TspCw-jZg4tpp03-HcUH4B4W7ys75wql8VCofUUw"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-base via-transparent to-transparent opacity-80"></div>
<span className="absolute top-space-sm left-space-sm px-space-sm py-space-2xs bg-border-interactive text-white font-label-caps text-label-caps uppercase tracking-wider">
            FEATURED RIG
          </span>
<span className="absolute bottom-space-sm right-space-sm font-code-inline text-body-sm text-tertiary px-space-xs py-space-2xs bg-surface-deep/90 border border-border-subtle">
            v2.4_STABLE
          </span>
</div>
<div className="p-space-lg flex-1 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-space-xs">
<span className="font-code-inline text-body-sm text-border-interactive">SYS: SCAN-GO // WMS</span>
<span className="material-symbols-outlined text-text-secondary group-hover:text-border-interactive group-hover:translate-x-1 transition-all text-[18px]">arrow_forward</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-text-primary mb-space-xs group-hover:text-white">ScanGo WMS Engine</h3>
<p className="font-body-md text-body-md text-text-secondary mb-space-md">
              Offline-first mobile warehouse execution system directly connected to Microsoft Dynamics 365 Business Central. Barcode decoders running at sub-50ms latency.
            </p>
</div>
<div className="flex items-center gap-space-xs pt-space-sm border-t border-border-subtle font-code-inline text-body-sm text-text-tertiary">
<span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
<span>RUGGED HARDWARE READY</span>
</div>
</div>
</div>

<div className="bg-surface-base border border-border-subtle group hover:border-border-interactive transition-all duration-300 flex flex-col relative overflow-hidden">
<div className="relative h-60 w-full overflow-hidden bg-surface-deep flex items-center justify-center p-space-md">

<div className="w-full h-full border border-border-subtle bg-surface-deep/90 p-space-md flex flex-col justify-between relative group-hover:border-text-secondary transition-colors">
<div className="flex items-center justify-between border-b border-border-subtle pb-space-xs font-code-inline text-body-sm text-text-secondary">
<span>BC_ANALYTICS // REALTIME</span>
<span className="text-tertiary">OK</span>
</div>
<div className="flex items-end justify-between gap-space-xs h-24 pt-space-sm">
<div className="w-full bg-border-subtle group-hover:bg-border-interactive transition-colors h-[40%]"></div>
<div className="w-full bg-border-subtle group-hover:bg-border-interactive transition-colors h-[65%]"></div>
<div className="w-full bg-border-subtle group-hover:bg-border-interactive transition-colors h-[85%]"></div>
<div className="w-full bg-border-subtle group-hover:bg-border-interactive transition-colors h-[50%]"></div>
<div className="w-full bg-border-subtle group-hover:bg-border-interactive transition-colors h-[95%]"></div>
<div className="w-full bg-border-subtle group-hover:bg-border-interactive transition-colors h-[75%]"></div>
</div>
<div className="font-code-inline text-body-sm text-text-tertiary flex justify-between">
<span>LEDGER SYNC: 100%</span>
<span>12ms DURATION</span>
</div>
</div>
</div>
<div className="p-space-lg flex-1 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-space-xs">
<span className="font-code-inline text-body-sm text-border-interactive">SYS: BC_CUSTOM_DASH</span>
<span className="material-symbols-outlined text-text-secondary group-hover:text-border-interactive group-hover:translate-x-1 transition-all text-[18px]">arrow_forward</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-text-primary mb-space-xs group-hover:text-white">Dynamics 365 BC Custom Cockpit</h3>
<p className="font-body-md text-body-md text-text-secondary mb-space-md">
              Customized role center layout with streamlined ledger summaries, real-time KPI aggregates, and customized inventory alert trees.
            </p>
</div>
<div className="flex items-center gap-space-xs pt-space-sm border-t border-border-subtle font-code-inline text-body-sm text-text-tertiary">
<span className="w-2 h-2 rounded-full bg-border-interactive animate-pulse"></span>
<span>ENTERPRISE ERP COCKPIT</span>
</div>
</div>
</div>

<div className="bg-surface-base border border-border-subtle group hover:border-border-interactive transition-all duration-300 flex flex-col relative overflow-hidden">
<div className="relative h-60 w-full overflow-hidden bg-surface-deep flex items-center justify-center p-space-md">
<div className="w-full h-full border border-border-subtle bg-surface-deep/90 p-space-md flex flex-col justify-between">
<div className="flex items-center justify-between font-code-inline text-body-sm text-text-secondary">
<span>CRYPTO_VERIFY // HASH</span>
<span className="text-border-interactive">LOCKED</span>
</div>
<div className="p-space-sm bg-surface-elevated border border-border-subtle">
<div className="font-code-inline text-body-sm text-text-primary">DOC_ID: #SIG-8921-X9</div>
<div className="font-code-inline text-body-sm text-text-tertiary">SHA256: 8f4e2...a90b1</div>
<div className="w-full bg-border-subtle h-1 mt-space-xs overflow-hidden">
<div className="bg-border-interactive h-full w-4/5 animate-pulse"></div>
</div>
</div>
<span className="font-code-inline text-body-sm text-text-secondary">STATUS: AUTOMATED POWER AUTOMATE TRIGGER</span>
</div>
</div>
<div className="p-space-lg flex-1 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-space-xs">
<span className="font-code-inline text-body-sm text-border-interactive">SYS: ESIGN_PIPELINE</span>
<span className="material-symbols-outlined text-text-secondary group-hover:text-border-interactive group-hover:translate-x-1 transition-all text-[18px]">arrow_forward</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-text-primary mb-space-xs group-hover:text-white">E-Signature Workflow Integration</h3>
<p className="font-body-md text-body-md text-text-secondary mb-space-md">
              Automated document signing engine embedding legal-grade electronic signatures into purchase requisition and vendor approval lifecycles.
            </p>
</div>
<div className="flex items-center gap-space-xs pt-space-sm border-t border-border-subtle font-code-inline text-body-sm text-text-tertiary">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
<span>SECURE REST WEBHOOKS</span>
</div>
</div>
</div>

<div className="bg-surface-base border border-border-subtle group hover:border-border-interactive transition-all duration-300 flex flex-col relative overflow-hidden">
<div className="relative h-60 w-full overflow-hidden bg-surface-deep">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Dark aesthetic cinematic portfolio website interface preview for a film and creative studio named AfterLight with bold typography high contrast lighting deep graphite and incandescent red highlights" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDNnQRrWs3KVLHz-f3BI09MPILA2N-oMm8mSNgtM2e__okCgb9VA3HNkL6Pa7ldhytge97U1fSvRRSg6ndu7R1iLM4ZfLdUIMmEb-VutCdlsW3Tyyr0JuVe5UOrWGHzMQk0VHX9i3Omk4TW-O3Ese2CuDqpstGULKbiJiLo4sZIinfzAExNQSnqSIHLpThGOA3SZBXj1hVXk_DezfmhNgZD8tfRmfWTzh7GUOHWJwF6DDwA8ndz8dr"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-base via-transparent to-transparent opacity-80"></div>
<span className="absolute top-space-sm left-space-sm px-space-sm py-space-2xs bg-surface-deep/90 border border-border-subtle font-code-inline text-body-sm text-text-primary">
            DIGITAL_SHOWCASE
          </span>
</div>
<div className="p-space-lg flex-1 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-space-xs">
<span className="font-code-inline text-body-sm text-border-interactive">SYS: AFTERLIGHT_STUDIO</span>
<span className="material-symbols-outlined text-text-secondary group-hover:text-border-interactive group-hover:translate-x-1 transition-all text-[18px]">arrow_forward</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-text-primary mb-space-xs group-hover:text-white">AfterLight Creative Studio</h3>
<p className="font-body-md text-body-md text-text-secondary mb-space-md">
              Experimental media collective web experience with smooth page transitions, video streaming cache headers, and brutalist typographic hierarchy.
            </p>
</div>
<div className="flex items-center gap-space-xs pt-space-sm border-t border-border-subtle font-code-inline text-body-sm text-text-tertiary">
<span className="w-2 h-2 rounded-full bg-text-secondary"></span>
<span>60FPS SMOOTH SCROLLING</span>
</div>
</div>
</div>

<div className="bg-surface-base border border-border-subtle group hover:border-border-interactive transition-all duration-300 flex flex-col relative overflow-hidden">
<div className="relative h-60 w-full overflow-hidden bg-surface-deep">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Modern technical customer portal interface for renovation company DAP Canada with project estimation calculators interactive blueprints sleek dark theme and crisp numeric data displays" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeAJ1lo_p6d2MTEq7wvRyqSFUdZfyspVpyuZsc28Fjyz6AADylWHdHuQFmlwGhJL2IlF9SGn4FUSk-OJwWIuKqFxU_86C95HK3ZZG8MrQYFzYm0MNlhnPyxCfzYM5Lt8MqMfyqEl_kOjaqD8Oz7iUuGUX2Lpn8MU127cmw16nBtLSJ-k60HNZxPmfsy0sg_mubi-SmP0DyN-Nn4oWJ8Dv_ly-YXbEvQTC7D-IOAxZVZxPcu3x8yrKP"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-base via-transparent to-transparent opacity-80"></div>
<span className="absolute top-space-sm left-space-sm px-space-sm py-space-2xs bg-surface-deep/90 border border-border-subtle font-code-inline text-body-sm text-text-primary">
            PORTAL_ENGINE
          </span>
</div>
<div className="p-space-lg flex-1 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-space-xs">
<span className="font-code-inline text-body-sm text-border-interactive">SYS: DAP_CANADA</span>
<span className="material-symbols-outlined text-text-secondary group-hover:text-border-interactive group-hover:translate-x-1 transition-all text-[18px]">arrow_forward</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-text-primary mb-space-xs group-hover:text-white">DAP Canada Client Portal</h3>
<p className="font-body-md text-body-md text-text-secondary mb-space-md">
              Construction and architectural renovation client terminal featuring quote generators, live milestone status tracking, and contract file management.
            </p>
</div>
<div className="flex items-center gap-space-xs pt-space-sm border-t border-border-subtle font-code-inline text-body-sm text-text-tertiary">
<span className="w-2 h-2 rounded-full bg-border-interactive"></span>
<span>ENTERPRISE ESTIMATOR ENGINE</span>
</div>
</div>
</div>

<div className="bg-surface-base border border-border-subtle group hover:border-border-interactive transition-all duration-300 flex flex-col relative overflow-hidden">
<div className="relative h-60 w-full overflow-hidden bg-surface-deep">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Computer hardware ecommerce web store interface showcasing custom PC builder component compatibility checks obsidian dark UI and neon red spec badges" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6tFj_7nEOiUtivLv_tbH7jtpMjbsHHMG2c8rRFFy0EWBCataH2G1IlYRpeZimb6Tx-Txuc4MP82z5ASA_UewGZP5SjEiDQdzurWa-V5Zvg4owY3nKZnKyiHN1AUCfQ7R_CF0QzkP4CWJ86ZpgnzimvzDrVTXUoVs6S0OwKtU5YMCQr2NoQwQv6047JAiIqhON_PfXAOK0kj_EQW04p6pAxZi5xXYnyrEVKfrSPKiHWG37DHfTK-uQ"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-base via-transparent to-transparent opacity-80"></div>
<span className="absolute top-space-sm left-space-sm px-space-sm py-space-2xs bg-surface-deep/90 border border-border-subtle font-code-inline text-body-sm text-text-primary">
            HARDWARE_STORE
          </span>
</div>
<div className="p-space-lg flex-1 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-space-xs">
<span className="font-code-inline text-body-sm text-border-interactive">SYS: ONE_STOP_COMP</span>
<span className="material-symbols-outlined text-text-secondary group-hover:text-border-interactive group-hover:translate-x-1 transition-all text-[18px]">arrow_forward</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-text-primary mb-space-xs group-hover:text-white">One Stop Computer Shop</h3>
<p className="font-body-md text-body-md text-text-secondary mb-space-md">
              Computer hardware configurator &amp; e-commerce engine with real-time socket-based component compatibility checks and high-volume checkout flow.
            </p>
</div>
<div className="flex items-center gap-space-xs pt-space-sm border-t border-border-subtle font-code-inline text-body-sm text-text-tertiary">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
<span>DYNAMIC HARDWARE BUILDER</span>
</div>
</div>
</div>
</div>
</section>

<section className="relative w-full max-w-[1360px] mx-auto px-gutter-mobile lg:px-gutter-desktop py-space-4xl">
<div className="flex flex-col md:flex-row md:items-end justify-between border-b border-border-subtle pb-space-lg mb-space-2xl gap-space-md">
<div>
<div className="flex items-center gap-space-xs font-code-inline text-body-sm text-border-interactive mb-space-xs">
<span>{"// 03_CAPABILITY_MATRIX"}</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-text-primary">
          Engineered for scale.
        </h2>
</div>
<p className="font-body-md text-body-md text-text-secondary max-w-md">
        Structured engineering services delivering zero-compromise speed, security, and enterprise longevity.
      </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border-subtle border border-border-subtle">

<div className="bg-surface-base p-space-xl flex flex-col justify-between relative group hover:bg-surface-elevated transition-colors duration-200">
<div className="absolute top-0 left-0 w-full h-[2px] bg-transparent group-hover:bg-border-interactive transition-all duration-300"></div>
<div>
<span className="font-headline-lg text-headline-lg text-text-tertiary group-hover:text-border-interactive transition-colors">01</span>
<h3 className="font-headline-sm text-headline-sm text-text-primary mt-space-md mb-space-sm">Web Systems</h3>
<p className="font-body-md text-body-md text-text-secondary mb-space-lg">
            High-conversion, ultra-fast modern web platforms built on Next.js, Nuxt, or headless micro-frontends with perfect lighthouse benchmarks.
          </p>
</div>
<ul className="space-y-space-xs font-code-inline text-body-sm text-text-secondary border-t border-border-subtle pt-space-md">
<li className="flex items-center gap-space-xs"><span className="text-border-interactive">›</span> Server-Driven UI</li>
<li className="flex items-center gap-space-xs"><span className="text-border-interactive">›</span> Headless E-Commerce</li>
<li className="flex items-center gap-space-xs"><span className="text-border-interactive">›</span> Automated Edge SEO</li>
</ul>
</div>

<div className="bg-surface-base p-space-xl flex flex-col justify-between relative group hover:bg-surface-elevated transition-colors duration-200">
<div className="absolute top-0 left-0 w-full h-[2px] bg-transparent group-hover:bg-border-interactive transition-all duration-300"></div>
<div>
<span className="font-headline-lg text-headline-lg text-text-tertiary group-hover:text-border-interactive transition-colors">02</span>
<h3 className="font-headline-sm text-headline-sm text-text-primary mt-space-md mb-space-sm">Web Applications</h3>
<p className="font-body-md text-body-md text-text-secondary mb-space-lg">
            Complex SaaS cockpits, real-time collaboration dashboards, internal operational software, and data-dense enterprise consoles.
          </p>
</div>
<ul className="space-y-space-xs font-code-inline text-body-sm text-text-secondary border-t border-border-subtle pt-space-md">
<li className="flex items-center gap-space-xs"><span className="text-border-interactive">›</span> Real-time WebSockets</li>
<li className="flex items-center gap-space-xs"><span className="text-border-interactive">›</span> Role &amp; Permission RBAC</li>
<li className="flex items-center gap-space-xs"><span className="text-border-interactive">›</span> Fault-Tolerant State</li>
</ul>
</div>

<div className="bg-surface-base p-space-xl flex flex-col justify-between relative group hover:bg-surface-elevated transition-colors duration-200">
<div className="absolute top-0 left-0 w-full h-[2px] bg-transparent group-hover:bg-border-interactive transition-all duration-300"></div>
<div>
<span className="font-headline-lg text-headline-lg text-text-tertiary group-hover:text-border-interactive transition-colors">03</span>
<h3 className="font-headline-sm text-headline-sm text-text-primary mt-space-md mb-space-sm">Mobile Applications</h3>
<p className="font-body-md text-body-md text-text-secondary mb-space-lg">
            Cross-platform React Native &amp; Android native apps. Optimized for industrial scanners, offline data synchronization, and hardware sensors.
          </p>
</div>
<ul className="space-y-space-xs font-code-inline text-body-sm text-text-secondary border-t border-border-subtle pt-space-md">
<li className="flex items-center gap-space-xs"><span className="text-border-interactive">›</span> Offline-First SQLite</li>
<li className="flex items-center gap-space-xs"><span className="text-border-interactive">›</span> Camera &amp; Barcode Native</li>
<li className="flex items-center gap-space-xs"><span className="text-border-interactive">›</span> Zero Latency Gestures</li>
</ul>
</div>

<div className="bg-surface-base p-space-xl flex flex-col justify-between relative group hover:bg-surface-elevated transition-colors duration-200">
<div className="absolute top-0 left-0 w-full h-[2px] bg-transparent group-hover:bg-border-interactive transition-all duration-300"></div>
<div>
<span className="font-headline-lg text-headline-lg text-text-tertiary group-hover:text-border-interactive transition-colors">04</span>
<h3 className="font-headline-sm text-headline-sm text-text-primary mt-space-md mb-space-sm">ERP &amp; Business Systems</h3>
<p className="font-body-md text-body-md text-text-secondary mb-space-lg">
            Deep Microsoft Dynamics 365 Business Central extensions, AL codebases, and custom enterprise middleware synchronizing legacy data silos.
          </p>
</div>
<ul className="space-y-space-xs font-code-inline text-body-sm text-text-secondary border-t border-border-subtle pt-space-md">
<li className="flex items-center gap-space-xs"><span className="text-border-interactive">›</span> AL Extension Dev</li>
<li className="flex items-center gap-space-xs"><span className="text-border-interactive">›</span> Power Platform Automations</li>
<li className="flex items-center gap-space-xs"><span className="text-border-interactive">›</span> Bi-directional Data Bridges</li>
</ul>
</div>
</div>

<div className="mt-space-lg p-space-lg bg-surface-base border border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<div className="w-10 h-10 bg-surface-elevated border border-border-subtle flex items-center justify-center text-border-interactive">
<span className="material-symbols-outlined text-[20px]">precision_manufacturing</span>
</div>
<div>
<div className="font-headline-sm text-headline-sm text-text-primary">Need a tailored architectural assessment?</div>
<div className="font-code-inline text-body-sm text-text-secondary">Direct review of your current stack, database bottlenecks, or ERP roadmap.</div>
</div>
</div>
<a className="px-space-lg py-space-sm bg-border-interactive text-text-primary font-label-caps text-label-caps uppercase hover:bg-infrared-bright transition-colors whitespace-nowrap" href="#contact-terminal">
        Schedule Briefing →
      </a>
</div>
</section>

<section className="relative w-full max-w-[1360px] mx-auto px-gutter-mobile lg:px-gutter-desktop py-space-4xl">
<div className="flex flex-col md:flex-row md:items-end justify-between border-b border-border-subtle pb-space-lg mb-space-2xl gap-space-md">
<div>
<div className="flex items-center gap-space-xs font-code-inline text-body-sm text-border-interactive mb-space-xs">
<span>{"// 04_DELIVERY_CYCLE"}</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-text-primary">
          From Idea to Launch.
        </h2>
</div>
<span className="font-code-inline text-body-sm text-text-secondary">RIGOROUS 3-STEP CADENCE</span>
</div>

<div className="relative grid grid-cols-1 md:grid-cols-3 gap-space-lg">

<div className="hidden md:block absolute top-12 left-0 w-full h-px bg-border-subtle z-0"></div>

<div className="relative z-10 bg-surface-base border border-border-subtle p-space-xl flex flex-col justify-between group hover:border-border-interactive transition-all">
<div>
<div className="flex items-center justify-between mb-space-lg">
<span className="font-counter-num text-counter-num text-border-interactive font-bold">01</span>
<span className="font-code-inline text-body-sm text-text-tertiary px-space-xs py-space-2xs bg-surface-deep border border-border-subtle">
              PHASE // RECON
            </span>
</div>
<h3 className="font-headline-sm text-headline-sm text-text-primary mb-space-sm">Discovery &amp; Blueprint</h3>
<p className="font-body-md text-body-md text-text-secondary mb-space-md">
            We deconstruct business constraints, user flows, and technical prerequisites. Deliverable is an exact architectural schematic and SLA agreement.
          </p>
</div>
<div className="font-code-inline text-body-sm text-text-tertiary pt-space-md border-t border-border-subtle">
          ESTIMATED: 5-7 BUSINESS DAYS
        </div>
</div>

<div className="relative z-10 bg-surface-base border border-border-subtle p-space-xl flex flex-col justify-between group hover:border-border-interactive transition-all">
<div>
<div className="flex items-center justify-between mb-space-lg">
<span className="font-counter-num text-counter-num text-text-primary group-hover:text-border-interactive transition-colors font-bold">02</span>
<span className="font-code-inline text-body-sm text-text-tertiary px-space-xs py-space-2xs bg-surface-deep border border-border-subtle">
              PHASE // FORGE
            </span>
</div>
<h3 className="font-headline-sm text-headline-sm text-text-primary mb-space-sm">Build &amp; Integrate</h3>
<p className="font-body-md text-body-md text-text-secondary mb-space-md">
            Rapid iterative sprints with continuous code review, automated staging environments, and constant transparency via interactive sandbox deployments.
          </p>
</div>
<div className="font-code-inline text-body-sm text-text-tertiary pt-space-md border-t border-border-subtle">
          ESTIMATED: 3-8 WEEKS (BY SCOPE)
        </div>
</div>

<div className="relative z-10 bg-surface-base border border-border-subtle p-space-xl flex flex-col justify-between group hover:border-border-interactive transition-all">
<div>
<div className="flex items-center justify-between mb-space-lg">
<span className="font-counter-num text-counter-num text-text-primary group-hover:text-border-interactive transition-colors font-bold">03</span>
<span className="font-code-inline text-body-sm text-text-tertiary px-space-xs py-space-2xs bg-surface-deep border border-border-subtle">
              PHASE // DEPLOY
            </span>
</div>
<h3 className="font-headline-sm text-headline-sm text-text-primary mb-space-sm">Deploy &amp; Scale</h3>
<p className="font-body-md text-body-md text-text-secondary mb-space-md">
            Hardened production migration with zero-downtime database runs, end-to-end load testing, post-launch hypercare, and thorough knowledge handoff.
          </p>
</div>
<div className="font-code-inline text-body-sm text-text-tertiary pt-space-md border-t border-border-subtle">
          ESTIMATED: CONTINUOUS SLA SUPPORT
        </div>
</div>
</div>
</section>

<section className="relative w-full max-w-[1360px] mx-auto px-gutter-mobile lg:px-gutter-desktop py-space-4xl">
<div className="flex flex-col md:flex-row md:items-end justify-between border-b border-border-subtle pb-space-lg mb-space-2xl gap-space-md">
<div>
<div className="flex items-center gap-space-xs font-code-inline text-body-sm text-border-interactive mb-space-xs">
<span>{"// 05_STACK_ARSENAL"}</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-text-primary">
          Tools of Execution.
        </h2>
</div>
<p className="font-body-md text-body-md text-text-secondary max-w-md">
        Proven technologies selected for extreme reliability, developer velocity, and cross-platform flexibility.
      </p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-space-md">

<div className="bg-surface-base border border-border-subtle p-space-lg">
<div className="flex items-center gap-space-xs font-code-inline text-body-sm text-text-tertiary border-b border-border-subtle pb-space-sm mb-space-md">
<span className="text-border-interactive">01</span><span>{"// FRONTEND"}</span>
</div>
<div className="flex flex-col gap-space-xs">
<div className="stack-pill group p-space-xs px-space-sm bg-surface-elevated border border-border-subtle hover:border-border-interactive transition-all flex items-center justify-between">
<span className="font-code-inline text-body-sm text-text-primary">Next.js 14 / SSR</span>
<span className="w-1.5 h-1.5 bg-border-interactive opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div>
<div className="stack-pill group p-space-xs px-space-sm bg-surface-elevated border border-border-subtle hover:border-border-interactive transition-all flex items-center justify-between">
<span className="font-code-inline text-body-sm text-text-primary">React / TypeScript</span>
<span className="w-1.5 h-1.5 bg-border-interactive opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div>
<div className="stack-pill group p-space-xs px-space-sm bg-surface-elevated border border-border-subtle hover:border-border-interactive transition-all flex items-center justify-between">
<span className="font-code-inline text-body-sm text-text-primary">Tailwind CSS</span>
<span className="w-1.5 h-1.5 bg-border-interactive opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div>
<div className="stack-pill group p-space-xs px-space-sm bg-surface-elevated border border-border-subtle hover:border-border-interactive transition-all flex items-center justify-between">
<span className="font-code-inline text-body-sm text-text-primary">State Engines</span>
<span className="w-1.5 h-1.5 bg-border-interactive opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div>
</div>
</div>

<div className="bg-surface-base border border-border-subtle p-space-lg">
<div className="flex items-center gap-space-xs font-code-inline text-body-sm text-text-tertiary border-b border-border-subtle pb-space-sm mb-space-md">
<span className="text-border-interactive">02</span><span>{"// BACKEND"}</span>
</div>
<div className="flex flex-col gap-space-xs">
<div className="stack-pill group p-space-xs px-space-sm bg-surface-elevated border border-border-subtle hover:border-border-interactive transition-all flex items-center justify-between">
<span className="font-code-inline text-body-sm text-text-primary">Node.js / Express</span>
<span className="w-1.5 h-1.5 bg-border-interactive opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div>
<div className="stack-pill group p-space-xs px-space-sm bg-surface-elevated border border-border-subtle hover:border-border-interactive transition-all flex items-center justify-between">
<span className="font-code-inline text-body-sm text-text-primary">REST &amp; GraphQL</span>
<span className="w-1.5 h-1.5 bg-border-interactive opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div>
<div className="stack-pill group p-space-xs px-space-sm bg-surface-elevated border border-border-subtle hover:border-border-interactive transition-all flex items-center justify-between">
<span className="font-code-inline text-body-sm text-text-primary">PostgreSQL / SQL</span>
<span className="w-1.5 h-1.5 bg-border-interactive opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div>
<div className="stack-pill group p-space-xs px-space-sm bg-surface-elevated border border-border-subtle hover:border-border-interactive transition-all flex items-center justify-between">
<span className="font-code-inline text-body-sm text-text-primary">Redis Caching</span>
<span className="w-1.5 h-1.5 bg-border-interactive opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div>
</div>
</div>

<div className="bg-surface-base border border-border-subtle p-space-lg">
<div className="flex items-center gap-space-xs font-code-inline text-body-sm text-text-tertiary border-b border-border-subtle pb-space-sm mb-space-md">
<span className="text-border-interactive">03</span><span>{"// MOBILE"}</span>
</div>
<div className="flex flex-col gap-space-xs">
<div className="stack-pill group p-space-xs px-space-sm bg-surface-elevated border border-border-subtle hover:border-border-interactive transition-all flex items-center justify-between">
<span className="font-code-inline text-body-sm text-text-primary">React Native</span>
<span className="w-1.5 h-1.5 bg-border-interactive opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div>
<div className="stack-pill group p-space-xs px-space-sm bg-surface-elevated border border-border-subtle hover:border-border-interactive transition-all flex items-center justify-between">
<span className="font-code-inline text-body-sm text-text-primary">Android Native Modules</span>
<span className="w-1.5 h-1.5 bg-border-interactive opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div>
<div className="stack-pill group p-space-xs px-space-sm bg-surface-elevated border border-border-subtle hover:border-border-interactive transition-all flex items-center justify-between">
<span className="font-code-inline text-body-sm text-text-primary">Offline SQLite</span>
<span className="w-1.5 h-1.5 bg-border-interactive opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div>
<div className="stack-pill group p-space-xs px-space-sm bg-surface-elevated border border-border-subtle hover:border-border-interactive transition-all flex items-center justify-between">
<span className="font-code-inline text-body-sm text-text-primary">Zebra &amp; Honeywell SDK</span>
<span className="w-1.5 h-1.5 bg-border-interactive opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div>
</div>
</div>

<div className="bg-surface-base border border-border-subtle p-space-lg">
<div className="flex items-center gap-space-xs font-code-inline text-body-sm text-text-tertiary border-b border-border-subtle pb-space-sm mb-space-md">
<span className="text-border-interactive">04</span><span>{"// ERP &amp; CLOUD"}</span>
</div>
<div className="flex flex-col gap-space-xs">
<div className="stack-pill group p-space-xs px-space-sm bg-surface-elevated border border-border-subtle hover:border-border-interactive transition-all flex items-center justify-between">
<span className="font-code-inline text-body-sm text-text-primary">Dynamics 365 BC</span>
<span className="w-1.5 h-1.5 bg-border-interactive opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div>
<div className="stack-pill group p-space-xs px-space-sm bg-surface-elevated border border-border-subtle hover:border-border-interactive transition-all flex items-center justify-between">
<span className="font-code-inline text-body-sm text-text-primary">AL Language</span>
<span className="w-1.5 h-1.5 bg-border-interactive opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div>
<div className="stack-pill group p-space-xs px-space-sm bg-surface-elevated border border-border-subtle hover:border-border-interactive transition-all flex items-center justify-between">
<span className="font-code-inline text-body-sm text-text-primary">Power Automate</span>
<span className="w-1.5 h-1.5 bg-border-interactive opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div>
<div className="stack-pill group p-space-xs px-space-sm bg-surface-elevated border border-border-subtle hover:border-border-interactive transition-all flex items-center justify-between">
<span className="font-code-inline text-body-sm text-text-primary">Azure Cloud Services</span>
<span className="w-1.5 h-1.5 bg-border-interactive opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div>
</div>
</div>

<div className="bg-surface-base border border-border-subtle p-space-lg">
<div className="flex items-center gap-space-xs font-code-inline text-body-sm text-text-tertiary border-b border-border-subtle pb-space-sm mb-space-md">
<span className="text-border-interactive">05</span><span>{"// DATA &amp; INFRA"}</span>
</div>
<div className="flex flex-col gap-space-xs">
<div className="stack-pill group p-space-xs px-space-sm bg-surface-elevated border border-border-subtle hover:border-border-interactive transition-all flex items-center justify-between">
<span className="font-code-inline text-body-sm text-text-primary">Git &amp; CI/CD Pipelines</span>
<span className="w-1.5 h-1.5 bg-border-interactive opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div>
<div className="stack-pill group p-space-xs px-space-sm bg-surface-elevated border border-border-subtle hover:border-border-interactive transition-all flex items-center justify-between">
<span className="font-code-inline text-body-sm text-text-primary">Docker Containers</span>
<span className="w-1.5 h-1.5 bg-border-interactive opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div>
<div className="stack-pill group p-space-xs px-space-sm bg-surface-elevated border border-border-subtle hover:border-border-interactive transition-all flex items-center justify-between">
<span className="font-code-inline text-body-sm text-text-primary">Prisma ORM</span>
<span className="w-1.5 h-1.5 bg-border-interactive opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div>
<div className="stack-pill group p-space-xs px-space-sm bg-surface-elevated border border-border-subtle hover:border-border-interactive transition-all flex items-center justify-between">
<span className="font-code-inline text-body-sm text-text-primary">Telemetry &amp; Logs</span>
<span className="w-1.5 h-1.5 bg-border-interactive opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div>
</div>
</div>
</div>
</section>

<section className="relative w-full max-w-[1360px] mx-auto px-gutter-mobile lg:px-gutter-desktop py-space-5xl" id="contact-terminal">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl bg-surface-base border border-border-subtle p-space-xl lg:p-space-3xl relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-border-interactive via-infrared-bright to-transparent"></div>

<div className="lg:col-span-5 flex flex-col justify-between">
<div>
<div className="flex items-center gap-space-xs font-code-inline text-body-sm text-border-interactive mb-space-sm">
<span>{"// 06_COMMUNICATION_LINK"}</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-text-primary mb-space-md">
            Initiate Project Brief.
          </h2>
<p className="font-body-md text-body-md text-text-secondary mb-space-2xl leading-relaxed">
            Ready to build a resilient web ecosystem, launch a mobile platform, or upgrade your ERP operations? Direct access to Shubam Padha. No intermediary account managers.
          </p>

<div className="p-space-md bg-surface-deep border border-border-subtle mb-space-2xl flex items-center gap-space-md">
<div className="w-12 h-12 bg-surface-elevated border border-border-subtle flex items-center justify-center text-text-primary font-headline-sm font-bold">
              SP
            </div>
<div>
<div className="font-headline-sm text-headline-sm text-text-primary">Shubam Padha</div>
<div className="font-code-inline text-body-sm text-text-secondary">Lead Architect &amp; Studio Director</div>
</div>
</div>

<div className="space-y-space-md">
<a className="flex items-center gap-space-md p-space-sm bg-surface-elevated border border-border-subtle hover:border-border-interactive transition-colors group" href="mailto:contact@vaskoi.in">
<span className="material-symbols-outlined text-border-interactive text-[20px]">mail</span>
<div className="flex flex-col">
<span className="font-code-inline text-body-sm text-text-tertiary">OFFICIAL_MAIL</span>
<span className="font-body-md text-body-md text-text-primary group-hover:text-white transition-colors">contact@vaskoi.in</span>
</div>
</a>
<a className="flex items-center gap-space-md p-space-sm bg-surface-elevated border border-border-subtle hover:border-border-interactive transition-colors group" href="tel:+916005791807">
<span className="material-symbols-outlined text-border-interactive text-[20px]">call</span>
<div className="flex flex-col">
<span className="font-code-inline text-body-sm text-text-tertiary">DIRECT_TERMINAL</span>
<span className="font-body-md text-body-md text-text-primary group-hover:text-white transition-colors">+91 6005791807</span>
</div>
</a>
</div>
</div>
<div className="pt-space-2xl flex items-center gap-space-sm font-code-inline text-body-sm text-text-tertiary">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
<span>SLA RESPONSE TIME: UNDER 12 HOURS</span>
</div>
</div>

<div className="lg:col-span-7 bg-surface-deep p-space-xl lg:p-space-2xl border border-border-subtle">
<form className="flex flex-col gap-space-lg" id="project-form" onSubmit={(e) => { e.preventDefault(); const el = document.getElementById('form-feedback'); if(el) el.classList.remove('hidden'); }}>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
<div className="flex flex-col gap-space-xs">
<label className="font-label-caps text-label-caps uppercase text-text-secondary" htmlFor="contact-name">
                Your Name / Representative
              </label>
<input className="w-full bg-surface-base border border-border-subtle px-space-md py-space-sm text-text-primary font-code-inline text-body-md focus:outline-none focus:border-border-interactive transition-colors" id="contact-name" placeholder="e.g. Alex Chen" required={true} type="text"/>
</div>
<div className="flex flex-col gap-space-xs">
<label className="font-label-caps text-label-caps uppercase text-text-secondary" htmlFor="contact-email">
                Work Email Address
              </label>
<input className="w-full bg-surface-base border border-border-subtle px-space-md py-space-sm text-text-primary font-code-inline text-body-md focus:outline-none focus:border-border-interactive transition-colors" id="contact-email" placeholder="alex@company.com" required={true} type="email"/>
</div>
</div>
<div className="flex flex-col gap-space-xs">
<label className="font-label-caps text-label-caps uppercase text-text-secondary" htmlFor="system-category">
              Primary System Scope
            </label>
<select className="w-full bg-surface-base border border-border-subtle px-space-md py-space-sm text-text-primary font-code-inline text-body-md focus:outline-none focus:border-border-interactive transition-colors" id="system-category">
<option value="web-systems">Web Systems &amp; Headless Platforms</option>
<option value="custom-saas">Custom Web Applications &amp; Dashboards</option>
<option value="mobile-systems">Mobile Applications (Android / React Native)</option>
<option value="dynamics-365">Dynamics 365 Business Central / AL Extensions</option>
<option value="comprehensive">Comprehensive Architecture Re-engineering</option>
</select>
</div>
<div className="flex flex-col gap-space-xs">
<label className="font-label-caps text-label-caps uppercase text-text-secondary" htmlFor="project-summary">
              Project Specification &amp; Timeline Targets
            </label>
<textarea className="w-full bg-surface-base border border-border-subtle px-space-md py-space-sm text-text-primary font-code-inline text-body-md focus:outline-none focus:border-border-interactive transition-colors resize-none" id="project-summary" placeholder="Provide high-level architecture details, timeline expectations, or pain points in your current stack..." required={true} rows={4}></textarea>
</div>

<div className="hidden p-space-md bg-surface-elevated border border-tertiary text-tertiary font-code-inline text-body-sm flex items-center gap-space-sm" id="form-feedback">
<span className="material-symbols-outlined text-[18px]">check_circle</span>
<span>TRANSMISSION_CONFIRMED: Project brief registered into Vaskoi queue. Check your inbox for scheduling link.</span>
</div>
<button className="group relative w-full py-space-md bg-border-interactive text-text-primary font-label-caps text-label-caps uppercase tracking-wider overflow-hidden hover:bg-infrared-bright transition-all flex items-center justify-center gap-space-sm" type="submit">
<span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:-translate-y-0.5">send</span>
<span>Transmit Project Brief to Shubam</span>
<span className="font-code-inline text-body-sm text-white/70">[ENTER]</span>
</button>
<p className="font-code-inline text-body-sm text-text-tertiary text-center">
            Encrypted End-to-End // Non-Disclosure Protocol Active by Default
          </p>
</form>
</div>
</div>
</section>
</div>
</main><footer className="w-full bg-surface-base border-t border-border-subtle py-space-3xl mt-space-4xl"><div className="max-w-[1360px] mx-auto px-gutter-mobile lg:px-gutter-desktop"><div className="grid grid-cols-1 md:grid-cols-12 gap-space-2xl pb-space-2xl border-b border-border-subtle"><div className="md:col-span-6 flex flex-col gap-space-md"><div className="flex items-center gap-space-sm"><span className="font-headline-md text-headline-md text-text-primary uppercase">VASKOI</span><span className="font-code-inline text-code-inline text-text-secondary">[STUDIO]</span></div><p className="font-body-md text-body-md text-text-secondary max-w-md">High-performance digital engineering studio directed by Shubam Padha. Architecting resilient full-stack systems, modern ERP foundations, and enterprise mobile solutions.</p></div><div className="md:col-span-3 flex flex-col gap-space-sm"><span className="font-label-caps text-label-caps uppercase text-text-tertiary tracking-wider">Operational Coordinates</span><a className="font-body-sm text-body-sm text-on-surface hover:text-primary transition-colors flex items-center gap-space-xs" href="mailto:contact@vaskoi.engineering"><span className="material-symbols-outlined text-[16px] text-text-secondary">mail</span><span>contact@vaskoi.engineering</span></a><a className="font-body-sm text-body-sm text-on-surface hover:text-primary transition-colors flex items-center gap-space-xs" href="tel:+10000000000"><span className="material-symbols-outlined text-[16px] text-text-secondary">call</span><span>+1 (Direct Terminal)</span></a></div><div className="md:col-span-3 flex flex-col gap-space-sm"><span className="font-label-caps text-label-caps uppercase text-text-tertiary tracking-wider">Codebases &amp; Registry</span><a className="font-body-sm text-body-sm text-on-surface hover:text-primary transition-colors flex items-center gap-space-xs" href="#"><span className="material-symbols-outlined text-[16px] text-text-secondary">terminal</span><span>GitHub Protocol</span></a><a className="font-body-sm text-body-sm text-on-surface hover:text-primary transition-colors flex items-center gap-space-xs" href="#"><span className="material-symbols-outlined text-[16px] text-text-secondary">hub</span><span>Open Source Registry</span></a></div></div><div className="pt-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-md"><p className="font-body-sm text-body-sm text-text-secondary">© 2024–2026 Shubam Padha. Built with lots of coffee.</p><div className="flex items-center gap-space-sm"><span className="w-1.5 h-1.5 bg-tertiary"></span><span className="font-code-inline text-code-inline text-text-tertiary">SYS_STATUS: ALL SYSTEMS NOMINAL</span></div></div></div></footer>
    </>
  );
}