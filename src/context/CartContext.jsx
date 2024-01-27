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

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};
