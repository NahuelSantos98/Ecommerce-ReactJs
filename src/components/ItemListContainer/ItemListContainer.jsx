import React, { useEffect, useState } from 'react'
import { getProducts, getProductsByCategory } from '../../../asyncMock'
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

    getDocs(productsRef).then(snapshot=>{
        const data = snapshot.docs.map(doc=> doc.data())
        console.log(data)
    })

    
    if (category) {
        getProductsByCategory(category)
        .then((res) => {
            setProducts(res);
        })
    } else {
        getProducts()
        .then((res) => {
            setProducts(res);
        })
    }
}, [category])

return (
    <div className='divBody'>
        <h1 style={styleGreetings}>{greetings}</h1>
        <ItemList products={products} />
    </div>
)
}

export default ItemListContainer

