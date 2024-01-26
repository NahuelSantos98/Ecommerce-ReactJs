import React, { useEffect, useState } from 'react'
import { getProducts, getProductsByCategory } from '../../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greetings }) => {
    const styleGreetings = {color: "black", fontSize: 50, marginTop:40};
    const [products, setProducts] = useState([])
    const { category } = useParams()


useEffect(() => {
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
    <div>
        <h1 style={styleGreetings}>{greetings}</h1>
        <ItemList products={products} />
    </div>
)
}

export default ItemListContainer

