import {useState} from 'react'

const ItemCount = ({ initial, stock, onAdd }) => {
    const [ count, setCount ] = useState(initial)

    const sumar = () => {
        if (count < stock) {
            setCount( count+1 )
        }
    }
    const restar = () => {
        if (count > initial) {
            setCount( count - 1 )
        }
    }

    const agregar = () => {
        onAdd( count )
    }

    return (
        <div className='addCart'>
            <div className='countItem'>
                <button onClick={restar}> - </button>
                <p> { count } </p>
                <button onClick={sumar}> + </button>
            </div>          
            <button onClick={ agregar } className="addBtn">Add to Cart</button>
        </div>
    )
}

export default ItemCount
