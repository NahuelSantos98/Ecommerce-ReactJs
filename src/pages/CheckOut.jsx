import React from 'react'
import { Link } from 'react-router-dom';
import './css/CheckOut.css'

const CheckOut = ()=>{

return (
    <div className='centrar'>
   <div className='form-container'>
        <h2>Confirmar tu compra</h2>
        <input type='text' className='form-input'  name='name' id="name" placeholder='Ingrese su nombre' />
        <input type='text' className='form-input'  name='lastName' id="lastName" placeholder='Ingrese su apellido' />
        <input type='email' className='form-input'  name='email' id="email" placeholder='Ingrese su email' />
        <input type="submit" className='form-confirm' value="Confirmar" />
        <div className='returnToCart'>
        <p>No estas seguro?</p>
        <Link to="/cart">Volver al carrito</Link>
        </div>

    </div>
    </div>
 
)


}
export default CheckOut;