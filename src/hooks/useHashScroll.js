import { useEffect } from 'react';

export function useHashScroll() {
  useEffect(() => {
    function scrollToHash() {
      const targetId = window.location.hash.slice(1);

      if (!targetId) {
        return;
      }

      const target = document.getElementById(targetId);
      if (target) {
        window.requestAnimationFrame(() => target.scrollIntoView({ block: 'start' }));
      }
    }

    scrollToHash();
    window.addEventListener('hashchange', scrollToHash);

    return () => window.removeEventListener('hashchange', scrollToHash);
  }, []);
}
