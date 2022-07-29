import React from "react";
import Item from "./Item";

export default function ItemList({ productos }) {
  return (
    <>
    <article className="cards">
        {productos.map((producto) => (
        <Item key={producto.id} producto={producto} />
        ))}
    </article>
      
    </>
  );
}