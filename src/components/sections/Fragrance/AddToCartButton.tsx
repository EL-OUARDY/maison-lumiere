'use client';
import Button from '@/components/ui/button';
import useStore from '@/hooks/useStore';
import { FRAGRANCES } from '@/lib/demo';
import { IFragrance } from '@/lib/models';
import clsx from 'clsx';
import { MinusIcon, PlusIcon, ShoppingBagIcon } from 'lucide-react';
import React from 'react';

interface Props {
  id: string;
  className?: string;
  showQuantityControls?: boolean;
}

function AddToCartButton({
  className,
  id,
  showQuantityControls = true,
}: Props) {
  const { addToCart, removeFromCart, cart, setActiveMenu } = useStore();

  const fragrance = FRAGRANCES.find((f) => f.name === id);
  const cartItem = cart.find((x) => x.name === id);

  return (
    <div className={clsx('', className)}>
      {cartItem ? (
        showQuantityControls ? (
          <div className="flex gap-2">
            <div className="flex flex-1 border">
              <div className="">
                <Button
                  onClick={() => removeFromCart(fragrance as IFragrance, false)}
                  variant="icon"
                >
                  <MinusIcon className="size-4 flex-1 opacity-70" />
                </Button>
              </div>
              <span className="flex flex-1 items-center justify-center text-sm">
                {cartItem.quantity} {cartItem.quantity == 1 ? 'item' : 'items'}
              </span>
              <div className="">
                <Button
                  onClick={() => addToCart(fragrance as IFragrance)}
                  variant="icon"
                >
                  <PlusIcon className="size-4 opacity-70" />
                </Button>
              </div>
            </div>
            <div className="">
              <Button
                onClick={() => setActiveMenu('cart')}
                variant="icon-outline"
                className="w-full"
              >
                <ShoppingBagIcon className="size-4 opacity-70" />
              </Button>
            </div>
          </div>
        ) : (
          <Button
            onClick={() => setActiveMenu('cart')}
            variant="default"
            className="w-full"
          >
            <ShoppingBagIcon className="mr-2 size-4 opacity-70" />{' '}
            <span>View Cart</span>
          </Button>
        )
      ) : (
        <Button
          onClick={() => addToCart(fragrance as IFragrance)}
          variant="default"
          className="w-full"
        >
          <PlusIcon className="mr-2 size-4 opacity-70" />{' '}
          <span>Add to cart</span>
        </Button>
      )}
    </div>
  );
}

export default AddToCartButton;
