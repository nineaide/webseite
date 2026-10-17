'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/** Progressive enhancement: content and controls work without animation or JS. */
export function MotionEnhancements() {
  const path = usePathname();
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const lifecycle = new AbortController();
    const running = new Set<Animation>();
    const ripples = new Set<HTMLElement>();
    const root = document.documentElement;
    function stopAnimations() {
      running.forEach((animation) => animation.cancel());
      running.clear();
      ripples.forEach((ripple) => ripple.remove());
      ripples.clear();
    }
    function onPointer(event: PointerEvent) {
      root.dataset.motionInput = 'pointer';
      if (preference.matches || event.button !== 0) return;
      const button = (event.target as Element)?.closest<HTMLElement>(
        '.c-button, .f-button',
      );
      if (!button || button.hasAttribute('disabled')) return;
      const bounds = button.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.className = 'nine-press-wave';
      ripple.setAttribute('aria-hidden', 'true');
      const size = Math.max(bounds.width, bounds.height) * 2;
      Object.assign(ripple.style, {
        width: size + 'px',
        height: size + 'px',
        left: event.clientX - bounds.left - size / 2 + 'px',
        top: event.clientY - bounds.top - size / 2 + 'px',
      });
      button.appendChild(ripple);
      ripples.add(ripple);
      const animation = ripple.animate(
        [
          { transform: 'scale(.05)', opacity: 0.24 },
          { transform: 'scale(1)', opacity: 0 },
        ],
        { duration: 460, easing: 'cubic-bezier(.22,1,.36,1)' },
      );
      running.add(animation);
      const dispose = () => {
        ripple.remove();
        ripples.delete(ripple);
        running.delete(animation);
      };
      animation.onfinish = dispose;
      animation.oncancel = dispose;
    }
    document.addEventListener('pointerdown', onPointer, {
      signal: lifecycle.signal,
      passive: true,
    });
    document.addEventListener(
      'keydown',
      () => {
        root.dataset.motionInput = 'keyboard';
        stopAnimations();
      },
      { signal: lifecycle.signal },
    );
    preference.addEventListener(
      'change',
      () => {
        if (preference.matches) stopAnimations();
      },
      { signal: lifecycle.signal },
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          observer.unobserve(entry.target);
          if (preference.matches || root.dataset.motionInput === 'keyboard')
            continue;
          const animation = entry.target.animate(
            [
              { opacity: 0.65, transform: 'translateY(14px)' },
              { opacity: 1, transform: 'translateY(0)' },
            ],
            { duration: 460, easing: 'cubic-bezier(.22,1,.36,1)' },
          );
          running.add(animation);
          animation.onfinish = () => running.delete(animation);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' },
    );
    document
      .querySelectorAll(
        '.section-heading,.gallery-item,.reason-columns article,.process-list article,.n-feature-grid article',
      )
      .forEach((element) => observer.observe(element));
    return () => {
      lifecycle.abort();
      observer.disconnect();
      stopAnimations();
      delete root.dataset.motionInput;
    };
  }, [path]);
  return null;
}
