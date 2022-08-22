import { useState } from "react";
import { useCartContext } from "./CartContex";
import { 
  addDoc, 
  collection, 
  getFirestore
   
} from "firebase/firestore";


function Cart() {
  const [dataForm, setDataForm] = useState({
    email: "",
    name: "",
    phone: "",
  });
  const [id, setId] = useState("");

  const { cartList, vaciarCart, precioTotal, removeItem } = useCartContext();
  /************* */

  console.log("cartList", cartList);

  /************** */
  // fucntion {}
  const generarOrden = (e) => {
    e.preventDefault();
    // Nuevo objeto de orders
    let orden = {};

    orden.buyer = dataForm;
    orden.date = new Date();
    orden.total = precioTotal();

    orden.items = cartList.map((cartItem) => {
      const id = cartItem.id;
      const nombre = cartItem.title;
      const precio = cartItem.precio * cartItem.cantidad;

      return { id, nombre, precio};
    });
    console.log("orden", orden);

    const db = getFirestore()
    const queryCollectionSet = collection(db, 'orden')
    addDoc(queryCollectionSet, orden)
    .then(resp => setId(resp.id))
    .catch(err => console.error(err))
    .finally(() => console.log('termino '))

  };

  const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };

  console.log(dataForm);

  return (
    <div className="buyContainer">
      {id.length !== ""}
      {cartList.map((item) => (
        <>
          <li key={item.id}>
            <b>Producto: </b> {item.title} - <b>Precio: $</b>
            {item.precio} - <b>Cantidad: </b>
            {item.cantidad}
            <span> </span>
            <button onClick={() => removeItem(item.id)}> X </button> <hr></hr>
          </li>
        </>
      ))}

      <div>
        <b>Total: $</b>
        <>{precioTotal()}</>
      </div>
      <hr />
      <button onClick={vaciarCart}>VaciarCarrto</button>
      <hr/>
      <form onSubmit={generarOrden} className="formBuy" id="form">
        <input
          type="text"
          name="name"
          placeholder="name"
          value={dataForm.name}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="phone"
          placeholder="tel"
          value={dataForm.phone}
          onChange={handleChange}
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="email"
          value={dataForm.email}
          onChange={handleChange}
        />
        <br /><br />
        {/* <button>Generar Orden</button> */}
        <button>Terminar Compra</button>
      </form>
    </div>
  );
}

export default Cart;
