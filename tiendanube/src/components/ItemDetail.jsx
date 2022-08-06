import { useState } from "react";
import ItemCount from "../components/ItemCount"
import { Link } from "react-router-dom"


export default function ItemDetail({productos}) {
   const [amount, setAmount]=useState(0)
   const onAdd=(count)=>{
    alert(`Agregaste ${count} item(s) al carrito`);
    setAmount(count)
};
    return (
        
        <div className="itemContainer">              
            <figure className="cardItem">
                <img src={productos.url} alt="item" className="imgItem"/>
                <figcaption className="titleProd">{productos.title}<br></br>Oferta: ${productos.precio}</figcaption>
            </figure>
            <section className="description">
                <h2>{productos.title}</h2>
                <p className="detalle">Remera de Leon Rey con corona colección Furious</p>
                <p>Telles: S/M/L/XL/XXL</p>
                <p>Precio: $ {productos.precio}</p>

                { amount ?
                    <Link to='/cart'>
                        <button className="addBtn">Ir al Cart</button>
                    </Link> 
                    :
                    <ItemCount initial={1} stock={10} onAdd={onAdd} />
                }
                
            </section>
            
        </div>
      )
    
}