
import { createContext, useState } from "react";

// Here at we create a context that will be used to store the basket
export const CartContext = createContext();

// Here are we are creating a custom hook that will be used to manage the state of the basket
export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useLocalStorage<CartItem[]>(
    "shopping-cart",
    []
  );

  // Here are we taking the state and putting it into a object that we can use in the context
  const value = {
    ticketBasket,
    setTicketBasket,
  };
  // Here we are returning the context and the children
  return <TicketBasketContext.Provider value={value}>{children}</TicketBasketContext.Provider>;