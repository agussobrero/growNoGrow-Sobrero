import React from "react";
import "./MainCard.css";
import ItemCount from "../ItemCount/ItemCount";

const MainCard = (props)=> {
    const {product, brand, price, stock} = props;

    return(
        <div>
            <div className="card">
                <div className="div-starContainer"><img 
                src="./starEffect2.jpeg" 
                alt="starIcon" 
                className="starIcon"
                ></img>
                </div>
                <h2>{product}</h2>
                <p>Marca: {brand}</p>
                <p>Precio: {price}</p>
                <ItemCount stock={stock}/>
            </div>
        </div>
    )
}

export default MainCard