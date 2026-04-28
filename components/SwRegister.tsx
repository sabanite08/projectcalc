'use client';

import { useEffect } from 'react';

export default function SwRegister() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!('serviceWorker' in navigator)) return;

    // Defer registration until after the page is interactive so it
    // never competes with first paint.
    const register = () => {
      navigator.serviceWorker.register('/sw.js').catch(() => {
        // Swallow — SW failure should never break the app.
      });
    };

    if (document.readyState === 'complete') register();
    else window.addEventListener('load', register, { once: true });
  }, []);

  return null;
}
