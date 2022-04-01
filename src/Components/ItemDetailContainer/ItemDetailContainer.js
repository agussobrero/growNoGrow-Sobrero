import React, {useEffect, useState} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import DataProduct from "../Data/DataProduct";

const ItemDetailContainer = ()=> {

    const [product, setProduct] = useState({});

    const getProduct = () =>{
        return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve (DataProduct.product)
        }, 2000)
        })
    }

    useEffect ( () => {
        getProduct().then ((result) => {
        setProduct(result)
    })
    },[])
    console.log(product)

    return (
    <>
        <ItemDetail data={product}/>
    </>
    )
}

export default ItemDetailContainer;