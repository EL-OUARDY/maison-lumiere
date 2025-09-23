import React from 'react';
import FadeIn from '@/components/animations/FadeIn';
import Link from 'next/link';
import Image from 'next/image';
import useStore from '@/hooks/useStore';
import EmptyCart from '@/components/cart/EmptyCart';
import {
  ArrowLeftIcon,
  MinusIcon,
  PlusIcon,
  ShoppingBagIcon,
  XIcon,
} from 'lucide-react';
import RevealText from '@/components/animations/RevealText';
import Button from '@/components/ui/button';
import LogoIcon from '@/components/shared/LogoIcon';

interface Props {
  onClose: () => void;
}

function Cart({ onClose }: Props) {
  const { cart, addToCart, removeFromCart } = useStore();

  return (
    <div className="cart flex size-full flex-col" aria-label="cart">
      <div className="cart-header relative">
        <FadeIn vars={{ delay: 0.5 }}>
          <Link href="/" className="block w-fit cursor-pointer">
            <LogoIcon className="text-neutral-400 transition duration-300 hover:text-white" />
          </Link>
        </FadeIn>
      </div>

      <div className="cart-body mx-auto flex w-full max-w-2xl flex-1 items-center justify-center">
        {cart.length > 0 ? (
          <div className="flex w-full flex-col items-center justify-center gap-4">
            <RevealText
              as={'h3'}
              delay={0.5}
              className="font-title w-full flex-1 border-b border-neutral-700 text-3xl capitalize sm:text-4xl"
              text={`Your Cart`}
              hoverLine={false}
            />

            <div className="cart-items flex w-full flex-col gap-4">
              {cart.map((item, index) => (
                <FadeIn
                  vars={{ delay: index * 0.1 + 0.3, duration: 1.5 }}
                  className="cart-item group flex h-24 w-full translate-y-16 items-center justify-center gap-6 border-l border-white bg-gradient-to-r from-neutral-900 to-neutral-800 px-2 py-4"
                  key={index}
                >
                  <div className="cart-item-image size-12 translate-x-2 rotate-7 sm:size-16">
                    <Image
                      src={item.bottleImg}
                      alt={item.name}
                      width={600}
                      height={600}
                      className="size-full transition duration-300 will-change-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="flex h-full flex-1 flex-col justify-between gap-1">
                    <div className="flex items-center justify-between">
                      <div className="cart-item-name font-title text-xl capitalize">
                        {item.name}
                      </div>
                      <div className="cart-item-category text-xs text-gray-300 sm:text-sm">
                        Eau de Parfum
                      </div>
                    </div>

                    <div className="flex">
                      <div className="cart-item-features hidden items-center justify-center gap-2 text-gray-300 sm:flex">
                        {item.features.map((feature, index) => (
                          <p
                            key={index}
                            className="flex cursor-pointer items-center gap-1 text-[0.8rem] hover:text-white"
                          >
                            <feature.icon className="size-3.5" />
                            {feature.label}
                          </p>
                        ))}
                      </div>
                      <div className="cart-item-quantity flex flex-1 items-end justify-start gap-2 sm:justify-end">
                        <button
                          onClick={() => removeFromCart(item, false)}
                          className="flex size-7 cursor-pointer items-center justify-center rounded-md border border-white/10 text-neutral-400 transition duration-300 hover:bg-white/10 hover:text-white"
                        >
                          <MinusIcon className="size-3" />
                        </button>
                        <div className="flex size-7 items-center justify-center rounded-md border border-white/10 text-sm">
                          {item.quantity}
                        </div>
                        <button
                          onClick={() => addToCart(item)}
                          className="flex size-7 cursor-pointer items-center justify-center rounded-md border border-white/10 text-neutral-400 transition duration-300 hover:bg-white/10 hover:text-white"
                        >
                          <PlusIcon className="size-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="cart-item-price font-title text-lg sm:text-2xl">
                    ${item.price}
                  </div>
                  <button
                    onClick={() => removeFromCart(item, true)}
                    className="cart-item-controls cursor-pointer p-2 text-neutral-400 transition duration-300 hover:bg-white/10 hover:text-white"
                  >
                    <XIcon className="size-5" />
                  </button>
                </FadeIn>
              ))}
            </div>

            <div className="flex w-full items-center justify-between">
              <FadeIn
                className="hover-line flex w-fit translate-y-8 cursor-pointer items-center gap-1 pb-1 text-sm text-gray-300 hover:text-white"
                vars={{ delay: 0.7, duration: 1.3 }}
              >
                <ArrowLeftIcon className="size-5" />
                <span onClick={onClose}>Continue shopping</span>
              </FadeIn>

              <FadeIn
                className="translate-y-8"
                vars={{ delay: 0.7, duration: 1.3 }}
              >
                <Button variant="default" className="!px-6 !py-2 text-sm">
                  <ShoppingBagIcon className="mr-2 size-4 opacity-70" />{' '}
                  <span>
                    Checkout (
                    {cart.reduce(
                      (accumulator, current) => accumulator + current.quantity,
                      0,
                    )}
                    )
                  </span>
                </Button>
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
