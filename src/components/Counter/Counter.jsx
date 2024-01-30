import React, { useContext, useState } from 'react';
import './Counter.css';
import { CartContext } from '../../context/CartContext';

const Counter = ({ stock, product }) => {
  const [count, setCount] = useState(0);
  const { addToCart} = useContext(CartContext);

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
    const newItem = { ...product, quantity: count };
    addToCart(newItem);
  };

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
