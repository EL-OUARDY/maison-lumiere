import React from 'react';
import FadeIn from '@/components/animations/FadeIn';
import Logo from '@/components/shared/Logo';
import Link from 'next/link';
import Image from 'next/image';
import useStore from '@/hooks/useStore';
import EmptyCart from '@/components/cart/EmptyCart';
import { Span } from 'next/dist/trace';
import { ArrowRightIcon, Trash2Icon } from 'lucide-react';
import RevealText from '@/components/animations/RevealText';
import FragranceFeatures from '@/components/sections/Fragrance/FragranceFeatures';

interface Props {
  onClose: () => void;
}

function Cart({ onClose }: Props) {
  const { cart, addToCart, removeFromCart, clearCart } = useStore();

  return (
    <div className="cart flex size-full flex-col" aria-label="cart">
      <div className="cart-header relative">
        <FadeIn vars={{ delay: 0.5 }}>
          <Link href="/" className="block w-fit cursor-pointer">
            <Logo className="w-42 p-2" />
          </Link>
        </FadeIn>
      </div>

      <div className="cart-body mx-auto flex w-full max-w-2xl flex-1 items-center justify-center">
        {cart ? (
          <div className="flex w-full flex-col items-center justify-center gap-4">
            <RevealText
              as={'h3'}
              delay={0.4}
              className="font-title w-full border-b border-neutral-700 pb-2 text-4xl capitalize md:text-5xl"
              text={`Cart (${cart.length})`}
              hoverLine={false}
            />

            <div className="cart-items flex w-full flex-col gap-4">
              {cart.map((item, index) => (
                <div
                  className="cart-item flex h-32 w-full items-center justify-center gap-4 border border-l-2 border-white/40 p-4"
                  key={index}
                >
                  <div className="cart-item-image size-24 border">
                    <Image
                      src={item.img}
                      alt={item.name}
                      width={600}
                      height={600}
                      className="size-full border"
                    />
                  </div>
                  <div className="flex h-full flex-1 flex-col justify-between gap-1 border">
                    <div className="flex items-center justify-between">
                      <div className="cart-item-name font-title text-2xl capitalize md:text-3xl">
                        {item.name}
                      </div>
                      <div className="cart-item-category text-base font-semibold text-gray-300">
                        Eau de Parfum
                      </div>
                    </div>

                    {/* <FragranceFeatures features={fragrance.features} className="mb-8" /> */}
                  </div>
                  <div className="cart-item-price font-title text-2xl text-[#9f6b66] md:text-3xl">
                    ${item.price}
                  </div>
                  <button className="cart-item-controls cursor-pointer p-2 text-neutral-400 transition duration-300 hover:bg-white/10 hover:text-white">
                    <Trash2Icon className="size-5" />
                  </button>
                </div>
              ))}
            </div>

            <div className="flex w-full items-center justify-end">
              <FadeIn
                className="hover-line flex translate-y-8 cursor-pointer items-center justify-end text-sm text-gray-300 hover:text-white"
                vars={{ delay: 0.7, duration: 1.3 }}
              >
                <span onClick={onClose}>Continue shopping</span>
                <ArrowRightIcon className="size-5" />
              </FadeIn>
            </div>
          </div>
        ) : (
          <EmptyCart onClose={onClose} />
        )}
      </div>

      <div className="cart-footer flex w-full items-center justify-between px-4 text-sm">
        <div className="flex gap-4">
          <FadeIn
            className="hover-line cursor-pointer text-gray-300 hover:text-white"
            vars={{ delay: 0.8 }}
          >
            FAQ Support
          </FadeIn>
          <FadeIn
            className="hover-line cursor-pointer text-gray-300 hover:text-white"
            vars={{ delay: 0.8 }}
          >
            How To Pay
          </FadeIn>
        </div>
        <FadeIn
          className="hover-line cursor-pointer text-gray-300 hover:text-white"
          vars={{ delay: 0.8 }}
        >
          Returns & Warranty
        </FadeIn>
      </div>
    </div>
  );
}

export default Cart;
