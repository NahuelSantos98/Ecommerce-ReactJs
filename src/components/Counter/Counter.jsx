import React, { useContext, useState, useEffect } from 'react';
import './Counter.css';
import { CartContext } from '../../context/CartContext';

const Counter = ({ stock, initial, product }) => {
  const [count, setCount] = useState(initial);
  const {addToCart} = useContext(CartContext); 



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
    const newItem = {...product, quantity: count}  //Hace que guarde el producto y la cantidad DENTRO del objeto
    addToCart([newItem])//Se desestructura lo que habia en el cart y se agrega el nuevo item
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
