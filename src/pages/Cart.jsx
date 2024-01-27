import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from '../context/CartContext';

const Cart = () => {
    const { cart, emptyCart } = useContext(CartContext);
    console.log(cart);

    return (
        <div>
            <h2>Tu compra: </h2>
            {cart.length === 0 ? (
                <h3>Tu carrito está vacío...</h3>
            ) : (
                <>
                    {cart.map((item) => (
                        <div key={item.id}>
                            <h4>{item.name}</h4>
                            <picture className='item-contenedor-img'>
                                <img src={item.img} alt={item.name} />
                            </picture>
                            <p>Precio: ${item.price}</p>
                            <p>Cantidad: {item.quantity}</p>
                            <button>Trash</button>
                        </div>
                    ))}
                    <h3>Total compra $</h3>
                    <hr />
                    <button onClick={() => emptyCart()}>Vaciar Carrito</button>
                </>
            )}
        </div>
    );
}

export default Cart;

