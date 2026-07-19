import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
type Product = {
  name: string;
  price: string;
  image: string;
};

type CartContextType = {
  cart: Product[];
  addToCart: (product: Product) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

type CartProviderProps = {
  children: ReactNode;
};

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    console.log("Adding product:", product);

    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      console.log("Updated cart:", updatedCart);
      return updatedCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}