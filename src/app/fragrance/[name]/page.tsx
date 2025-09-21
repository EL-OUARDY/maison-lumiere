import React from 'react';
import { Bounded } from '@/components/shared/Bounded';
import Button from '@/components/ui/button';
import FragranceFeatures from '@/components/sections/Fragrance/FragranceFeatures';
import { FRAGRANCES } from '@/lib/demo';
import { PlusIcon, StarIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface Params {
  name: string;
}

async function Fragrance({ params }: { params: Promise<Params> }) {
  const { name } = await params;
  const fragrance = FRAGRANCES.find((f) => f.name === name);
  const otherFragrances = FRAGRANCES.filter((f) => f.name !== name);

  if (!fragrance) return;

  return (
    <>
      <Bounded className="flex min-h-screen items-center justify-center bg-neutral-900 py-20">
        <div className="grid grid-cols-1 items-center lg:grid-cols-2">
          <div className="image relative flex justify-center">
            <Image
              src={fragrance.bottleImg}
              alt={fragrance.name}
              width={1000}
              height={1000}
              priority
              className="relative z-10"
            />

            {/* bottle reflection */}
            <Image
              src={fragrance.bottleImg}
              alt={fragrance.name}
              width={1000}
              height={1000}
              priority
              className="absolute top-[94%] -scale-y-100 [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_70%,rgba(0,0,0,.15)_100%)]"
            />
          </div>
          <div className="relative z-10 mt-10 grid size-fit lg:mt-0">
            <h3 className="font-title mb-4 border-b border-neutral-700 pb-4 text-4xl capitalize md:text-5xl">
              {fragrance.name}
            </h3>

            <p className="mb-8 text-base font-semibold text-gray-300">
              Eau de Parfum
            </p>

            <div className="mb-8 text-lg text-gray-300">
              {fragrance.description}
            </div>

            <FragranceFeatures features={fragrance.features} className="mb-8" />

            <p className="mb-6 text-3xl font-light">${fragrance.price}</p>

            <Button variant="default">
              <PlusIcon className="mr-2 size-4 opacity-70" />{' '}
              <span>Add to cart</span>
            </Button>

            <div className="flex items-center gap-4 border-t border-neutral-700 pt-6">
              <a href="#" className="hover:text-neutral-300">
                817 total reviews
              </a>
              <div className="flex">
                {[...Array(4)].map((_, i) => (
                  <StarIcon key={i} className="size-5 fill-white stroke-0" />
                ))}
                <StarIcon className="size-5 fill-white/50 stroke-0" />
              </div>
              <span>4/5</span>
            </div>
          </div>
        </div>
      </Bounded>

      {/* You may also like */}
      <Bounded>
        <div className="container mx-auto px-4 py-20">
          <h2 className="font-title mb-8 text-3xl text-white md:text-4xl">
            You may also like
          </h2>

          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {otherFragrances.map((fragrance) => (
              <li key={fragrance.name} className="border border-white/40 p-8">
                <Link href={`/fragrance/${fragrance.name}`}>
                  <div className="relative aspect-square w-full transition-transform duration-500 group-hover:scale-105">
                    <Image
                      src={fragrance.bottleImg}
                      alt={fragrance.name}
                      width={600}
                      height={600}
                      className="size-full"
                    />
                  </div>

                  <div className="mt-8 space-y-1 text-white">
                    <h3 className="font-title text-2xl capitalize">
                      {fragrance.name}
                    </h3>
                    <p className="text-sm text-neutral-400">Eau de Parfum</p>
                    <p className="text-base font-light">${fragrance.price}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Bounded>
    </>
  );
}

export default Fragrance;
