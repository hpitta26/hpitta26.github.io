import { useEffect, useRef, useState } from 'react';

/**
 * Tracks whether an element is in view. With `once` (the default) it fires a
 * single time and stops observing — used to orchestrate the roadmap reveal:
 * each project plate rises, then its trace draws itself. With `once: false`
 * it keeps tracking, flipping back off when the element leaves — used for
 * state tied to the reader's current position, like the screenshot lift. */
export default function useInView({ threshold = 0.2, rootMargin = '0px 0px -12% 0px', once = true } = {}) {
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
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, inView];
}
