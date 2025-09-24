import React from 'react';
import { Bounded } from '@/components/shared/Bounded';
import Image from 'next/image';
import FadeIn from '@/components/animations/FadeIn';
import RevealText from '@/components/animations/RevealText';
import Logo from '@/components/shared/Logo';
import ButtonLink from '@/components/ui/link';

function Hero() {
  return (
    <Bounded className="hero bg-background relative min-h-screen">
      <FadeIn
        vars={{ delay: 0.4, duration: 3 }}
        className="text-foreground absolute left-1/2 z-1 -translate-x-1/2 translate-y-8 transform p-2 md:p-4"
      >
        <Logo className="hidden sm:block sm:w-48 md:w-58" />
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

      <div className="text-foreground relative flex h-screen flex-col justify-center">
        <RevealText
          text="Natural Presence"
          as="h1"
          staggerAmount={0.2}
          duration={1.7}
          className="font-title max-w-xl text-6xl leading-none md:text-7xl lg:text-[5.5rem]"
          hoverLine={false}
        />

        <FadeIn
          vars={{ delay: 1, duration: 1.3 }}
          className="mt-4 max-w-md translate-y-8 text-lg"
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
          <ButtonLink href={'/fragrance/ignis'} variant="outline">
            Shop Now
          </ButtonLink>
        </FadeIn>
      </div>
    </Bounded>
  );
}

export default Hero;
