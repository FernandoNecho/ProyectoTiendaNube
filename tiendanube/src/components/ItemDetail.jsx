import { useState } from "react";
import ItemCount from "../components/ItemCount"
import { Link } from "react-router-dom"
import { useCartContext } from "./CartContex";


export default function ItemDetail({productos}) {

   const [amount, setAmount]=useState(0)
   const { agregarCart, cartList } = useCartContext()

   const onAdd=(count)=>{
    //alert(`Agregaste ${count} item(s) al carrito`);
    setAmount(count);
    agregarCart({ ...productos, cantidad: count })
};

console.log(cartList)
    return (
        
        <div className="itemContainer">              
            <figure className="cardItem">
                <img src={productos.url} alt="item" className="imgItem"/>
                <figcaption className="titleProd">{productos.title}<br></br>Oferta: ${productos.precio}</figcaption>
            </figure>
            <section className="description">
                <h2>{productos.title}</h2>
                <p className="detalle">{productos.description}</p>
                <p>Talles: S/M/L/XL/XXL</p>
                <p>Precio: $ {productos.precio}</p>

                { amount ?
                    <Link to='/cart'>
                        <button className="addBtn">Ir al Carrito</button>
                    </Link> 
                    :
                    <ItemCount initial={1} stock={productos.stock} onAdd={onAdd} />
                }

            </section>
            
        </div>
      )
    
}