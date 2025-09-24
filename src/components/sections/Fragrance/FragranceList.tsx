import React from 'react';
import { Bounded } from '@/components/shared/Bounded';
import RevealText from '@/components/animations/RevealText';
import FragranceAd from '@/components/sections/Fragrance/FragranceAd';
import { FRAGRANCES } from '@/lib/demo';
import FadeIn from '@/components/animations/FadeIn';

function FragranceList() {
  return (
    <Bounded className="bg-background-bold text-foreground space-y-8 py-16 text-center md:py-24">
      <div className="mx-auto space-y-8">
        <FadeIn
          vars={{ duration: 0.8 }}
          className="text-sm font-light tracking-[0.2em] uppercase"
        >
          Our Collection
        </FadeIn>

        <RevealText
          text="Fragrance Without a Label"
          as="h2"
          duration={1.5}
          staggerAmount={0.3}
          className="font-title mx-auto max-w-3xl text-5xl leading-[1.2] uppercase sm:text-6xl md:text-7xl lg:text-8xl"
          hoverLine={false}
        />
        <p className="text-muted mx-auto max-w-2xl text-lg text-balance">
          Maison Lumière captures the art of subtle sophistication, leaving a
          lasting impression before a word is spoken.
        </p>

        {/* Scents */}
        <div className="mt-12 flex flex-col gap-12">
          {FRAGRANCES.map((fragrance, index) => (
            <FragranceAd key={index} fragrance={fragrance} />
          ))}
        </div>
      </div>
    </Bounded>
  );
}

export default FragranceList;
