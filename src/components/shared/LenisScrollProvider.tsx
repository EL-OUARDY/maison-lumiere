'use client';
import ReactLenis, { LenisRef } from 'lenis/react';
import React, { ReactNode, useEffect, useRef } from 'react';
import gsap from 'gsap';

interface Props {
  children: ReactNode;
}

function LenisScrollProvider({ children }: Props) {
  const lenisRef = useRef<LenisRef | null>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      {children}
    </ReactLenis>
  );
}

export default LenisScrollProvider;
