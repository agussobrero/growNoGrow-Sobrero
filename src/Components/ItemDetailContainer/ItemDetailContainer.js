import React, {useEffect, useState} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
/* import dataProduct from "../Data/dataProduct"; */
import db from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const ItemDetailContainer = ()=> {

    const [products, setProducts] = useState({});

    const getProducts = async () =>{
        const productCollection = collection(db, "productsList")
        const productsSnapshot = await getDocs(productCollection)
        const dataProducts = productsSnapshot.docs.map((doc)=>{
            let product = doc.data()
            product.id = doc.id
            return product
        })
        console.log("dataProducts: ", dataProducts)
        return dataProducts
    }  
    
    /*  const getProduct = () =>{
        return new Promise ((resolve, reject)=>{
            setTimeout(()=>{
            resolve (dataProduct.product)
        }, 2000)
    })
} */
    console.log("products: ", products)

    useEffect ( () => {
        getProducts().then ((result) => {
            setProducts(result)
            console.log("result: ", result)
        })
    })
    return (
        <ItemDetail data={products}/>
        )
}

export default ItemDetailContainer;