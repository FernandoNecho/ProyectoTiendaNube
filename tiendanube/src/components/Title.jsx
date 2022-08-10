import React from "react";
import CartWidget from "./CartWidget";
import Logo from "./Logo";
import { Link } from "react-router-dom";

import { useCartContext } from "./CartContex";

 const Title=()=>{

    const { cantidadTotalItem } = useCartContext();

    return(
        <header className="buyCart">
            <Logo src={"../assets/cloud.png"}/>
            <Link to={"/"} className="linkTitle"><h1 className="title">Tienda Nube</h1></Link>
            <Link to={"/cart" } className="itemLink">
                <CartWidget /><span className={(cantidadTotalItem() !== 0)? "itemCount": "none"}>{ cantidadTotalItem() !== 0 && cantidadTotalItem()  }</span>
                
            </Link>
        </header>
        
    )
}


export default Title;