import ItemCount from "../components/ItemCount"

const onAdd=(count)=>alert(`Agregaste ${count} item(s) al carrito`);


export default function ItemDetail({productos}) {
   
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
                <ItemCount initial={1} stock={6} onAdd={onAdd}/>
            </section>
            
        </div>
      )
    
}