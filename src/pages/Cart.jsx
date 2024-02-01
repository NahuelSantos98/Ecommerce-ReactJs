import React, { useContext } from "react";
import Counter from "../components/Counter/Counter";
import { CartContext } from '../context/CartContext';
import {Link} from 'react-router-dom'
import './css/Cart.css';

const Cart = () => {
    const { cart, totalPrice, cleanCart, removeProduct } = useContext(CartContext);

    return (
        <div className="contenedor--Cart">
            <h2 className="purchase">Tu compra: </h2>
            {cart.length !== 0 ? (
                <h3 className="totalPurchase">Compra total: ${totalPrice()}</h3>
            ) : null}
            <div className="contenedor--Info">
                {cart.length === 0 ? (
                    <>
                        <h3 className="empty">Tu carrito está vacío...</h3>
                    </>

                ) : (
                    <>
                        <div className="contenedor--Items">
                            {cart.map((item) => (
                                <div key={item.id} className="contenedor--Item">
                                    <div className="title--img--p">
                                        <div className="item--Titulo">
                                            <h4>{item.name}</h4>
                                        </div>
                                        <picture className='item-contenedor-img image '>
                                            <img src={item.img} alt={item.name} />
                                        </picture>
                                        <div className="contenedor--P">
                                            <p><span>Precio:</span> ${item.price}</p>
                                            <p><span>Cantidad:</span> {item.quantity}</p> 
                                        </div>
                                    </div>
                                    <div className="contenedor--TrashCount">
                                        <button className="buttonClear" onClick={() => removeProduct(item.id)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash-filled" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007h16z" strokeWidth="0" fill="currentColor" />
                                                <path d="M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005h4z" strokeWidth="0" fill="currentColor" />
                                            </svg>
                                        </button>
                                        <Counter stock={item.stock} product={{ ...item }} className="count"/>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="contenedor--Total">
                            <button onClick={() => cleanCart()} className="cleanCart">Vaciar Carrito</button>  
                            <Link to="/checkout"><button className="finishPurchase">Terminar la compra</button></Link>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Cart;
