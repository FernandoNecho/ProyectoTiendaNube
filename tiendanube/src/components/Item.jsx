import React from "react";
import { Link } from "react-router-dom";

export default function Item({ producto }) {
  
  return (
    <figure className="card">
      
        <img src={producto.url} alt={producto.title} className="imgCard" />
        <figcaption>
          {producto.title}
          <p className="price">Precio: ${producto.precio}</p>
          <Link to={"/producto/"+producto.id}><p className="detail">Detalles del Producto</p>
          </Link>
          
        </figcaption>
    </figure>

  );
}