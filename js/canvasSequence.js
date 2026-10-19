/**
 * VASKOI BIOPHARMA — SCROLL-DRIVEN SEQUENCE CANVAS ENGINE
 * High-performance 150-frame sequence controller with DPR scaling and HUD synchronization
 */

class SequenceCanvasController {
  constructor(options = {}) {
    this.section = document.getElementById(options.sectionId || 'sequence-track');
    this.canvas = document.getElementById(options.canvasId || 'sequence-canvas');
    this.progressText = document.getElementById(options.progressTextId || 'hud-progress-counter');
    this.stageLayers = document.querySelectorAll('.sequence-hud-stage-layer');

    if (!this.section || !this.canvas) {
      console.warn('SequenceCanvasController: Canvas or section container missing.');
      return;
    }

    this.ctx = this.canvas.getContext('2d', { alpha: true });
    this.totalFrames = options.totalFrames || 150;
    this.frames = new Array(this.totalFrames);
    this.loadedFrames = 0;

    // Smooth physics values
    this.targetProgress = 0;
    this.currentProgress = 0;
    this.lastDrawnFrame = -1;
    this.isRendering = false;

    // High-res stage fallbacks
    this.stageImages = [];
    this.initStageFallbacks();

    // Setup canvas resolution and frame pipeline
    this.setupResizeHandler();
    this.preloadFrames();
    this.bindEvents();
    this.startRenderLoop();
  }

