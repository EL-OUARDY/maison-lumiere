'use client';
import Button from '@/components/ui/button';
import useStore from '@/hooks/useStore';
import { FRAGRANCES } from '@/lib/demo';
import { IFragrance } from '@/lib/models';
import { PlusIcon } from 'lucide-react';
import React, { useState } from 'react';

interface Props {
  id: string;
}

function AddToCartButton({ id }: Props) {
  const [addedToCart, setAddedToCart] = useState<boolean>(false);
  const { addToCart } = useStore();

  const fragrance = FRAGRANCES.find((f) => f.name === id);

  return (
    <Button
      onClick={() => addToCart(fragrance as IFragrance)}
      variant="default"
    >
      <PlusIcon className="mr-2 size-4 opacity-70" /> <span>Add to cart</span>
    </Button>
  );
}

export default AddToCartButton;
