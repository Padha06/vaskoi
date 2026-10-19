# Vaskoi Biopharma — Next-Generation Single-Molecule Proteomics

High-precision Swiss biotech landing page and interactive platform demo built for **Vaskoi Biopharma**, reverse-engineered from and inspired by [glyphic.bio](https://www.glyphic.bio).

Featuring a luminous **Trust Light Blue & Clinical Azure** palette, an aperture dual-curtain split preloader, a 300vh scroll-driven 150-frame sequence canvas, and floating HUD pill capsules.

---

## Key Features

1. **The Vaskoi Aperture Preloader**:
   - Dual-curtain split reveal (57% upper curtain, 44% lower curtain).
   - Custom geometric molecular emblem and brand wordmark.
   - Hairline progress track with smooth percentage counter `( 0% )` $\rightarrow$ `( 100% )`.
   - Dual-curtain slide exit (`translateY(-100%)` / `translateY(100%)`) with `cubic-bezier(0.77, 0, 0.18, 1)`.

2. **Hero Section**:
   - High-definition local looping video background (`hero.mp4`).
   - 3D perspective mouse tilt / camera parallax.
   - Fluid viewport typography with tight tracking (`-0.04em`).

3. **300vh Scroll-Driven Sequence Canvas Engine**:
   - 150-frame AVIF image sequence rendered to a sticky `100vh` `<canvas>`.
   - DevicePixelRatio scaling for 4K / Retina displays.
   - Linear interpolation (lerp) scrubbing for fluid 60–120fps motion.
   - **Floating HUD Pill Capsules**: Horizontal layout across the viewport with an unobstructed center view of the 3D rotating molecule.
   - Active stages trigger horizontal clip-path expansion:
     `clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%)`.
   - Interactive click navigation: Click any stage pill to auto-scroll directly to that milestone.

4. **Interactive Technology Accordion & Performance Benchmarks**:
   - 3-stage chemical functionalization, spatial expansion, and nanopore discrimination breakdown.
   - Live counting metric cards (`100% De Novo`, `20 / 20 Amino Acids`, `100M+ Reads`, `< 1 hr Prep`).
   - Comparative benchmark matrix (Vaskoi vs MS/MS vs Edman Degradation).

5. **Client Demo Inquiry Drawer**:
   - Frosted glass modal dialog for scheduling partner sequencing demonstrations.

---

## Quick Start (Run Locally)

### Option A: One-Click Launcher (Windows)
Double-click `run_demo.bat` to start the local HTTP server and launch the browser at `http://localhost:3000`.

### Option B: PowerShell Server
```powershell
powershell -ExecutionPolicy Bypass -File server.ps1
```

---

## Project Structure

```
├── index.html                  # Main production markup
├── README.md                   # Project documentation
├── css/
│   └── style.css               # Core Swiss biotech styling & animations
├── js/
│   ├── loader.js               # Aperture dual-curtain controller
│   ├── canvasSequence.js       # 150-frame scroll-reactive canvas engine
│   └── main.js                 # Lenis smooth scroll, accordion & metrics
├── assets/
│   ├── video/
│   │   └── hero.mp4            # Local high-def hero loop
│   ├── images/
│   │   ├── stage1.png          # High-res stage 1 keyframe
│   │   ├── stage2.png          # High-res stage 2 keyframe
│   │   └── stage3.png          # High-res stage 3 keyframe
│   └── sequence/
│       ├── 00000.avif ...      # 150 AVIF sequence frames (2.31 MB)
│       └── 00149.avif
├── server.ps1                  # Local static server with MIME types
└── run_demo.bat                # One-click Windows batch launcher
```
