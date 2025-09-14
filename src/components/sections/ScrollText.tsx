'use client';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Bounded } from '@/components/shared/Bounded';

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

function ScrollText() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      const content = contentRef.current;
      const text = textRef.current;

      if (!container || !content || !text) return;

      const split = SplitText.create('.split', {
        type: 'words,chars',
        wordsClass: 'word mr-4',
        charsClass: 'char',
        tag: 'span',
        aria: 'none',
        onSplit: () => {
          gsap.set(container, { autoAlpha: 1 });
        },
      });

      // Initial state
      gsap.set(content, { filter: 'blur(40px)' });
      gsap.set(split.chars, { color: '#2e3138' });

      // Blur content while scrolling
      gsap.to(content, {
        filter: 'blur(0px)',
        duration: 1,
        scrollTrigger: {
          trigger: container,
          start: 'top 75%',
          end: 'top top',
          scrub: 2,
        },
      });

      // Animate text color and glowy background
      const tl = gsap.timeline({
        id: 'color-timeline',
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: 'bottom -100%',
          pin: true,
          scrub: 2,
        },
      });

      // prettier-ignore
      tl
      .to(split.chars, {
        color: '#fff',
        stagger: {
          each: 0.01,
          from: 'start',
          ease: 'power1.inOut',
        },
      })
      .to('.glow-bg', {
        opacity: 1,
        ease: "power2.inOut",
        duration:1
      }, "<");
    },
    { scope: containerRef },
  );

  return (
    <Bounded
      ref={containerRef}
      className="invisible relative flex h-screen items-center justify-center bg-neutral-950 text-center"
    >
      <div className="glow-bg absolute inset-0 z-0 size-full opacity-0"></div>
      <div className="noise-texture absolute inset-0 z-100 size-full opacity-30 mix-blend-multiply"></div>

      <div ref={contentRef}>
        <div className="mb-4 text-sm tracking-wider text-neutral-200 uppercase md:mb-8 md:text-base">
          REDEFINING ELEGANCE
        </div>

        <p
          aria-hidden="true"
          className="font-title split flex flex-wrap justify-center text-5xl leading-tight text-balance uppercase md:text-7xl"
          ref={textRef}
        >
          MAISON LUMIÈRE IS MADE FOR THOSE WHO KNOW THAT LUXURY IS NOT WORN, BUT
          INHABITED
        </p>
      </div>

      <p className="sr-only">
        MAISON LUMIÈRE IS MADE FOR THOSE WHO KNOW THAT LUXURY IS NOT WORN, BUT
        INHABITED
      </p>
    </Bounded>
  );
}

export default ScrollText;
