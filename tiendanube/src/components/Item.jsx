import React from "react";

export default function Item({ producto }) {
  return (
    <figure className="card">
        <img src={producto.url} alt="animals" className="imgCard"/>
        <figcaption>Producto</figcaption>
    </figure>

  );
}