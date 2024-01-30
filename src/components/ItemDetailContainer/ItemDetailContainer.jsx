import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getProductById(id)
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => console.error(error));
  }, [id]);


  return (
    <div className='margin'>
    <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;

