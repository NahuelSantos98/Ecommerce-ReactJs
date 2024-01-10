import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({products}) => {

return (
    <div className='grid-container margin'>
    {
        products.map((element)=> {
            return <Item key={element.id} product={element}/>
        })
    }
    </div>
)
}

export default ItemList