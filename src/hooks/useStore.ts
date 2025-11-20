import { create } from 'zustand';
import { ICartItem, IFragrance } from '@/lib/models';

type Menu = 'main' | 'cart' | null;

interface IState {
  activeMenu: Menu;
  setActiveMenu: (value: Menu) => void;

  cart: ICartItem[];
  addToCart: (product: IFragrance) => void;
  removeFromCart: (product: IFragrance, all: boolean) => void;
  clearCart: () => void;
}

const useStore = create<IState>((set) => ({
  activeMenu: null,
  setActiveMenu: (value: Menu) => set({ activeMenu: value }),

  cart: [],

  addToCart: (product: IFragrance) =>
    set((state) => {
      const existing = state.cart.find((item) => item.name === product.name);

      if (existing) {
        // increase quantity
        return {
          cart: state.cart.map((item) =>
            item.name === product.name
              ? { ...item, quantity: existing.quantity + 1 }
              : item,
          ),
        };
      }

      // new product
      return { cart: [...state.cart, { ...product, quantity: 1 }] };
    }),

  removeFromCart: (product: IFragrance, all: boolean = false) =>
    set((state) => {
      const existing = state.cart.find((item) => item.name === product.name);
      if (all || existing?.quantity === 1)
        return {
          cart: state.cart.filter((item) => item.name !== product.name),
        };

      // dencrease quantity
      return {
        cart: state.cart.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        ),
      };
    }),

  clearCart: () => set({ cart: [] }),
}));

export default useStore;
