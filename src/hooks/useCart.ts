import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, Product } from '../types';
import { calculateCartTotal, validateQuantity } from '../utils/cartCalculations';

interface CartStore {
  items: CartItem[];
  itemCount: number;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => boolean;
  total: number;
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      itemCount: 0,
      total: 0,
      addToCart: (product) =>
        set((state) => {
          const existingItem = state.items.find((item) => item.id === product.id);
          if (existingItem) {
            if (!validateQuantity(existingItem.quantity + 1)) {
              return state;
            }
            const updatedItems = state.items.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
            return {
              items: updatedItems,
              itemCount: state.itemCount + 1,
              total: calculateCartTotal(updatedItems),
            };
          }
          const updatedItems = [...state.items, { ...product, quantity: 1 }];
          return {
            items: updatedItems,
            itemCount: state.itemCount + 1,
            total: calculateCartTotal(updatedItems),
          };
        }),
      removeFromCart: (productId) =>
        set((state) => {
          const itemToRemove = state.items.find((item) => item.id === productId);
          if (!itemToRemove) return state;
          
          const updatedItems = state.items.filter((item) => item.id !== productId);
          return {
            items: updatedItems,
            itemCount: state.itemCount - itemToRemove.quantity,
            total: calculateCartTotal(updatedItems),
          };
        }),
      updateQuantity: (productId, quantity) =>
        set((state) => {
          if (!validateQuantity(quantity)) {
            return state;
          }
          
          const item = state.items.find((item) => item.id === productId);
          if (!item) return state;
          
          const quantityDiff = quantity - item.quantity;
          const updatedItems = state.items.map((item) =>
            item.id === productId ? { ...item, quantity } : item
          );
          
          return {
            items: updatedItems,
            itemCount: state.itemCount + quantityDiff,
            total: calculateCartTotal(updatedItems),
          };
        }),
    }),
    {
      name: 'cart-storage',
    }
  )
);