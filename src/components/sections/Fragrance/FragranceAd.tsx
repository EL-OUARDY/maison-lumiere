import React from 'react';
import { IFragrance } from '@/lib/demo';
import FadeIn from '@/components/animations/FadeIn';
import Image from 'next/image';
import Button from '@/components/ui/button';
import { PlusIcon } from 'lucide-react';
import FragranceFeatures from '@/components/sections/Fragrance/FragranceFeatures';
import ButtonLink from '@/components/ui/link';

interface Props {
  fragrance: IFragrance;
}

function FragranceAd({ fragrance }: Props) {
  return (
    <FadeIn
      className="relative z-10 grid min-h-[85vh] w-full translate-y-20 items-center justify-items-start border border-white/10 p-4 text-left md:p-14 lg:p-20"
      vars={{ duration: 1.5 }}
      start="top 60%"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={fragrance.img}
          className="object-cover opacity-40 md:opacity-100"
          alt=""
          fill
          quality={90}
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

        <p className="mb-8 text-base font-semibold text-gray-300">
          Eau de Parfum
        </p>

        <div className="mb-10 max-w-md text-lg text-gray-300">
          {fragrance.description}
        </div>

        <FragranceFeatures features={fragrance.features} className="mb-10" />

        <div className="flex flex-wrap gap-4">
          <ButtonLink href={'/fragrance/' + fragrance.name} variant="outline">
            Discover
          </ButtonLink>
          <Button variant="default">
            <PlusIcon className="mr-2 size-4 opacity-70" />{' '}
            <span>Add to cart</span>
          </Button>
        </div>
      </FadeIn>
    </FadeIn>
  );
}

export default FragranceAd;
