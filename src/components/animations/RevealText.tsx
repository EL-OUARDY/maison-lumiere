'use client';
import React, { ElementType, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import { cn } from '@/lib/utils';
import { Eases } from '@/lib/customEases';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface Props {
  text: string;
  as?: ElementType;
  className?: string;
  staggerAmount?: number;
  duration?: number;
  delay?: number;
  hoverLine?: boolean;
  triggerStart?: string;
  triggerEnd?: string;
}

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

function RevealText({
  text,
  as: Component = 'div',
  duration = 0.8,
  delay = 0.2,
  className,
  staggerAmount = 0.1,
  hoverLine = true,
  triggerStart = 'top 80%',
  triggerEnd = 'bottom 20%',
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const split = SplitText.create(containerRef.current, {
      type: 'words',
      wordsClass: `word ${hoverLine && 'hover-line'}`,
      tag: 'span',
    });

    // add parent wrapper around each word
    split.words.forEach((word) => {
      const parent = document.createElement('span');
      parent.className = 'overflow-hidden inline-block -mt-2 pb-2';

      word.parentNode?.insertBefore(parent, word);
      parent.appendChild(word);

      word.classList.add(
        'translate-y-[120%]',
        'will-change-transform',
        'inline-block',
      );
    });

    gsap.to(containerRef.current, { autoAlpha: 1 });
    gsap.to(split.words, {
      delay,
      y: 0,
      stagger: staggerAmount,
      duration,
      ease: Eases.out,
      scrollTrigger: {
        trigger: containerRef.current,
        start: triggerStart,
        end: triggerEnd,
      },
    });
  });

  return (
    <Component
      ref={containerRef}
      className={cn('invisible text-balance', className)}
      aria-label={text}
    >
      {text}
    </Component>
  );
}

export default RevealText;
