const titleStyle = {
    color: 'white',
    background: "blue",
    textAlign: "center",
    marginTop: "2rem",
    padding: "1rem"
  };

const ItemListContainer=(props)=>{
    return(
    <h2 style={titleStyle}>{props.saludo}</h2>
    )
    
}

export default ItemListContainer;