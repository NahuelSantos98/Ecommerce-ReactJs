import React from 'react';
import './ItemDetail.css'
import Counter from '../Counter/Counter';

const ItemDetail = ({ product }) => {
const styleLoading = {fontSize: "5rem", color: "white", textAlign: "center" }

  if (!product) {
    return <p style={styleLoading}>Loading...</p>;
  }

  return (
    <div>
      <article className='contenedor-item'>
        <header className='item-header'>
          <h3>{product.name}</h3>
        </header>
        <picture className='item-contenedor-img'>
          <img src={product.img} alt={product.name} />
        </picture>
        <section className='item-contenedor-info'>
          <p className='item-info'>Precio: ${product.price}</p>
          <p className='item-info'>Stock: {product.stock}</p>
          <p>{product.description}</p>
        </section>
        <section className='item-counter'>
          <Counter
            initial={0}
            stock={product.stock}
            onAdd={(quantity) =>
              console.log(`La cantidad de prod solicitado es: `, quantity)
            }
          />
        </section>
      </article>
    </div>
  );
};

export default ItemDetail;
