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

export default function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
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
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
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
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [idCategoria]);
  return (
    <>
      {loading ? (
        <img src="../assets/loader.svg" alt="Cargando" className="loaderLogo" />
      ) : (
        <ItemList productos={productos} />
      )}
    </>
  );
}
