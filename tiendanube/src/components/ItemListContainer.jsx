import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

export default function  ItemListContainer(){
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams();

  useEffect(() => {
    const db = getFirestore();
    if (idCategoria) {
      const queryColection = collection(db, "productos");
      const queryFilter = query(
        queryColection,
        where("idCategoria", "==", idCategoria)
      );
      getDocs(queryFilter)
        .then((resp) =>
          setProductos(
            resp.docs.map((productos) => ({
              id: productos.id,
              ...productos.data(),
            }))
          )
        )
        .catch((err) => console.log(err));
    } else {
      const queryColection = collection(db, "productos");
      getDocs(queryColection)
        .then((resp) =>
          setProductos(
            resp.docs.map((productos) => ({
              id: productos.id,
              ...productos.data(),
            }))
          )
        )
        .catch((err) => console.log(err));
    }
  }, [idCategoria]);
  return <ItemList productos={productos} />;
};


