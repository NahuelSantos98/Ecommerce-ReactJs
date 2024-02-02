import React, { useState } from "react";
import { doc, getDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../../services/firebaseConfig';

const Purchases = () => {
    const [valueInput, setValueInput] = useState("");
    const [order, setOrder] = useState({});

    const handleCancel = () => {
        if (!valueInput) {
            console.error('El valor de entrada es nulo o vacío.');
            return;
        }

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
                <form onSubmit={handleSubmit}>
                    <input className="orderInput" type="text" name="orderId" id="orderId" placeholder="Orden de compra" required value={valueInput} onChange={handleInputChange}/>
                    <button type="submit">Siguiente</button>
                </form>
            </div>

            {order === null && <p className="alert">No se encontró la orden, contacte al número 1234-1234 si usted no fue quien canceló la compra.</p>}

            {order && order.cart && order.cart.length > 0 && (
                <div>
                    <h2>Detalles de la orden</h2>
                    <p>Cliente: {order.clientData.name}</p>
                    <p>Email: {order.clientData.email}</p>
                    <p>Día y Hora: {order.dateHour}</p>
                    {order.cart.map((item, index) => (
                        <div key={index}>
                            <p>Categoría: {item.category}</p>
                            <p>Producto: {item.name}</p>
                            <p>Cantidad: {item.quantity}</p>
                        </div>
                    ))}
                    <button className="cancelPurchase" onClick={handleCancel}>Cancelar compra</button>
                </div>
            )}
        </div>
    );
};

export default Purchases;
