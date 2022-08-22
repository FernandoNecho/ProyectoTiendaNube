import { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

export default function ItemDetailContainer(){
  const [producto, setProducto] = useState([]);
  const { id } = useParams();

  const getItem = (id) => {
    const db = getFirestore();
    const queryDb = doc(db, "productos", id);
    getDoc(queryDb)
      .then((resp) => setProducto({ id: resp.id, ...resp.data() }))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getItem(id);
  }, [id]);

  return <ItemDetail productos={producto} />;
};


