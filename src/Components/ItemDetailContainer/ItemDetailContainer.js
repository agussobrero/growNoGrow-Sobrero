import React, {useEffect, useState} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import dataProduct from "../Data/dataProduct";

const ItemDetailContainer = ()=> {

    const [product, setProduct] = useState({});

    const getProduct = () =>{
        return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve (dataProduct.product)
        }, 2000)
        })
    }

    useEffect ( () => {
        getProduct().then ((result) => {
        setProduct(result)
    })
    },[])

    return (
    <>
        <ItemDetail data={product}/>
    </>
    )
}

export default ItemDetailContainer;