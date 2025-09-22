import React from 'react';
import FadeIn from '@/components/animations/FadeIn';
import Logo from '@/components/shared/Logo';
import Link from 'next/link';
import Image from 'next/image';

function Cart() {
  return (
    <div className="cart flex size-full flex-col" aria-label="cart">
      <div className="cart-header relative">
        <FadeIn vars={{ delay: 0.5 }}>
          <Link href="/" className="block w-fit cursor-pointer">
            <Logo className="w-42 p-2" />
          </Link>
        </FadeIn>
      </div>

      <div className="cart-body flex w-full flex-1 items-center justify-center">
        Hello Cart
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
