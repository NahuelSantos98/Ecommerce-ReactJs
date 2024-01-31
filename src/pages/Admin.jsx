import React from "react";
import {products} from '../../asyncMock'
import {db} from '../services/firebaseConfig'
import { collection, addDoc } from "firebase/firestore";

const productsRef = collection(db, 'products')
 
const handleUpload = ()=>{
    products.forEach(prod => {
        addDoc(productsRef, prod)
    });
}

const Admin = ()=>{
    return <div onClick={()=>handleUpload()}>Subir Productos</div>
}
export default Admin;