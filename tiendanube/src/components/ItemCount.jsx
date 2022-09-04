import { useState } from "react";
import { useModal } from "./useModal";
import Modal from "./Modal";


const ItemCount = ({ initial, stock, onAdd , producto}) => {
  const [count, setCount] = useState(initial);
  const [isOpen, openModal, closeModal] = useModal(false);
  
  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const restar = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };
  const agregar = () => {
    if (stock === 0) {
      openModal()
    } else {
      onAdd(count);
    }
  };

  return (
    <div className="addCart">
      <div className="countItem">
        <button onClick={restar}> - </button>
        <p> {count} </p>
        <button onClick={sumar}> + </button>
      </div>

      <button onClick={agregar} className="addBtn">
        Adherir al Carrito
      </button>
      <div>
      {isOpen &&
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <h2>"Producto sin stock"</h2>
        <p>
          {producto.title}
        </p>
        <img src={producto.url} alt={producto.title}/>
      </Modal>}
    </div>
    </div>
  );
};

export default ItemCount;
