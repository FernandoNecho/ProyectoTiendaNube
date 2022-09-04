import"./Modal.css";

export default function Modal({ children, isOpen, closeModal }) {
  return (
    <article className={`modal ${isOpen && "isOpen"}`}>
      <div className="modalContainer">
        <button className="modalClose" onClick={closeModal}>X</button>
        {children}
      </div>
    </article>
  );
}
