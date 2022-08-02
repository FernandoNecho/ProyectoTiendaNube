import {useEffect, useState} from 'react'
import ItemDetail from "../components/ItemDetail"
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({});
    const{id}=useParams();

  useEffect(() => {            
    let productosHardcore= 
    {
      id: 1,
      title: "Remera Estampada",
      url: "../assets/remeraEstampada.jfif",
      precio:500,
      idCategoria:"remera",
    }; 


    const getItem =()=>{
      return new Promise((res, rej) => {
        setTimeout(() => {                
          res(productosHardcore);            
        }, 2000);
      });
    }

    getItem().then((res) => {            
      setProducto(res);
    });
    /*const miPromesa =  new Promise((res, rej) => {
      setTimeout(() => {                
        res(productosHardcore);            
      }, 2000);
    });
      
    miPromesa.then((res) => {            
      setProducto(res);
    });*/
    
  }, [id]);
  return <ItemDetail productos={producto} />;
}

export default ItemDetailContainer