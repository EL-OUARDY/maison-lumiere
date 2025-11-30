import React from 'react';
import { Bounded } from '@/components/shared/Bounded';
import FragranceFeatures from '@/components/sections/Fragrance/FragranceFeatures';
import { FRAGRANCES } from '@/lib/demo';
import { StarIcon } from 'lucide-react';
import Image from 'next/image';
import { Metadata } from 'next';
import { capitalize } from '@/lib/utils';
import AddToCartButton from '@/components/sections/Fragrance/AddToCartButton';
import { Link } from 'next-view-transitions';

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
      <Bounded className="bg-background flex min-h-dvh items-center justify-center py-20">
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
            <h3 className="font-title border-border mb-4 border-b pb-4 text-4xl capitalize md:text-5xl">
              {fragrance.name}
            </h3>

            <p className="text-muted mb-4 text-base">Eau de Parfum</p>

            <div className="mb-6 text-lg">{fragrance.description}</div>

            <FragranceFeatures features={fragrance.features} className="mb-6" />

            <p className="font-title mb-6 text-3xl font-light">
              ${fragrance.price}
            </p>

            <AddToCartButton id={fragrance.name} className="mb-6" />

            <div className="border-border flex items-center gap-4 border-t pt-6">
              <a href="#" className="hover:text-muted">
                817 total reviews
              </a>
              <div className="flex">
                {[...Array(4)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className="fill-foreground size-5 stroke-0"
                  />
                ))}
                <StarIcon className="fill-foreground/50 size-5 stroke-0" />
              </div>
              <span>4/5</span>
            </div>
          </div>
        </div>
      </Bounded>

      {/* You may also like */}
      <Bounded>
        <div className="container px-4 pt-0 pb-20 md:py-20">
          <h2 className="font-title text-foreground mb-8 text-3xl md:text-4xl">
            You may also like
          </h2>

          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {otherFragrances.map((fragrance) => (
              <li
                key={fragrance.name}
                className="group border-border border p-8"
              >
                <Link href={`/fragrance/${fragrance.name}`}>
                  <div className="relative aspect-square w-full transition-transform duration-500 group-hover:scale-105">
                    <Image
                      src={fragrance.bottleImg}
                      alt={fragrance.name}
                      width={1000}
                      height={1000}
                      className="size-full"
                    />
                  </div>

                  <div className="text-foreground mt-8 space-y-1">
                    <h3 className="font-title text-2xl capitalize">
                      {fragrance.name}
                    </h3>
                    <p className="text-muted text-sm">Eau de Parfum</p>
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

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { name } = await params;
  const fragrance = FRAGRANCES.find((f) => f.name === name);

  return {
    title: capitalize(name) + ' | ' + 'Maison Lumière',
    description: fragrance?.description,
    openGraph: {
      images: [fragrance?.img || '/img/hero-bg.jpeg'],
    },
  };
}

export default Fragrance;
