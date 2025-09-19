import React from 'react';
import { Bounded } from '@/components/shared/Bounded';
import Image from 'next/image';
import Button from '@/components/ui/button';
import FadeIn from '@/components/animations/FadeIn';
import RevealText from '@/components/animations/RevealText';
import Logo from '@/components/shared/Logo';

function Hero() {
  return (
    <Bounded className="hero relative min-h-screen bg-neutral-950">
      <FadeIn
        vars={{ delay: 0.4, duration: 3 }}
        className="absolute left-1/2 z-1 -translate-x-1/2 translate-y-8 transform p-2 text-white md:p-4"
      >
        <Logo className="hidden sm:block sm:w-52 md:w-72" />
      </FadeIn>

      <FadeIn
        vars={{ duration: 5, scale: 1, opacity: 0.5 }}
        className="absolute inset-0 scale-125"
      >
        <Image
          className="object-cover"
          src="/img/hero-bg.jpg"
          alt=""
          fill
          sizes="100vw"
          priority
        />
      </FadeIn>

      <div className="relative flex h-screen flex-col justify-center text-white">
        <RevealText
          text="Natural Presence"
          as="h1"
          staggerAmount={0.2}
          duration={1.7}
          className="font-title max-w-xl text-6xl leading-none text-neutral-50 md:text-7xl lg:text-[5.5rem]"
          hoverLine={false}
        />

        <FadeIn
          vars={{ delay: 1, duration: 1.3 }}
          className="mt-4 max-w-md translate-y-8 text-lg text-neutral-100"
        >
          <p>
            Maison Lumière embodies the art of fragrance — created for the
            luminous spirit. A symphony of elegance, light, and allure.
          </p>
        </FadeIn>

        <FadeIn
          vars={{ delay: 1.5, duration: 1.1 }}
          className="mt-8 translate-y-5"
        >
          <Button variant="outline">Shop Now</Button>
        </FadeIn>
      </div>
    </Bounded>
  );
}

export default Hero;
