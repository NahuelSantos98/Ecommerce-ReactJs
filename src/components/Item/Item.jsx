import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({product}) => {
  return (
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
      </section>
      <section className='item-detalle'>
        <Link to={`/product/${product.id}`} >
          <button className='detail'>Ver detalle</button>
        </Link>
      </section>
    </article>
  );
};

export default Item;

