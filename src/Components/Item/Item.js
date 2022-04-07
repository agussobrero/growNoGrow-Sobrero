import React from "react";

const Item = (props) =>{

    const {data} = props
    const {id, category, prod, size, price, stock, url, description} = data

    return (
        <div>
            <div key={id}>
                    <h2>{prod}</h2>
                    <img src={url} alt="imgProd" className="img-card"></img>
                    <p>Categoria: {category}</p>
                    <p>Tamaño: {size}</p>
                    <p>Precio: {price}</p>
                    <p>Stock: {stock}</p>
                    <p>Description: {description}</p>
                </div>
        </div>
    )
}

export default Item;