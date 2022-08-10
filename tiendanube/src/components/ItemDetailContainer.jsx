import {useEffect, useState} from 'react'
import ItemDetail from "../components/ItemDetail"
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([]);
  const{id}=useParams();

  let productosHardcore =   [
    {
      id: 1,
      title: "Remera Estampada",
      url: "../assets/remeraEstampada.jfif",
      precio: 400,
      idCategoria:"remera",
      description:"Remera estampada Rey Leon",
      stock: 5
    },
    {
      id: 2,
      title: "Remera Lisa",
      url: "../assets/remeraLisa.jpg",
      precio: 800,
      idCategoria:"remera",
      description:"Remera Lisa Varios Colores",
      stock: 10
    },
    {
      id: 3,
      title: "Pantalon Jean",
      url: "../assets/pantalonJean.jpg",
      precio: 1900,
      idCategoria:"pantalon",
      description:"Pantalon Jean Corte Clasico",
      stock: 3
    },
    {
      id: 4,
      title: "Campera Impermeable",
      url: "../assets/CamperaImpermeable.jpg",
      precio: 700,
      idCategoria:"campera",
      description:"Campera Rompeviento ideal LLuvia",
      stock: 2
    },
    {
      id: 5,
      title: "Campera Polar",
      url: "../assets/CamperaPolar.jpg",
      precio: 800,
      idCategoria:"campera",
      description:"Campera Polar Invierno",
      stock: 0
    },
    {
      id: 6,
      title: "Pantalon Vestir",
      url: "../assets/pantalonVestir.jpg",
      precio: 800,
      idCategoria:"pantalon",
      description:"Pantalon de vestir chupin varios colores",
      stock: 16
    },
    {
      id: 7,
      title: "Remera Chomba",
      url: "../assets/remeraChomba.jpg",
      precio: 2100,
      idCategoria:"remera",
      description:"Remera Chomba, lisas y rayadas",
      stock: 9
     
    },
    {
      id: 8,
      title: "Bermuda",
      url: "../assets/bermuda.jpg",
      precio: 1450,
      idCategoria:"pantalon",
      description:"Bermuda mujer en colores lisos",
      stock: 3
    },
    {
      id: 9,
      title: "short de Baño",
      url: "../assets/shortBanio.jpg",
      precio: 1800,
      idCategoria:"pantalon",
      description:"Short de baños varios modelos y cortes",
      stock: 13
    },
    {
      id: 10,
      title: "Campera jean",
      url: "../assets/CamperaJean.jpg",
      precio: 4200,
      idCategoria:"campera",
      description:"Campera de jean clasica",
      stock: 5
    },
    {
      id: 11,
      title: "Remera Deportiva",
      url: "../assets/remeraDeportiva.jpg",
      precio: 800,
      idCategoria:"remera",
      description:"Remera deportiva mujer dry, varios colores",
      stock: 12
      
    },
    {
      id: 12,
      title: "Campera Deportiva",
      url: "../assets/CamperaDeportiva.jpg",
      precio: 2600,
      idCategoria:"campera",
      description:"Campera Deportiva liviana",
      stock: 20
    },
    {
      id: 13,
      title: "Pantalon deportivo",
      url: "../assets/pantalonDeportivo.jpg",
      precio: 3800,
      idCategoria:"pantalon",
      description:"Pantalon Deportivo varios colores",
      stock: 20
    },
    {
      id: 14,
      title: "Camiseta",
      url: "../assets/camiseta.jpg",
      precio: 600,
      idCategoria: "remera",
      description:"Camisetas Deportivas dry",
      stock: 20
    },
    {
      id: 15,
      title: "Campera de Cuero",
      url: "../assets/camperaCuero.jpg",
      precio: 6100,
      idCategoria: "campera",
      description:"Campera de Cuero Natural, en negro y marron",
      stock: 5
    },
    {
      id: 16,
      title: "Pantalon Capri",
      url: "../assets/pantalonCapri.jpg",
      precio: 700,
      idCategoria: "pantalon",
      description:"Pantalon Capri varios colores",
      stock: 7
    },
    {
      id: 17,
      title: "Pantalon recto",
      url: "../assets/pantalonRecto.jpg",
      precio: 1300,
      idCategoria: "pantalon",
      description:"Pantalon Recto Dama, Varios colores",
      stock: 9
    },
    {
      id: 18,
      title: "Campera termica",
      url: "../assets/camperaTermica.jpg",
      precio: 7800,
      idCategoria: "campera",
      description:"Campera Termica para Temperaturas bajo cero",
      stock: 12
    }
  ]; 
  
  
  const getItem =(id)=>{
    
    const promesa = new Promise((resolve, rej) => {
      setTimeout(() => {
        resolve(productosHardcore.filter(producto=>producto.id===JSON.parse(id)))
      }, 300);                   
    })  
    
    promesa.then((res) => {
      setProducto(...res);         
    })
  }

  useEffect(() => {   
    getItem(id);
  },[id]);

  return <ItemDetail productos={producto} />;
}

export default ItemDetailContainer