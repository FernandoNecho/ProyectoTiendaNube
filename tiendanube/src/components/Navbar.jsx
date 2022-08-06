import React from "react";
import Title from "./Title";
import { Link } from "react-router-dom";


const Navbar = ()=>{
    return(   
        <div className="menu">           
            <Title/>         
            <div className="menuRef">
                <Link to={"/"} className="pepe">Home</Link>
                <Link to={"/categoria/remera"}>Remeras</Link>
                <Link to={"/categoria/pantalon"}>Pantalones</Link>
                <Link to={"/categoria/campera"}>Camperas</Link>
                <Link to={"/card"}>Contacto</Link>
            </div>               
        </div>    
    )
}

export default Navbar