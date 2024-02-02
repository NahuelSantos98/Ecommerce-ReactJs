import React, { useState } from "react";
import { doc, getDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../../services/firebaseConfig';
import './Purchases.css'
const Purchases = () => {
    const [valueInput, setValueInput] = useState("");
    const [order, setOrder] = useState({});

    const handleCancel = () => {
        const orderRef = doc(db, 'orders', valueInput);

        getDoc(orderRef)
            .then((orderDoc) => {
                if (orderDoc.exists()) {
                    return deleteDoc(orderRef);
                } else {
                    console.error('No se encontró la orden.');
                    return Promise.reject('No se encontró la orden.');
                }
            })
            .then(() => {
                setOrder(null);
                console.log('Compra cancelada exitosamente.');
            })
            .catch(error => console.error('Error al cancelar la compra:', error));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!valueInput) {
            console.error('El valor de entrada es nulo o vacío.');
            return;
        }

        const orderRef = doc(db, 'orders', valueInput);

        getDoc(orderRef)
            .then((orderDoc) => {
                if (orderDoc.exists()) {
                    setOrder(orderDoc.data());
                } else {
                    setOrder(null);
                }
            })
            .catch((err) => console.error(err));
    };

    const handleInputChange = (event) => {
        setValueInput(event.target.value);
    };

    
    
    
    
    
    
    
    return (
        <div className="contenedor-searcher">
            <div>
                <h1>Ingrese su orden de compra: </h1>
                <form onSubmit={handleSubmit} className="form-searcher">
                    <input className="orderInput" type="text" name="orderId" id="orderId" placeholder="Orden de compra" required value={valueInput} onChange={handleInputChange}/>
                    <button type="submit" className="searchBtn">Siguiente</button>
                </form>
            </div>

            {order === null && <p className="alert">No se encontró la orden, contacte al número 1234-1234 si usted <span>NO</span> fue quien canceló la compra.</p>}

            {order && order.cart && order.cart.length > 0 && (
                <div className="contenedor-infoOrder">
                    <div className="contenedor-textoOrder">
                    <h2>Detalles de la orden</h2>
                    <p><span className="clasificador">Cliente:</span>{order.clientData.name}</p>
                    <p> <span className="clasificador">Email:</span> {order.clientData.email}</p>
                    <p><span className="clasificador">Día y Hora:</span> {order.dateHour}</p>
                    <hr></hr>
                    {order.cart.map((item, index) => (
                        <div key={index}>
                            <p><span className="clasificador">Categoría:</span> {item.category}</p>
                            <p><span className="clasificador">Producto: </span>{item.name}</p>
                            <p><span className="clasificador">Cantidad: </span>{item.quantity}</p>
                            <hr></hr>
                        </div>

                    ))}
                
                        <button className="cancelPurchase" onClick={handleCancel}>Cancelar compra</button>                
                    </div>
                </div>
            )}
        </div>
    );
};

export default Purchases;
