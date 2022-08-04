import { Link } from "react-router-dom";

 export default function Logo(props){
    return(
        <>           
            <Link to={"/"}><img src={props.src} className="logo" alt="logo"></img></Link>
        </>
    )
 }