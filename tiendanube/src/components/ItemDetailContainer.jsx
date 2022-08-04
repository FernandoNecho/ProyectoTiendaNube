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
      idCategoria: "campera",
    }
  ]; 
  
  
  const getItem =(id)=>{
    
    const promesa = new Promise((resolve, rej) => {
      setTimeout(() => {
        //resolve(productosHardcore)
        resolve(productosHardcore.filter(producto=>producto.id===JSON.parse(id)))
        console.log(id)
      }, 300);                   
    })  
    
    promesa.then((res) => {
      setProducto(...res);
          
    })
  }

  useEffect(() => {   
      getItem(id)
  }, [id]);
  return <ItemDetail productos={producto} />;
}

export default ItemDetailContainer