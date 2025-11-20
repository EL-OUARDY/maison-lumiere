import React from 'react';
import { Bounded } from '@/components/shared/Bounded';
import Image from 'next/image';
import FadeIn from '@/components/animations/FadeIn';
import RevealText from '@/components/animations/RevealText';
import ButtonLink from '@/components/ui/link';

function Hero() {
  return (
    <Bounded className="hero bg-background relative h-dvh">
      <FadeIn
        vars={{ duration: 5, scale: 1, opacity: 0.5 }}
        className="absolute inset-0 scale-125"
      >
        <Image
          className="object-cover"
          src="/img/hero-bg.jpeg"
          alt=""
          fill
          sizes="100vw"
          priority
        />
      </FadeIn>

      <div className="text-foreground relative flex h-screen flex-col justify-center">
        <div className="w-fit">
          <RevealText
            text="Natural Charm"
            as="h1"
            staggerAmount={0.2}
            duration={1.7}
            className="font-title max-w-lg text-7xl leading-none lg:text-[5rem]"
            hoverLine={false}
          />

          <FadeIn
            vars={{ delay: 1, duration: 1.7 }}
            className="flex translate-y-8 items-center gap-2 text-lg"
          >
            <span className="bg-foreground h-px w-4"></span>
            <span className="font-light">Paris</span>
            <span className="bg-foreground h-px w-4"></span>
            <span className="font-light">Est. 1952</span>
            <span className="bg-foreground h-px flex-1"></span>
          </FadeIn>
        </div>

        <FadeIn
          vars={{ delay: 1, duration: 1.3 }}
          className="mt-4 max-w-md translate-y-8 text-lg"
        >
          <p>
            Since its founding, Maison Lumière has mastered the alchemy of scent
            and sensation — creating fragrances that illuminate the soul.
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
