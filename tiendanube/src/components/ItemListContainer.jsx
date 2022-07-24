import ItemCount from "./ItemCount";

const titleStyle = {
    color: 'white',
    background: "blue",
    textAlign: "center",
    marginTop: "2rem",
    padding: "1rem"
  };

const ItemListContainer=(props)=>{
    return(
      <>
        <h2 style={titleStyle}>{props.saludo}</h2>
        <ItemCount stock={5} initial={1} /> 
      </>
    )
    
}

export default ItemListContainer;