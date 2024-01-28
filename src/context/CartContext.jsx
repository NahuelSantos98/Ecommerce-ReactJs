import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
    
  const addToCart = (item)=>{
        setCart([...cart, item])
    }
    const isInCart = (id)=>{
      return cart.some((item)=> item.id === id)
    }

    const totalQuantity = () => {
      return cart.reduce((acc, item) => acc + item.quantity, 0);
    }
    const totalPrice = ()=>{
      return cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
    }
    const cleanCart = ()=>{
      setCart([])
    }
    const removeProduct = (id)=>{
      setCart(cart.filter((item)=> item.id !== id))
    }
  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, isInCart, totalQuantity, totalPrice, cleanCart, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
};
