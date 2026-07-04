/** Animations JS - Intersection Observer Scroll Reveals */

/**
 * Initialize scroll-triggered reveal animations using IntersectionObserver
 * Handles accessibility concerns by respecting prefers-reduced-motion
 */
export function initAnimations() {
  // Check if user prefers reduced motion for accessibility
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    // Immediately show all reveal elements without animation
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
      el.classList.add('is-visible');
    });
    return;
  }

  // Create IntersectionObserver for scroll-triggered animations
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add visible class to trigger CSS transition
        entry.target.classList.add('is-visible');
        // Stop observing once revealed (one-time animation)
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all reveal elements
  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
    observer.observe(el);
  });
}

export default initAnimations;
