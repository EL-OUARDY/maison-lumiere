import { LucideIcon } from 'lucide-react';

export interface IFragrance {
  name: string;
  description: string;
  features: { label: string; icon: LucideIcon }[];
  price: number;
  img: string;
  bottleImg: string;
}

export interface ICartItem {
  name: string;
  price: number;
  img: string;
  quantity: number;
}
