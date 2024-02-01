import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    if (isInCart(item.id)) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id
          ? item.quantity > 0
            ? { ...cartItem, quantity: item.quantity }
            : null 
          : cartItem
      ).filter(Boolean); 
      setCart(updatedCart);
    } else {
      setCart([...cart, item]);
    }
  };

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const totalQuantity = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  const totalPrice = () => {
    let total = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
    return total.toFixed(2);
  };

  const cleanCart = () => {
    setCart([]);
  };

  const removeProduct = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, isInCart, totalQuantity, totalPrice, cleanCart, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
};
