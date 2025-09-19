import { LucideIcon } from 'lucide-react';
import {
  CrownIcon,
  DropletIcon,
  FlameIcon,
  GemIcon,
  TreePineIcon,
  ZapIcon,
} from 'lucide-react';

export interface IFragrance {
  name: string;
  description: string;
  features: { label: string; icon: LucideIcon }[];
  img: string;
}

export const FRAGRANCES: IFragrance[] = [
  {
    name: 'Terra',
    description:
      'An earthy symphony that captures the essence of untamed wilderness. Rich cedarwood mingles with fresh moss and wet stone, creating a scent as enduring as ancient forests. Terra speaks to those who find power in authenticity and strength in simplicity.',
    features: [
      { label: 'Woody & Herbal', icon: TreePineIcon },
      { label: 'Grounded & Sophisticated', icon: GemIcon },
    ],
    img: '/img/terra.png',
  },
  {
    name: 'Aqua',
    description:
      'Dive into the depths of crystalline waters with this invigorating blend. Marine minerals dance with driftwood and sea salt, evoking endless horizons and hidden depths. Aqua is crafted for those who navigate life with fluid grace and boundless curiosity.',
    features: [
      { label: 'Fresh & Aquatic', icon: DropletIcon },
      { label: 'Refreshing & Invigorating', icon: ZapIcon },
    ],
    img: '/img/aqua.png',
  },
  {
    name: 'Ignis',
    description:
      "Unleash your inner flame with this captivating fusion of warmth and intensity. Smoky amber collides with black pepper and charred oak, igniting a presence that's impossible to ignore. Ignis belongs to those who embrace their passion and leave a lasting impression.",
    features: [
      { label: 'Spicy & Smoky', icon: FlameIcon },
      { label: 'Bold & Seductive', icon: CrownIcon },
    ],
    img: '/img/ignis.png',
  },
];
