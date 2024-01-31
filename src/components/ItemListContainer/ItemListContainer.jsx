import React, { useEffect, useState } from 'react'
import {db} from '../../services/firebaseConfig'
import {collection, query, where, getDocs} from 'firebase/firestore'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom'


const ItemListContainer = ({ greetings }) => {
    const styleGreetings = {color: "black", fontSize: 50, marginTop:40};
    const [products, setProducts] = useState([])
    const { category } = useParams()

useEffect(() => {

    const productsRef = category ? query(collection(db, 'products'), where('category', '===', category))
    : collection(db, 'products')

    getDocs(productsRef)
    .then(snapshot=>{
        const productsFormatted = snapshot.docs.map(doc=> {
            const data = doc.data()
            return {id: doc.id, ...data}
        })
        setProducts(productsFormatted)
    })
    .catch(err=> console.log(err))

}, [category])

return (
    <div className='divBody'>
        <h1 style={styleGreetings}>{greetings}</h1>
        <ItemList products={products} />
    </div>
)
}

export default ItemListContainer

