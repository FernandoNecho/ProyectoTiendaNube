import { useState } from "react";
import { useCartContext } from "./CartContex";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import Notificacion from "./Notificacion";

function Validate(dataForm) {
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+.{1,15}(.[^0-9])$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexPhone = /^.{6,12}$/;
  let errors = {};

  if (dataForm.name) {
    errors.name = !regexName.test(dataForm.name);
  } else if (!dataForm.name) {
    errors.name = true;
  }

  if (dataForm.phone) {
    errors.phone = !regexPhone.test(dataForm.phone);
  } else if (!dataForm.phone) {
    errors.phone = true;
  }

  if (dataForm.email) {
    errors.email = !regexEmail.test(dataForm.email);
  } else if (!dataForm.email) {
    errors.email = true;
  }

  return errors;
}

function Cart() {
  const [dataForm, setDataForm] = useState({
    email: "",
    name: "",
    phone: "",
  });
  const [id, setId] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState(false);
  const [notification, setNotification] = useState(false);
  const { cartList, vaciarCart, precioTotal, removeItem, setCartList } =
    useCartContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length !== 0) {
      setErrors(Validate(dataForm));

      //Verifico que todos los campos esten en false,[que no haya error o campop vacio]
      if (!errors.name && !errors.phone && !errors.email) {
        setLoading(true);

        // Nuevo objeto de orders
        let orden = {};

        orden.buyer = dataForm;
        orden.date = new Date();
        orden.total = precioTotal();

        orden.items = cartList.map((cartItem) => {
          const id = cartItem.id;
          const nombre = cartItem.title;
          const precio = cartItem.precio * cartItem.cantidad;

          return { id, nombre, precio };
        });

        const db = getFirestore();
        const queryCollectionSet = collection(db, "orden");
        addDoc(queryCollectionSet, orden)
          .then((resp) => {
            setLoading(false);
            setId(resp.id);
            setDataForm({});
            setCartList([]);
            setNotification(true)
          })
          .catch((err) => console.error(err))
          .finally(() => console.log("termino "));
      }
    } else {
      setErrors(Validate(dataForm));
    }
  };
  const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(Validate(dataForm));
  };

  const handleKeyUp = (e) => {
    handleChange(e);
    setTitle({
      ...title,
      [e.target.name]: e.target.title,
    });
    setErrors(Validate(dataForm));
  };

  /***************** */

  /***************** */
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
      <hr />
      {loading ? (
        <img src="../assets/loader.svg" alt="Cargando" className="loaderLogo" />
      ) : (notification?<Notificacion />:
        <form onSubmit={handleSubmit} className="formBuy" id="form">
          <input
            type="text"
            name="name"
            placeholder="Escribe tu nombre"
            title="Nombre debe contener solo letras "
            value={dataForm.name}
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyUp={handleKeyUp}
            required
          />
          {errors.name ? (
            <span className="isActive errorInput">
              {title.name || "Campo Vacio"}
            </span>
          ) : (
            <span className="none"></span>
          )}

          <input
            type="number"
            name="phone"
            placeholder="Telefono de contacto"
            title="Ingrese un telefono Valido(min 6 caracteres)"
            value={dataForm.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyUp={handleKeyUp}
            required
          />
          {errors.phone ? (
            <span className="isActive errorInput">
              {title.phone || "Campo Vacio"}
            </span>
          ) : (
            <span className="none"></span>
          )}

          <input
            type="email"
            name="email"
            placeholder="email de contacto"
            title="Formato  de Email Incorrecto"
            value={dataForm.email}
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyUp={handleKeyUp}
            required
          />
          {errors.email ? (
            <span className="isActive errorInput">
              {title.email || "Campo Vacio"}
            </span>
          ) : (
            <span className="none"></span>
          )}

          {/* <button>Generar Orden</button> */}
          <input type="submit" value="Terminar compra" onClick={handleSubmit} />
        </form>
      )}
    </div>
  );
}

export default Cart;
