import React from 'react';
import FadeIn from '@/components/animations/FadeIn';
import Image from 'next/image';
import FragranceFeatures from '@/components/sections/Fragrance/FragranceFeatures';
import ButtonLink from '@/components/ui/link';
import { IFragrance } from '@/lib/models';
import AddToCartButton from '@/components/sections/Fragrance/AddToCartButton';

interface Props {
  fragrance: IFragrance;
}

function FragranceAd({ fragrance }: Props) {
  return (
    <FadeIn
      className="border-foreground/10 relative z-10 grid min-h-[85vh] w-full translate-y-20 items-center justify-items-start border p-4 text-left md:p-14 lg:p-20"
      vars={{ duration: 1.5 }}
      start="top 60%"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={fragrance.img}
          className="object-cover opacity-40 md:opacity-100"
          alt=""
          fill
        />
      </div>

      <FadeIn
        className="relative z-10 grid translate-y-8"
        vars={{ duration: 2, delay: 0.2 }}
        start="top 50%"
      >
        <h3 className="font-title mb-3 text-5xl capitalize md:text-6xl lg:text-7xl">
          {fragrance.name}
        </h3>

        <p className="text-muted mb-8 text-base font-semibold">Eau de Parfum</p>

        <div className="text-muted mb-10 max-w-md text-lg">
          {fragrance.description}
        </div>

        <FragranceFeatures features={fragrance.features} className="mb-10" />

        <div className="flex flex-wrap gap-4">
          <ButtonLink href={'/fragrance/' + fragrance.name} variant="outline">
            Discover
          </ButtonLink>
          <AddToCartButton id={fragrance.name} showQuantityControls={false} />
        </div>
      </FadeIn>
    </FadeIn>
  );
}

export default FragranceAd;
