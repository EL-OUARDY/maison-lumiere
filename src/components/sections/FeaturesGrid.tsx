import React from 'react';
import { Bounded } from '@/components/shared/Bounded';
import Image from 'next/image';
import FadeIn from '@/components/animations/FadeIn';
import ButtonLink from '@/components/ui/link';

function FeaturesGrid() {
  return (
    <Bounded className="bg-background flex items-center justify-center overflow-hidden py-16 text-center md:py-24">
      <div className="flex flex-col gap-8 lg:flex-row">
        <FadeIn
          vars={{ duration: 1 }}
          start="top 70%"
          className="grid-image relative hidden w-full translate-y-16 lg:block lg:flex-2"
        >
          <Image
            className="object-cover grayscale-[0.9]"
            src="/img/grid-picture.jpg"
            alt=""
            fill
            sizes="70vw"
          />
        </FadeIn>

        <div className="description w-full space-y-12 lg:flex-1">
          <FadeIn
            vars={{ duration: 1.2 }}
            start="top 70%"
            className="bg-foreground/10 translate-y-16 space-y-6 p-10 text-left"
          >
            <h2 className="text-3xl leading-tight font-semibold md:text-4xl">
              Effortless Distinction.
            </h2>
            <p className="text-muted max-w-lg text-base">
              True elegance requires no announcement. Maison Lumière embodies
              this philosophy—a fragrance for those who command respect through
              presence alone. Contemporary luxury rooted in enduring principles.
            </p>
          </FadeIn>

          <FadeIn
            className="product-card bg-foreground/10 translate-y-16 text-left"
            vars={{ duration: 1 }}
            start="top bottom"
          >
            <div className="bottle-image aspect-square -translate-y-16 -rotate-12">
              <Image
                className="object-cover"
                src="/img/ignis-bottle.png"
                alt=""
                width={1000}
                height={1000}
              />
            </div>

            <div className="space-y-6 p-10 pt-0">
              <div className="flex justify-between">
                <div className="space-y-2">
                  <h2 className="font-title text-4xl">Ignis</h2>
                  <span className="text-muted">Eau de Parfum</span>
                </div>
                <div className="price font-title mt-4 text-2xl">$130</div>
              </div>

              <ButtonLink href={'/fragrance/ignis'} variant="outline">
                Shop Now
              </ButtonLink>
            </div>
          </FadeIn>
        </div>
      </div>
    </Bounded>
  );
}

export default FeaturesGrid;
