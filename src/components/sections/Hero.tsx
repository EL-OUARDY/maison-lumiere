import React from 'react';
import { Bounded } from '@/components/shared/Bounded';
import Image from 'next/image';
import Button from '@/components/ui/button';

function Hero() {
  return (
    <Bounded className="relative min-h-screen bg-neutral-950">
      <Image
        className="absolute inset-0 scale-125 object-cover opacity-50"
        src="/img/hero-bg.jpg"
        alt=""
        fill
        priority
      />
      <div className="relative flex h-screen flex-col justify-center text-white">
        <h1 className="font-title max-w-xl text-6xl leading-none text-neutral-50 md:text-7xl lg:text-8xl">
          Effortless Elegance
        </h1>

        <p className="mt-6 max-w-md text-lg text-neutral-100">
          Maison Lumière embodies the art of fragrance — crafted for those who
          illuminate every room with their presence. A symphony of elegance,
          light, and allure.
        </p>

        <div className="mt-8">
          <Button variant="outline">Shop Now</Button>
        </div>
      </div>
    </Bounded>
  );
}

export default Hero;
