import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './css/CheckOut.css';

const CheckOut = () => {
  const { cart } = useContext(CartContext);
  const [values, setValues] = useState({
    name: '',
    address: '',
    email: '',
  });
console.log(values)

  const handleSubmit = () => {
    // Lógica para manejar la confirmación de la compra
  };

  const handleInputChange = (evt) => {
    setValues({
      ...values,
      [evt.target.name]: evt.target.value,
    });
  };

  return (
    <>
      {cart.length === 0 ? (
        <div className='centrar'>
              <h3 className='empty vacio'>Tu carrito está vacío...</h3>
       <Link to="/"><button>Volver</button></Link>
        </div>
   
      ) : (
        <div className="centrar">
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
      )}
    </>
  );
};

export default CheckOut;
