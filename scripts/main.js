/** Main JS - Core Init & Smooth Scrolling */

import { initAnimations } from './animations.js';
import { initInteractions } from './interactions.js';

/**
 * Initialize all landing page functionality on DOM ready
 */
document.addEventListener('DOMContentLoaded', () => {
  // Initialize scroll-triggered reveal animations
  initAnimations();

  // Initialize interactive components and behaviors
  initInteractions();

  // Development logging
  if (import.meta.env.DEV) {
    console.log('Hotel Landing Page initialized');
  }
});
