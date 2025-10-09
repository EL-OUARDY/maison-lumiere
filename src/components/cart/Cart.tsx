import React from 'react';
import FadeIn from '@/components/animations/FadeIn';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import useStore from '@/hooks/useStore';
import EmptyCart from '@/components/cart/EmptyCart';
import { MinusIcon, PlusIcon, ShoppingBagIcon, XIcon } from 'lucide-react';
import RevealText from '@/components/animations/RevealText';
import Button from '@/components/ui/button';

function Cart() {
  const { cart, addToCart, removeFromCart } = useStore();

  return (
    <div className="cart flex size-full flex-col" aria-label="cart">
      <div className="cart-body mx-auto flex w-full max-w-3xl flex-1 items-start justify-center py-8">
        {cart.length > 0 ? (
          <div className="flex w-full flex-col items-center justify-center gap-4">
            <RevealText
              as={'h3'}
              delay={0.5}
              className="font-title border-border w-full flex-1 border-b text-left text-3xl capitalize sm:text-4xl"
              text={`Your Cart`}
              hoverLine={false}
            />

            <div className="cart-items flex w-full flex-col gap-4">
              {cart.map((item, index) => (
                <FadeIn
                  vars={{ delay: index * 0.2 + 0.3, duration: 1.3 }}
                  className="cart-item group border-foreground from-secondary to-border flex h-24 w-full translate-y-16 items-center justify-center gap-6 border-l bg-gradient-to-r px-2 py-4"
                  key={index}
                >
                  <div className="cart-item-image size-12 translate-x-2 rotate-7 sm:size-16">
                    <Image
                      src={item.bottleImg}
                      alt={item.name}
                      width={1000}
                      height={1000}
                      className="size-full transition duration-300 will-change-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="flex h-full flex-1 flex-col justify-between gap-1">
                    <div className="flex items-center justify-between">
                      <div className="cart-item-name font-title text-xl capitalize">
                        <Link href={`/fragrance/${item.name}`}>
                          {item.name}
                        </Link>
                      </div>
                      <div className="cart-item-category text-muted hidden text-xs sm:block sm:text-sm">
                        Eau de Parfum
                      </div>
                    </div>

                    <div className="flex">
                      <div className="cart-item-features text-muted hidden items-center justify-center gap-2 sm:flex">
                        <p
                          key={index}
                          className="hover:text-foreground flex cursor-pointer items-center gap-1 text-[0.8rem]"
                        >
                          <item.features.mood.icon className="size-3.5" />
                          {item.features.mood.label}
                        </p>
                      </div>
                      <div className="cart-item-quantity flex flex-1 items-end justify-start gap-2 sm:justify-end">
                        <button
                          onClick={() => removeFromCart(item, false)}
                          className="hover:bg-foreground/10 hover:text-foreground border-foreground/10 text-muted flex size-7 cursor-pointer items-center justify-center rounded-md border transition duration-300"
                        >
                          <MinusIcon className="size-3" />
                        </button>
                        <div className="border-foreground/10 flex size-7 items-center justify-center rounded-md border text-sm">
                          {item.quantity}
                        </div>
                        <button
                          onClick={() => addToCart(item)}
                          className="hover:bg-foreground/10 hover:text-foreground border-foreground/10 text-muted flex size-7 cursor-pointer items-center justify-center rounded-md border transition duration-300"
                        >
                          <PlusIcon className="size-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="cart-item-price font-title w-12 text-center text-lg sm:text-xl">
                    ${item.price * item.quantity}
                  </div>
                  <button
                    onClick={() => removeFromCart(item, true)}
                    className="cart-item-controls hover:bg-foreground/10 hover:text-foreground text-muted cursor-pointer p-2 transition duration-300"
                  >
                    <XIcon className="size-5" />
                  </button>
                </FadeIn>
              ))}
            </div>

            <div className="flex w-full items-center justify-between">
              <FadeIn
                className="border-border flex w-fit translate-y-8 items-center gap-2 border-b text-xl capitalize sm:text-2xl"
                vars={{ delay: 1, duration: 1.3 }}
              >
                <span className="font-title w-full flex-1">Total:</span>
                <span className="font-title text-muted w-full flex-1">
                  $
                  {cart.reduce(
                    (accumulator, current) =>
                      accumulator + current.quantity * current.price,
                    0,
                  )}
                </span>
              </FadeIn>

              <FadeIn
                className="translate-y-8"
                vars={{ delay: 1, duration: 1.3 }}
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
          <EmptyCart />
        )}
      </div>

      <div className="cart-footer flex w-full items-center justify-between px-4 text-sm">
        <div className="flex gap-4">
          <FadeIn
            className="hover-line hover:text-foreground text-muted cursor-pointer"
            vars={{ delay: 0.8 }}
          >
            FAQ Support
          </FadeIn>
          <FadeIn
            className="hover-line hover:text-foreground text-muted cursor-pointer"
            vars={{ delay: 0.8 }}
          >
            How To Pay
          </FadeIn>
        </div>
        <FadeIn
          className="hover-line hover:text-foreground text-muted cursor-pointer"
          vars={{ delay: 0.8 }}
        >
          Returns & Warranty
        </FadeIn>
      </div>
    </div>
  );
}

export default Cart;
