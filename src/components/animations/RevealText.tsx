'use client';
import React, { ElementType, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { cn } from '@/lib/utils';

interface Props {
  text: string;
  as?: ElementType;
  className?: string;
  staggerAmount?: number;
  duration?: number;
}

gsap.registerPlugin(useGSAP);

function RevealText({
  text,
  as: Component = 'div',
  duration = 0.8,
  className,
  staggerAmount = 0.1,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to('.word', {
        delay: 0.2,
        y: 0,
        stagger: staggerAmount,
        duration,
        ease: 'power3.out',
      });
    },
    { scope: containerRef },
  );

  return (
    <Component
      ref={containerRef}
      className={cn('reveal-text text-balance', className)}
    >
      {text.split(' ').map((word, index) => (
        <span key={index} className="inline-block overflow-hidden pb-2">
          <span className="word inline-block translate-y-[120%] will-change-transform">
            {word}
            {index < text.split(' ').length - 1 ? <>&nbsp;</> : null}
          </span>
        </span>
      ))}
    </Component>
  );
}

export default RevealText;
