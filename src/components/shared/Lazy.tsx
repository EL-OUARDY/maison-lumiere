'use client';
import React, {
  HTMLAttributes,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  rootMargin?: string;
  children: ReactNode;
}

function Lazy({ rootMargin, children, ...restProps }: Props) {
  const [isInView, setIsInView] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const containerRef = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0, rootMargin },
    );

    if (containerRef) observer.observe(containerRef);

    return () => {
      if (containerRef) observer.unobserve(containerRef);
    };
  }, [rootMargin]);

  return (
    <div ref={ref} {...restProps}>
      {isInView && children}
    </div>
  );
}

export default Lazy;
