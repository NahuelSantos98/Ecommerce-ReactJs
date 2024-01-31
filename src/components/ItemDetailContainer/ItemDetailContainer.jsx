import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {getDoc, doc} from 'firebase/firestore'
import {db} from '../../services/firebaseConfig'
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();



  useEffect(() => {
    const productRef = doc(db, 'products', id)
    getDoc(productRef)
    .then(snapshot=>{
      const data = snapshot.data()
      const productFormatted = {id: snapshot.id , ...data}
      setProduct(productFormatted)
    })
    .catch(err=>console.log(err))
  }, [id]);


  return (
    <div className='margin'>
    <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;

