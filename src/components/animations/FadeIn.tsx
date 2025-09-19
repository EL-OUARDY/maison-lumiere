'use client';
import React, { ReactNode, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
  children?: ReactNode;
  vars?: gsap.TweenVars;
  start?: string;
}

gsap.registerPlugin(useGSAP, ScrollTrigger);

function FadeIn({
  children,
  vars = {},
  className = '',
  start = 'top 80%',
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(containerRef.current, {
        opacity: 1,
        duration: 2,
        ease: 'power3.out',
        y: 0,
        ...vars,
        scrollTrigger: {
          trigger: containerRef.current,
          start,
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className={cn('opacity-0', className)}>
      {children}
    </div>
  );
}

export default FadeIn;
