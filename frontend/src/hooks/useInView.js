import { useEffect, useRef, useState } from 'react';

/**
 * Fires once when an element scrolls into view. Used to orchestrate the
 * roadmap reveal: each project plate rises, then its trace draws itself.
 */
export default function useInView({ threshold = 0.2, rootMargin = '0px 0px -12% 0px' } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, inView];
}
