import React from 'react'
import { products } from '../../asyncMock'
import { db } from '../services/firebaseConfig'
import { collection, addDoc } from "firebase/firestore"



const productsRef = collection(db, 'products')

const handleUpload = () => {
    products.forEach((item) => {
        delete item.id
        addDoc(productsRef, item)
    })
}


const Admin = () => {
  return (
    <div onClick={()=>handleUpload()}>subir productos</div>
  )
}

export default Admin