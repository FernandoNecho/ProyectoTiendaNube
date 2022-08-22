import { createContext, useState, useContext } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

function CartContextProvider({ children }) {
  const [cartList, setCartList] = useState([]);

  const agregarCart = (item) => {
    //compruebo si el item no se agrego al cart
    if (isInCart(item)) {
      setCartList([...cartList, item]);
    }
  };

  const isInCart = (item) => {
    return cartList.find((itemFind) => (itemFind.id === item.id)) === undefined;
  };

  const precioTotal = () => {
    return cartList.reduce(
      (acum, prod) => acum + prod.cantidad * prod.precio,
      0
    );
  };
  const cantidadTotalItem = () => {
    return cartList.reduce((acum, prod) => (acum += prod.cantidad), 0); // acum = acum + cantidad
  };

  const removeItem = (id) => {
    setCartList(cartList.filter((item) => item.id !== id));
  };

  const vaciarCart = () => {
    setCartList([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        agregarCart,
        vaciarCart,
        precioTotal,
        removeItem,
        cantidadTotalItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
