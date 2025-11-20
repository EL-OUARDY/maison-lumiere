import { IFragrance } from '@/lib/models';
import {
  CrownIcon,
  DropletIcon,
  FlameIcon,
  FlowerIcon,
  GemIcon,
  MoonIcon,
  TreePineIcon,
  ZapIcon,
} from 'lucide-react';

export const FRAGRANCES: IFragrance[] = [
  {
    name: 'terra',
    description:
      'An earthy symphony that captures the essence of untamed wilderness. Rich cedarwood mingles with fresh moss and wet stone, creating a scent as enduring as ancient forests. Terra speaks to those who find power in authenticity and strength in simplicity.',
    features: {
      profile: { label: 'Woody & Herbal', icon: TreePineIcon },
      mood: { label: 'Grounded & Sophisticated', icon: GemIcon },
    },
    img: '/img/terra.png',
    bottleImg: '/img/terra-bottle.png',
    price: 135,
  },
  {
    name: 'aqua',
    description:
      'Dive into the depths of crystalline waters with this invigorating blend. Marine minerals dance with driftwood and sea salt, evoking endless horizons and hidden depths. Aqua is crafted for those who navigate life with fluid grace and boundless curiosity.',
    features: {
      profile: { label: 'Fresh & Aquatic', icon: DropletIcon },
      mood: { label: 'Refreshing & Invigorating', icon: ZapIcon },
    },
    img: '/img/aqua.png',
    bottleImg: '/img/aqua-bottle.png',
    price: 110,
  },
  {
    name: 'luna',
    description:
      'A celestial fragrance that captures the mystery of twilight skies. Soft jasmine and violet intertwine with hints of midnight plum, creating a scent that feels both dreamy and enchanting. Luna is for those who embrace elegance wrapped in a veil of wonder.',
    features: {
      profile: { label: 'Floral & Mystical', icon: FlowerIcon },
      mood: { label: 'Elegant & Enigmatic', icon: MoonIcon },
    },
    img: '/img/luna.png',
    bottleImg: '/img/luna-bottle.png',
    price: 145,
  },
  {
    name: 'ignis',
    description:
      "Unleash your inner flame with this captivating fusion of warmth and intensity. Smoky amber collides with black pepper and charred oak, igniting a presence that's impossible to ignore. Ignis belongs to those who embrace their passion and leave a lasting impression.",
    features: {
      profile: { label: 'Spicy & Smoky', icon: FlameIcon },
      mood: { label: 'Bold & Seductive', icon: CrownIcon },
    },
    img: '/img/ignis.png',
    bottleImg: '/img/ignis-bottle.png',
    price: 120,
  },
];
