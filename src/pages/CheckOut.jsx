import React, { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import {addDoc, collection} from 'firebase/firestore'
import {db} from '../services/firebaseConfig'
import './css/CheckOut.css';

const CheckOut = () => {
  const { cart, cleanCart, totalQuantity } = useContext(CartContext);
  const [values, setValues] = useState({
    name: '',
    address: '',
    email: '',
  });
const [orderId, setOrderId] = useState(null)

const ordersRef = collection(db, 'orders')
  const handleSubmit = (evt) => {
    evt.preventDefault()
    const order = {
      cart: cart.map(item => ({
        name: item.name, 
        category: item.category, 
        quantity: item.quantity
      })),
      clientData: values,
      dateHour: new Date(),
      total: totalQuantity(),
    };
    
      addDoc(ordersRef, order)
        .then(doc=>{
          setOrderId(doc.id)
          cleanCart()
        })
  };

  const handleInputChange = (evt) => {
    setValues({
      ...values,
      [evt.target.name]: evt.target.value,
    });
  };

if(orderId){
  return (<div className='centrar confirmed shake-left'>
    <h3>Su compra ha sido confirmada:</h3>
    <p>Su orden de compra es: <span>{orderId}</span></p>
    <Link to="/"><button className='catalogoBtn'>Seguir navegando</button></Link>
  </div>)
}

  if(cart.length === 0){
    return <Navigate to="/"/>
  }



  return (
    <>
        <div className="centrar ">
            <form className='form-container' onSubmit={handleSubmit}>
            <h2>Confirmar tu compra</h2>
            <input type="text" className="form-input" name="name" id="name" placeholder="Ingrese su nombre"  onChange={handleInputChange}/>
            <input type="text" className="form-input" name="address" id="address" placeholder="Ingrese su direccion"  onChange={handleInputChange}/>
            <input type="email" className="form-input" name="email" id="email" placeholder="Ingrese su email"  onChange={handleInputChange}/>
            <input type="submit" className="form-confirm" value="Confirmar" />
            <div className="returnToCart">
              <p>No estas seguro?</p>
              <Link to="/cart">Volver al carrito</Link>
            </div>
            </form>
          </div>
    </>
  );
};

export default CheckOut;
