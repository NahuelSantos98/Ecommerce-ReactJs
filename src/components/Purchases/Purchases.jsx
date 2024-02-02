import React, { useState } from "react";
import { doc, getDoc, collection } from 'firebase/firestore';
import { db } from '../../services/firebaseConfig';

const Purchases = () => {
    const [valueInput, setValueInput] = useState("");
    const [order, setOrder] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();

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

            {order === null && <p>No se encontró la orden, contacte al número 1234-1234 para más información</p>}

            {order && order.cart && order.cart.length > 0 && (
                <div>
                    <h2>Detalles de la orden</h2>
                    <p>Cliente: {order.clientData.name}</p>
                    <p>Email: {order.clientData.email}</p>
                    <p>Dia y Hora: {order.dateHour}</p>
                    {order.cart.map((item, index) => (
                        <div key={index}>
                            <p>Category: {item.category}</p>
                            <p>Producto: {item.name}</p>
                            <p>Cantidad: {item.quantity}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Purchases;