  // Load the 3 high-res stage images as instant backups
  initStageFallbacks() {
    const stagePaths = [
      'assets/images/stage1.png',
      'assets/images/stage2.png',
      'assets/images/stage3.png'
    ];

    stagePaths.forEach((src, idx) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        this.stageImages[idx] = img;
        // If no sequence frame is ready yet, draw stage 1 immediately
        if (this.loadedFrames === 0 && idx === 0) {
          this.drawImageCover(img);
        }
      };
    });
  }

  // Preload all 150 AVIF frames with prioritization
  preloadFrames() {
    // Priority order: First frame, last frame, middle milestones, then full sequence
    const priorityIndices = [0, 50, 100, 149];
    
    // Load priority frames first
    priorityIndices.forEach(index => this.loadSingleFrame(index));

    // Load rest of the frames
    for (let i = 0; i < this.totalFrames; i++) {
      if (!priorityIndices.includes(i)) {
        this.loadSingleFrame(i);
      }
    }
  }

  loadSingleFrame(index) {
    if (this.frames[index]) return;

    const padNum = String(index).padStart(5, '0');
    const img = new Image();
    img.src = `assets/sequence/${padNum}.avif`;
    
    img.onload = () => {
      this.frames[index] = img;
      this.loadedFrames++;

      // Draw initial frame as soon as frame 0 lands
      if (index === 0 && this.lastDrawnFrame === -1) {
        this.drawImageCover(img);
        this.lastDrawnFrame = 0;
      }
    };

    img.onerror = () => {
      // If frame fails, map to nearest stage image
      const stageIdx = Math.min(2, Math.floor((index / this.totalFrames) * 3));
      this.frames[index] = this.stageImages[stageIdx] || null;
    };
  }

  setupResizeHandler() {
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2); // Cap at 2 for performance
      const rect = this.canvas.getBoundingClientRect();

      this.canvasWidth = rect.width;
      this.canvasHeight = rect.height;

      this.canvas.width = Math.floor(rect.width * dpr);
      this.canvas.height = Math.floor(rect.height * dpr);

      this.ctx.scale(dpr, dpr);

      // Redraw current active frame after resize
      this.forceRedraw();
    };

    window.addEventListener('resize', resize, { passive: true });
    resize();
  }

  // Compute scroll percentage through the 300vh section
  computeScrollProgress() {
    const rect = this.section.getBoundingClientRect();
    const windowH = window.innerHeight;
    const scrollDistance = rect.height - windowH;

    if (scrollDistance <= 0) return 0;

    // Progress 0 when section enters, 1 when section finishes
    const rawProgress = -rect.top / scrollDistance;
    return Math.max(0, Math.min(1, rawProgress));
  }

  bindEvents() {
    const onScroll = () => {
      this.targetProgress = this.computeScrollProgress();
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Interactive Stage Layers: Clicking any pill navigates to that stage
    this.stageLayers.forEach((layer, idx) => {
      layer.addEventListener('click', () => {
        const milestones = [0.08, 0.50, 0.92];
        const targetPercent = milestones[idx] || 0;
        const rect = this.section.getBoundingClientRect();
        const scrollDist = this.section.offsetHeight - window.innerHeight;
        const targetScrollY = window.scrollY + rect.top + (scrollDist * targetPercent);

        if (window.vaskoiLenis) {
          window.vaskoiLenis.scrollTo(targetScrollY, { duration: 1.2 });
        } else {
          window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
        }
      });
    });
  }

  startRenderLoop() {
    const tick = () => {
      // Smooth linear interpolation for buttery 60fps / 120fps scrubbing
      const delta = (this.targetProgress - this.currentProgress);
      this.currentProgress += delta * 0.12;

      const frameIndex = Math.min(
        this.totalFrames - 1,
        Math.max(0, Math.floor(this.currentProgress * this.totalFrames))
      );

      if (frameIndex !== this.lastDrawnFrame || Math.abs(delta) > 0.0005) {
        this.renderFrame(frameIndex);
        this.updateHUD(this.currentProgress, frameIndex);
      }

      requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }

  renderFrame(index) {
    let imgToDraw = this.frames[index];

    // Fallback: If specific sequence frame not yet decoded, find closest neighbor
    if (!imgToDraw || !imgToDraw.complete) {
      for (let offset = 1; offset < 10; offset++) {
        if (this.frames[index - offset]?.complete) {
          imgToDraw = this.frames[index - offset];
          break;
        }
        if (this.frames[index + offset]?.complete) {
          imgToDraw = this.frames[index + offset];
          break;
        }
      }
    }

    // Ultimate fallback: high-res stage images
    if (!imgToDraw || !imgToDraw.complete) {
      const stageIdx = Math.min(2, Math.floor((index / this.totalFrames) * 3));
      imgToDraw = this.stageImages[stageIdx];
    }

    if (imgToDraw && imgToDraw.complete) {
      this.drawImageCover(imgToDraw);
      this.lastDrawnFrame = index;
    }
  }

  // Draw image preserving aspect ratio with cover scaling
  drawImageCover(img) {
    if (!img || !img.width || !img.height) return;

    const canvasW = this.canvasWidth;
    const canvasH = this.canvasHeight;
    const imgW = img.naturalWidth || img.width;
    const imgH = img.naturalHeight || img.height;

    const imgRatio = imgW / imgH;
    const canvasRatio = canvasW / canvasH;

    let renderW, renderH, offsetX, offsetY;

    if (canvasRatio > imgRatio) {
      renderW = canvasW;
      renderH = canvasW / imgRatio;
      offsetX = 0;
      offsetY = (canvasH - renderH) / 2;
    } else {
      renderW = canvasH * imgRatio;
      renderH = canvasH;
      offsetX = (canvasW - renderW) / 2;
      offsetY = 0;
    }

    this.ctx.fillStyle = '#f0f7ff';
    this.ctx.fillRect(0, 0, canvasW, canvasH);
    this.ctx.drawImage(img, offsetX, offsetY, renderW, renderH);
  }

  forceRedraw() {
    if (this.lastDrawnFrame >= 0) {
      this.renderFrame(this.lastDrawnFrame);
    }
  }

  // Synchronize HUD stage layers and progress text
  updateHUD(progress, frameIndex) {
    // Determine active stage: Stage 1 (0-33%), Stage 2 (33-66%), Stage 3 (66-100%)
    const activeStage = Math.min(2, Math.floor(progress * 3));

    this.stageLayers.forEach((layer, idx) => {
      if (idx === activeStage) {
        if (!layer.classList.contains('active')) {
          layer.classList.add('active');
        }
      } else {
        if (layer.classList.contains('active')) {
          layer.classList.remove('active');
        }
      }
    });

    if (this.progressText) {
      const stageLabels = ['STAGE 01 / 03', 'STAGE 02 / 03', 'STAGE 03 / 03'];
      this.progressText.textContent = stageLabels[activeStage];
    }
  }
}

// Instantiate controller once DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.sequenceController = new SequenceCanvasController({
    sectionId: 'sequence-track',
    canvasId: 'sequence-canvas',
    progressTextId: 'hud-progress-counter',
    totalFrames: 150
  });
});
