import React from "react";


export default function Item({ producto }) {
  
  return (
    <figure className="card">
      
        <img src={producto.url} alt={producto.title} className="imgCard" />
        <figcaption>
          {producto.title}
          <p className="price">Precio: ${producto.precio}</p>
          <p className="detail">Detalles del Producto</p>
        </figcaption>
    </figure>

  );
}