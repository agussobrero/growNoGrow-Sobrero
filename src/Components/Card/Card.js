import React from "react";
import "./Card.css";
import {Link} from "react-router-dom";


const Card = (props)=> {
    const {data} = props
    // eslint-disable-next-line
    const {id, category, prod, size, price, url} = data

    return(
        <div>
            <div className="card">
                <div key={id}>
                    <img src={url} alt="imgProd" className="img-card"></img>
                    <h2>{prod}</h2>
                    <p>Categoria: {category}</p>
                    <p>Tamaño: {size}</p>
                    <p>Precio: {price}</p>
                    <Link to={`/product/${id}`}>
                        <button className="btn-card-card">Ver mas detalles</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Card