import React, { useContext, useState, useEffect } from 'react';
import './Counter.css';
import { CartContext } from '../../context/CartContext';

const Counter = ({ stock, initial, product }) => {
  const [count, setCount] = useState(initial);
  const {cart, addToCart, isInCart} = useContext(CartContext); 



  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count >= 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    const newItem = {...product, quantity:count}
    addToCart(newItem)     
}


  return (
    <div className='contenedor__counter'>
      <div className='counter'>
        <button onClick={decrement}>-</button>
        <p>{count}</p>
        <button onClick={increment}>+</button>
      </div>
      <div className='cart'>
        <button onClick={handleAddToCart} disabled={!stock}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default Counter;
