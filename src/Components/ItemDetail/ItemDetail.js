import React from "react";
import "../Card/Card"

const ItemDetail = (props)=> {
    
    const {data} = props
    const {id, categorie, prod, size, price, stock, url, description} = data

    return (
        <div className="card">
            <div key={id}>
                    <img src={url} alt="imgProd" className="img-card"></img>
                    <h2>{prod}</h2>
                    <p>Categoria: {categorie}</p>
                    <p>Tamaño: {size}</p>
                    <p>Precio: {price}</p>
                    <p>Stock: {stock}</p>
                    <p>Description: {description}</p>
                </div>
        </div>
    )
}

export default ItemDetail;