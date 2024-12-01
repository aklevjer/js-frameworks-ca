import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (product, quantity) => {
        set((state) => {
          const existingProduct = state.cart.find((cartItem) => cartItem.id === product.id);

          if (existingProduct) {
            const updatedCart = state.cart.map((cartItem) =>
              cartItem.id === product.id
                ? { ...cartItem, quantity: cartItem.quantity + quantity }
                : cartItem,
            );
            return { cart: updatedCart };
          }
          return { cart: [...state.cart, { ...product, quantity: quantity }] };
        });
      },

      increaseQuantity: (productId) => {
        set((state) => {
          const updatedCart = state.cart.map((cartItem) =>
            cartItem.id === productId ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem,
          );
          return { cart: updatedCart };
        });
      },

      decreaseQuantity: (productId) => {
        set((state) => {
          const updatedCart = state.cart.map((cartItem) =>
            cartItem.id === productId ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem,
          );
          return { cart: updatedCart.filter((cartItem) => cartItem.quantity > 0) };
        });
      },

      removeFromCart: (productId) => {
        set((state) => {
          const updatedCart = state.cart.filter((cartItem) => cartItem.id !== productId);
          return { cart: updatedCart };
        });
      },

      clearCart: () => set({ cart: [] }),

      getTotalPrice: () => {
        const cart = get().cart;
        return cart.reduce((total, item) => total + item.discountedPrice * item.quantity, 0);
      },

      getSubtotalPrice: () => {
        const cart = get().cart;
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
      },

      getTotalDiscount: () => {
        return get().getSubtotalPrice() - get().getTotalPrice();
      },

      getItemsCount: () => {
        const cart = get().cart;
        return cart.reduce((count, item) => count + item.quantity, 0);
      },
    }),
    {
      name: "cart-storage",
    },
  ),
);
