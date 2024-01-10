import {useState} from 'react'
import '../Counter/Counter.css'

const Counter = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)
    
    const increment = () => {
        if (count < stock){
            setCount(count +1 )
        }
    }
const decrement = ()=>{
    if (count >= 1){
        setCount(count-1)
    }
}

    return (
    <div className='contenedor__counter'>
        <div className='counter'>
        <button onClick={decrement}>-</button>
        <p>{count}</p>
        <button onClick={increment}>+</button>
        </div>
        <div className='cart'>
        <button onClick={() => onAdd(count)} disabled={!stock}>Agregar al carrito</button>
        </div>
    </div>
)
}

export default Counter
