'use client';
import ReactLenis, { LenisRef } from 'lenis/react';
import React, { ReactNode, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { usePathname } from 'next/navigation';

interface Props {
  children: ReactNode;
}

function LenisScrollProvider({ children }: Props) {
  const lenisRef = useRef<LenisRef | null>(null);
  const pathname = usePathname();

  // GSAP integration
  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  // Force scroll top
  useEffect(() => {
    const lenisInstance = lenisRef.current?.lenis;
    if (lenisInstance) {
      lenisInstance.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      {children}
    </ReactLenis>
  );
}

export default LenisScrollProvider;
