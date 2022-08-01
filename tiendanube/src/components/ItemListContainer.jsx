
import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from 'react-router-dom'


const ItemListContainer=(props)=>{
  const [productos, setProductos] = useState([]);
  const{idCategoria}=useParams();

  useEffect(() => {
    let productosImg =   [
      {
        id: 1,
        title: "Remera Estampada",
        url: "../assets/remeraEstampada.jfif",
        precio: 800,
        idCategoria:"remera",
      },
      {
        id: 2,
        title: "Remera Lisa",
        url: "../assets/remeraLisa.jpg",
        precio: 800,
        idCategoria:"remera"
        
      },
      {
        id: 3,
        title: "Pantalon Jean",
        url: "../assets/pantalonJean.jpg",
        precio: 800,
        idCategoria:"pantalon"
      },
      {
        id: 4,
        title: "Campera Impermeable",
        url: "../assets/CamperaImpermeable.jpg",
        precio: 800,
        idCategoria:"campera"
      },
      {
        id: 5,
        title: "Campera Polar",
        url: "../assets/CamperaPolar.jpg",
        precio: 800,
        idCategoria:"campera"
      },
      {
        id: 6,
        title: "Pantalon Vestir",
        url: "../assets/pantalonVestir.jpg",
        precio: 800,
        idCategoria:"pantalon"
      },
      {
        id: 7,
        title: "Remera Chomba",
        url: "../assets/remeraChomba.jpg",
        precio: 800,
        idCategoria:"remera"
       
      },
      {
        id: 8,
        title: "Bermuda",
        url: "../assets/bermuda.jpg",
        precio: 800,
        idCategoria:"pantalon"
      },
      {
        id: 9,
        title: "short de Baño",
        url: "../assets/shortBanio.jpg",
        precio: 800,
        idCategoria:"pantalon"
      },
      {
        id: 10,
        title: "Campera jean",
        url: "../assets/CamperaJean.jpg",
        precio: 800,
        idCategoria:"campera"
      },
      {
        id: 11,
        title: "Remera Deportiva",
        url: "../assets/remeraDeportiva.jpg",
        precio: 800,
        idCategoria:"remera"
        
      },
      {
        id: 12,
        title: "Campera Deportiva",
        url: "../assets/CamperaDeportiva.jpg",
        precio: 800,
        idCategoria:"campera"
      },
      {
        id: 13,
        title: "Pantalon deportivo",
        url: "../assets/pantalonDeportivo.jpg",
        precio: 800,
        idCategoria:"pantalon"
      },
      {
        id: 14,
        title: "Camiseta",
        url: "../assets/camiseta.jpg",
        precio: 800,
        idCategoria: "remera"
      },
      {
        id: 15,
        title: "Campera de Cuero",
        url: "../assets/camperaCuero.jpg",
        precio: 800,
        idCategoria: "campera"
      },
      {
        id: 16,
        title: "Pantalon Capri",
        url: "../assets/pantalonCapri.jpg",
        precio: 800,
        idCategoria: "pantalon"
      },
      {
        id: 17,
        title: "Pantalon recto",
        url: "../assets/pantalonRecto.jpg",
        precio: 800,
        idCategoria: "pantalon"
      },
      {
        id: 18,
        title: "Campera termica",
        url: "../assets/camperaTermica.jpg",
        precio: 800,
        idCategoria: "campera"
      }
    ]; 

    const miPromesa = new Promise((res, rej) => {
      setTimeout(() => {
        if (!idCategoria) {
          res(productosImg);
          
        } else {
          res(productosImg.filter(productos=>productos.idCategoria===idCategoria))
        }
      }, 500);
    });

    miPromesa.then((res) => {
      setProductos(res);
    });
  }, [idCategoria]);
  return <ItemList productos={productos} />;
}

export default ItemListContainer;