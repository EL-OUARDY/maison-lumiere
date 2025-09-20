import React from 'react';
import RevealText from '@/components/animations/RevealText';
import { Bounded } from '@/components/shared/Bounded';
import Button from '@/components/ui/button';
import FadeIn from '@/components/animations/FadeIn';

function CallToAction() {
  return (
    <Bounded className="bg-[url('/img/cta-bg.avif')] bg-cover bg-center py-16 text-center text-white md:py-24">
      <div className="flex flex-col space-y-8">
        <FadeIn
          vars={{ duration: 0.8 }}
          className="text-sm font-light tracking-[0.2em] uppercase"
        >
          Maison Lumière
        </FadeIn>

        <RevealText
          text="Your Signature Scent Awaits"
          as="h2"
          duration={1.5}
          staggerAmount={0.3}
          className="font-title mx-auto max-w-3xl text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
          hoverLine={false}
        />
        <FadeIn
          vars={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto max-w-2xl text-lg text-balance text-gray-300"
        >
          Uncover a fragrance that defines you—try our quick <br />
          scent-matching tool.
        </FadeIn>

        <FadeIn>
          <Button variant="default" className="mx-auto w-fit">
            FIND MY SCENT
          </Button>
        </FadeIn>
      </div>
    </Bounded>
  );
}

export default CallToAction;
