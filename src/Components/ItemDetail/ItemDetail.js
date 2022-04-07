import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../Data/data";

const ItemDetail = ()=> {
    
    const {id} = useParams({})
    const [product, setProduct] = useState({})

    const dataProducts= data.productsList;

    useEffect( ()=>{
        selectProductId(dataProducts, id)
    },[id])
    
    const selectProductId = (array, id) =>{
        array.forEach( (product)=>{
                if(product.id == id) {
                    return(
                        setProduct(product)
                    )
                }
            })
    }

    return (
        <div className="card">
            <div key={product.id}>
                    <img src={product.url} alt="imgProd" className="img-card"></img>
                    <h2>{product.prod}</h2>
                    <p>Categoria: {product.category}</p>
                    <p>Tamaño: {product.size}</p>
                    <p>Precio: {product.price}</p>
                    <p>Stock: {product.stock}</p>
                    <p>Description: {product.description}</p>
                </div>
        </div>
    )
}

export default ItemDetail;