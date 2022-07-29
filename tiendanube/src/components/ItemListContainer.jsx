import ItemCount from "./ItemCount";
import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";

const titleStyle = {
    color: 'white',
    background: "blue",
    textAlign: "center",
    marginTop: "2rem",
    padding: "1rem"
  };

const ItemListContainer=(props)=>{
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    let productosImg =   [
      {
        id: 1,
        title: "accusamus beatae ad facilis cum similique qui sunt",
        url: "https://via.placeholder.com/600/92c952",
        
      },
      {
        id: 2,
        title: "reprehenderit est deserunt velit ipsam",
        url: "https://via.placeholder.com/600/771796",
        
      },
      {
        id: 3,
        title: "officia porro iure quia iusto qui ipsa ut modi",
        url: "https://via.placeholder.com/600/24f355",
        
      },
      {
        id: 4,
        title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
        url: "https://via.placeholder.com/600/d32776",
        
      },
      {
        id: 5,
        title: "natus nisi omnis corporis facere molestiae rerum in",
        url: "https://via.placeholder.com/600/f66b97",
        
      },
      {
        id: 6,
        title: "accusamus ea aliquid et amet sequi nemo",
        url: "https://via.placeholder.com/600/56a8c2",
        
      },
      {
        id: 7,
        title: "officia delectus consequatur vero aut veniam explicabo molestias",
        url: "https://via.placeholder.com/600/b0f7cc",
       
      },
      {
        id: 8,
        title: "aut porro officiis laborum odit ea laudantium corporis",
        url: "https://via.placeholder.com/600/54176f",
        
      },
      {
        id: 9,
        title: "qui eius qui autem sed",
        url: "https://via.placeholder.com/600/51aa97",
        
      },
      {
        id: 10,
        title: "beatae et provident et ut vel",
        url: "https://via.placeholder.com/600/810b14",
        
      },
      {
        id: 11,
        title: "nihil at amet non hic quia qui",
        url: "https://via.placeholder.com/600/1ee8a4",
        
      },
      {
        id: 12,
        title: "mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores",
        url: "https://via.placeholder.com/600/66b7d2",
        
      },
      {
        id: 13,
        title: "repudiandae iusto deleniti rerum",
        url: "https://via.placeholder.com/600/197d29",
        
      },
      {
        id: 14,
        title: "est necessitatibus architecto ut laborum",
        url: "https://via.placeholder.com/600/61a65",
        
      },
      {
        id: 15,
        title: "harum dicta similique quis dolore earum ex qui",
        url: "https://via.placeholder.com/600/f9cee5",
        
      },
      {
        id: 16,
        title: "iusto sunt nobis quasi veritatis quas expedita voluptatum deserunt",
        url: "https://via.placeholder.com/600/fdf73e",
        
      },
      {
        id: 17,
        title: "nihil at amet non hic quia qui",
        url: "https://via.placeholder.com/600/1ee8a4",
       
      },
      {
        id: 18,
        title: "nihil at amet non hic quia qui",
        url: "https://via.placeholder.com/600/1ee8a4",
        
      }
    ]; 

    const miPromesa = new Promise((res, rej) => {
      setTimeout(() => {
        res(productosImg);
      }, 2000);
    });

    miPromesa.then((res) => {
      setProductos(res);
    });
  }, []);
  return <ItemList productos={productos} />;
}

export default ItemListContainer;