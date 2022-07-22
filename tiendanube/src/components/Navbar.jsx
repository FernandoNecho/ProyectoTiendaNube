import React from "react";
import CartWidget from "./CartWidget";
import Title from "./Title";

const Navbar = ()=>{
    return(
        <>
            <Title/>
            <div className="menu">
                <CartWidget/>
                <a href="#">Home</a>
                <a href="#">Remeras</a>
                <a href="#">Pantalones</a>
                <a href="#">Camperas</a>
                <a href="#">Contacto</a>
            </div>
        </>
    )
}

export default Navbar