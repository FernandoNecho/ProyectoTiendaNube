import React from "react";
import CartWidget from "./CartWidget";
import Logo from "./Logo";
import { Link } from "react-router-dom";

 const Title=()=>{
    return(
        <header className="buyCart">
            <Logo src={"../assets/cloud.png"}/>
            <Link to={"/"} className="linkTitle"><h1 className="title">Tienda Nube</h1></Link>
            <CartWidget/>
        </header>
        
    )
}


export default Title;