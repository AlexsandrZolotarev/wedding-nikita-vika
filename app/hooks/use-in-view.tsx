"use client";
import { useEffect, useRef, useState } from "react";

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  root?: Element | null;
}

export function useInView(options: UseInViewOptions = {}) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: options.threshold ?? 0.1,
        rootMargin: options.rootMargin ?? "0px",
        root: options.root ?? null,
      },
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options.threshold, options.rootMargin, options.root]);

  return [ref, isInView] as const;
}
