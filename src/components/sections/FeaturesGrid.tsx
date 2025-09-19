import React from 'react';
import { Bounded } from '@/components/shared/Bounded';
import Image from 'next/image';
import Button from '@/components/ui/button';
import FadeIn from '@/components/animations/FadeIn';

function FeaturesGrid() {
  return (
    <Bounded className="flex items-center justify-center overflow-hidden bg-neutral-950 py-16 text-center md:py-24">
      <div className="flex flex-col gap-8 lg:flex-row">
        <FadeIn
          vars={{ duration: 1 }}
          start="top 70%"
          className="grid-image relative hidden w-full translate-y-16 lg:block lg:flex-2"
        >
          <Image
            className="object-cover"
            src="/img/grid-picture.jpg"
            alt=""
            fill
            sizes="100vw"
          />
        </FadeIn>

        <div className="description w-full space-y-12 lg:flex-1">
          <FadeIn
            vars={{ duration: 1.2 }}
            start="top 70%"
            className="translate-y-16 space-y-6 bg-white/10 p-10 text-left"
          >
            <h2 className="text-3xl leading-tight font-semibold md:text-4xl">
              Effortless Distinction.
            </h2>
            <p className="max-w-lg text-base text-gray-300">
              True elegance requires no announcement. Maison Lumière embodies
              this philosophy—a fragrance for those who command respect through
              presence alone. Contemporary luxury rooted in enduring principles.
            </p>
          </FadeIn>

          <FadeIn
            className="product-card translate-y-16 space-y-6 bg-white/10 p-10 text-left"
            vars={{ duration: 1 }}
            start="top bottom"
          >
            <div className="image-bottle relative -mt-28 aspect-[3/3.5] -rotate-12">
              <Image
                className="object-cover"
                src="/img/ignis-bottle.png"
                alt=""
                fill
                sizes="100vw"
                priority
              />
            </div>
            <div className="flex justify-between">
              <div className="space-y-2">
                <h2 className="font-title text-4xl">Ignis</h2>
                <span className="text-gray-400">Eau de Parfum</span>
              </div>
              <div className="price mt-4 text-gray-100">$130</div>
            </div>

            <Button variant="outline">Shop Now</Button>
          </FadeIn>
        </div>
      </div>
    </Bounded>
  );
}

export default FeaturesGrid;
