/**
 * VASKOI BIOPHARMA — APERTURE PRELOADER CONTROLLER
 * Manages the dual-curtain split reveal and asset pre-caching
 */

(function () {
  'use strict';

  const preloader = document.getElementById('vaskoi-preloader');
  const progressBar = document.getElementById('loader-progress-bar');
  const percentText = document.getElementById('loader-percent');
  const body = document.body;

  let progress = 0;
  let targetProgress = 0;
  let isDone = false;

  // Track important initial media
  const heroVideo = document.getElementById('hero-video');

  // Progressive simulated & real loading ticker
  function updateProgress() {
    // Increment towards target with smooth acceleration
    if (progress < targetProgress) {
      progress += (targetProgress - progress) * 0.12 + 0.35;
      if (progress > targetProgress) progress = targetProgress;
    }

    const displayVal = Math.min(100, Math.floor(progress));
    
    if (progressBar) {
      progressBar.style.transform = `scaleX(${progress / 100})`;
    }
    if (percentText) {
      percentText.textContent = `${displayVal}%`;
    }

    if (displayVal >= 100 && !isDone) {
      isDone = true;
      setTimeout(dismissPreloader, 350);
      return;
    }

    if (!isDone) {
      requestAnimationFrame(updateProgress);
    }
  }

  // Handle dismissal with dual-curtain animation
  function dismissPreloader() {
    body.classList.add('loaded');

    // Notify other components that preloader has completed
    window.dispatchEvent(new CustomEvent('vaskoi:ready'));

    // Attempt video playback immediately after reveal
    if (heroVideo) {
      heroVideo.play().catch(() => {
        // Autoplay policy fallback
        console.log('Video autoplay prevented, waiting for user scroll/interaction');
      });
    }

    // Clean up DOM after transition finishes
    setTimeout(() => {
      if (preloader) {
        preloader.style.display = 'none';
      }
    }, 1400);
  }

  // Preload sequence key assets
  function startAssetBuffering() {
    targetProgress = 30;

    // Buffer hero video metadata
    if (heroVideo) {
      if (heroVideo.readyState >= 3) {
        targetProgress = Math.max(targetProgress, 60);
      } else {
        heroVideo.addEventListener('loadeddata', () => {
          targetProgress = Math.max(targetProgress, 75);
        }, { once: true });
      }
    }

    // Buffer initial stage keyframes
    const keyframes = [
      'assets/images/stage1.png',
      'assets/sequence/00000.avif',
      'assets/sequence/00025.avif',
      'assets/sequence/00075.avif',
      'assets/sequence/00149.avif'
    ];

    let loadedCount = 0;
    keyframes.forEach(src => {
      const img = new Image();
      img.onload = img.onerror = () => {
        loadedCount++;
        const currentTarget = 40 + (loadedCount / keyframes.length) * 55;
        targetProgress = Math.max(targetProgress, currentTarget);
      };
      img.src = src;
    });

    // Fallback safety timer to ensure user is never blocked
    setTimeout(() => {
      targetProgress = 100;
    }, 2400);
  }

  // Start ticker
  requestAnimationFrame(updateProgress);

  // Initialize once DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startAssetBuffering);
  } else {
    startAssetBuffering();
  }

  // Window load safety net
  window.addEventListener('load', () => {
    targetProgress = 100;
  });

})();
