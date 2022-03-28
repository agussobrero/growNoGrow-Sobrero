import React from "react";
import "./Card.css";
import ItemCount from "../ItemCount/ItemCount";

const Card = (props)=> {
    const {data} = props
    // eslint-disable-next-line
    const {id, categorie, prod, size, price, stock, url, description} = data

    return(
        <div>
            <div className="card">
{/*                 <div className="div-starContainer">
                    <img src="./starEffect2.jpeg" alt="starIcon" className="starIcon"></img>
                </div> */}
                <div key={id}>
                    <img src={url} alt="imgProd" className="img-card"></img>
                    <h2>{prod}</h2>
                    <p>Categoria: {categorie}</p>
                    <p>Tamaño: {size}</p>
                    <p>Precio: {price}</p>
                    <button>Ver mas detalles</button>
                </div>
                <ItemCount stock={stock}/>
            </div>
        </div>
    )
}

export default Card