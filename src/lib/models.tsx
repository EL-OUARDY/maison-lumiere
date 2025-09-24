import { LucideIcon } from 'lucide-react';

export interface IFragrance {
  name: string;
  description: string;
  features: {
    profile: { label: string; icon: LucideIcon };
    mood: { label: string; icon: LucideIcon };
  };
  price: number;
  img: string;
  bottleImg: string;
}

export interface ICartItem extends IFragrance {
  quantity: number;
}
