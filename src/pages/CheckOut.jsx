import React, { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { addDoc, collection, getDoc, updateDoc, doc } from 'firebase/firestore';
import { db } from '../services/firebaseConfig';
import { validationForm } from '../services/validationForm';
import './css/CheckOut.css';

const CheckOut = () => {
  const { cart, cleanCart, totalQuantity } = useContext(CartContext);
  const ordersRef = collection(db, 'orders');
  const [values, setValues] = useState({
    name: '',
    address: '',
    email: '',
  });
  const [orderId, setOrderId] = useState(null);

  const handleInputChange = (evt) => {
    setValues({
      ...values,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const validationResult = validationForm(values);

    if (validationResult === true) {
      const order = {
        cart: cart.map(item => ({
          name: item.name,
          category: item.category,
          quantity: item.quantity
        })),
        clientData: values,
        dateHour: new Date().toLocaleString(),
        total: totalQuantity(),
      };

      addDoc(ordersRef, order)
        .then(doc => {
          setOrderId(doc.id);
          cleanCart();
        })
        .catch(err=>console.log("Firebase NO esta andando: ", err));
    }

    cart.forEach( item => {
      const docRef = doc(db, 'products', item.id)
      
      getDoc(docRef)
        .then(doc=>{
          let stock = doc.data().stock
          if (stock - item.quantity >= 0){
            updateDoc(docRef, {stock: stock - item.quantity})
          }else{
            alert("No hay stock del producto: " , doc.data().name)
          }
        })
        .catch(err=>console.log(err))
    });


  };


  if (orderId) {
    return (
      <div className='centrar confirmed'>
        <h3>Su compra ha sido confirmada:</h3>
        <p>Su orden de compra es: <span>{orderId}</span></p>
        <p>Guardese el numero de compra para ver la informacion luego</p>
        <Link to="/"><button className='catalogoBtn'>Seguir navegando</button></Link>
        <Link to="/purchases"><button className='purchasesBtn'>Ver compras</button></Link>
      </div>
    );
  }
  if (cart.length === 0) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <div className="centrar ">
        <form className='form-container' onSubmit={handleSubmit}>
          <h2>Confirmar tu compra</h2>
          <input type="text" className="form-input" name="name" id="name" placeholder="Ingrese su nombre" required onChange={handleInputChange} />
          <input type="text" className="form-input" name="address" id="address" placeholder="Ingrese su direccion" required onChange={handleInputChange} />
          <input type="email" className="form-input" name="email" id="email" placeholder="Ingrese su email" required onChange={handleInputChange} />
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
