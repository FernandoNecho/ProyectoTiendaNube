import React from "react";
import Title from "./Title";
import { Link } from "react-router-dom";
import { useCartContext } from "./CartContex";
import CartWidget from "./CartWidget";

const Navbar = () => {
  const { cantidadTotalItem } = useCartContext();

  return (
    <div className="menu">
      <Title />
      <div className="menuRef">
        <Link to={"/"}>Home</Link>
        <Link to={"/categoria/remera"}>Remeras</Link>
        <Link to={"/categoria/pantalon"}>Pantalones</Link>
        <Link to={"/categoria/campera"}>Camperas</Link>
        <Link to={"/cart"}>
          <CartWidget />
          <span className={cantidadTotalItem() !== 0 ? "itemCount" : "none"}>
            {cantidadTotalItem() !== 0 && cantidadTotalItem()}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
