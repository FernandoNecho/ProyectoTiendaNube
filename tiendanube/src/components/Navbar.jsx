import React from "react";
import CartWidget from "./CartWidget";
import Title from "./Title";
import { Link } from "react-router-dom";

const Navbar = ()=>{
    return(   
        <div className="menu">
            <div className="buyCart">
                <Title/>
                <CartWidget/>
            </div>
            <div className="menuRef">
                <Link to={"/"} className="pepe">Home</Link>
                <Link to={"/categoria/remera"}>Remeras</Link>
                <Link to={"/categoria/pantalon"}>Pantalones</Link>
                <Link to={"/categoria/campera"}>Camperas</Link>
                <Link to={"/test"}>Contacto</Link>
            </div>               
        </div>    
    )
}

export default Navbar